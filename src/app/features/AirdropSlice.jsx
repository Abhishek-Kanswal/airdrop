import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../supabaseClient";

export const fetchAirdropData = createAsyncThunk(
  "airdrop/fetchAirdropData",
  async (_, thunkAPI) => {
    try {
      const { data: airdrops, error } = await supabase
        .from("airdrop_public_list")
        .select("*");

      if (error) throw new Error(error.message);

      const updatedAirdrops = await Promise.all(
        airdrops.map(async (airdrop) => {
          const logoFilename = airdrop.logo || "monad.png";

          const { data: signedUrlData, error: logoError } =
            await supabase.storage
              .from("pubilcairdropimage")
              .createSignedUrl(logoFilename, 60 * 60 * 24 * 7); // 7 days

          if (logoError || !signedUrlData?.signedUrl) {
            return { ...airdrop, logoObjectUrl: null };
          }

          // Fetch and convert to object URL
          try {
            const response = await fetch(signedUrlData.signedUrl);
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);

            return {
              ...airdrop,
              logoObjectUrl: objectUrl, // memory-cached
            };
          } catch (fetchErr) {
            console.error("Image fetch error:", fetchErr);
            return { ...airdrop, logoObjectUrl: null };
          }
        })
      );

      return updatedAirdrops;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Initial Redux state
const initialState = {
  value: [],
  loading: false,
  error: null,
};

// Redux slice
const airdropSlice = createSlice({
  name: "airdrop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirdropData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAirdropData.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(fetchAirdropData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default airdropSlice.reducer;

import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const useSupabaseUser = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setError(error);
        setUserData(null);
      } else {
        setUserData(data.user);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  return { userData, loading, error };
};
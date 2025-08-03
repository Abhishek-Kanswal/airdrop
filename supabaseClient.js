import { createClient } from "@supabase/supabase-js";

const superBaseURL = import.meta.env.VITE_SUPABASE_URL;
const superBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(superBaseURL,superBaseAnonKey);
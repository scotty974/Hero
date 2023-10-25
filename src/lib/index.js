// place files you want to import through the `$lib` alias in this folder.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://evuljqtfbkofukloojap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2dWxqcXRmYmtvZnVrbG9vamFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNjQxMDcsImV4cCI6MjAxMzg0MDEwN30.WTFMS8_W3Eah4o7dCByWW6ySQqgHD8rTIacKC8Dj5tU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

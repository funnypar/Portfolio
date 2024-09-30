import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wmsrxngcaovstnkpsprb.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtc3J4bmdjYW92c3Rua3BzcHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2ODQ0MTgsImV4cCI6MjA0MzI2MDQxOH0.BXsOJMzfALVmwog5lZ0MNPpxUmxgLgwTijIYvCtTwQo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

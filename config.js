// config.js
const SUPABASE_URL = "https://uxbxvndsjpwudtcamppi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Ynh2bmRzanB3dWR0Y2FtcHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMDk4OTIsImV4cCI6MjA4Nzc4NTg5Mn0.4U3fv3FzKhWFqGlsVkXBbs-Fn8IrB0UrRDuigWj6elI";

// Check if library is loaded before initializing
if (typeof supabase === 'undefined') {
    console.error("Supabase library not found! Ensure the CDN script is placed above config.js.");
} else {
    // Create the client and attach it to the window object for global access
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nhqrmplumatsmrdjhzzm.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ocXJtcGx1bWF0c21yZGpoenptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0OTM2NDQsImV4cCI6MjAzMzA2OTY0NH0.jIihEDcJfP2ZmQEtcDZQyWFqTbdPSDoJ0OlQgc-Q6oc';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

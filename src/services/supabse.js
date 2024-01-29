
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://grsblasqhllrhynvvdvk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdyc2JsYXNxaGxscmh5bnZ2ZHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMTkwOTMsImV4cCI6MjAyMDg5NTA5M30.F71TEBUzftHhcQS-EZOugQtyFwRU-iYX-5UevEuHviA'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
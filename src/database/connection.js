import { createClient } from "@supabase/supabase-js"

const Supabase = createClient(
    'https://boafkofbkumnctyrvbns.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYWZrb2Zia3VtbmN0eXJ2Ym5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzgxNzAsImV4cCI6MjAyNzk1NDE3MH0.NMPDZgTp6ARBD11r177bLA7IaG7j-Fz_ldVF0WkcAFk'
)

export default Supabase
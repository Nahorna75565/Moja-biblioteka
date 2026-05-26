import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
'https://pxqjwmymeqdqeazghowl.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cWp3bXltZXFkcWVhemdob3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MjY1MjYsImV4cCI6MjA5NDMwMjUyNn0.M7aU_OE9iMtR65XxpRkpJgm6oFrh7CcfZq6fnMvH_6I'
)

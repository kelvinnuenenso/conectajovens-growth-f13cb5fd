-- Enable RLS on leads table (if not already enabled)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert leads (from landing page)
CREATE POLICY "allow_insert_anonymous_leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Allow anonymous users to select leads (for CRM to read)
CREATE POLICY "allow_select_anonymous_leads" 
ON public.leads 
FOR SELECT 
USING (true);
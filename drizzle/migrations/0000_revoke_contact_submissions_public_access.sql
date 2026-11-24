REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  local_entrega TEXT NOT NULL,
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

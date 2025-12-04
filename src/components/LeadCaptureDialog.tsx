import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone muito longo"),
  contribution: z.string().max(500, "Resposta muito longa").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureDialog = ({ open, onOpenChange }: LeadCaptureDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      contribution: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // 1. Create contact
      const { data: contact, error: contactError } = await supabase
        .from("contacts")
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          metadata: data.contribution ? { contribution: data.contribution } : {},
        })
        .select("id")
        .single();

      if (contactError) {
        console.error("Error creating contact:", contactError);
        throw new Error("Erro ao criar contato");
      }

      // 2. Create lead with source info
      const { error: leadError } = await supabase
        .from("leads")
        .insert({
          contact_id: contact.id,
          status: "new",
          metadata: {
            source_name: "Landpage da Jovens de Networking",
            contribution: data.contribution || null,
          },
          initial_medium: "landpage",
          initial_campaign: "jovens-de-networking",
        });

      if (leadError) {
        console.error("Error creating lead:", leadError);
        throw new Error("Erro ao criar lead");
      }

      toast({
        title: "Inscrição realizada! 🎉",
        description: "Em breve entraremos em contato com você.",
      });

      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Entre para a Comunidade
          </DialogTitle>
          <DialogDescription className="text-foreground/70">
            Preencha seus dados e faça parte da geração que cresce junto.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome" 
                      className="bg-background border-border" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="bg-background border-border" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      className="bg-background border-border" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>O que você faz e como pode contribuir com a comunidade?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Conte um pouco sobre você... (opcional)"
                      className="bg-background border-border resize-none"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero Fazer Parte"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;

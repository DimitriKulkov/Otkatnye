import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Extend the contact request schema with specific validation
const formSchema = insertContactRequestSchema.extend({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  comments: z.string().min(10, { message: "Введите ваш вопрос (не менее 10 символов)" }),
});

// Infer the form values type from the schema
type FormValues = z.infer<typeof formSchema>;

interface QuestionDialogProps {
  triggerClassName?: string;
  children: React.ReactNode;
}

const QuestionDialog = ({ triggerClassName, children }: QuestionDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comments: "",
      service: null,
      requestType: "question",
    },
  });

  // Submit handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || undefined,
          comments: data.comments,
          requestType: "question",
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Вопрос отправлен",
          description: "Мы ответим вам в ближайшее время",
        });
        form.reset();
        setOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка при отправке запроса");
      }
    } catch (error) {
      console.error("Error submitting question form:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить вопрос. Пожалуйста, попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className={triggerClassName}>{children}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#3C4D34]">Задать вопрос</DialogTitle>
          <DialogDescription className="text-center px-4">
            Заполните форму и мы ответим вам в ближайшее время
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван Иванов" {...field} />
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
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (XXX) XXX-XX-XX" {...field} />
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
                  <FormLabel>Email (необязательно)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="email@example.com" 
                      value={field.value || ""} 
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш вопрос</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Напишите ваш вопрос здесь..." 
                      className="resize-none min-h-[120px]"
                      value={field.value || ""} 
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-[#3C4D34] hover:bg-[#2E3B28]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить вопрос"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
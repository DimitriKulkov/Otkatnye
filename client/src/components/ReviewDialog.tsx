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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Extend the contact request schema with specific validation
const formSchema = insertContactRequestSchema.extend({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  service: z.string().min(1, { message: "Выберите тип услуги" }),
  comments: z.string().min(20, { message: "Введите ваш отзыв (не менее 20 символов)" }),
  rating: z.string().min(1, { message: "Выберите оценку" }),
});

// Infer the form values type from the schema
type FormValues = z.infer<typeof formSchema> & { rating: string };

interface ReviewDialogProps {
  triggerClassName?: string;
  children: React.ReactNode;
}

const ReviewDialog = ({ triggerClassName, children }: ReviewDialogProps) => {
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
      service: "",
      comments: "",
      requestType: "review",
      rating: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare comments field to include rating
      const reviewText = `Оценка: ${data.rating}/5\n\n${data.comments}`;
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || undefined,
          service: data.service,
          comments: reviewText,
          requestType: "review",
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Отзыв отправлен",
          description: "Спасибо за ваш отзыв! Он будет опубликован после модерации.",
        });
        form.reset();
        setOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка при отправке отзыва");
      }
    } catch (error) {
      console.error("Error submitting review form:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить отзыв. Пожалуйста, попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#3C4D34]">Оставить отзыв</DialogTitle>
          <DialogDescription className="text-center px-4">
            Поделитесь своим мнением о нашей работе
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
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Услуга</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип услуги" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fence">Забор</SelectItem>
                      <SelectItem value="canopy">Навес</SelectItem>
                      <SelectItem value="gate">Ворота</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Оценка</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите оценку" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">5 - Отлично</SelectItem>
                      <SelectItem value="4">4 - Хорошо</SelectItem>
                      <SelectItem value="3">3 - Удовлетворительно</SelectItem>
                      <SelectItem value="2">2 - Плохо</SelectItem>
                      <SelectItem value="1">1 - Очень плохо</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш отзыв</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Расскажите о вашем опыте работы с нами..." 
                      className="resize-none min-h-[150px]"
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
              {isSubmitting ? "Отправка..." : "Отправить отзыв"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
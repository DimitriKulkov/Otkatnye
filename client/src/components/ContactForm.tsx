import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }).optional().or(z.literal("")),
  service: z.string({ required_error: "Выберите услугу" }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      comments: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена",
        description: "Спасибо! Наш менеджер свяжется с вами в течение 30 минут.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message || "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data);
  }

  return (
    <section id="contact" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#556B2F] mb-12">Связаться с нами</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#556B2F] mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#556B2F] mb-3">Телефоны</h4>
                <div className="space-y-2">
                  <p><a href="tel:+78953720542" className="text-gray-800 hover:text-[#556B2F]">+7 (895) 372-05-42</a></p>
                  <p><a href="tel:+78902939666" className="text-gray-800 hover:text-[#556B2F]">+7 (890) 293-96-66</a></p>
                  <p><a href="tel:+78915869282" className="text-gray-800 hover:text-[#556B2F]">+7 (891) 586-92-82</a></p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#556B2F] mb-3">Email</h4>
                <p><a href="mailto:zaborstroy68@yandex.ru" className="text-gray-800 hover:text-[#556B2F]">zaborstroy68@yandex.ru</a></p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#556B2F] mb-3">Режим работы</h4>
                <p className="text-gray-800">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-800">Сб: 10:00 - 16:00</p>
                <p className="text-gray-800">Вс: выходной</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#556B2F] mb-6">Форма расчета стоимости</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-medium">Имя</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Введите ваше имя" 
                          {...field} 
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
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
                      <FormLabel className="text-gray-800 font-medium">Телефон</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+7 (___) ___-__-__" 
                          {...field} 
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
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
                      <FormLabel className="text-gray-800 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="example@domain.com" 
                          {...field} 
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
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
                      <FormLabel className="text-gray-800 font-medium">Тип услуги</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="w-full px-4 py-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                          >
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fence">Заборы</SelectItem>
                          <SelectItem value="canopy">Навесы</SelectItem>
                          <SelectItem value="gate">Ворота и калитки</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
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
                      <FormLabel className="text-gray-800 font-medium">Комментарии</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Опишите ваш проект или укажите дополнительные требования" 
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F] h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#556B2F] hover:bg-[#455A1F] text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                  disabled={isPending}
                >
                  {isPending ? "Отправка..." : "Рассчитать стоимость"}
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

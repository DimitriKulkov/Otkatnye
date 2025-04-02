import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

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
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("79158692829");
  
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
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#EDE5D6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3C4D34] mb-4">Связаться с нами</h2>
          <div className="h-1 w-20 bg-[#A1B189] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Оставьте заявку, и наш специалист свяжется с вами для проведения бесплатного замера и расчета стоимости</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#A1B189]">
            <h3 className="text-2xl font-bold text-[#3C4D34] mb-6">Контактная информация</h3>
            
            <div className="space-y-8">
              <div className="bg-[#F8F7F4] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#3C4D34] mb-4">Телефоны</h4>
                <p className="text-sm text-gray-600 mb-3">Выберите номер для связи через мессенджеры</p>
                
                <div className="space-y-3">
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79537205420" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79537205420")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "79537205420"} readOnly className="mr-3" />
                    <a href="tel:79537205420" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (953) 720-54-20</a>
                  </div>
                  
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79029396664" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79029396664")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "79029396664"} readOnly className="mr-3" />
                    <a href="tel:79029396664" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (902) 939-66-64</a>
                  </div>
                  
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79158692829" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79158692829")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "78915869282"} readOnly className="mr-3" />
                    <a href="tel:79158692829" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (915) 869-28-29</a>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-[#E8EDE2] rounded-lg text-sm text-[#3C4D34] border border-[#A1B189]/30">
                  Выбранный номер: <span className="font-semibold">{selectedPhoneNumber}</span>
                </div>
                
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`https://wa.me/${selectedPhoneNumber.replace(/^\+/, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-sm w-full sm:w-auto"
                  >
                    <FaWhatsapp size={22} />
                    <span>WhatsApp</span>
                  </a>
                
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A1B189] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#3C4D34]">Email</h4>
                  <p><a href="mailto:zaborstroy68@yandex.com" className="text-gray-700 hover:text-[#556B2F]">zaborstroy68@yandex.com</a></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A1B189] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#3C4D34]">Режим работы</h4>
                  <p className="text-gray-700">Пн-Вс: 9:00 - 18:00</p>
                  <p className="text-gray-700">Выезд на замер: 7 дней в неделю</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#A1B189]">
            <h3 className="text-2xl font-bold text-[#3C4D34] mb-6">Рассчитать стоимость</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#3C4D34] font-medium">Имя</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Введите ваше имя" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1B189] focus:border-transparent bg-[#F8F7F4]"
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
                      <FormLabel className="text-[#3C4D34] font-medium">Телефон</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+7 (___) ___-__-__" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1B189] focus:border-transparent bg-[#F8F7F4]"
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
                      <FormLabel className="text-[#3C4D34] font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="example@domain.com" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1B189] focus:border-transparent bg-[#F8F7F4]"
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
                      <FormLabel className="text-[#3C4D34] font-medium">Тип услуги</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1B189] focus:border-transparent bg-[#F8F7F4]"
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
                      <FormLabel className="text-[#3C4D34] font-medium">Комментарии</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Опишите ваш проект или укажите дополнительные требования" 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1B189] focus:border-transparent bg-[#F8F7F4] h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#3C4D34] hover:bg-[#526B47] text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out shadow-sm"
                  disabled={isPending}
                >
                  {isPending ? "Отправка..." : "Рассчитать стоимость"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
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

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
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("+78953720542");
  
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
                <p className="text-sm text-gray-600 mb-2">Выберите номер для связи через мессенджеры</p>
                <div className="space-y-2">
                  <div 
                    className={`flex items-center cursor-pointer ${selectedPhoneNumber === "+78953720542" ? "text-[#556B2F] font-medium" : "text-gray-800"}`}
                    onClick={() => setSelectedPhoneNumber("+78953720542")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "+78953720542"} readOnly className="mr-2" />
                    <a href="tel:+78953720542" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (895) 372-05-42</a>
                  </div>
                  <div 
                    className={`flex items-center cursor-pointer ${selectedPhoneNumber === "+78902939666" ? "text-[#556B2F] font-medium" : "text-gray-800"}`}
                    onClick={() => setSelectedPhoneNumber("+78902939666")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "+78902939666"} readOnly className="mr-2" />
                    <a href="tel:+78902939666" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (890) 293-96-66</a>
                  </div>
                  <div 
                    className={`flex items-center cursor-pointer ${selectedPhoneNumber === "+78915869282" ? "text-[#556B2F] font-medium" : "text-gray-800"}`}
                    onClick={() => setSelectedPhoneNumber("+78915869282")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "+78915869282"} readOnly className="mr-2" />
                    <a href="tel:+78915869282" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (891) 586-92-82</a>
                  </div>
                </div>
                
                <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm text-gray-700">
                  Выбранный номер: <span className="font-medium">{selectedPhoneNumber}</span>
                </div>
                
                <div className="mt-4 flex space-x-4">
                  <a 
                    href={`https://wa.me/${selectedPhoneNumber.replace(/^\+/, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
                  >
                    <FaWhatsapp size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href={`https://t.me/${selectedPhoneNumber.replace(/^\+/, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
                  >
                    <FaTelegram size={20} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#556B2F] mb-3">Email</h4>
                <p><a href="mailto:zaborstroy68@yandex.com" className="text-gray-800 hover:text-[#556B2F]">zaborstroy68@yandex.com</a></p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#556B2F] mb-3">Режим работы</h4>
                <p className="text-gray-800">Пн-Вс: 9:00 - 18:00</p>
                <p className="text-gray-800">Выезд на замер: 7 дней в неделю</p>
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

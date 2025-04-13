import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fenceTypes, canopyTypes, gateTypes } from "@/data";

// Extend the contact request schema with specific validation
const formSchema = insertContactRequestSchema.extend({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  service: z.string().min(1, { message: "Выберите тип услуги" }),
  serviceType: z.string().optional(),
  length: z.string().optional(),
  height: z.string().optional(),
  address: z.string().optional(),
});

// Infer the form values type from the schema
type FormValues = z.infer<typeof formSchema>;

interface CalculatorDialogProps {
  triggerClassName?: string;
  children: React.ReactNode;
}

const CalculatorDialog = ({ triggerClassName, children }: CalculatorDialogProps) => {
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
      serviceType: "",
      length: "",
      height: "",
      address: "",
      comments: "",
      requestType: "cost",
    },
  });

  // Get selected service to dynamically show relevant fields
  const selectedService = form.watch("service");

  // Get service type options based on selected service
  const getServiceTypeOptions = () => {
    if (selectedService === "fence") {
      return fenceTypes;
    } else if (selectedService === "canopy") {
      return canopyTypes;
    } else if (selectedService === "gate") {
      return gateTypes;
    }
    return [];
  };

  // Submit handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare comments field to include all calculator data
      const calculatorDetails = `
Тип услуги: ${data.service === "fence" ? "Забор" : data.service === "canopy" ? "Навес" : "Ворота"}
${data.serviceType ? `Тип: ${data.serviceType}` : ""}
${data.length ? `Длина: ${data.length} м` : ""}
${data.height ? `Высота: ${data.height} м` : ""}
${data.address ? `Адрес: ${data.address}` : ""}
${data.comments ? `Дополнительно: ${data.comments}` : ""}
      `.trim();
      
      const response = await fetch("https://xn--80ahflg0c8g.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || undefined, // Make sure email is undefined if empty
          service: data.service,
          comments: calculatorDetails,
          requestType: "cost",
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Запрос отправлен",
          description: "Мы свяжемся с вами в ближайшее время для расчета стоимости",
        });
        form.reset();
        setOpen(false);
      } else {
        const error = await response.json();
        console.log(error)
        throw new Error(error.message || "Ошибка при отправке запроса");
      }
    } catch (error) {
      console.error("Error submitting calculator form:", error);
      let description = "Не удалось отправить запрос. Пожалуйста, попробуйте еще раз.";
      if (error instanceof Error) {
          description = error.message
      }
      toast({
        title: "Ошибка",
        description: description,
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
          <DialogTitle className="text-center text-2xl font-bold text-[#3C4D34]">Расчет стоимости</DialogTitle>
          <DialogDescription className="text-center px-4">
            Заполните форму и мы свяжемся с вами для расчета точной стоимости
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
            
            {selectedService && (
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Тип {
                      selectedService === "fence" ? "забора" : 
                      selectedService === "canopy" ? "навеса" : "ворот"
                    }</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={`Выберите тип ${
                            selectedService === "fence" ? "забора" : 
                            selectedService === "canopy" ? "навеса" : "ворот"
                          }`} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getServiceTypeOptions().map((option) => (
                          <SelectItem key={option.title} value={option.title}>{option.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            {selectedService && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Длина (м)</FormLabel>
                      <FormControl>
                        <Input placeholder="0" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {selectedService !== "canopy" && (
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Высота (м)</FormLabel>
                        <FormControl>
                          <Input placeholder="0" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            )}
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Адрес</FormLabel>
                  <FormControl>
                    <Input placeholder="Москва, ул. Примерная, д. 123" {...field} />
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
                  <FormLabel>Дополнительная информация</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Укажите любые дополнительные пожелания или детали" 
                      className="resize-none"
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
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorDialog;

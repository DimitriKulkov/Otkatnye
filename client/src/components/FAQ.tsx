import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { faqItems } from "@/data";
import QuestionDialog from "./QuestionDialog";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3C4D34] mb-4">Часто задаваемые вопросы</h2>
          <div className="h-1 w-20 bg-[#A1B189] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ответы на самые распространенные вопросы о наших услугах по установке заборов, навесов и ворот
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border border-[#E8EDE2] rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger 
                  className="p-4 text-left hover:bg-[#FAFBF9] font-semibold text-[#3C4D34] focus:outline-none"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 border-t border-[#E8EDE2]">
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">Не нашли ответ на свой вопрос?</p>
            
            <QuestionDialog>
              <Button className="bg-[#3C4D34] hover:bg-[#2E3B28] flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Задать вопрос
              </Button>
            </QuestionDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

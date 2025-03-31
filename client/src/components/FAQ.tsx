import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#556B2F] mb-12">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border border-[#D3D3D3] rounded-lg overflow-hidden"
              >
                <AccordionTrigger 
                  className="p-4 text-left bg-[#F5E6D3] hover:bg-[#F5E6D3]/80 font-bold text-[#556B2F] focus:outline-none"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-white border-t border-[#D3D3D3]">
                  <p className="text-gray-700">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

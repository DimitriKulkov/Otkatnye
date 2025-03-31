import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#3C4D34] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Бесплатный выезд на замер</h2>
          <div className="h-1 w-20 bg-[#C5D5A7] mx-auto mb-6"></div>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Получите точный расчет стоимости вашего проекта. Наш специалист приедет в удобное для вас время 
            и предложит оптимальное решение без обязательств с вашей стороны.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#3C4D34] hover:text-[#2E3B28] text-base group transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Заказать замер 
            <MoveRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

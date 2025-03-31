import { Button } from "@/components/ui/button";
import { Calculator, MousePointerClick } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px] md:h-[600px]" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618090584176-7132b9911657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Качественные заборы, навесы и ворота в Москве и Московской области
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 md:mb-8">
            Профессиональная установка с гарантией. Бесплатный выезд для замера.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
            <Button 
              size="lg"
              className="bg-[#3C4D34] hover:bg-[#2E3B28] text-white text-base w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MousePointerClick className="h-4 w-4 mr-2" />
              Бесплатный замер
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="bg-white hover:bg-[#F8F7F4] text-[#3C4D34] border-[#3C4D34] text-base flex items-center justify-center gap-2 w-full sm:w-auto"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calculator className="h-4 w-4" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

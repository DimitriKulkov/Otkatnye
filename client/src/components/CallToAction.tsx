import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 bg-[#556B2F] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Бесплатный выезд на замер</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Получите точный расчет стоимости вашего проекта. Наш специалист приедет в удобное для вас время и предложит оптимальное решение.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#556B2F] hover:text-[#455A1F] text-base"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Заказать замер
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-base"
            asChild
          >
            <a href="tel:+78953720542">Позвонить сейчас</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

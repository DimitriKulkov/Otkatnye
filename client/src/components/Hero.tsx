import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[600px]" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618090584176-7132b9911657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Качественные заборы, навесы и ворота в Воронеже
          </h1>
          <p className="text-xl text-white mb-8">
            Профессиональная установка с гарантией. Бесплатный выезд для замера.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#556B2F] hover:bg-[#455A1F] text-white text-base"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Бесплатный замер
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-white hover:bg-gray-100 text-[#556B2F] border-[#556B2F] text-base"
              asChild
            >
              <a href="tel:+78953720542">Позвонить сейчас</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card, CardContent } from "@/components/ui/card";
import { fenceTypes, canopyTypes, gateTypes } from "@/data";

const ServiceCard = ({ title, description, price, image }: { title: string; description: string; price: string; image: string }) => (
  <Card className="overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#F5E6D3] border-none">
    <div className="w-full h-40 sm:h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <CardContent className="p-3 sm:p-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#3C4D34] mb-1 sm:mb-2">{title}</h4>
      <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-4">{description}</p>
      <p className="font-bold text-[#FF9000] text-sm sm:text-base">{price}</p>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#3C4D34] mb-8 sm:mb-12">
          Наши <span className="text-[#FF9000]">услуги</span>
        </h2>
        
        {/* Fences Section */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#3C4D34] mb-4 sm:mb-6 border-l-4 border-[#FF9000] pl-3">Заборы</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {fenceTypes.map((fence, index) => (
              <ServiceCard 
                key={index} 
                title={fence.title} 
                description={fence.description} 
                price={fence.price} 
                image={fence.image} 
              />
            ))}
          </div>
        </div>
        
        {/* Canopies Section */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#3C4D34] mb-4 sm:mb-6 border-l-4 border-[#FF9000] pl-3">Навесы</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {canopyTypes.map((canopy, index) => (
              <ServiceCard 
                key={index} 
                title={canopy.title} 
                description={canopy.description} 
                price={canopy.price} 
                image={canopy.image} 
              />
            ))}
          </div>
        </div>
        
        {/* Gates Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#3C4D34] mb-4 sm:mb-6 border-l-4 border-[#FF9000] pl-3">Ворота и калитки</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {gateTypes.map((gate, index) => (
              <ServiceCard 
                key={index} 
                title={gate.title} 
                description={gate.description} 
                price={gate.price} 
                image={gate.image} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

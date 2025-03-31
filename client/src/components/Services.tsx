import { Card, CardContent } from "@/components/ui/card";
import { fenceTypes, canopyTypes, gateTypes } from "@/data";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#556B2F] mb-12">Наши услуги</h2>
        
        {/* Fences Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#556B2F] mb-6">Заборы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fenceTypes.map((fence, index) => (
              <Card key={index} className="overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#F5E6D3] border-none">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={fence.image} 
                    alt={fence.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#556B2F] mb-2">{fence.title}</h4>
                  <p className="text-gray-700 mb-4">{fence.description}</p>
                  <p className="font-bold text-[#556B2F]">{fence.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Canopies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#556B2F] mb-6">Навесы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canopyTypes.map((canopy, index) => (
              <Card key={index} className="overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#F5E6D3] border-none">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={canopy.image} 
                    alt={canopy.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#556B2F] mb-2">{canopy.title}</h4>
                  <p className="text-gray-700 mb-4">{canopy.description}</p>
                  <p className="font-bold text-[#556B2F]">{canopy.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Gates Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#556B2F] mb-6">Ворота и калитки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gateTypes.map((gate, index) => (
              <Card key={index} className="overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#F5E6D3] border-none">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={gate.image} 
                    alt={gate.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#556B2F] mb-2">{gate.title}</h4>
                  <p className="text-gray-700 mb-4">{gate.description}</p>
                  <p className="font-bold text-[#556B2F]">{gate.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

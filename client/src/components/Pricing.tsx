import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fenceTypes, canopyTypes, gateTypes, priceList } from "@/data";
import CalculatorDialog from "./CalculatorDialog";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

// Group price list items by category
const fencePrices = priceList.filter(item => 
  !item.service.includes("ворота") && 
  !item.service.includes("Калитки") && 
  !item.service.includes("Навесы") && 
  !item.service.includes("Автоматика")
);

const canopyPrices = priceList.filter(item => 
  item.service.includes("Навесы")
);

const gatePrices = priceList.filter(item => 
  item.service.includes("ворота") || 
  item.service.includes("Калитки") || 
  item.service.includes("Автоматика")
);

const PriceCard = ({ service, price }: { service: string; price: string }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border border-[#E8EDE2]">
    <CardContent className="p-6 flex justify-between items-center">
      <h3 className="text-lg font-semibold text-[#3C4D34]">{service}</h3>
      <p className="text-lg font-bold text-[#FF9000] bg-[#FFEDD5] px-3 py-1 rounded-full">
        {price}
      </p>
    </CardContent>
  </Card>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C4D34] mb-4">
            Наши <span className="text-[#FF9000]">цены</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Выберите категорию для просмотра детальной информации о стоимости наших услуг
          </p>
          
          <CalculatorDialog>
            <Button 
              className="bg-[#3C4D34] hover:bg-[#2E3B28] text-white"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Рассчитать индивидуальную стоимость
            </Button>
          </CalculatorDialog>
        </div>

        <Tabs defaultValue="fences" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 rounded-lg bg-[#F8F7F4] p-1">
            <TabsTrigger 
              value="fences" 
              className="rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
            >
              Заборы
            </TabsTrigger>
            <TabsTrigger 
              value="canopies"
              className="rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
            >
              Навесы
            </TabsTrigger>
            <TabsTrigger 
              value="gates"
              className="rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
            >
              Ворота и калитки
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="fences" className="mt-6">
            <div className="grid gap-4">
              {fencePrices.map((item, index) => (
                <PriceCard key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="canopies" className="mt-6">
            <div className="grid gap-4">
              {canopyPrices.map((item, index) => (
                <PriceCard key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gates" className="mt-6">
            <div className="grid gap-4">
              {gatePrices.map((item, index) => (
                <PriceCard key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="max-w-4xl mx-auto mt-10 bg-[#3C4D34]/5 border-none">
          <CardContent className="p-6 text-center">
            <p className="text-gray-700">Окончательная стоимость зависит от сложности проекта и выбранных материалов.</p>
            <p className="text-[#3C4D34] font-bold mt-2 text-lg">Выезд на замер — БЕСПЛАТНО!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;

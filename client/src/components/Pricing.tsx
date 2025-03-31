import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { priceList } from "@/data";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#556B2F] mb-12">Наши цены</h2>
        <Card className="max-w-4xl mx-auto bg-[#F5E6D3] rounded-lg overflow-hidden shadow-lg border-none">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#556B2F] text-white">
                <TableRow>
                  <TableHead className="px-6 py-4 text-left text-white font-bold">Услуга</TableHead>
                  <TableHead className="px-6 py-4 text-right text-white font-bold">Стоимость</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceList.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="border-b border-[#D3D3D3] hover:bg-[#F5E6D3]/70"
                  >
                    <TableCell className="px-6 py-4 text-gray-800">{item.service}</TableCell>
                    <TableCell className="px-6 py-4 text-right font-bold text-[#556B2F]">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <CardContent className="p-6 bg-[#D3D3D3]/20 text-center">
            <p className="text-gray-700">Окончательная стоимость зависит от сложности проекта и выбранных материалов.</p>
            <p className="text-[#556B2F] font-bold mt-2">Выезд на замер — БЕСПЛАТНО!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;

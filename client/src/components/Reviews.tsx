import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { reviews } from "@/data";

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#556B2F] mb-12">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden shadow-md border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 fill-current ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-gray-600">{review.rating.toFixed(1)}</p>
                </div>
                <div className="mb-4">
                  <img 
                    src={review.image} 
                    alt={`Проект ${review.author}`} 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex items-center">
                  <p className="font-bold text-gray-800">{review.author}</p>
                  <p className="ml-2 text-gray-500">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

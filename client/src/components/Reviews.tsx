import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import { reviews } from "@/data";
import ReviewDialog from "./ReviewDialog";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F6F8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3C4D34] mb-4">Отзывы наших клиентов</h2>
          <div className="h-1 w-20 bg-[#A1B189] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Узнайте, что говорят о нас наши клиенты, и почему они выбирают именно ПрофОград
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow border border-[#EDF1E7]">
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
                <p className="text-gray-700 mb-4 line-clamp-4">{review.text}</p>
                <div className="flex items-center">
                  <p className="font-semibold text-[#3C4D34]">{review.author}</p>
                  <p className="ml-2 text-gray-500">· {review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">Остались довольны нашей работой? Поделитесь своим мнением!</p>
          
          <ReviewDialog>
            <Button className="bg-[#3C4D34] hover:bg-[#2E3B28] flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Оставить отзыв
            </Button>
          </ReviewDialog>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

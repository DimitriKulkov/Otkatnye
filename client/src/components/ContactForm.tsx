import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("79158692829");

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#EDE5D6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3C4D34] mb-4">Связаться с нами</h2>
          <div className="h-1 w-20 bg-[#A1B189] mx-auto mb-4"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#A1B189]">
            <h3 className="text-2xl font-bold text-[#3C4D34] mb-6">Контактная информация</h3>
            
            <div className="space-y-8">
              <div className="bg-[#F8F7F4] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#3C4D34] mb-4">Телефоны</h4>
                <p className="text-sm text-gray-600 mb-3">Выберите номер для связи через мессенджеры</p>
                
                <div className="space-y-3">
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79537205420" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79537205420")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "79537205420"} readOnly className="mr-3" />
                    <a href="tel:79537205420" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (953) 720-54-20</a>
                  </div>
                  
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79029396664" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79029396664")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "79029396664"} readOnly className="mr-3" />
                    <a href="tel:79029396664" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (902) 939-66-64</a>
                  </div>
                  
                  <div 
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all ${selectedPhoneNumber === "79158692829" ? "bg-[#E8EDE2] text-[#3C4D34] font-medium" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedPhoneNumber("79158692829")}
                  >
                    <input type="radio" checked={selectedPhoneNumber === "78915869282"} readOnly className="mr-3" />
                    <a href="tel:79158692829" className="hover:text-[#556B2F]" onClick={(e) => e.stopPropagation()}>+7 (915) 869-28-29</a>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-[#E8EDE2] rounded-lg text-sm text-[#3C4D34] border border-[#A1B189]/30">
                  Выбранный номер: <span className="font-semibold">{selectedPhoneNumber}</span>
                </div>
                
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`https://wa.me/${selectedPhoneNumber.replace(/^\+/, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-sm w-full sm:w-auto"
                  >
                    <FaWhatsapp size={22} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A1B189] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#3C4D34]">Email</h4>
                  <p><a href="mailto:otckatnye.v@yandex.com" className="text-gray-700 hover:text-[#556B2F]">otckatnye.v@yandex.com</a></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A1B189] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#3C4D34]">Режим работы</h4>
                  <p className="text-gray-700">Пн-Вс: 9:00 - 18:00</p>
                  <p className="text-gray-700">Выезд на замер: 7 дней в неделю</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


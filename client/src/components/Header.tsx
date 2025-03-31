import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/assets/logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-[#F5F1E8] py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-14 w-auto" />
          <h1 className="ml-3 text-2xl font-bold text-[#3C4D34]">ПрофОград</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-[#3C4D34] hover:underline decoration-[#A1B189] underline-offset-4 font-medium transition-all">Услуги</a>
          <a href="#pricing" className="text-gray-700 hover:text-[#3C4D34] hover:underline decoration-[#A1B189] underline-offset-4 font-medium transition-all">Цены</a>
          <a href="#installation" className="text-gray-700 hover:text-[#3C4D34] hover:underline decoration-[#A1B189] underline-offset-4 font-medium transition-all">Этапы работ</a>
          <a href="#reviews" className="text-gray-700 hover:text-[#3C4D34] hover:underline decoration-[#A1B189] underline-offset-4 font-medium transition-all">Отзывы</a>
          <a href="#faq" className="text-gray-700 hover:text-[#3C4D34] hover:underline decoration-[#A1B189] underline-offset-4 font-medium transition-all">Контакты</a>
        </div>
        <div className="hidden md:flex items-center">
          <a href="tel:+78953720542" className="flex items-center gap-2 bg-[#F8F7F4] hover:bg-[#E8EDE2] px-4 py-2 rounded-lg transition-all border border-[#A1B189]/20">
            <Phone className="h-4 w-4 text-[#3C4D34]" />
            <span className="text-[#3C4D34] font-medium">+7 (895) 372-05-42</span>
          </a>
        </div>
        <button className="md:hidden text-[#3C4D34] focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8EDE2] p-5 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#pricing" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Цены
            </a>
            <a 
              href="#installation" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Этапы работ
            </a>
            <a 
              href="#reviews" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#faq" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-[#3C4D34] py-2 px-4 hover:bg-[#F8F7F4] rounded-md font-medium transition-all flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <div className="border-t border-[#E8EDE2] pt-4 mt-2">
              <a 
                href="tel:+78953720542" 
                className="flex items-center gap-2 text-[#3C4D34] font-medium py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 text-[#3C4D34]" />
                +7 (895) 372-05-42
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

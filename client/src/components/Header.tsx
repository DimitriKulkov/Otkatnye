import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/assets/logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5E6D3] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-16 w-auto" />
          <h1 className="ml-3 text-2xl font-bold text-[#556B2F]">ПрофОград</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-800 hover:text-[#556B2F] font-medium">Услуги</a>
          <a href="#pricing" className="text-gray-800 hover:text-[#556B2F] font-medium">Цены</a>
          <a href="#reviews" className="text-gray-800 hover:text-[#556B2F] font-medium">Отзывы</a>
          <a href="#faq" className="text-gray-800 hover:text-[#556B2F] font-medium">FAQ</a>
          <a href="#contact" className="text-gray-800 hover:text-[#556B2F] font-medium">Контакты</a>
        </div>
        <div className="hidden md:block">
          <a href="tel:+78953720542" className="text-[#556B2F] font-bold hover:text-[#455A1F]">
            +7 (895) 372-05-42
          </a>
        </div>
        <button className="md:hidden text-[#556B2F] focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5E6D3] border-t border-[#D3D3D3] p-4">
          <div className="flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-gray-800 hover:text-[#556B2F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#pricing" 
              className="text-gray-800 hover:text-[#556B2F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Цены
            </a>
            <a 
              href="#reviews" 
              className="text-gray-800 hover:text-[#556B2F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#faq" 
              className="text-gray-800 hover:text-[#556B2F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-[#556B2F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <a 
              href="tel:+78953720542" 
              className="text-[#556B2F] font-bold hover:text-[#455A1F]"
              onClick={() => setIsMenuOpen(false)}
            >
              +7 (895) 372-05-42
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

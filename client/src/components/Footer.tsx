import logoImg from "@/assets/logo-new.png";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3C4D34] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <img src={logoImg} alt="ПрофОград" className="h-14 w-auto" />
              <h3 className="ml-3 text-xl font-bold">ПрофОград</h3>
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Профессиональная установка заборов, навесов и ворот в Москве и
              Московской области с 2010 года.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#A1B189]" />
                <span className="text-white/80">
                  Москва и Московская область
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#A1B189]" />
                <span className="text-white/80">Пн-Вс: 9:00-18:00</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-[#A1B189] pb-2 inline-block">
              Услуги
            </h4>
            <ul className="space-y-2 mt-3">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white hover:pl-1 transition-all"
                >
                  Заборы
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white hover:pl-1 transition-all"
                >
                  Навесы
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white hover:pl-1 transition-all"
                >
                  Ворота и калитки
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white hover:pl-1 transition-all"
                >
                  Автоматика для ворот
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-[#A1B189] pb-2 inline-block">
              Контакты
            </h4>
            <ul className="space-y-3 mt-3">
              <li>
                <a
                  href="tel:79537205420"
                  className="text-white/80 hover:text-white flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-[#A1B189]" />
                  +7 (953) 720-54-20
                </a>
              </li>
              <li>
                <a
                  href="mailto:otckatnye.v@yandex.com"
                  className="text-white/80 hover:text-white flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-[#A1B189]" />
                  otckatnye.v@yandex.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/78953720542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white flex items-center gap-2"
                >
                  <FaWhatsapp className="h-4 w-4 text-[#A1B189]" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} ПрофОград. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

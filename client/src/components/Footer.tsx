import { Logo } from "@/assets/logo";

const Footer = () => {
  return (
    <footer className="bg-[#556B2F] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-12 w-auto" />
              <h3 className="ml-3 text-xl font-bold">ПрофОград</h3>
            </div>
            <p className="text-white/80">
              Профессиональная установка заборов, навесов и ворот в Воронеже и области с 2010 года.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-white">Заборы</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Навесы</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Ворота и калитки</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Автоматика для ворот</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="tel:+78953720542" className="text-white/80 hover:text-white">+7 (895) 372-05-42</a></li>
              <li><a href="mailto:zaborstroy68@yandex.ru" className="text-white/80 hover:text-white">zaborstroy68@yandex.ru</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} ПрофОград. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

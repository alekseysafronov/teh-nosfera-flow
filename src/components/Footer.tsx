import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Техносфера</h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Комплексное обслуживание инженерных систем промышленных и коммерческих объектов.
        </p>
      </div>
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Услуги</h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/services/water-treatment" className="hover:opacity-100 transition-opacity">Очистные сооружения</Link></li>
          <li><Link to="/services/ventilation" className="hover:opacity-100 transition-opacity">Вентиляционные установки</Link></li>
          <li><Link to="/services/heating" className="hover:opacity-100 transition-opacity">Тепловые системы</Link></li>
          <li><Link to="/services/dock-doors" className="hover:opacity-100 transition-opacity">Доковые ворота</Link></li>
          <li><Link to="/services/electrical" className="hover:opacity-100 transition-opacity">Электрические сети</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
        <div className="space-y-3 text-sm opacity-80">
          <a href="tel:+79166568571" className="flex items-center gap-2 hover:opacity-100">
            <Phone className="w-4 h-4 text-secondary flex-shrink-0" /> +7 (916) 656-85-71
          </a>
          <a href="mailto:tehnosfera-r@yandex.ru" className="flex items-center gap-2 hover:opacity-100">
            <Mail className="w-4 h-4 text-secondary flex-shrink-0" /> tehnosfera-r@yandex.ru
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span>142701, Московская область, г. Видное, ул. Ольховая, д. 9</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} ООО «ТЕХНОСФЕРА». Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;

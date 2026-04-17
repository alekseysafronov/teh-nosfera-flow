import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { title: "Экспертиза инженерных систем", path: "/services/water-treatment" },
  { title: "Обслуживание вентиляционных установок", path: "/services/ventilation" },
  { title: "Обслуживание тепловых систем", path: "/services/heating" },
  { title: "Обслуживание доковых ворот", path: "/services/dock-doors" },
  { title: "Обслуживание электрических сетей", path: "/services/electrical" },
];

const navItems = [
  { title: "О компании", path: "/about" },
  { title: "Услуги", path: "/services", children: services },
  { title: "Поставка оборудования", path: "/equipment" },
  { title: "Контакты", path: "/contacts" },
  { title: "Реквизиты", path: "/requisites" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex-shrink-0 flex flex-col items-start">
          <img src={logo} alt="Техносфера" className="h-16 md:h-20 w-auto" />
          <span className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-muted-foreground font-heading font-semibold">
            Обслуживание инженерных систем
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium font-heading rounded-md transition-colors flex items-center gap-1 ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.title}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background rounded-lg shadow-lg border py-2 min-w-[280px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(child.path)
                            ? "text-secondary bg-accent"
                            : "text-foreground hover:bg-accent hover:text-primary"
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+79166568571"
            className="flex items-center gap-2 font-heading font-extrabold text-2xl hover:opacity-80 transition-opacity"
          >
            <Phone className="w-6 h-6 text-secondary" />
            <span className="text-secondary">916</span>
            <span className="text-foreground">656-8571</span>
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Переключить тему"
            className="p-2 rounded-md text-foreground hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Переключить тему"
            className="p-2 text-foreground"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium font-heading"
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium font-heading ${
                      isActive(item.path) ? "text-secondary" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:+79166568571"
              className="flex items-center gap-2 px-3 py-2.5 font-heading font-extrabold text-xl"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-secondary">916</span>
              <span className="text-foreground">656-8571</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

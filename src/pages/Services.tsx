import { Link } from "react-router-dom";
import { Droplets, Wind, Zap, DoorOpen, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const services = [
  { icon: Droplets, title: "Обслуживание очистных сооружений", desc: "Комплексное техническое обслуживание систем водоочистки, водоподготовки и канализации. Регулярная диагностика, замена фильтрующих элементов, химическая промывка.", path: "/services/water-treatment" },
  { icon: Wind, title: "Обслуживание вентиляционных установок", desc: "Сервисное обслуживание приточно-вытяжных систем, кондиционирования, очистка воздуховодов, замена фильтров, наладка автоматики.", path: "/services/ventilation" },
  { icon: Zap, title: "Обслуживание тепловых систем", desc: "Промывка теплообменников, обслуживание котельного оборудования, тепловых пунктов, систем отопления и горячего водоснабжения.", path: "/services/heating" },
  { icon: DoorOpen, title: "Обслуживание доковых ворот", desc: "Монтаж, регулировка, ремонт и плановое техническое обслуживание промышленных доковых ворот и погрузочного оборудования.", path: "/services/dock-doors" },
  { icon: Shield, title: "Обслуживание электрических сетей", desc: "Диагностика, ремонт и модернизация электрических сетей, щитового оборудования, систем освещения и автоматизации.", path: "/services/electrical" },
];

const Services = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container">
        <SectionTitle title="Наши услуги" subtitle="Комплексное обслуживание всех инженерных систем вашего объекта" />
      </div>
    </section>
    <section className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {services.map((s) => (
          <Link key={s.path} to={s.path} className="flex gap-4 p-6 rounded-xl border hover:shadow-md transition-shadow bg-background">
            <s.icon className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Wrench, Zap, Wind, Droplets, DoorOpen } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero.jpg";

const services = [
  { icon: Droplets, title: "Очистные сооружения", desc: "Техническое обслуживание и ремонт систем водоочистки и водоподготовки", path: "/services/water-treatment" },
  { icon: Wind, title: "Вентиляционные установки", desc: "Сервис приточно-вытяжных систем вентиляции и кондиционирования", path: "/services/ventilation" },
  { icon: Zap, title: "Тепловые системы", desc: "Промывка теплообменников, обслуживание котельного оборудования", path: "/services/heating" },
  { icon: DoorOpen, title: "Доковые ворота", desc: "Монтаж, ремонт и регулярное обслуживание промышленных ворот", path: "/services/dock-doors" },
  { icon: Shield, title: "Электрические сети", desc: "Диагностика, ремонт и модернизация электрических систем", path: "/services/electrical" },
];

const advantages = [
  { num: "10+", label: "лет опыта" },
  { num: "500+", label: "обслуженных объектов" },
  { num: "24/7", label: "аварийный выезд" },
  { num: "100%", label: "гарантия качества" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Комплексное обслуживание инженерных систем
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Обеспечиваем бесперебойную и эффективную работу инженерной инфраструктуры вашего объекта
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contacts"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Получить консультацию
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Наши услуги
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {advantages.map((a) => (
          <div key={a.label}>
            <div className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground">{a.num}</div>
            <div className="mt-1 text-sm text-primary-foreground/80">{a.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* About preview */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionTitle title="Техносфера — ваш надёжный партнёр" subtitle="Мы специализируемся на техническом обслуживании и ремонте ключевых инженерных систем промышленных и коммерческих объектов" />
        <div className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
          <p>
            Наша цель — повысить энергоэффективность, продлить срок службы вашего оборудования и обеспечить его соответствие всем нормам безопасности. Мы работаем с объектами любой сложности по всей Московской области.
          </p>
          <Link to="/about" className="inline-block mt-6 text-primary font-semibold hover:underline">
            Подробнее о компании →
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-muted">
      <div className="container">
        <SectionTitle title="Наши ключевые услуги" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={s.path}
                className="block bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full border"
              >
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
          Нужна консультация специалиста?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Свяжитесь с нами для бесплатной оценки состояния инженерных систем вашего объекта
        </p>
        <a
          href="tel:+79166568571"
          className="inline-flex items-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-heading font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Позвонить: +7 (916) 656-85-71
        </a>
      </div>
    </section>
  </Layout>
);

export default Index;

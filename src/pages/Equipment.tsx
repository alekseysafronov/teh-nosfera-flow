import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Wrench, Truck, ShieldCheck } from "lucide-react";

const Equipment = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container">
        <SectionTitle title="Поставка оборудования" subtitle="Подбор и поставка инженерного оборудования от ведущих производителей" />
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-4xl space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          Помимо обслуживания, мы осуществляем поставку инженерного оборудования для промышленных и коммерческих объектов. Работаем напрямую с производителями, что позволяет предложить конкурентные цены и гарантию качества.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Wrench, title: "Подбор оборудования", desc: "Профессиональный подбор оборудования под задачи вашего объекта" },
            { icon: Truck, title: "Доставка и монтаж", desc: "Доставка, монтаж и пусконаладочные работы под ключ" },
            { icon: ShieldCheck, title: "Гарантия и сервис", desc: "Гарантийное и постгарантийное обслуживание поставленного оборудования" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl border bg-background">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-accent rounded-xl p-6 border">
          <h4 className="font-heading font-bold text-lg mb-2">Запросить коммерческое предложение</h4>
          <p className="text-sm text-muted-foreground mb-3">Отправьте запрос на подбор и поставку необходимого оборудования.</p>
          <a href="mailto:tehnosfera-r@yandex.ru" className="inline-flex px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
            tehnosfera-r@yandex.ru
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Equipment;

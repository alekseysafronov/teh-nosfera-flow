import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle } from "lucide-react";

const values = [
  "Индивидуальный подход к каждому клиенту",
  "Использование современных технологий и материалов",
  "Квалифицированные специалисты с многолетним опытом",
  "Оперативное реагирование на аварийные ситуации",
  "Соблюдение всех норм и стандартов безопасности",
  "Прозрачное ценообразование без скрытых платежей",
];

const About = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container">
        <SectionTitle title="О компании" subtitle="ООО «ТЕХНОСФЕРА» — надёжный партнёр в сфере инженерного обслуживания" />
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">ООО «ТЕХНОСФЕРА»</strong> — компания, специализирующаяся на комплексном техническом обслуживании и ремонте инженерных систем промышленных и коммерческих объектов.
          </p>
          <p>
            Мы обеспечиваем бесперебойную работу очистных сооружений, вентиляционных установок, тепловых систем, доковых ворот и электрических сетей. Наша команда профессионалов готова решить задачи любой сложности.
          </p>
          <p>
            Компанию возглавляет <strong className="text-foreground">Хмельков Дмитрий Викторович</strong>, директор с большим опытом работы в сфере инженерных систем.
          </p>
        </div>
        <img src={aboutImg} alt="Команда Техносфера" loading="lazy" width={1280} height={768} className="rounded-xl shadow-md w-full h-auto" />
      </div>
    </section>
    <section className="pb-16">
      <div className="container max-w-4xl text-muted-foreground leading-relaxed">

        <h3 className="font-heading font-bold text-xl text-foreground pt-4">Наши принципы</h3>
        <ul className="space-y-3">
          {values.map((v) => (
            <li key={v} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default About;

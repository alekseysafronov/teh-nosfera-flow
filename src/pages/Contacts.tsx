import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, User } from "lucide-react";

const Contacts = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container">
        <SectionTitle title="Контакты" subtitle="Свяжитесь с нами удобным для вас способом" />
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Директор</div>
                <div className="font-heading font-bold">Хмельков Дмитрий Викторович</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <a href="tel:+79166568571" className="font-heading font-bold text-lg hover:text-primary transition-colors">
                  +7 (916) 656-85-71
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:tehnosfera-r@yandex.ru" className="font-heading font-bold hover:text-primary transition-colors">
                  tehnosfera-r@yandex.ru
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Адрес</div>
                <div className="font-heading font-semibold">
                  142701, Московская область, г. Видное, ул. Ольховая, д. 9
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border h-[300px] md:h-auto">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.7105%2C55.5497&z=15&pt=37.7105%2C55.5497%2Cpm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              title="Карта"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contacts;

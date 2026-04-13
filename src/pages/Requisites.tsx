import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const rows = [
  { label: "Наименование", value: 'ООО "ТЕХНОСФЕРА"' },
  { label: "ИНН", value: "5003170419" },
  { label: "КПП", value: "500301001" },
  { label: "ОГРН", value: "1255000071127" },
  { label: "Юридический адрес", value: "142701, Московская область, г. Видное, ул. Ольховая, д. 9, кв. 40" },
  { label: "Расчётный счёт", value: "40702810240070002086" },
  { label: "Банк", value: "ПАО Сбербанк" },
  { label: "БИК", value: "044525225" },
  { label: "Корр. счёт", value: "30101810400000000225" },
];

const Requisites = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container">
        <SectionTitle title="Реквизиты" subtitle="Банковские и юридические реквизиты компании" />
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl">
        <div className="rounded-xl border overflow-hidden bg-background">
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                  <td className="px-6 py-4 text-sm font-heading font-semibold text-foreground whitespace-nowrap align-top w-1/3">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Requisites;

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-16 h-1 bg-secondary rounded-full" />
  </div>
);

export default SectionTitle;

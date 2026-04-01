import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { ShieldCheck, ClipboardCheck, Lock, BarChart3, FileText, CreditCard } from "lucide-react";

const items = [
  { icon: ClipboardCheck, title: "Standardized Operating Procedures", desc: "Documented workflows and SOPs ensure consistent, high-quality service delivery across all engagements." },
  { icon: BarChart3, title: "Compliance Tracking Systems", desc: "Automated tracking and alerts for statutory deadlines, filings, and regulatory requirements." },
  { icon: FileText, title: "Service Level Agreements", desc: "Clear SLAs with defined turnaround times, quality benchmarks, and accountability measures." },
  { icon: ShieldCheck, title: "Internal Audits", desc: "Regular internal audits to assess quality, identify gaps, and ensure continuous improvement." },
  { icon: Lock, title: "Data Protection", desc: "Strict data privacy protocols and secure handling of all client documentation and information." },
  { icon: CreditCard, title: "Phased Billing & Retainers", desc: "Flexible billing models including phased payments, retainer agreements, and subscription options." },
];

const RiskCompliance = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Governance</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Risk & <span className="text-gradient-gold">Compliance</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Robust internal frameworks that ensure quality, accountability, and trust.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-7 h-full border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default RiskCompliance;

import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { Building2, Landmark, Heart, Factory, Users, Sprout } from "lucide-react";

const industries = [
  { icon: Sprout, title: "Startups & SMEs", desc: "Company formation, compliance setup, and growth advisory for new ventures." },
  { icon: Building2, title: "Corporates & Large Enterprises", desc: "Governance, secretarial services, and regulatory compliance." },
  { icon: Heart, title: "NGOs & Non-Profits", desc: "Registration, donor compliance, and governance frameworks." },
  { icon: Landmark, title: "Public Institutions", desc: "Policy advisory, compliance auditing, and capacity building." },
  { icon: Factory, title: "Manufacturing & Agriculture", desc: "Licensing, environmental compliance, and operational advisory." },
  { icon: Users, title: "Professional Services", desc: "Digital marketing, brand development, and strategic positioning." },
];

const Industries = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Sectors</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Industries We <span className="text-gradient-gold">Serve</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Across sectors, we deliver tailored compliance and growth solutions.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-7 h-full border border-border hover:shadow-xl transition-all group text-center">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Industries;

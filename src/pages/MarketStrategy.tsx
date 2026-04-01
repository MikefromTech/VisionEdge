import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { Globe, Users, Calendar, BookOpen } from "lucide-react";

const strategies = [
  {
    icon: Globe,
    title: "Digital Channels",
    desc: "Professional website, LinkedIn presence, and active social media engagement to reach clients where they are.",
  },
  {
    icon: Users,
    title: "Referrals & Partnerships",
    desc: "Strategic partnerships with law firms, accounting firms, and business associations to generate qualified referrals.",
  },
  {
    icon: Calendar,
    title: "Events & Webinars",
    desc: "Regular compliance workshops, business growth seminars, and educational webinars to showcase expertise.",
  },
  {
    icon: BookOpen,
    title: "Education-Based Marketing",
    desc: 'Content-driven positioning of VisionaryEdge as "The Compliance and Growth Partner for SMEs" through thought leadership.',
  },
];

const MarketStrategy = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Growth</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Market <span className="text-gradient-gold">Strategy</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A multi-channel approach to building trust, visibility, and sustainable client growth.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((s, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MarketStrategy;

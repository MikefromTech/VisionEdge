import { Section, FadeInCard } from "@/components/Section";
import { Monitor, Cloud, Settings, Users, BarChart3, BookOpen } from "lucide-react";

const tech = [
  { icon: Monitor, title: "CRM System", desc: "Client relationship management for seamless communication, tracking, and pipeline management.", status: "Active" },
  { icon: Cloud, title: "Cloud Document Management", desc: "Secure cloud-based storage for all client documents, contracts, and compliance records.", status: "Active" },
  { icon: Settings, title: "Compliance-Tracking Tools", desc: "Automated tools for monitoring regulatory deadlines, filings, and statutory requirements.", status: "Active" },
  { icon: Users, title: "Client Portal", desc: "Self-service portal for clients to access documents, track progress, and communicate.", status: "Coming Soon" },
  { icon: BarChart3, title: "Analytics Platforms", desc: "Data-driven insights for digital marketing performance, client engagement, and business intelligence.", status: "Active" },
  { icon: BookOpen, title: "Knowledge Hub", desc: "Centralized resource library with templates, guides, compliance checklists, and training materials.", status: "Coming Soon" },
];

const Technology = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Infrastructure</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Technology & <span className="text-gradient-gold">Systems</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Modern tools and platforms powering efficient, secure, and scalable service delivery.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map((item, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-7 h-full border border-border hover:shadow-lg transition-all relative">
                {item.status === "Coming Soon" && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-1 rounded-full bg-accent/20 text-accent">
                    Coming Soon
                  </span>
                )}
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

export default Technology;

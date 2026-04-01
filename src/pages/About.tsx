import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { Target, Eye, CheckCircle } from "lucide-react";

const objectives = [
  "Assist at least 500 startups and SMEs within first 3 years",
  "Become a trusted compliance partner in major urban centers",
  "Develop measurable digital marketing practice",
  "Launch subscription-based advisory product",
  "Expand into selected SADC markets",
];

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Who We <span className="text-gradient-gold">Are</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            VisionaryEdge Consultancy is Zimbabwe's emerging one-stop advisory firm for business compliance, governance, and digital growth.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeInCard>
            <div className="bg-secondary rounded-xl p-8 h-full border border-border">
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif font-bold text-foreground text-xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                VisionaryEdge Consultancy aspires to be Zimbabwe's premier consultancy hub for business excellence, regulatory compliance, and digital innovation, recognized for helping organizations achieve sustainable growth across the region.
              </p>
            </div>
          </FadeInCard>
          <FadeInCard delay={0.15}>
            <div className="bg-secondary rounded-xl p-8 h-full border border-border">
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif font-bold text-foreground text-xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                VisionaryEdge's mission is to empower organizations by delivering innovative, practical, and compliant advisory and digital services that enable measurable improvements in governance, performance, and market visibility.
              </p>
            </div>
          </FadeInCard>
        </div>
      </Section>

      {/* Objectives */}
      <Section className="bg-secondary">
        <SectionTitle subtitle="Strategic goals driving our impact">Our Objectives</SectionTitle>
        <div className="max-w-2xl mx-auto space-y-4">
          {objectives.map((obj, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{obj}</span>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;

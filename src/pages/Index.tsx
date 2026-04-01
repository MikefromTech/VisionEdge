import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { motion } from "framer-motion";
import {
  FileCheck,
  Briefcase,
  TrendingUp,
  Megaphone,
  GraduationCap,
  RefreshCcw,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cr1 from "@/assets/cr1.jpg";
import cr3 from "@/assets/cr3.jpg";
import cr5 from "@/assets/cr5.jpg";
import cr7 from "@/assets/cr7.jpg";
import cr9 from "@/assets/cr9.jpg";
import cr11 from "@/assets/cr11.jpg";
import cr12 from "@/assets/cr12.jpg";

const services = [
  { icon: FileCheck, title: "Company Registration & Regulatory Compliance", desc: "Formation, licensing, tax compliance, and statutory monitoring.", bg: cr1, anchor: "registration" },
  { icon: Briefcase, title: "Corporate Secretarial Services", desc: "Statutory records, annual returns, board coordination, and governance.", bg: cr3, anchor: "secretarial" },
  { icon: TrendingUp, title: "Business Advisory & Strategy", desc: "Business planning, restructuring, feasibility studies, and strategy.", bg: cr11, anchor: "advisory" },
  { icon: Megaphone, title: "Digital Marketing & Brand Services", desc: "Digital strategy, social media, SEO, and campaign management.", bg: cr5, anchor: "marketing" },
  { icon: GraduationCap, title: "Training & Capacity Building", desc: "Compliance workshops, governance training, and digital skills.", bg: cr7, anchor: "training" },
  { icon: RefreshCcw, title: "Subscription-Based Advisory Support", desc: "Ongoing compliance monitoring, advisory hours, and updates.", bg: cr9, anchor: "subscription" },
  { icon: Users, title: "HR Consultancy", desc: "HR policy development, recruitment support, performance management, and employee relations.", bg: cr12, anchor: "hr" },
];

const stats = [
  { value: "95%", label: "On-time statutory filings" },
  { value: "85%", label: "Client satisfaction target" },
  { value: "50+", label: "Active clients in Year 1" },
  { value: "12-15", label: "Months to break-even" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Corporate office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              VisionaryEdge Consultancy
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              Your Business,{" "}
              <span className="text-gradient-gold">Our Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
              Bridging the gap between having a dream and building a compliant,
              credible, and competitive business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="text-base px-8">
                  Book a Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="lg" className="text-base px-8">
                  Register Your Company
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInCard>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Where Ideas Take <span className="text-gradient-gold">Shape</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VisionaryEdge Consultancy is a Harare-based one-stop advisory firm
              that helps businesses, NGOs, and public institutions become
              compliant, well-governed, and digitally visible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We simplify the journey from startup or informal operation to a
              fully compliant, structured, and growth-oriented organization.
              VisionaryEdge positions itself as the place where ideas are given the
              structure, governance, and tools they need to develop into tangible
              results.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More About Us
                <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeInCard>
          <FadeInCard delay={0.2} className="grid grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, text: "Trusted Advisory" },
              { icon: FileCheck, text: "Full Compliance" },
              { icon: TrendingUp, text: "Growth Focused" },
              { icon: Briefcase, text: "Expert Team" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </FadeInCard>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary">
        <SectionTitle subtitle="Comprehensive solutions for compliance, governance, and growth">
          Our Core Services
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="relative rounded-xl overflow-hidden h-full hover:shadow-xl transition-all group border border-border min-h-[280px] flex flex-col">
                {s.bg && (
                  <>
                    <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 transition-colors" />
                  </>
                )}
                {!s.bg && <div className="absolute inset-0 bg-card" />}
                <div className="relative p-7 flex flex-col flex-1 justify-end">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg mb-2 ${s.bg ? "text-white drop-shadow-md" : "text-foreground"}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${s.bg ? "text-white/80 drop-shadow-sm" : "text-muted-foreground"}`}>{s.desc}</p>
                  <Link
                    to={`/services#${s.anchor}`}
                    className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all drop-shadow-sm"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="gradient-navy-gold">
        <SectionTitle light subtitle="Expert services tailored for your business success">
          Why Choose VisionaryEdge?
        </SectionTitle>
        <FadeInCard>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            At VisionaryEdge Consultancy, we simplify the complexities of
            starting, running, and growing a business by offering expert
            services in company registrations, regulatory compliance, tax
            advisory, corporate governance, secretarial services, business
            advisory, and digital marketing.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto text-center mt-4">
            With our deep expertise and client-focused approach, we ensure
            businesses remain compliant, competitive, and positioned for
            sustainable growth.
          </p>
        </FadeInCard>
      </Section>

      {/* Stats */}
      <Section>
        <SectionTitle subtitle="Measurable goals driving our commitment to excellence">
          Success Metrics
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeInCard
              key={i}
              delay={i * 0.15}
              className="text-center bg-secondary rounded-xl p-8"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold block mb-2">
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </FadeInCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="gradient-navy text-center">
        <FadeInCard>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Build a Compliant,{" "}
            <span className="text-gradient-gold">Competitive Business?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Let VisionaryEdge guide you from vision to reality. Book your
            consultation today.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="text-base px-10">
              Get Started Today
              <ArrowRight size={18} />
            </Button>
          </Link>
        </FadeInCard>
      </Section>
    </div>
  );
};

export default Index;

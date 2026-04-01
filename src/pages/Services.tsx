import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import {
  FileCheck,
  Briefcase,
  TrendingUp,
  Megaphone,
  GraduationCap,
  RefreshCcw,
  Users,
} from "lucide-react";
import cr2 from "@/assets/cr2.jpg";
import cr4 from "@/assets/cr4.jpg";
import cr6 from "@/assets/cr6.jpg";
import cr8 from "@/assets/cr8.jpg";
import cr10 from "@/assets/cr10.jpg";
import cr13 from "@/assets/cr13.jpg";
import cr14 from "@/assets/cr14.jpg";

const services = [
  {
    icon: FileCheck,
    title: "Company Registration, Re-registration & Regulatory Compliance",
    anchor: "registration",
    bg: cr2,
    items: [
      "Company formation, registration and re-registration (PVTS, partnerships, trusts, NGOs)",
      "Business licensing and permits",
      "Tax compliance (ZIMRA registrations, returns, audits)",
      "Compliance audits and gap analysis",
      "Ongoing statutory monitoring and deadline management",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Secretarial Services",
    anchor: "secretarial",
    bg: cr4,
    items: [
      "Maintenance of statutory records and registers",
      "Filing annual returns and statutory documents",
      "Board meeting coordination and minute-taking",
      "Resolutions and governance documentation",
      "Corporate governance advisory",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory & Strategy",
    anchor: "advisory",
    bg: cr14,
    items: [
      "Business plan development and review",
      "Business restructuring and turnaround advisory",
      "Feasibility studies and market research",
      "Strategic advisory for growth and expansion",
      "Operational improvement consulting",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Brand Services",
    anchor: "marketing",
    bg: cr6,
    items: [
      "Digital strategy development",
      "Social media management and content creation",
      "SEO and website optimization",
      "Campaign management and lead generation",
      "Analytics reporting and performance tracking",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    anchor: "training",
    bg: cr8,
    items: [
      "Compliance and regulatory workshops",
      "Governance and board effectiveness training",
      "Leadership and management development",
      "Digital skills and marketing training",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Subscription Advisory Services",
    anchor: "subscription",
    bg: cr10,
    items: [
      "Monthly or quarterly compliance monitoring",
      "Allocated advisory hours per period",
      "Governance and secretarial support",
      "Regulatory updates and alerts",
    ],
  },
  {
    icon: Users,
    title: "HR Consultancy",
    anchor: "hr",
    bg: cr13,
    items: [
      "HR policy development and review",
      "Recruitment and talent acquisition support",
      "Performance management systems",
      "Employee relations and conflict resolution",
      "Labour law compliance and advisory",
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help your business start right, stay compliant, and grow sustainably.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-8">
          {services.map((s, i) => (
            <FadeInCard key={i} delay={i * 0.08}>
              <div id={s.anchor} className="relative rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow scroll-mt-28">
                {s.bg && (
                  <>
                    <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
                  </>
                )}
                {!s.bg && <div className="absolute inset-0 bg-card" />}
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                      <s.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className={`font-serif font-bold text-xl mb-4 drop-shadow-md ${s.bg ? "text-white" : "text-foreground"}`}>{s.title}</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {s.items.map((item, j) => (
                          <li key={j} className={`flex items-start gap-2 text-sm ${s.bg ? "text-white/85 drop-shadow-sm" : "text-muted-foreground"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;

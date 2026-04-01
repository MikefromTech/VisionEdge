import { Section, SectionTitle, FadeInCard } from "@/components/Section";
import { TrendingUp, DollarSign, Heart, Clock, Target, BarChart3 } from "lucide-react";

const metrics = [
  { icon: TrendingUp, title: "Client Growth", value: "50+", desc: "Active clients targeted in Year 1, scaling to 150+ by Year 3." },
  { icon: DollarSign, title: "Recurring Revenue", value: "40%", desc: "Target recurring revenue percentage from subscription advisory services." },
  { icon: Heart, title: "Client Satisfaction", value: "85%", desc: "Client satisfaction rate target measured through regular feedback surveys." },
  { icon: Clock, title: "On-Time Completion", value: "95%", desc: "Target rate for on-time statutory filings and project deliverables." },
  { icon: Target, title: "Break-Even Timeline", value: "12-15mo", desc: "Projected break-even period with disciplined cost management." },
  { icon: BarChart3, title: "Digital Performance", value: "10K+", desc: "Monthly website visitors and social media reach target by Year 2." },
];

const SuccessMetrics = () => {
  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Performance</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Success <span className="text-gradient-gold">Metrics</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Measurable targets and KPIs that drive accountability and results.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all text-center h-full">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5">
                  <m.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <span className="text-3xl font-serif font-bold text-gradient-gold block mb-2">{m.value}</span>
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SuccessMetrics;

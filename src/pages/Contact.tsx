import { useState } from "react";
import { Section, FadeInCard } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-24">
      <section className="gradient-navy-gold py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to take the next step? Reach out to our team today.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <FadeInCard>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Office</h4>
                  <a
                    href="https://maps.google.com/?q=Batanai+Gardens+Jason+Moyo+Avenue+Harare+Zimbabwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    Office No.428, 4th Floor, Batanai Gardens,<br />
                    Jason Moyo Avenue, Harare, Zimbabwe
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+263784211463" className="text-muted-foreground text-sm hover:text-accent transition-colors">+263 784211463</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:deonmwaita@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">deonmwaita@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/263784211463?text=Hello%20VisionaryEdge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Facebook className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Facebook</h4>
                  <a
                    href="https://www.facebook.com/share/1CMA9nntvk/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline"
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-56 bg-secondary flex items-center justify-center">
              <iframe
                title="VisionaryEdge Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0475!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDInNTEuMCJF!5e0!3m2!1sen!2szw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </FadeInCard>

          {/* Form */}
          <FadeInCard delay={0.2}>
            <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Book a Consultation</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the form below and our team will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your business needs..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </FadeInCard>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

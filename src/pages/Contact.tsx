import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: data.name,
        email: data.email,
        subject: data.subject || null,
        message: data.message,
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bungapravalika07@gmail.com",
      href: "mailto:bungapravalika07@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8522839675",
      href: "tel:+918522839675",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pravalika-bunga",
      href: "https://linkedin.com/in/pravalika-bunga",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Pravalikabunga",
      href: "https://github.com/Pravalikabunga",
    },
  ];

  return (
    <div className="bg-background overflow-visible min-h-screen">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="section-badge">Contact</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-8">
            <BlurText text="Let's Connect" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-foreground/60 font-body font-light text-base max-w-lg mb-16"
          >
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out through the form or any channel below.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="text-foreground/40 font-body text-xs mb-1.5 block">Name</label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-foreground font-body text-sm bg-transparent placeholder:text-foreground/20 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  {errors.name && (
                    <p className="text-destructive font-body text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-foreground/40 font-body text-xs mb-1.5 block">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-foreground font-body text-sm bg-transparent placeholder:text-foreground/20 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  {errors.email && (
                    <p className="text-destructive font-body text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-foreground/40 font-body text-xs mb-1.5 block">Subject</label>
                  <input
                    {...register("subject")}
                    placeholder="What's this about?"
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-foreground font-body text-sm bg-transparent placeholder:text-foreground/20 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                </div>

                <div>
                  <label className="text-foreground/40 font-body text-xs mb-1.5 block">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Your message..."
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-foreground font-body text-sm bg-transparent placeholder:text-foreground/20 focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive font-body text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="liquid-glass-strong rounded-full px-8 py-3 font-body font-medium text-sm text-foreground flex items-center gap-2 hover:bg-foreground/[0.05] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="liquid-glass rounded-2xl p-6 flex items-center gap-4 group hover:bg-foreground/[0.02] transition-colors"
                >
                  <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/40 font-body text-xs mb-0.5">{c.label}</p>
                    <p className="text-foreground font-body font-medium text-sm">{c.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

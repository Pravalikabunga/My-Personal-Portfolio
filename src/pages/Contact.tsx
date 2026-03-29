import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
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
          I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out through any of the channels below.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
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
          ].map((c, i) => (
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
    </section>

    <Footer />
  </div>
);

export default Contact;

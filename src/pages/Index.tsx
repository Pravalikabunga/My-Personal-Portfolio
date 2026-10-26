import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HlsVideo from "@/components/HlsVideo";
import {
  Zap,
  Palette,
  BarChart3,
  Shield,
  Code2,
  Smartphone,
  Brain,
  Figma,
} from "lucide-react";

const skills = [
  { icon: Code2, title: "Full Stack Dev", desc: "React, Node.js, Express, MongoDB — end-to-end web applications." },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform apps with React Native for iOS and Android." },
  { icon: Brain, title: "AI Applications", desc: "Gemini AI, LangChain, FAISS — intelligent, data-driven solutions." },
  { icon: Figma, title: "UI/UX Design", desc: "Pixel-perfect interfaces crafted in Figma and Canva." },
];

const partners = ["React", "Node.js", "Python", "MongoDB", "Figma"];

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "7.5", label: "CGPA" },
  { value: "1yr", label: "Industry experience" },
  { value: "6+", label: "Certifications" },
];

const Index = () => {
  return (
    <div className="bg-background overflow-visible">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>
        <video
          className="absolute top-[20%] w-full h-auto object-contain z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/5 z-0" />
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] video-fade-bottom" />

        <div className="relative z-10 flex flex-col items-center text-center pt-[120px] sm:pt-[150px] px-4 sm:px-6">
          <div className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-2 mb-8">
            <span className="bg-foreground text-background rounded-full px-2.5 py-0.5 text-xs font-medium font-body">
              Hello
            </span>
            <span className="text-foreground/80 text-xs font-body pr-3">
              I'm Pravalika — Full Stack Developer & Designer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-2px] sm:tracking-[-4px] max-w-4xl">
            <BlurText text="Building Digital Experiences That Matter" delay={0} />
          </h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-8 text-foreground/60 font-body font-light text-sm sm:text-base max-w-lg"
          >
            Full Stack Developer. UI/UX Designer. AI Enthusiast. Crafting scalable apps and intuitive interfaces that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            <Link
              to="/projects"
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium font-body text-foreground inline-flex items-center gap-2"
            >
              View Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 text-sm font-body font-medium inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Play className="w-4 h-4" /> Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS / SKILLS BAR */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center">
        <div className="section-badge">Tech Stack</div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-4">
          {partners.map((p) => (
            <span key={p} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading italic text-foreground">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-16 lg:px-24">
        <HlsVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] video-fade-top z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] video-fade-bottom z-[1]" />

        <div className="relative z-10 flex flex-col items-center text-center min-h-[400px] sm:min-h-[500px] justify-center px-4 sm:px-6">
          <div className="section-badge">About Me</div>
          <h2 className="section-heading max-w-3xl">
            Aspiring developer. Creative designer. Problem solver.
          </h2>
          <p className="mt-4 sm:mt-6 text-foreground/60 font-body font-light text-sm max-w-lg px-4">
            Passionate about building scalable applications, creating intuitive user interfaces, and applying modern tools to deliver impactful digital solutions.
          </p>
          <Link
            to="/about"
            className="liquid-glass-strong rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium font-body text-foreground inline-flex items-center gap-2 mt-6 sm:mt-8"
          >
            Learn More <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <div className="section-badge">Skills</div>
          <h2 className="section-heading">What I bring to the table.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-4 sm:p-6"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-heading italic text-foreground mb-2">{s.title}</h3>
              <p className="text-foreground/60 font-body font-light text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-16 lg:px-24">
        <HlsVideo
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0"
          desaturate
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] video-fade-top z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] video-fade-bottom z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="liquid-glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading italic text-foreground">
                    {s.value}
                  </div>
                  <div className="text-foreground/60 font-body font-light text-sm mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { ArrowUpRight, Brain, ShoppingCart, Heart } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Multi-PDF Information Extraction & Interactive Chat",
    subtitle: "AI-Powered Document Processing",
    desc: "A Streamlit-based AI app that extracts and processes PDF data using Google Generative AI, with an interactive chat interface. Leverages vector embeddings and FAISS for efficient similarity-based retrieval.",
    tech: ["Python", "Google Gemini API", "LangChain", "Streamlit", "PyPDF2", "FAISS"],
  },
  {
    icon: ShoppingCart,
    title: "Virtual Shopping Assistant",
    subtitle: "Gemini AI + MERN Stack",
    desc: "A MERN stack web application integrated with Gemini AI to assist users in shopping by understanding natural language queries and providing personalized product recommendations with smart filtering.",
    tech: ["React.js", "MongoDB", "Node.js", "Express.js", "Gemini AI"],
  },
  {
    icon: Heart,
    title: "Mental Health Care App",
    subtitle: "AI-Driven Wellness Platform",
    desc: "A real-time mental health care app helping students and employees monitor and improve their well-being. Integrates Gemini AI for personalized interactive assistance and AI-driven emotional insights.",
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Gemini API"],
  },
];

const Projects = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="section-badge">Projects</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-16">
          <BlurText text="Things I've Built" />
        </h1>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="liquid-glass rounded-2xl p-8 md:p-10 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading italic text-foreground">{p.title}</h3>
                  <p className="text-foreground/50 font-body text-xs mt-1">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-foreground/60 font-body font-light text-sm leading-relaxed mb-6 md:ml-16">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 md:ml-16">
                {p.tech.map((t) => (
                  <span key={t} className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Projects;

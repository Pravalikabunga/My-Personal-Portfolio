import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Experience</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-16">
          <BlurText text="Where I've Worked" />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="liquid-glass rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-heading italic text-foreground">Zenbeta Technologies</h3>
              <p className="text-foreground/60 font-body text-sm">Full Stack Developer + UI/UX Designer + QA Tester Intern</p>
              <p className="text-foreground/40 font-body text-xs mt-1">Hyderabad · May 2025 – Jan 2026</p>
            </div>
          </div>

          <div className="space-y-4 ml-0 md:ml-[4.5rem]">
            {[
              "Contributed to the development and enhancement of multiple products including HRMS (Zenploy), Canteen Management, ProTax by KC, LearnHub, and Raider.",
              "Developed responsive frontend modules using React Vite, JavaScript, Tailwind CSS, and React Native, and handled backend workflows using MongoDB and Postman.",
              "Built mobile app screens (Payout & Profile) for the Raider App using React Native and designed web/app UI in Figma and Canva.",
              "Performed manual testing and executed load testing with 2000 users using Apache JMeter to ensure performance and reliability.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex gap-3"
              >
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <p className="text-foreground/60 font-body font-light text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 ml-0 md:ml-[4.5rem] flex flex-wrap gap-2">
            {["React", "React Native", "Vite", "JavaScript", "Tailwind CSS", "MongoDB", "Postman", "Figma", "Canva", "JMeter"].map((tag) => (
              <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-foreground/70">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Experience;

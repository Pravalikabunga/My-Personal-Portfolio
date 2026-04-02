import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Megha Institute of Engineering Technology for Women's",
    location: "Hyderabad",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    period: "2021 – 2025",
    grade: "CGPA: 7.5",
  },
  {
    school: "SR Junior College",
    location: "Hyderabad",
    degree: "Board of Intermediate Education, Telangana",
    period: "2019 – 2021",
    grade: "68.3%",
  },
  {
    school: "Gyana Jyothi Vidya Vihar",
    location: "Hyderabad",
    degree: "Board of Secondary Education, Telangana",
    period: "2019",
    grade: "CGPA: 8.3",
  },
];

const certs = [
  { title: "First Prize: App Expo Technical Event (Inter-College)", date: "Feb 2025" },
  { title: "Hackathon Participant: Mindcare Innovators Hackathon", date: "Oct 2024" },
  { title: "Node.js — Certified by Data Point Solutions", date: "Mar 2024" },
  { title: "Machine Learning with Python — Certified by freeCodeCamp", date: "Jan 2024" },
  { title: "Responsive Web Design — Certified by Data Point Solutions", date: "Jan 2024" },
  { title: "First Prize: College-Level Technical Paper Presentation", date: "Jun 2023" },
  { title: "Python Programming — Certified by Data Point Solutions", date: "Jan 2023" },
];

const Education = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Education</div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-12 sm:mb-16">
          <BlurText text="Academic Journey" />
        </h1>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-heading italic text-foreground">{e.school}</h3>
                    <span className="text-foreground/40 font-body text-xs">{e.period}</span>
                  </div>
                  <p className="text-foreground/60 font-body font-light text-sm">{e.degree}</p>
                  <p className="text-foreground/80 font-body font-medium text-sm mt-2">{e.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CERTIFICATIONS */}
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">Achievements & Certifications</h2>
        <div className="space-y-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="liquid-glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4"
            >
              <span className="text-foreground/80 font-body font-light text-sm">{c.title}</span>
              <span className="text-foreground/40 font-body text-xs shrink-0 order-first sm:order-last">{c.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Education;

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const Experience = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Experience</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-16">
          <BlurText text="Where I've Worked" />
        </h1>

        <div className="space-y-8">
          {/* Zenbeta Technologies - Junior Application Developer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative liquid-glass rounded-2xl p-6 sm:p-8 md:p-10 border border-foreground/10 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -right-1">
                    <span className="liquid-glass-strong rounded-full px-2 py-1 text-xs font-body text-green-400 border border-green-400/30">
                      Current
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading italic text-foreground">Zenbeta Technologies</h3>
                    <span className="liquid-glass rounded-full px-2 py-1 text-xs font-body text-green-400 border border-green-400/30">
                      Full-time
                    </span>
                  </div>
                  <p className="text-foreground/80 font-body text-lg mb-2">Junior Application Developer</p>
                  <div className="flex items-center gap-4 text-foreground/50 font-body text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 ml-0 sm:ml-0 md:ml-[4.5rem]">
                {/* {[
                  "Leading development of LearnHub and Raider applications with full-stack responsibilities",
                  "Designing and implementing scalable architecture using modern web technologies",
                  "Mentoring junior developers and conducting code reviews",
                  "Optimizing application performance and implementing best practices"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-green-400 mt-1.5 shrink-0">▸</span>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))} */}
              </div>
              <div className="mt-6 ml-0 sm:ml-0 md:ml-[4.5rem] flex flex-wrap gap-2">
                {["React Native", "Node.js", "MongoDB", "TypeScript", "Playwright", "Docker"].map((tag) => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-foreground/70 border border-foreground/20 hover:border-green-400/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Zenbeta Technologies - Tech Intern */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative liquid-glass rounded-2xl p-6 sm:p-8 md:p-10 border border-foreground/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading italic text-foreground">Zenbeta Technologies</h3>
                    <span className="liquid-glass rounded-full px-2 py-1 text-xs font-body text-blue-400 border border-blue-400/30">
                      Internship
                    </span>
                  </div>
                  <p className="text-foreground/80 font-body text-lg mb-2">Tech Intern</p>
                  <div className="flex items-center gap-4 text-foreground/50 font-body text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 – Oct 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 ml-0 sm:ml-0 md:ml-[4.5rem]">
                {[
                  "Contributed to multiple products including HRMS (Zenploy), Canteen Management, and ProTax by KC",
                  "Developed responsive frontend modules using React Vite, JavaScript, and Tailwind CSS",
                  "Built mobile app screens for Raider App using React Native",
                  "Performed manual testing and load testing with Apache JMeter"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-blue-400 mt-1.5 shrink-0">▸</span>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 ml-0 sm:ml-0 md:ml-[4.5rem] flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "Supabase", "Postman", "Apache JMeter", "Figma"].map((tag) => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-foreground/70 border border-foreground/20 hover:border-blue-400/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FresherBot - MERN Stack Developer Intern */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative liquid-glass rounded-2xl p-6 sm:p-8 md:p-10 border border-foreground/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                    <Briefcase className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading italic text-foreground">FresherBot</h3>
                    <span className="liquid-glass rounded-full px-2 py-1 text-xs font-body text-accent border border-accent/30">
                      Internship
                    </span>
                  </div>
                  <p className="text-foreground/80 font-body text-lg mb-2">MERN Stack Developer</p>
                  <div className="flex items-center gap-4 text-foreground/50 font-body text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2025 – Apr 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 ml-0 sm:ml-0 md:ml-[4.5rem]">
                {[
                  "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js",
                  "Built RESTful APIs and implemented responsive frontend designs",
                  "Collaborated with cross-functional teams to deliver scalable solutions",
                  "Integrated third-party services and optimized application performance"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 ml-0 sm:ml-0 md:ml-[4.5rem] flex flex-wrap gap-2">
                {["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Git", "JavaScript"].map((tag) => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-foreground/70 border border-foreground/20 hover:border-accent/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Experience;

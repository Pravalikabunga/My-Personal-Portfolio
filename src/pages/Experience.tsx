import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import { Briefcase, Calendar, MapPin, Award, TrendingUp, ChevronRight } from "lucide-react";

const experienceData = [
  {
    company: "Zenbeta Technologies",
    role: "Junior Application Developer",
    type: "Full-time",
    period: "November 2024 – Present",
    location: "Hyderabad",
    icon: TrendingUp,
    color: "green",
    isCurrent: true,
    skills: ["React Native", "MERN Stack", "TypeScript", "Next.js", "PostgreSQL", "Zustand", "Figma", "Javascript", "Docker"]
  },
  {
    company: "Datapoint IT & Hardware Tech Pvt Ltd",
    role: "Node.js & Django Intern",
    type: "Internship",
    period: "March 2024 – June 2024",
    location: "Hyderabad",
    icon: Award,
    color: "blue",
    isCurrent: false,
    skills: ["REST APIs", "Django", "API Integration", "Postman", "Node.js"]
  },
  {
    company: "Datapoint IT & Hardware Tech Pvt Ltd",
    role: "Python Programming Intern",
    type: "Internship",
    period: "December 2024 – January 2023",
    location: "Hyderabad",
    icon: Briefcase,
    color: "accent",
    isCurrent: false,
    skills: ["Python", "Logical Programming", "Debugging", "Application Development Work Flow"]
  }
];

const Experience = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="section-badge">Experience</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-16">
          <BlurText text="Career Roadmap" />
        </h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const Icon = exp.icon;
              const colorClasses = {
                green: "text-green-400 border-green-400/30 bg-green-400/10",
                blue: "text-blue-400 border-blue-400/30 bg-blue-400/10",
                accent: "text-accent border-accent/30 bg-accent/10"
              };
              const glowClasses = {
                green: "from-green-500/20 to-emerald-500/20 hover:border-green-400/30",
                blue: "from-blue-500/20 to-purple-500/20 hover:border-blue-400/30",
                accent: "from-accent/20 to-primary/20 hover:border-accent/30"
              };

              return (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 sm:left-12 -translate-x-1/2 top-8 z-10">
                    <div className={`liquid-glass-strong rounded-full w-6 h-6 flex items-center justify-center ${colorClasses[exp.color]} border-2`}>
                      <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="absolute inset-0 bg-gradient-to-r ${glowClasses[exp.color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative liquid-glass rounded-2xl p-6 sm:p-8 ml-16 sm:ml-20 border border-foreground/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                      <div className="relative shrink-0">
                        <div className={`liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center ${colorClasses[exp.color]} border`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        {exp.isCurrent && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-heading italic text-foreground">{exp.company}</h3>
                          <span className={`liquid-glass rounded-full px-2 py-1 text-xs font-body ${colorClasses[exp.color]} border`}>
                            {exp.type}
                          </span>
                          {exp.isCurrent && (
                            <span className="liquid-glass-strong rounded-full px-2 py-1 text-xs font-body text-green-400 border border-green-400/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-foreground/80 font-body text-lg mb-2">{exp.role}</p>
                        <div className="flex flex-wrap items-center gap-4 text-foreground/50 font-body text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="ml-0 sm:ml-[4.5rem]">
                      <div className="flex items-center gap-2 mb-3">
                        <ChevronRight className={`w-4 h-4 ${colorClasses[exp.color].split(' ')[0]}`} />
                        <span className="text-foreground/40 font-body text-xs uppercase tracking-wider">Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`liquid-glass rounded-full px-3 py-1.5 text-xs font-body text-foreground/70 border border-foreground/20 hover:${colorClasses[exp.color].split(' ')[0]} transition-colors cursor-default`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Experience;

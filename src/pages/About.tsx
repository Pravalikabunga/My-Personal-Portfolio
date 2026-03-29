import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";

const techSkills = [
  { cat: "Languages", items: "Python, Java, C, R" },
  { cat: "Web Development", items: "HTML, CSS, JavaScript, React.js, Node.js, Express.js" },
  { cat: "Mobile", items: "React Native" },
  { cat: "Databases", items: "MySQL, MongoDB, Supabase" },
  { cat: "Design", items: "Figma, Canva, Adobe Photoshop, Corel Draw" },
  { cat: "Testing", items: "Manual Testing, Apache JMeter" },
  { cat: "Tools", items: "VS Code, Git, GitHub, Jupyter Notebook, Postman" },
];

const interests = [
  "Full Stack Web Development",
  "Mobile App Development",
  "Python Development",
  "UI/UX Design",
  "AI-Powered Applications",
  "Quality Assurance & Testing",
];

const About = () => (
  <div className="bg-background overflow-visible min-h-screen">
    <Navbar />

    <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">About Me</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-8">
          <BlurText text="Pravalika Bunga" />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-foreground/60 font-body font-light text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Aspiring Full Stack Developer and UI/UX Designer with internship experience in web development and design. Passionate about building scalable applications, creating intuitive user interfaces, and applying modern tools to deliver impactful digital solutions.
        </motion.p>
      </div>
    </section>

    {/* SKILLS */}
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techSkills.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="liquid-glass rounded-2xl p-5"
            >
              <h3 className="text-sm font-body font-semibold text-foreground mb-1">{s.cat}</h3>
              <p className="text-foreground/60 font-body font-light text-sm">{s.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* INTERESTS */}
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">Areas of Interest</h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((item) => (
            <span key={item} className="liquid-glass rounded-full px-5 py-2.5 text-sm font-body font-light text-foreground/80">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* SOFT SKILLS */}
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">Soft Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Self-learning", "Leadership", "Adaptability", "Work Ethic", "Creativity"].map((s) => (
            <span key={s} className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;

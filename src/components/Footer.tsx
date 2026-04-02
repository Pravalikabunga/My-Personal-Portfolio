import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
        Let's build something amazing.
      </h2>
      <p className="text-foreground/60 font-body font-light text-sm max-w-md mx-auto mb-8 sm:mb-10 px-4">
        Open to opportunities and collaborations. Let's connect and create impactful digital experiences together.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap px-4">
        <Link
          to="/contact"
          className="liquid-glass-strong rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium font-body text-foreground inline-flex items-center gap-2 hover:bg-foreground/5 transition-colors"
        >
          Get in Touch <ArrowUpRight className="w-4 h-4" />
        </Link>
        <a
          href="https://github.com/Pravalikabunga"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium font-body inline-flex items-center gap-2 hover:bg-foreground/90 transition-colors"
        >
          View GitHub
        </a>
      </div>
      <div className="mt-20 sm:mt-24 lg:mt-32 pt-6 sm:pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <p className="text-foreground/40 text-xs font-body">© 2026 Pravalika Bunga</p>
        <div className="flex gap-4 sm:gap-6">
          <a href="mailto:bungapravalika07@gmail.com" className="text-foreground/40 text-xs font-body hover:text-foreground/60 transition-colors">Email</a>
          <a href="https://linkedin.com/in/pravalika-bunga" target="_blank" rel="noopener noreferrer" className="text-foreground/40 text-xs font-body hover:text-foreground/60 transition-colors">LinkedIn</a>
          <a href="https://github.com/Pravalikabunga" target="_blank" rel="noopener noreferrer" className="text-foreground/40 text-xs font-body hover:text-foreground/60 transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

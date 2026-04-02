import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Education", to: "/education" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-1 max-w-4xl w-full">
        <Link to="/" className="font-heading italic text-foreground text-xl px-3 shrink-0">
          PB
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium font-body px-3 py-1.5 rounded-full transition-colors ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-medium font-body shrink-0 hover:bg-foreground/90 transition-colors"
        >
          Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto px-3 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-16 left-3 sm:left-4 right-3 sm:right-4 liquid-glass-strong rounded-2xl p-4 flex flex-col gap-2 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium font-body text-foreground/80 hover:text-foreground py-2 px-3 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-foreground text-background rounded-full px-4 py-2 text-sm font-medium font-body mt-2"
          >
            Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

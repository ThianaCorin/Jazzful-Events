import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Formules musicales", href: "#formations" },
  { label: "Événements", href: "#events" },
  { label: "Galerie", href: "#gallery" },
  { label: "Répertoire", href: "#repertoire" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          Jazzful Events
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold font-sans hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-card"
          >
            Demander un devis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-foreground/5 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-sans font-medium text-foreground py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold font-sans text-center mt-2"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

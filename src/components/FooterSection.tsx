const FooterSection = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-4">Jazzful Events</h3>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
              Collectif de musiciens de jazz spécialisé dans les prestations événementielles haut de gamme en Provence et à l'international.
            </p>
          </div>
          <div>
            <h4 className="text-label text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Formations", "Événements", "Galerie", "Répertoire", "Témoignages", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-label text-primary mb-4">Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/60">
              <li>contact@jazzful-events.fr</li>
              <li>+33 6 XX XX XX XX</li>
              <li>Aix-en-Provence, France</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-sans text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Jazzful Events. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

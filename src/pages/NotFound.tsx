import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="font-serif text-heading mb-4">404 – Mauvaise note.</h1>
        <p className="text-muted-foreground mb-8">
          Cette page n’est plus dans la partition. Mais pas d’inquiétude, l’ambiance continue juste ici.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Revenir à l’univers Jazzful
        </a>
      </div>
    </div>
  );
};

export default NotFound;
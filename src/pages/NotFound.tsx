import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import partitionImage from "@/assets/404-partition.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <img
          src={partitionImage}
          alt="Partition de musique"
          className="w-64 md:w-96 mx-auto mb-8 opacity-60"
        />
        <h1 className="font-serif text-heading mb-4">404 – Mauvaise note.</h1>
        <p className="text-muted-foreground mb-8">
          Une fausse note s’est glissée dans le programme.
          Retournez à l’accueil pour retrouver l’ambiance Jazzful.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Revenir à l'univers Jazzful
        </a>
      </div>
    </div>
  );
};

export default NotFound;
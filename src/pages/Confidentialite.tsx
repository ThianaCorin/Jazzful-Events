import { Link } from "react-router-dom";

const Confidentialite = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container max-w-3xl py-24 md:py-32">

                <Link
                    to="/"
                    className="text-label text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 inline-block"
                >
                    ← Retour à l'accueil
                </Link>

                <h1 className="font-serif text-heading font-light text-foreground mb-4">
                    Politique de confidentialité
                </h1>
                <p className="font-sans text-sm text-muted-foreground mb-16">
                    Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <div className="space-y-12 font-sans text-foreground">

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Responsable du traitement</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Jazzful Events<br />
                            Pertuis, France<br />
                            <a href="mailto:contact@jazzful-events.fr" className="text-primary hover:underline">
                                contact@jazzful-events.fr
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Données collectées</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Dans le cadre de votre demande de devis, nous collectons les informations suivantes :
                            nom complet, adresse email, numéro de téléphone (optionnel), date et lieu de l'événement,
                            nombre d'invités estimé, ainsi que tout message que vous nous adressez.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Finalité du traitement</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Ces données sont collectées dans le seul but de répondre à votre demande et d'établir
                            un devis personnalisé. Elles ne sont ni revendues, ni transmises à des tiers,
                            ni utilisées à des fins commerciales ou publicitaires.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Durée de conservation</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Vos données sont conservées le temps nécessaire au traitement de votre demande,
                            et au maximum 3 ans à compter de notre dernier échange.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Vos droits</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Conformément au Règlement Général sur la Protection des Données (RGPD),
                            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
                            concernant vos données personnelles. Pour exercer ces droits, contactez-nous à :{" "}
                            <a href="mailto:contact@jazzful-events.fr" className="text-primary hover:underline">
                                contact@jazzful-events.fr
                            </a>
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
                            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                www.cnil.fr
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-medium mb-4">Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Ce site n'utilise pas de cookies de tracking ou publicitaires. Aucune donnée
                            de navigation n'est collectée ni transmise à des tiers.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Confidentialite;
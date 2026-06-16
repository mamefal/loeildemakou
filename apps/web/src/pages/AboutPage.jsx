import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>À propos - L'œil de Makou</title>
        <meta name="description" content="Découvrez le manifeste éditorial et l'équipe derrière L'œil de Makou." />
      </Helmet>

      <Header />

      <main className="flex-grow py-24 container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Notre manifeste éditorial</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mode n'est pas frivole. Elle est un reflet direct de notre époque, de ses combats, de ses désirs et de ses contradictions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'œil de Makou est né d'une volonté : celle de regarder l'industrie de la mode avec acuité, sans complaisance mais avec passion. Nous refusons le simple relais des communiqués de presse pour offrir à nos lecteurs de véritables analyses, des critiques constructives et des opinions tranchées.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted relative">
              {/* Fallback image if custom one is needed, using a generic editorial fashion image */}
              <img 
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        <div className="space-y-12 border-t border-border pt-16">
          <section>
            <h2 className="font-serif text-3xl font-bold mb-6">L'approche Makou</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Nous abordons la mode comme un fait culturel global. De l'artisanat des ateliers de Haute Couture aux implications écologiques de la fast fashion, chaque sujet mérite une réflexion poussée.</p>
              <p>Notre engagement envers vous, lecteurs, est l'indépendance de ton. Nous applaudissons la création lorsqu'elle est novatrice, et nous questionnons les systèmes lorsqu'ils deviennent obsolètes.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
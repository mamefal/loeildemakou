import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const LegalPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Mentions Légales - L'œil de Makou</title>
        <meta name="description" content="Mentions légales et politique de confidentialité de L'œil de Makou." />
      </Helmet>

      <Header />

      <main className="flex-grow py-24 container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12">Mentions légales & Politique de confidentialité</h1>
        
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">Éditeur du site</h2>
            <p>Le site L'œil de Makou est édité à titre personnel. Pour toute demande, veuillez utiliser le formulaire de contact prévu à cet effet ou l'adresse email rédaction.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">Hébergement</h2>
            <p>Ce site est hébergé par Hostinger.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
            <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">Protection des données personnelles (RGPD)</h2>
            <p>Les informations recueillies via notre formulaire de contact et notre formulaire d'inscription à la newsletter sont enregistrées dans un fichier informatisé pour la gestion des demandes et l'envoi de communications.</p>
            <p>Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant l'éditeur via le formulaire de contact.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
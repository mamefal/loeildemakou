import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm.jsx';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24 border-t-4 border-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <span className="font-serif text-3xl font-bold tracking-tight text-background">
              L'œil de Makou
            </span>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Critiques mode, analyses et opinions. Un regard aiguisé sur les tendances d'aujourd'hui et de demain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-accent">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/decryptages" className="text-primary-foreground/80 hover:text-accent transition-colors">Décryptages</Link></li>
              <li><Link to="/collections" className="text-primary-foreground/80 hover:text-accent transition-colors">Collections</Link></li>
              <li><Link to="/createurs" className="text-primary-foreground/80 hover:text-accent transition-colors">Créateurs</Link></li>
              <li><Link to="/opinions" className="text-primary-foreground/80 hover:text-accent transition-colors">Opinions</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-accent">À propos</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">L'Édito</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/legal" className="text-primary-foreground/80 hover:text-accent transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-accent">Restons en contact</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières analyses directement dans votre boîte mail.
            </p>
            <div className="bg-primary-foreground/5 p-4 rounded-xl border border-primary-foreground/10">
              <NewsletterForm />
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} L'œil de Makou. Tous droits réservés.</p>
          <p>Design épuré et intentionnel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

// Fallback images mapping for the migrated articles
const getFallbackImage = (slug) => {
  const map = {
    'emilie-rousseau-couturiere-minimaliste': 'https://images.unsplash.com/photo-1575383596664-30f4489f9786',
    'sophie-martin-influenceuse-mode': 'https://images.unsplash.com/photo-1603370928866-e15805756740',
    'marc-delacroix-streetwear': 'https://images.unsplash.com/photo-1635521071003-d9a00f967e0b',
    'jade-chen-fusion-mode': 'https://images.unsplash.com/photo-1684821737344-4bdd5db7cc5a',
    'thomas-beaumont-photographe': 'https://images.unsplash.com/photo-1695133640402-c4066fe09713'
  };
  return map[slug] || 'https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40';
};

const CreateursPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const categorySlug = 'createurs';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const records = await pb.collection('articles').getList(1, 20, {
          filter: `published = true && category.slug = "${categorySlug}"`,
          sort: '-created',
          expand: 'category',
          $autoCancel: false
        });
        setArticles(records.items);
      } catch (error) {
        console.error("Error fetching createurs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featuredArticles = articles.slice(0, 5);
  const latestArticles = articles.slice(5);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Créateurs & Talents - L'œil de Makou</title>
        <meta name="description" content="Découvrez les designers, influenceurs, stylistes et photographes qui façonnent l'industrie de la mode d'aujourd'hui." />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block flex items-center justify-center gap-2">
                <Star className="h-4 w-4" /> La Plateforme des Talents
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Qui faut-il suivre ?
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
                Designers émergents, influenceurs prescripteurs, stylistes visionnaires et photographes de génie. L'œil de Makou met en lumière les créateurs qui redéfinissent l'esthétique contemporaine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Creators Grid (Bento-style) */}
        <section className="py-20 container mx-auto px-4 max-w-7xl -mt-16 relative z-20">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Skeleton key={i} className={`rounded-2xl bg-card ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[600px]' : 'h-[300px]'}`} />
              ))}
            </div>
          ) : featuredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
              {featuredArticles.map((article, idx) => {
                const isLarge = idx === 0;
                const imageUrl = article.featured_image 
                  ? pb.files.getUrl(article, article.featured_image) 
                  : getFallbackImage(article.slug);

                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl bg-card shadow-lg shadow-primary/5 border border-border/50 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                  >
                    <Link to={`/articles/${article.slug}`} className="absolute inset-0 z-10">
                      <span className="sr-only">Lire {article.title}</span>
                    </Link>
                    <img 
                      src={imageUrl} 
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <span className="text-accent font-bold uppercase tracking-wider text-xs mb-3 inline-block">
                        {article.expand?.category?.name || 'Créateurs'}
                      </span>
                      <h3 className={`font-serif font-bold text-primary-foreground leading-tight mb-2 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                        {article.title}
                      </h3>
                      {isLarge && (
                        <p className="text-primary-foreground/80 line-clamp-2 mt-2 max-w-xl">
                          {article.excerpt}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24 bg-card rounded-2xl border border-border">
              <p className="text-muted-foreground">Aucun portrait de créateur disponible pour le moment.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Vous voulez être featured ?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              L'œil de Makou est constamment à la recherche de nouveaux talents, de visions disruptives et de voix singulières. Rejoignez notre plateforme et bénéficiez d'une visibilité auprès d'une audience de professionnels et de passionnés.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base uppercase tracking-wider rounded-none">
              <Link to="/contact">Proposer un profil <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        {/* Latest Portraits (if any more exist) */}
        {latestArticles.length > 0 && (
          <section className="py-24 container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-serif text-3xl font-bold text-primary">Derniers Portraits</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <Link key={article.id} to={`/articles/${article.slug}`} className="group flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.featured_image ? pb.files.getUrl(article, article.featured_image) : getFallbackImage(article.slug)} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Portrait</span>
                      <span className="text-xs text-muted-foreground">{format(new Date(article.created), 'dd MMM yyyy', { locale: fr })}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider group-hover:underline mt-auto inline-flex items-center">
                      Découvrir <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CreateursPage;
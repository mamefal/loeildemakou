import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import NewsletterForm from '@/components/NewsletterForm.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const EditorialBlock = ({ title, question, articles, loading, linkTo }) => (
  <section className="section-spacing border-t border-border/50">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground font-medium italic">{question}</p>
        </div>
        <Link to={linkTo} className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors group">
          Voir tout <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="flex flex-col h-full">
              <Skeleton className="aspect-[4/3] rounded-xl mb-4" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-16 w-full" />
            </div>
          ))
        ) : articles.length > 0 ? (
          articles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))
        ) : (
          <p className="text-muted-foreground col-span-3 py-8">Aucun article disponible pour le moment.</p>
        )}
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const [data, setData] = useState({
    featured: null,
    decryptages: [],
    collections: [],
    createurs: [],
    industrie: [],
    fashionWeek: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEditorialData = async () => {
      setLoading(true);
      try {
        // Fetch featured article
        const featuredRes = await pb.collection('articles').getList(1, 1, {
          filter: 'published = true && featured = true',
          sort: '-created',
          expand: 'category',
          $autoCancel: false
        });

        // Helper to fetch by category slug
        const fetchByCategory = async (slug) => {
          return pb.collection('articles').getList(1, 3, {
            filter: `published = true && category.slug = "${slug}"`,
            sort: '-created',
            expand: 'category',
            $autoCancel: false
          }).then(res => res.items).catch(() => []);
        };

        const [decryptages, collections, createurs, industrie, fashionWeek] = await Promise.all([
          fetchByCategory('decryptages'),
          fetchByCategory('collections'),
          fetchByCategory('createurs'),
          fetchByCategory('industrie-innovation'),
          fetchByCategory('fashion-week')
        ]);

        setData({
          featured: featuredRes.items[0] || null,
          decryptages,
          collections,
          createurs,
          industrie,
          fashionWeek
        });
      } catch (error) {
        console.error("Error fetching editorial data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEditorialData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>L'œil de Makou - Comprendre la mode au-delà des vêtements</title>
        <meta name="description" content="Le média qui décrypte la mode, la création et l'industrie. Analyses, collections, créateurs, innovation textile et coulisses." />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* BLOC 1 - HERO PRINCIPAL */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1550322532-9adfdfda7fb6" 
              alt="Editorial Fashion" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-bold tracking-tight mb-6 leading-tight">
                Comprendre la mode au-delà des vêtements.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Analyses, collections, créateurs, innovation textile et coulisses de l'industrie de la mode.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-none px-8 py-6 text-sm uppercase tracking-wider">
                  <Link to="/decryptages">Lire les derniers articles</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto rounded-none px-8 py-6 text-sm uppercase tracking-wider">
                  <a href="#newsletter">S'abonner à la newsletter</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BLOC 2 - À LA UNE */}
        <section className="section-spacing container mx-auto px-4 max-w-7xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px bg-primary flex-grow"></div>
            <h2 className="font-serif text-2xl font-bold text-primary uppercase tracking-widest">À la Une</h2>
            <div className="h-px bg-primary flex-grow"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-xl" />
              <div className="flex flex-col justify-center space-y-6">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-12 w-48" />
              </div>
            </div>
          ) : data.featured ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl overflow-hidden shadow-xl shadow-primary/5 border border-border/50">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden">
                <img 
                  src={pb.files.getUrl(data.featured, data.featured.featured_image)} 
                  alt={data.featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
                  {data.featured.expand?.category?.name || 'Édito'}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {data.featured.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {data.featured.excerpt}
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit rounded-none px-8">
                  <Link to={`/articles/${data.featured.slug}`}>Lire l'article <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Aucun article à la une.</p>
          )}
        </section>

        {/* BLOC 3 - DÉCRYPTAGES */}
        <EditorialBlock 
          title="Décryptages" 
          question="Pourquoi ce sujet est important ?" 
          articles={data.decryptages} 
          loading={loading} 
          linkTo="/decryptages" 
        />

        {/* BLOC 4 - COLLECTIONS */}
        <EditorialBlock 
          title="Collections" 
          question="Qu'a voulu raconter le créateur ?" 
          articles={data.collections} 
          loading={loading} 
          linkTo="/collections" 
        />

        {/* BLOC 5 - CRÉATEURS */}
        <EditorialBlock 
          title="Créateurs" 
          question="Qui faut-il suivre ?" 
          articles={data.createurs} 
          loading={loading} 
          linkTo="/createurs" 
        />

        {/* BLOC 6 - INDUSTRIE & INNOVATION (Competitive Advantage) */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-3">Industrie & Innovation</h2>
                <p className="text-lg text-primary-foreground/80 font-medium italic">Comment la mode est-elle réellement fabriquée ?</p>
              </div>
              <Link to="/industrie-innovation" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:text-accent transition-colors group">
                Voir tout <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loading ? (
                [1, 2, 3].map(i => (
                  <div key={i} className="flex flex-col h-full">
                    <Skeleton className="aspect-[4/3] rounded-xl mb-4 bg-primary-foreground/20" />
                    <Skeleton className="h-6 w-3/4 mb-3 bg-primary-foreground/20" />
                    <Skeleton className="h-16 w-full bg-primary-foreground/20" />
                  </div>
                ))
              ) : data.industrie.length > 0 ? (
                data.industrie.map((article, idx) => (
                  <motion.div 
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group flex flex-col h-full"
                  >
                    <Link to={`/articles/${article.slug}`} className="flex flex-col h-full">
                      <div className="overflow-hidden rounded-xl bg-primary-foreground/10 mb-4 aspect-[4/3]">
                        <img 
                          src={article.featured_image ? pb.files.getUrl(article, article.featured_image, { thumb: '800x600' }) : 'https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40'} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors leading-snug mb-3">
                        {article.title}
                      </h3>
                      <p className="text-primary-foreground/70 leading-relaxed line-clamp-3 mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      <span className="text-sm font-medium text-accent uppercase tracking-wider group-hover:underline mt-auto inline-block">
                        Lire la suite
                      </span>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <p className="text-primary-foreground/70 col-span-3 py-8">Aucun article disponible pour le moment.</p>
              )}
            </div>
          </div>
        </section>

        {/* BLOC 7 - FASHION WEEK */}
        <EditorialBlock 
          title="Fashion Week" 
          question="Que s'est-il passé cette saison ?" 
          articles={data.fashionWeek} 
          loading={loading} 
          linkTo="/fashion-week" 
        />

        {/* BLOC 8 - NEWSLETTER */}
        <section id="newsletter" className="py-24 bg-muted border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">Restez à l'avant-garde</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rejoignez notre communauté de lecteurs exigeants. Recevez nos analyses, critiques et décryptages directement dans votre boîte de réception.
            </p>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
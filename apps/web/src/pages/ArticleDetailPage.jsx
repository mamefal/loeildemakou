import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SocialShareButtons from '@/components/SocialShareButtons.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(false);
      try {
        const record = await pb.collection('articles').getFirstListItem(`slug="${slug}"`, {
          expand: 'category',
          $autoCancel: false
        });
        setArticle(record);

        // Fetch related articles
        if (record.category) {
          const related = await pb.collection('articles').getList(1, 3, {
            filter: `category="${record.category}" && id!="${record.id}" && published=true`,
            sort: '-created',
            expand: 'category',
            $autoCancel: false
          });
          setRelatedArticles(related.items);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 max-w-4xl py-24">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-16 w-3/4 mb-8" />
          <Skeleton className="aspect-[21/9] w-full mb-12 rounded-xl" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-2/3 mb-4" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-24">
          <h1 className="font-serif text-3xl font-bold mb-4">Article introuvable</h1>
          <p className="text-muted-foreground mb-8">Cet article n'existe pas ou a été retiré.</p>
          <Button asChild>
            <Link to="/articles">Retour aux articles</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrl = article.featured_image 
    ? pb.files.getUrl(article, article.featured_image) 
    : 'https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40';

  const categoryName = article.expand?.category?.name || 'Général';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{article.title} - L'œil de Makou</title>
        <meta name="description" content={article.meta_description || article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.meta_description || article.excerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <article className="container mx-auto px-4 max-w-3xl py-16 md:py-24">
          <header className="mb-12 text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary uppercase tracking-wider">
              {categoryName}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-balance">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
              <time dateTime={article.created}>
                {format(new Date(article.created), 'd MMMM yyyy', { locale: fr })}
              </time>
              <span>•</span>
              <span>Par L'œil de Makou</span>
            </div>
          </header>

          <figure className="mb-16">
            <img 
              src={imageUrl} 
              alt={article.title}
              className="w-full rounded-2xl aspect-[16/9] md:aspect-[21/9] object-cover"
            />
          </figure>

          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary">
            {/* For real rich text we might use markdown parser or dangerouslySetInnerHTML. Assuming text for now or simple HTML from DB */}
            <div className="whitespace-pre-wrap font-sans text-[17px] leading-8 text-foreground/80">
              {article.content}
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Partager cet article</span>
            <SocialShareButtons url={currentUrl} title={article.title} />
          </footer>
        </article>

        {relatedArticles.length > 0 && (
          <section className="bg-muted py-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="font-serif text-3xl font-bold mb-12 text-center">Sur le même sujet</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map(rel => (
                  <ArticleCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
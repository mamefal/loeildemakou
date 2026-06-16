import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion } from 'framer-motion';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const record = await pb.collection('articles').getFirstListItem(`slug="${slug}"`, {
          expand: 'category',
          $autoCancel: false
        });
        setArticle(record);

        const allArticles = await pb.collection('articles').getFullList({
          filter: 'published = true',
          sort: '-created',
          $autoCancel: false
        });

        const currentIndex = allArticles.findIndex((a) => a.id === record.id);
        if (currentIndex > 0) setNextArticle(allArticles[currentIndex - 1]);
        if (currentIndex < allArticles.length - 1) setPrevArticle(allArticles[currentIndex + 1]);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-1 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="aspect-[21/9] w-full rounded-2xl mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <main className="flex-1 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <Link to="/blog">
              <Button variant="outline">Retour au blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const imageUrl = article.featured_image
    ? pb.files.getUrl(article, article.featured_image)
    : 'https://images.unsplash.com/photo-1617451588899-7ac8679908c7';

  return (
    <>
      <Helmet>
        <title>{`${article.title} - loeildemakou`}</title>
        <meta name="description" content={article.excerpt || article.title} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full aspect-[21/9] object-cover rounded-2xl mb-8 shadow-lg"
              />

              <div className="flex items-center gap-3 mb-6">
                {article.expand?.category && (
                  <Badge variant="secondary">{article.expand.category.name}</Badge>
                )}
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <time dateTime={article.created}>
                    {format(new Date(article.created), 'd MMMM yyyy', { locale: fr })}
                  </time>
                </div>
                <span className="text-sm text-muted-foreground">• Par loeildemakou</span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
              >
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {article.content}
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
              {prevArticle ? (
                <Link to={`/blog/${prevArticle.slug}`}>
                  <Button variant="outline" className="group transition-all duration-200">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={20} />
                    Article précédent
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              {nextArticle ? (
                <Link to={`/blog/${nextArticle.slug}`}>
                  <Button variant="outline" className="group transition-all duration-200">
                    Article suivant
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetailPage;
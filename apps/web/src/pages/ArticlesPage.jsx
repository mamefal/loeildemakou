import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleGrid from '@/components/ArticleGrid.jsx';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const perPage = 12;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const records = await pb.collection('articles').getList(page, perPage, {
          filter: 'published = true',
          sort: '-created',
          expand: 'category',
          $autoCancel: false
        });
        setArticles(records.items);
        setTotalPages(records.totalPages);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Articles - L'œil de Makou</title>
        <meta name="description" content="Découvrez tous nos articles, analyses et critiques mode." />
      </Helmet>

      <Header />

      <main className="flex-grow py-16 container mx-auto px-4 max-w-7xl">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Tous nos articles</h1>
          <p className="text-muted-foreground text-lg">Parcourez l'intégralité de nos publications, des critiques de défilés aux analyses de fond.</p>
        </header>

        <ArticleGrid articles={articles} loading={loading} />

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-4 border-t border-border pt-8">
            <Button 
              variant="outline" 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" /> Précédent
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              Page {page} sur {totalPages}
            </span>
            <Button 
              variant="outline" 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Suivant <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleGrid from '@/components/ArticleGrid.jsx';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IndustrieInnovationPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const categorySlug = 'industrie-innovation';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const records = await pb.collection('articles').getList(page, 12, {
          filter: `published = true && category.slug = "${categorySlug}"`,
          sort: '-created',
          expand: 'category',
          $autoCancel: false
        });
        setArticles(records.items);
        setTotalPages(records.totalPages);
      } catch (error) {
        console.error("Error fetching industrie:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Industrie & Innovation - L'œil de Makou</title>
        <meta name="description" content="Savoir-faire, innovation textile, supply chain et coulisses de l'industrie de la mode." />
      </Helmet>

      <Header />

      <main className="flex-grow py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Industrie & Innovation</h1>
          <p className="text-accent font-medium italic text-xl mb-6">Comment la mode est-elle réellement fabriquée ?</p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Notre regard exclusif sur les rouages de l'industrie : du savoir-faire artisanal aux révolutions technologiques, en passant par les enjeux écologiques et la supply chain.
          </p>
        </header>

        <ArticleGrid articles={articles} loading={loading} />

        {!loading && totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-4 border-t border-border pt-8">
            <Button variant="outline" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <ChevronLeft className="h-4 w-4 mr-2" /> Précédent
            </Button>
            <span className="text-sm font-medium text-muted-foreground">Page {page} sur {totalPages}</span>
            <Button variant="outline" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Suivant <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default IndustrieInnovationPage;
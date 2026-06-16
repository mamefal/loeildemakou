import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import Pagination from '@/components/Pagination.jsx';
import { Skeleton } from '@/components/ui/skeleton';
import { useArticles } from '@/hooks/useArticles.js';

const ARTICLES_PER_PAGE = 6;

const BlogPage = () => {
  const { articles, loading } = useArticles({ publishedOnly: true });
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Blog - loeildemakou</title>
        <meta name="description" content="Lisez les derniers articles et réflexions de loeildemakou sur la photographie et l'art visuel." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
              >
                Blog
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Réflexions, histoires et découvertes visuelles
              </p>
            </motion.div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[16/10] w-full rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : currentArticles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Aucun article publié pour le moment</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ArticleCard article={article} />
                    </motion.div>
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
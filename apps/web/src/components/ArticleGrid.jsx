import React from 'react';
import ArticleCard from '@/components/ArticleCard.jsx';
import { Skeleton } from '@/components/ui/skeleton';

const ArticleGrid = ({ articles, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="flex flex-col">
            <Skeleton className="aspect-[4/3] rounded-xl mb-4" />
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-16 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-24 text-muted-foreground">
        Aucun article trouvé.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;
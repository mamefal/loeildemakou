import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import pb from '@/lib/pocketbaseClient.js';
import { Badge } from '@/components/ui/badge';

const ArticleCard = ({ article, featured = false }) => {
  const categoryName = article.expand?.category?.name || 'Général';
  const imageUrl = article.featured_image 
    ? pb.files.getUrl(article, article.featured_image, { thumb: '800x600' })
    : 'https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40'; // Fallback

  return (
    <Link to={`/articles/${article.slug}`} className="group flex flex-col h-full">
      <div className={`overflow-hidden rounded-xl bg-muted mb-4 ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img 
          src={imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="outline" className="text-xs font-medium border-primary/20 text-primary uppercase tracking-wider">
            {categoryName}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {format(new Date(article.created), 'd MMMM yyyy', { locale: fr })}
          </span>
        </div>
        <h3 className={`font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-3 ${featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
          {article.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow">
          {article.excerpt}
        </p>
        <span className="text-sm font-medium text-primary uppercase tracking-wider group-hover:underline mt-auto inline-block">
          Lire la suite
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
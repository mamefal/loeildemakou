import React from 'react';
import { Button } from '@/components/ui/button';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <Button
        onClick={() => onCategoryChange(null)}
        variant={activeCategory === null ? 'default' : 'outline'}
        className="transition-all duration-200"
      >
        Tout
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          className="transition-all duration-200"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
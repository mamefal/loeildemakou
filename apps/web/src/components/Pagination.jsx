import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        size="icon"
        className="transition-all duration-200"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            variant={currentPage === page ? 'default' : 'outline'}
            size="sm"
            className="min-w-[40px] transition-all duration-200"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        size="icon"
        className="transition-all duration-200"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};

export default Pagination;
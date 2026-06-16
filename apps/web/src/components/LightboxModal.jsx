import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button';

const LightboxModal = ({ photo, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  const imageUrl = photo.image
    ? pb.files.getUrl(photo, photo.image)
    : photo.url;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 transition-all duration-200"
        aria-label="Close"
      >
        <X size={24} />
      </Button>

      {hasPrevious && (
        <Button
          onClick={onPrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </Button>
      )}

      {hasNext && (
        <Button
          onClick={onNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </Button>
      )}

      <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
        <img
          src={imageUrl}
          alt={photo.title || photo.description || 'Gallery image'}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        {(photo.title || photo.description) && (
          <div className="mt-4 text-center">
            {photo.title && (
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {photo.title}
              </h3>
            )}
            {photo.description && (
              <p className="text-sm text-white/80 max-w-2xl">
                {photo.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LightboxModal;
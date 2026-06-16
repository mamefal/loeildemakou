import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import LightboxModal from '@/components/LightboxModal.jsx';
import CategoryFilter from '@/components/CategoryFilter.jsx';
import { Skeleton } from '@/components/ui/skeleton';
import { useGalleryPhotos } from '@/hooks/useGalleryPhotos.js';
import { useCategories } from '@/hooks/useCategories.js';

const GalleryPage = () => {
  const { photos, loading: photosLoading } = useGalleryPhotos();
  const { categories, loading: categoriesLoading } = useCategories();
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredPhotos = activeCategory
    ? photos.filter((photo) => photo.category === activeCategory)
    : photos;

  const handlePrevious = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Galerie - loeildemakou</title>
        <meta name="description" content="Explorez la galerie photo de loeildemakou avec des images de nature, architecture et art abstrait." />
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
                Galerie
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Une collection d'images capturant la beauté du monde qui nous entoure
              </p>
            </motion.div>

            {!categoriesLoading && (
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            )}

            {photosLoading ? (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="w-full h-64 mb-6 rounded-lg" />
                ))}
              </div>
            ) : filteredPhotos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Aucune photo dans cette catégorie</p>
              </div>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <GalleryImage
                      photo={photo}
                      onClick={() => setSelectedPhotoIndex(index)}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />

        {selectedPhotoIndex !== null && (
          <LightboxModal
            photo={filteredPhotos[selectedPhotoIndex]}
            onClose={() => setSelectedPhotoIndex(null)}
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={selectedPhotoIndex > 0}
            hasNext={selectedPhotoIndex < filteredPhotos.length - 1}
          />
        )}
      </div>
    </>
  );
};

export default GalleryPage;
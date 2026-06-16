import React from 'react';
import pb from '@/lib/pocketbaseClient.js';

const GalleryImage = ({ photo, onClick }) => {
  const imageUrl = photo.image
    ? pb.files.getUrl(photo, photo.image, { thumb: '300x300' })
    : photo.url;

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer bg-muted"
      style={{ breakInside: 'avoid', marginBottom: '1rem' }}
    >
      <img
        src={imageUrl}
        alt={photo.title || photo.description || 'Gallery image'}
        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        {photo.title && (
          <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
            {photo.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryImage;
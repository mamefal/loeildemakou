import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export const useGalleryPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const records = await pb.collection('gallery_photos').getFullList({
        sort: '-created',
        expand: 'category',
        $autoCancel: false
      });
      setPhotos(records);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching photos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const createPhoto = async (data) => {
    const formData = new FormData();
    if (data.title) formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (data.category) formData.append('category', data.category);
    if (data.image?.[0]) formData.append('image', data.image[0]);

    const record = await pb.collection('gallery_photos').create(formData, { $autoCancel: false });
    await fetchPhotos();
    return record;
  };

  const deletePhoto = async (id) => {
    await pb.collection('gallery_photos').delete(id, { $autoCancel: false });
    await fetchPhotos();
  };

  return {
    photos,
    loading,
    error,
    createPhoto,
    deletePhoto,
    refetch: fetchPhotos
  };
};
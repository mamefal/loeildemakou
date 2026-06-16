import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export const useArticles = (options = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const records = await pb.collection('articles').getFullList({
        sort: '-created',
        expand: 'category',
        filter: options.publishedOnly ? 'published = true' : '',
        $autoCancel: false
      });
      setArticles(records);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const createArticle = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('excerpt', data.excerpt || '');
    formData.append('content', data.content);
    formData.append('published', data.published);
    if (data.category) formData.append('category', data.category);
    if (data.featured_image?.[0]) formData.append('featured_image', data.featured_image[0]);

    const record = await pb.collection('articles').create(formData, { $autoCancel: false });
    await fetchArticles();
    return record;
  };

  const updateArticle = async (id, data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('excerpt', data.excerpt || '');
    formData.append('content', data.content);
    formData.append('published', data.published);
    if (data.category) formData.append('category', data.category);
    if (data.featured_image?.[0]) formData.append('featured_image', data.featured_image[0]);

    const record = await pb.collection('articles').update(id, formData, { $autoCancel: false });
    await fetchArticles();
    return record;
  };

  const deleteArticle = async (id) => {
    await pb.collection('articles').delete(id, { $autoCancel: false });
    await fetchArticles();
  };

  return {
    articles,
    loading,
    error,
    createArticle,
    updateArticle,
    deleteArticle,
    refetch: fetchArticles
  };
};
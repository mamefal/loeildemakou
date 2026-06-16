import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ArticleForm = ({ article, rubriques, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      title: article?.title || '',
      slug: article?.slug || '',
      excerpt: article?.excerpt || '',
      content: article?.content || '',
      category: article?.category || '',
      published: article ? article.published : false,
      meta_description: article?.meta_description || ''
    }
  });

  // Auto-generate slug from title
  const title = watch('title');
  useEffect(() => {
    if (!article && title) {
      const slug = title
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setValue('slug', slug);
    }
  }, [title, article, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    
    // Append fields
    Object.keys(data).forEach(key => {
      if (key !== 'featured_image' && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });

    // Append file if exists
    const fileInput = document.getElementById('featured_image');
    if (fileInput && fileInput.files.length > 0) {
      formData.append('featured_image', fileInput.files[0]);
    }

    try {
      if (article) {
        await pb.collection('articles').update(article.id, formData, { $autoCancel: false });
        toast.success('Article mis à jour');
      } else {
        await pb.collection('articles').create(formData, { $autoCancel: false });
        toast.success('Article créé');
      }
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Titre</Label>
          <Input id="title" {...register('title', { required: true })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug URL</Label>
          <Input id="slug" {...register('slug', { required: true })} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Rubrique</Label>
        <Select onValueChange={(val) => setValue('category', val)} defaultValue={article?.category || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une rubrique" />
          </SelectTrigger>
          <SelectContent>
            {rubriques.map(rubrique => (
              <SelectItem key={rubrique.id} value={rubrique.id}>{rubrique.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Extrait (Page d'accueil/Liste)</Label>
        <Textarea id="excerpt" {...register('excerpt')} rows={2} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Contenu de l'article</Label>
        <Textarea id="content" {...register('content', { required: true })} rows={12} className="font-mono" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featured_image">Image à la une</Label>
        <Input id="featured_image" type="file" accept="image/*" />
        {article?.featured_image && (
          <p className="text-xs text-muted-foreground mt-1">Image actuelle: {article.featured_image}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="meta_description">Meta Description (SEO)</Label>
        <Input id="meta_description" {...register('meta_description')} />
      </div>

      <div className="flex items-center space-x-2 pt-4">
        <Switch 
          id="published" 
          onCheckedChange={(checked) => setValue('published', checked)}
          defaultChecked={article?.published || false}
        />
        <Label htmlFor="published">Publier l'article immédiatement</Label>
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t border-border">
        <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>Annuler</Button>
        <Button type="submit" disabled={loading}>{loading ? 'Enregistrement...' : 'Enregistrer'}</Button>
      </div>
    </form>
  );
};

export default ArticleForm;
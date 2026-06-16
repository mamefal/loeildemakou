import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PhotoUpload = ({ categories, onSave, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: ''
    }
  });

  const onSubmit = async (data) => {
    if (!data.image || data.image.length === 0) {
      toast.error('Veuillez sélectionner une image');
      return;
    }

    setLoading(true);
    try {
      await onSave(data);
      toast.success('Photo ajoutée');
    } catch (error) {
      toast.error('Erreur lors de l\'ajout');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="image">Image *</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          {...register('image', { required: 'L\'image est requise' })}
          onChange={handleImageChange}
          className="mt-1"
        />
        {errors.image && (
          <p className="text-sm text-destructive mt-1">{errors.image.message}</p>
        )}
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 w-full max-w-md rounded-lg" />
        )}
      </div>

      <div>
        <Label htmlFor="title">Titre</Label>
        <Input
          id="title"
          {...register('title')}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register('description')}
          rows={3}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="category">Catégorie</Label>
        <Select onValueChange={(value) => setValue('category', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Sélectionner une catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={loading} className="transition-all duration-200">
          {loading ? 'Ajout...' : 'Ajouter'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="transition-all duration-200">
          Annuler
        </Button>
      </div>
    </form>
  );
};

export default PhotoUpload;
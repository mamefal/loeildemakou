import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import pb from '@/lib/pocketbaseClient.js';
import { Mail } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await pb.collection('newsletter_signups').create({ email }, { $autoCancel: false });
      toast.success('Merci de votre inscription à notre newsletter.');
      setEmail('');
    } catch (error) {
      console.error(error);
      toast.error('Une erreur est survenue, ou cet email est déjà inscrit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Votre adresse email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-10 bg-background/50 border-border focus:border-primary transition-colors"
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
        {loading ? 'Inscription...' : 'S\'inscrire'}
      </Button>
    </form>
  );
};

export default NewsletterForm;
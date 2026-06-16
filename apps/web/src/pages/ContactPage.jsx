import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      toast.success('Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Une erreur est survenue lors de l\'envoi de votre message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contact - L'œil de Makou</title>
        <meta name="description" content="Contactez la rédaction de L'œil de Makou pour toute demande ou collaboration." />
      </Helmet>

      <Header />

      <main className="flex-grow py-24 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pour toute demande de partenariat, proposition de sujet ou question, n'hésitez pas à nous écrire ou utiliser le formulaire ci-dessous.
          </p>
          <div className="pt-4 font-medium text-primary">
            <a href="mailto:redaction@loeildemakou.com" className="hover:underline">redaction@loeildemakou.com</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                disabled={loading}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Adresse email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                disabled={loading}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Sujet</Label>
            <Input 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              disabled={loading}
              className="bg-muted/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Votre message</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={8} 
              value={formData.message} 
              onChange={handleChange} 
              required 
              disabled={loading}
              className="bg-muted/50 border-border focus:border-primary resize-none"
            />
          </div>

          <Button type="submit" size="lg" disabled={loading} className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-12">
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
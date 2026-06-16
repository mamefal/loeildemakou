import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin');
      toast.success('Connexion réussie');
    } catch (err) {
      console.error(err);
      toast.error('Identifiants incorrects');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Helmet>
        <title>Connexion - L'œil de Makou</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold">L'œil de Makou</h1>
          <p className="text-muted-foreground mt-2">Accès Rédaction</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required
              className="bg-muted/50"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground">
            {loading ? 'Vérification...' : 'Se connecter'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
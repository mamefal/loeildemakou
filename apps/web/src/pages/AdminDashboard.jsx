import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import ArticleForm from '@/components/ArticleForm.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [rubriques, setRubriques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [arts, cats] = await Promise.all([
        pb.collection('articles').getFullList({ sort: '-created', expand: 'category', $autoCancel: false }),
        pb.collection('categories').getFullList({ sort: 'name', $autoCancel: false })
      ]);
      setArticles(arts);
      setRubriques(cats);
    } catch (error) {
      console.error(error);
      toast.error('Erreur de chargement des données');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await pb.collection('articles').delete(id, { $autoCancel: false });
        toast.success('Article supprimé');
        fetchData();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setIsFormOpen(true);
  };

  const handleNew = () => {
    setEditingArticle(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingArticle(null);
    fetchData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Administration - L'œil de Makou</title>
      </Helmet>
      
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="font-serif text-3xl font-bold mb-8">Espace Rédaction</h1>

        {isFormOpen ? (
          <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6">
              {editingArticle ? 'Modifier l\'article' : 'Rédiger un nouvel article'}
            </h2>
            <ArticleForm 
              article={editingArticle} 
              rubriques={rubriques} 
              onSuccess={closeForm} 
              onCancel={() => setIsFormOpen(false)} 
            />
          </div>
        ) : (
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="categories">Rubriques</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Gestion des articles</h2>
                <Button onClick={handleNew}>
                  <Plus className="h-4 w-4 mr-2" /> Nouvel article
                </Button>
              </div>

              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground uppercase">
                      <tr>
                        <th className="px-6 py-4 font-medium">Titre</th>
                        <th className="px-6 py-4 font-medium">Rubrique</th>
                        <th className="px-6 py-4 font-medium">Statut</th>
                        <th className="px-6 py-4 font-medium">Date</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {loading ? (
                        <tr><td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">Chargement...</td></tr>
                      ) : articles.length === 0 ? (
                        <tr><td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">Aucun article.</td></tr>
                      ) : (
                        articles.map((art) => (
                          <tr key={art.id} className="hover:bg-muted/30 transition-colors">
                            <td className="px-6 py-4 font-medium truncate max-w-[250px]">{art.title}</td>
                            <td className="px-6 py-4 text-muted-foreground">{art.expand?.category?.name || '-'}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${art.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {art.published ? 'Publié' : 'Brouillon'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">{format(new Date(art.created), 'dd/MM/yyyy')}</td>
                            <td className="px-6 py-4 text-right space-x-2">
                              <Button variant="ghost" size="icon" onClick={() => handleEdit(art)}>
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleDelete(art.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="categories">
              <div className="p-8 bg-card rounded-xl border border-border text-center text-muted-foreground">
                <p>Gestion des rubriques : fonctionnalité en cours de développement.</p>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="p-8 bg-card rounded-xl border border-border space-y-4">
                <h3 className="font-semibold text-lg">Intégrations (Mockup)</h3>
                <p className="text-sm text-muted-foreground">Clé API Mailchimp, ID de suivi Google Analytics, etc.</p>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
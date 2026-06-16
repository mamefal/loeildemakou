import React from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SocialShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success('Lien copié dans le presse-papier');
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank')}>
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Partager sur Twitter</span>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}>
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Partager sur Facebook</span>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, '_blank')}>
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Partager sur LinkedIn</span>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full" onClick={handleCopy}>
        <Link2 className="h-4 w-4" />
        <span className="sr-only">Copier le lien</span>
      </Button>
    </div>
  );
};

export default SocialShareButtons;
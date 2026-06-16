import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Décryptages', href: '/decryptages' },
    { name: 'Collections', href: '/collections' },
    { name: 'Créateurs', href: '/createurs' },
    { name: 'Industrie & Innovation', href: '/industrie-innovation' },
    { name: 'Fashion Week', href: '/fashion-week' },
    { name: 'Opinions', href: '/opinions' },
    { name: 'À propos', href: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
              L'œil de Makou
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  isActive(item.href) ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-4">
                <Link to="/admin">
                  <Button variant="outline" size="sm" className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">Admin</Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout} className="text-primary hover:bg-primary/10 hover:text-primary">Déconnexion</Button>
              </div>
            ) : (
              <Link to="/login" className="hidden lg:flex text-foreground/60 hover:text-primary transition-colors">
                <User className="h-5 w-5" />
                <span className="sr-only">Admin Login</span>
              </Link>
            )}
            
            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 text-primary hover:text-primary/80 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden border-t border-border bg-background absolute w-full shadow-xl">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  isActive(item.href) ? "bg-primary/5 text-primary border-l-4 border-accent" : "text-foreground/80 hover:bg-muted hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <div className="pt-4 border-t border-border mt-4 flex flex-col gap-2 px-4">
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary">Admin Dashboard</Button>
                </Link>
                <Button variant="ghost" onClick={() => { logout(); setIsOpen(false); }} className="w-full justify-start text-primary">Déconnexion</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
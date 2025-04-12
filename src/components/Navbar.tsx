import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Food', href: '/food' },
  { name: 'Health', href: '/health' },
  { name: 'Education', href: '/education' },
  { name: 'Women Empowerment', href: '/gender-equality' },
  { name: 'Community', href: '/community' },
];

export function Navbar({ onOpenAuth }: { onOpenAuth: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <img 
            src={`${window.location.origin}/ecovedatop.png`}
            alt="EcoVeda Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                location.pathname === item.href
                  ? 'text-eco-green dark:text-eco-green-light font-semibold'
                  : 'text-muted-foreground hover:text-foreground dark:hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <Button 
            onClick={onOpenAuth} 
            variant="ghost" 
            size="sm" 
            className="hidden sm:flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Button>

          <Button 
            onClick={onOpenAuth} 
            variant="default"
            size="sm"
            className="bg-eco-green hover:bg-eco-green-dark text-white"
          >
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-md transition-all duration-300 animate-fade-in">
          <div className="container mx-auto py-3 px-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'px-4 py-3 rounded-md text-base font-medium transition-colors',
                    location.pathname === item.href
                      ? 'bg-secondary text-eco-green dark:text-eco-green-light font-semibold'
                      : 'text-muted-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  onOpenAuth();
                  setIsOpen(false);
                }} 
                variant="outline" 
                size="lg" 
                className="mt-2 justify-start text-muted-foreground"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login / Sign up
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

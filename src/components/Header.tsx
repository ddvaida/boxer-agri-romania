import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import boxerAgriLogo from '@/assets/boxer-agri-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    { name: 'Acasă', path: '/' },
    { name: 'Inventar', path: '/inventar' },
    { name: 'Știri', path: '/stiri' },
    { name: 'Despre Noi', path: '/despre' },
    { name: 'Locuri de Muncă', path: '/cariere' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-background shadow-card sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Program: Luni - Vineri: 8:00 - 18:00</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@boxeragri.ro" className="flex items-center space-x-1 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span>contact@boxeragri.ro</span>
            </a>
            <a href="tel:+40123456789" className="flex items-center space-x-1 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span>+40 123 456 789</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={boxerAgriLogo} alt="Boxer Agri România" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary font-serif">Boxer Agri</h1>
              <p className="text-sm text-muted-foreground">România</p>
            </div>
          </Link>

          {/* Main Navigation Menu - Identical to Original */}
          <div className="hidden lg:flex bg-primary text-primary-foreground py-3">
            <div className="container mx-auto px-4">
              <nav className="flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>UTILAJE AGRICOLE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>TRACTOARE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>REMORCI AGRICOLE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>UTILAJE CONSTRUCȚII</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>STIVUITOARE & LOGISTICĂ</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-secondary transition-colors">
                    <span>ALIMENTARE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <Button size="sm" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground ml-auto">
                  BRANDURI
                </Button>
              </nav>
            </div>
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search size={16} />
            </Button>
            <Button variant="default" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
              Cere Ofertă
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-foreground hover:text-primary transition-colors font-medium ${
                    isActive(item.path) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  <Search size={16} className="mr-2" />
                  Caută
                </Button>
                <Button variant="default" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                  Cere Ofertă
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
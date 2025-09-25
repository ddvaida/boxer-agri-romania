import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Search, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import boxerAgriLogo from '@/assets/boxer-agri-logo.png';
import { mainCategories } from '@/data/categories';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const topNavItems = [
    { name: 'INVENTAR', path: '/inventar' },
    { name: 'ȘTIRI', path: '/stiri' },
    { name: 'DESPRE NOI', path: '/despre' },
    { name: 'CARIERE', path: '/cariere' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const mainNavItems = [
    { 
      name: 'UTILAJE AGRICOLE', 
      path: '/utilaje-agricole',
      subcategories: mainCategories.find(cat => cat.id === 'agricultural-machinery')?.subcategories || []
    },
    { 
      name: 'TRACTOARE', 
      path: '/tractoare',
      subcategories: [
        { id: 'compact-tractors', name: 'Tractoare Compacte', nameEn: 'Compact tractors', link: '/tractoare/compacte', count: 25 },
        { id: 'agricultural-tractors', name: 'Tractoare Agricole', nameEn: 'Agricultural tractors', link: '/tractoare/agricole', count: 40 }
      ]
    },
    { 
      name: 'REMORCI AGRICOLE', 
      path: '/remorci-agricole',
      subcategories: [
        { id: 'tipping-trailers', name: 'Remorci Basculante', nameEn: 'Tipping trailers', link: '/remorci-agricole/basculante', count: 18 },
        { id: 'bale-trailers', name: 'Remorci pentru Baloți', nameEn: 'Bale trailers', link: '/remorci-agricole/baloti', count: 12 },
        { id: 'earth-dumper', name: 'Basculante pentru Pământ', nameEn: 'Earth dumper', link: '/remorci-agricole/pamant', count: 8 }
      ]
    },
    { 
      name: 'UTILAJE CONSTRUCȚII', 
      path: '/utilaje-constructii',
      subcategories: mainCategories.find(cat => cat.id === 'construction-machinery')?.subcategories || []
    },
    { 
      name: 'STIVUITOARE & LOGISTICĂ', 
      path: '/stivuitoare-logistica',
      subcategories: mainCategories.find(cat => cat.id === 'forklift-logistics')?.subcategories || []
    },
    { 
      name: 'ALIMENTARE', 
      path: '/alimentare',
      subcategories: [
        { id: 'power-supply', name: 'Sisteme de Alimentare', nameEn: 'Power supply systems', link: '/alimentare/sisteme', count: 5 }
      ]
    }
  ];

  return (
    <header className="w-full bg-background shadow-card sticky top-0 z-50">
      {/* Top bar - Exact replica */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Deschis astăzi: 8u - 18u</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@boxeragri.ro" className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
              <Mail size={14} />
              <span>contact@boxeragri.ro</span>
            </a>
            <a href="tel:+40123456789" className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
              <Phone size={14} />
              <span>+40 123 456 789</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header - Exact replica */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Circular logo like original */}
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mr-4">
                <img src={boxerAgriLogo} alt="Boxer Agri" className="w-12 h-12 rounded-full" />
              </div>
            </Link>

            {/* Search bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Caută..." 
                  className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Top navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    isActive(item.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                <Globe size={16} />
                <span>RO</span>
                <ChevronDown size={14} />
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Red navigation bar - Exact replica */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 py-4 text-sm font-medium hover:text-gray-200 transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.subcategories.length > 0 && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown menu */}
                  {item.subcategories.length > 0 && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-b-md min-w-64 z-50">
                      <div className="py-2">
                        {item.subcategories.map((subcat) => (
                          <Link
                            key={subcat.id}
                            to={subcat.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <span>{subcat.name}</span>
                              <span className="text-xs text-gray-500">({subcat.count})</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link 
              to="/branduri"
              className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              BRANDURI
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {topNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    isActive(item.path) ? 'text-red-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t pt-4">
                {mainNavItems.map((item) => (
                  <div key={item.path} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-gray-900 font-medium block mb-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subcategories.length > 0 && (
                      <div className="ml-4 space-y-1">
                        {item.subcategories.map((subcat) => (
                          <Link
                            key={subcat.id}
                            to={subcat.link}
                            className="text-sm text-gray-600 hover:text-red-600 block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subcat.name} ({subcat.count})
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <Link 
                to="/branduri"
                className="bg-red-600 text-white px-4 py-2 rounded text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                BRANDURI
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
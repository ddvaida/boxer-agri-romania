import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import boxerAgriLogo from '@/assets/boxer-agri-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={boxerAgriLogo} alt="Boxer Agri România" className="h-10 w-10 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold font-serif">Boxer Agri</h3>
                <p className="text-sm opacity-80">România</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Lider în furnizarea de tractoare și utilaje agricole de înaltă calitate pentru fermierii români. 
              Peste 15 ani de experiență în domeniul agricol.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigare Rapidă</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-90 hover:text-secondary transition-colors">Acasă</Link></li>
              <li><Link to="/despre" className="text-sm opacity-90 hover:text-secondary transition-colors">Despre Noi</Link></li>
              <li><Link to="/produse" className="text-sm opacity-90 hover:text-secondary transition-colors">Produse</Link></li>
              <li><Link to="/second-hand" className="text-sm opacity-90 hover:text-secondary transition-colors">Tractoare Second-Hand</Link></li>
              <li><Link to="/testimoniale" className="text-sm opacity-90 hover:text-secondary transition-colors">Testimoniale</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categorii Produse</h4>
            <ul className="space-y-2">
              <li><Link to="/produse/tractoare" className="text-sm opacity-90 hover:text-secondary transition-colors">Tractoare</Link></li>
              <li><Link to="/produse/utilaje-sol" className="text-sm opacity-90 hover:text-secondary transition-colors">Utilaje pentru Sol</Link></li>
              <li><Link to="/produse/remorci" className="text-sm opacity-90 hover:text-secondary transition-colors">Remorci Agricole</Link></li>
              <li><Link to="/produse/excavatoare" className="text-sm opacity-90 hover:text-secondary transition-colors">Excavatoare</Link></li>
              <li><Link to="/produse/incarcatoare" className="text-sm opacity-90 hover:text-secondary transition-colors">Încărcătoare</Link></li>
              <li><Link to="/produse/silvicultura" className="text-sm opacity-90 hover:text-secondary transition-colors">Silvicultură</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Str. Agricultorilor Nr. 123</p>
                  <p>București, România</p>
                  <p>012345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>+40 123 456 789</p>
                  <p>+40 987 654 321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>contact@boxeragri.ro</p>
                  <p>vanzari@boxeragri.ro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Boxer Agri România. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/politica-confidentialitate" className="text-sm opacity-80 hover:text-secondary transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link to="/termeni-conditii" className="text-sm opacity-80 hover:text-secondary transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
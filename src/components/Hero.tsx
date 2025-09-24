import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Boxer Agri tractoare și utilaje agricole în România" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block font-serif">Tractoare & Utilaje</span>
              <span className="block text-secondary">Agricole Premium</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Parteneri de încredere pentru fermierii români din 2008. Calitate superioară, 
              prețuri competitive și servicii profesionale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-button px-8 py-4 text-lg font-semibold"
              >
                <Link to="/produse" className="flex items-center space-x-2">
                  <span>Descoperă Produsele</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/second-hand" className="flex items-center space-x-2">
                  <Play size={20} />
                  <span>Second-Hand</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm md:text-base">Ani de Experiență</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Clienți Mulțumiți</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm md:text-base">Suport Tehnic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
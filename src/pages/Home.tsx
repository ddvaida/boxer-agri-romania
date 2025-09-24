import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "Calitate Premium",
      description: "Produse de înaltă calitate de la producători recunoscuți la nivel mondial"
    },
    {
      icon: Users,
      title: "Echipă Expertă",
      description: "Consultanți specializați cu peste 15 ani de experiență în domeniul agricol"
    },
    {
      icon: Wrench,
      title: "Service Complet",
      description: "Mentenanță, reparații și piese de schimb originale pentru toate produsele"
    }
  ];

  const productCategories = [
    {
      name: "Tractoare",
      description: "Tractoare profesionale pentru toate tipurile de lucrări agricole",
      image: "/api/placeholder/400/300",
      link: "/produse/tractoare",
      badge: "Popular"
    },
    {
      name: "Utilaje pentru Sol",
      description: "Echipamente specializate pentru prelucrarea și pregătirea solului",
      image: "/api/placeholder/400/300",
      link: "/produse/utilaje-sol"
    },
    {
      name: "Remorci Agricole",
      description: "Remorci robuste pentru transport și basculare în agricultură",
      image: "/api/placeholder/400/300",
      link: "/produse/remorci"
    },
    {
      name: "Excavatoare",
      description: "Excavatoare compacte și de mărime medie pentru lucrări diverse",
      image: "/api/placeholder/400/300",
      link: "/produse/excavatoare"
    }
  ];

  const testimonials = [
    {
      name: "Ion Popescu",
      location: "Fermă din Ilfov",
      text: "Am cumpărat un tractor de la Boxer Agri și sunt foarte mulțumit. Calitatea este excepțională și echipa oferă un suport tehnic de neegalat.",
      rating: 5
    },
    {
      name: "Maria Georgescu",
      location: "Exploatație Agricolă, Brașov",
      text: "Colaborez cu Boxer Agri de 3 ani. Profesionalismul și promptitudinea lor m-au convins să-mi extind flota doar cu produsele lor.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              De Ce Să Alegi Boxer Agri România?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Suntem partenerii de încredere pentru fermierii care caută echipamente agricole de cea mai înaltă calitate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 animate-scale-in">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <feature.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Gama Noastră de Produse
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descoperă tractoare și utilaje agricole pentru toate tipurile de exploatații
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden bg-gradient-card border-0">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.badge && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {category.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={category.link} className="flex items-center justify-center space-x-2">
                      <span>Vezi Produsele</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link to="/produse" className="flex items-center space-x-2">
                <span>Vezi Toate Produsele</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Second-Hand Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Tractoare Second-Hand Verificate
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descoperiți gama noastră de tractoare second-hand, verificate și pregătite pentru lucru. 
              Branduri cunoscute la preț avantajos, cu garanție și suport tehnic complet.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Tractoare în Stoc</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Luni Garanție</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Branduri Disponibile</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">48h</div>
                <div className="text-sm text-muted-foreground">Livrare Rapidă</div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-button">
              <Link to="/second-hand" className="flex items-center space-x-2">
                <span>Explorează Second-Hand</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-xl text-muted-foreground">
              Peste 500 de fermieri mulțumiți ne recomandă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimoniale" className="flex items-center space-x-2">
                <span>Vezi Toate Testimonialele</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Pregătit să Îți Modernizezi Exploatația?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o consultanță gratuită și descoperă soluțiile perfecte pentru fermă ta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Contactează-ne</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
              <Link to="/produse">Vezi Catalogul</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
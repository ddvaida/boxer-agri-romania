import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Wrench, Settings, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quickAccessCategories, mainCategories } from '@/data/categories';
import { brands } from '@/data/brands';
import { newsItems, upcomingEvents } from '@/data/news';

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

      {/* All Products Grid - Identical to Original */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Toate Produsele
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descoperă gama completă de tractoare și utilaje agricole pentru toate tipurile de exploatații
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quickAccessCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden bg-gradient-card border-0">
                <div className="relative aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 bg-white"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Section - Identical to Original */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://www.heustractors.com/uploads/media/text-image-full-transparent/01/1841-W12%20S%20Reyerparc-36.png?v=1-2" 
                alt="Configurator Boxer Agri România" 
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground">Configurator</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Configurează-ți Mașina Ideală
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cu configuratorul nostru, îți poți asambla mașina agricolă care se potrivește perfect 
                nevoilor tale și condițiilor de lucru. Alege dintr-o gamă largă de opțiuni și specificații, 
                de la tipul motorului și puterea până la selecția anvelopelor și combinațiile de utilaje.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fiecare pas din configurator îți permite să personalizezi funcționalitățile și performanțele, 
                astfel încât mașina ta să se potrivească cerințelor exacte ale afacerii tale.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                <Settings size={20} className="mr-2" />
                Deschide Configuratorul
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Identical to Original */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Importăm Aceste Branduri
            </h2>
            <p className="text-xl text-muted-foreground">
              Parteneri de încredere cu reputație internațională
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {brands.filter(brand => brand.featured).map((brand) => (
              <Card key={brand.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 p-4">
                <Link to={brand.link} className="block">
                  <div className="aspect-square flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/branduri" className="flex items-center space-x-2">
                <span>Vezi Toate Brandurile</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section - Identical to Original */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">Dezvoltări Noi & Mașini</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Ultimele Știri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={item.link}>Citește Mai Mult</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Identical to Original */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">Boxer Agri România</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Despre Noi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Boxer Agri România este un nume de încredere în lumea utilajelor și echipamentelor agricole 
                de mai bine de 15 ani. Ca importator al brandurilor renumite precum <strong>Eurotrac, XCMG, 
                Tafe, Vaia</strong> și multe altele, Boxer Agri oferă soluții de înaltă calitate pentru o 
                varietate de aplicații.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cu o istorie bogată și o expertiză profund înrădăcinată, Boxer Agri garantează calitate, 
                inovație și servicii excelente pentru fermierii români.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
                <Link to="/despre" className="flex items-center space-x-2">
                  <span>Citește Mai Mult</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://www.heustractors.com/uploads/media/text-image-full-img/08/2088-11.jpg?v=1-0" 
                alt="Echipa Boxer Agri România" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Identical to Original */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">Expoziții</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Agenda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">
                    {event.startDate} {event.endDate !== event.startDate && `până la ${event.endDate}`}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="font-medium">{event.address}</div>
                    <div className="text-sm">{event.location}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={event.website} target="_blank" rel="noopener noreferrer">
                      Vizitează Website-ul
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
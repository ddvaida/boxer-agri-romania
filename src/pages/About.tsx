import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Calitate Premium",
      description: "Oferim doar produse de cea mai înaltă calitate, testate și verificate pentru a îndeplini standardele internaționale ale agriculturii moderne."
    },
    {
      icon: Users,
      title: "Expertiză Dedicată",
      description: "Echipa noastră de specialiști agricoli cu peste 15 ani de experiență vă oferă consultanță personalizată pentru fiecare proiect."
    },
    {
      icon: Target,
      title: "Soluții Complete",
      description: "De la selectarea produsului potrivit până la service și mentenanță, oferim soluții integrate pentru toate nevoile dumneavoastră."
    },
    {
      icon: Heart,
      title: "Pasiune pentru Agricultură",
      description: "Înțelegem provocările fermierei moderne și ne dedicăm să contribuim la succesul și prosperitatea agriculturii românești."
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Începuturile",
      description: "Boxer Agri și-a început activitatea cu viziunea de a moderniza agricultura românească prin echipamente de calitate superioară."
    },
    {
      year: "2012",
      title: "Extinderea Gamei",
      description: "Am diversificat portofoliul de produse, incluzând tractoare de diferite puteri și utilaje specializate pentru diverse culturi."
    },
    {
      year: "2016",
      title: "Service Propriu",
      description: "Am înființat departamentul de service și mentenanță pentru a oferi suport tehnic complet clienților noștri."
    },
    {
      year: "2020",
      title: "Digitalizare",
      description: "Am implementat soluții digitale moderne pentru o experiență de cumpărare mai eficientă și transparentă."
    },
    {
      year: "2024",
      title: "Lider de Piață",
      description: "Astăzi suntem printre liderii pieței românești de utilaje agricole, cu peste 500 de clienți mulțumiți."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">Despre Boxer Agri România</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Parteneri de Încredere în Agricultura Modernă
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Cu peste 15 ani de experiență în domeniul utilajelor agricole, Boxer Agri România 
              s-a afirmat ca un lider de încredere în furnizarea de tractoare și echipamente 
              agricole premium pentru fermierii din întreaga țară.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Ani de Experiență</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Utilaje Livrate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Misiunea Noastră</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Să contribuim la dezvoltarea și modernizarea agriculturii românești prin furnizarea 
                  de echipamente agricole de înaltă calitate, servicii profesionale și consultanță 
                  specializată. Credem că fiecare fermier merită acces la tehnologia cea mai avansată 
                  pentru a-și maximiza productivitatea și rentabilitatea.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Viziunea Noastră</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Să devenim partenerul preferat al fermierilor români în călătoria lor către 
                  agricultura modernă și sustenabilă. Aspirăm să fim recunoscuți pentru excelența 
                  în servicii, inovația în soluții și impactul pozitiv asupra comunităților agricole.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Echipa Boxer Agri România lucrând cu fermierii" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Valorile Noastre Fundamentale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare decizie și interacțiune cu clienții noștri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Istoria Noastră
            </h2>
            <p className="text-xl text-muted-foreground">
              Parcursul nostru către excelența în domeniul utilajelor agricole
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <Card className="bg-gradient-card border-0 shadow-card">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Echipa Noastră Expertă
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesioniști dedicați cu experiență vastă în domeniul agricol și al utilajelor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-primary" />
                </div>
                <CardTitle>Echipa de Vânzări</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consultanți specializați care vă ajută să găsiți echipamentele perfecte pentru nevoile dvs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award size={32} className="text-primary" />
                </div>
                <CardTitle>Specialiști Tehnici</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tehnicienii noștri certificați asigură instalarea, mentenanța și reparația utilajelor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart size={32} className="text-primary" />
                </div>
                <CardTitle>Suport Clienți</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Echipa noastră de suport este disponibilă pentru a răspunde la toate întrebările dvs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
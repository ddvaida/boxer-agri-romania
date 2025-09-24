import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Star, Filter, Phone, Mail, Calendar, Gauge, Settings } from 'lucide-react';

const SecondHand = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPowerRange, setPowerRange] = useState('');

  const benefits = [
    {
      icon: CheckCircle,
      title: "Gamă Variată Verificată",
      description: "Peste 100 de tractoare second-hand din diferite categorii de putere, toate verificate tehnic și pregătite pentru lucru"
    },
    {
      icon: Star,
      title: "Branduri Cunoscute",
      description: "John Deere, Massey Ferguson, New Holland, Case IH, Fendt și alte branduri de prestigiu internațional"
    },
    {
      icon: Settings,
      title: "Garanție & Service",
      description: "12 luni garanție, consultanță specializată și service complet cu piese de schimb originale disponibile"
    },
    {
      icon: Calendar,
      title: "Livrare Rapidă",
      description: "Livrare în maximum 48 de ore în toată România, cu transport specializat și asigurare completă"
    }
  ];

  const tractors = [
    {
      id: 1,
      brand: "John Deere",
      model: "6120M",
      year: 2018,
      power: "120 CP",
      hours: "2,450 ore",
      price: "45,000 €",
      image: "/api/placeholder/400/300",
      condition: "Foarte bună",
      features: ["AC", "GPS", "Suspensie cabină", "4WD"],
      description: "Tractor premium cu sistem de navigație GPS și suspensie avansată pentru confort maxim."
    },
    {
      id: 2,
      brand: "Massey Ferguson",
      model: "5713S",
      year: 2019,
      power: "130 CP",
      hours: "1,890 ore",
      price: "52,000 €",
      image: "/api/placeholder/400/300",
      condition: "Excelentă",
      features: ["Climatizare", "Transmisie Dyna-6", "Senzori inteligenti"],
      description: "Tractor modern cu transmisie semi-powershift și tehnologie avansată de monitorizare."
    },
    {
      id: 3,
      brand: "New Holland",
      model: "T6.145",
      year: 2017,
      power: "145 CP",
      hours: "3,200 ore",
      price: "48,000 €",
      image: "/api/placeholder/400/300",
      condition: "Bună",
      features: ["Cabină silențioasă", "Hidraulică avansată", "LED lighting"],
      description: "Tractor robust cu sistem hidraulic performant, ideal pentru lucrări intensive."
    },
    {
      id: 4,
      brand: "Case IH",
      model: "Puma 150",
      year: 2020,
      power: "150 CP",
      hours: "1,500 ore",
      price: "58,000 €",
      image: "/api/placeholder/400/300",
      condition: "Excelentă",
      features: ["CVX Transmisie", "Advanced Farming System", "Premium Sound"],
      description: "Tractor de ultima generație cu transmisie continuă variabilă și sisteme de agricultură de precizie."
    }
  ];

  const brands = ["John Deere", "Massey Ferguson", "New Holland", "Case IH", "Fendt", "Claas"];
  const powerRanges = ["60-80 CP", "80-100 CP", "100-120 CP", "120-150 CP", "150+ CP"];

  const filteredTractors = tractors.filter(tractor => {
    const matchesSearch = tractor.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tractor.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || tractor.brand === selectedBrand;
    const matchesPower = !selectedPowerRange || 
                        (selectedPowerRange === "60-80 CP" && parseInt(tractor.power) >= 60 && parseInt(tractor.power) <= 80) ||
                        (selectedPowerRange === "80-100 CP" && parseInt(tractor.power) >= 80 && parseInt(tractor.power) <= 100) ||
                        (selectedPowerRange === "100-120 CP" && parseInt(tractor.power) >= 100 && parseInt(tractor.power) <= 120) ||
                        (selectedPowerRange === "120-150 CP" && parseInt(tractor.power) >= 120 && parseInt(tractor.power) <= 150) ||
                        (selectedPowerRange === "150+ CP" && parseInt(tractor.power) >= 150);
    
    return matchesSearch && matchesBrand && matchesPower;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Tractoare Second-Hand Premium
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Descoperiți gama noastră selectată de tractoare second-hand verificate și pregătite pentru lucru. 
            Branduri de prestigiu la prețuri avantajoase, cu garanție și suport tehnic complet.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-sm opacity-80">Tractoare în Stoc</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm opacity-80">Luni Garanție</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-sm opacity-80">Branduri Premium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">48h</div>
              <div className="text-sm opacity-80">Livrare Rapidă</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Avantajele Tractoarele Second-Hand Boxer Agri
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calitate verificată, prețuri competitive și servicii complete pentru fermierii moderni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <benefit.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter size={20} />
                <span>Filtrează Tractoarele</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Caută după model sau brand</label>
                  <Input
                    placeholder="Ex: John Deere, 6120M..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toate brandurile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Toate brandurile</SelectItem>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Putere</label>
                  <Select value={selectedPowerRange} onValueChange={setPowerRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toate puterile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Toate puterile</SelectItem>
                      {powerRanges.map(range => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tractors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Tractoare Disponibile ({filteredTractors.length})
            </h2>
            <p className="text-muted-foreground">
              Toate tractoarele sunt verificate tehnic și pregătite pentru livrare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredTractors.map((tractor) => (
              <Card key={tractor.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <div className="relative">
                  <img 
                    src={tractor.image} 
                    alt={`${tractor.brand} ${tractor.model}`}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                    {tractor.condition}
                  </Badge>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {tractor.year}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {tractor.brand} {tractor.model}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {tractor.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{tractor.price}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Gauge size={16} className="text-muted-foreground" />
                      <span>{tractor.power}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span>{tractor.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tractor.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary-hover">
                      <Phone size={16} className="mr-2" />
                      Contactează
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail size={16} className="mr-2" />
                      Detalii
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTractors.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nu am găsit tractoare pentru filtrele selectate
              </h3>
              <p className="text-muted-foreground mb-6">
                Încearcă să modifici criteriile de căutare sau contactează-ne pentru oferte personalizate
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedBrand('');
                setPowerRange('');
              }}>
                Resetează Filtrele
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
            Nu Găsești Tractorul Potrivit?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactează-ne și îți vom găsi tractorul perfect pentru nevoile tale. 
            Avem acces la o rețea extinsă de furnizori din toată Europa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              <Phone size={20} className="mr-2" />
              Sună Acum: +40 123 456 789
            </Button>
            <Button size="lg" variant="outline">
              <Mail size={20} className="mr-2" />
              Trimite Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondHand;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Grid3X3, List, Search, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all-categories');
  const [selectedBrand, setSelectedBrand] = useState('all-brands');
  const [sortBy, setSortBy] = useState('relevance');

  const featuredProducts = [
    {
      id: '1',
      name: 'Boxer NEX 185',
      category: 'Prelucrarea Solului',
      brand: 'Boxer',
      price: 'Preț la cerere',
      image: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      description: 'Cultivator rotativ profesional pentru prelucrarea solului',
      specifications: ['185 cm lățime de lucru', 'Pentru tractoare 40-80 CP', 'Transmisie cu lanț'],
      condition: 'Nou',
      location: 'București'
    },
    {
      id: '2', 
      name: 'XCMG XC916-E',
      category: 'Încărcătoare pe Roți',
      brand: 'XCMG',
      price: '€35,000.00',
      image: 'https://www.heustractors.com/uploads/media/product_list/09/2619-XC916E-2.png?v=1-3',
      description: 'Încărcător pe roți compact și eficient pentru construcții',
      specifications: ['Motor 92 kW', 'Capacitate cupa 1.0 m³', 'Greutate operațională 5.5t'],
      condition: 'Nou',
      location: 'Cluj-Napoca'
    },
    {
      id: '3',
      name: 'Eurotrac Agri 10',
      category: 'Stivuitoare',
      brand: 'Eurotrac', 
      price: 'De la €21,300.00',
      image: 'https://www.heustractors.com/uploads/media/product_list/07/387-Agri%2010%20%20%283%29.png?v=1-3',
      description: 'Stivuitor agricol versatil pentru diverse aplicații',
      specifications: ['Capacitate 1000 kg', 'Înălțime ridicare 3m', 'Motor diesel'],
      condition: 'Nou',
      location: 'Timișoara'
    },
    {
      id: '4',
      name: 'TAFE 6028',
      category: 'Tractoare Compacte',
      brand: 'TAFE',
      price: 'Preț la cerere',
      image: 'https://www.heustractors.com/uploads/media/product_list/02/1222-Tafe%206028%20M-07.png?v=1-2',
      description: 'Tractor compact ideal pentru exploatații mici și mijlocii',
      specifications: ['28 CP', '4WD', 'Cutie de viteze sincronizată'],
      condition: 'Nou',
      location: 'Iași'
    }
  ];

  const categories = [
    'Prelucrarea Solului',
    'Cultivarea Pajiștilor', 
    'Excavatoare',
    'Încărcătoare pe Roți',
    'Stivuitoare',
    'Tractoare',
    'Maszini Silvicultură',
    'Remorci Agricole'
  ];

  const brands = ['Boxer', 'Eurotrac', 'XCMG', 'TAFE', 'Tierre', 'Dondi', 'FCR', 'Remac'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Inventar Complet
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Descoperiți întreaga noastră gamă de tractoare și utilaje agricole disponibile în stoc
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Caută tractoare, utilaje, piese..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                <Search size={20} className="mr-2" />
                Caută
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter size={20} />
                  <span>Filtrează Produsele</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Categorie</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toate categoriile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-categories">Toate categoriile</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toate brandurile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-brands">Toate brandurile</SelectItem>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sortare</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sortează după" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevanță</SelectItem>
                      <SelectItem value="price-asc">Preț crescător</SelectItem>
                      <SelectItem value="price-desc">Preț descrescător</SelectItem>
                      <SelectItem value="name">Nume A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover">
                  Aplică Filtrele
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Produse în Stoc</h2>
                <p className="text-muted-foreground">{featuredProducts.length} produse disponibile</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-contain bg-white p-4"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {product.condition}
                    </Badge>
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {product.brand}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {product.category}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{product.price}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Specificații principale:</h4>
                      <ul className="text-xs space-y-1">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{product.location}</span>
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

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Încarcă Mai Multe Produse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '@/data/products';

const Tractors = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterBrand, setFilterBrand] = useState('all-brands');
  const [filterPower, setFilterPower] = useState('all-power');
  const [searchTerm, setSearchTerm] = useState('');

  const tractors = getProductsByCategory('tractors');
  
  const brands = [...new Set(tractors.map(t => t.brand))];
  const powerRanges = [
    { value: '20-30', label: '20-30 CP' },
    { value: '30-50', label: '30-50 CP' },
    { value: '50-75', label: '50-75 CP' },
    { value: '75-100', label: '75-100 CP' },
    { value: '100+', label: '100+ CP' }
  ];

  const filteredTractors = tractors.filter(tractor => {
    const matchesSearch = tractor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tractor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = filterBrand === 'all-brands' || tractor.brand === filterBrand;
    
    let matchesPower = true;
    if (filterPower !== 'all-power') {
      const power = tractor.specifications['Putere motor (CP)'] as number;
      switch (filterPower) {
        case '20-30':
          matchesPower = power >= 20 && power <= 30;
          break;
        case '30-50':
          matchesPower = power > 30 && power <= 50;
          break;
        case '50-75':
          matchesPower = power > 50 && power <= 75;
          break;
        case '75-100':
          matchesPower = power > 75 && power <= 100;
          break;
        case '100+':
          matchesPower = power > 100;
          break;
      }
    }

    return matchesSearch && matchesBrand && matchesPower;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Tractoare Agricole
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Descoperiți gama noastră completă de tractoare pentru toate tipurile de exploatații agricole. 
              De la modele compacte pentru ferme mici până la tractoare puternice pentru lucrări intensive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{filteredTractors.length}+</div>
                <div className="text-sm opacity-90">Modele Disponibile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{brands.length}</div>
                <div className="text-sm opacity-90">Branduri Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24</div>
                <div className="text-sm opacity-90">Luni Garanție</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-lg shadow-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Search */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Caută tractoare</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Nume model, specificații..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Brand</label>
                <Select value={filterBrand} onValueChange={setFilterBrand}>
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

              {/* Power Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Putere</label>
                <Select value={filterPower} onValueChange={setFilterPower}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toate puterile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-power">Toate puterile</SelectItem>
                    {powerRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View Toggle */}
              <div>
                <label className="block text-sm font-medium mb-2">Vedere</label>
                <div className="flex rounded-lg bg-muted p-1">
                  <Button
                    size="sm"
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    onClick={() => setViewMode('grid')}
                    className="flex-1"
                  >
                    <Grid size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    onClick={() => setViewMode('list')}
                    className="flex-1"
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Se afișează {filteredTractors.length} din {tractors.length} tractoare
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sortează după nume</SelectItem>
                  <SelectItem value="power">Sortează după putere</SelectItem>
                  <SelectItem value="brand">Sortează după brand</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTractors.map((tractor) => (
                <Card key={tractor.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-white p-4">
                      <img
                        src={tractor.mainImage}
                        alt={tractor.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {tractor.isNew && (
                      <Badge className="absolute top-3 right-3 bg-green-600">Nou</Badge>
                    )}
                    {tractor.isFeatured && (
                      <Badge className="absolute top-3 left-3 bg-yellow-500 text-black">Recomandat</Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{tractor.brand}</Badge>
                      <Badge 
                        className={`${
                          tractor.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
                          tractor.availability === 'on-order' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {tractor.availability === 'in-stock' ? 'În stoc' :
                         tractor.availability === 'on-order' ? 'La comandă' : 'Indisponibil'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {tractor.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{tractor.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Putere:</span>
                        <span className="font-medium">{tractor.specifications['Putere motor (CP)']} CP</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Viteze:</span>
                        <span className="font-medium">{tractor.specifications['Viteze']}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Greutate:</span>
                        <span className="font-medium">{tractor.specifications['Greutate (kg)']} kg</span>
                      </div>
                    </div>

                    {tractor.priceRange && (
                      <div className="text-lg font-bold text-primary mb-4">
                        {tractor.priceRange}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button asChild className="flex-1">
                        <Link to={`/tractoare/${tractor.id}`}>
                          Vezi Detalii
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTractors.map((tractor) => (
                <Card key={tractor.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-white p-4">
                      <img
                        src={tractor.mainImage}
                        alt={tractor.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{tractor.brand}</Badge>
                            {tractor.isNew && <Badge className="bg-green-600">Nou</Badge>}
                            {tractor.isFeatured && <Badge className="bg-yellow-500 text-black">Recomandat</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {tractor.name}
                          </h3>
                        </div>
                        <Badge 
                          className={`${
                            tractor.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
                            tractor.availability === 'on-order' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {tractor.availability === 'in-stock' ? 'În stoc' :
                           tractor.availability === 'on-order' ? 'La comandă' : 'Indisponibil'}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{tractor.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="font-bold text-lg">{tractor.specifications['Putere motor (CP)']}</div>
                          <div className="text-xs text-muted-foreground">CP</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{tractor.specifications['Cilindri']}</div>
                          <div className="text-xs text-muted-foreground">Cilindri</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{tractor.specifications['Viteze']}</div>
                          <div className="text-xs text-muted-foreground">Viteze</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{tractor.specifications['Greutate (kg)']}</div>
                          <div className="text-xs text-muted-foreground">kg</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        {tractor.priceRange && (
                          <div className="text-xl font-bold text-primary">
                            {tractor.priceRange}
                          </div>
                        )}
                        <Button asChild>
                          <Link to={`/tractoare/${tractor.id}`} className="flex items-center space-x-2">
                            <span>Vezi Detalii</span>
                            <ArrowRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {filteredTractors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold mb-2">Nu s-au găsit tractoare</h3>
              <p className="text-muted-foreground">Încercați să modificați filtrele de căutare.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tractors;
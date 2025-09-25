import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid, List, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { grasslandCultivationProducts } from '@/data/allProducts';

const GrasslandCultivation = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterBrand, setFilterBrand] = useState('all-brands');
  const [filterWidth, setFilterWidth] = useState('all-width');
  const [searchTerm, setSearchTerm] = useState('');

  const products = grasslandCultivationProducts;
  
  const brands = [...new Set(products.map(p => p.brand))];
  const widthRanges = [
    { value: '100-150', label: '100-150 cm' },
    { value: '150-200', label: '150-200 cm' },
    { value: '200+', label: '200+ cm' }
  ];

  // Product categories for grassland cultivation
  const categories = [
    { name: 'Cositori cu Braț', nameEn: 'Arm mowers', count: 4, description: 'Pentru marginile drumurilor și zone greu accesibile' },
    { name: 'Cositori Rotative', nameEn: 'Rotary mowers', count: 6, description: 'Tăiere uniformă pentru suprafețe mari' },
    { name: 'Cositori cu Disc', nameEn: 'Disc mowers', count: 1, description: 'Tăiere precisă pentru furaje de calitate' },
    { name: 'Cositori cu Cuțit', nameEn: 'Flail mowers', count: 21, description: 'Versatili pentru diverse tipuri de vegetație' },
    { name: 'Râșnițe și Întortocătoare', nameEn: 'Hay rake & tedders', count: 3, description: 'Pentru strângerea și uscarea furajelor' },
    { name: 'Tăietori de Gard Viu', nameEn: 'Hedge trimmers', count: 5, description: 'Întreținerea gardurilor vii și arbuștilor' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = filterBrand === 'all-brands' || product.brand === filterBrand;
    
    let matchesWidth = true;
    if (filterWidth !== 'all-width') {
      const width = product.specifications['Lățimea de lucru (cm)'] as number;
      switch (filterWidth) {
        case '100-150':
          matchesWidth = width >= 100 && width <= 150;
          break;
        case '150-200':
          matchesWidth = width > 150 && width <= 200;
          break;
        case '200+':
          matchesWidth = width > 200;
          break;
      }
    }

    return matchesSearch && matchesBrand && matchesWidth;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-4 bg-muted/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Acasă</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/utilaje-agricole" className="text-muted-foreground hover:text-primary">Utilaje Agricole</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Cultivarea Pajiștilor</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Cultivarea Pajiștilor
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Echipamente specializate pentru întreținerea și cultivarea pajiștilor. De la cositori pentru 
              tăierea ierbii până la utilaje pentru strângerea furajelor, avem tot ce aveți nevoie pentru 
              managementul eficient al pajiștilor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{products.length}+</div>
                <div className="text-sm opacity-90">Produse Disponibile</div>
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

      {/* Categories Overview */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Categorii de Produse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Vezi Produsele
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-lg shadow-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Search */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Caută produse</label>
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

              {/* Width Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Lățime lucru</label>
                <Select value={filterWidth} onValueChange={setFilterWidth}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toate lățimile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-width">Toate lățimile</SelectItem>
                    {widthRanges.map(range => (
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
                Se afișează {filteredProducts.length} din {products.length} produse
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sortează după nume</SelectItem>
                  <SelectItem value="price">Sortează după preț</SelectItem>
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
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-white p-4">
                      <img
                        src={product.mainImage}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-3 right-3 bg-green-600">Nou</Badge>
                    )}
                    {product.isFeatured && (
                      <Badge className="absolute top-3 left-3 bg-yellow-500 text-black">Recomandat</Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{product.brand}</Badge>
                      <Badge 
                        className={`${
                          product.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
                          product.availability === 'on-order' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.availability === 'in-stock' ? 'În stoc' :
                         product.availability === 'on-order' ? 'La comandă' : 'Indisponibil'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Lățime lucru:</span>
                        <span className="font-medium">{product.specifications['Lățimea de lucru (cm)']} cm</span>
                      </div>
                      {product.specifications['Numărul de lame'] && (
                        <div className="flex justify-between text-sm">
                          <span>Numărul de lame:</span>
                          <span className="font-medium">{product.specifications['Numărul de lame']}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span>Greutate:</span>
                        <span className="font-medium">{product.specifications['Greutate (kg)']} kg</span>
                      </div>
                    </div>

                    {product.priceRange && (
                      <div className="text-lg font-bold text-primary mb-4">
                        {product.priceRange}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button asChild className="flex-1">
                        <Link to={`/utilaje-agricole/cultivarea-pajistilor/${product.id}`}>
                          Vezi Detalii
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-white p-4">
                      <img
                        src={product.mainImage}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{product.brand}</Badge>
                            {product.isNew && <Badge className="bg-green-600">Nou</Badge>}
                            {product.isFeatured && <Badge className="bg-yellow-500 text-black">Recomandat</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <Badge 
                          className={`${
                            product.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
                            product.availability === 'on-order' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {product.availability === 'in-stock' ? 'În stoc' :
                           product.availability === 'on-order' ? 'La comandă' : 'Indisponibil'}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="font-bold text-lg">{product.specifications['Lățimea de lucru (cm)']}</div>
                          <div className="text-xs text-muted-foreground">cm lățime</div>
                        </div>
                        {product.specifications['Numărul de lame'] && (
                          <div className="text-center">
                            <div className="font-bold text-lg">{product.specifications['Numărul de lame']}</div>
                            <div className="text-xs text-muted-foreground">lame</div>
                          </div>
                        )}
                        <div className="text-center">
                          <div className="font-bold text-lg">{product.specifications['Greutate (kg)']}</div>
                          <div className="text-xs text-muted-foreground">kg</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{product.technicalData['Putere necesară (CP)']}</div>
                          <div className="text-xs text-muted-foreground">CP necesari</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        {product.priceRange && (
                          <div className="text-xl font-bold text-primary">
                            {product.priceRange}
                          </div>
                        )}
                        <Button asChild>
                          <Link to={`/utilaje-agricole/cultivarea-pajistilor/${product.id}`} className="flex items-center space-x-2">
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-2">Nu s-au găsit produse</h3>
              <p className="text-muted-foreground">Încercați să modificați filtrele de căutare.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GrasslandCultivation;
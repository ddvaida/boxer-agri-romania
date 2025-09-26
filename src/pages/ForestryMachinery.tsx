import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Grid3X3, List, ArrowUpDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { forestryMachineryProducts } from '@/data/allProducts';

const ForestryMachinery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'brand'>('name');
  const [filterBrand, setFilterBrand] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Extract unique brands and types
  const brands = [...new Set(forestryMachineryProducts.map(product => product.brand))];
  const productTypes = ['Tocătoare de Lemn', 'Despicare Lemn', 'Frese pentru Cioturi', 'Trolii Forestiere'];

  // Product categories with stats
  const categories = [
    { name: 'Tocătoare de Lemn', count: forestryMachineryProducts.length, description: 'Pentru procesarea ramurilor și materialului lemnos', icon: '🪓' },
    { name: 'Despicare Lemn', count: 1, description: 'Despicarea eficientă a bușteanilor', icon: '🪵' },
    { name: 'Frese pentru Cioturi', count: 4, description: 'Îndepărtarea ciotoilor și rădăcinilor', icon: '🌳' },
    { name: 'Trolii Forestiere', count: 1, description: 'Transport și tracțiune în pădure', icon: '🚜' }
  ];

  // Filter and search products
  const filteredProducts = forestryMachineryProducts
    .filter(product => {
      const matchesBrand = filterBrand === 'all' || product.brand === filterBrand;
      const matchesType = filterType === 'all' || product.name.toLowerCase().includes(filterType.toLowerCase());
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesBrand && matchesType && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || a.priceFrom || 0) - (b.price || b.priceFrom || 0);
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Breadcrumb */}
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <Link to="/utilaje-agricole" className="hover:text-primary transition-colors">Utilaje Agricole</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Utilaje Silvicultură</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Utilaje pentru Silvicultură</h1>
            <p className="text-xl mb-8 opacity-90">
              Echipamente profesionale pentru lucrări forestiere - tocătoare de lemn, despicătoare și utilaje specializate
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">{forestryMachineryProducts.length}+</div>
                <div className="text-white/80">Modele disponibile</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">{brands.length}</div>
                <div className="text-white/80">Branduri de top</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary">€1.475</div>
                <div className="text-white/80">Preț de la</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Categorii de Utilaje Forestiere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                  <div className="text-xl font-bold text-primary">{category.count} {category.count === 1 ? 'model' : 'modele'}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Căutați utilaje forestiere..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <Select value={filterBrand} onValueChange={setFilterBrand}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toate brandurile</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy as (value: string) => void}>
                <SelectTrigger className="w-full sm:w-40">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nume</SelectItem>
                  <SelectItem value="price">Preț</SelectItem>
                  <SelectItem value="brand">Brand</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredProducts.length} produse găsite
            </p>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <Card key={product.id} className={`group hover:shadow-elegant transition-all duration-300 ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'sm:w-48 sm:flex-shrink-0' : 'aspect-video'
                  }`}>
                    <img 
                      src={product.mainImage} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {product.isNew && <Badge className="bg-secondary text-secondary-foreground">Nou</Badge>}
                      {product.isFeatured && <Badge className="bg-primary text-primary-foreground">Recomandat</Badge>}
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {product.availability === 'in-stock' ? 'În stoc' : 
                         product.availability === 'on-order' ? 'La comandă' : 'Indisponibil'}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {product.brand}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Key Specifications */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Diametru maxim:</span>
                        <span className="font-medium">
                          {product.specifications['Diametrul maxim (mm)']}mm
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Putere necesară:</span>
                        <span className="font-medium">
                          {product.technicalData['Putere necesară (CP)']} CP
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {product.price && (
                          <p className="text-2xl font-bold text-primary">
                            €{product.price.toLocaleString()}
                          </p>
                        )}
                        {product.priceFrom && (
                          <p className="text-2xl font-bold text-primary">
                            de la €{product.priceFrom.toLocaleString()}
                          </p>
                        )}
                        {product.priceRange && (
                          <p className="text-sm text-muted-foreground">{product.priceRange}</p>
                        )}
                      </div>
                      
                      <Link to={`/produs/${product.id}`}>
                        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                          Vezi detalii
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Nu am găsit produse</h3>
              <p className="text-muted-foreground mb-4">
                Încercați să modificați filtrele sau termenul de căutare.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterBrand('all');
                  setFilterType('all');
                }}
                variant="outline"
              >
                Resetează filtrele
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ForestryMachinery;
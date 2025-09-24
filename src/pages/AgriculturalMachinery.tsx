import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Grid3X3, List, ChevronDown } from 'lucide-react';
import { mainCategories } from '@/data/categories';
import { brands } from '@/data/brands';
import { Link } from 'react-router-dom';

const AgriculturalMachinery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all-brands');
  const [selectedCategory, setSelectedCategory] = useState('all-categories');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const agriculturalCategory = mainCategories.find(cat => cat.id === 'agricultural-machinery');
  const agriculturalBrands = brands.filter(brand => ['boxer', 'dondi', 'fcr', 'pennacchio', 'remac', 'tierre'].includes(brand.id));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Utilaje Agricole
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Descoperiți gama completă de utilaje agricole profesionale pentru toate tipurile de exploatații
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Identical to Original */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter size={20} />
                  <span>Filtrare</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Caută</label>
                  <Input
                    placeholder="Caută produse..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Categories Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categorii</h3>
                  <div className="space-y-2">
                    {agriculturalCategory?.subcategories.map((subcat) => (
                      <Link
                        key={subcat.id}
                        to={subcat.link}
                        className="flex items-center justify-between py-2 px-3 rounded hover:bg-primary/10 transition-colors"
                      >
                        <span className="text-sm">{subcat.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {subcat.count}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Branduri</h3>
                  <div className="space-y-2">
                    {agriculturalBrands.map((brand) => (
                      <div key={brand.id} className="flex items-center justify-between py-2 px-3 rounded hover:bg-primary/10 transition-colors cursor-pointer">
                        <span className="text-sm">{brand.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {brand.productCount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover">
                  Aplică Filtrele
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Utilaje Agricole</h2>
                <p className="text-muted-foreground">124 produse găsite</p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sortează după" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevanță</SelectItem>
                    <SelectItem value="price-asc">Preț crescător</SelectItem>
                    <SelectItem value="price-desc">Preț descrescător</SelectItem>
                    <SelectItem value="name">Nume</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agriculturalCategory?.subcategories.map((subcat) => (
                <Card key={subcat.id} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                  <Link to={subcat.link}>
                    <div className="relative aspect-square">
                      <img 
                        src={subcat.image} 
                        alt={subcat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                        {subcat.count}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {subcat.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {subcat.description}
                      </p>
                    </CardHeader>
                  </Link>
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

export default AgriculturalMachinery;
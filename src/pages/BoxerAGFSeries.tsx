import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { grasslandCultivationProducts } from '@/data/allProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  Download,
  Phone,
  Mail
} from 'lucide-react';

const BoxerAGFSeries = () => {
  const agfProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-agf')
  );

  const [selectedProduct, setSelectedProduct] = useState(agfProducts[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  const handleProductChange = (product: typeof selectedProduct) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  if (!selectedProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produs negăsit</h1>
          <p>Produsul căutat nu există sau a fost mutat.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <a href="/" className="text-muted-foreground hover:text-foreground">Acasă</a>
        <span className="mx-2 text-muted-foreground">/</span>
        <a href="/utilaje-agricole" className="text-muted-foreground hover:text-foreground">Utilaje Agricole</a>
        <span className="mx-2 text-muted-foreground">/</span>
        <a href="/utilaje-agricole/cultivarea-pajistilor" className="text-muted-foreground hover:text-foreground">Cultivarea Pajiștilor</a>
        <span className="mx-2 text-muted-foreground">/</span>
        <span className="text-foreground">Seria AGF</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={selectedProduct.images[currentImageIndex]}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            {selectedProduct.images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {selectedProduct.isNew && (
                <Badge variant="destructive">Nou</Badge>
              )}
              {selectedProduct.isFeatured && (
                <Badge variant="secondary">Recomandat</Badge>
              )}
            </div>
          </div>

          {/* Thumbnail Images */}
          {selectedProduct.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.name} ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    index === currentImageIndex ? 'border-primary' : 'border-muted'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <p className="text-lg font-semibold text-primary mb-2">{selectedProduct.brand}</p>
            <p className="text-sm text-muted-foreground mb-2">
              Disponibilitate: <span className="text-green-600 font-medium">În stoc</span>
            </p>
            <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
            <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
          </div>

          {/* Model Selector */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Selectează modelul:</h3>
            <div className="grid grid-cols-2 gap-3">
              {agfProducts.map((product) => (
                <Card 
                  key={product.id}
                  className={`cursor-pointer transition-all ${
                    selectedProduct.id === product.id 
                      ? 'ring-2 ring-primary border-primary' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => handleProductChange(product)}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">
                        {product.name.replace('Boxer ', '').replace(' Cositor cu Braț', '')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.specifications['Lățimea de lucru (cm)']}cm
                      </p>
                      <p className="font-semibold text-primary">
                        de la {product.priceFrom?.toLocaleString()} EUR
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Price and Features */}
          <div className="bg-muted/50 p-6 rounded-lg">
            <div className="mb-4">
              <p className="text-2xl font-bold text-primary">
                {selectedProduct.priceRange}
              </p>
              <p className="text-sm text-muted-foreground">Preț orientativ, fără TVA</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Caracteristici principale:</h3>
              <ul className="space-y-2">
                {selectedProduct.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Solicită Ofertă
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Favorite
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Distribuie
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Broșură
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Informații și comenzi</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>+40 742 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>comenzi@heustractors.ro</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specificații Tehnice</TabsTrigger>
          <TabsTrigger value="description">Descriere Detaliată</TabsTrigger>
          <TabsTrigger value="documentation">Documentație</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Specificații Tehnice - {selectedProduct.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Dimensiuni și Performanță</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-muted">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Date Tehnice</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedProduct.technicalData).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-muted">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Descriere Detaliată</h3>
              <div className="prose max-w-none">
                <p className="mb-4">{selectedProduct.description}</p>
                
                <h4 className="text-lg font-semibold mb-3">Caracteristici și Beneficii</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold mb-3">Aplicații Recomandate</h4>
                <p className="text-muted-foreground">
                  Ideal pentru întreținerea marginilor drumurilor, cosirea vegetației din șanțuri, 
                  întreținerea zonelor verzi urbane și toate lucrările care necesită acces în zone greu accesibile.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentation" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Documentație și Resurse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Manual de Utilizare</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Instrucțiuni complete de operare și întreținere
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Descarcă PDF
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Catalogul de Piese</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Lista completă a pieselor de schimb și accesoriilor
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Descarcă PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BoxerAGFSeries;
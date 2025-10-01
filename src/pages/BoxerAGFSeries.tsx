import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Phone, Mail, Star, CheckCircle, Truck, Info, Settings, FileText, ShoppingCart, Heart, Share2, Download, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { grasslandCultivationProducts } from '@/data/allProducts';

const BoxerAGFSeries = () => {
  // Organizăm produsele pe serii
  const agfProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-agf')
  );
  
  const nexProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-nex')
  );
  
  const dmProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-dm')
  );
  
  const fmProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-fm')
  );

  const [selectedSeries, setSelectedSeries] = useState<'agf' | 'nex' | 'dm' | 'fm'>('agf');
  const [selectedProduct, setSelectedProduct] = useState(agfProducts[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Determinăm produsele pentru seria selectată
  const currentSeriesProducts = useMemo(() => {
    switch (selectedSeries) {
      case 'agf': return agfProducts;
      case 'nex': return nexProducts;
      case 'dm': return dmProducts;
      case 'fm': return fmProducts;
      default: return agfProducts;
    }
  }, [selectedSeries]);

  // Actualizăm produsul selectat când se schimbă seria
  React.useEffect(() => {
    if (currentSeriesProducts.length > 0) {
      setSelectedProduct(currentSeriesProducts[0]);
      setCurrentImageIndex(0);
    }
  }, [selectedSeries]);

  const handleProductChange = (product: typeof selectedProduct) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <span className="text-muted-foreground">/</span>
          <a href="/utilaje-agricole" className="text-muted-foreground hover:text-primary transition-colors">Agricultural Machinery</a>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary font-medium">Cultivarea Pajiștilor</span>
        </nav>

        {/* Series Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Selectează Seria</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedSeries === 'agf' ? 'default' : 'outline'}
              size="lg"
              className={selectedSeries === 'agf' ? 'bg-primary' : ''}
              onClick={() => setSelectedSeries('agf')}
            >
              Seria AGF - Cositori cu Braț ({agfProducts.length})
            </Button>
            <Button
              variant={selectedSeries === 'nex' ? 'default' : 'outline'}
              size="lg"
              className={selectedSeries === 'nex' ? 'bg-primary' : ''}
              onClick={() => setSelectedSeries('nex')}
            >
              Seria NEX - Cositori Rotative ({nexProducts.length})
            </Button>
            <Button
              variant={selectedSeries === 'dm' ? 'default' : 'outline'}
              size="lg"
              className={selectedSeries === 'dm' ? 'bg-primary' : ''}
              onClick={() => setSelectedSeries('dm')}
            >
              Seria DM - Cositori cu Discuri ({dmProducts.length})
            </Button>
            <Button
              variant={selectedSeries === 'fm' ? 'default' : 'outline'}
              size="lg"
              className={selectedSeries === 'fm' ? 'bg-primary' : ''}
              onClick={() => setSelectedSeries('fm')}
            >
              Seria FM - Cositori cu Ciocanele ({fmProducts.length})
            </Button>
          </div>
        </div>

        {/* Main Product Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - Product Image Gallery */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden relative group border">
              <img 
                src={selectedProduct.images[currentImageIndex] || selectedProduct.mainImage} 
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="flex-shrink-0"
                disabled={selectedProduct.images.length <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2 overflow-hidden flex-1">
                {selectedProduct.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 w-20 h-16 bg-white rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      index === currentImageIndex ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="flex-shrink-0"
                disabled={selectedProduct.images.length <= 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Product Information */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{selectedProduct.name}</h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {selectedProduct.description}
              </p>

              {/* Key Features - primele 3 */}
              {selectedProduct.features.length > 0 && (
                <div className="space-y-2 mb-4">
                  {selectedProduct.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Read More Link */}
              <Button variant="link" className="p-0 h-auto text-destructive font-semibold">
                READ MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="text-3xl font-bold text-destructive">
                {selectedProduct.priceFrom && `€${selectedProduct.priceFrom.toLocaleString()}`}
                {selectedProduct.priceRange && ` (${selectedProduct.priceRange})`}
                <span className="text-base font-normal text-muted-foreground ml-2">excl. VAT</span>
              </div>
            </div>

            {/* Model Selector */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-muted-foreground">Selectează Modelul</h3>
              <div className="flex flex-wrap gap-2">
                {currentSeriesProducts.map((product) => {
                  // Extragem modelul din ID (de ex: AGF120, NEX150, DM160)
                  const modelName = product.id.replace('boxer-', '').toUpperCase();
                  return (
                    <Button
                      key={product.id}
                      variant={selectedProduct.id === product.id ? "default" : "outline"}
                      size="sm"
                      className={selectedProduct.id === product.id ? "bg-destructive hover:bg-destructive/90" : ""}
                      onClick={() => handleProductChange(product)}
                    >
                      {modelName}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Add to Quote Basket */}
            <Button size="lg" className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold">
              ADD TO QUOTE BASKET
            </Button>

            {/* Downloads Section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Downloads</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center justify-start gap-2 h-auto py-3">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">PRODUCT SHEET</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-start gap-2 h-auto py-3">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">CATALOGUE</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-start gap-2 h-auto py-3">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">MANUAL</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-start gap-2 h-auto py-3">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">SPARE PARTS</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs cu informații detaliate */}
        <Tabs defaultValue="specifications" className="w-full mt-12">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="specifications" className="flex flex-col gap-1 py-3">
              <Settings className="w-4 h-4" />
              <span>Specificații</span>
            </TabsTrigger>
            <TabsTrigger value="features" className="flex flex-col gap-1 py-3">
              <Star className="w-4 h-4" />
              <span>Caracteristici</span>
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex flex-col gap-1 py-3">
              <FileText className="w-4 h-4" />
              <span>Date Tehnice</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex flex-col gap-1 py-3">
              <Info className="w-4 h-4" />
              <span>Media</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-fit">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Specificații de Lucru
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-muted/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-semibold text-primary">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="h-fit">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Date Tehnice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(selectedProduct.technicalData).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-muted/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-semibold text-blue-600">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Caracteristici și Avantaje Principale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-50/50 border border-green-200/50 rounded-lg hover:shadow-sm transition-shadow">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Applications Section */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  Aplicații și Utilizări
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-blue-50 border border-blue-200/50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Întreținere Rutieră</h4>
                    <p className="text-blue-700">Curățarea marginilor drumurilor și a zonelor de siguranță</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200/50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Agricultură</h4>
                    <p className="text-green-700">Întreținerea pajištilor și terenurilor agricole</p>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200/50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Peisagistică</h4>
                    <p className="text-orange-700">Amenajarea și întreținerea spațiilor verzi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Date Tehnice Complete - {selectedProduct.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-primary">Dimensiuni și Performanță</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-muted/30">
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-blue-600">Cerințe Tehnice</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.technicalData).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-muted/30">
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Media și Documentație
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Manual de Utilizare</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Instrucțiuni complete de operare și întreținere pentru {selectedProduct.name}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Descarcă PDF
                    </Button>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Catalogul de Piese</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Lista completă a pieselor de schimb și accesoriilor disponibile
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Descarcă PDF
                    </Button>
                  </Card>
                </div>

                {/* Video Section */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Video Demonstrativ</h4>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Video demonstrativ va fi adăugat în curând</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BoxerAGFSeries;
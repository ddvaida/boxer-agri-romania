import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Phone, Mail, Star, CheckCircle, Truck, Info, Settings, FileText, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { grasslandCultivationProducts } from '@/data/allProducts';

const BoxerAGFSeries = () => {
  const agfProducts = grasslandCultivationProducts.filter(product => 
    product.id.includes('boxer-agf')
  );

  const [selectedProduct, setSelectedProduct] = useState(agfProducts[0]);

  const handleProductChange = (product: typeof selectedProduct) => {
    setSelectedProduct(product);
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
      {/* Header cu navigare */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm mb-4">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Acasă</a>
            <span className="text-muted-foreground">/</span>
            <a href="/utilaje-agricole" className="text-muted-foreground hover:text-primary transition-colors">Utilaje Agricole</a>
            <span className="text-muted-foreground">/</span>
            <a href="/utilaje-agricole/cultivarea-pajistilor" className="text-muted-foreground hover:text-primary transition-colors">Cultivarea Pajiștilor</a>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">Seria AGF Pro</span>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">Boxer AGF Pro - Cositori cu Braț Offset</h1>
              <p className="text-lg text-muted-foreground">Soluția profesională pentru întreținerea marginilor drumurilor și zonelor greu accesibile</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                În stoc
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                12 luni garanție
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Selector de model - Stil similar cu heustractors.com */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
            Selectează modelul dorit:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {agfProducts.map((product) => (
              <Card 
                key={product.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedProduct.id === product.id 
                    ? 'ring-2 ring-primary border-primary bg-primary/5' 
                    : 'hover:border-primary/50 hover:bg-primary/5'
                }`}
                onClick={() => handleProductChange(product)}
              >
                <CardContent className="p-4 text-center">
                  <div className="font-bold text-primary text-lg mb-1">
                    {product.name.replace('Boxer ', '').replace(' Cositor cu Braț', '')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Lățime lucru: {product.specifications['Lățimea de lucru (cm)']}cm
                  </div>
                  <div className="font-semibold text-green-600">
                    de la {product.priceFrom?.toLocaleString()} EUR
                  </div>
                  {selectedProduct.id === product.id && (
                    <div className="mt-2">
                      <Badge variant="default">Selectat</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Imaginea produsului */}
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative group">
              <img 
                src={selectedProduct.mainImage} 
                alt={selectedProduct.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Galerie de imagini mici */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedProduct.images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-16 h-16 bg-muted rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all">
                    <img 
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {Object.entries(selectedProduct.specifications).slice(0, 4).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="text-xs text-muted-foreground mb-1">{key}</div>
                  <div className="font-bold text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Informațiile produsului - Sidebar */}
          <div className="space-y-6 sticky top-4 h-fit">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {selectedProduct.brand}
                </Badge>
                <Badge variant="outline" className={
                  selectedProduct.availability === 'in-stock' 
                    ? 'border-green-500/30 text-green-700 bg-green-50' 
                    : 'border-orange-500/30 text-orange-700 bg-orange-50'
                }>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {selectedProduct.availability === 'in-stock' ? 'În stoc' : 'La comandă'}
                </Badge>
              </div>
              <h1 className="text-2xl font-bold mb-3 text-foreground">{selectedProduct.name}</h1>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {selectedProduct.description}
              </p>
            </div>

            {/* Prețul */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-1">Preț de la:</div>
                <div className="text-xl font-bold text-primary">
                  {selectedProduct.priceRange || `${selectedProduct.priceFrom?.toLocaleString()} EUR`}
                </div>
                <div className="text-xs text-muted-foreground mt-1">TVA inclus</div>
              </CardContent>
            </Card>

            {/* Butoane de acțiune */}
            <div className="space-y-3">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Adaugă în Coș
              </Button>
              <Button variant="outline" size="lg" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                <Phone className="w-4 h-4 mr-2" />
                Solicită Ofertă Personalizată
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Heart className="w-4 h-4 mr-1" />
                  Favorite
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-1" />
                  Distribuie
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <FileText className="w-4 h-4 mr-1" />
                  PDF
                </Button>
              </div>
            </div>

            {/* Shipping & Support */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Transport gratuit în România</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-muted-foreground">Garanție 12 luni</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Settings className="w-4 h-4 text-blue-600" />
                <span className="text-muted-foreground">Service autorizat</span>
              </div>
            </div>

            {/* Quick Specs */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Specificații Rapide
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                {Object.entries(selectedProduct.technicalData).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-blue-900">Contactează Specialistul</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800">+40 742 123 456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800">comenzi@heustractors.ro</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
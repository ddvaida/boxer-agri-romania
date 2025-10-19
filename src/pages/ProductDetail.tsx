import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Heart, Share2, Download, Phone, Mail, MapPin } from 'lucide-react';
import { getProductById, getProductsByCategory, DetailedProduct } from '@/data/allProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!id) {
    return <Navigate to="/inventar" replace />;
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-4">Produsul nu a fost găsit</h1>
          <Button asChild>
            <Link to="/inventar">Înapoi la Inventar</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get product variants from the same subcategory and series
  const productVariants = useMemo(() => {
    const allProducts = getProductsByCategory(product.category, product.subcategory);
    
    // Extract base series name - more comprehensive pattern matching
    const getBaseSeries = (name: string) => {
      // Match common series patterns: AGF, NEX, DM, FM, HM, AGL, AGZ, BL, BLG, WB, PI, PX, ZM, etc.
      const match = name.match(/(AGF|NEX|DM|FM|HM|AGL|AGZ|BL|BLG|WB|PI|PX|ZM|SB|PHS|MXS|GF|TCA|HV|WCL|LSP|BM|WPL|MHV)/i);
      return match ? match[1].toUpperCase() : null;
    };

    const currentSeries = getBaseSeries(product.name);
    if (!currentSeries) return [product];

    // Filter products from the same series
    const variants = allProducts.filter(p => {
      const series = getBaseSeries(p.name);
      return series === currentSeries;
    }).sort((a, b) => {
      // Sort by working width or model number
      const getSize = (name: string) => {
        const match = name.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
      };
      return getSize(a.name) - getSize(b.name);
    });

    // Only return variants if there's more than one product in the series
    return variants.length > 1 ? variants : [product];
  }, [product.category, product.subcategory, product.name]);

  const handleVariantChange = (variantId: string) => {
    navigate(`/produs/${variantId}`);
    setCurrentImageIndex(0);
  };

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-4 bg-muted/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Acasă</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/inventar" className="text-muted-foreground hover:text-primary">Inventar</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Imagine ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {product.isNew && <Badge className="bg-green-600">Nou</Badge>}
                  {product.isFeatured && <Badge className="bg-yellow-500 text-black">Recomandat</Badge>}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 bg-white rounded border-2 overflow-hidden transition-all ${
                        currentImageIndex === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline" className="text-sm">{product.brand}</Badge>
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

              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{product.name}</h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector */}
              {productVariants.length > 1 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Selectează Varianta:</h3>
                  <div className="flex flex-wrap gap-2">
                    {productVariants.map((variant) => {
                      const modelNumber = variant.name.match(/\d+/)?.[0];
                      const modelName = variant.name.split(' ').slice(-1)[0]; // Get last word (e.g., "AGF120" from "Boxer AGF120")
                      const displayName = modelNumber ? `${modelName}` : variant.name;
                      
                      return (
                        <Button
                          key={variant.id}
                          variant={variant.id === product.id ? "default" : "outline"}
                          size="default"
                          onClick={() => handleVariantChange(variant.id)}
                          className={`min-w-[90px] font-semibold ${
                            variant.id === product.id 
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          {displayName}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Display */}
              {(product.priceFrom || product.priceRange) && (
                <div className="mb-6">
                  {product.priceFrom ? (
                    <div className="text-3xl font-bold text-primary">
                      €{product.priceFrom.toLocaleString('ro-RO')}
                      <span className="text-sm font-normal text-muted-foreground ml-2">excl. TVA</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-primary">
                      {product.priceRange}
                    </div>
                  )}
                </div>
              )}

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Caracteristici Principale</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold">
                  ADAUGĂ ÎN COȘUL DE OFERTE
                </Button>
              </div>

              {/* Downloads Section */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Descărcări</h3>
                <div className="space-y-2">
                  <button className="flex items-center text-sm hover:text-primary transition-colors">
                    <Download size={16} className="mr-2" />
                    <span>FIȘĂ PRODUS</span>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Contactează-ne pentru Mai Multe Detalii</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-primary" />
                    <span>+40 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-primary" />
                    <span>contact@boxeragri.ro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-primary" />
                    <span>Str. Agricolă nr. 123, București</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specificații Tehnice</TabsTrigger>
              <TabsTrigger value="description">Descriere Detaliată</TabsTrigger>
              <TabsTrigger value="documentation">Documentație</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <Card className="bg-background border-0">
                <CardHeader>
                  <CardTitle>Specificații Tehnice Complete</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-border last:border-b-0">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="description" className="mt-8">
              <Card className="bg-background border-0">
                <CardHeader>
                  <CardTitle>Descriere Detaliată</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="mb-6">{product.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Avantaje Principale</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Aplicații Recomandate</h3>
                  <p className="text-muted-foreground">
                    Acest produs este ideal pentru diverse aplicații în agricultură și construcții, 
                    oferind performanță și fiabilitate pentru utilizatorii profesioniști.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documentation" className="mt-8">
              <Card className="bg-background border-0">
                <CardHeader>
                  <CardTitle>Documentație și Suport</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Documente Disponibile</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Download size={16} className="mr-2" />
                          Manual de Utilizare (PDF)
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Download size={16} className="mr-2" />
                          Specificații Tehnice (PDF)
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Download size={16} className="mr-2" />
                          Catalogul Pieselor (PDF)
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold">Suport Tehnic</h3>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Echipa noastră de specialiști este disponibilă pentru a vă oferi 
                          suport tehnic complet pentru acest produs.
                        </p>
                        <Button className="w-full">
                          <Phone size={16} className="mr-2" />
                          Contactează Suportul
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
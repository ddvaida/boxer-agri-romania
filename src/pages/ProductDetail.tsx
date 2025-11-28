import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, Phone, Mail, ShoppingCart, FileText } from 'lucide-react';
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
    
    // Extract base series name - comprehensive pattern matching
    const getBaseSeries = (name: string) => {
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
      const getSize = (name: string) => {
        const match = name.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
      };
      return getSize(a.name) - getSize(b.name);
    });

    return variants.length > 1 ? variants : [product];
  }, [product.category, product.subcategory, product.name]);

  const handleVariantChange = (variantId: string) => {
    navigate(`/produs/${variantId}`);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Get series name for display
  const getSeriesName = () => {
    const match = product.name.match(/(AGF|NEX|DM|FM|HM|AGL|AGZ|BL|BLG|WB|PI|PX|ZM|SB|PHS|MXS|GF|TCA|HV|WCL|LSP|BM|WPL|MHV)/i);
    return match ? `Seria ${match[1].toUpperCase()}` : product.subcategory;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-3 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Acasă</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/inventar" className="text-muted-foreground hover:text-primary transition-colors">Produse</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-border">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Imagine ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain p-4"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && <Badge className="bg-green-600 text-white">Nou</Badge>}
                  {product.isFeatured && <Badge className="bg-amber-500 text-white">Recomandat</Badge>}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 bg-white rounded border-2 overflow-hidden transition-all ${
                        currentImageIndex === index ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Series */}
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wide">
                  {product.brand}
                </Badge>
                <span className="text-sm text-muted-foreground">{getSeriesName()}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {product.name}
              </h1>
              
              {/* Short Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector with Prices */}
              {productVariants.length > 1 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Selectează Modelul
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {productVariants.map((variant) => {
                      const isSelected = variant.id === product.id;
                      const modelName = variant.name.split(' ').pop() || variant.name;
                      
                      return (
                        <button
                          key={variant.id}
                          onClick={() => handleVariantChange(variant.id)}
                          className={`relative p-3 rounded-lg border-2 text-left transition-all ${
                            isSelected 
                              ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                              : 'border-border hover:border-muted-foreground hover:bg-muted/50'
                          }`}
                        >
                          <div className="font-semibold text-sm text-foreground">{modelName}</div>
                          {variant.priceFrom && (
                            <div className="text-xs text-muted-foreground mt-1">
                              €{variant.priceFrom.toLocaleString('ro-RO')}
                            </div>
                          )}
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Display */}
              <div className="py-4 border-y border-border">
                <div className="flex items-baseline gap-2">
                  {product.priceFrom ? (
                    <>
                      <span className="text-3xl md:text-4xl font-bold text-primary">
                        €{product.priceFrom.toLocaleString('ro-RO')}
                      </span>
                      <span className="text-sm text-muted-foreground">excl. TVA</span>
                    </>
                  ) : product.priceRange ? (
                    <span className="text-2xl font-bold text-primary">{product.priceRange}</span>
                  ) : (
                    <span className="text-lg text-muted-foreground">Preț la cerere</span>
                  )}
                </div>
                <Badge 
                  className={`mt-2 ${
                    product.availability === 'in-stock' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : product.availability === 'on-order' 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  {product.availability === 'in-stock' ? '● În stoc' :
                   product.availability === 'on-order' ? '● La comandă' : '● Indisponibil'}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 bg-destructive hover:bg-destructive/90 text-white font-semibold h-12">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  ADAUGĂ ÎN COȘUL DE OFERTE
                </Button>
                <Button size="lg" variant="outline" className="h-12">
                  <Phone className="mr-2 h-5 w-5" />
                  SOLICITĂ OFERTĂ
                </Button>
              </div>

              {/* Downloads */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Descărcări</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <FileText className="mr-2 h-4 w-4" />
                    Fișă tehnică
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Download className="mr-2 h-4 w-4" />
                    Manual utilizare
                  </Button>
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-muted/50 border-border">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Ai nevoie de ajutor?</p>
                      <p className="text-xs text-muted-foreground">Contactează-ne pentru detalii</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="tel:+40123456789">
                          <Phone className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:contact@boxeragri.ro">
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-0">
              <TabsTrigger 
                value="specifications" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Specificații
              </TabsTrigger>
              <TabsTrigger 
                value="features" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Caracteristici
              </TabsTrigger>
              <TabsTrigger 
                value="documents" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Documente
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground text-sm">{key}</span>
                        <span className="font-medium text-foreground text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <FileText className="mr-3 h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Fișă Tehnică</div>
                        <div className="text-xs text-muted-foreground">PDF • 2.4 MB</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <Download className="mr-3 h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Manual Utilizare</div>
                        <div className="text-xs text-muted-foreground">PDF • 5.1 MB</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <FileText className="mr-3 h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Catalog Piese</div>
                        <div className="text-xs text-muted-foreground">PDF • 8.3 MB</div>
                      </div>
                    </Button>
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

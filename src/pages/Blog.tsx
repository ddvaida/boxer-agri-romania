import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ghid complet pentru întreținerea tractorului în sezonul de iarnă",
      excerpt: "Descoperiți cele mai importante aspecte ale întreținerii tractorului pe timp de iarnă pentru a preveni defecțiunile și a asigura performanța maximă.",
      category: "Întreținere",
      author: "Andrei Popescu",
      date: "15 Ianuarie 2024",
      image: "/api/placeholder/800/400",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Cum să alegi tractorul potrivit pentru fermă ta",
      excerpt: "Analizăm factorii cheie care trebuie luați în considerare atunci când achiziționați un tractor nou sau second-hand pentru exploatația dumneavoastră agricolă.",
      category: "Ghiduri",
      author: "Maria Ionescu",
      date: "10 Ianuarie 2024",
      image: "/api/placeholder/800/400",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Tehnologii moderne în agricultura românească",
      excerpt: "O privire asupra ultimelor tehnologii disponibile în domeniul utilajelor agricole și cum acestea pot îmbunătăți eficiența fermei tale.",
      category: "Tehnologie",
      author: "Ion Georgescu",
      date: "5 Ianuarie 2024",
      image: "/api/placeholder/800/400",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "Subvenții și finanțare pentru achiziția de utilaje agricole în 2024",
      excerpt: "Informații complete despre programele de finanțare disponibile pentru fermieri în România și cum să aplicați pentru a obține fonduri.",
      category: "Finanțare",
      author: "Elena Dumitrescu",
      date: "28 Decembrie 2023",
      image: "/api/placeholder/800/400",
      readTime: "15 min"
    },
    {
      id: 5,
      title: "Comparație: Tractoare noi vs second-hand",
      excerpt: "Avantajele și dezavantajele achiziționării unui tractor nou versus unul second-hand. Ce opțiune este cea mai bună pentru nevoile tale?",
      category: "Ghiduri",
      author: "Andrei Popescu",
      date: "20 Decembrie 2023",
      image: "/api/placeholder/800/400",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Cele mai bune practici pentru pregătirea solului primăvara",
      excerpt: "Tehnici moderne și echipamente recomandate pentru pregătirea optimă a solului înainte de sezonul de semănat.",
      category: "Agronomie",
      author: "Maria Ionescu",
      date: "15 Decembrie 2023",
      image: "/api/placeholder/800/400",
      readTime: "9 min"
    }
  ];

  const categories = ["Toate", "Întreținere", "Ghiduri", "Tehnologie", "Finanțare", "Agronomie"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">Blog & Știri</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Articole, Ghiduri și Știri din Agricultură
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rămâi la curent cu cele mai recente știri, sfaturi practice și ghiduri complete despre utilaje agricole și tehnologii moderne.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Caută articole..." 
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === "Toate" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4">Articol Recomandat</Badge>
            <Card className="overflow-hidden border-0 shadow-elegant hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto bg-muted"></div>
                <CardHeader className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">{blogPosts[0].readTime} citire</span>
                  </div>
                  <CardTitle className="text-3xl font-serif mb-4">
                    {blogPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {blogPosts[0].excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                    <Button>
                      Citește mai mult
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <div className="h-48 bg-muted"></div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-serif line-clamp-2 mb-3">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Citește articolul
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Încarcă mai multe articole
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-primary border-0 text-primary-foreground">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-serif mb-4">
                Abonează-te la Newsletter
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                Primește cele mai recente articole, ghiduri și oferte speciale direct în inbox
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="adresa@email.ro" 
                  className="bg-background text-foreground"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Abonează-te
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;

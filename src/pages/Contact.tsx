import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis!",
      description: "Vă vom contacta în cel mai scurt timp posibil.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresa Sediu Principal",
      details: ["Str. Agricultorilor Nr. 123", "București, România", "012345"],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+40 123 456 789", "+40 987 654 321"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@boxeragri.ro", "vanzari@boxeragri.ro"],
    },
    {
      icon: Clock,
      title: "Program",
      details: ["Luni - Vineri: 8:00 - 18:00", "Sâmbătă: 9:00 - 14:00", "Duminică: Închis"],
    },
  ];

  const dealers = [
    {
      name: "Showroom București",
      address: "Str. Agricultorilor Nr. 123, București",
      phone: "+40 123 456 789",
      email: "bucuresti@boxeragri.ro"
    },
    {
      name: "Dealer Cluj-Napoca",
      address: "Str. Traian Vuia Nr. 45, Cluj-Napoca",
      phone: "+40 264 123 456",
      email: "cluj@boxeragri.ro"
    },
    {
      name: "Dealer Timișoara",
      address: "Calea Aradului Nr. 67, Timișoara",
      phone: "+40 256 789 012",
      email: "timisoara@boxeragri.ro"
    },
    {
      name: "Dealer Iași",
      address: "Șoseaua Națională Nr. 89, Iași",
      phone: "+40 232 345 678",
      email: "iasi@boxeragri.ro"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Contactați-ne
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suntem aici să vă ajutăm! Contactați-ne pentru orice întrebări despre produsele noastre sau pentru consultanță specializată.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <info.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Trimite-ne un mesaj</CardTitle>
                <CardDescription>Completează formularul și te vom contacta în cel mai scurt timp</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ion Popescu"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ion.popescu@email.ro"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+40 123 456 789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subiect *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Solicitare informații tractor"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrie cerința ta aici..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send size={16} className="mr-2" />
                    Trimite Mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
                <div className="h-96 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p>Hartă Interactivă</p>
                    <p className="text-sm">Google Maps va fi integrată aici</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Network */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Rețeaua Noastră de Dealeri
            </h2>
            <p className="text-xl text-muted-foreground">
              Găsește cel mai apropiat dealer Boxer Agri din zona ta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dealers.map((dealer, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{dealer.name}</CardTitle>
                  <CardDescription className="flex items-start space-x-2">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{dealer.address}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone size={16} className="text-primary" />
                    <span>{dealer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail size={16} className="text-primary" />
                    <span>{dealer.email}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Vezi pe hartă
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

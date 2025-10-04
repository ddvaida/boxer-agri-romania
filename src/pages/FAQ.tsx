import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Despre Produse",
      icon: HelpCircle,
      questions: [
        {
          q: "Ce tipuri de tractoare oferiți?",
          a: "Oferim o gamă completă de tractoare, de la tractoare compacte de 20-40 CP ideale pentru grădini și fermele mici, până la tractoare agricole puternice de 100+ CP pentru exploatații mari. Toate tractoarele noastre sunt echipate cu motoare diesel moderne, cutii de viteze eficiente și cabine confortabile."
        },
        {
          q: "Tractoarele vin cu garanție?",
          a: "Da, toate tractoarele noi vin cu garanție completă de 2 ani sau 2000 ore de funcționare (în funcție de ce survine mai întâi). Garanția acoperă toate piesele și manopera. Pentru tractoarele second-hand, oferim garanție de 6 luni pentru piesele majore."
        },
        {
          q: "Pot testa tractorul înainte de cumpărare?",
          a: "Absolut! Încurajăm toți clienții să testeze tractoarele înainte de a lua o decizie. Puteți programa o demonstrație la showroom-ul nostru sau, pentru comenzi mari, putem organiza demonstrații la ferma dumneavoastră."
        },
        {
          q: "Care este diferența dintre seriile de tractoare pe care le oferiți?",
          a: "Fiecare serie este proiectată pentru anumite aplicații: seriile compacte (20-40 CP) sunt ideale pentru grădini și fermele mici, seriile medii (40-80 CP) sunt perfecte pentru ferme mixte, iar seriile puternice (80+ CP) sunt destinate exploatațiilor agricole mari cu cerințe intensive."
        }
      ]
    },
    {
      category: "Cumpărare și Finanțare",
      icon: HelpCircle,
      questions: [
        {
          q: "Oferiți opțiuni de finanțare?",
          a: "Da, colaborăm cu mai multe instituții financiare pentru a oferi soluții de leasing și credite avantajoase. Avansul poate fi de la 10% până la 30%, iar perioada de finanțare variază între 12 și 60 de luni, în funcție de produsul ales și de istoricul dumneavoastră."
        },
        {
          q: "Acceptați tractoare vechi la schimb?",
          a: "Da, acceptăm tractoare și utilaje vechi la schimb. Echipa noastră de experți va evalua echipamentul dumneavoastră și va oferi un preț echitabil care poate fi dedus din prețul noului tractor."
        },
        {
          q: "Cum pot beneficia de subvenții APIA?",
          a: "Vă asistăm complet în procesul de accesare a subvențiilor APIA. Echipa noastră vă va ghida prin toate etapele documentației necesare și vă va oferi toate facturile și certificatele conform cerințelor APIA."
        },
        {
          q: "Care este procesul de cumpărare?",
          a: "Procesul include: (1) Consultanță pentru alegerea modelului potrivit, (2) Test drive și inspecție, (3) Ofertă personalizată de preț, (4) Semnarea contractului, (5) Procesare plată/finanțare, (6) Livrare și training la locație, (7) Suport post-vânzare continuu."
        }
      ]
    },
    {
      category: "Service și Întreținere",
      icon: HelpCircle,
      questions: [
        {
          q: "Oferiți servicii de întreținere și reparații?",
          a: "Da, avem un departament de service complet dotat cu mecanici certificați și piese de schimb originale. Oferim întreținere preventivă, reparații, diagnosticare computerizată și suport tehnic 24/7 pentru urgențe."
        },
        {
          q: "Cât de des trebuie făcută întreținerea tractorului?",
          a: "Recomandăm întreținere de bază (schimb ulei, filtre) la fiecare 200-250 ore de funcționare sau anual (în funcție de ce survine mai întâi). Întreținerea majoră se face la 500-1000 ore. Oferim planuri de întreținere personalizate pentru fiecare client."
        },
        {
          q: "Aveți piese de schimb în stoc?",
          a: "Da, menținem un stoc generos de piese de schimb originale pentru toate modelele pe care le comercializăm. Pentru piese mai puțin comune, putem comanda și livra în 3-5 zile lucrătoare."
        },
        {
          q: "Oferiți service la locația clientului?",
          a: "Da, pentru clienți cu flote mari sau pentru reparații majore, oferim service mobil. Echipa noastră se poate deplasa la locația dumneavoastră cu toate echipamentele și piesele necesare."
        }
      ]
    },
    {
      category: "Livrare și Garanție",
      icon: HelpCircle,
      questions: [
        {
          q: "Cum se face livrarea?",
          a: "Asigurăm transport gratuit în România pentru comenzile de tractoare noi. Livrarea se face cu platforme specializate, iar echipa noastră de tehnicieni va face instalarea inițială și instruirea operatorului la locație."
        },
        {
          q: "Cât durează până primesc tractorul după comandă?",
          a: "Pentru tractoarele din stoc, livrarea se face în 5-10 zile lucrătoare. Pentru configurații speciale sau comenzi din import, termenul este de 4-8 săptămâni. Vă ținem la curent în permanență cu statusul comenzii."
        },
        {
          q: "Ce include garanția?",
          a: "Garanția completă acoperă: motor, transmisie, sistem hidraulic, componente electrice, șasiu și cabină. Include piese și manoperă. Nu acoperă consumabilele (uleiuri, filtre), uzura normală sau daune cauzate de utilizare necorespunzătoare."
        },
        {
          q: "Pot extinde perioada de garanție?",
          a: "Da, oferim pachete de extindere a garanției până la 5 ani. Acestea includ și întreținere preventivă gratuită, asistență rutieră 24/7 și tractorist de rezervă în caz de defecțiuni majore."
        }
      ]
    },
    {
      category: "Produse Second-Hand",
      icon: HelpCircle,
      questions: [
        {
          q: "Tractoarele second-hand sunt verificate?",
          a: "Da, fiecare tractor second-hand trece printr-o inspecție riguroasă de 150 de puncte. Verificăm motorul, transmisia, hidraulica, sistemul electric, șasiul și toate sistemele de siguranță. Oferim rapoarte complete de inspecție pentru fiecare unitate."
        },
        {
          q: "Pot vedea istoricul de service al unui tractor second-hand?",
          a: "Pentru tractoarele care au fost deservite în rețeaua noastră, putem furniza istoric complet de service. Pentru tractoare din alte surse, oferim verificare tehnică completă și vă informăm despre starea actuală."
        },
        {
          q: "Oferiți garanție pentru tractoarele second-hand?",
          a: "Da, toate tractoarele second-hand vin cu garanție de minim 6 luni pentru componentele majore (motor, transmisie, hidraulică). În funcție de starea și vechimea tractorului, putem oferi garanții extinse."
        },
        {
          q: "Pot returna un tractor second-hand dacă nu sunt mulțumit?",
          a: "Oferim o perioadă de testare de 30 de zile pentru tractoarele second-hand. Dacă nu sunteți complet mulțumit, puteți returna tractorul pentru un alt model sau pentru rambursarea integrală a banilor (minus costurile de livrare)."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            <HelpCircle size={16} className="mr-2" />
            Întrebări Frecvente
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Cum te putem ajuta?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Găsește răspunsuri la cele mai frecvente întrebări despre produsele noastre, servicii și procesul de cumpărare.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`item-${catIndex}-${qIndex}`}
                      className="border rounded-lg px-6 bg-gradient-card shadow-card"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center border-0 shadow-elegant bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-3xl font-serif mb-4">
                Nu ai găsit răspunsul?
              </CardTitle>
              <CardDescription className="text-lg">
                Echipa noastră este mereu disponibilă să răspundă la întrebările tale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/contact">
                  <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center space-y-3">
                    <Phone size={32} className="text-primary" />
                    <div>
                      <div className="font-semibold">Sună-ne</div>
                      <div className="text-sm text-muted-foreground">+40 123 456 789</div>
                    </div>
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center space-y-3">
                    <Mail size={32} className="text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">contact@boxeragri.ro</div>
                    </div>
                  </Button>
                </Link>

                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center space-y-3">
                  <MessageCircle size={32} className="text-primary" />
                  <div>
                    <div className="font-semibold">Chat Live</div>
                    <div className="text-sm text-muted-foreground">Luni-Vineri: 8-18</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

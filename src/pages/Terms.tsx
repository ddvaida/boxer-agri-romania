import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            <FileText size={16} className="mr-2" />
            Termeni și Condiții
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Termeni și Condiții de Utilizare
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ultima actualizare: 1 Ianuarie 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">1. Acceptarea Termenilor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Prin accesarea și utilizarea site-ului web www.boxeragri.ro ("Site-ul"), acceptați să respectați și să fiți legat de prezentii Termeni și Condiții ("Termeni"). Dacă nu sunteți de acord cu acești Termeni, vă rugăm să nu utilizați Site-ul.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Boxer Agri România SRL ("Compania", "noi", "al nostru") își rezervă dreptul de a modifica acești Termeni în orice moment. Modificările vor intra în vigoare imediat după publicarea pe Site.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">2. Utilizarea Site-ului</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">2.1. Licență de Utilizare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vă acordăm o licență limitată, neexclusivă, netransferabilă și revocabilă pentru a accesa și utiliza Site-ul în scopuri personale și comerciale legitime. Nu aveți dreptul să:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                    <li>Modificați, copiați sau distribuiți conținutul Site-ului fără permisiune</li>
                    <li>Utilizați roboți, spider-e sau alte mijloace automate pentru a accesa Site-ul</li>
                    <li>Încercați să obțineți acces neautorizat la sistemele noastre</li>
                    <li>Folosiți Site-ul în scopuri ilegale sau neautorizate</li>
                    <li>Transmiteți viruși sau cod malițios prin intermediul Site-ului</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">2.2. Cont Utilizator</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pentru anumite funcționalități, este posibil să fie necesar să creați un cont. Sunteți responsabil pentru menținerea confidențialității datelor contului și pentru toate activitățile efectuate sub contul dumneavoastră. Notificați-ne imediat despre orice utilizare neautorizată.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">3. Produse și Servicii</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">3.1. Informații Produs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ne străduim să furnizăm informații accurate despre produse, dar nu garantăm că descrierile produselor, specificațiile sau alte conținuturi sunt complete, fiabile, actuale sau fără erori. Imaginile produselor sunt reprezentative și pot diferi de produsul final.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">3.2. Disponibilitate</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toate produsele sunt supuse disponibilității. Ne rezervăm dreptul de a limita cantitățile disponibile pentru vânzare și de a întrerupe vânzarea oricărui produs în orice moment. Prețurile pot fi modificate fără notificare prealabilă.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">3.3. Comenzi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prin plasarea unei comenzi, faceți o ofertă de a cumpăra produsele selectate. Ne rezervăm dreptul de a accepta sau refuza orice comandă. Confirmarea comenzii va fi trimisă prin email și va constitui acceptarea noastră a ofertei dumneavoastră.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">4. Prețuri și Plăți</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">4.1. Prețuri</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toate prețurile sunt exprimate în LEI (RON) și includ TVA, cu excepția cazului în care este specificat altfel. Ne rezervăm dreptul de a modifica prețurile în orice moment, dar comenzile confirmate nu vor fi afectate de modificările ulterioare de preț.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">4.2. Metode de Plată</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acceptăm următoarele metode de plată: transfer bancar, card de credit/debit, leasing financiar și finanțare prin partenerii noștri bancari. Toate tranzacțiile cu cardul sunt procesate securizat prin procesatori de plăți autorizați.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">4.3. Facturare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Veți primi o factură fiscală conform legislației românești pentru fiecare achiziție. Asigurați-vă că datele de facturare sunt corecte la momentul plasării comenzii.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">5. Livrare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">5.1. Termene de Livrare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Termenele de livrare estimate sunt furnizate cu bună-credință, dar nu sunt garantate. Nu suntem responsabili pentru întârzieri cauzate de circumstanțe în afara controlului nostru (forță majoră, condiții meteorologice, restricții de transport).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5.2. Costuri de Livrare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Livrarea tractorelor și utilajelor mari este gratuită în România. Pentru piese de schimb și accesorii, costurile de livrare sunt calculate în funcție de dimensiune, greutate și destinație.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5.3. Transfer de Proprietate</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proprietatea produselor se transferă către dumneavoastră la momentul livrării și semnării procesului-verbal de predare-primire. Riscul de pierdere sau deteriorare trece asupra dumneavoastră la momentul livrării.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">6. Garanție și Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">6.1. Garanție Comercială</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Produsele noi beneficiază de garanție comercială conform termenilor specificați în certificatul de garanție. Garanția acoperă defectele de fabricație și material în condițiile de utilizare normală. Nu acoperă uzura normală, daune cauzate de utilizare necorespunzătoare, neglijență sau modificări neautorizate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">6.2. Service și Întreținere</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferim servicii complete de mentenanță și reparații prin rețeaua noastră autorizată. Pentru a menține valabilitatea garanției, service-ul trebuie efectuat conform programului recomandat de producător la centrele noastre autorizate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">6.3. Garanție Legală</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    În conformitate cu Legea 449/2003 privind vânzarea produselor și garanțiile asociate, beneficiați de garanție legală de conformitate de 24 luni de la livrare pentru persoane fizice și 12 luni pentru persoane juridice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">7. Returnări și Anulări</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">7.1. Drept de Retragere (Consumatori)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conform OUG 34/2014, consumatorii au dreptul de a se retrage din contract în termen de 14 zile de la livrare, fără a fi nevoie să justifice decizia. Produsele trebuie returnate în starea originală, nefolosite și cu ambalajul intact. Costurile de returnare sunt suportate de consumator.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.2. Excepții</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dreptul de retragere nu se aplică pentru produse personalizate, produse sigilate care au fost desigilate sau produse care, prin natura lor, nu pot fi returnate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.3. Procedura de Returnare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pentru a exercita dreptul de retragere, trebuie să ne notificați prin email la contact@boxeragri.ro. Vă vom furniza instrucțiuni detaliate pentru returnare. Rambursarea se va efectua în termen de 14 zile de la primirea produselor returnate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">8. Proprietate Intelectuală</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Întregul conținut al Site-ului, inclusiv dar fără a se limita la texte, grafice, logo-uri, imagini, videoclipuri, compilări de date și software, este proprietatea Boxer Agri România SRL sau a furnizorilor noștri de conținut și este protejat de legile dreptului de autor și ale proprietății intelectuale din România și internaționale.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nu aveți dreptul să reproduceți, distribuiți, modificați sau să creați lucrări derivate din conținutul Site-ului fără permisiunea noastră scrisă prealabilă.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">9. Limitarea Răspunderii</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  În limita permisă de lege, Boxer Agri România SRL nu va fi răspunzătoare pentru:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Daune indirecte, incidentale, speciale sau consecutive</li>
                  <li>Pierderi de profit, venituri sau date</li>
                  <li>Întreruperi ale activității sau pierderi comerciale</li>
                  <li>Costuri de achiziție a produselor sau serviciilor de înlocuire</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Răspunderea noastră totală este limitată la valoarea produselor achiziționate care au generat reclamația.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">10. Forță Majoră</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nu suntem răspunzători pentru neîndeplinirea obligațiilor noastre în cazul în care aceasta este cauzată de evenimente de forță majoră, incluzând dar fără a se limita la: dezastre naturale, războaie, greve, restricții guvernamentale, pandemii, întreruperi ale furnizării de energie sau internet, sau alte circumstanțe în afara controlului nostru rezonabil.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">11. Legea Aplicabilă și Jurisdicție</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Acești Termeni sunt guvernați de legile României. Orice litigiu rezultat din sau în legătură cu acești Termeni va fi soluționat de către instanțele competente din România.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pentru consumatori, legea aplicabilă poate include și dispozițiile imperative ale țării în care își au reședința obișnuită, dacă acestea oferă un nivel mai ridicat de protecție.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">12. Soluționarea Alternativă a Litigiilor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  În conformitate cu Regulamentul UE 524/2013, consumatorii au dreptul de a accesa platforma europeană de soluționare online a litigiilor: 
                  <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De asemenea, consumatorii pot apela la entități alternative de soluționare a litigiilor, precum ANPC (Autoritatea Națională pentru Protecția Consumatorilor).
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">13. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground leading-relaxed">
                  Pentru întrebări despre acești Termeni și Condiții, vă rugăm să ne contactați:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p><span className="font-semibold">Boxer Agri România SRL</span></p>
                  <p>Str. Agricultorilor Nr. 123, București, România, 012345</p>
                  <p>CUI: RO12345678 | Reg. Com.: J40/12345/2008</p>
                  <p>Email: <a href="mailto:contact@boxeragri.ro" className="text-primary hover:underline">contact@boxeragri.ro</a></p>
                  <p>Telefon: +40 123 456 789</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            <Shield size={16} className="mr-2" />
            Confidențialitate & Securitate
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Politica de Confidențialitate
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
                <CardTitle className="text-2xl font-serif">1. Introducere</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Boxer Agri România ("noi", "al nostru" sau "compania") respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația românească aplicabilă.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Această Politică de Confidențialitate explică modul în care colectăm, folosim, dezvăluim și protejăm informațiile dumneavoastră personale atunci când vizitați site-ul nostru web sau utilizați serviciile noastre.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">2. Informații pe care le Colectăm</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">2.1. Informații furnizate direct de dumneavoastră:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Date de identificare: nume, prenume, CNP (doar pentru contracte)</li>
                    <li>Date de contact: adresă email, număr de telefon, adresă poștală</li>
                    <li>Informații despre fermă/afacere: dimensiune, tip de cultură, echipamente existente</li>
                    <li>Informații financiare: date bancare (doar pentru procesarea plăților)</li>
                    <li>Conținut generat: recenzii, comentarii, întrebări trimise prin formulare</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-2">2.2. Informații colectate automat:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Date de navigare: adresa IP, tip de browser, sistem de operare</li>
                    <li>Date de utilizare: pagini vizitate, timp petrecut pe site, link-uri accesate</li>
                    <li>Date cookie: preferințe, setări, identificatori unici</li>
                    <li>Informații despre dispozitiv: model, rezoluție ecran, limba sistemului</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">3. Cum Folosim Informațiile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Pentru a procesa comenzile și a livra produsele solicitate</li>
                  <li>Pentru a furniza servicii de întreținere și suport tehnic</li>
                  <li>Pentru a răspunde la întrebările și solicitările dumneavoastră</li>
                  <li>Pentru a îmbunătăți experiența pe site-ul nostru</li>
                  <li>Pentru a trimite comunicări de marketing (cu consimțământul dumneavoastră)</li>
                  <li>Pentru a respecta obligațiile legale și fiscale</li>
                  <li>Pentru a preveni frauda și a asigura securitatea</li>
                  <li>Pentru a efectua analize statistice și studii de piață</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">4. Baza Legală a Prelucrării</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prelucrăm datele dumneavoastră personale pe baza următoarelor temeiuri legale:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><span className="font-semibold">Consimțământ:</span> pentru comunicări de marketing și cookie-uri non-esențiale</li>
                  <li><span className="font-semibold">Executarea contractului:</span> pentru procesarea comenzilor și livrarea produselor</li>
                  <li><span className="font-semibold">Obligație legală:</span> pentru păstrarea documentelor contabile și fiscale</li>
                  <li><span className="font-semibold">Interes legitim:</span> pentru îmbunătățirea serviciilor și prevenirea fraudei</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">5. Partajarea Informațiilor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nu vindem, închiriem sau transferăm datele dumneavoastră personale către terțe părți în scopuri de marketing. Putem partaja informații cu:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Furnizori de servicii logistice (pentru livrarea produselor)</li>
                  <li>Procesatori de plăți (pentru tranzacții financiare securizate)</li>
                  <li>Furnizori de servicii IT (hosting, mentenanță, securitate)</li>
                  <li>Consultanți profesioniști (avocați, contabili) obligați la confidențialitate</li>
                  <li>Autorități publice (când este cerut legal)</li>
                  <li>Instituții financiare (pentru procesarea finanțărilor și leasingurilor)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">6. Securitatea Datelor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementăm măsuri tehnice și organizatorice corespunzătoare pentru a proteja datele dumneavoastră:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Criptare SSL/TLS pentru toate transmisiile de date</li>
                  <li>Servere securizate protejate de firewall-uri</li>
                  <li>Acces restricționat la date doar pentru personalul autorizat</li>
                  <li>Backup-uri regulate și proceduri de recuperare</li>
                  <li>Monitorizare continuă a sistemelor pentru activități suspecte</li>
                  <li>Instruire regulată a personalului privind securitatea datelor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">7. Drepturile Dumneavoastră</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  În conformitate cu GDPR, aveți următoarele drepturi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><span className="font-semibold">Dreptul de acces:</span> să solicitați copii ale datelor personale</li>
                  <li><span className="font-semibold">Dreptul la rectificare:</span> să corectați informații inexacte</li>
                  <li><span className="font-semibold">Dreptul la ștergere:</span> să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
                  <li><span className="font-semibold">Dreptul la restricționare:</span> să limitați prelucrarea datelor</li>
                  <li><span className="font-semibold">Dreptul la portabilitate:</span> să primiți datele într-un format structurat</li>
                  <li><span className="font-semibold">Dreptul la opoziție:</span> să vă opuneți prelucrării în anumite cazuri</li>
                  <li><span className="font-semibold">Dreptul de a retrage consimțământul:</span> în orice moment</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pentru a exercita aceste drepturi, contactați-ne la: <a href="mailto:privacy@boxeragri.ro" className="text-primary hover:underline">privacy@boxeragri.ro</a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">8. Retenția Datelor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Păstrăm datele personale doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Date contractuale: 10 ani (conform legislației fiscale)</li>
                  <li>Date de marketing: până la retragerea consimțământului</li>
                  <li>Date de navigare: 2 ani</li>
                  <li>Înregistrări conversații (telefon/chat): 6 luni</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">9. Cookie-uri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Site-ul nostru folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. Folosim:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><span className="font-semibold">Cookie-uri esențiale:</span> necesare pentru funcționarea site-ului</li>
                  <li><span className="font-semibold">Cookie-uri de performanță:</span> pentru analiză și îmbunătățiri</li>
                  <li><span className="font-semibold">Cookie-uri de funcționalitate:</span> pentru preferințele utilizatorului</li>
                  <li><span className="font-semibold">Cookie-uri de marketing:</span> pentru publicitate relevantă</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Puteți gestiona preferințele cookie-urilor prin setările browserului.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">10. Modificări ale Politicii</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ne rezervăm dreptul de a modifica această Politică de Confidențialitate. Modificările semnificative vor fi comunicate prin email sau notificare pe site. Vă recomandăm să verificați periodic această pagină pentru actualizări.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">11. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground leading-relaxed">
                  Pentru întrebări despre această Politică de Confidențialitate sau despre modul în care prelucrăm datele dumneavoastră, contactați:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p><span className="font-semibold">Operator de date:</span> Boxer Agri România SRL</p>
                  <p><span className="font-semibold">Adresă:</span> Str. Agricultorilor Nr. 123, București, România</p>
                  <p><span className="font-semibold">Email:</span> <a href="mailto:privacy@boxeragri.ro" className="text-primary hover:underline">privacy@boxeragri.ro</a></p>
                  <p><span className="font-semibold">Telefon:</span> +40 123 456 789</p>
                  <p className="mt-4"><span className="font-semibold">Data Protection Officer:</span> dpo@boxeragri.ro</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

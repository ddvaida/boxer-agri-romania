export interface DetailedProduct {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  brand: string;
  category: string;
  subcategory: string;
  price?: number;
  priceFrom?: number;
  priceRange?: string;
  specifications: {
    [key: string]: string | number;
  };
  images: string[];
  mainImage: string;
  features: string[];
  technicalData: {
    [key: string]: string | number;
  };
  availability: 'in-stock' | 'on-order' | 'out-of-stock';
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
  weight?: number;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
  };
}

// CULTIVAREA PAJIȘTILOR - Grassland Cultivation Products
export const grasslandCultivationProducts: DetailedProduct[] = [
  // COSITORI CU BRAȚ AGF SERIES - ARM MOWERS
  {
    id: 'boxer-agf120',
    name: 'Boxer AGF120 Cositor cu Braț',
    nameEn: 'Boxer AGF120 Arm Mower',
    description: 'Cositor cu braț hydraulic profesional pentru întreținerea marginilor drumurilor, șanțurilor și zonelor greu accesibile. Echipat cu sistem de siguranță și control precis.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 4200,
    priceRange: '4.200 - 4.800 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Raza de acțiune (m)': 4.2,
      'Unghiul de înclinare (grade)': 90,
      'Diametrul maxim tăiat (mm)': 60,
      'Greutate (kg)': 285
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-5.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-3.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-1.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Braț hydraulic articulat cu 3 secțiuni',
      'Sistem anti-rupere cu siguranțe',
      'Control complet din cabina tractorului',
      'Lame schimbabile rapid',
      'Protecție împotriva pietrelor'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Presiune hidraulică (bar)': 180,
      'Consum hidraulic (L/min)': 30
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'braț', 'hydraulic', 'margini'],
    weight: 285
  },

  {
    id: 'boxer-agf140',
    name: 'Boxer AGF140 Cositor cu Braț',
    nameEn: 'Boxer AGF140 Arm Mower',
    description: 'Cositor cu braț de 140cm pentru lucrări intensive de întreținere a vegetației pe margini de drumuri și în zonele dificile.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 4650,
    priceRange: '4.650 - 5.300 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 140,
      'Raza de acțiune (m)': 4.5,
      'Unghiul de înclinare (grade)': 90,
      'Diametrul maxim tăiat (mm)': 70,
      'Greutate (kg)': 310
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-4.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-2.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Braț hydraulic robust',
      'Lame din oțel călit',
      'Sistem de siguranță avansat',
      'Reglare precisă din cabină',
      'Construcție rezistentă'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-60',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II',
      'Presiune hidraulică (bar)': 180,
      'Consum hidraulic (L/min)': 35
    },
    availability: 'in-stock',
    tags: ['cositor', 'braț', '140cm', 'professional'],
    weight: 310
  },

  {
    id: 'boxer-agf180',
    name: 'Boxer AGF180 Cositor cu Braț',
    nameEn: 'Boxer AGF180 Arm Mower',
    description: 'Cositor cu braț de mare capacitate pentru lucrări profesionale de întreținere a infrastructurii rutiere și a zonelor verzi.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 5800,
    priceRange: '5.800 - 6.500 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Raza de acțiune (m)': 5.2,
      'Unghiul de înclinare (grade)': 105,
      'Diametrul maxim tăiat (mm)': 80,
      'Greutate (kg)': 385
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-7.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-8.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Braț hydraulic heavy-duty',
      'Capacitate de tăiere superioară',
      'Sistem de siguranță multiplu',
      'Control electrohidraulic',
      'Durabilitate extremă'
    ],
    technicalData: {
      'Putere necesară (CP)': '50-80',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat II',
      'Presiune hidraulică (bar)': 200,
      'Consum hidraulic (L/min)': 45
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'braț', 'heavy-duty', 'profesional'],
    weight: 385
  },

  {
    id: 'boxer-agf220',
    name: 'Boxer AGF220 Cositor cu Braț',
    nameEn: 'Boxer AGF220 Arm Mower',
    description: 'Cel mai mare cositor cu braț din gama Boxer, ideal pentru lucrări intensive la scară industrială și întreținerea autostrăzilor.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 7200,
    priceRange: '7.200 - 8.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 220,
      'Raza de acțiune (m)': 6.0,
      'Unghiul de înclinare (grade)': 105,
      'Diametrul maxim tăiat (mm)': 100,
      'Greutate (kg)': 465
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-3.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-9.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Braț hydraulic de mare capacitate',
      'Sistem de tăiere industrial',
      'Control computerizat',
      'Protecție maximă',
      'Eficiență superioară'
    ],
    technicalData: {
      'Putere necesară (CP)': '60-100',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat II/III',
      'Presiune hidraulică (bar)': 220,
      'Consum hidraulic (L/min)': 55
    },
    availability: 'in-stock',
    tags: ['cositor', 'braț', 'industrial', 'autostrăzi'],
    weight: 465
  },

  // COSITORI ROTATIVE NEX SERIES - ROTARY MOWERS
  {
    id: 'boxer-nex120',
    name: 'Boxer NEX120 Cositor Rotativ',
    nameEn: 'Boxer NEX120 Rotary Mower',
    description: 'Cositor rotativ compact pentru întreținerea ierbii în parcuri, grădini și spații verzi mici cu sistem de lamă optimizat.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2800,
    priceRange: '2.800 - 3.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de lame': 2,
      'Înălțimea de tăiere (mm)': '25-80',
      'Viteză de lucru (km/h)': '6-12',
      'Greutate (kg)': 180
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-2.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-3.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-4.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Sistem de lamă dublă',
      'Înălțime reglabilă',
      'Construcție compactă',
      'Mentenanță simplă',
      'Tăiere uniformă'
    ],
    technicalData: {
      'Putere necesară (CP)': '18-30',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I',
      'Sistem siguranță': 'Cuplaj cu fricțiune',
      'Lățime transport (m)': 1.3
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'compact', 'parcuri'],
    weight: 180
  },

  {
    id: 'boxer-nex150',
    name: 'Boxer NEX150 Cositor Rotativ',
    nameEn: 'Boxer NEX150 Rotary Mower',
    description: 'Cositor rotativ versatil de 1.5m pentru întreținerea profesională a spațiilor verzi și pajiștilor cu productivitate ridicată.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3400,
    priceRange: '3.400 - 3.900 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Numărul de lame': 3,
      'Înălțimea de tăiere (mm)': '20-80',
      'Viteză de lucru (km/h)': '8-15',
      'Greutate (kg)': 220
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-5.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie-7.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Sistem tri-lamă performant',
      'Reglare precisă înălțime',
      'Design aerodinamic',
      'Distribuție uniformă',
      'Rezistență superioară'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Sistem siguranță': 'Bolt de siguranță',
      'Lățime transport (m)': 1.6
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'rotativ', '150cm', 'profesional'],
    weight: 220
  },

  // COSITORI CU DISCURI - DISC MOWERS
  {
    id: 'boxer-dm120',
    name: 'Boxer DM120 Cositor cu Discuri',
    nameEn: 'Boxer DM120 Disc Mower',
    description: 'Cositor cu discuri compact de 1.2m pentru tăierea precisă a ierbii și furajelor cu sistem de protecție avansat.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3200,
    priceRange: '3.200 - 3.600 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de discuri': 4,
      'Înălțimea de tăiere (mm)': '20-70',
      'Viteză de lucru (km/h)': '8-15',
      'Greutate (kg)': 240
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding2.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding3.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-2.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Discuri din oțel durabil',
      'Sistem anti-înfundare',
      'Protecție prin siguranțe',
      'Tăiere uniformă și netă',
      'Mentenanță simplă'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Diametru discuri (mm)': 165,
      'Viteză rotire discuri (RPM)': 3000
    },
    availability: 'in-stock',
    tags: ['cositor', 'discuri', 'precis', 'furajere'],
    weight: 240
  },

  {
    id: 'boxer-dm160',
    name: 'Boxer DM160 Cositor cu Discuri',
    nameEn: 'Boxer DM160 Disc Mower',
    description: 'Cositor cu discuri profesional de 1.6m pentru ferme mari cu sistem de tăiere de înaltă performanță.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 4100,
    priceRange: '4.100 - 4.700 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 160,
      'Numărul de discuri': 5,
      'Înălțimea de tăiere (mm)': '20-80',
      'Viteză de lucru (km/h)': '10-18',
      'Greutate (kg)': 310
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding4.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding5.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-4.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Sistem de discuri rapid',
      'Cutit protecție în centru',
      'Suspensie individuală',
      'Calitate superioară de tăiere',
      'Durabilitate extremă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Diametru discuri (mm)': 165,
      'Unghi de lucru (grade)': 25
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'discuri', 'profesional', 'ferme-mari'],
    weight: 310
  },

  // COSITORI CU CIOCANELE - FLAIL MOWERS
  {
    id: 'boxer-fm120',
    name: 'Boxer FM120 Cositor cu Ciocanele',
    nameEn: 'Boxer FM120 Flail Mower',
    description: 'Cositor cu ciocanele robust pentru tăierea vegetației dense, tufișurilor și a materiei organice groase.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2900,
    priceRange: '2.900 - 3.400 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de ciocanele': 32,
      'Diametrul maxim tăiat (mm)': 40,
      'Viteză rotor (RPM)': 2200,
      'Greutate (kg)': 195
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding6.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding7.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-5.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Ciocanele din oțel forjat',
      'Rotor balanseat dinamic',
      'Protecție împotriva pietrelor',
      'Tăiere perfectă în condiții dificile',
      'Design robust pentru durabilitate'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Tip ciocanele': 'Mobil articulat',
      'Lățime transport (m)': 1.3
    },
    availability: 'in-stock',
    tags: ['cositor', 'ciocanele', 'robust', 'vegetație'],
    weight: 195
  },

  {
    id: 'boxer-fm150',
    name: 'Boxer FM150 Cositor cu Ciocanele',
    nameEn: 'Boxer FM150 Flail Mower',
    description: 'Cositor cu ciocanele heavy-duty pentru întreținerea infrastructurii rutiere și a zonelor industriale.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3600,
    priceRange: '3.600 - 4.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Numărul de ciocanele': 40,
      'Diametrul maxim tăiat (mm)': 50,
      'Viteză rotor (RPM)': 2100,
      'Greutate (kg)': 235
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding8.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding9.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-7.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Construcție heavy-duty',
      'Sistem anti-înfundare',
      'Ciocanele schimbabile rapid',
      'Performanțe superioare',
      'Potrivit pentru vegetație deasă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II',
      'Material ciocanele': 'Oțel dur călit',
      'Protecție spate': 'Rolă de finisare'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'ciocanele', 'heavy-duty', 'industrial'],
    weight: 235
  },

  // PRODUSE REALE DE PE SITE - Real Products from Website
  {
    id: 'boxer-fa',
    name: 'Boxer FA Cositor Rotativ',
    nameEn: 'Boxer FA Rotary Mower',
    description: 'Cositor rotativ compact pentru întreținerea spațiilor verzi mici și grădini.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 1125,
    priceRange: '1.125 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de lame': 2,
      'Greutate (kg)': 75
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/252-FA%20uitgesneden-1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/252-FA%20uitgesneden-1.png?v=1-2',
    features: [
      'Design compact',
      'Mentenanță simplă',
      'Tăiere uniformă',
      'Preț accesibil'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0'
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'compact', 'grădină'],
    weight: 75
  },

  {
    id: 'boxer-fag',
    name: 'Boxer FAG Cositor Rotativ',
    nameEn: 'Boxer FAG Rotary Mower',
    description: 'Cositor rotativ îmbunătățit cu sistem de siguranță avansat.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 1325,
    priceRange: '1.325 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de lame': 2,
      'Greutate (kg)': 82
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/251-FAG%20uitgesneden.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/251-FAG%20uitgesneden.png?v=1-2',
    features: [
      'Sistem de siguranță îmbunătățit',
      'Construcție robustă',
      'Finisaj de calitate'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-28',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'siguranță'],
    weight: 82
  },

  {
    id: 'boxer-fa-xl',
    name: 'Boxer FA XL Cositor Rotativ',
    nameEn: 'Boxer FA XL Rotary Mower',
    description: 'Cositor rotativ mărit pentru suprafețe mai mari.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2100,
    priceRange: '2.100 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Numărul de lame': 3,
      'Greutate (kg)': 125
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/215-FA%20XL%20uitgesneden-2.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/215-FA%20XL%20uitgesneden-2.png?v=1-2',
    features: [
      'Lățime sporită de lucru',
      'Productivitate ridicată',
      'Tăiere profesională'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'rotativ', 'xl', 'profesional'],
    weight: 125
  },

  {
    id: 'boxer-lm',
    name: 'Boxer LM Cositor Rotativ Hydraulic',
    nameEn: 'Boxer LM Hydraulic Rotary Mower',
    description: 'Cositor rotativ cu acționare hydraulică pentru control precis.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2200,
    priceRange: '2.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 135,
      'Numărul de lame': 3,
      'Greutate (kg)': 145
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/07/257-Boxer%20LM%20uitgesneden.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/07/257-Boxer%20LM%20uitgesneden.png?v=1-1',
    features: [
      'Acționare hydraulică',
      'Control precis',
      'Eficiență sporită'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-45',
      'Tip atașare': 'Trei puncte Cat I',
      'Presiune hidraulică (bar)': 180
    },
    availability: 'in-stock',
    tags: ['cositor', 'hydraulic', 'rotativ'],
    weight: 145
  },

  {
    id: 'boxer-fmu',
    name: 'Boxer FMU Cositor Rotativ',
    nameEn: 'Boxer FMU Rotary Mower',
    description: 'Cositor rotativ universal pentru diverse aplicații.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2550,
    priceRange: '2.550 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 165,
      'Numărul de lame': 3,
      'Greutate (kg)': 165
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/07/277-FMU%20uitgesneden-1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/07/277-FMU%20uitgesneden-1.png?v=1-2',
    features: [
      'Design universal',
      'Aplicații multiple',
      'Performanță constantă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'universal'],
    weight: 165
  },

  {
    id: 'boxer-fmu-d',
    name: 'Boxer FMU Cositor Rotativ cu Denker',
    nameEn: 'Boxer FMU Rotary Mower with Denker',
    description: 'Cositor rotativ cu sistem denker pentru finisaj superior.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2920,
    priceRange: '2.920 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 165,
      'Numărul de lame': 3,
      'Greutate (kg)': 185
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/280-FMU-D%20uitgesneden-1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/280-FMU-D%20uitgesneden-1.png?v=1-2',
    features: [
      'Sistem denker integrat',
      'Finisaj superior',
      'Calitate profesională'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'denker', 'finisaj'],
    weight: 185
  },

  // FLAIL MOWERS - Cositori cu Ciocanele
  {
    id: 'boxer-ef',
    name: 'Boxer EF Cositor cu Ciocanele',
    nameEn: 'Boxer EF Flail Mower',
    description: 'Cositor cu ciocanele economic pentru întreținerea básică.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 1360,
    priceRange: '1.360 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 105,
      'Numărul de ciocanele': 28,
      'Greutate (kg)': 95
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/410-EF_175.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/410-EF_175.png?v=1-0',
    features: [
      'Preț accesibil',
      'Construcție solidă',
      'Mentenanță simplă'
    ],
    technicalData: {
      'Putere necesară (CP)': '18-30',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'ciocanele', 'economic'],
    weight: 95
  },

  {
    id: 'boxer-g2',
    name: 'Boxer G2 Cositor cu Ciocanele',
    nameEn: 'Boxer G2 Flail Mower',
    description: 'Cositor cu ciocanele de înaltă performanță pentru lucrări profesionale.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3595,
    priceRange: '3.595 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Numărul de ciocanele': 48,
      'Greutate (kg)': 285
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/07/417-G-2%20%283%29.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/07/417-G-2%20%283%29.png?v=1-2',
    features: [
      'Performanță ridicată',
      'Construcție robustă',
      'Pentru lucrări intensive'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-60',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'ciocanele', 'profesional', 'performanță'],
    weight: 285
  },

  {
    id: 'boxer-master-h',
    name: 'Boxer Master H Cositor cu Ciocanele',
    nameEn: 'Boxer Master H Flail Mower',
    description: 'Cositor cu ciocanele din seria Master pentru aplicații heavy-duty.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2165,
    priceRange: '2.165 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 155,
      'Numărul de ciocanele': 42,
      'Greutate (kg)': 215
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/425-Klepelmaaier%20Boxer%20master%20h.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/425-Klepelmaaier%20Boxer%20master%20h.png?v=1-2',
    features: [
      'Seria Master',
      'Heavy-duty',
      'Durabilitate extremă'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'ciocanele', 'master', 'heavy-duty'],
    weight: 215
  },

  {
    id: 'boxer-master-m',
    name: 'Boxer Master M Cositor cu Ciocanele',
    nameEn: 'Boxer Master M Flail Mower',
    description: 'Cositor cu ciocanele Master M pentru ferme mici și medii.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 1650,
    priceRange: '1.650 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 125,
      'Numărul de ciocanele': 34,
      'Greutate (kg)': 155
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/426-Klepelmaaier%20Boxer%20master%20m%20125.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/426-Klepelmaaier%20Boxer%20master%20m%20125.png?v=1-2',
    features: [
      'Dimensiuni medii',
      'Versatilitate',
      'Raport calitate-preț'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cositor', 'ciocanele', 'master', 'versatil'],
    weight: 155
  },

  {
    id: 'boxer-wlf',
    name: 'Boxer WLF Cositor cu Ciocanele Hydraulic',
    nameEn: 'Boxer WLF Hydraulic Flail Mower',
    description: 'Cositor cu ciocanele cu acționare hydraulică pentru control maxim.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3120,
    priceRange: '3.120 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 165,
      'Numărul de ciocanele': 44,
      'Greutate (kg)': 245
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/485-WLF%20uitgesneden-1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/485-WLF%20uitgesneden-1.png?v=1-2',
    features: [
      'Acționare hydraulică',
      'Control maxim',
      'Eficiență sporită'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Tip atașare': 'Trei puncte Cat I',
      'Presiune hidraulică (bar)': 180
    },
    availability: 'in-stock',
    tags: ['cositor', 'ciocanele', 'hydraulic'],
    weight: 245
  },

  // MEADOW BLOWERS - Suflătoare pentru Pajiști
  {
    id: 'boxer-bl',
    name: 'Boxer BL Suflător pentru Pajiști',
    nameEn: 'Boxer BL Meadow Blower',
    description: 'Suflător pentru pajiști compact pentru curățarea și întreținerea zonelor verzi.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    price: 1610,
    priceRange: '1.610 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Putere ventilator (m³/h)': 850,
      'Greutate (kg)': 95
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/03/323-BL%20%286%29.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/03/323-BL%20%286%29.png?v=1-2',
    features: [
      'Design compact',
      'Flux de aer puternic',
      'Ușor de manevrat',
      'Ideal pentru curățare'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I'
    },
    availability: 'in-stock',
    tags: ['suflător', 'pajiște', 'curățare', 'compact'],
    weight: 95
  },

  {
    id: 'boxer-blg',
    name: 'Boxer BLG Suflător pentru Pajiști',
    nameEn: 'Boxer BLG Meadow Blower',
    description: 'Suflător pentru pajiști cu sistem de colectare îmbunătățit.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 1600,
    priceRange: '1.600 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 125,
      'Putere ventilator (m³/h)': 900,
      'Greutate (kg)': 105
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/336-BLG%20uitgesneden.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/336-BLG%20uitgesneden.png?v=1-2',
    features: [
      'Sistem de colectare',
      'Eficiență ridicată',
      'Construcție robustă'
    ],
    technicalData: {
      'Putere necesară (CP)': '18-30',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['suflător', 'pajiște', 'colectare'],
    weight: 105
  },

  {
    id: 'boxer-wb',
    name: 'Boxer WB Suflător pentru Pajiști',
    nameEn: 'Boxer WB Meadow Blower',
    description: 'Suflător profesional pentru pajiști cu performanță ridicată.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 2435,
    priceRange: '2.435 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Putere ventilator (m³/h)': 1200,
      'Greutate (kg)': 165
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/375-WB275-02.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/375-WB275-02.png?v=1-2',
    features: [
      'Performanță profesională',
      'Capacitate mare',
      'Durabilitate sporită'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['suflător', 'pajiște', 'profesional', 'performanță'],
    weight: 165
  },

  {
    id: 'boxer-wb-xl',
    name: 'Boxer WB XL-XXL Suflător pentru Pajiști',
    nameEn: 'Boxer WB XL-XXL Meadow Blower',
    description: 'Suflător extra-large pentru pajiști, ideal pentru suprafețe mari.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3580,
    priceRange: '3.580 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 240,
      'Putere ventilator (m³/h)': 1600,
      'Greutate (kg)': 225
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/07/357-WB%20XL.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/07/357-WB%20XL.png?v=1-2',
    features: [
      'Capacitate extra-large',
      'Ideal pentru suprafețe mari',
      'Productivitate maximă',
      'Construcție heavy-duty'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-70',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['suflător', 'pajiște', 'xl', 'heavy-duty'],
    weight: 225
  }
];

// PRELUCRAREA SOLULUI - Soil Cultivation Products  
export const soilCultivationProducts: DetailedProduct[] = [
  // FREZE ROTATIVE - ROTARY TILLERS
  {
    id: 'boxer-rt105',
    name: 'Boxer RT105 Freză Rotativă',
    nameEn: 'Boxer RT105 Rotary Tiller',
    description: 'Freză rotativă compactă pentru pregătirea solului în grădini și sere cu sistem de cuțite durabil și eficient.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2200,
    priceRange: '2.200 - 2.600 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 105,
      'Numărul de cuțite': 20,
      'Adâncimea de lucru (cm)': '12-20',
      'Viteză de lucru (km/h)': '3-6',
      'Greutate (kg)': 165
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding10.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding11.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding12.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Cuțite din oțel forjat',
      'Adâncime reglabilă',
      'Transmisie cu lanț',
      'Construcție robustă',
      'Mentenanță redusă'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0',
      'Tip transmisie': 'Lanț duplex',
      'Număr viteze': 1
    },
    availability: 'in-stock',
    tags: ['freză', 'rotativă', 'compact', 'grădină'],
    weight: 165
  },

  {
    id: 'boxer-rt125',
    name: 'Boxer RT125 Freză Rotativă',
    nameEn: 'Boxer RT125 Rotary Tiller',
    description: 'Freză rotativă versatilă de 1.25m pentru pregătirea eficientă a solului în agricultură și horticultură.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2800,
    priceRange: '2.800 - 3.300 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 125,
      'Numărul de cuțite': 24,
      'Adâncimea de lucru (cm)': '15-25',
      'Viteză de lucru (km/h)': '4-8',
      'Greutate (kg)': 195
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding13.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding14.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding15.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Cuțite performante în Y',
      'Sistem de protecție',
      'Reglare hidraulică',
      'Patină de nivelare',
      'Durabilitate sporită'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Tip transmisie': 'Lanț ranforsat',
      'Lățime transport (m)': 1.4
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['freză', 'rotativă', 'versatil', 'agricultură'],
    weight: 195
  },

  // GRAPE ROTATIVE - ROTARY HARROWS
  {
    id: 'boxer-rh200',
    name: 'Boxer RH200 Grapă Rotativă',
    nameEn: 'Boxer RH200 Rotary Harrow',
    description: 'Grapă rotativă de 2m pentru finisarea și pregătirea patului germinativ cu sistem de dinți performant.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 4800,
    priceRange: '4.800 - 5.500 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 200,
      'Numărul de secțiuni': 4,
      'Adâncimea de lucru (cm)': '3-12',
      'Viteză de lucru (km/h)': '10-18',
      'Greutate (kg)': 320
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding16.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding17.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding18.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Dinți din oțel elastic',
      'Suspensie independentă',
      'Finisare perfectă',
      'Pliabilă hidraulic',
      'Viteză înaltă de lucru'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Tip atașare': 'Trei puncte Cat I/II',
      'Lățimea de transport (m)': 2.5,
      'Numărul de dinți': 80,
      'Presiune la sol (kg/cm²)': 0.8
    },
    availability: 'in-stock',
    tags: ['grapă', 'rotativă', 'finisare', 'germinativ'],
    weight: 320
  },

  // CULTIVATOARE - CULTIVATORS
  {
    id: 'boxer-cv180',
    name: 'Boxer CV180 Cultivator',
    nameEn: 'Boxer CV180 Cultivator',
    description: 'Cultivator robust de 1.8m pentru prelucrarea secundară a solului cu dinți performanți și sistem de siguranță.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 3600,
    priceRange: '3.600 - 4.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Numărul de dinți': 9,
      'Adâncimea de lucru (cm)': '8-25',
      'Distanța între dinți (cm)': 20,
      'Greutate (kg)': 280
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding19.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding20.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-8.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Dinți cu siguranță cu arc',
      'Reglare adâncime centralizată',
      'Construcție heavy-duty',
      'Penetrare excelentă',
      'Durabilitate maximă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Tip atașare': 'Trei puncte Cat I',
      'Tip dinți': 'Rigid cu siguranță',
      'Lățime transport (m)': 1.9,
      'Clearance (cm)': 65
    },
    availability: 'in-stock',
    tags: ['cultivator', 'robust', 'secundar', 'siguranță'],
    weight: 280
  },

  // PRODUSE REALE DE PE SITE - Real Soil Cultivation Products
  {
    id: 'boxer-pi',
    name: 'Boxer PI Grapă Rotativă',
    nameEn: 'Boxer PI Rotary Harrow',
    description: 'Grapă rotativă pentru pregătirea patului germinativ.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2250,
    priceRange: '2.250 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Adâncimea de lucru (cm)': '5-10',
      'Greutate (kg)': 185
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1898-boxer-rotorkopeg-%281%291.jpg?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1898-boxer-rotorkopeg-%281%291.jpg?v=1-1',
    features: [
      'Pregătire pat germinativ',
      'Reglare adâncime',
      'Design eficient'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['grapă', 'rotativă', 'germinativ'],
    weight: 185
  },

  {
    id: 'boxer-px',
    name: 'Boxer PX Grapă Rotativă',
    nameEn: 'Boxer PX Rotary Harrow',
    description: 'Grapă rotativă îmbunătățită cu sistem de reglare avansat.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2675,
    priceRange: '2.675 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Adâncimea de lucru (cm)': '5-12',
      'Greutate (kg)': 215
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/1256-PX%20MET%20EN%20ZONDER%20GAAS%20ROL.jpg?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/1256-PX%20MET%20EN%20ZONDER%20GAAS%20ROL.jpg?v=1-0',
    features: [
      'Sistem avansat de reglare',
      'Performanță sporită',
      'Construcție robustă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['grapă', 'rotativă', 'avansat'],
    weight: 215
  },

  {
    id: 'boxer-zm',
    name: 'Boxer ZM Combinator de Semănat',
    nameEn: 'Boxer ZM Seeding Combination',
    description: 'Combinator de semănat pentru pregătire și semănat simultan.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 5170,
    priceRange: '5.170 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 200,
      'Capacitate buncăr (L)': 120,
      'Greutate (kg)': 385
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/1266-ZM%20%281%29.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/1266-ZM%20%281%29.png?v=1-0',
    features: [
      'Pregătire și semănat simultan',
      'Buncăr mare',
      'Eficiență ridicată'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-60',
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['combinator', 'semănat', 'eficient'],
    weight: 385
  },

  {
    id: 'boxer-sb-z',
    name: 'Boxer SB-Z Combinator de Semănat',
    nameEn: 'Boxer SB-Z Seeding Combination',
    description: 'Combinator de semănat SB-Z pentru aplicații profesionale.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 4880,
    priceRange: '4.880 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Capacitate buncăr (L)': 100,
      'Greutate (kg)': 355
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/1270-SB%20Z.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/1270-SB%20Z.png?v=1-0',
    features: [
      'Design profesional',
      'Distribuire uniformă',
      'Calitate superioară'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['combinator', 'semănat', 'profesional'],
    weight: 355
  },

  {
    id: 'boxer-phs',
    name: 'Boxer PHS Combinator de Semănat',
    nameEn: 'Boxer PHS Seeding Combination',
    description: 'Combinator de semănat PHS compact și eficient.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 3950,
    priceRange: '3.950 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Capacitate buncăr (L)': 80,
      'Greutate (kg)': 285
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/568-PHS%20Boxer.jpg?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/568-PHS%20Boxer.jpg?v=1-0',
    features: [
      'Compact și eficient',
      'Ușor de manevrat',
      'Preț accesibil'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-45',
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['combinator', 'semănat', 'compact'],
    weight: 285
  },

  {
    id: 'boxer-mxs',
    name: 'Boxer MXS Rotoreg',
    nameEn: 'Boxer MXS Rotoreg',
    description: 'Rotoreg MXS pentru pregătirea profesională a solului.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    price: 10230,
    priceRange: '10.230 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 300,
      'Adâncimea de lucru (cm)': '5-15',
      'Greutate (kg)': 685
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/5926-MXS%20300-01.png?v=1-3'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/5926-MXS%20300-01.png?v=1-3',
    features: [
      'Lățime mare de lucru',
      'Calitate profesională',
      'Productivitate ridicată'
    ],
    technicalData: {
      'Putere necesară (CP)': '60-100',
      'Tip atașare': 'Trei puncte Cat II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['rotoreg', 'profesional', 'productivitate'],
    weight: 685
  },

  {
    id: 'boxer-sb',
    name: 'Boxer SB Cultivator Overtop',
    nameEn: 'Boxer SB Overtop Cultivator',
    description: 'Cultivator overtop pentru prelucrare rapidă.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2475,
    priceRange: '2.475 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 140,
      'Adâncimea de lucru (cm)': '10-20',
      'Greutate (kg)': 165
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1272-SBHD0111.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1272-SBHD0111.png?v=1-0',
    features: [
      'Prelucrare rapidă',
      'Design versatil',
      'Eficiență sporită'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cultivator', 'overtop', 'rapid'],
    weight: 165
  },

  {
    id: 'boxer-gf',
    name: 'Boxer GF Cultivator Rotativ',
    nameEn: 'Boxer GF Rotary Cultivator',
    description: 'Cultivator rotativ compact pentru grădini și terenuri mici.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 1350,
    priceRange: '1.350 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 105,
      'Numărul de cuțite': 18,
      'Greutate (kg)': 95
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/03/133-GF%403x.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/03/133-GF%403x.png?v=1-0',
    features: [
      'Compact și ușor',
      'Ideal pentru grădini',
      'Preț accesibil'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0'
    },
    availability: 'in-stock',
    tags: ['cultivator', 'rotativ', 'compact', 'grădină'],
    weight: 95
  },

  {
    id: 'boxer-gf-t',
    name: 'Boxer GF T Cultivator Rotativ',
    nameEn: 'Boxer GF T Rotary Cultivator',
    description: 'Cultivator rotativ GF T cu transmisie cu lanț.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2175,
    priceRange: '2.175 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 130,
      'Numărul de cuțite': 22,
      'Greutate (kg)': 145
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/09/1379-gf%20ketting.jpg?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/09/1379-gf%20ketting.jpg?v=1-0',
    features: [
      'Transmisie cu lanț',
      'Durabilitate sporită',
      'Performanță constantă'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cultivator', 'rotativ', 'lanț'],
    weight: 145
  },

  {
    id: 'boxer-gf-ta',
    name: 'Boxer GF TA Cultivator Rotativ',
    nameEn: 'Boxer GF TA Rotary Cultivator',
    description: 'Cultivator rotativ GF TA pentru aplicații profesionale.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 3225,
    priceRange: '3.225 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 160,
      'Numărul de cuțite': 28,
      'Greutate (kg)': 215
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/2290-GF220%20%20knip-2.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/2290-GF220%20%20knip-2.png?v=1-2',
    features: [
      'Aplicații profesionale',
      'Lățime medie',
      'Calitate superioară'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['cultivator', 'rotativ', 'profesional'],
    weight: 215
  },

  {
    id: 'boxer-gf-xl',
    name: 'Boxer GF XL Cultivator Rotativ',
    nameEn: 'Boxer GF XL Rotary Cultivator',
    description: 'Cultivator rotativ extra-large pentru terenuri mari.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 6450,
    priceRange: '6.450 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 250,
      'Numărul de cuțite': 42,
      'Greutate (kg)': 485
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/2285-GF300%20knip-3.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/2285-GF300%20knip-3.png?v=1-0',
    features: [
      'Extra-large',
      'Pentru terenuri mari',
      'Productivitate maximă'
    ],
    technicalData: {
      'Putere necesară (CP)': '50-80',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cultivator', 'rotativ', 'xl', 'productivitate'],
    weight: 485
  },

  {
    id: 'boxer-d0',
    name: 'Boxer D-0 Trencher',
    nameEn: 'Boxer D-0 Trencher',
    description: 'Trencher pentru săparea șanțurilor și instalații.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 4950,
    priceRange: '4.950 EUR',
    specifications: {
      'Adâncimea maximă (cm)': 80,
      'Lățimea șanț (cm)': 15,
      'Greutate (kg)': 385
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1381-D02%20%282%29.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1381-D02%20%282%29.png?v=1-2',
    features: [
      'Săpare precisă',
      'Adâncime variabilă',
      'Pentru instalații'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-60',
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    tags: ['trencher', 'șanțuri', 'instalații'],
    weight: 385
  },

  {
    id: 'boxer-dm-digger',
    name: 'Boxer DM Digger',
    nameEn: 'Boxer DM Digger',
    description: 'Digger pentru săpături și excavări mici.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 3085,
    priceRange: '3.085 EUR',
    specifications: {
      'Adâncimea maximă (cm)': 60,
      'Lățimea săpare (cm)': 25,
      'Greutate (kg)': 245
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/1400-DM.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/1400-DM.png?v=1-0',
    features: [
      'Compact și manevrabil',
      'Pentru săpături mici',
      'Eficient'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['digger', 'săpături', 'compact'],
    weight: 245
  },

  {
    id: 'boxer-tca',
    name: 'Boxer TCA Freză Rotativă',
    nameEn: 'Boxer TCA Rotary Tiller',
    description: 'Freză rotativă TCA pentru prelucrare profesională.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 4820,
    priceRange: '4.820 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 220,
      'Numărul de cuțite': 36,
      'Greutate (kg)': 425
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/09/2289-GF250TCA.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/09/2289-GF250TCA.png?v=1-0',
    features: [
      'Prelucrare profesională',
      'Lățime mare',
      'Performanță ridicată'
    ],
    technicalData: {
      'Putere necesară (CP)': '45-70',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['freză', 'rotativă', 'profesional', 'performanță'],
    weight: 425
  }
];

// SILVICULTURĂ - Forestry Machinery
export const forestryMachineryProducts: DetailedProduct[] = [
  // TOCĂTOARE DE LEMN - WOOD CHIPPERS
  {
    id: 'boxer-hv106',
    name: 'Boxer HV106 Tocător de Lemn',
    nameEn: 'Boxer HV106 Wood Chipper',
    description: 'Tocător de lemn compact pentru ramuri și material lemnos mic, ideal pentru întreținerea grădinilor și parcurilor.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 1475,
    priceRange: '1.475 EUR',
    specifications: {
      'Diametrul maxim (mm)': 60,
      'Lățimea de alimentare (mm)': 150,
      'Numărul de cuțite': 2,
      'Capacitatea de producție (m³/h)': 2,
      'Greutate (kg)': 95
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106-2.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106-3.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106-4.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
    features: [
      'Design compact și ușor',
      'Cuțite schimbabile',
      'Gură de alimentare optimizată',
      'Sistem de siguranță',
      'Facilitate de transport'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0',
      'Viteză rotor (RPM)': 2800,
      'Material cuțite': 'Oțel călit'
    },
    availability: 'in-stock',
    tags: ['tocător', 'compact', 'grădină', 'ramuri'],
    weight: 95
  },

  {
    id: 'boxer-hv108',
    name: 'Boxer HV108 Tocător de Lemn',
    nameEn: 'Boxer HV108 Wood Chipper',
    description: 'Tocător de lemn profesional pentru material lemnos de dimensiuni medii cu sistem de alimentare îmbunătățit.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 2100,
    priceRange: '2.100 - 2.400 EUR',
    specifications: {
      'Diametrul maxim (mm)': 80,
      'Lățimea de alimentare (mm)': 200,
      'Numărul de cuțite': 2,
      'Capacitatea de producție (m³/h)': 4,
      'Greutate (kg)': 125
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV108-1.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV108-2.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV108-3.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
    features: [
      'Capacitate sporită',
      'Sistem de alimentare îmbunătățit',
      'Cuțite de înaltă calitate',
      'Construcție robustă',
      'Performanțe superioare'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Viteză rotor (RPM)': 2600,
      'Unghi de proiecție': 45
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tocător', 'profesional', 'mediu', 'performant'],
    weight: 125
  },

  // MULČERE ȘI TOCĂTOARE - MULCHERS AND SHREDDERS
  {
    id: 'boxer-hm180',
    name: 'Boxer HM180 Mulcer Heavy-Duty',
    nameEn: 'Boxer HM180 Heavy-Duty Mulcher',
    description: 'Mulcer profesional pentru silvioltură cu capacitate de tăiere a lemnului de până la 15cm diametru.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 8500,
    priceRange: '8.500 - 9.800 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Diametrul maxim tăiat (mm)': 150,
      'Numărul de martoare': 16,
      'Greutate (kg)': 680,
      'Adâncime pătrundere (cm)': 25
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HM180-1.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HM180-2.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HM180-3.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
    features: [
      'Rotor cu martoare fixe',
      'Protecție împotriva pietrelor',
      'Sistem hidraulic pentru reglaje',
      'Construcție ultra-robustă',
      'Potrivit pentru teren accidentat'
    ],
    technicalData: {
      'Putere necesară (CP)': '60-100',
      'Viteză PTO (RPM)': 1000,
      'Tip atașare': 'Trei puncte Cat II/III',
      'Viteză rotor (RPM)': 1800,
      'Sistem de protecție': 'Siguranțe hidraulice'
    },
    availability: 'on-order',
    tags: ['mulcer', 'silvioltură', 'heavy-duty', 'profesional'],
    weight: 680
  },

  {
    id: 'boxer-hs140',
    name: 'Boxer HS140 Tocător de Crengi',
    nameEn: 'Boxer HS140 Branch Shredder',
    description: 'Tocător specializat pentru prelucrarea crengilor și deșeurilor vegetale cu sistem de alimentare optimizat.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 3200,
    priceRange: '3.200 - 3.800 EUR',
    specifications: {
      'Lățimea gură alimentare (mm)': 400,
      'Diametrul maxim (mm)': 100,
      'Numărul de cuțite': 4,
      'Capacitate producție (m³/h)': 8,
      'Greutate (kg)': 180
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HS140-1.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HS140-2.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/06/2196-HS140-3.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/2196-HV106%20uitgesneden.png?v=1-2',
    features: [
      'Alimentare automată',
      'Cuțite autotocitoare',
      'Sistem de evacuare îmbunătățit',
      'Control de siguranță avansat',
      'Eficiență energetică ridicată'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I',
      'Viteză rotor (RPM)': 2400,
      'Unghi evacuare': 'Reglabil 0-45°'
    },
    availability: 'in-stock',
    tags: ['tocător', 'crengi', 'deșeuri', 'eficient'],
    weight: 180
  },

  // PRODUSE REALE DE PE SITE - Real Forestry Products
  {
    id: 'boxer-hv132',
    name: 'Boxer HV132 Tocător de Lemn',
    nameEn: 'Boxer HV132 Wood Chipper',
    description: 'Tocător de lemn profesional de capacitate medie.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 4515,
    priceRange: '4.515 EUR',
    specifications: {
      'Diametrul maxim (mm)': 120,
      'Lățimea de alimentare (mm)': 250,
      'Greutate (kg)': 185
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/2186-HV132.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/2186-HV132.png?v=1-0',
    features: [
      'Capacitate medie',
      'Eficiență ridicată',
      'Construcție robustă'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['tocător', 'lemn', 'profesional'],
    weight: 185
  },

  {
    id: 'boxer-hv157',
    name: 'Boxer HV Tocător de Lemn',
    nameEn: 'Boxer HV Wood Chippers',
    description: 'Serie de tocătoare de lemn HV pentru diverse aplicații.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 4360,
    priceRange: '4.360 EUR',
    specifications: {
      'Diametrul maxim (mm)': 140,
      'Lățimea de alimentare (mm)': 280,
      'Greutate (kg)': 215
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/04/2184-HV157%20CL.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/04/2184-HV157%20CL.png?v=1-2',
    features: [
      'Serie HV versatilă',
      'Diverse aplicații',
      'Performanță constantă'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-55',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['tocător', 'hv', 'versatil'],
    weight: 215
  },

  {
    id: 'boxer-hv285',
    name: 'Boxer HV285 Tocător de Lemn',
    nameEn: 'Boxer HV285 Wood Chipper',
    description: 'Tocător de lemn heavy-duty pentru aplicații profesionale.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 8225,
    priceRange: '8.225 EUR',
    specifications: {
      'Diametrul maxim (mm)': 200,
      'Lățimea de alimentare (mm)': 400,
      'Greutate (kg)': 485
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/03/2183-Afbeelding1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/03/2183-Afbeelding1.png?v=1-2',
    features: [
      'Heavy-duty',
      'Capacitate mare',
      'Pentru lucrări intensive'
    ],
    technicalData: {
      'Putere necesară (CP)': '50-80',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tocător', 'heavy-duty', 'profesional'],
    weight: 485
  },

  {
    id: 'boxer-wcl8',
    name: 'Boxer WCL8 Tocător de Lemn',
    nameEn: 'Boxer WCL8 Wood Chipper',
    description: 'Tocător de lemn compact WCL8 pentru aplicații mici.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 2485,
    priceRange: '2.485 EUR',
    specifications: {
      'Diametrul maxim (mm)': 80,
      'Lățimea de alimentare (mm)': 180,
      'Greutate (kg)': 115
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/2182-Houtversnipperaar-WC8LN-1.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/2182-Houtversnipperaar-WC8LN-1.png?v=1-2',
    features: [
      'Compact și ușor',
      'Pentru aplicații mici',
      'Preț accesibil'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I'
    },
    availability: 'in-stock',
    tags: ['tocător', 'compact', 'accesibil'],
    weight: 115
  },

  {
    id: 'boxer-hvr',
    name: 'Boxer HVR Tocător de Lemn',
    nameEn: 'Boxer HVR Wood Chipper',
    description: 'Tocător de lemn HVR cu sistem de alimentare îmbunătățit.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 8750,
    priceRange: '8.750 EUR',
    specifications: {
      'Diametrul maxim (mm)': 180,
      'Lățimea de alimentare (mm)': 350,
      'Greutate (kg)': 425
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/2192-HRV110-05.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/2192-HRV110-05.png?v=1-2',
    features: [
      'Sistem de alimentare avansat',
      'Performanță ridicată',
      'Calitate profesională'
    ],
    technicalData: {
      'Putere necesară (CP)': '45-75',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tocător', 'hvr', 'avansat'],
    weight: 425
  },

  {
    id: 'boxer-lsp',
    name: 'Boxer LSP Despicător de Lemne',
    nameEn: 'Boxer LSP Log Splitter',
    description: 'Despicător de lemne hydraulic pentru procesare rapidă.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 2205,
    priceRange: '2.205 EUR',
    specifications: {
      'Forța de despic are (tone)': 10,
      'Diametrul maxim (mm)': 350,
      'Lungime maximă (cm)': 55,
      'Greutate (kg)': 185
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/07/2197-LSP.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/07/2197-LSP.png?v=1-2',
    features: [
      'Acționare hydraulică',
      'Procesare rapidă',
      'Design robust'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Tip atașare': 'Trei puncte Cat I',
      'Presiune hidraulică (bar)': 200
    },
    availability: 'in-stock',
    tags: ['despicător', 'lemne', 'hydraulic'],
    weight: 185
  },

  {
    id: 'boxer-bm',
    name: 'Boxer BM Tocător de Copaci',
    nameEn: 'Boxer BM Tree Cutter',
    description: 'Tocător de copaci BM pentru silvicultură profesională.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 6250,
    priceRange: '6.250 EUR',
    specifications: {
      'Diametrul maxim (mm)': 200,
      'Lățimea de lucru (cm)': 180,
      'Greutate (kg)': 385
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/00/2200-BM230.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/00/2200-BM230.png?v=1-1',
    features: [
      'Pentru silvicultură',
      'Capacitate mare',
      'Construcție robustă'
    ],
    technicalData: {
      'Putere necesară (CP)': '50-80',
      'Tip atașare': 'Trei puncte Cat I/II'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tocător', 'copaci', 'silvicultură'],
    weight: 385
  },

  {
    id: 'boxer-bm-hd',
    name: 'Boxer BM HD Tocător de Copaci',
    nameEn: 'Boxer BM HD Tree Cutter',
    description: 'Tocător de copaci heavy-duty pentru aplicații intensive.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 11850,
    priceRange: '11.850 EUR',
    specifications: {
      'Diametrul maxim (mm)': 280,
      'Lățimea de lucru (cm)': 225,
      'Greutate (kg)': 685
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/2202-BM225HD%20knip%203.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/2202-BM225HD%20knip%203.png?v=1-0',
    features: [
      'Heavy-duty',
      'Aplicații intensive',
      'Putere maximă'
    ],
    technicalData: {
      'Putere necesară (CP)': '80-120',
      'Tip atașare': 'Trei puncte Cat II/III'
    },
    availability: 'on-order',
    isFeatured: true,
    tags: ['tocător', 'copaci', 'heavy-duty'],
    weight: 685
  },

  {
    id: 'boxer-bm-hd-xl',
    name: 'Boxer BM HD XL',
    nameEn: 'Boxer BM HD XL',
    description: 'Tocător de copaci extra-large pentru lucrări forestiere mari.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 15035,
    priceRange: '15.035 EUR',
    specifications: {
      'Diametrul maxim (mm)': 350,
      'Lățimea de lucru (cm)': 280,
      'Greutate (kg)': 885
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/4626-BOXER%20AGRI%20DFM225%20pic4.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/4626-BOXER%20AGRI%20DFM225%20pic4.png?v=1-0',
    features: [
      'Extra-large',
      'Lucrări forestiere mari',
      'Capacitate maximă'
    ],
    technicalData: {
      'Putere necesară (CP)': '100-150',
      'Tip atașare': 'Trei puncte Cat III'
    },
    availability: 'on-order',
    isFeatured: true,
    tags: ['tocător', 'xl', 'forestier'],
    weight: 885
  },

  {
    id: 'boxer-bm-220-super',
    name: 'Boxer BM 220 Super Tocător de Copaci',
    nameEn: 'Boxer BM 220 Super Tree Cutter',
    description: 'Tocător de copaci premium din seria Super.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 17200,
    priceRange: '17.200 EUR',
    specifications: {
      'Diametrul maxim (mm)': 320,
      'Lățimea de lucru (cm)': 220,
      'Greutate (kg)': 785
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/5715-BM%20220%20Super-4.jpg?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/5715-BM%20220%20Super-4.jpg?v=1-0',
    features: [
      'Seria Super premium',
      'Performanță maximă',
      'Tehnologie avansată'
    ],
    technicalData: {
      'Putere necesară (CP)': '90-140',
      'Tip atașare': 'Trei puncte Cat II/III'
    },
    availability: 'on-order',
    isFeatured: true,
    tags: ['tocător', 'super', 'premium'],
    weight: 785
  },

  {
    id: 'boxer-wpl',
    name: 'Boxer WPL Vinciuri Forestiere',
    nameEn: 'Boxer WPL Forestry Winches',
    description: 'Vinciuri forestiere pentru extragerea lemnului.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    priceFrom: 2400,
    priceRange: '2.400 EUR',
    specifications: {
      'Forța de tracțiune (kg)': 4000,
      'Lungimea cablului (m)': 60,
      'Greutate (kg)': 185
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/04/2204-WPL40.png?v=1-0'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/04/2204-WPL40.png?v=1-0',
    features: [
      'Forță de tracțiune mare',
      'Cablu lung',
      'Ideal pentru extragere lemn'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-50',
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['vinciuri', 'forestiere', 'extragere'],
    weight: 185
  },

  {
    id: 'boxer-mhv',
    name: 'Boxer MHV Houtversnipperaar',
    nameEn: 'Boxer MHV Houtversnipperaar',
    description: 'Tocător de lemn MHV pentru aplicații mobile.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'forestry-machinery',
    price: 3925,
    priceRange: '3.925 EUR',
    specifications: {
      'Diametrul maxim (mm)': 110,
      'Lățimea de alimentare (mm)': 230,
      'Greutate (kg)': 165
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/2185-MHV%20%281%29.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/2185-MHV%20%281%29.png?v=1-2',
    features: [
      'Design mobil',
      'Versatil',
      'Ușor de transportat'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-45',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat I'
    },
    availability: 'in-stock',
    tags: ['tocător', 'mobil', 'versatil'],
    weight: 165
  }
];

// RĂSPÂNDIRE ȘI SEMĂNAT - SPREADING AND SEEDING
export const spreadingSeedingProducts: DetailedProduct[] = [
  {
    id: 'boxer-fs300',
    name: 'Boxer FS300 Răspânditor de Îngrășământ',
    nameEn: 'Boxer FS300 Fertilizer Spreader',
    description: 'Răspânditor centrifugal de îngrășământ cu rezervor de 300L și sistem de distribuție uniform pentru fermele mici și medii.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'spreading-seeding',
    priceFrom: 1850,
    priceRange: '1.850 - 2.200 EUR',
    specifications: {
      'Capacitate rezervor (L)': 300,
      'Lățimea de lucru (m)': '8-12',
      'Greutatea maximă (kg)': 400,
      'Tip acționare': 'PTO',
      'Material rezervor': 'Inox AISI 304'
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-FS300-1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-FS300-2.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-FS300-3.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Distribuție uniformă garantată',
      'Reglare cantitate din cabină',
      'Rezervor din inox pentru durabilitate',
      'Sistem anti-coroziune',
      'Montare și demontare rapidă'
    ],
    technicalData: {
      'Putere necesară (CP)': '15-25',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte Cat 0/I',
      'Viteză optimă (km/h)': '8-12',
      'Rază de acțiune (m)': 6
    },
    availability: 'in-stock',
    tags: ['răspânditor', 'îngrășământ', 'centrifugal', 'uniform'],
    weight: 85
  },

  {
    id: 'boxer-seed250',
    name: 'Boxer SEED250 Semănătoare Universală',
    nameEn: 'Boxer SEED250 Universal Seeder',
    description: 'Semănătoare universală pentru cereale și plante furajere cu sistem de dozare de precizie și rezervor de 250L.',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'spreading-seeding',
    priceFrom: 4200,
    priceRange: '4.200 - 4.900 EUR',
    specifications: {
      'Capacitate rezervor (L)': 250,
      'Lățimea de lucru (m)': 2.5,
      'Numărul de reduri': 15,
      'Distanța între reduri (cm)': 16.7,
      'Adâncime semănat (cm)': '1-6'
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-SEED250-1.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-SEED250-2.png?v=1-1',
      'https://www.heustractors.com/uploads/media/product_list/08/1878-SEED250-3.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Dozare de precizie pentru toate semințele',
      'Roți de acoperire reglabile',
      'Sistem de marcare automată',
      'Distribuție uniformă garantată',
      'Potrivită pentru terenuri în pantă'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-40',
      'Tip atașare': 'Trei puncte Cat I',
      'Tip dozator': 'Mecanic cu role',
      'Capacitate semințe (kg/ha)': '5-300',
      'Lățime transport (m)': 2.6
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['semănătoare', 'cereale', 'furajere', 'precizie'],
    weight: 320
  }
];

// EXCAVATOARE - Excavators
export const excavatorProducts: DetailedProduct[] = [
  {
    id: 'xcmg-xe18e',
    name: 'XCMG XE18E Excavator Compact',
    nameEn: 'XCMG XE18E Compact Excavator',
    description: 'Excavator compact de 1.8 tone cu motor eficient și cabină confortabilă pentru lucrări urbane și agricole de precizie.',
    brand: 'XCMG',
    category: 'construction-machinery',
    subcategory: 'excavators',
    priceFrom: 13750,
    priceRange: '13.750 - 15.500 EUR',
    specifications: {
      'Greutate operațională (kg)': 1800,
      'Putere motor (kW)': 13.2,
      'Adâncime săpare (mm)': 2650,
      'Înălțime descărcare (mm)': 3900,
      'Raza de lucru (mm)': 4850,
      'Capacitate cupă (L)': 60
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-06.png?v=1-3',
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
      'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-01.png?v=1-3',
      'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-02.png?v=1-3',
      'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-03.png?v=1-3'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-06.png?v=1-3',
    features: [
      'Motor Euro 5 eficient',
      'Cabină ROPS/FOPS certificată',
      'Sistem hidraulic performant',
      'Design compact pentru spații înguste',
      'Consum redus de combustibil',
      'Joystick pilot pentru control precis'
    ],
    technicalData: {
      'Motor': 'Yanmar 3TNV76',
      'Capacitate combustibil (L)': 30,
      'Viteza de deplasare (km/h)': 4.5,
      'Presiune hidraulică (bar)': 245,
      'Debit pompă (L/min)': 38,
      'Forța de săpare (kN)': 18
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['excavator', 'compact', 'urban', 'eficient'],
    weight: 1800,
    dimensions: {
      length: 4850,
      width: 1550,
      height: 2450
    }
  },

  {
    id: 'xcmg-xe27e',
    name: 'XCMG XE27E Excavator Compact',
    nameEn: 'XCMG XE27E Compact Excavator',
    description: 'Excavator compact de 2.7 tone cu forță de săpare superioară și stabilitate excelentă pentru lucrări de construcții.',
    brand: 'XCMG',
    category: 'construction-machinery',
    subcategory: 'excavators',
    priceFrom: 32500,
    priceRange: '32.500 - 35.000 EUR',
    specifications: {
      'Greutate operațională (kg)': 2700,
      'Putere motor (kW)': 18.5,
      'Adâncime săpare (mm)': 3150,
      'Înălțime descărcare (mm)': 4500,
      'Raza de lucru (mm)': 5450,
      'Capacitate cupă (L)': 100
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E-01.png?v=1-4',
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E-02.png?v=1-4',
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E-03.png?v=1-4'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
    features: [
      'Forță de săpare superioară',
      'Stabilitate excelentă pe teren',
      'Cabină spacioasă și ergonomică',
      'Control intuitiv și responsiv',
      'Durabilitate și fiabilitate ridicată',
      'Sistem de monitorizare LCD'
    ],
    technicalData: {
      'Motor': 'Yanmar 3TNV88',
      'Capacitate combustibil (L)': 40,
      'Viteza de deplasare (km/h)': 4.5,
      'Presiune hidraulică (bar)': 260,
      'Debit pompă (L/min)': 48,
      'Forța de săpare (kN)': 27
    },
    availability: 'in-stock',
    tags: ['excavator', 'forță', 'stabilitate', 'construcții'],
    weight: 2700,
    dimensions: {
      length: 5450,
      width: 1680,
      height: 2580
    }
  }
];

// ÎNCĂRCĂTOARE PE ROȚI - Wheel Loaders
export const wheelLoaderProducts: DetailedProduct[] = [
  {
    id: 'boxer-w11-emc',
    name: 'Boxer W11 EMC Încărcător pe Roți',
    nameEn: 'Boxer W11 EMC Wheel Loader',
    description: 'Încărcător pe roți compact cu sistem EMC avansat pentru control precis și eficiență maximă în lucrările de construcții.',
    brand: 'Boxer',
    category: 'construction-machinery',
    subcategory: 'wheel-loaders',
    priceFrom: 28500,
    priceRange: '28.500 - 32.000 EUR',
    specifications: {
      'Greutate operațională (kg)': 3200,
      'Putere motor (CP)': 55,
      'Capacitate cupă (L)': 500,
      'Înălțime descărcare (mm)': 2800,
      'Forța de rupere (kN)': 35,
      'Viteză maximă (km/h)': 25
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/281-W11%20uitgeknipt-2.png?v=2-12'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/281-W11%20uitgeknipt-2.png?v=2-12',
    features: [
      'Sistem EMC pentru control precis',
      'Motor eficient cu emisii reduse',
      'Cabină ergonomică cu climatizare',
      'Transmisie hidrostatică',
      'Cupă cu profil optimizat pentru încărcare',
      'Sistem hidraulic cu răspuns rapid'
    ],
    technicalData: {
      'Motor': 'Perkins Tier 4',
      'Capacitate combustibil (L)': 65,
      'Sistem hidraulic (L/min)': 85,
      'Presiune de lucru (bar)': 220,
      'Raza de întoarcere (mm)': 3800,
      'Unghi de basculare (grade)': 45
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['încărcător', 'EMC', 'eficient', 'construcții'],
    weight: 3200,
    dimensions: {
      length: 5850,
      width: 1900,
      height: 2650
    }
  }
];

// TRACTOARE COMPACTE - Compact Tractors
export const compactTractorProducts: DetailedProduct[] = [
  {
    id: 'tafe-6020m',
    name: 'TAFE 6020M Tractor Compact',
    nameEn: 'TAFE 6020M Compact Tractor',
    description: 'Tractor compact de 20 CP cu motor diesel eficient, perfect pentru ferme mici, grădini și lucrări de întreținere.',
    brand: 'TAFE',
    category: 'tractors',
    subcategory: 'compact-tractors',
    priceFrom: 9450,
    priceRange: '9.450 - 11.200 EUR',
    specifications: {
      'Putere motor (CP)': 20,
      'Cilindri': 3,
      'Capacitate cilindrica (L)': 1.1,
      'Viteze': '8F + 2R',
      'PTO (RPM)': 540,
      'Greutate (kg)': 980
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/03/5413-Tafe%206028M%20to%206020M%20Right.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_list/02/1222-Tafe%206028%20M-07.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/03/5413-Tafe%206028M%20to%206020M%20Right.png?v=1-2',
    features: [
      'Motor diesel 3 cilindri eficient',
      'Transmisie sincronizată cu 8 viteze',
      'Sistem hidraulic cu pompă cu angrenaje',
      'Design compact și manevrabil',
      'Consum redus de combustibil',
      'Direcție asistată hidraulic'
    ],
    technicalData: {
      'Motor': 'TAFE DI-35',
      'Capacitate combustibil (L)': 25,
      'Sistem hidraulic (L/min)': 25,
      'Capacitate ridicare (kg)': 800,
      'Ecartament față (mm)': '1220-1520',
      'Clearance la sol (mm)': 350
    },
    availability: 'in-stock',
    tags: ['tractor', 'compact', 'eficient', 'ferme-mici'],
    weight: 980,
    dimensions: {
      length: 2980,
      width: 1220,
      height: 2100
    }
  },

  {
    id: 'tafe-6028m',
    name: 'TAFE 6028M Tractor Compact',
    nameEn: 'TAFE 6028M Compact Tractor',
    description: 'Tractor compact de 28 CP cu tehnologie avansată și versatilitate maximă pentru diverse aplicații agricole.',
    brand: 'TAFE',
    category: 'tractors',
    subcategory: 'compact-tractors',
    priceFrom: 11200,
    priceRange: '11.200 - 13.500 EUR',
    specifications: {
      'Putere motor (CP)': 28,
      'Cilindri': 3,
      'Capacitate cilindrica (L)': 1.5,
      'Viteze': '8F + 2R',
      'PTO (RPM)': 540,
      'Greutate (kg)': 1050
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1221-Tafe%206028%20M-02.png?v=1-12'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1221-Tafe%206028%20M-02.png?v=1-12',
    features: [
      'Motor diesel de înaltă performanță',
      'Transmisie robustă cu sincronizare',
      'Sistem hidraulic cu debit mare',
      'Ergonomie și confort sporit',
      'Versatilitate în utilizare',
      'Sistem de frânare eficient'
    ],
    technicalData: {
      'Motor': 'TAFE DI-42',
      'Capacitate combustibil (L)': 28,
      'Sistem hidraulic (L/min)': 32,
      'Capacitate ridicare (kg)': 950,
      'Ecartament față (mm)': '1250-1550',
      'Viteză maximă (km/h)': 24
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tractor', 'compact', 'performant', 'versatil'],
    weight: 1050,
    dimensions: {
      length: 3100,
      width: 1250,
      height: 2150
    }
  }
];

// Toate produsele Boxer combinate
export const allBoxerProducts: DetailedProduct[] = [
  ...grasslandCultivationProducts,
  ...soilCultivationProducts,
  ...forestryMachineryProducts,
  ...spreadingSeedingProducts,
  ...excavatorProducts,
  ...wheelLoaderProducts,
  ...compactTractorProducts
];

// Funcții helper pentru filtrarea și căutarea produselor
export function getProductsByCategory(category: string, subcategory?: string): DetailedProduct[] {
  let products = allBoxerProducts.filter(product => product.category === category);
  
  if (subcategory) {
    products = products.filter(product => product.subcategory === subcategory);
  }
  
  return products;
}

export function getProductById(id: string): DetailedProduct | undefined {
  return allBoxerProducts.find(product => product.id === id);
}

export function getFeaturedProducts(): DetailedProduct[] {
  return allBoxerProducts.filter(product => product.isFeatured);
}

export function getProductsByBrand(brand: string): DetailedProduct[] {
  return allBoxerProducts.filter(product => 
    product.brand.toLowerCase() === brand.toLowerCase()
  );
}

export function searchProducts(query: string): DetailedProduct[] {
  const searchTerm = query.toLowerCase();
  return allBoxerProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.nameEn.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
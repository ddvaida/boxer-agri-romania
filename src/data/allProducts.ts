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
  // COSITORI CU BRAȚ - ARM MOWERS
  {
    id: 'boxer-am120',
    name: 'Boxer AM120 Cositor cu Braț',
    nameEn: 'Boxer AM120 Arm Mower',
    description: 'Cositor cu braț hydraulic de 1.2m, ideal pentru tunderea vegetației pe marginile drumurilor și în zone greu accesibile',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 5500,
    priceRange: '5.500 - 6.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Diametrul maxim tăiat (mm)': 50,
      'Înclinarea brațului (grade)': 90,
      'Raza de acțiune (m)': 4.5,
      'Greutate (kg)': 320
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1872-AGF220-6.png?v=1-1',
    features: [
      'Braț hydraulic articulat',
      'Lame cu schimbare rapidă',
      'Protecție anti-rupere',
      'Control precis din cabină'
    ],
    technicalData: {
      'Putere necesară (CP)': '35-50',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte',
      'Material lamă': 'Oțel călit'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'braț', 'margini'],
    weight: 320
  },
  
  // COSITORI ROTATIVE - ROTARY MOWERS
  {
    id: 'boxer-rm150',
    name: 'Boxer RM150 Cositor Rotativ',
    nameEn: 'Boxer RM150 Rotary Mower',
    description: 'Cositor rotativ de 1.5m cu sistem de lamă dublă pentru tăiere uniformă a ierbii și vegetației fine',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 3200,
    priceRange: '3.200 - 3.800 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 150,
      'Numărul de lame': 4,
      'Înălțimea de tăiere (mm)': '20-80',
      'Viteză de lucru (km/h)': '8-12',
      'Greutate (kg)': 280
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Sistem de lamă dublă',
      'Înălțime de tăiere reglabilă',
      'Construcție robustă',
      'Mentenanță redusă'
    ],
    technicalData: {
      'Putere necesară (CP)': '25-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte',
      'Sistem de siguranță': 'Cuplaj cu fricțiune'
    },
    availability: 'in-stock',
    tags: ['cositor', 'rotativ', 'iarbă'],
    weight: 280
  },

  // COSITORI CU DISC - DISC MOWERS
  {
    id: 'boxer-dm180',
    name: 'Boxer DM180 Cositor cu Disc',
    nameEn: 'Boxer DM180 Disc Mower',
    description: 'Cositor cu disc de 1.8m pentru tăierea precisă a furajelor cu calitate superioară',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'grassland-cultivation',
    priceFrom: 8500,
    priceRange: '8.500 - 9.200 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Numărul de discuri': 6,
      'Înălțimea de tăiere (mm)': '15-70',
      'Viteză de lucru (km/h)': '12-18',
      'Greutate (kg)': 450
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/04/1624-Vaia%20MB270-6R%20uitgeknipt-1.png?v=1-3'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/04/1624-Vaia%20MB270-6R%20uitgeknipt-1.png?v=1-3',
    features: [
      'Discuri cu cuțite rapide',
      'Tăiere foarte precisă',
      'Ideal pentru furaje',
      'Sistem de suspensie'
    ],
    technicalData: {
      'Putere necesară (CP)': '40-60',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte',
      'Lățimea de transport (m)': 2.1
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['cositor', 'disc', 'furaje', 'precizie'],
    weight: 450
  }
];

// PRELUCRAREA SOLULUI - Soil Cultivation Products  
export const soilCultivationProducts: DetailedProduct[] = [
  // FREZE - ROTARY TILLERS
  {
    id: 'boxer-rt120',
    name: 'Boxer RT120 Freză Rotativă',
    nameEn: 'Boxer RT120 Rotary Tiller',
    description: 'Freză rotativă de 1.2m pentru pregătirea solului cu sistem de cuțite performant',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 2800,
    priceRange: '2.800 - 3.400 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 120,
      'Numărul de cuțite': 24,
      'Adâncimea de lucru (cm)': '15-25',
      'Viteză de lucru (km/h)': '3-8',
      'Greutate (kg)': 250
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    features: [
      'Cuțite din oțel călit',
      'Adâncime reglabilă',
      'Construcție robustă',
      'Pregătire perfectă sol'
    ],
    technicalData: {
      'Putere necesară (CP)': '20-35',
      'Viteză PTO (RPM)': 540,
      'Tip atașare': 'Trei puncte',
      'Tip transmisie': 'Lanț'
    },
    availability: 'in-stock',
    tags: ['freză', 'sol', 'pregătire'],
    weight: 250
  },

  // GRAPE ROTATIVE - ROTARY HARROWS
  {
    id: 'boxer-rh180',
    name: 'Boxer RH180 Grapă Rotativă',
    nameEn: 'Boxer RH180 Rotary Harrow',
    description: 'Grapă rotativă de 1.8m pentru finisarea solului și pregătirea patului germinativ',
    brand: 'Boxer',
    category: 'agricultural-machinery',
    subcategory: 'soil-cultivation',
    priceFrom: 4200,
    priceRange: '4.200 - 4.800 EUR',
    specifications: {
      'Lățimea de lucru (cm)': 180,
      'Numărul de secțiuni': 3,
      'Adâncimea de lucru (cm)': '5-15',
      'Viteză de lucru (km/h)': '8-15',
      'Greutate (kg)': 380
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    features: [
      'Dinți din oțel rezistent',
      'Reglare precisă adâncime',
      'Finisare uniformă',
      'Pliabilă pentru transport'
    ],
    technicalData: {
      'Putere necesară (CP)': '30-45',
      'Tip atașare': 'Trei puncte',
      'Lățimea de transport (m)': 2.5,
      'Numărul de dinți': 54
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['grapă', 'rotativă', 'finisare'],
    weight: 380
  }
];

// EXCAVATOARE - Excavators
export const excavatorProducts: DetailedProduct[] = [
  {
    id: 'xcmg-xe18e',
    name: 'XCMG XE18E Excavator Compact',
    nameEn: 'XCMG XE18E Compact Excavator',
    description: 'Excavator compact de 1.8 tone cu motor eficient și cabină confortabilă pentru lucrări urbane',
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
      'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-06.png?v=1-3'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/08/2918-XE18E-06.png?v=1-3',
    features: [
      'Motor Euro 5',
      'Cabină ROPS/FOPS',
      'Sistem hidraulic eficient',
      'Design compact pentru spații restrânse',
      'Consum redus de combustibil'
    ],
    technicalData: {
      'Motor': 'Yanmar 3TNV76',
      'Capacitate combustibil (L)': 30,
      'Viteza de deplasare (km/h)': 4.5,
      'Presiune hidraulică (bar)': 245,
      'Debit pompă (L/min)': 38
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['excavator', 'compact', 'urban'],
    weight: 1800,
    dimensions: {
      length: 4850,
      width: 1550,
      height: 2450
    }
  },

  {
    id: 'xcmg-xe19e',
    name: 'XCMG XE19E Excavator Compact',
    nameEn: 'XCMG XE19E Compact Excavator',
    description: 'Excavator compact de 1.9 tone cu performanțe superioare și versatilitate maximă',
    brand: 'XCMG',
    category: 'construction-machinery',
    subcategory: 'excavators',
    priceFrom: 24780,
    priceRange: '24.780 - 26.500 EUR',
    specifications: {
      'Greutate operațională (kg)': 1900,
      'Putere motor (kW)': 14.5,
      'Adâncime săpare (mm)': 2780,
      'Înălțime descărcare (mm)': 4100,
      'Raza de lucru (mm)': 5020,
      'Capacitate cupă (L)': 70
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/06/1156-XE19E%20uitgesneden-4.png?v=1-4'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/06/1156-XE19E%20uitgesneden-4.png?v=1-4',
    features: [
      'Motor Yanmar performant',
      'Sistem hidraulic avansat',
      'Cabină ergonomică',
      'Viteză de lucru ridicată',
      'Fiabilitate maximă'
    ],
    technicalData: {
      'Motor': 'Yanmar 3TNV88',
      'Capacitate combustibil (L)': 32,
      'Viteza de deplasare (km/h)': 4.8,
      'Presiune hidraulică (bar)': 250,
      'Debit pompă (L/min)': 42
    },
    availability: 'in-stock',
    tags: ['excavator', 'compact', 'performant'],
    weight: 1900,
    dimensions: {
      length: 5020,
      width: 1580,
      height: 2480
    }
  },

  {
    id: 'xcmg-xe27e',
    name: 'XCMG XE27E Excavator Compact',
    nameEn: 'XCMG XE27E Compact Excavator',
    description: 'Excavator compact de 2.7 tone cu forță de săpare superioară și stabilitate excelentă',
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
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
    features: [
      'Forță de săpare superioară',
      'Stabilitate excelentă',
      'Cabină spacioasă',
      'Control intuitiv',
      'Durabilitate ridicată'
    ],
    technicalData: {
      'Motor': 'Yanmar 3TNV88',
      'Capacitate combustibil (L)': 40,
      'Viteza de deplasare (km/h)': 4.5,
      'Presiune hidraulică (bar)': 260,
      'Debit pompă (L/min)': 48
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['excavator', 'forță', 'stabilitate'],
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
    description: 'Încărcător pe roți compact cu sistem EMC pentru control precis și eficiență maximă',
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
      'Cupă cu profil optimizat'
    ],
    technicalData: {
      'Motor': 'Perkins Tier 4',
      'Capacitate combustibil (L)': 65,
      'Sistem hidraulic (L/min)': 85,
      'Presiune de lucru (bar)': 220,
      'Raza de întoarcere (mm)': 3800
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['încărcător', 'EMC', 'eficient'],
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
    description: 'Tractor compact de 20 CP cu motor diesel eficient, ideal pentru ferme mici și lucrări de grădină',
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
      'https://www.heustractors.com/uploads/media/product_list/03/5413-Tafe%206028M%20to%206020M%20Right.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/03/5413-Tafe%206028M%20to%206020M%20Right.png?v=1-2',
    features: [
      'Motor diesel 3 cilindri',
      'Transmisie sincronizată',
      'Sistem hidraulic eficient',
      'Design compact și manevrabil',
      'Consum redus de combustibil'
    ],
    technicalData: {
      'Motor': 'TAFE DI-35',
      'Capacitate combustibil (L)': 25,
      'Sistem hidraulic (L/min)': 25,
      'Capacitate ridicare (kg)': 800,
      'Ecartament față (mm)': '1220-1520'
    },
    availability: 'in-stock',
    tags: ['tractor', 'compact', 'eficient'],
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
    description: 'Tractor compact de 28 CP cu tehnologie avansată pentru productivitate maximă',
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
      'Motor diesel performant',
      'Cutie de viteze sincronizată',
      'Sistem hidraulic de mare capacitate',
      'Cabină ergonomică opțională',
      'Versatilitate maximă'
    ],
    technicalData: {
      'Motor': 'TAFE DI-35 Turbo',
      'Capacitate combustibil (L)': 30,
      'Sistem hidraulic (L/min)': 30,
      'Capacitate ridicare (kg)': 1000,
      'Ecartament față (mm)': '1220-1520'
    },
    availability: 'in-stock',
    isFeatured: true,
    tags: ['tractor', 'compact', 'performant'],
    weight: 1050,
    dimensions: {
      length: 3180,
      width: 1220,
      height: 2150
    }
  }
];

// Export all products combined
export const allBoxerProducts: DetailedProduct[] = [
  ...grasslandCultivationProducts,
  ...soilCultivationProducts,
  ...excavatorProducts,
  ...wheelLoaderProducts,
  ...compactTractorProducts
];

// Helper functions
export const getProductsByCategory = (category: string, subcategory?: string): DetailedProduct[] => {
  return allBoxerProducts.filter(product => {
    if (subcategory) {
      return product.category === category && product.subcategory === subcategory;
    }
    return product.category === category;
  });
};

export const getProductById = (id: string): DetailedProduct | undefined => {
  return allBoxerProducts.find(product => product.id === id);
};

export const getFeaturedProducts = (): DetailedProduct[] => {
  return allBoxerProducts.filter(product => product.isFeatured);
};

export const getProductsByBrand = (brand: string): DetailedProduct[] => {
  return allBoxerProducts.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const searchProducts = (query: string): DetailedProduct[] => {
  const lowercaseQuery = query.toLowerCase();
  return allBoxerProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
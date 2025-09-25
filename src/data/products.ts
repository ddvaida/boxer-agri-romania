export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  brand: string;
  category: string;
  subcategory: string;
  price?: number;
  priceRange?: string;
  specifications: {
    [key: string]: string | number;
  };
  images: string[];
  mainImage: string;
  features: string[];
  technicalData?: {
    [key: string]: string | number;
  };
  availability: 'in-stock' | 'on-order' | 'out-of-stock';
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

// Sample products from the original site structure
export const products: Product[] = [
  {
    id: 'tafe-6028',
    name: 'TAFE 6028 M',
    nameEn: 'TAFE 6028 M',
    description: 'Tractor compact de 28 CP cu motor diesel 3 cilindri, ideal pentru exploatații mici și medii',
    brand: 'TAFE',
    category: 'tractors',
    subcategory: 'compact-tractors',
    priceRange: '15.000 - 18.000 EUR',
    specifications: {
      'Putere motor (CP)': 28,
      'Cilindri': 3,
      'Capacitate cilindrica (L)': 1.5,
      'Viteze': '8F + 2R',
      'PTO (RPM)': 540,
      'Greutate (kg)': 1200
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/02/1222-Tafe%206028%20M-07.png?v=1-2',
      'https://www.heustractors.com/uploads/media/product_gallery/01/1223-Tafe%206028%20M-08.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/02/1222-Tafe%206028%20M-07.png?v=1-2',
    features: [
      'Motor diesel eficient',
      'Cutie de viteze sincronizată',
      'Sistem hidraulic performant',
      'Design compact și manevrabil'
    ],
    availability: 'in-stock',
    isFeatured: true,
    tags: ['compact', 'diesel', 'efficient']
  },
  {
    id: 'tafe-7515',
    name: 'TAFE 7515 DI 4WD',
    nameEn: 'TAFE 7515 DI 4WD',
    description: 'Tractor agricol de 75 CP cu tracțiune integrală, perfect pentru lucrări intensive',
    brand: 'TAFE',
    category: 'tractors', 
    subcategory: 'agricultural-tractors',
    priceRange: '28.000 - 32.000 EUR',
    specifications: {
      'Putere motor (CP)': 75,
      'Cilindri': 4,
      'Capacitate cilindrica (L)': 3.3,
      'Viteze': '12F + 3R',
      'PTO (RPM)': '540/750',
      'Greutate (kg)': 2800,
      'Tracțiune': '4WD'
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/1235-Tafe%207515-12.png?v=1-2'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/1235-Tafe%207515-12.png?v=1-2',
    features: [
      'Tracțiune integrală 4WD',
      'Motor turbo diesel',
      'Cutie de viteze sincronizată cu 12 trepte',
      'Sistem hidraulic de mare capacitate',
      'Cabină confortabilă'
    ],
    availability: 'in-stock',
    isFeatured: true,
    tags: ['4wd', 'powerful', 'agricultural']
  },
  {
    id: 'xcmg-xe27e',
    name: 'XCMG XE27E',
    nameEn: 'XCMG XE27E',
    description: 'Excavator compact electric de 2.7 tone, ideal pentru lucrări urbane și spații restrânse',
    brand: 'XCMG',
    category: 'construction-machinery',
    subcategory: 'excavators',
    priceRange: '45.000 - 52.000 EUR',
    specifications: {
      'Greutate operațională (kg)': 2700,
      'Putere motor (kW)': 15,
      'Adâncime săpare (mm)': 2650,
      'Înălțime descărcare (mm)': 3900,
      'Raza de lucru (mm)': 4850,
      'Capacitate cupă (L)': 80
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
    features: [
      'Motor electric zero emisii',
      'Design compact pentru spații restrânse',
      'Sistem hidraulic performant',
      'Cabină ergonomică',
      'Consum redus de energie'
    ],
    availability: 'on-order',
    isNew: true,
    tags: ['electric', 'compact', 'eco-friendly']
  },
  {
    id: 'boxer-w11',
    name: 'Boxer W11 EMC',
    nameEn: 'Boxer W11 EMC',
    description: 'Încărcător pe roți de 1.1 tone cu sistem electric-mecanic controlat',
    brand: 'Boxer',
    category: 'construction-machinery',
    subcategory: 'wheel-loaders',
    priceRange: '35.000 - 40.000 EUR',
    specifications: {
      'Greutate operațională (kg)': 1100,
      'Putere motor (CP)': 25,
      'Capacitate cupă (L)': 400,
      'Înălțime descărcare (mm)': 2800,
      'Viteză maximă (km/h)': 20,
      'Raza de întoarcere (mm)': 3200
    },
    images: [
      'https://www.heustractors.com/uploads/media/product_list/01/281-W11%20uitgeknipt-2.png?v=2-12'
    ],
    mainImage: 'https://www.heustractors.com/uploads/media/product_list/01/281-W11%20uitgeknipt-2.png?v=2-12',
    features: [
      'Sistem EMC pentru control precis',
      'Design compact și manevrabil',
      'Consum redus de combustibil',
      'Mentenanță ușoară',
      'Cabină confortabilă'
    ],
    availability: 'in-stock',
    isFeatured: true,
    tags: ['compact', 'efficient', 'versatile']
  }
];

export const getProductsByCategory = (category: string, subcategory?: string): Product[] => {
  return products.filter(product => {
    if (subcategory) {
      return product.category === category && product.subcategory === subcategory;
    }
    return product.category === category;
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};
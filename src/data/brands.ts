export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  link: string;
  productCount: number;
  featured: boolean;
}

export const brands: Brand[] = [
  {
    id: 'boxer',
    name: 'Boxer Agri',
    description: 'Liderul în utilaje agricole premium cu tehnologie avansată și fiabilitate excepțională',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/02/192-logo-boxer-agri.png?v=1-0',
    link: '/branduri/boxer',
    productCount: 99,
    featured: true
  },
  {
    id: 'eurotrac',
    name: 'Eurotrac',
    description: 'Utilaje de construcții și echipamente specializate de înaltă calitate',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/00/190-logo-eurotrac.png?v=1-0',
    link: '/branduri/eurotrac',
    productCount: 45,
    featured: true
  },
  {
    id: 'tierre',
    name: 'Tierre',
    description: 'Echipamente agricole italiene cu design inovator și performanțe superioare',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/01/201-Logo_tierre.png?v=1-0',
    link: '/branduri/tierre',
    productCount: 10,
    featured: true
  },
  {
    id: 'vaia',
    name: 'Vaia',
    description: 'Utilaje specializate pentru agricultură sustenabilă și eficientă',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/08/198-Logo_vaia.png?v=1-0',
    link: '/branduri/vaia',
    productCount: 8,
    featured: false
  },
  {
    id: 'lovol',
    name: 'Lovol',
    description: 'Tractoare și utilaje agricole cu raport calitate-preț excelent',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/06/196-Logo_lovol.png?v=1-0',
    link: '/branduri/lovol',
    productCount: 12,
    featured: false
  },
  {
    id: 'xcmg',
    name: 'XCMG',
    description: 'Utilaje de construcții robuste și performante pentru aplicații intensive',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/04/194-logo-xcmg-hi%20res.png?v=1-0',
    link: '/branduri/xcmg',
    productCount: 31,
    featured: true
  },
  {
    id: 'yto',
    name: 'YTO',
    description: 'Tractoare și echipamente agricole chinezești cu tehnologie modernă',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/03/193-Logo_yto.png?v=1-0',
    link: '/branduri/yto',
    productCount: 6,
    featured: false
  },
  {
    id: 'fcr',
    name: 'FCR',
    description: 'Echipamente agricole specializate pentru cultivarea pajiștilor',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/03/453-fcr.jpg?v=1-0',
    link: '/branduri/fcr',
    productCount: 3,
    featured: false
  },
  {
    id: 'pronar',
    name: 'Pronar',
    description: 'Remorci și utilaje agricole poloneze de înaltă calitate',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/02/202-Logo_pronar.png?v=1-0',
    link: '/branduri/pronar',
    productCount: 15,
    featured: false
  },
  {
    id: 'remac',
    name: 'Remac',
    description: 'Utilaje pentru prelucrarea solului cu design italian și performanțe superioare',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/04/204-Logo_remac.jpg?v=1-0',
    link: '/branduri/remac',
    productCount: 5,
    featured: false
  },
  {
    id: 'tafe',
    name: 'TAFE',
    description: 'Tractoare indiene robuste și eficiente pentru toate tipurile de exploatații',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/01/191-Logo_tafe.png?v=1-0',
    link: '/branduri/tafe',
    productCount: 20,
    featured: true
  },
  {
    id: 'pennacchio',
    name: 'Pennacchio',
    description: 'Echipamente agricole italiene pentru cultivarea pajiștilor și întreținerea terenurilor',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/03/203-Logo_pennacchio.png?v=1-0',
    link: '/branduri/pennacchio',
    productCount: 2,
    featured: false
  },
  {
    id: 'linhai',
    name: 'Linhai',
    description: 'Vehicule utilitare și echipamente pentru teren și transport',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/07/197-Logo_linhai.png?v=1-0',
    link: '/branduri/linhai',
    productCount: 4,
    featured: false
  },
  {
    id: 'dondi',
    name: 'Dondi',
    description: 'Utilaje pentru prelucrarea solului cu tehnologie italiană avansată',
    logo: 'https://www.heustractors.com/uploads/media/brand_tile/00/200-Logo_dondi.png?v=1-0',
    link: '/branduri/dondi',
    productCount: 4,
    featured: false
  }  
];
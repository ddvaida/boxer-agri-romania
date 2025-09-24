export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  link: string;
  count: number;
  parentCategory?: string;
}

export interface MainCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  link: string;
  subcategories: ProductCategory[];
}

export const mainCategories: MainCategory[] = [
  {
    id: 'agricultural-machinery',
    name: 'Utilaje Agricole',
    nameEn: 'Agricultural machinery',
    description: 'Echipamente și utilaje pentru toate tipurile de lucrări agricole',
    image: '/api/placeholder/400/300',
    link: '/utilaje-agricole',
    subcategories: [
      {
        id: 'grassland-cultivation',
        name: 'Cultivarea Pajiștilor',
        nameEn: 'Grassland cultivation',
        description: 'Echipamente pentru întreținerea și cultivarea pajiștilor',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/cultivarea-pajistilor',
        count: 60
      },
      {
        id: 'soil-cultivation', 
        name: 'Prelucrarea Solului',
        nameEn: 'Soil cultivation',
        description: 'Utilaje pentru pregătirea și prelucrarea solului',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/prelucrarea-solului',
        count: 24
      },
      {
        id: 'attachments',
        name: 'Accesorii',
        nameEn: 'Attachments', 
        description: 'Accesorii și echipamente suplimentare',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/accesorii',
        count: 10
      },
      {
        id: 'forestry-machinery',
        name: 'Mașini Silvicultură',
        nameEn: 'Forestry machinery',
        description: 'Echipamente specializate pentru lucrări forestiere',
        image: '/api/placeholder/400/300', 
        link: '/utilaje-agricole/masini-silvicultura',
        count: 14
      },
      {
        id: 'land-levelers',
        name: 'Nivelatori și Grape pentru Pajișți',
        nameEn: 'Land levelers and grassland harrows',
        description: 'Echipamente pentru nivelarea terenului și grape specializate',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/nivelatori-grape',
        count: 4
      },
      {
        id: 'manure-mixers',
        name: 'Amestecătoare Gunoi',
        nameEn: 'Manure mixers',
        description: 'Echipamente pentru amestecarea și prepararea îngrășămintelor organice',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/amestecatoare-gunoi',
        count: 1
      },
      {
        id: 'road-land-management',
        name: 'Întreținere Drumuri și Terenuri',
        nameEn: 'Road and land management',
        description: 'Utilaje pentru întreținerea drumurilor și managementul terenurilor',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/intretinere-drumuri',
        count: 9
      },
      {
        id: 'water-pumps',
        name: 'Pompe de Apă',
        nameEn: 'Water pumps',
        description: 'Pompe și sisteme de irigații pentru agricultură',
        image: '/api/placeholder/400/300',
        link: '/utilaje-agricole/pompe-apa',
        count: 1
      }
    ]
  },
  {
    id: 'construction-machinery',
    name: 'Utilaje Construcții',
    nameEn: 'Construction machinery', 
    description: 'Mașini și echipamente pentru construcții și lucrări publice',
    image: '/api/placeholder/400/300',
    link: '/utilaje-constructii',
    subcategories: [
      {
        id: 'excavators',
        name: 'Excavatoare',
        nameEn: 'Excavators',
        description: 'Excavatoare compacte și de mărime medie pentru diverse aplicații',
        image: '/api/placeholder/400/300',
        link: '/utilaje-constructii/excavatoare',
        count: 26
      },
      {
        id: 'wheel-loaders',
        name: 'Încărcătoare pe Roți',
        nameEn: 'Wheel loaders',
        description: 'Încărcătoare versatile pentru manipularea materialelor',
        image: '/api/placeholder/400/300',
        link: '/utilaje-constructii/incarcatoare-roti',
        count: 38
      },
      {
        id: 'skid-loader',
        name: 'Încărcătoare Compacte',
        nameEn: 'Skid loader',
        description: 'Încărcătoare compacte pentru spații restrânse',
        image: '/api/placeholder/400/300',
        link: '/utilaje-constructii/incarcatoare-compacte',
        count: 3
      },
      {
        id: 'telehandler',
        name: 'Încărcătoare Telescopice',
        nameEn: 'Telehandler',
        description: 'Utilaje cu braț telescopic pentru înălțimi mari',
        image: '/api/placeholder/400/300',
        link: '/utilaje-constructii/incarcatoare-telescopice',
        count: 1
      }
    ]
  },
  {
    id: 'forklift-logistics',
    name: 'Stivuitoare și Logistică',
    nameEn: 'Forklift trucks & logistics',
    description: 'Echipamente pentru manipularea și transportul mărfurilor',
    image: '/api/placeholder/400/300',
    link: '/stivuitoare-logistica',
    subcategories: [
      {
        id: 'forklifts',
        name: 'Stivuitoare',
        nameEn: 'Forklifts',
        description: 'Stivuitoare pentru magazii și spații de depozitare',
        image: '/api/placeholder/400/300',
        link: '/stivuitoare-logistica/stivuitoare',
        count: 9
      },
      {
        id: 'terminal-tractor',
        name: 'Tractoare Terminale',
        nameEn: 'Terminal Tractor',
        description: 'Tractoare specializate pentru terminale și porturi',
        image: '/api/placeholder/400/300',
        link: '/stivuitoare-logistica/tractoare-terminale',
        count: 2
      },
      {
        id: 'utv',
        name: 'Vehicule Utilitare',
        nameEn: 'UTV',
        description: 'Vehicule utilitare pentru teren și transport',
        image: '/api/placeholder/400/300',
        link: '/stivuitoare-logistica/vehicule-utilitare',
        count: 2
      }
    ]
  }
];

export const quickAccessCategories = [
  {
    name: 'Prelucrarea Solului',
    nameEn: 'Soil cultivation',
    image: 'https://www.heustractors.com/uploads/media/product_list/01/1661-NEX-serie%20%282%29.png?v=1-1',
    link: '/utilaje-agricole/prelucrarea-solului'
  },
  {
    name: 'Mașini Silvicultură', 
    nameEn: 'Forestry machinery',
    image: 'https://www.heustractors.com/uploads/media/product_list/08/1878-Afbeelding1.png?v=1-1',
    link: '/utilaje-agricole/masini-silvicultura'
  },
  {
    name: 'Stivuitoare',
    nameEn: 'Forklifts',
    image: 'https://www.heustractors.com/uploads/media/product_list/08/1058-Agri-12E%20rijbak-02.png?v=1-3',
    link: '/stivuitoare-logistica/stivuitoare'
  },
  {
    name: 'Excavatoare',
    nameEn: 'Excavators', 
    image: 'https://www.heustractors.com/uploads/media/product_list/05/1135-XE27E%20knip-3.png?v=1-4',
    link: '/utilaje-constructii/excavatoare'
  },
  {
    name: 'Încărcătoare pe Roți',
    nameEn: 'Wheel loaders',
    image: 'https://www.heustractors.com/uploads/media/product_list/01/281-W11%20uitgeknipt-2.png?v=2-12',
    link: '/utilaje-constructii/incarcatoare-roti'
  },
  {
    name: 'Remorci Basculante',
    nameEn: 'Tipping trailers',
    image: 'https://www.heustractors.com/uploads/media/product_list/04/1464-NL28%20XL%20%282%29.png?v=1-3',
    link: '/remorci-agricole/remorci-basculante'
  },
  {
    name: 'Remorci pentru Baloți',
    nameEn: 'Bale trailers',
    image: 'https://www.heustractors.com/uploads/media/product_list/08/1838-t025%20knip.png?v=1-2',
    link: '/remorci-agricole/remorci-baloti'
  },
  {
    name: 'Tractoare Compacte',
    nameEn: 'Compact tractors',
    image: 'https://www.heustractors.com/uploads/media/product_list/02/1222-Tafe%206028%20M-07.png?v=1-2',
    link: '/tractoare/tractoare-compacte'
  },
  {
    name: 'Tractoare Agricole',
    nameEn: 'Agricultural tractors',
    image: 'https://www.heustractors.com/uploads/media/product_list/05/1235-Tafe%207515-12.png?v=1-2',
    link: '/tractoare/tractoare-agricole'
  },
  {
    name: 'Tractoare Terminale',
    nameEn: 'Terminal Tractor',
    image: 'https://www.heustractors.com/uploads/media/product_list/01/1181-XPT70E-02.png?v=1-4',
    link: '/stivuitoare-logistica/tractoare-terminale'
  },
  {
    name: 'Basculante pentru Pământ',
    nameEn: 'Earth dumper',
    image: 'https://www.heustractors.com/uploads/media/product_list/06/1476-n24%20knip.png?v=1-3',
    link: '/remorci-agricole/basculante-pamant'
  }
];
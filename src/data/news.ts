export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 'content-days-2024',
    title: 'Zile de Demonstrație TAFE, Eurotrac & Boxer Agri',
    excerpt: 'În iulie 2024, am organizat 2 zile complete de demonstrații în zonele Hoeksche Waard și Barendrecht. Vedere fotografiile cu produsele noastre în acțiune.',
    date: '10 Iulie 2024',
    image: 'https://www.heustractors.com/uploads/media/news-sm/00/60-Tafe-6028-fotodag-40.jpg?v=1-0',
    category: 'Evenimente',
    link: '/stiri/zile-demonstratie-2024',
    featured: true
  },
  {
    id: 'tafe-importer',
    title: 'Importator Tractoare TAFE Benelux',
    excerpt: 'Ambiția Boxer Agri este să stabilească o rețea exclusivă de dealeri pentru tractoarele TAFE în România și Europa de Est.',
    date: '1 Februarie 2024',
    image: 'https://www.heustractors.com/uploads/media/news-sm/08/88-Tafe-alg-10-scaled.jpg?v=1-0',
    category: 'Companie',
    link: '/stiri/importator-tafe-tractoare',
    featured: true
  },
  {
    id: 'new-storage-facility',
    title: 'Noua Hală de Depozitare Construită',
    excerpt: 'Descoperă ultimele dezvoltări privind construcția noii noastre hale de depozitare și extinderea capacității de stoc.',
    date: '15 Ianuarie 2025',
    image: 'https://www.heustractors.com/uploads/media/news-sm/03/2043-Overview%20pand%20sept%2024-01.jpg?v=1-0',
    category: 'Infrastructură',
    link: '/stiri/noua-hala-depozitare',
    featured: true
  }
];

export interface Event {
  id: string;
  title: string;
  location: string;
  address: string;
  startDate: string;
  endDate: string;
  image: string;
  website: string;
  description: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 'libramont-2025',
    title: 'Târgul Libramont 2025',
    location: 'Libramont, Belgia',
    address: 'Rue des Aubépines 50B, 6800 Libramont',
    startDate: '25 Iulie 2025',
    endDate: '28 Iulie 2025', 
    image: 'https://www.heustractors.com/uploads/media/news-lg/07/2967-libramont.jpg?v=1-0',
    website: 'https://foiredelibramont.com/',
    description: 'Cel mai important târg agricol din Belgia - vă așteptăm la standul nostru!'
  },
  {
    id: 'tkd-2025',
    title: 'Zilele de Contact Tehnic 2025',
    location: 'Meierijstad, Olanda',
    address: 'Ratelaar, Meierijstad',
    startDate: '12 Iunie 2025',
    endDate: '14 Iunie 2025',
    image: 'https://www.heustractors.com/uploads/media/news-lg/08/2968-tkd.jpg?v=1-0',  
    website: 'https://tkd.nl/',
    description: 'Eveniment tehnic specializat pentru profesioniștii din domeniul utilajelor'
  }
];
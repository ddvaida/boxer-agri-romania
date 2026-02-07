import { writeFileSync } from 'fs';
import { allBoxerProducts, DetailedProduct } from '../src/data/allProducts';

// Funcție pentru a scăpa caractere speciale CSV
function escapeCSV(value: any): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'boolean') return value ? 'Da' : 'Nu';
  if (Array.isArray(value)) return `"${value.join('; ').replace(/"/g, '""')}"`;
  if (typeof value === 'object') return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
  
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes(';')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Colectăm dinamic TOATE cheile de specificații și date tehnice
const allSpecKeys = new Set<string>();
const allTechKeys = new Set<string>();

allBoxerProducts.forEach(product => {
  Object.keys(product.specifications).forEach(k => allSpecKeys.add(k));
  Object.keys(product.technicalData).forEach(k => allTechKeys.add(k));
});

const specKeys = Array.from(allSpecKeys).sort();
const techKeys = Array.from(allTechKeys).sort();

// Mapare categorii pentru WP
function mapCategory(cat: string, subcat: string): string {
  const catMap: Record<string, string> = {
    'agricultural-machinery': 'Utilaje Agricole',
    'forestry-machinery': 'Utilaje Forestiere',
    'attachments': 'Accesorii',
  };
  const subMap: Record<string, string> = {
    'grassland-cultivation': 'Cultivarea Pajiștilor',
    'soil-cultivation': 'Cultivarea Solului',
    'forestry': 'Forestier',
    'spreading-seeding': 'Împrăștiere și Semănat',
    'excavator-attachments': 'Accesorii Excavator',
    'wheel-loader-attachments': 'Accesorii Încărcător',
    'compact-tractor-attachments': 'Accesorii Tractor Compact',
  };
  return `${catMap[cat] || cat} > ${subMap[subcat] || subcat}`;
}

function mapAvailability(av: string): string {
  switch (av) {
    case 'in-stock': return 'In stoc';
    case 'on-order': return 'La comanda';
    case 'out-of-stock': return 'Indisponibil';
    default: return av;
  }
}

// Definim headerele CSV fixe
const fixedHeaders = [
  'post_title',
  'post_name',
  'post_content',
  'post_excerpt',
  'post_status',
  'post_type',
  // WooCommerce
  'sku',
  'regular_price',
  'price_range',
  'stock_status',
  'manage_stock',
  'weight',
  'length',
  'width',
  'height',
  // Taxonomii
  'tax:product_cat',
  'tax:product_tag',
  'tax:pa_brand',
  // Meta
  'meta:_product_name_en',
  'meta:_is_new',
  'meta:_is_featured',
  // Imagini
  'images',
  'featured_image',
  'image_count',
  // Caracteristici
  'features',
];

// Construim headerele pentru specificații și date tehnice ca atribute WooCommerce
const specHeaders = specKeys.map(k => `attribute:${k}`);
const techHeaders = techKeys.map(k => `attribute:${k}`);

const allHeaders = [...fixedHeaders, ...specHeaders, ...techHeaders];

// Construim liniile CSV
const csvLines: string[] = [];
csvLines.push(allHeaders.map(escapeCSV).join(','));

allBoxerProducts.forEach((product: DetailedProduct) => {
  const fixedValues = [
    product.name,
    product.id,
    product.description,
    product.description.substring(0, 155) + '...',
    'publish',
    'product',
    // WooCommerce
    product.id.toUpperCase(),
    product.priceFrom || product.price || '',
    product.priceRange || '',
    product.availability === 'in-stock' ? 'instock' : 
      product.availability === 'on-order' ? 'onbackorder' : 'outofstock',
    'no',
    product.weight || '',
    product.dimensions?.length || '',
    product.dimensions?.width || '',
    product.dimensions?.height || '',
    // Taxonomii
    mapCategory(product.category, product.subcategory),
    product.tags.join('|'),
    product.brand,
    // Meta
    product.nameEn,
    product.isNew ? 'yes' : 'no',
    product.isFeatured ? 'yes' : 'no',
    // Imagini
    product.images.join('|'),
    product.mainImage,
    product.images.length,
    // Caracteristici
    product.features.join('|'),
  ];

  const specValues = specKeys.map(k => product.specifications[k] ?? '');
  const techValues = techKeys.map(k => product.technicalData[k] ?? '');

  const row = [...fixedValues, ...specValues, ...techValues];
  csvLines.push(row.map(escapeCSV).join(','));
});

// Salvăm fișierul
const csvContent = '\uFEFF' + csvLines.join('\n'); // BOM for Excel UTF-8
writeFileSync('./public/products-export.csv', csvContent, 'utf-8');

console.log(`✅ Export CSV finalizat pentru WP All Import!`);
console.log(`📊 Total produse exportate: ${allBoxerProducts.length}`);
console.log(`📁 Fișier: public/products-export.csv`);
console.log(`📋 Coloane fixe: ${fixedHeaders.length}`);
console.log(`🔧 Specificații unice: ${specKeys.length}`);
console.log(`⚙️  Date tehnice unice: ${techKeys.length}`);
console.log(`📋 Total coloane: ${allHeaders.length}`);
console.log('');
console.log('Specificații detectate:', specKeys.join(', '));
console.log('Date tehnice detectate:', techKeys.join(', '));

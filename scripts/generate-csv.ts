import { writeFileSync } from 'fs';
import { 
  grasslandCultivationProducts,
  soilCultivationProducts,
  getAllProducts
} from '../src/data/allProducts';

// Funcție pentru a scăpa caractere speciale CSV
function escapeCSV(value: any): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'boolean') return value ? 'Da' : 'Nu';
  if (Array.isArray(value)) return `"${value.join('; ')}"`;
  if (typeof value === 'object') return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
  
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Obținem toate produsele
const allProducts = getAllProducts();

// Definim headerele CSV
const headers = [
  'ID',
  'Nume',
  'Nume EN', 
  'Brand',
  'Categorie',
  'Subcategorie',
  'Pret De La (EUR)',
  'Gama Preturi',
  'Disponibilitate',
  'Produs Nou',
  'Produs Recomandat',
  'Greutate (kg)',
  'Descriere',
  'Caracteristici Principale',
  'Taguri',
  'Imagine Principala',
  'Numar Total Imagini',
  // Specificații comune
  'Latime de lucru (cm)',
  'Raza de actiune (m)',
  'Unghi de inclinare (grade)',
  'Diametru maxim taiat (mm)',
  'Numar de lame',
  'Numar de discuri',
  'Numar de ciocanele',
  'Inaltime de taiere (mm)',
  'Viteza de lucru (km/h)',
  'Viteza rotor (RPM)',
  // Date tehnice
  'Putere necesara (CP)',
  'Viteza PTO (RPM)',
  'Tip atasare',
  'Presiune hidraulica (bar)',
  'Consum hidraulic (L/min)',
  'Diametru discuri (mm)',
  'Viteza rotire discuri (RPM)',
  'Sistem siguranta',
  'Latime transport (m)',
  'Tip ciocanele',
  'Unghi de lucru (grade)',
  'Adancime de lucru (cm)',
  'Numar de secere',
  'Numar de dinti',
  'Spatiere dinti (cm)',
  'Tip lame',
  'Capacitate rezervor (L)'
];

// Construim liniile CSV
const csvLines: string[] = [];
csvLines.push(headers.join(','));

allProducts.forEach(product => {
  const row = [
    product.id,
    product.name,
    product.nameEn,
    product.brand,
    product.category,
    product.subcategory,
    product.priceFrom || '',
    product.priceRange || '',
    product.availability === 'in-stock' ? 'In stoc' : 
      product.availability === 'on-order' ? 'La comanda' : 'Indisponibil',
    product.isNew || false,
    product.isFeatured || false,
    product.weight || '',
    product.description,
    product.features.join('; '),
    product.tags.join('; '),
    product.mainImage,
    product.images.length,
    // Specificații
    product.specifications['Lățimea de lucru (cm)'] || '',
    product.specifications['Raza de acțiune (m)'] || '',
    product.specifications['Unghiul de înclinare (grade)'] || '',
    product.specifications['Diametrul maxim tăiat (mm)'] || '',
    product.specifications['Numărul de lame'] || '',
    product.specifications['Numărul de discuri'] || '',
    product.specifications['Numărul de ciocanele'] || '',
    product.specifications['Înălțimea de tăiere (mm)'] || '',
    product.specifications['Viteză de lucru (km/h)'] || '',
    product.specifications['Viteză rotor (RPM)'] || '',
    // Date tehnice
    product.technicalData['Putere necesară (CP)'] || '',
    product.technicalData['Viteză PTO (RPM)'] || '',
    product.technicalData['Tip atașare'] || '',
    product.technicalData['Presiune hidraulică (bar)'] || '',
    product.technicalData['Consum hidraulic (L/min)'] || '',
    product.technicalData['Diametru discuri (mm)'] || '',
    product.technicalData['Viteză rotire discuri (RPM)'] || '',
    product.technicalData['Sistem siguranță'] || '',
    product.technicalData['Lățime transport (m)'] || '',
    product.technicalData['Tip ciocanele'] || '',
    product.technicalData['Unghi de lucru (grade)'] || '',
    product.technicalData['Adâncime de lucru (cm)'] || '',
    product.technicalData['Număr de secere'] || '',
    product.technicalData['Număr de dinți'] || '',
    product.technicalData['Spațiere dinți (cm)'] || '',
    product.technicalData['Tip lame'] || '',
    product.technicalData['Capacitate rezervor (L)'] || ''
  ];
  
  csvLines.push(row.map(escapeCSV).join(','));
});

// Salvăm fișierul
const csvContent = csvLines.join('\n');
writeFileSync('./public/products-complete-export.csv', csvContent, 'utf-8');

console.log(`✅ Export finalizat!`);
console.log(`📊 Total produse exportate: ${allProducts.length}`);
console.log(`📁 Fișier: public/products-complete-export.csv`);
console.log(`📋 Coloane: ${headers.length}`);

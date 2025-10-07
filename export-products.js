// Script pentru exportul produselor în format CSV
import fs from 'fs';

// Importăm datele produselor (trebuie să le citim din fișier)
const productsData = `// Vom citi datele din src/data/allProducts.ts`;

// Funcție pentru a converti un obiect în CSV
function objectToCsvRow(obj, headers) {
  return headers.map(header => {
    const value = obj[header];
    if (value === undefined || value === null) return '';
    if (Array.isArray(value)) return `"${value.join('; ')}"`;
    if (typeof value === 'object') return `"${JSON.stringify(value)}"`;
    if (typeof value === 'string' && value.includes(',')) return `"${value}"`;
    return value;
  }).join(',');
}

// Citim fișierul TypeScript și extragem datele
const fileContent = fs.readFileSync('./src/data/allProducts.ts', 'utf-8');

// Extragem array-urile de produse
const extractProducts = (content) => {
  const products = [];
  
  // Regex pentru a găsi toate array-urile de produse exportate
  const arrayRegex = /export const \w+Products: DetailedProduct\[\] = \[([\s\S]*?)\];/g;
  let match;
  
  while ((match = arrayRegex.exec(content)) !== null) {
    const arrayContent = match[1];
    
    // Parsăm manual fiecare produs
    const productRegex = /\{[\s\S]*?\}/g;
    const productMatches = arrayContent.match(productRegex);
    
    if (productMatches) {
      productMatches.forEach(productStr => {
        try {
          // Înlocuim comentariile
          const cleanStr = productStr.replace(/\/\/.*$/gm, '');
          
          // Extragem câmpurile simple
          const id = cleanStr.match(/id:\s*['"]([^'"]+)['"]/)?.[1];
          const name = cleanStr.match(/name:\s*['"]([^'"]+)['"]/)?.[1];
          const nameEn = cleanStr.match(/nameEn:\s*['"]([^'"]+)['"]/)?.[1];
          const description = cleanStr.match(/description:\s*['"]([^'"]+)['"]/)?.[1];
          const brand = cleanStr.match(/brand:\s*['"]([^'"]+)['"]/)?.[1];
          const category = cleanStr.match(/category:\s*['"]([^'"]+)['"]/)?.[1];
          const subcategory = cleanStr.match(/subcategory:\s*['"]([^'"]+)['"]/)?.[1];
          const priceFrom = cleanStr.match(/priceFrom:\s*(\d+)/)?.[1];
          const priceRange = cleanStr.match(/priceRange:\s*['"]([^'"]+)['"]/)?.[1];
          const availability = cleanStr.match(/availability:\s*['"]([^'"]+)['"]/)?.[1];
          const isNew = cleanStr.match(/isNew:\s*(true|false)/)?.[1];
          const isFeatured = cleanStr.match(/isFeatured:\s*(true|false)/)?.[1];
          const weight = cleanStr.match(/weight:\s*(\d+)/)?.[1];
          
          // Extragem specificațiile
          const specificationsMatch = cleanStr.match(/specifications:\s*\{([^}]+)\}/);
          const specifications = {};
          if (specificationsMatch) {
            const specStr = specificationsMatch[1];
            const specRegex = /['"]([^'"]+)['"]:\s*(?:['"]([^'"]+)['"]|(\d+))/g;
            let specMatch;
            while ((specMatch = specRegex.exec(specStr)) !== null) {
              specifications[specMatch[1]] = specMatch[2] || specMatch[3];
            }
          }
          
          // Extragem datele tehnice
          const technicalDataMatch = cleanStr.match(/technicalData:\s*\{([^}]+)\}/);
          const technicalData = {};
          if (technicalDataMatch) {
            const techStr = technicalDataMatch[1];
            const techRegex = /['"]([^'"]+)['"]:\s*(?:['"]([^'"]+)['"]|(\d+))/g;
            let techMatch;
            while ((techMatch = techRegex.exec(techStr)) !== null) {
              technicalData[techMatch[1]] = techMatch[2] || techMatch[3];
            }
          }
          
          // Extragem array-uri
          const featuresMatch = cleanStr.match(/features:\s*\[([\s\S]*?)\]/);
          const features = [];
          if (featuresMatch) {
            const featureRegex = /'([^']+)'/g;
            let featureMatch;
            while ((featureMatch = featureRegex.exec(featuresMatch[1])) !== null) {
              features.push(featureMatch[1]);
            }
          }
          
          const tagsMatch = cleanStr.match(/tags:\s*\[([\s\S]*?)\]/);
          const tags = [];
          if (tagsMatch) {
            const tagRegex = /'([^']+)'/g;
            let tagMatch;
            while ((tagMatch = tagRegex.exec(tagsMatch[1])) !== null) {
              tags.push(tagMatch[1]);
            }
          }
          
          const imagesMatch = cleanStr.match(/images:\s*\[([\s\S]*?)\]/);
          const images = [];
          if (imagesMatch) {
            const imageRegex = /'([^']+)'/g;
            let imageMatch;
            while ((imageMatch = imageRegex.exec(imagesMatch[1])) !== null) {
              images.push(imageMatch[1]);
            }
          }
          
          if (id && name) {
            products.push({
              id,
              name,
              nameEn,
              description,
              brand,
              category,
              subcategory,
              priceFrom,
              priceRange,
              availability,
              isNew: isNew === 'true',
              isFeatured: isFeatured === 'true',
              weight,
              features: features.join('; '),
              tags: tags.join('; '),
              images: images.join('; '),
              ...specifications,
              ...technicalData
            });
          }
        } catch (e) {
          console.error('Eroare la parsarea produsului:', e);
        }
      });
    }
  }
  
  return products;
};

try {
  const products = extractProducts(fileContent);
  
  if (products.length === 0) {
    console.error('Nu s-au găsit produse!');
    process.exit(1);
  }
  
  // Creăm headerele CSV din toate câmpurile unice
  const allHeaders = new Set();
  products.forEach(product => {
    Object.keys(product).forEach(key => allHeaders.add(key));
  });
  
  const headers = Array.from(allHeaders);
  
  // Construim CSV-ul
  const csvLines = [];
  csvLines.push(headers.join(','));
  
  products.forEach(product => {
    csvLines.push(objectToCsvRow(product, headers));
  });
  
  const csvContent = csvLines.join('\n');
  
  // Salvăm fișierul
  fs.writeFileSync('./products-export.csv', csvContent, 'utf-8');
  
  console.log(`✅ Export finalizat! ${products.length} produse exportate în products-export.csv`);
  console.log(`Coloane: ${headers.length}`);
} catch (error) {
  console.error('Eroare la export:', error);
  process.exit(1);
}

/**
 * Script pentru convertirea produselor din TypeScript în format PHP pentru WordPress
 * Rulează cu: node scripts/convert-products-to-php.js
 */

const fs = require('fs');
const path = require('path');

// Citește fișierul TypeScript
const tsFilePath = path.join(__dirname, '../src/data/allProducts.ts');
const tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Funcție pentru extragerea array-urilor de produse din TypeScript
function extractProducts(content) {
  const products = [];
  
  // Regex pentru a găsi toate obiectele de produs
  const productRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?(?=\{\s*id:|^\];)/gm;
  
  // Împărțim conținutul pe linii pentru procesare
  const lines = content.split('\n');
  
  let currentProduct = null;
  let braceCount = 0;
  let inProduct = false;
  let productLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detectează începutul unui produs
    if (line.includes("id: '") || line.includes('id: "')) {
      if (!inProduct) {
        inProduct = true;
        braceCount = 1;
        productLines = ['{'];
      }
    }
    
    if (inProduct) {
      productLines.push(line);
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      if (braceCount <= 0) {
        // Avem un produs complet
        const productStr = productLines.join('\n');
        const product = parseProduct(productStr);
        if (product && product.id) {
          products.push(product);
        }
        inProduct = false;
        productLines = [];
      }
    }
  }
  
  return products;
}

// Funcție pentru parsarea unui produs din string TypeScript
function parseProduct(str) {
  try {
    // Cleanup și transformare în JSON valid
    let json = str
      .replace(/\/\/.*$/gm, '') // Remove comments
      .replace(/,\s*([\]}])/g, '$1') // Remove trailing commas
      .replace(/(['"])?([a-zA-Z_][a-zA-Z0-9_\s\(\)\-\/\.]*?)(['"])?\s*:/g, '"$2":') // Quote keys
      .replace(/:\s*'([^']*)'/g, ': "$1"') // Single to double quotes
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ');
    
    // Manual extraction pentru fiecare câmp
    const product = {};
    
    // Extract id
    const idMatch = str.match(/id:\s*['"]([^'"]+)['"]/);
    if (idMatch) product.id = idMatch[1];
    
    // Extract name
    const nameMatch = str.match(/name:\s*['"]([^'"]+)['"]/);
    if (nameMatch) product.name = nameMatch[1];
    
    // Extract nameEn
    const nameEnMatch = str.match(/nameEn:\s*['"]([^'"]+)['"]/);
    if (nameEnMatch) product.nameEn = nameEnMatch[1];
    
    // Extract description
    const descMatch = str.match(/description:\s*['"]([^'"]+)['"]/);
    if (descMatch) product.description = descMatch[1];
    
    // Extract brand
    const brandMatch = str.match(/brand:\s*['"]([^'"]+)['"]/);
    if (brandMatch) product.brand = brandMatch[1];
    
    // Extract category
    const categoryMatch = str.match(/category:\s*['"]([^'"]+)['"]/);
    if (categoryMatch) product.category = categoryMatch[1];
    
    // Extract subcategory
    const subcategoryMatch = str.match(/subcategory:\s*['"]([^'"]+)['"]/);
    if (subcategoryMatch) product.subcategory = subcategoryMatch[1];
    
    // Extract priceFrom
    const priceFromMatch = str.match(/priceFrom:\s*(\d+)/);
    if (priceFromMatch) product.priceFrom = parseInt(priceFromMatch[1]);
    
    // Extract priceRange
    const priceRangeMatch = str.match(/priceRange:\s*['"]([^'"]+)['"]/);
    if (priceRangeMatch) product.priceRange = priceRangeMatch[1];
    
    // Extract availability
    const availabilityMatch = str.match(/availability:\s*['"]([^'"]+)['"]/);
    if (availabilityMatch) product.availability = availabilityMatch[1];
    
    // Extract isFeatured
    const isFeaturedMatch = str.match(/isFeatured:\s*(true|false)/);
    product.isFeatured = isFeaturedMatch ? isFeaturedMatch[1] === 'true' : false;
    
    // Extract weight
    const weightMatch = str.match(/weight:\s*(\d+)/);
    if (weightMatch) product.weight = parseInt(weightMatch[1]);
    
    // Extract images array
    const imagesMatch = str.match(/images:\s*\[([\s\S]*?)\]/);
    if (imagesMatch) {
      const imagesStr = imagesMatch[1];
      product.images = imagesStr.match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || [];
    }
    
    // Extract mainImage
    const mainImageMatch = str.match(/mainImage:\s*['"]([^'"]+)['"]/);
    if (mainImageMatch) product.mainImage = mainImageMatch[1];
    
    // Extract features array
    const featuresMatch = str.match(/features:\s*\[([\s\S]*?)\]/);
    if (featuresMatch) {
      const featuresStr = featuresMatch[1];
      product.features = featuresStr.match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || [];
    }
    
    // Extract tags array
    const tagsMatch = str.match(/tags:\s*\[([\s\S]*?)\]/);
    if (tagsMatch) {
      const tagsStr = tagsMatch[1];
      product.tags = tagsStr.match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || [];
    }
    
    // Extract specifications
    const specsMatch = str.match(/specifications:\s*\{([\s\S]*?)\}/);
    if (specsMatch) {
      product.specifications = parseKeyValuePairs(specsMatch[1]);
    }
    
    // Extract technicalData
    const techDataMatch = str.match(/technicalData:\s*\{([\s\S]*?)\}/);
    if (techDataMatch) {
      product.technicalData = parseKeyValuePairs(techDataMatch[1]);
    }
    
    return product;
  } catch (e) {
    console.error('Error parsing product:', e.message);
    return null;
  }
}

function parseKeyValuePairs(str) {
  const result = {};
  const pairs = str.match(/['"]([^'"]+)['"]\s*:\s*(['"]?[^,\n}]+['"]?)/g);
  if (pairs) {
    pairs.forEach(pair => {
      const match = pair.match(/['"]([^'"]+)['"]\s*:\s*(.+)/);
      if (match) {
        let value = match[2].trim().replace(/['"]/g, '').replace(/,$/, '');
        // Try to convert to number if possible
        if (!isNaN(value) && value !== '') {
          value = parseFloat(value);
        }
        result[match[1]] = value;
      }
    });
  }
  return result;
}

// Funcție pentru generarea PHP
function generatePHP(products) {
  let php = `<?php
/**
 * Date produse pentru WordPress
 * Generat automat din src/data/allProducts.ts
 * Total produse: ${products.length}
 * Data generării: ${new Date().toISOString()}
 */

return array(
`;

  products.forEach((product, index) => {
    php += `    // ${product.name || 'Unknown Product'}\n`;
    php += `    array(\n`;
    php += `        'id' => '${escapePhp(product.id || '')}',\n`;
    php += `        'name' => '${escapePhp(product.name || '')}',\n`;
    php += `        'nameEn' => '${escapePhp(product.nameEn || '')}',\n`;
    php += `        'description' => '${escapePhp(product.description || '')}',\n`;
    php += `        'brand' => '${escapePhp(product.brand || '')}',\n`;
    php += `        'category' => '${escapePhp(product.category || '')}',\n`;
    php += `        'subcategory' => '${escapePhp(product.subcategory || '')}',\n`;
    
    if (product.priceFrom) {
      php += `        'priceFrom' => ${product.priceFrom},\n`;
    }
    if (product.priceRange) {
      php += `        'priceRange' => '${escapePhp(product.priceRange)}',\n`;
    }
    
    // Specifications
    if (product.specifications && Object.keys(product.specifications).length > 0) {
      php += `        'specifications' => array(\n`;
      Object.entries(product.specifications).forEach(([key, value]) => {
        if (typeof value === 'number') {
          php += `            '${escapePhp(key)}' => ${value},\n`;
        } else {
          php += `            '${escapePhp(key)}' => '${escapePhp(String(value))}',\n`;
        }
      });
      php += `        ),\n`;
    }
    
    // Images
    if (product.images && product.images.length > 0) {
      php += `        'images' => array(\n`;
      product.images.forEach(img => {
        php += `            '${escapePhp(img)}',\n`;
      });
      php += `        ),\n`;
    }
    
    if (product.mainImage) {
      php += `        'mainImage' => '${escapePhp(product.mainImage)}',\n`;
    }
    
    // Features
    if (product.features && product.features.length > 0) {
      php += `        'features' => array(\n`;
      product.features.forEach(feature => {
        php += `            '${escapePhp(feature)}',\n`;
      });
      php += `        ),\n`;
    }
    
    // Technical Data
    if (product.technicalData && Object.keys(product.technicalData).length > 0) {
      php += `        'technicalData' => array(\n`;
      Object.entries(product.technicalData).forEach(([key, value]) => {
        if (typeof value === 'number') {
          php += `            '${escapePhp(key)}' => ${value},\n`;
        } else {
          php += `            '${escapePhp(key)}' => '${escapePhp(String(value))}',\n`;
        }
      });
      php += `        ),\n`;
    }
    
    php += `        'availability' => '${escapePhp(product.availability || 'in-stock')}',\n`;
    
    if (product.isFeatured) {
      php += `        'isFeatured' => true,\n`;
    }
    
    // Tags
    if (product.tags && product.tags.length > 0) {
      php += `        'tags' => array(${product.tags.map(t => `'${escapePhp(t)}'`).join(', ')}),\n`;
    }
    
    if (product.weight) {
      php += `        'weight' => ${product.weight},\n`;
    }
    
    php += `    )${index < products.length - 1 ? ',' : ''}\n\n`;
  });

  php += `);\n`;
  
  return php;
}

function escapePhp(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Main execution
console.log('Citire fișier TypeScript...');
const products = extractProducts(tsContent);
console.log(`Găsite ${products.length} produse`);

console.log('Generare PHP...');
const phpContent = generatePHP(products);

// Scrie fișierul PHP
const phpOutputPath = path.join(__dirname, '../wordpress-export/plugin/data/products.php');
fs.writeFileSync(phpOutputPath, phpContent);
console.log(`Salvat: ${phpOutputPath}`);

// Generare și export CSV pentru WP All Import
function generateCSV(products) {
  const headers = ['id', 'name', 'nameEn', 'description', 'brand', 'category', 'subcategory', 'priceFrom', 'priceRange', 'mainImage', 'images', 'features', 'availability', 'isFeatured', 'tags', 'weight'];
  
  let csv = headers.join(',') + '\n';
  
  products.forEach(product => {
    const row = headers.map(header => {
      let value = product[header];
      if (Array.isArray(value)) {
        value = value.join('|');
      }
      if (typeof value === 'object' && value !== null) {
        value = JSON.stringify(value);
      }
      if (value === undefined || value === null) {
        value = '';
      }
      // Escape CSV
      value = String(value).replace(/"/g, '""');
      if (String(value).includes(',') || String(value).includes('"') || String(value).includes('\n')) {
        value = `"${value}"`;
      }
      return value;
    });
    csv += row.join(',') + '\n';
  });
  
  return csv;
}

const csvContent = generateCSV(products);
const csvOutputPath = path.join(__dirname, '../public/products-export.csv');
fs.writeFileSync(csvOutputPath, csvContent);
console.log(`Salvat CSV: ${csvOutputPath}`);

console.log('\nConversie completă!');
console.log(`- Total produse: ${products.length}`);
console.log(`- Fișier PHP: wordpress-export/plugin/data/products.php`);
console.log(`- Fișier CSV: public/products-export.csv`);

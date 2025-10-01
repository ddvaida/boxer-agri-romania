const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const archiver = require('archiver');

console.log('🚀 Building HeusTractors for WordPress + Elementor...\n');

// Step 1: Build React app
console.log('📦 Step 1: Building React application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ React build completed\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Create plugin directory structure
console.log('📁 Step 2: Creating plugin structure...');
const pluginDir = path.join(__dirname, 'wordpress-export', 'plugin');
const assetsDir = path.join(pluginDir, 'assets');

// Clean and create directories
fs.removeSync(path.join(assetsDir, 'css'));
fs.removeSync(path.join(assetsDir, 'js'));
fs.removeSync(path.join(assetsDir, 'images'));

fs.ensureDirSync(path.join(assetsDir, 'css'));
fs.ensureDirSync(path.join(assetsDir, 'js'));
fs.ensureDirSync(path.join(assetsDir, 'images'));

console.log('✅ Plugin structure created\n');

// Step 3: Copy built assets
console.log('📋 Step 3: Copying assets...');

// Copy CSS
const cssFiles = fs.readdirSync(path.join(__dirname, 'dist', 'assets'))
  .filter(file => file.endsWith('.css'));
cssFiles.forEach(file => {
  fs.copySync(
    path.join(__dirname, 'dist', 'assets', file),
    path.join(assetsDir, 'css', file)
  );
  console.log(`  ✓ Copied ${file}`);
});

// Copy JS
const jsFiles = fs.readdirSync(path.join(__dirname, 'dist', 'assets'))
  .filter(file => file.endsWith('.js'));
jsFiles.forEach(file => {
  fs.copySync(
    path.join(__dirname, 'dist', 'assets', file),
    path.join(assetsDir, 'js', file)
  );
  console.log(`  ✓ Copied ${file}`);
});

// Copy images from src/assets
const srcAssetsDir = path.join(__dirname, 'src', 'assets');
if (fs.existsSync(srcAssetsDir)) {
  fs.copySync(srcAssetsDir, path.join(assetsDir, 'images'));
  console.log('  ✓ Copied images from src/assets');
}

// Copy images from dist/assets (if any)
const distImgFiles = fs.readdirSync(path.join(__dirname, 'dist', 'assets'))
  .filter(file => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file));
distImgFiles.forEach(file => {
  fs.copySync(
    path.join(__dirname, 'dist', 'assets', file),
    path.join(assetsDir, 'images', file)
  );
  console.log(`  ✓ Copied ${file}`);
});

console.log('✅ Assets copied\n');

// Step 4: Wrap main JS for WordPress compatibility
console.log('🔧 Step 4: WordPress compatibility adaptations...');

const mainJsFile = jsFiles.find(f => f.includes('index'));
if (mainJsFile) {
  const mainJsPath = path.join(assetsDir, 'js', mainJsFile);
  let jsContent = fs.readFileSync(mainJsPath, 'utf8');
  
  // Wrap with WordPress integration
  const wrappedContent = `
(function(window, document) {
  'use strict';
  
  // Wait for DOM and React to be ready
  function initHeusTractors() {
    // Check if root element exists
    const roots = document.querySelectorAll('[data-component]');
    if (roots.length === 0) return;
    
    // Original React code
    ${jsContent}
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeusTractors);
  } else {
    initHeusTractors();
  }
})(window, document);
`;
  
  fs.writeFileSync(mainJsPath, wrappedContent);
  console.log('  ✓ JS wrapped for WordPress');
}

// Prefix CSS to prevent conflicts
const mainCssFile = cssFiles[0];
if (mainCssFile) {
  const mainCssPath = path.join(assetsDir, 'css', mainCssFile);
  let cssContent = fs.readFileSync(mainCssPath, 'utf8');
  
  // Prefix all CSS rules with .heustractors-widget
  const prefixedCss = cssContent.replace(
    /([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,
    (match, selector, ending) => {
      // Don't prefix if it's already prefixed or it's a special selector
      if (selector.includes('.heustractors-widget') || 
          selector.includes('@') || 
          selector.includes(':root') ||
          selector.includes('*')) {
        return match;
      }
      return `.heustractors-widget ${selector.trim()}${ending}`;
    }
  );
  
  fs.writeFileSync(mainCssPath, prefixedCss);
  console.log('  ✓ CSS prefixed to prevent conflicts');
}

console.log('✅ Adaptations completed\n');

// Step 5: Create ZIP archive
console.log('📦 Step 5: Creating ZIP archive...');

const outputDir = path.join(__dirname, 'wordpress-export', 'output');
fs.ensureDirSync(outputDir);

const zipPath = path.join(outputDir, 'heustractors-elementor-plugin.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✅ Plugin archived: ${archive.pointer()} bytes`);
  console.log(`📦 ZIP location: ${zipPath}\n`);
  
  console.log('🎉 Build completed successfully!\n');
  console.log('📋 Next steps:');
  console.log('1. Go to WordPress Admin → Plugins → Add New → Upload Plugin');
  console.log(`2. Upload: ${zipPath}`);
  console.log('3. Activate the plugin');
  console.log('4. Make sure Elementor is installed and activated');
  console.log('5. Open Elementor editor and find "HeusTractors" widgets category\n');
  console.log('📖 Full documentation: wordpress-export/ELEMENTOR-SETUP.md');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(pluginDir, 'heustractors-plugin');
archive.file(path.join(__dirname, 'wordpress-export', 'ELEMENTOR-SETUP.md'), { 
  name: 'ELEMENTOR-SETUP.md' 
});
archive.finalize();

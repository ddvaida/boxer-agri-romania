#!/usr/bin/env node

/**
 * Script pentru compilarea și pregătirea aplicației HeusTractors pentru WordPress
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const archiver = require('archiver');

const OUTPUT_DIR = 'wordpress-export';
const PLUGIN_DIR = path.join(OUTPUT_DIR, 'plugin');
const THEME_DIR = path.join(OUTPUT_DIR, 'theme');
const ZIP_FILE = 'heustractors-wordpress-package.zip';

console.log('🚀 Începe procesul de build pentru WordPress...\n');

// Compilează aplicația React
console.log('📦 Compilez aplicația React...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build React completat cu succes!\n');
} catch (error) {
  console.error('❌ Eroare la build-ul React:', error.message);
  process.exit(1);
}

// Creează structura de directoare
console.log('📁 Creez structura de directoare...');
fs.ensureDirSync(path.join(PLUGIN_DIR, 'assets', 'css'));
fs.ensureDirSync(path.join(PLUGIN_DIR, 'assets', 'js'));
fs.ensureDirSync(path.join(PLUGIN_DIR, 'assets', 'images'));
fs.ensureDirSync(path.join(THEME_DIR, 'js'));
fs.ensureDirSync(path.join(THEME_DIR, 'css'));

// Copiază fișierele build în plugin
console.log('📋 Copiez fișierele build...');

// Copiază CSS
const distCssDir = 'dist/assets';
if (fs.existsSync(distCssDir)) {
  fs.readdirSync(distCssDir).forEach(file => {
    if (file.endsWith('.css')) {
      fs.copySync(
        path.join(distCssDir, file),
        path.join(PLUGIN_DIR, 'assets', 'css', 'main.css')
      );
      console.log('  ✅ CSS copiat: main.css');
    }
  });
}

// Copiază JavaScript
if (fs.existsSync(distCssDir)) {
  fs.readdirSync(distCssDir).forEach(file => {
    if (file.endsWith('.js') && !file.includes('.map')) {
      fs.copySync(
        path.join(distCssDir, file),
        path.join(PLUGIN_DIR, 'assets', 'js', 'main.js')
      );
      console.log('  ✅ JS copiat: main.js');
    }
  });
}

// Copiază imaginile
if (fs.existsSync('src/assets')) {
  fs.copySync('src/assets', path.join(PLUGIN_DIR, 'assets', 'images'));
  console.log('  ✅ Imagini copiate');
}

// Creează fișierele temei WordPress
console.log('🎨 Creez fișierele temei WordPress...');

// index.php pentru temă
const indexPhp = `<?php
/**
 * Tema HeusTractors - Index Template
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        
        <?php if (have_posts()) : ?>
            
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                    </header>

                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>

        <?php else : ?>

            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title">Nu s-a găsit nimic</h1>
                </header>

                <div class="page-content">
                    <p>Se pare că nu am putut găsi ceea ce căutați.</p>
                </div>
            </section>

        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>`;

fs.writeFileSync(path.join(THEME_DIR, 'index.php'), indexPhp);

// header.php pentru temă
const headerPhp = `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="container">
            <nav class="main-navigation">
                <div class="site-logo">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                            <h1 class="site-title"><?php bloginfo('name'); ?></h1>
                        </a>
                    <?php endif; ?>
                </div>
                
                <button class="mobile-menu-toggle" type="button">
                    ☰
                </button>
                
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
            </nav>
        </div>
    </header>`;

fs.writeFileSync(path.join(THEME_DIR, 'header.php'), headerPhp);

// footer.php pentru temă
const footerPhp = `    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-widgets">
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-2')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-2'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-3')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-3'); ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Toate drepturile rezervate.</p>
            </div>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>

</body>
</html>`;

fs.writeFileSync(path.join(THEME_DIR, 'footer.php'), footerPhp);

// navigation.js pentru temă
const navigationJs = `/**
 * HeusTractors Theme Navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});`;

fs.writeFileSync(path.join(THEME_DIR, 'js', 'navigation.js'), navigationJs);

// Modifică fișierele build pentru integrarea cu WordPress
console.log('🔧 Adaptez fișierele pentru WordPress...');

const mainJsPath = path.join(PLUGIN_DIR, 'assets', 'js', 'main.js');
const mainCssPath = path.join(PLUGIN_DIR, 'assets', 'css', 'main.css');

// Adaugă wrapper pentru inițializarea WordPress
if (fs.existsSync(mainJsPath)) {
  let jsContent = fs.readFileSync(mainJsPath, 'utf8');
  
  // Adaugă verificare pentru WordPress
  const wpWrapper = `
// WordPress integration wrapper
(function() {
  function initHeusTractorsApp() {
    const root = document.getElementById('heustractors-root');
    if (root && typeof React !== 'undefined') {
      // Hide loading indicator
      const loading = root.querySelector('.heustractors-loading');
      if (loading) loading.style.display = 'none';
      
      // Initialize React app
      ${jsContent}
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeusTractorsApp);
  } else {
    initHeusTractorsApp();
  }
})();
`;
  
  fs.writeFileSync(mainJsPath, wpWrapper);
  console.log('  ✅ JavaScript adaptat pentru WordPress');
}

// Adaugă prefixe CSS pentru a evita conflictele
if (fs.existsSync(mainCssPath)) {
  let cssContent = fs.readFileSync(mainCssPath, 'utf8');
  
  // Prefixează toate regulile CSS cu #heustractors-root
  const prefixedCss = `
/* HeusTractors WordPress Integration Styles */
#heustractors-root {
  ${cssContent.replace(/([^}]+\{)/g, '#heustractors-root $1')}
}
`;
  
  fs.writeFileSync(mainCssPath, prefixedCss);
  console.log('  ✅ CSS adaptat pentru WordPress');
}

// Creează arhiva ZIP finală
console.log('📦 Creez arhiva ZIP finală...');

const output = fs.createWriteStream(ZIP_FILE);
const archive = archiver('zip', {
  zlib: { level: 9 } // Compresie maximă
});

output.on('close', function() {
  console.log(`\n🎉 Arhiva ${ZIP_FILE} creată cu succes!`);
  console.log(`📁 Dimensiune: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`\n📋 Următorii pași:`);
  console.log(`  1. Descarcă fișierul ${ZIP_FILE}`);
  console.log(`  2. Dezarhivează și copiază folderul plugin/ în wp-content/plugins/`);
  console.log(`  3. Copiază folderul theme/ în wp-content/themes/ (opțional)`);
  console.log(`  4. Activează plugin-ul din WordPress Admin`);
  console.log(`  5. Consultă INSTALL-GUIDE.md pentru configurare detaliată`);
  console.log(`\n✨ Gata! Site-ul HeusTractors este pregătit pentru WordPress!`);
});

output.on('error', function(err) {
  console.error('❌ Eroare la crearea arhivei:', err);
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('⚠️  Avertisment:', err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  console.error('❌ Eroare la arhivare:', err);
  throw err;
});

archive.pipe(output);

// Adaugă fișierele la arhivă
archive.directory(OUTPUT_DIR, false);

// Finalizează arhiva
archive.finalize();

// Creează README pentru instalare
const readmeContent = `# HeusTractors WordPress Package

Această arhivă conține toate fișierele necesare pentru instalarea site-ului HeusTractors în WordPress.

## Conținut

- \`plugin/\` - Plugin-ul WordPress HeusTractors
- \`theme/\` - Tema WordPress HeusTractors (opțională)
- \`INSTALL-GUIDE.md\` - Ghid detaliat de instalare

## Instalare Rapidă

1. Încărcați folderul \`plugin/heustractors-plugin\` în \`wp-content/plugins/\`
2. Activați plugin-ul din WordPress Admin
3. (Opțional) Încărcați folderul \`theme/heustractors\` în \`wp-content/themes/\`
4. Configurați permalink-urile în Settings → Permalinks

Pentru instrucțiuni detaliate, consultați INSTALL-GUIDE.md

## Suport

Email: support@heustractors.ro
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
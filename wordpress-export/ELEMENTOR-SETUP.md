# 🎯 HeusTractors - Integrare Elementor

Ghid complet pentru integrarea aplicației React HeusTractors cu Elementor.

---

## 📋 Cerințe

- WordPress 5.8+
- PHP 7.4+
- **Elementor** (gratuit sau Pro)
- Plugin HeusTractors instalat

---

## 🚀 Instalare Rapidă

### Pasul 1: Instalează Plugin-ul Principal

1. Mergi la `Plugins` → `Add New` → `Upload Plugin`
2. Încarcă fișierul `heustractors-plugin.zip`
3. Activează plugin-ul

### Pasul 2: Verifică Elementor

Asigură-te că **Elementor** este instalat și activat:
- Mergi la `Plugins` → `Add New`
- Caută "Elementor"
- Instalează și activează

### Pasul 3: Compilează React App

În folderul proiectului tau local:

```bash
npm install
npm run build
```

### Pasul 4: Copiază Fișierele Build

Copiază fișierele din `dist/assets/` în:
```
wordpress-export/plugin/assets/
├── css/
│   └── [copiază toate fișierele .css]
└── js/
    └── [copiază toate fișierele .js]
```

### Pasul 5: Încarcă Plugin-ul în WordPress

1. Comprimă folderul `wordpress-export/plugin/` ca `heustractors-plugin.zip`
2. Încarcă în WordPress via `Plugins` → `Add New` → `Upload Plugin`
3. Activează plugin-ul

---

## 🎨 Utilizare în Elementor

### Widget-uri Disponibile

După instalare, vei găsi categoria **"HeusTractors"** în panoul Elementor cu următoarele widget-uri:

#### 1. **HeusTractors Hero**
- **Icon:** Slider
- **Opțiuni:**
  - Title (text)
  - Subtitle (textarea)
  - Show Call to Action (yes/no)
- **Utilizare:** Perfect pentru header-ul paginii principale

#### 2. **HeusTractors Products**
- **Icon:** Products Grid
- **Opțiuni:**
  - Category (All/Tractors/Agricultural/Forestry/Grassland)
  - Number of Products (1-50)
  - Show Featured Only (yes/no)
- **Utilizare:** Afișează grila de produse

#### 3. **HeusTractors Boxer Series**
- **Icon:** Gallery Grid
- **Opțiuni:**
  - Series (AGF/NEX/DM/FM)
  - Show Series Selector (yes/no)
- **Utilizare:** Pagina detaliată a seriei Boxer

#### 4. **HeusTractors Inventory**
- **Icon:** Archive
- **Opțiuni:**
  - Filter Type (All/New/Used)
  - Show Filters (yes/no)
- **Utilizare:** Lista completă de inventar

#### 5. **HeusTractors Header**
- **Icon:** Header
- **Opțiuni:**
  - Show Search (yes/no)
  - Sticky Header (yes/no)
- **Utilizare:** Header-ul site-ului

#### 6. **HeusTractors Footer**
- **Icon:** Footer
- **Opțiuni:**
  - Show Social Links (yes/no)
  - Copyright Text
- **Utilizare:** Footer-ul site-ului

---

## 📖 Cum să Folosești Widget-urile

### Exemplu: Creare Pagină Home

1. **Creează o pagină nouă:**
   - WordPress Admin → Pages → Add New
   - Titlu: "Home"
   - Click "Edit with Elementor"

2. **Adaugă Header:**
   - Drag & drop "HeusTractors Header" din categoria HeusTractors
   - Configurează opțiunile (Show Search: Yes, Sticky: Yes)

3. **Adaugă Hero Section:**
   - Drag & drop "HeusTractors Hero"
   - Personalizează Title și Subtitle
   - Activează Show CTA

4. **Adaugă Produse:**
   - Drag & drop "HeusTractors Products"
   - Selectează Category: "Featured"
   - Set Number: 6

5. **Adaugă Footer:**
   - Drag & drop "HeusTractors Footer"
   - Personalizează Copyright Text

6. **Publică:**
   - Click "Publish" în Elementor

---

## 🔧 Configurare Avansată

### Personalizare Widget-uri

Poți extinde widget-urile editând fișierele din:
```
wordpress-export/plugin/elementor-widgets/
```

### Adăugare Widget Nou

1. Creează fișier nou în `elementor-widgets/`:
```php
<?php
class Elementor_HeusTractors_Custom_Widget extends Elementor_HeusTractors_Base {
    public function get_name() {
        return 'heustractors_custom';
    }
    
    public function get_title() {
        return __('Custom Widget', 'heustractors');
    }
    
    // ... rest of implementation
}
```

2. Înregistrează în `class-elementor-integration.php`:
```php
$widgets = [
    // ... existing widgets
    'custom-widget.php' => 'Elementor_HeusTractors_Custom_Widget',
];
```

---

## 🎯 Best Practices

### 1. **Organizare Pagini**
- Folosește Header/Footer widget-uri pe toate paginile
- Grupează widget-urile logic în secțiuni Elementor
- Folosește Elementor Templates pentru conținut reutilizabil

### 2. **Performance**
- Nu adăuga prea multe widget-uri pe aceeași pagină
- Folosește caching (WP Rocket, W3 Total Cache)
- Optimizează imaginile înainte de încărcare

### 3. **Design Consistent**
- Folosește Elementor Theme Styles pentru culori globale
- Definește font-uri globale în Elementor
- Creează template-uri pentru secțiuni repetitive

---

## 🐛 Troubleshooting

### Widget-urile nu apar în Elementor

**Cauză:** Elementor nu este instalat sau plugin-ul nu este activat.

**Soluție:**
1. Verifică dacă Elementor este instalat: `Plugins` → caută "Elementor"
2. Verifică dacă plugin-ul HeusTractors este activat
3. Clear cache: `Elementor` → `Tools` → `Regenerate CSS`

### Widget-urile se încarcă gol

**Cauză:** Fișierele React (JS/CSS) nu sunt încărcate corect.

**Soluție:**
1. Verifică dacă fișierele există în `wp-content/plugins/heustractors-plugin/assets/`
2. Verifică console-ul browser (F12) pentru erori JavaScript
3. Recompilează React app: `npm run build`
4. Re-încarcă fișierele în plugin

### Stilurile nu se aplică

**Cauză:** Conflict între stilurile Elementor și React.

**Soluție:**
1. Adaugă `!important` la stilurile critice din React
2. Folosește prefix-uri specifice pentru clase CSS
3. Încarcă CSS-ul React cu prioritate mare:
```php
wp_enqueue_style('heustractors-main', $css_url, [], $version, 'all');
```

### Widget-urile nu se actualizează

**Cauză:** Cache-ul Elementor.

**Soluție:**
1. `Elementor` → `Tools` → `Regenerate CSS`
2. Clear WordPress cache
3. Clear browser cache (Ctrl+Shift+R)

---

## 🔄 Actualizare Plugin

### Când actualizezi React App:

1. **Recompilează:**
```bash
npm run build
```

2. **Copiază assets noi:**
```bash
cp -r dist/assets/* wordpress-export/plugin/assets/
```

3. **Actualizează versiunea în plugin:**
```php
// În heustractors-plugin.php
// Version: 1.1.0  (incrementează)
```

4. **Re-încarcă în WordPress:**
- Dezactivează plugin-ul
- Șterge plugin-ul vechi
- Încarcă plugin-ul nou
- Activează

5. **Clear cache Elementor:**
- `Elementor` → `Tools` → `Regenerate CSS & Data`

---

## 📞 Suport

### Resurse:
- **Elementor Docs:** https://elementor.com/help/
- **WordPress Codex:** https://codex.wordpress.org/
- **React Docs:** https://react.dev/

### Contact:
Pentru probleme tehnice, deschide un ticket de suport.

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✅ 6 widget-uri Elementor
- ✅ Integrare completă React + Elementor
- ✅ Opțiuni configurabile pentru fiecare widget
- ✅ Categorie custom în Elementor
- ✅ Suport pentru live preview în Elementor Editor

---

**🎉 Gata! Acum poți crea pagini WordPress cu Elementor folosind componentele React!**

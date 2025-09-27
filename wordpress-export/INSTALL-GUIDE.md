# Ghid de Instalare HeusTractors pentru WordPress

## Cerințe Sistem

- WordPress 5.0 sau mai nou
- PHP 7.4 sau mai nou
- MySQL 5.6 sau mai nou
- Server web (Apache/Nginx)

## Pasul 1: Instalarea Plugin-ului

1. **Încărcarea fișierelor plugin**
   ```
   wp-content/plugins/heustractors-plugin/
   ├── heustractors-plugin.php
   ├── templates/
   │   └── app-template.php
   └── data/
       └── products.php
   ```

2. **Activarea plugin-ului**
   - Accesați WordPress Admin → Plugins
   - Găsiți "HeusTractors Site" și activați-l

## Pasul 2: Instalarea Temei (Opțional)

1. **Încărcarea fișierelor temei**
   ```
   wp-content/themes/heustractors/
   ├── style.css
   ├── functions.php
   ├── index.php
   ├── header.php
   ├── footer.php
   └── js/
       └── navigation.js
   ```

2. **Activarea temei**
   - Accesați WordPress Admin → Appearance → Themes
   - Activați tema "HeusTractors"

## Pasul 3: Configurarea Build-ului React

1. **Compilarea aplicației React pentru producție**
   ```bash
   npm run build
   ```

2. **Copierea fișierelor build**
   - Copiați conținutul folderului `dist/` în:
   ```
   wp-content/plugins/heustractors-plugin/assets/
   ├── css/
   │   └── main.css
   └── js/
       └── main.js
   ```

## Pasul 4: Configurarea URL-urilor

1. **Rewrite Rules**
   - Plugin-ul adaugă automat reguli pentru URL-urile custom
   - Accesați Settings → Permalinks și salvați pentru a reîmprospăta regulile

2. **URL-uri disponibile**
   - `/utilaje-agricole/` - Pagina principală utilaje
   - `/utilaje-agricole/cultivarea-pajistilor/` - Cultivarea pajiștilor
   - `/utilaje-agricole/prelucrarea-solului/` - Prelucrarea solului
   - `/tractoare/` - Pagina tractoare
   - `/produs/{id}/` - Pagina produs individual
   - `/serie/{series}/` - Pagina serie produse

## Pasul 5: Configurarea SEO

1. **Instalarea Yoast SEO (Recomandat)**
   ```bash
   wp plugin install wordpress-seo --activate
   ```

2. **Configurarea meta tags**
   - Plugin-ul adaugă automat meta tags și structured data
   - Configurați titlurile și descrierile în Yoast SEO

## Pasul 6: Configurarea Formularelor de Contact

1. **Configurarea SMTP (Recomandat)**
   - Instalați un plugin SMTP pentru email-uri fiabile
   - Configurați setările SMTP în WordPress

2. **Testarea formularelor**
   - Testați formularul de contact din aplicație
   - Verificați că email-urile sunt trimise corect

## Pasul 7: Performance și Cache

1. **Plugin-uri recomandate pentru performance**
   - W3 Total Cache sau WP Rocket
   - Autoptimize pentru optimizarea CSS/JS
   - Smush pentru optimizarea imaginilor

2. **Configurarea CDN (Opțional)**
   - CloudFlare sau MaxCDN pentru livrarea statică

## Pasul 8: Securitate

1. **Plugin-uri de securitate recomandate**
   - Wordfence Security
   - iThemes Security

2. **Backup-uri regulate**
   - UpdraftPlus pentru backup-uri automate

## Configurare Avansată

### Personalizarea Design-ului

1. **Customizer WordPress**
   - Appearance → Customize → HeusTractors Colors
   - Setați culorile principale ale site-ului

2. **Contact Information**
   - Appearance → Customize → Contact Information
   - Configurați telefonul, email-ul și adresa

### API Endpoints Custom

Plugin-ul oferă endpoint-uri REST API:

```
GET /wp-json/heustractors/v1/products
GET /wp-json/heustractors/v1/product/{id}
```

### Shortcode-uri Disponibile

```php
[heustractors_app page="home"]
[heustractors_app page="utilaje-agricole"]
[heustractors_app page="tractoare"]
```

## Troubleshooting

### Problemă: Aplicația React nu se încarcă

**Soluții:**
1. Verificați că fișierele JS/CSS sunt încărcate corect
2. Verificați console-ul pentru erori JavaScript
3. Asigurați-vă că plugin-ul este activat

### Problemă: URL-urile custom returnează 404

**Soluții:**
1. Accesați Settings → Permalinks și salvați
2. Verificați că regulile rewrite sunt activate
3. Verificați configurația serverului web

### Problemă: Email-urile nu sunt trimise

**Soluții:**
1. Instalați un plugin SMTP
2. Verificați configurația email a serverului
3. Testați cu un plugin de test email

## Suport și Actualizări

Pentru suport tehnic și actualizări:
- Email: support@heustractors.ro
- Documentație: [link către documentația completă]

## Changelog

### v1.0.0
- Versiunea inițială
- Integrare completă React cu WordPress
- SEO optimization
- Mobile responsive design
- Formulare de contact funcționale
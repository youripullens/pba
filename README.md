# PBA Kwaliteitsborging

Een professionele website voor PBA Kwaliteitsborging, uw partner voor kwaliteitsborging in de bouw onder de nieuwe Wet Kwaliteitsborging voor het bouwen.

## Project Beschrijving

Deze repository bevat de bronbestanden voor de website van PBA Kwaliteitsborging, een gecertificeerd kwaliteitsborger geregistreerd bij TloKB. De website is ontwikkeld om informatie te verstrekken over kwaliteitsborging in de bouw, specifiek gericht op nieuwbouwprojecten in gevolgklasse 1 volgens de nieuwe Wet Kwaliteitsborging voor het bouwen die per 1 juli 2023 in werking is getreden.

## Bedrijfsgegevens

- **Eigenaar**: Ing. Misha Pullens
- **Functie**: Directeur en Kwaliteitsborger
- **Bedrijf**: PBA Kwaliteitsborging
- **KvK-nummer**: 68105886
- **Website**: [pba-kb.nl](https://pba-kb.nl)
- **Email**: info@pba-kwaliteitsborging.nl
- **Telefoon**: +31 (0) 6 54 91 65 08

## Kwalificaties en Certificeringen

- Gecertificeerd Kwaliteitsborger onder het instrument Kwaliteitsborging Garantiewaarborg (KGW)
- Officieel geregistreerd bij TloKB voor alle toepassingsgebieden in gevolgklasse 1:
    - 1A: Eengezinswoningen
    - 1B: Woonboten
    - 1C: Vakantiehuisjes
    - 1D: Bedrijfsgebouwen (hoofdgebouw)
    - 1E: Bedrijfsgebouwen (nevenfunctie)
    - 1F: Fiets- en voetgangersbruggen
    - 1G: Overige bouwwerken
- [Officiële registratie in TloKB register](https://register.tlokb.nl/kb/kwaliteitsborger/pba-kwaliteitsborging)

## Projectstructuur

```
pba/
├── .htaccess               # Apache-configuratie voor caching en compressie
├── .idea/                  # IntelliJ IDEA configuratiebestanden
├── CNAME                   # GitHub Pages domeinverwijzing
├── LICENSE                 # Apache 2.0 licentie
├── README.md               # Dit bestand
├── about/                  # Over Ons pagina
│   └── index.html
├── content/                # Statische bestanden
│   ├── css/                # Stylesheets
│   │   └── style.css       # Hoofdstijlbestand
│   ├── img/                # Afbeeldingen
│   │   ├── favicon.ico     # Favicon
│   │   ├── home-page-hero.webp # Hero image willekeurige bouwplaats
│   │   └── Misha-Pullens.webp # Profielfoto Misha Pullens
│   └── js/                 # JavaScript-bestanden
│       └── script.js       # Script voor email-bescherming
├── index.html              # Homepage met diensten en contactformulier
├── privacy-policy/         # Privacyverklaring pagina
│   └── index.html
├── terms-and-conditions/   # Algemene voorwaarden pagina
│   └── index.html
├── bedankt.html            # Bedankt-pagina na formulier inzending
├── robots.txt              # Instructies voor zoekmachines
└── sitemap.xml             # XML-sitemap voor zoekmachines
```

## Technologieën

- HTML5
- CSS3
- JavaScript (minimaal)
- Web3Forms (voor contactformulier)
- Google Analytics (voor website-analyse)
- GitHub Pages (hosting)
- CookieChimp (cookietoestemming)

## Pagina's

1. **Homepage** (`/index.html`)
    - Introductie tot PBA Kwaliteitsborging
    - Diensten: Kwaliteitsborging voor nieuwbouwprojecten onder WKB
    - FAQ-sectie over Wet Kwaliteitsborging
    - Contactformulier (Web3Forms)
    - Schema.org gestructureerde data voor betere SEO

2. **Over Ons** (`/about/index.html`)
    - Profiel van Ing. Misha Pullens
    - Kwalificaties en certificeringen
    - Werkervaring en opleiding
    - Filosofie over kwaliteitsborging

3. **Privacyverklaring** (`/privacy-policy/index.html`)
    - Gedetailleerde informatie over gegevensverwerking
    - Cookiebeleid
    - Rechten van bezoekers
    - Beveiligingsmaatregelen

4. **Algemene Voorwaarden** (`/terms-and-conditions/index.html`)
    - Gebruiksvoorwaarden voor de website
    - Intellectueel eigendom
    - Aansprakelijkheid
    - Toepasselijk recht

5. **Bedankt Pagina** (`/bedankt.html`)
    - Bevestigingspagina na het versturen van het contactformulier

## Optimalisaties

De website bevat verschillende optimalisaties:

- Snelle laadtijden door CSS/JS optimalisatie
- Responsive design voor alle schermformaten
- Safari-specifieke CSS-fixes
- Cache-controle via .htaccess
- GZIP-compressie voor snellere overdracht
- Geoptimaliseerde afbeeldingen (WebP-formaat)
- Gestructureerde data voor SEO
- Local Business Schema.org markup
- FAQPage Schema.org markup
- Google Analytics integratie met privacy-vriendelijke instellingen

## SEO-optimalisatie

- Meta-tags en beschrijvingen voor alle pagina's
- Open Graph-tags voor sociale media
- Canonieke URL's
- Sitemap.xml en robots.txt
- Gestructureerde Schema.org-data
- FAQ-sectie voor featured snippets in Google
- Semantische HTML-structuur
- Email bescherming via JavaScript

## Lokaal Ontwikkelen

Om dit project lokaal te ontwikkelen:

1. Clone de repository:
   ```
   git clone https://github.com/yourusername/pba.git
   cd pba
   ```

2. Open de bestanden in je favoriete code editor

3. Start een lokale webserver. Bijvoorbeeld met Python:
   ```
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

4. Open je browser en ga naar `http://localhost:8000`

## Deployment

De website is live op [pba-kb.nl](https://pba-kb.nl) en wordt gehost via GitHub Pages. Voor deployment:

1. Push wijzigingen naar de main-branch
2. GitHub Pages zal automatisch de website updaten

## Contactformulier

Het contactformulier maakt gebruik van Web3Forms voor veilige en betrouwbare verwerking van formulierinzendingen. Het formulier is geïntegreerd in `index.html` met een redirect naar `bedankt.html` na succesvolle inzending. Om het formulier aan te passen, update de HTML-code en de access key indien nodig.

## Toekomstige Verbeteringen

### Content Uitbreiding & Keyword Strategie
- [ ] Toevoegen van een blog/nieuws-sectie met artikelen over WKB-updates, case studies en compliance issues
- [ ] Ontwikkelen van service-specifieke landingspagina's voor elke gevolgklasse 1 categorie (1A-1G)
- [ ] Uitbreiden van de FAQ-sectie met specifieke vragen die potentiële klanten zouden kunnen zoeken
- [ ] Creëren van downloadbare gidsen en checklists voor bouwprojecten onder de WKB

### Technische SEO Verbeteringen
- [ ] Implementeren van additionele gestructureerde data (BreadcrumbList schema, uitgebreider Person schema)
- [ ] Verbeteren van Core Web Vitals (LCP, CLS, FID) via performance optimalisaties
- [ ] Toevoegen van breadcrumb navigatie op alle pagina's
- [ ] Optimaliseren van afbeeldingen met beschrijvende, keyword-rijke alt-tekst

### Lokale SEO Optimalisatie
- [ ] Creëren van regio-specifieke content voor gebieden in Noord-Holland
- [ ] Toevoegen van een locatie/servicegebied pagina met een embedded Google Map
- [ ] Optimaliseren van Google Bedrijfsprofiel met consistente NAP-informatie
- [ ] Registreren in Nederlandse bouw- en kwaliteitsborgingsdirectories

### Link Building Strategie
- [ ] Samenwerken met gerelateerde bedrijven in de bouwsector
- [ ] Creëren van deelbare infographics over het WKB-proces
- [ ] Gastbijdragen leveren aan bouwsectorwebsites in Nederland
- [ ] Aansluiten bij en participeren in brancheorganisaties met website vermeldingen

### Gebruikerservaring Verbeteringen
- [ ] Toevoegen van meer strategische CTA's in de content
- [ ] Implementeren van een zoekfunctie voor de website
- [ ] Toevoegen van testimonials van tevreden klanten
- [ ] Verbeterde mobiele navigatie voor kleinere schermen

### Analytics & Metingen
- [ ] Implementeren van doeltracking voor belangrijke gebruikersacties
- [ ] Creëren van aangepaste dashboards om SEO-prestaties te monitoren

### Taalselectie
- [ ] Implementeren van meertalige ondersteuning (Nederlands/Engels)

## Licentie

Dit project is gelicenseerd onder de Apache License 2.0 - zie het [LICENSE](LICENSE) bestand voor details.

Copyright 2025 Youri Pullens
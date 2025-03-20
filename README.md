# PBA-Kwaliteitsborging

Een professionele website voor PBA-Kwaliteitsborging, uw partner voor kwaliteitsborging in de bouw.

## Project Beschrijving

Dit project bevat de broncode voor de website van PBA-Kwaliteitsborging, een bedrijf gespecialiseerd in kwaliteitsborging voor bouwprojecten onder de nieuwe Wet Kwaliteitsborging voor het bouwen. De website is ontwikkeld om informatie te verstrekken over de diensten, kwalificaties en contactmogelijkheden van het bedrijf.

## Eigenaar

- **Eigenaar**: Ing. Misha Pullens
- **Bedrijf**: PBA-Kwaliteitsborging
- **KvK-nummer**: 68105886

## Projectstructuur

```
pba/
├── about/                # Over Ons pagina
│   └── index.html
├── content/              # Statische bestanden
│   ├── css/              # Stylesheets
│   │   └── style.css
│   └── img/              # Afbeeldingen (niet meegeleverd in repository)
├── privacy-policy/       # Privacyverklaring pagina
│   └── index.html
├── .idea/                # IntelliJ IDEA configuraties
├── LICENSE               # Apache 2.0 licentie
├── README.md             # Dit bestand
└── index.html            # Homepage
```

## Technologieën

- HTML5
- CSS3
- Google Forms (voor contactformulier)

## Pagina's

1. **Homepage** (`/index.html`): Hoofdpagina met diensten en contactformulier
2. **Over Ons** (`/about/index.html`): Informatie over de eigenaar, kwalificaties en ervaring
3. **Privacyverklaring** (`/privacy-policy/index.html`): Wettelijke informatie over gegevensverwerking

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
   # Als je Python 3 hebt
   python -m http.server
   
   # Als je Python 2 hebt
   python -m SimpleHTTPServer
   ```

4. Open je browser en ga naar `http://localhost:8000`

## Deployment

De website kan worden gedeployed naar elke standaard webhosting-dienst die HTML, CSS en afbeeldingen ondersteunt. Upload simpelweg alle bestanden naar de root directory van je webserver.

## Contactformulier

Het contactformulier maakt gebruik van Google Forms. Het formulier is geïntegreerd via een iframe. Om het formulier aan te passen, update de iframe-URL in `index.html`.

## TODO

- [ ] Professionele afbeeldingen toevoegen
- [ ] SEO optimalisatie
- [ ] Responsiveness verbeteren voor kleine schermen
- [ ] Plaats een echte inspirerende quote in de "Mijn Filosofie" sectie

## Licentie

Dit project is gelicenseerd onder de Apache License 2.0 - zie het [LICENSE](LICENSE) bestand voor details.

Copyright 2025 Youri Pullens

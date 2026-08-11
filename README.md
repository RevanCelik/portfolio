# Portfolio – Revan Celik

Persönliches Portfolio eines Frontend Developers. Die Website stellt meine Kenntnisse, ausgewählte Projekte und meine Arbeitsweise vor und bietet eine direkte Kontaktmöglichkeit.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)](https://www.php.net/)

## Features

- Responsives Design für Desktop, Tablet und Smartphone
- Zweisprachige Inhalte auf Deutsch und Englisch
- Animiertes mobiles Navigationsmenü
- Scroll-Animationen mit Berücksichtigung von `prefers-reduced-motion`
- Vorstellung meiner Skills und Projekte
- Kontaktformular mit client- und serverseitiger Validierung
- Datenschutz- und Impressumsseiten

## Vorgestellte Projekte

### Join

Ein vom Kanban-System inspirierter Task-Manager. Aufgaben lassen sich per Drag-and-drop organisieren, Benutzern zuweisen und in Kategorien verwalten.

**Technologien:** HTML, CSS, JavaScript, Firebase Authentication und Firebase Realtime Database

- [Live-Demo](https://join.revan-celik.de)
- [GitHub-Repository](https://github.com/Join-groupwork/join)

### El Pollo Loco

Ein objektorientiertes Jump-and-Run-Spiel, in dem Pepe Münzen und Salsa-Flaschen sammelt und gegen das verrückte Huhn antritt.

**Technologien:** HTML, CSS und JavaScript

- [Live-Demo](https://el-pollo-loco.revan-celik.de)
- [GitHub-Repository](https://github.com/RevanCelik/el_pollo_loco)

## Technologien

- HTML5 mit semantischer Seitenstruktur
- CSS3 mit responsiven Breakpoints und Animationen
- Vanilla JavaScript für Navigation, Sprachwechsel, Formularlogik und Scroll-Effekte
- PHP für den serverseitigen E-Mail-Versand
- Git und GitHub zur Versionsverwaltung

## Projektstruktur

```text
portfolio/
├── fonts/        # Lokale Schriftarten
├── img/          # Bilder und SVG-Assets
├── js/           # Navigation, Übersetzungen, Formular und Animationen
├── legal/        # Impressum und Datenschutzerklärung
├── php/          # Backend des Kontaktformulars
├── style/        # Zusätzliche und responsive Stylesheets
├── index.html    # Hauptseite
└── style.css     # Zentrales Stylesheet
```

## Lokal ausführen

Für die statischen Bereiche ist keine Installation erforderlich. Repository klonen und `index.html` im Browser öffnen:

```bash
git clone https://github.com/RevanCelik/portfolio.git
cd portfolio
```

Für einen lokalen Webserver inklusive PHP-Kontaktendpunkt wird PHP benötigt:

```bash
php -S localhost:8000
```

Anschließend ist die Website unter [http://localhost:8000](http://localhost:8000) erreichbar.

> Hinweis: Der tatsächliche E-Mail-Versand des Kontaktformulars setzt einen korrekt eingerichteten Mailserver und eine passende Absenderadresse in `php/contact_form_mail.php` voraus.

## Kontakt

- E-Mail: [info@revan-celik.de](mailto:info@revan-celik.de)
- GitHub: [RevanCelik](https://github.com/RevanCelik)

---

Entwickelt von Revan Celik.

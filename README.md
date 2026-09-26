# ONG Anjos da Cozinha

A responsive and accessible single-page application for a fictional NGO, built as a practical front-end project.

## 📌 About
This project is a single-page application (SPA) designed to showcase the work and mission of a fictional non-governmental organization (NGO). It focuses on modern front-end development practices, including semantic HTML, a custom design system, client-side routing, and data persistence.

## ✨ Features
- **Single Page Application (SPA)** – Client-side routing via Fetch API, dynamically injecting HTML fragments into the DOM without full page reloads
- **Design System** – Centralized CSS custom properties (variables) for colors, typography scale, and spacing
- **Responsive Layout** – Hybrid layout using a 12-column CSS Grid system with 5 breakpoints, combined with Flexbox for component-level alignment
- **Dynamic Templates** – Project cards generated programmatically from a JavaScript data array
- **Form Validation** – Native HTML5 validation (pattern, required) combined with custom real-time JavaScript validation and visual feedback
- **Data Persistence** – Form submissions saved to localStorage (JSON serialized)
- **Visual Feedback** – Interactive elements with hover/focus/active states, transitions, badges, alerts, and modal components
- **Semantic HTML** – Proper use of landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`, `<fieldset>`, `<legend>`)
- **Accessibility** – Sufficient color contrast (tested via WebAIM), keyboard navigation support, and descriptive alt text for images
- **Responsive Images** – `<picture>` element with format fallback (JPG/PNG)

## 🛠️ Technologies
| Technology | Usage |
|---|---|
| HTML5 | Structure and semantics |
| CSS3 | Design system, Flexbox & Grid layout, responsive design |
| JavaScript (ES6 Modules) | SPA routing, DOM manipulation, form handling, localStorage |
| Day.js | Date formatting |

## 📁 Project Structure

ong-solidaria/
├── index.html
├── html/
│ ├── projetos.html
│ └── cadastro.html
├── css/
│ └── style.css
├── js/
│ ├── main.js
│ ├── router.js
│ ├── menu.js
│ ├── templates.js
│ ├── formulario.js
│ └── storage.js
├── imagens/
│ ├── equipe.jpg
│ └── equipe.png
└── README.md


## 🚀 How to Run
No build step required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (recommended, required for Fetch API to work correctly)
npx serve .
# or
python -m http.server
```

> **Note:** Since this project uses the Fetch API to load HTML fragments dynamically, opening `index.html` directly (via `file://`) may cause routing to fail in some browsers due to CORS restrictions. Running a local server (e.g., VS Code's Live Server extension) is recommended.

## ♿ Accessibility
- Semantic HTML5 elements used throughout
- Keyboard-navigable interactive elements with visible `:focus` states
- Color contrast ratios tested and validated (WebAIM Contrast Checker)
- Descriptive alt attributes on all images
- Grouped form fields using `<fieldset>` and `<legend>` for screen reader context
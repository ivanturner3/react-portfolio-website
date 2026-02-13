# React Portfolio Website

A modern, responsive personal portfolio website built with React. This single-page application showcases professional experience, technical skills, and projects with a polished user interface and smooth interactions.

## 🌟 Overview

This portfolio website serves as a comprehensive professional showcase featuring:
- **Hero Section**: Eye-catching introduction with animated elements
- **About Section**: Tabbed interface presenting professional and personal background
- **Skills Section**: Collapsible categories displaying technical competencies
- **Projects Section**: Filterable portfolio with detailed project information
- **Contact Section**: Functional contact form with EmailJS integration and direct contact options
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Theme Toggle**: Dark/light mode with persistent user preference

## 🏗️ Architecture & Technology Stack

### Core Technologies
- **React 18.2.0**: Modern React with concurrent features
- **React Router DOM 6.11.0**: Client-side routing for resume viewer
- **Create React App**: Build tooling and development server

### Key Dependencies
- **react-icons 4.8.0**: Icon library (Material Design, Bootstrap, Font Awesome)
- **emailjs-com 3.2.0**: Email service integration for contact form
- **swiper 9.1.1**: Touch-enabled slider (if needed for future enhancements)

### Styling Approach
- **Pure CSS**: No CSS frameworks, custom-built responsive design
- **CSS Custom Properties**: Theme management via CSS variables
- **BEM-inspired Naming**: Organized, maintainable CSS class structure

## 📁 Project Structure

```
react-portfolio-website/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── index.js               # Application entry point, router configuration
│   ├── index.css              # Global styles, CSS variables, responsive breakpoints
│   ├── App.jsx                # Main app component, section orchestration
│   ├── assets/                # Images, PDFs, and media files
│   └── components/
│       ├── Resume.jsx         # PDF resume viewer component
│       ├── about/
│       │   ├── About.jsx      # Tabbed about section
│       │   └── about.css
│       ├── contact/
│       │   ├── Contact.jsx    # Contact form with EmailJS
│       │   └── contact.css
│       ├── footer/
│       │   ├── Footer.jsx     # Site footer with navigation
│       │   └── footer.css
│       ├── header/
│       │   ├── Header.jsx     # Hero section
│       │   ├── CTA.jsx        # Call-to-action buttons
│       │   ├── HeaderSocials.jsx  # Social media links
│       │   ├── ThemeToggle.jsx    # Dark/light mode toggle
│       │   └── header.css
│       ├── nav/
│       │   ├── Nav.jsx        # Sticky navigation with scroll tracking
│       │   └── nav.css
│       ├── projects/
│       │   ├── Projects.jsx   # Filterable project showcase
│       │   └── projects.css
│       └── skills/
│           ├── Skills.jsx     # Collapsible skill categories
│           └── skills.css
├── package.json
└── README.md
```

## 🎨 Design Features

### Theme System
The website implements a sophisticated dual-theme system:
- **CSS Variables**: All colors defined as custom properties in `:root`
- **Data Attribute Toggle**: `[data-theme="light"]` selector overrides variables
- **LocalStorage Persistence**: User preference saved across sessions
- **Smooth Transitions**: All theme changes animated with cubic-bezier easing

### Responsive Design Strategy
**Mobile-First Approach** with three breakpoints:
- **Large Screens (>1024px)**: 75% container width, full features
- **Medium Screens (≤1024px)**: 86% container width, optimized spacing
- **Small Screens (≤600px)**: 90% container width, stacked layouts

### Navigation System
**Intelligent Sticky Navigation** with advanced features:
- **Scroll Tracking**: Automatically highlights current section based on viewport position
- **Smooth Scrolling**: Custom scroll behavior with offset for sticky header
- **Animated Indicator**: CSS custom property (`--active-index`) drives animation
- **Footer Detection**: Uses IntersectionObserver to hide nav when footer is visible
- **Debounced Updates**: Prevents scroll tracking during programmatic navigation

## 🔧 Key Components Explained

### App.jsx - Application Container
The root component that renders all sections in a specific order, creating the single-page experience. No routing logic here—just layout orchestration.

### index.js - Entry Point & Router
Configures React Router for two routes:
- `/` → Main portfolio (App component)
- `/resume` → PDF resume viewer (Resume component)

Uses React 18's `createRoot` API for concurrent rendering features.

### Header Component
**Hero section** with multiple sub-components:
- **ThemeToggle**: Dark/light mode switcher with localStorage
- **CTA**: Device-aware resume link (download on mobile, viewer on desktop)
- **HeaderSocials**: Positioned social media icons
- **Scroll Indicator**: Animated prompt to explore content

### Nav Component
**Most complex component** featuring:
- **State Management**: Tracks active link, scroll state, footer visibility
- **Effects**:
  - `useEffect`: Animation timing for active indicator
  - `useEffect`: IntersectionObserver for footer detection
  - `useEffect`: Scroll position tracking
- **Smart Scroll**: Calculates proper offset accounting for sticky positioning

### About Component
**Tabbed interface** with local state management:
- Two tabs: Professional Background & Personal Life
- Different images per tab
- Seamless content switching

### Skills Component
**Accordion-style categories** with responsive behavior:
- **useLayoutEffect**: Sets initial state before paint (prevents flash)
- **Desktop**: All sections expanded by default
- **Mobile**: All sections collapsed by default
- Icons indicate expand/collapse state

### Projects Component
**Advanced filtering system**:
- **Multi-dimensional Filters**: Category (Frontend/Backend/Full Stack) + Visibility (Public/Private)
- **Mutually Exclusive Groups**: Only one filter active per group
- **Dynamic Rendering**: Filters applied client-side, instant updates
- **Rich Metadata**: Each project includes tech stack, GitHub link, impact statement

### Contact Component
**EmailJS Integration**:
- **Form Validation**: HTML5 required attributes
- **Loading State**: Disabled button during submission
- **Success/Error Feedback**: User-friendly messages
- **Auto-clear Messages**: Success message disappears after 5 seconds
- **Dual Layout**: Form + direct contact cards (email, phone, LinkedIn)

### Footer Component
- **Dynamic Copyright**: JavaScript `Date` object for current year
- **Duplicate Navigation**: Easy access to all sections
- **Social Links**: Consistent with header
- **Back to Top**: Smooth scroll to hero section

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ivanturner3/react-portfolio-website.git
   cd react-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates optimized production build in `build/` folder.

## 🔑 Configuration

### EmailJS Setup
To enable the contact form, you'll need your own EmailJS credentials:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Update credentials in `src/components/contact/Contact.jsx`:
   ```javascript
   emailJS.sendForm(
     'YOUR_SERVICE_ID',      // Replace service_o9o48mh
     'YOUR_TEMPLATE_ID',     // Replace template_as72izh
     form.current,
     'YOUR_PUBLIC_KEY'       // Replace AVYyjkInKhv2oo4lF
   )
   ```

### Customization

**Personal Information**: Update content in component files:
- Name, title: `src/components/header/Header.jsx`
- About text: `src/components/about/About.jsx`
- Skills: `src/components/skills/Skills.jsx`
- Projects: `src/components/projects/Projects.jsx` (projects array)
- Contact info: `src/components/contact/Contact.jsx`
- Social links: All social components (HeaderSocials, Footer)

**Theme Colors**: Modify CSS variables in `src/index.css`:
```css
:root {
    --color-primary: #00d4ff;      /* Brand color */
    --color-accent: #ff006e;       /* Accent color */
    --color-bg: #0f1419;           /* Background */
    /* ... */
}
```

**Images**: Replace files in `src/assets/` and update imports

## 📱 Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🎯 Performance Optimizations
- **Code Splitting**: React Router automatically splits resume route
- **Optimized Images**: Properly sized and compressed
- **CSS Variables**: Reduces duplication, enables instant theme switching
- **Smooth Scrolling**: Native `scroll-behavior: smooth` with JS fallback
- **Lazy State Updates**: useLayoutEffect prevents visual flashing

## 📄 License
This project is open source and available for personal use.

## 🤝 Contributing
This is a personal portfolio project, but suggestions and feedback are welcome via GitHub issues.

## 📧 Contact
- **Email**: ivanturneriii@gmail.com
- **LinkedIn**: [linkedin.com/in/ivanturner](https://linkedin.com/in/ivanturner)
- **GitHub**: [github.com/ivanturner3](https://github.com/ivanturner3)

---


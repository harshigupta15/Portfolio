# 🚀 Dev Portfolio — MERN Stack Developer

A stunning, animated, fully responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Glassmorphism Navbar** — sticky, scroll-aware, mobile hamburger menu
- **Hero Section** — typewriter effect, floating code terminal card, animated blobs
- **Skills Section** — animated skill bars, 3-category card grid with hover-lift
- **Experience Timeline** — vertical timeline with color-coded entries
- **Projects Grid** — 3-column responsive cards with demo/github links
- **Contact Form** — input validation, loading state, success animation
- **Dark Mode** — deep navy `#0f172a` base with indigo accent system
- **Framer Motion** — fade-in-up scroll reveals, hover scale, floating elements

---

## 🛠 Tech Stack

- React 18 (Functional Components + Hooks)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)
- Lucide React (icons)

---

## 🚀 Setup & Run in VS Code

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate into the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will open at **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphism navbar
│   │   ├── Hero.jsx           # Typewriter + animated hero
│   │   ├── Skills.jsx         # Skill cards with progress bars
│   │   ├── Experience.jsx     # Vertical timeline
│   │   ├── Projects.jsx       # 3-col project grid
│   │   ├── Contact.jsx        # Form with validation
│   │   ├── Footer.jsx         # Footer
│   │   └── SectionWrapper.jsx # Scroll animation wrapper
│   ├── App.js
│   ├── index.js
│   └── index.css              # Tailwind + custom utilities
├── tailwind.config.js
└── package.json
```


## 📦 Build for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to deploy on Vercel, Netlify, or GitHub Pages.

## 🌐 Open Anywhere (Laptop Folders & Mobile Devices)

### 🖥️ Laptop - Any Folder (No Server Needed)
1. Run `npm run build`
2. Copy the `build/` folder to **any location** (Desktop, USB, etc.)
3. Double-click `build/index.html` — opens directly in browser! 🎉
   - Works offline, no Node.js needed.

**Quick Serve (Optional):**
```cmd
npx serve -s build -l 3000
```
Open http://localhost:3000

### 📱 Mobile - Local Network
**Option 1: Development Server**
1. `npm start`
2. Find your IP: `ipconfig` (look for "Wireless LAN adapter Wi-Fi: IPv4 Address")
3. On phone (same WiFi): http://YOUR-IP:3000

**Option 2: Production Build**
1. `npm run build`
2. `npx serve -s build -l 8000`
3. Phone: http://YOUR-IP:8000

### ☁️ Online (Share Link) - Free
- Drag `build/` to [Netlify](https://app.netlify.com/drop) or [Vercel](https://vercel.com)
- Instant URL to share/open anywhere!

**✅ Fully Responsive** — Tested on mobile (hamburger menu, stacked layouts).

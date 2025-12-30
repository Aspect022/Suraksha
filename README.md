<p align="center">
  <img src="https://img.icons8.com/color/96/000000/shield.png" alt="Suraksha Logo" width="80" />
</p>

<h1 align="center">🛡️ Suraksha</h1>

<p align="center">
  <strong>Your Personal Safety Monitor</strong>
</p>

<p align="center">
  A modern, mobile-first personal safety monitoring web application that continuously monitors user safety through multiple sensors and implements a progressive multi-stage alert system.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.1.6-646CFF?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Express-4.21.2-000000?style=flat-square&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## ✨ Features

### 🚨 Multi-Stage Alert System
Progressive escalation designed to ensure user safety:

| Stage | Duration | Action |
|-------|----------|--------|
| **Stage 1** | 10 seconds | User confirmation prompt - "Are you safe?" |
| **Stage 2** | 30 seconds | Notify trusted contacts with location |
| **Stage 3** | Immediate | Contact emergency services (112) |

### 📡 Sensor Monitoring
Real-time monitoring through multiple sensors (mock implementation for MVP):
- 🎤 **Voice Detection** - Trigger alerts with voice commands
- ❤️ **Heart Rate Monitor** - Track unusual heart rate patterns
- 📍 **Location Tracking** - GPS-based location sharing
- 📱 **Motion Sensors** - Detect sudden movements or falls

### ⚙️ Customizable Settings
- 👥 **Trusted Contacts** - Add and manage emergency contacts
- 🔴 **High-Risk Mode** - Increase sensor sensitivity
- 🌙 **Dark Mode** - Eye-friendly dark theme (default)
- 🎙️ **Voice Sensitivity** - Adjust trigger sensitivity (Low/Medium/High)

### 🎨 Premium UI/UX
- Mobile-first responsive design
- Beautiful glassmorphism effects
- Smooth animations and transitions
- Professional shadcn/ui components

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework with Hooks |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Accessible component library |
| **Radix UI** | Headless UI primitives |
| **Wouter** | Lightweight routing |
| **TanStack Query** | Server state management |
| **Framer Motion** | Animations |
| **Lucide React** | Modern icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| **Express.js** | Web server framework |
| **Drizzle ORM** | Type-safe database ORM |
| **PostgreSQL** | Database (via Neon) |
| **Zod** | Schema validation |

---

## 📦 Installation

### Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x (or pnpm/yarn)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SurakshaMobile.git
   cd SurakshaMobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional for MVP)
   ```bash
   # Create .env file for database connection (optional)
   echo "DATABASE_URL=your_postgresql_connection_string" > .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

---

## 🚀 Usage

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema changes |

### Application Flow

1. **Onboarding** - First-time users see permission requests
2. **Dashboard** - Main monitoring screen with sensor status
3. **Test Alerts** - Use "Test Voice" or "Test Motion" buttons
4. **Settings** - Manage contacts, preferences, and safety options

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings from `vercel.json`

3. **Configure Environment Variables** (if using database)
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Deploy!**
   - Click Deploy and wait for build completion
   - Your app will be live at `your-project.vercel.app`

### Manual Build

```bash
# Build production bundle
npm run build

# Output will be in dist/ folder
# - dist/public/ - Frontend assets
# - dist/index.js - Backend server
```

---

## 📁 Project Structure

```
SurakshaMobile/
├── client/                     # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── alert-stage1.tsx
│   │   │   ├── alert-stage2.tsx
│   │   │   ├── alert-stage3.tsx
│   │   │   └── sensor-card.tsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── use-alerts.tsx
│   │   │   ├── use-sensors.tsx
│   │   │   └── use-settings.tsx
│   │   ├── lib/               # Utilities
│   │   │   ├── storage.ts     # LocalStorage management
│   │   │   └── utils.ts
│   │   ├── pages/             # Page components
│   │   │   ├── dashboard.tsx
│   │   │   ├── onboarding.tsx
│   │   │   └── settings.tsx
│   │   ├── App.tsx            # Root component
│   │   ├── index.css          # Global styles & theme
│   │   └── main.tsx           # Entry point
│   └── index.html             # HTML template
├── server/                     # Backend application
│   ├── index.ts               # Express server entry
│   ├── routes.ts              # API routes
│   ├── storage.ts             # Storage interface
│   └── vite.ts                # Vite middleware
├── shared/                     # Shared code
│   └── schema.ts              # Database schema
├── package.json               # Dependencies & scripts
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel deployment config
└── README.md                  # This file
```

---

## 🎯 Key Components

### Alert System (`use-alerts.tsx`)
Manages the three-stage alert progression with countdown timers:
- **Stage 1**: 10-second user confirmation
- **Stage 2**: 30-second trusted contact notification
- **Stage 3**: Emergency services activation

### Sensor Hook (`use-sensors.tsx`)
Handles mock sensor data simulation:
- Periodic heart rate updates
- Voice trigger simulation
- Motion detection events

### Storage (`lib/storage.ts`)
LocalStorage-based persistence for:
- User settings and preferences
- Trusted contacts list
- Onboarding completion status

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | No* | PostgreSQL connection string |
| `PORT` | No | Server port (default: 5000) |
| `NODE_ENV` | No | Environment (development/production) |

*Database is optional for MVP as the app uses localStorage for demo purposes.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all TypeScript checks pass (`npm run check`)
- Test on mobile viewports (this is a mobile-first app)

---

## 📝 Roadmap

- [ ] Real sensor integration (Web APIs)
- [ ] Push notifications
- [ ] SMS/Call integration via Twilio
- [ ] User authentication
- [ ] Cloud-based contact sync
- [ ] PWA support with offline mode
- [ ] Multi-language support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Lucide](https://lucide.dev/) - Elegant icons
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

<p align="center">
  Made with ❤️ for personal safety
</p>

<p align="center">
  <a href="https://github.com/yourusername/SurakshaMobile/issues">Report Bug</a>
  •
  <a href="https://github.com/yourusername/SurakshaMobile/issues">Request Feature</a>
</p>

# Overview

Suraksha is a personal safety monitoring mobile application built as a React.js web app. The application continuously monitors user safety through various sensors including voice trigger detection, heart rate monitoring, location tracking, and motion sensors. When potential threats are detected, it implements a multi-stage alert system that progressively escalates from user confirmation to contacting trusted contacts and emergency services. The app is designed as an MVP with professional UI/UX using shadcn/ui components and mock sensor data for demonstration purposes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React.js with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for professional UI/UX
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for client-side navigation
- **State Management**: React hooks for local state, TanStack Query for server state
- **Storage**: Browser localStorage for user settings and sensor data persistence

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Architecture Pattern**: RESTful API design with modular route registration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Database Ready**: Drizzle ORM configured for PostgreSQL (Neon Database) with migration support
- **Development**: Hot module replacement and error overlay for development experience

## Core Application Features
- **Multi-Stage Alert System**: Progressive escalation from user confirmation (10s) to trusted contacts (30s) to emergency services
- **Sensor Monitoring**: Mock implementations for voice detection, heart rate, GPS location, and motion sensors
- **Settings Management**: User preferences, trusted contacts, and safety configurations
- **Onboarding Flow**: Permission requests and initial setup for safety features

## Component Architecture
- **Page Components**: Onboarding, Dashboard, Settings with navigation state management
- **Alert Components**: Stage-specific alert screens with countdown timers and user interactions
- **UI Components**: Reusable shadcn/ui components with consistent theming
- **Custom Hooks**: Sensor data management, alert state handling, and settings persistence

# External Dependencies

## UI and Styling
- **shadcn/ui**: Comprehensive UI component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database (configured via @neondatabase/serverless)
- **Database Migrations**: Drizzle Kit for schema management and migrations

## Development Tools
- **Vite**: Build tool with React plugin and development optimizations
- **TypeScript**: Static type checking across the entire codebase
- **ESBuild**: Fast bundling for production builds
- **Replit Plugins**: Development banner, error modal, and cartographer for enhanced development experience

## Runtime Dependencies
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation resolvers
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Wouter**: Lightweight client-side routing

The application is structured as a full-stack TypeScript application with clear separation between client and server code, shared schema definitions, and a comprehensive UI component system optimized for mobile-first responsive design.
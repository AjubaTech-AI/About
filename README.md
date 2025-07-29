# 🚀 Ajuba Tech - Next-Generation AI-Powered Digital Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green.svg)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Status-Production-brightgreen.svg)](https://ajubatech.com)

Welcome to the official repository for **[Ajuba Tech](https://ajubatech.com)** – an enterprise-grade, AI-powered digital transformation platform that empowers businesses to build their future with cutting-edge technology solutions.

---

## 🔒 **Access Policy**

> **Important:** This repository contains proprietary code for Ajuba Tech's production platform. While the code is MIT-licensed, access to this private repository is restricted and granted only upon approval by Ajuba Tech management.
> 
> **To request access:** Email [info@ajubatech.com](mailto:info@ajubatech.com) with your use case and credentials.

---

## 🌟 **About Ajuba Tech**

Ajuba Tech is a next-generation digital transformation company specializing in AI-enabled solutions, custom software development, automation, and cloud infrastructure. Our platform combines enterprise-level security with modern user experience, inspired by industry leaders like Sintra.ai.

### 🎯 **Mission**
Democratizing AI-powered business solutions while maintaining enterprise-grade security and scalability.

---

## ✨ **Core Features**

### 🎨 **User Experience**
- **🌓 Smart Theme System** - Adaptive day/night mode with user preference memory
- **📱 Mobile-First Design** - Responsive across all devices with PWA capabilities
- **⚡ Lightning Performance** - Optimized with Vite, lazy loading, and CDN delivery
- **🔍 Global Search** - Intelligent search across all platform content

### 🤖 **AI-Powered Intelligence**
- **💬 AJ AI Assistant** - OpenAI-powered conversational AI for customer support
- **📊 Lead Intelligence** - AI-driven lead scoring and qualification
- **📝 Content Generation** - Automated blog posts, emails, and documentation
- **🎯 Smart Recommendations** - Personalized user experience and suggestions

### 🔐 **Authentication & Security**
- **🚪 Unified Login System** - Role-based authentication with intelligent platform redirection
- **👥 Multi-Tenant Architecture** - Secure company-based user management
- **🛡️ Enterprise Security** - Row-level security, audit logging, and compliance
- **🔑 SSO Integration** - Single sign-on across all Ajuba platforms

### 📰 **Content Management**
- **✍️ Advanced Blog System** - Full-featured blog with reactions, comments, and sharing
- **📚 Knowledge Base** - Searchable documentation and FAQ system
- **📄 Dynamic Pages** - CMS-like content management for marketing pages

### 💼 **Business Operations (CRM)**
- **📋 Lead Management** - Comprehensive lead tracking and nurturing
- **💰 Invoice Generator** - Professional invoice creation and management
- **📊 Analytics Dashboard** - Real-time business metrics and reporting
- **📞 Customer Communications** - Integrated email and notification system
- **📈 Project Management** - Task tracking, team collaboration, and reporting

### 🌐 **Integrated Platform Ecosystem**
- **[AjubaX](https://ajubax.com.au)** - AI-powered website builder and design platform
- **[Kauriflats](https://kauriflats.co.nz)** - Real estate marketplace and property management super app
- **[Ajuba Domains](https://ajubadomain.co.nz)** - WHMCS-based hosting and domain management portal

---

## 🆕 **What's New**

### **January 2025**
- 🚀 **Enhanced AI Chat System** - Improved conversation flow and lead capture
- 📱 **Mobile Dashboard** - Full mobile optimization for CRM features
- 🔄 **Real-time Sync** - Live updates across all connected platforms
- 🎨 **Design System v2** - Updated component library and brand consistency

### **December 2024**
- 🤖 **AJ AI Integration** - Launched OpenAI-powered customer assistant
- 📊 **Advanced Analytics** - Enhanced reporting and business intelligence
- 🔐 **Security Enhancements** - Implemented additional enterprise security measures

---

## 🛠️ **Technology Stack**

### **Frontend Architecture**
- **⚛️ React 18.2** - Modern component-based UI framework
- **🎨 Tailwind CSS 3.4** - Utility-first CSS framework with custom design system
- **🧩 ShadCN/UI** - Accessible component library
- **⚡ Vite** - Next-generation build tool for optimal performance
- **📱 Progressive Web App** - Service worker and offline capabilities

### **Backend & Infrastructure**
- **🗄️ Supabase** - PostgreSQL database with real-time capabilities
- **🔧 Edge Functions** - Serverless API endpoints
- **🔐 Row Level Security** - Database-level security policies
- **📧 SMTP Integration** - Transactional email delivery
- **☁️ Hostinger Hosting** - Production deployment infrastructure

### **AI & Third-Party Services**
- **🤖 OpenAI GPT-4** - Advanced AI conversation and content generation
- **📊 Analytics** - Custom event tracking and user behavior analysis
- **🔍 Search** - Full-text search with advanced filtering

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ and npm/pnpm
- Supabase account and project
- OpenAI API key

### **Installation**

```bash
# Clone the repository (requires access)
git clone https://github.com/ajubatech/ajuba-tech-platform.git
cd ajuba-tech-platform

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### **Environment Configuration**

Create a `.env` file with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI Configuration
VITE_OPENAI_API_KEY=your_openai_api_key

# Email Configuration
VITE_SMTP_EMAIL_USER=your_smtp_user
VITE_SMTP_EMAIL_PASS=your_smtp_password

# Optional: Analytics & Monitoring
VITE_ANALYTICS_ID=your_analytics_id
```

> ⚠️ **Security Notice:** Never commit secrets to version control. Use environment variables and keep your `.env` file in `.gitignore`.

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 🤝 **How to Contribute**

We welcome contributions from the community! Please follow these guidelines:

### **Getting Started**
1. **Request Access** - Email [info@ajubatech.com](mailto:info@ajubatech.com) for repository access
2. **Fork & Clone** - Fork the repository and clone your fork
3. **Branch Strategy** - Create feature branches from `main`
4. **Development** - Follow our coding standards and conventions

### **Contribution Process**
1. **Issue First** - Create an issue for major changes or new features
2. **Code Standards** - Follow ESLint rules and TypeScript best practices
3. **Security Review** - Ensure no secrets or sensitive data in commits
4. **Testing** - Test your changes thoroughly across devices and browsers
5. **Pull Request** - Submit PR with clear description and screenshots
6. **Review Process** - All contributions are reviewed and subject to approval

### **Code Guidelines**
- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Maintain responsive design principles
- Include proper error handling
- Write clear, self-documenting code
- Add comments for complex business logic

---

## 📚 **Documentation**

- **[API Documentation](docs/api.md)** - Backend API reference
- **[Component Library](docs/components.md)** - UI component documentation
- **[Deployment Guide](docs/deployment.md)** - Production deployment instructions
- **[Security Guidelines](docs/security.md)** - Security best practices

---

## 🏗️ **Project Structure**

```
ajuba-tech-platform/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Route components
│   ├── hooks/              # Custom React hooks
│   ├── contexts/           # React contexts
│   ├── services/           # API and business logic
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── supabase/
│   ├── functions/          # Edge functions
│   └── migrations/         # Database migrations
├── public/                 # Static assets
└── docs/                   # Documentation
```

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Ajuba Tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 **Contact & Support**

### **Get in Touch**
- 📧 **Email:** [info@ajubatech.com](mailto:info@ajubatech.com)
- 🌍 **Website:** [https://ajubatech.com](https://ajubatech.com)
- 💼 **LinkedIn:** [Follow Ajuba Tech](https://linkedin.com/company/ajubatech)
- 💬 **Support:** Use our AI chat assistant on the website

### **Business Inquiries**
- 🚀 **Partnerships:** [partnerships@ajubatech.com](mailto:partnerships@ajubatech.com)
- 💼 **Enterprise Sales:** [enterprise@ajubatech.com](mailto:enterprise@ajubatech.com)
- 🎯 **Careers:** [careers@ajubatech.com](mailto:careers@ajubatech.com)

---

**© 2025 Ajuba Tech. All rights reserved.**

*Empowering businesses with next-generation AI-powered digital solutions.*

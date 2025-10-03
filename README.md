# Bertrand Ogen - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional skills, projects, and experience.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach with desktop optimization
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Dark/Light Mode**: Automatic theme switching support
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project gallery with filtering
- **Skills Visualization**: Animated skill bars and categories
- **Experience Timeline**: Professional journey with achievements
- **Performance**: Optimized build with code splitting and lazy loading

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **GitHub Actions** - CI/CD pipeline

### Deployment
- **Vercel** - Primary hosting platform
- **Docker** - Containerization
- **Nginx** - Production web server

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       └── [Reusable components]
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── hooks/
│   │   └── useScroll.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── hero-bg.jpg
├── docker/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── nginx.conf
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ogenbertrand/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t bertrand-portfolio -f docker/Dockerfile .
```

### Run Docker Container

```bash
docker run -p 80:80 bertrand-portfolio
```

### Docker Compose (Optional)

```yaml
version: '3.8'
services:
  portfolio:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "80:80"
    restart: unless-stopped
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_TOKEN=your-github-token
VITE_LINKEDIN_PROFILE=your-linkedin-url
```

### Customization

- **Colors**: Update `tailwind.config.js`
- **Content**: Modify data files in `src/data/`
- **Styling**: Edit `src/index.css`
- **Animations**: Adjust Framer Motion configurations

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 SEO Optimization

- Meta tags for social media sharing
- Structured data markup
- Semantic HTML structure
- Optimized images with alt tags
- Fast loading times
- Mobile-friendly design

## 🔒 Security

- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Input validation and sanitization
- Secure headers configuration

## 📈 Analytics

Add your analytics tracking ID to monitor:
- Page views
- User interactions
- Performance metrics
- Conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons library
- Fonts from Google Fonts
- Images generated with AI tools

## 📞 Contact

- **Email**: ogenbertrand@gmail.com
- **LinkedIn**: [bertrand-ogen-2a9108264](https://linkedin.com/in/bertrand-ogen-2a9108264)
- **GitHub**: [Ogenbertrand](https://github.com/Ogenbertrand)
- **Location**: Cameroon

---

**Built with ❤️ by Bertrand Ogen**
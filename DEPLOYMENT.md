# Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set up environment variables:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
3. Push to main branch for automatic deployment

### Docker
```bash
# Build image
docker build -t bertrand-portfolio -f docker/Dockerfile .

# Run container
docker run -p 80:80 bertrand-portfolio
```

### GitHub Pages
1. Update `vite.config.ts` with base URL
2. Run `npm run build`
3. Deploy `dist` folder to GitHub Pages

## Environment Variables

Required for full functionality:
- `RESEND_API_KEY` - Resend API key used by `/api/contact`
- `CONTACT_SENDER_EMAIL` - Verified sender address in Resend
- `CONTACT_RECEIVER_EMAIL` - Inbox address that receives contact form messages

## CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Runs tests and linting
2. Builds the application
3. Deploys to Vercel
4. Builds Docker image (on main branch)

## Performance Optimization

- Images are optimized and compressed
- Code splitting for better loading
- Lazy loading for components
- Gzip compression enabled
- CDN integration ready

## Monitoring

- Performance monitoring with Vercel Analytics
- Error tracking with Sentry (optional)
- SEO monitoring with Google Search Console

## Backup Strategy

- All code backed up in GitHub
- Environment variables in GitHub Secrets
- Database backups (if applicable)
- Regular deployment snapshots

# Acore Landing Page

A sleek, black and white landing page for Acore - a B2B compliance management platform for small businesses. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Deploying to Your Own Domain

### Option 1: Vercel (Recommended - Easiest)

Vercel is created by the makers of Next.js and offers the simplest deployment experience.

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/acore-landing.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/log in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js settings)
5. Your site is live at `https://your-project.vercel.app`

#### Step 3: Connect Your Custom Domain
1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your domain (e.g., `acore.io`)
3. Update your DNS records at your registrar:

   **Option A: Using Vercel nameservers (easiest)**
   - Point your domain's nameservers to Vercel's nameservers
   
   **Option B: Using A/CNAME records**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. Wait for DNS propagation (usually 5-30 minutes, can take up to 48 hours)
5. Vercel automatically provisions SSL certificate

---

### Option 2: Netlify

#### Step 1: Build the project
```bash
npm run build
```

#### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Drag & drop the `.next` folder, OR connect your GitHub repo
3. If using GitHub:
   - Build command: `npm run build`
   - Publish directory: `.next`

#### Step 3: Add Custom Domain
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

### Option 3: Self-Hosted (VPS/Cloud Server)

For AWS EC2, DigitalOcean, Linode, etc.

#### Step 1: Server Setup
```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx
```

#### Step 2: Clone and Build
```bash
# Clone your repo
git clone https://github.com/YOUR_USERNAME/acore-landing.git
cd acore-landing

# Install dependencies
npm install

# Build
npm run build
```

#### Step 3: Run with PM2
```bash
# Start the app
pm2 start npm --name "acore" -- start

# Save PM2 config
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

#### Step 4: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/acore
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name acore.io www.acore.io;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/acore /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 5: SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d acore.io -d www.acore.io
```

#### Step 6: Point DNS to Server
At your domain registrar, add:
```
Type: A
Name: @
Value: YOUR_SERVER_IP

Type: A
Name: www
Value: YOUR_SERVER_IP
```

---

### Option 4: Docker Deployment

#### Dockerfile
Create a `Dockerfile` in your project root:
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run
```bash
docker build -t acore-landing .
docker run -p 3000:3000 acore-landing
```

#### Deploy to Cloud Run (Google Cloud)
```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/YOUR_PROJECT/acore-landing

# Deploy
gcloud run deploy acore-landing \
  --image gcr.io/YOUR_PROJECT/acore-landing \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Domain Registrars

If you don't have a domain yet, here are popular registrars:

| Registrar | Price (approx/year) | Notes |
|-----------|---------------------|-------|
| [Namecheap](https://namecheap.com) | $8-12 | Good prices, free WhoisGuard |
| [Cloudflare](https://cloudflare.com) | At-cost (~$8) | Cheapest, great DNS |
| [Google Domains](https://domains.google) | $12 | Clean interface |
| [GoDaddy](https://godaddy.com) | $12-20 | Popular but pricier |
| [Porkbun](https://porkbun.com) | $8-10 | Great prices |

---

## Environment Variables

For production, create a `.env.local` file:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.acore.io

# Contact form (if using a service)
CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxx
```

---

## Performance Optimization

### Image Optimization
Replace placeholder images with optimized ones:
```tsx
import Image from 'next/image'

<Image
  src="/hero-image.webp"
  alt="Dashboard"
  width={1200}
  height={800}
  priority
/>
```

### Analytics
Add Google Analytics or Plausible:
```tsx
// src/app/layout.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### SEO
The site includes basic SEO. For production, update `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Acore | Compliance Management for Small Business',
  description: 'Your description here',
  openGraph: {
    title: 'Acore',
    description: 'Compliance made simple',
    url: 'https://acore.io',
    siteName: 'Acore',
    images: [{ url: 'https://acore.io/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acore',
    description: 'Compliance made simple',
    images: ['https://acore.io/og-image.png'],
  },
}
```

---

## Updating the Site

### Local Development
```bash
# Make changes
npm run dev

# Test production build
npm run build && npm start
```

### Deploying Updates

**Vercel/Netlify (auto-deploy)**
```bash
git add .
git commit -m "Update landing page"
git push
# Auto-deploys on push
```

**Self-hosted**
```bash
ssh user@your-server
cd acore-landing
git pull
npm install
npm run build
pm2 restart acore
```

---

## Troubleshooting

### Common Issues

**Build fails:**
```bash
rm -rf node_modules .next
npm install
npm run build
```

**Port 3000 in use:**
```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>
```

**DNS not propagating:**
- Use [dnschecker.org](https://dnschecker.org) to check propagation
- Clear browser cache
- Wait up to 48 hours (usually faster)

**SSL certificate issues:**
```bash
# Renew Let's Encrypt
sudo certbot renew
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with glow effects
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navigation.tsx   # Header with glass morphism
│   ├── Hero.tsx         # Hero with floating orbs
│   ├── Features.tsx     # Feature cards with glow
│   ├── Resources.tsx    # Resources section
│   ├── Team.tsx         # Team members
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
```

---

## License

MIT © 2026 Acore, Inc.

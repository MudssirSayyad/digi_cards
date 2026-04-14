# DigiCards - Getting Started Guide

## Project Overview

DigiCards is a high-performance NFC Digital Business Cards and Portfolio platform built with modern web technologies. This guide will help you set up and understand the project structure.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

### 3. Set Up Supabase

Create a Supabase project and table (instructions in README.md)

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure Deep Dive

### Core Directories

#### `/src/app`

Next.js App Router pages and layouts

- `page.tsx` - Home page
- `layout.tsx` - Root layout with global metadata
- `globals.css` - Global styles and animations
- `v/[slug]/` - Dynamic portfolio routes

#### `/src/lib`

Utility functions and services

- `vcard-generator.ts` - vCard file generation and download
- `supabase.ts` - Supabase client initialization
- `supabase-services.ts` - Database operations (CRUD)
- `utils.ts` - General utility functions

#### `/src/types`

TypeScript type definitions

- `ClientProfile` - User profile structure
- `Project` - Portfolio project structure
- `SocialLink` - Social media links
- `VCardData` - vCard export data

#### `/src/components`

React components (to be populated)

## 🎯 Key Features to Build

### 1. **Dynamic Portfolio Page** ✅

Located at `/v/[slug]/page.tsx`

**What it does:**

- Fetches profile data from Supabase based on URL slug
- Generates SEO metadata for Open Graph sharing
- Displays profile info, social links, and project gallery
- Includes "Save Contact" (vCard download) button
- WhatsApp and Email quick-action buttons

**Usage:**
Navigate to `http://localhost:3000/v/john-doe` to view John Doe's portfolio

### 2. **vCard Generator Utility** ✅

Located at `/src/lib/vcard-generator.ts`

**Functions:**

- `generateVCard()` - Creates RFC 5545 compliant vCard string
- `downloadVCard()` - Triggers vCard file download
- `generateWhatsAppLink()` - Creates WhatsApp share link
- `generateMailtoLink()` - Creates email link

**Example:**

```typescript
import { downloadVCard } from '@/lib/vcard-generator';

downloadVCard({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1234567890',
});
```

### 3. **Supabase Integration** ✅

Located at `/src/lib/supabase-services.ts`

**Available Functions:**

- `fetchProfileBySlug(slug)` - Get profile by URL slug
- `createProfile(profile)` - Create new profile
- `updateProfile(id, updates)` - Update profile
- `incrementTapCount(slug)` - Track profile views
- `addProject(profileId, project)` - Add portfolio project
- `addSocialLink(profileId, link)` - Add social media link

## 🎨 Customization Guide

### Changing Theme Colors

Edit `/src/app/globals.css`:

```css
:root {
  --primary: #00d4ff; /* Change primary color */
  --accent: #1a1a2e;
  --neon-cyan: #00d4ff;
  --neon-purple: #9d4edd;
  --neon-pink: #ff006e;
}
```

### Extending Tailwind

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      custom: '#your-color',
    },
    animation: {
      'my-animation': 'my-animation 2s ease-in-out',
    },
  },
}
```

### Adding New Components

1. Create file in `/src/components/`
2. Use TypeScript strict mode
3. Import types from `/src/types/`
4. Use Framer Motion for animations
5. Use Tailwind for styling

Example component:

```typescript
'use client';

import { motion } from 'framer-motion';

interface Props {
  title: string;
}

export default function MyComponent({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 bg-black border border-cyan-500"
    >
      {title}
    </motion.div>
  );
}
```

## 📊 Database Schema

### Profiles Table

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  profileImage TEXT,
  bio TEXT,
  title TEXT,
  company TEXT,
  location TEXT,
  socialLinks JSONB DEFAULT '[]',
  projects JSONB DEFAULT '[]',
  tapCount INT DEFAULT 0,
  theme JSONB DEFAULT '{}',
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_profiles_slug ON profiles(slug);
CREATE INDEX idx_profiles_email ON profiles(email);
```

## 🔧 Configuration Files

### `next.config.js`

- Image optimization
- Remote pattern configuration
- Environment variables
- Security headers

### `tailwind.config.js`

- Custom colors and animations
- Extend Tailwind theme
- Content paths for scanning

### `tsconfig.json`

- TypeScript strict mode enabled
- Path aliases (`@/*`)
- ES2020 target

### `.env.example`

Template for environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Deployment Checklist

- [ ] Set environment variables in production
- [ ] Update `NEXT_PUBLIC_APP_URL` for production domain
- [ ] Configure CORS in Supabase
- [ ] Set up image optimization cache
- [ ] Enable analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure backup strategy

## 📝 Best Practices

### Code Style

- Use TypeScript strict mode
- Follow Prettier formatting
- Use semantic HTML
- Keep components small and focused

### Performance

- Use Next.js Image component
- Implement lazy loading
- Code splitting with dynamic imports
- Minimize bundle size

### Security

- Never commit `.env.local`
- Validate user input
- Use HTTPS only
- Implement rate limiting

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

### Supabase Connection Issues

- Verify credentials in `.env.local`
- Check Supabase project is active
- Verify network connectivity

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Supabase Documentation](https://supabase.com/docs)

## 🤝 Support

For issues or questions:

1. Check the troubleshooting section above
2. Review the README.md
3. Check project documentation
4. Open an issue on GitHub

---

**Happy coding! 🎉**

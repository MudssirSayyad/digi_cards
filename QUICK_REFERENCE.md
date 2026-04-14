# DigiCards - Quick Reference Guide

## 🎯 Most Important Files

### For Portfolio Pages

- **Dynamic Page**: `src/app/v/[slug]/page.tsx` - Renders portfolios
- **Client Component**: `src/app/v/[slug]/portfolio-client.tsx` - Interactive UI

### For vCard Download

- **Main Utility**: `src/lib/vcard-generator.ts` - All vCard functions here

### For Database

- **Services**: `src/lib/supabase-services.ts` - All database operations
- **Config**: `src/lib/supabase.ts` - Initialize client

### For Types

- **All Types**: `src/types/index.ts` - All TypeScript types

---

## 💡 Common Tasks

### Download a vCard

```typescript
import { downloadVCard } from '@/lib/vcard-generator';

downloadVCard({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1234567890',
});
```

### Share on WhatsApp

```typescript
import { generateWhatsAppLink } from '@/lib/vcard-generator';

const link = generateWhatsAppLink('+1234567890', 'Check out my portfolio!');
window.open(link, '_blank');
```

### Fetch Profile by Slug

```typescript
import { fetchProfileBySlug } from '@/lib/supabase-services';

const profile = await fetchProfileBySlug('john-doe');
```

### Update Profile

```typescript
import { updateProfile } from '@/lib/supabase-services';

await updateProfile('profile-id', {
  bio: 'Updated bio',
  title: 'New Title',
});
```

### Add Project to Portfolio

```typescript
import { addProject } from '@/lib/supabase-services';

await addProject('profile-id', {
  id: 'proj-123',
  title: 'My Project',
  description: 'Project description',
  image: 'url-to-image',
  tags: ['Web', 'Design'],
});
```

### Track Portfolio Tap

```typescript
import { incrementTapCount } from '@/lib/supabase-services';

await incrementTapCount('john-doe');
```

---

## 🎨 Styling Quick Tips

### Change Theme Color

Edit `src/app/globals.css`:

```css
:root {
  --primary: #00d4ff; /* Change this */
  --neon-purple: #9d4edd; /* Or this */
  --neon-pink: #ff006e; /* Or this */
}
```

### Add Glow Effect

```html
<div className="neon-glow">Glowing text</div>
<div className="neon-border">Glowing border</div>
```

### Gradient Text

```html
<h1 className="gradient-neon-text">Rainbow Text</h1>
```

### Animations

```html
<div className="animate-glow">Glowing animation</div>
<div className="animate-pulse-glow">Pulse animation</div>
```

---

## 📱 Mobile Testing

### Test on Different Sizes

```bash
# Chrome DevTools shortcuts
F12                    # Open DevTools
Ctrl + Shift + M       # Toggle device toolbar
```

### Optimize for 6.1" Screen

- Width: 375px (standard mobile)
- Height: 812px
- Device Pixel Ratio: 3

---

## 🔧 Environment Setup

### Required Variables (.env.local)

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Optional Variables

```env
NEXT_PUBLIC_GA_ID=analytics_id
NEXT_PUBLIC_API_URL=api_endpoint
```

---

## 📊 Database Setup

### SQL to Create profiles Table

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

CREATE INDEX idx_profiles_slug ON profiles(slug);
CREATE INDEX idx_profiles_email ON profiles(email);
```

---

## 🚀 Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect to Vercel
- [ ] Set environment variables
- [ ] Test all pages load
- [ ] Verify vCard downloads
- [ ] Test WhatsApp/Email sharing
- [ ] Check mobile responsiveness
- [ ] Validate SEO metadata
- [ ] Enable analytics
- [ ] Set up custom domain

---

## 🆘 Troubleshooting

### "Module not found" error

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Mac/Linux
lsof -i :3000
kill -9 [PID]
```

### TypeScript errors

```bash
# Run type check
npm run type-check

# Fix formatting
npm run format
```

### Supabase connection fails

1. Verify credentials in `.env.local`
2. Check Supabase project is active
3. Test connection in browser console:

```javascript
import { supabase } from '@/lib/supabase';
await supabase.from('profiles').select().limit(1);
```

---

## 📈 Performance Monitoring

### Check Build Size

```bash
npm run build
# Check .next/static for bundle analysis
```

### Lighthouse Audit

```bash
# In Chrome DevTools
F12 → Lighthouse → Analyze page load
```

### Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 🔐 Security Tips

✅ **Do:**

- Use environment variables for secrets
- Validate user input
- Implement RLS in Supabase
- Keep dependencies updated
- Use HTTPS in production

❌ **Don't:**

- Commit `.env.local`
- Expose API keys in code
- Trust user input
- Skip security updates
- Use hardcoded credentials

---

## 📚 File Dependencies

```
portfolio-client.tsx
  ├── @/types/ClientProfile
  ├── @/lib/vcard-generator
  ├── framer-motion
  └── next/image

page.tsx (pages/v/[slug])
  ├── @/types/ClientProfile
  ├── portfolio-client.tsx
  ├── fetchClientProfile()
  └── Metadata generation

vcard-generator.ts
  ├── @/types/VCardData
  └── Standalone (no dependencies)

supabase-services.ts
  ├── @/lib/supabase
  ├── @/types/ClientProfile
  ├── @/types/Project
  └── @/types/SocialLink
```

---

## 🎓 Learning Resources

### TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Strict mode enables better error checking

### Next.js

- [App Router Guide](https://nextjs.org/docs/app)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### Tailwind CSS

- [Class Reference](https://tailwindcss.com/docs/installation)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

### Framer Motion

- [Animation Guide](https://www.framer.com/motion/)
- [Gesture Animations](https://www.framer.com/motion/gestures/)

### Supabase

- [Getting Started](https://supabase.com/docs/guides/getting-started)
- [Authentication](https://supabase.com/docs/guides/auth)

---

## 💻 IDE Setup

### Recommended Extensions (VS Code)

- TypeScript Vue Plugin
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Thunder Client / REST Client

### Keyboard Shortcuts

```
Ctrl + Shift + F    Format document
Ctrl + /             Toggle comment
Ctrl + K Ctrl + I    Quick fix
F2                   Rename symbol
Ctrl + Click         Go to definition
```

---

**Last Updated**: April 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready

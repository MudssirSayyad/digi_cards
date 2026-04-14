# Professional Template Guide

## 🎨 Overview

The Professional Template is a sophisticated, dark-themed portfolio design perfect for service-based businesses, automotive specialists, and professional consultancies. It features Material Design 3 colors and a modern, mobile-first layout.

## 🚀 Demo Profile

The template comes with a demo profile for **Datar Auto** - an automotive electrical specialist business.

**Access it at:** `http://localhost:3000/v/datar-auto`

## 📁 Files Structure

```
src/
├── components/
│   └── ProfessionalTemplate.tsx    # Main template component
├── data/
│   └── demo-profiles.ts            # Demo profile data
└── app/v/[slug]/
    └── page.tsx                     # Updated to support template
```

## 🔧 How to Add Your Own Demo Profiles

### Step 1: Create Profile Data

Edit `src/data/demo-profiles.ts` and add a new profile:

```typescript
export const YOUR_BUSINESS_PROFILE: ClientProfile & {
  icon?: string;
  services?: Array<...>;
  tagline?: string;
  businessHighlights?: Array<...>;
} = {
  id: 'demo-your-business',
  slug: 'your-business', // This becomes the URL slug
  firstName: 'John',
  lastName: 'Founder',
  email: 'john@yourbusiness.com',
  phone: '+1 (555) 123-4567',
  profileImage: 'https://your-image-url.com/profile.jpg',
  bio: 'Your business description here...',
  title: 'Your Title',
  company: 'Your Business Name',
  location: 'Your City, State',
  tagline: 'Your tagline', // Shown below company name
  icon: 'precision_manufacturing', // See icons list below

  socialLinks: [],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  // Business highlights (Optional)
  businessHighlights: [
    {
      icon: 'bolt',
      title: 'Expert Service',
      subtitle: 'Professional technicians',
    },
    // More highlights...
  ],

  // Service catalog (Optional)
  services: [
    {
      title: 'Service Category',
      icon: 'ac_unit',
      color: 'primary', // 'primary' | 'secondary' | 'primary-container'
      items: [
        'Service 1',
        'Service 2',
        'Service 3',
      ],
    },
    // More services...
  ],
};
```

### Step 2: Add to Exports

```typescript
export const DEMO_PROFILES = [
  DATAR_AUTO_PROFILE,
  YOUR_BUSINESS_PROFILE, // Add this
];
```

### Step 3: Access Your Profile

Visit: `http://localhost:3000/v/your-business`

## 🎨 Available Icons

The template supports the following Material Design icons:

| Icon Name                 | Display |
| ------------------------- | ------- |
| `precision_manufacturing` | ⚙️      |
| `ac_unit`                 | ❄️      |
| `electric_bolt`           | ⚡      |
| `memory`                  | 💾      |
| `bolt`                    | ⚡      |
| `speed`                   | ⚡      |
| `verified`                | ✓       |
| `person_add`              | 👤      |
| `chat`                    | 💬      |
| `map`                     | 📍      |
| `call`                    | 📞      |
| `mail`                    | ✉️      |
| `location_on`             | 📍      |
| `build_circle`            | 🔧      |

## 🎯 Color Schemes

### Service Card Border Colors

- `'primary'` → Red (#ffb4a8)
- `'secondary'` → Gray (#c4c6cc)
- `'primary-container'` → Bright Red (#e60000)

## 📱 Features

✅ **Responsive Design** - Mobile-first, optimized for 6.1" screens
✅ **Dark Theme** - Material Design 3 dark palette
✅ **Sticky Bottom Nav** - Quick access to call, location, WhatsApp
✅ **Framer Motion Animations** - Smooth entrance and hover animations
✅ **vCard Integration** - "Add to Phonebook" downloads vCard
✅ **WhatsApp Integration** - Direct WhatsApp messaging
✅ **Google Maps Integration** - One-tap location access
✅ **Service Catalog** - Showcase multiple service categories
✅ **Business Highlights** - Feature your key selling points

## 🔗 URL Structure

All demo profiles are accessible via `/v/[slug]`:

```
http://localhost:3000/v/datar-auto        # Datar Auto demo
http://localhost:3000/v/your-business     # Your new profile
http://localhost:3000/v/john-doe          # Regular profile (uses basic template)
```

## 💾 Converting to Permanent Profile

To convert a demo profile to a real Supabase profile:

1. Create the profile in Supabase with the same data
2. Remove from `demo-profiles.ts`
3. The system will automatically fetch from Supabase

## 🎓 Template Component Props

```typescript
interface ProfessionalTemplateProps {
  profile: ClientProfile & {
    icon?: string;
    services?: Array<{
      title: string;
      icon: string;
      color: 'primary' | 'secondary' | 'primary-container';
      items: string[];
    }>;
    tagline?: string;
    businessHighlights?: Array<{
      icon: string;
      title: string;
      subtitle: string;
    }>;
  };
}
```

## 🎨 Color Reference

### Theme Colors (Dark Mode)

| Element           | Color                  | Hex     |
| ----------------- | ---------------------- | ------- |
| Background        | surface                | #131313 |
| Surface           | surface                | #131313 |
| Surface High      | surface-container-high | #2a2a2a |
| Primary           | primary                | #ffb4a8 |
| Primary Container | primary-container      | #e60000 |
| Secondary         | secondary              | #c4c6cc |
| Text              | on-surface             | #e5e2e1 |
| Borders           | outline-variant        | #5f3f3a |

## 📝 Example: Complete Profile

```typescript
export const SALSA_STUDIO_PROFILE: ClientProfile & {...} = {
  id: 'demo-salsa-studio',
  slug: 'salsa-studio',
  firstName: 'Maria',
  lastName: 'Garcia',
  email: 'maria@salsastudio.com',
  phone: '+1 (555) 987-6543',
  profileImage: 'https://example.com/maria.jpg',
  bio: 'Passionate salsa instructor bringing the rhythm of Latin dance to your city. Classes for all levels, from beginner to advanced.',
  title: 'Dance Instructor & Studio Owner',
  company: 'Salsa Studios',
  location: 'Miami, Florida',
  tagline: 'Dance with Passion',
  icon: 'precision_manufacturing',
  socialLinks: [],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  businessHighlights: [
    {
      icon: 'bolt',
      title: 'Expert Instruction',
      subtitle: 'Professional certified instructors',
    },
    {
      icon: 'speed',
      title: 'Flexible Scheduling',
      subtitle: 'Classes at convenient times',
    },
    {
      icon: 'verified',
      title: '100% Satisfaction',
      subtitle: 'Join our community today',
    },
  ],
  services: [
    {
      title: 'Beginner Classes',
      icon: 'ac_unit',
      color: 'primary',
      items: [
        'Basic steps and rhythm',
        'Partner dancing fundamentals',
        'Music interpretation',
      ],
    },
    {
      title: 'Advanced Classes',
      icon: 'electric_bolt',
      color: 'secondary',
      items: [
        'Complex choreography',
        'Performance techniques',
        'Competition preparation',
      ],
    },
    {
      title: 'Special Events',
      icon: 'memory',
      color: 'primary-container',
      items: [
        'Private lessons',
        'Wedding choreography',
        'Corporate events',
      ],
    },
  ],
};
```

## 🚀 Quick Start

1. **View Demo**: `http://localhost:3000/v/datar-auto`
2. **Copy Template**: Use `DATAR_AUTO_PROFILE` as reference
3. **Create Your Profile**: Add to `demo-profiles.ts`
4. **Test**: Visit `/v/your-slug`
5. **Share**: WhatsApp the link to friends!

---

**Happy creating! 🎉**

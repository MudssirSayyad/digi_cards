# DigiCards - Professional Template Demo

## 🚀 Quick Access

### View the Demo Profile

After running `npm run dev`, visit:

```
http://localhost:3000/v/datar-auto
```

This will show **Datar Auto** - an automotive electrical specialist business with the new Professional Template design.

---

## 📦 What's New

### New Files Created

1. **`src/components/ProfessionalTemplate.tsx`**
   - Modern Material Design 3 template
   - Dark theme with red accents
   - Bottom navigation bar
   - Service cards
   - Business highlights
   - vCard integration
   - WhatsApp/Location quick actions

2. **`src/data/demo-profiles.ts`**
   - Demo profile data structure
   - Datar Auto profile example
   - Easy to extend with new profiles

3. **`PROFESSIONAL_TEMPLATE_GUIDE.md`**
   - Complete guide to using the template
   - How to add your own profiles
   - Icon reference
   - Color schemes

---

## 🎯 Features Demonstrated

### On the Demo Page

✅ **Hero Section**

- Company branding
- Founder profile image with large circular frame
- Title and tagline

✅ **Contact Information**

- Phone, email, location
- Professional layout
- Easy to copy/click

✅ **Action Buttons**

- "Add to Phonebook" (downloads vCard)
- "WhatsApp" (opens chat)
- "Location" (opens maps)

✅ **About Section**

- Company description
- Business highlights with icons
- Key selling points

✅ **Service Catalog**

- 4 service cards
- Color-coded borders
- Service listings

✅ **Bottom Navigation**

- Call button
- Location button (highlighted)
- WhatsApp button

---

## 📱 Try It Out

### On Mobile

1. Open on your phone: `http://localhost:3000/v/datar-auto`
2. Tap "Add to Phonebook" → Downloads .vcf file
3. Tap "WhatsApp" → Opens WhatsApp chat
4. Tap "Location" → Opens Google Maps

### On Desktop

1. Open in Chrome/Firefox: `http://localhost:3000/v/datar-auto`
2. Press `F12` to open DevTools
3. Click the phone icon to toggle device toolbar
4. Select a mobile device (iPhone 12/13)
5. Full responsive preview

---

## 🔄 Easy Integration

### The System Works Like This:

```
URL: http://localhost:3000/v/datar-auto
         ↓
Check demo profiles first
         ↓
Found in demo-profiles.ts
         ↓
Show ProfessionalTemplate
         ↓
Beautiful Material Design page
```

### Regular Profiles Still Work:

```
URL: http://localhost:3000/v/john-doe
         ↓
Check demo profiles first
         ↓
Not found, check Supabase
         ↓
Found in Supabase
         ↓
Show PortfolioClient (original template)
         ↓
Original neon blue design
```

---

## 📝 Create Your Own

### Fastest Way: Edit `src/data/demo-profiles.ts`

```typescript
// Copy this structure and customize:
export const YOUR_BUSINESS: ClientProfile & {...} = {
  slug: 'your-slug',           // Will be at /v/your-slug
  firstName: 'Your Name',
  company: 'Your Company',
  phone: '+1-xxx-xxx-xxxx',
  email: 'your@email.com',
  // ... more fields
};

// Add to exports:
export const DEMO_PROFILES = [
  DATAR_AUTO_PROFILE,
  YOUR_BUSINESS,  // Add yours here
];
```

Then visit: `http://localhost:3000/v/your-slug`

---

## 🎨 Customization

### Colors

The template uses Material Design 3 dark theme:

- **Primary Red**: #ffb4a8 to #e60000
- **Dark Background**: #131313
- **Surfaces**: #1c1b1b to #2a2a2a
- **Text**: #e5e2e1

### Fonts

- Headlines: Plus Jakarta Sans (bold, 700-800)
- Body: Inter (regular weight)

### Icons

All icons are text emoji (no external library needed):

- ⚙️ Precision Manufacturing
- ❄️ AC Unit
- ⚡ Electric Bolt
- 💾 Memory
- 📱 Chat
- 📍 Location
- ✓ Verified

---

## 🐛 Troubleshooting

### Page Shows Basic Template Instead of Professional

**Solution**: Make sure:

1. Slug matches exactly (case-sensitive)
2. Profile is in `demo-profiles.ts`
3. You added it to `DEMO_PROFILES` array
4. Browser cache cleared (Ctrl+Shift+Delete)

### Images Not Loading

**Solution**: Use valid image URLs:

- ✅ `https://` URLs
- ✅ `data:image/...` (base64)
- ❌ Local file paths

### Styling Looks Off

**Solution**:

1. Ensure Tailwind is running: `npm run dev`
2. Check browser console for errors (F12)
3. Clear `.next` folder: `rm -rf .next`

---

## 📱 Responsive Breakpoints

The template looks perfect on:

- 📱 iPhone 12/13/14 (390px)
- 📱 iPhone SE (375px)
- 📱 Android phones (360px-480px)
- 💻 Tablets (768px)
- 🖥️ Desktop (1024px+)

---

## 🔗 Useful Links

- **Demo Route**: [`/v/datar-auto`](http://localhost:3000/v/datar-auto)
- **Guide**: `PROFESSIONAL_TEMPLATE_GUIDE.md`
- **Component**: `src/components/ProfessionalTemplate.tsx`
- **Demo Data**: `src/data/demo-profiles.ts`

---

## ✅ Checklist

Before deploying, verify:

- [ ] Demo loads at `/v/datar-auto`
- [ ] "Add to Phonebook" downloads .vcf
- [ ] WhatsApp button works
- [ ] Location button opens maps
- [ ] Responsive on mobile
- [ ] All images load
- [ ] Animations smooth (60fps)

---

**You're all set! Enjoy the Professional Template! 🎉**

Need to create another demo? Just duplicate the profile in `demo-profiles.ts` and customize!

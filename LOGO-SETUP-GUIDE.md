# Logo Setup Guide for PrimeCare Pharmacy

## 📁 Where to Place Your Logo Files

All logo files should be placed in the `/public` folder of your project:

```
Prime-care-rx/
└── public/
    ├── logo.png              ← Main logo (for light backgrounds)
    ├── logo-white.png        ← White version (for dark backgrounds/footer)
    ├── favicon.ico           ← Browser tab icon (32x32px)
    └── apple-touch-icon.png  ← iOS home screen icon (180x180px)
```

## 🎨 Logo File Requirements

### 1. **Main Logo (`logo.png` or `logo.svg`)**
   - **Purpose**: Navigation header, mobile menu
   - **Background**: Light/white backgrounds
   - **Recommended Size**: 200x60px (or similar aspect ratio)
   - **Format**: PNG with transparent background or SVG
   - **Color**: Should work well on white and light green backgrounds

### 2. **White Logo (`logo-white.png` or `logo-white.svg`)**
   - **Purpose**: Footer (dark background)
   - **Background**: Dark backgrounds
   - **Recommended Size**: 200x60px (same as main logo)
   - **Format**: PNG with transparent background or SVG
   - **Color**: White or light color for visibility on dark backgrounds

### 3. **Favicon (`favicon.ico`)**
   - **Purpose**: Browser tab icon
   - **Size**: 32x32px (or 16x16px, 32x32px multi-size)
   - **Format**: ICO format
   - **Tip**: You can convert PNG to ICO using https://www.favicon-generator.org/

### 4. **Apple Touch Icon (`apple-touch-icon.png`)** *(Optional but recommended)*
   - **Purpose**: iOS home screen icon
   - **Size**: 180x180px
   - **Format**: PNG
   - **Background**: Should include background color (not transparent)

## 🔧 Current Implementation

Your logo is now integrated in:

✅ **Navigation Header**
   - Shows logo + "PrimeCare Rx" text
   - Includes "HealthMart Pharmacy" subtitle
   - Responsive sizing (smaller on mobile)
   - Changes appearance when scrolling

✅ **Footer**
   - Shows white logo version
   - Paired with company name
   - Consistent branding

✅ **Mobile Menu**
   - Logo visible at all times
   - Professional appearance

✅ **Browser Tab**
   - Favicon for brand recognition
   - iOS icon for home screen

## 📝 How to Add Your Logo

### Step 1: Prepare Your Logo Files

1. **Main Logo**: Export as PNG (transparent background) at 200x60px
2. **White Logo**: Create a white version of your logo
3. **Favicon**: Create or convert to ICO format (32x32px)
4. **Apple Icon**: Create a 180x180px version with background

### Step 2: Copy Files to `/public` Folder

```bash
# Navigate to your project
cd /Users/akashpatel/Desktop/Prime-care-rx

# Copy your logo files to the public folder
# (Replace with your actual file paths)
cp /path/to/your/logo.png public/
cp /path/to/your/logo-white.png public/
cp /path/to/your/favicon.ico public/
cp /path/to/your/apple-touch-icon.png public/
```

### Step 3: Verify Files

```bash
# List files in public folder
ls -la public/
```

You should see:
```
logo.png
logo-white.png
favicon.ico
apple-touch-icon.png
```

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

### Step 5: View Your Logo

Open http://localhost:3000 and you should see:
- ✅ Logo in the navigation header
- ✅ White logo in the footer
- ✅ Favicon in the browser tab

## 🎯 Alternative: Using SVG Format

If you prefer SVG format (recommended for better quality):

1. Rename your files:
   - `logo.png` → `logo.svg`
   - `logo-white.png` → `logo-white.svg`

2. Update the code in `components/Navigation.tsx`:
   ```typescript
   src="/logo.svg"  // instead of /logo.png
   ```

3. Update the code in `components/Footer.tsx`:
   ```typescript
   src="/logo-white.svg"  // instead of /logo-white.png
   ```

## 🚀 Optimization Features

Your logo implementation includes:

✅ **Next.js Image Optimization**
   - Automatic image optimization
   - WebP/AVIF format support
   - Lazy loading for performance

✅ **Responsive Sizing**
   - Adapts to screen size
   - Smaller on mobile, larger on desktop

✅ **Fallback Support**
   - If logo doesn't load, text appears
   - No broken images

✅ **Accessibility**
   - Proper alt text for screen readers
   - Semantic HTML structure

## 🎨 Branding Guidelines

Your logo is displayed:

1. **Navigation (Top)**
   - Logo + "PrimeCare Rx"
   - Subtitle: "HealthMart Pharmacy"
   - Green color scheme

2. **Footer (Bottom)**
   - White logo version
   - Company name in white/green
   - Social media icons

3. **Browser Tab**
   - Favicon for brand recognition

## ❓ Troubleshooting

**Logo not showing?**
1. Check file names are exactly: `logo.png` and `logo-white.png`
2. Ensure files are in the `public` folder (not a subfolder)
3. Restart the development server
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Logo too large/small?**
- Edit sizes in `components/Navigation.tsx` (change `w-12 h-12`)
- Edit sizes in `components/Footer.tsx` (change `w-12 h-12`)

**Wrong colors?**
- Make sure `logo.png` works on light backgrounds
- Make sure `logo-white.png` is white/light color for dark backgrounds

## 📞 Need Help?

If you need to adjust logo sizes, positioning, or styling, let me know and I can update the components for you!

---

**Ready to add your logo?** Just copy your files to the `public` folder and restart the server!




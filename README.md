# 🦁 SAFARY Banana Chips Website

A modern, reactive React website for SAFARY banana chips featuring complete farm-to-packet transparency through QR code integration.

## ✨ Features

- **SAFARY Theme**: Green and red color scheme matching your packaging design
- **Home Page**: 
  - Eye-catching hero section with safari/adventure theme
  - About SAFARY story
  - Product showcase (Cream & Onion, Peri-Peri, Classic, Masala)
  - Transparency messaging
  - Call-to-action sections

- **Know Your Farmer System**:
  - QR code ready routing at `/knowyourfarmer`
  - Batch number input (1-10)
  - 10 detailed farmer profiles
  - Gallery view of all farmers
  - Individual farmer detail pages with photos, stories, and farm information

- **Fully Responsive**: Mobile-first design optimized for all devices
- **Complete Traceability**: Each packet can link to specific farmer information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Running

1. Install dependencies (already done):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
banana-chips-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with responsive menu
│   │   ├── Footer.jsx         # Footer with links and contact info
│   ├── pages/
│   │   ├── Home.jsx           # Main landing page
│   │   ├── FarmerInput.jsx    # Batch number input + farmer gallery
│   │   ├── FarmerDetails.jsx  # Individual farmer profile page
│   ├── data/
│   │   └── farmers.js         # Database of 10 farmer profiles
│   ├── App.jsx                # Main app with routing
│   └── index.css              # Global styles and theme variables
```

## 🔗 Routes

- `/` - Home page
- `/knowyourfarmer` - Batch number input page + farmer gallery
- `/knowyourfarmer/:batchId` - Individual farmer details (1-10)

## 📱 QR Code Integration

### How It Works

**Option 1: Direct Link (Recommended)**
- Generate unique QR codes for each batch
- Batch 1: `safarychips.com/knowyourfarmer/1`
- Batch 2: `safarychips.com/knowyourfarmer/2`
- Continue for all 10 batches

**Option 2: Manual Input**
- QR code points to: `safarychips.com/knowyourfarmer`
- Customer enters batch number (1-10)
- Gets redirected to farmer profile

### Generating QR Codes

Use online QR code generators:
- qr-code-generator.com
- qrcode-monkey.com

Generate QR codes for URLs like `safarychips.com/knowyourfarmer/1` through `safarychips.com/knowyourfarmer/10`

## 🎨 Theme Colors

- **Primary Green**: #8BC34A (from packaging)
- **Dark Green**: #558B2F
- **Primary Red**: #D32F2F (Peri-Peri packaging)
- **SAFARY Yellow**: #FFC107
- **Cream/Beige**: #F5F5DC, #FFF9E6

## 📝 Customization

### Update Farmer Information
Edit `src/data/farmers.js` with real farmer details, photos, and stories.

### Update Products
Edit the products section in `src/pages/Home.jsx` - currently featuring:
- Cream & Onion (signature flavor)
- Peri-Peri (hot & spicy)
- Classic Salted
- Masala Magic

### Update Company Info
Edit Navbar and Footer components in `src/components/`

## 🌐 Deployment

Build for production:
```bash
npm run build
```

Deploy to Vercel, Netlify, or your own server using the `dist` folder.

## 🎯 Next Steps

1. Replace placeholder images with real photos
2. Update farmer stories and farm information
3. Generate QR codes with your actual domain
4. Add ordering/payment system (optional)
5. Deploy to your domain

## 🛠️ Tech Stack

- React 18
- React Router v6
- Vite
- CSS3

---

**Made with ❤️ for SAFARY Banana Chips** 🦁🍌

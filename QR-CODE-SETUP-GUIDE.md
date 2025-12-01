# QR Code Setup Guide for Your Banana Chips Packets

## 🎯 Overview
This guide will help you set up QR codes for your banana chips packets so customers can instantly learn about the farmers who grew their bananas.

## 📋 Step-by-Step Instructions

### Step 1: Deploy Your Website

1. **Build your website:**
   ```bash
   npm run build
   ```

2. **Deploy to a hosting service:**
   - **Vercel** (Easiest):
     - Go to vercel.com
     - Sign up with GitHub
     - Import your project
     - Deploy (free)
   
   - **Netlify**:
     - Go to netlify.com
     - Drag and drop your `dist` folder
     - Done!

3. **Connect your domain:**
   - Point your domain to the hosting provider
   - Example: `www.yourbananachiips.com`

### Step 2: Create QR Code URLs

For each batch (1-10), you'll create a unique URL:

```
Batch 1: https://yourdomain.com/farmer/1
Batch 2: https://yourdomain.com/farmer/2
Batch 3: https://yourdomain.com/farmer/3
...
Batch 10: https://yourdomain.com/farmer/10
```

### Step 3: Generate QR Codes

**Recommended Free Tools:**
- qr-code-generator.com
- qrcode-monkey.com
- qr.io

**For Each Batch:**
1. Go to QR code generator website
2. Select "URL" type
3. Enter the URL (e.g., `https://yourdomain.com/farmer/1`)
4. Customize design:
   - Add your logo in the center
   - Use your brand colors (golden yellow/brown)
   - Add a frame with text like "Meet Your Farmer"
5. Download high-resolution PNG (300 DPI minimum)
6. Save as `batch-1-qr.png`, `batch-2-qr.png`, etc.

### Step 4: Design Your Packet

**QR Code Placement Recommendations:**
- **Back of packet** - Most visible
- **Size**: At least 2cm x 2cm (0.8" x 0.8")
- **Contrast**: Black QR on light background

**Add text near QR:**
```
🍌 Know Your Farmer
Scan to meet the farmer who grew your bananas
Batch #1
```

### Step 5: Test Your QR Codes

Before printing:
1. Scan each QR code with your phone
2. Verify it opens the correct farmer page
3. Test on multiple devices (iOS/Android)
4. Check in different lighting conditions

## 📱 Two Implementation Options

### Option A: Direct QR Links (Recommended)
✅ Best user experience
✅ One scan, instant information
✅ No typing needed

Each packet gets a unique QR code:
- Packet with Batch 1 → QR links to `/farmer/1`
- Packet with Batch 2 → QR links to `/farmer/2`
- etc.

### Option B: Single QR with Manual Input
- All packets have same QR → `/farmer`
- Customer enters batch number manually
- More flexible but requires typing

**Recommendation**: Use Option A for better UX

## 🎨 QR Code Design Tips

1. **Add your logo** in the center (30% max size)
2. **Use brand colors** for the QR pattern
3. **Include batch number** printed next to QR
4. **Test readability** - ensure contrast is high
5. **Leave white space** around QR code

## 📦 Packet Mockup Example

```
┌─────────────────────────────┐
│    CRISPY BANANA CHIPS      │
│                             │
│    [Product Photo]          │
│                             │
│    Classic Salted           │
│    100g                     │
│                             │
│  [QR CODE]  Know Your Farmer│
│             Batch #1        │
│    Scan to meet Rajesh Kumar│
│                             │
│    Organic | Fair Trade     │
└─────────────────────────────┘
```

## 🔍 What Customers Will See

When they scan:
1. **Immediate redirect** to farmer page
2. **See farmer photo** and name
3. **Read their story** and farming practices
4. **View farm photos**
5. **Learn about** organic certification

## 💡 Marketing Ideas

**On Social Media:**
- "Want to know who grew your bananas? Just scan!"
- Post farmer stories with QR codes
- Create video tours of farms

**On Website:**
- Show QR scanning demo
- Highlight transparency
- Share customer reactions

**In Store:**
- Demo QR scanning at POS
- Put up posters with farmer profiles
- Create "Farmer of the Month" displays

## 🛠️ Troubleshooting

**QR won't scan:**
- Increase size (minimum 2cm)
- Improve contrast
- Clean up dirty/wrinkled packets
- Check URL is correct

**Wrong farmer appears:**
- Verify batch numbers match QR codes
- Check URLs in QR generator
- Test each QR individually

**Website not loading:**
- Check domain is live
- Test internet connection
- Verify hosting is active

## 📊 Tracking (Optional Future Enhancement)

Consider adding:
- Google Analytics to track scans
- Heatmaps to see which batches are popular
- Customer feedback forms
- Social sharing buttons

## ✅ Final Checklist

Before going to production:

- [ ] Website deployed and live
- [ ] Custom domain connected
- [ ] All 10 QR codes generated
- [ ] Each QR tested and working
- [ ] Farmer information updated with real data
- [ ] Farmer photos replaced with actual photos
- [ ] QR codes printed at high resolution
- [ ] Packet design finalized
- [ ] Test packets printed and tested
- [ ] Legal compliance checked (food labeling)

## 📞 Next Steps

1. Deploy website to your domain
2. Generate and test all 10 QR codes
3. Design packet layout with QR code
4. Print test batch
5. Launch!

---

**Questions?** Update the farmer data in `src/data/farmers.js` with your real farmer information before deploying!

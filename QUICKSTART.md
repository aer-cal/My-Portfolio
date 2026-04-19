# Quick Start Guide - Aaron's Portfolio

## 🚀 Immediate Next Steps

### 1. Test Locally (RIGHT NOW!)
```bash
# Option A: Double-click index.html to open in browser

# Option B: Use Python (Windows)
cd "c:\Users\aaron\OneDrive\Documents\Aaron Portfolio"
python -m http.server 8000

# Then open: http://localhost:8000
```

### 2. Customize Your Contact Links
Open `js/script.js` and update these lines (~line 25):
```javascript
if (text === 'instagram') {
    btn.href = 'https://instagram.com/YOUR_HANDLE';
} else if (text === 'email') {
    btn.href = 'mailto:YOUR_EMAIL@example.com';
}
// ... update other links too
```

### 3. Update Your Social Media Buttons
Currently set to placeholder URLs. Replace with yours:
- Instagram
- Email
- Facebook
- X (Twitter)
- LinkedIn

### 4. Add Images (Already Done!)
Your images are in `assets/` folder:
- 1000075972.jpg - Profile (used in Home & Nav)
- 1000075973.jpg - Contact section
- result_0.jpeg - About section

---

## 📤 Deploy to GitHub (Free Hosting)

### Step 1: Create GitHub Repository
1. Go to github.com (create account if needed)
2. Click "New Repository"
3. Name: `YOUR_USERNAME.github.io`
4. Make it Public
5. Click "Create Repository"

### Step 2: Initialize Git Locally
```bash
cd "c:\Users\aaron\OneDrive\Documents\Aaron Portfolio"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Select `main` branch
4. Click Save
5. Your site lives at: `https://YOUR_USERNAME.github.io`

---

## 🎨 Customize Design

### Change Colors
Edit `css/styles.css` at the top:
```css
:root {
    --primary-color: #5B7AFF;    /* Blue - change this! */
    --dark-bg: #2A2A2A;
    --darker-bg: #1F1F1F;
}
```

### Modify Content
Edit `index.html`:
- Change name in Home section (line 31-32)
- Update skills in About section (line 46-47)
- Add/remove badge placeholders (line 70-75)

### Add More Sections
Copy a section div and modify:
```html
<section id="new-section" class="section new-section">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

---

## 📋 Checklist Before Deployment

- [ ] Updated all contact links (email, social media)
- [ ] Tested in browser locally
- [ ] Images display correctly
- [ ] Navigation works smoothly
- [ ] Mobile view looks good
- [ ] Created GitHub account
- [ ] Initialized git repository
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages

---

## ✅ You're All Set!

Your professional portfolio is ready. Now it's time to:
1. Make it yours (customize text, links, colors)
2. Push to GitHub
3. Share your portfolio URL with the world!

---

**Questions?** Check README.md for more details or refer to the full documentation.

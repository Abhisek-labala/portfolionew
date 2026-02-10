# 🚀 Quick Start Guide

## Get Your Portfolio Live in 5 Minutes!

### Option 1: Deploy to Vercel (Fastest - No Coding Required)

1. **Download** the `abhisek-portfolio` folder
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** with GitHub
4. **Drag and drop** the entire folder into Vercel
5. **Done!** Your site is live!

### Option 2: Deploy via GitHub + Vercel (Recommended)

1. **Create a GitHub account** if you don't have one
2. **Create a new repository** on GitHub
3. **Upload** the portfolio folder to your repository
4. **Go to** [vercel.com](https://vercel.com)
5. **Import** your GitHub repository
6. **Deploy!**

### Option 3: Local Development First

If you want to see it locally before deploying:

```bash
# 1. Open terminal in the portfolio folder
cd abhisek-portfolio

# 2. Install dependencies (first time only)
npm install

# 3. Run development server
npm run dev

# 4. Open browser to http://localhost:3000
```

## 📁 Project Structure

```
abhisek-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   ├── Education.tsx     # Education section
│   └── Contact.tsx       # Contact form
├── public/               # Static files
│   └── abhisek_resume.pdf # Your resume (add this)
├── README.md             # Project documentation
├── DEPLOYMENT_GUIDE.md   # Detailed deployment guide
└── package.json          # Dependencies

```

## ✏️ Customization

### Update Your Information

1. **Personal Details**: Edit `components/Hero.tsx`
2. **Work Experience**: Edit `components/Experience.tsx`
3. **Projects**: Edit `components/Projects.tsx`
4. **Skills**: Edit `components/Skills.tsx`
5. **Education**: Edit `components/Education.tsx`
6. **Contact Info**: Edit `components/Contact.tsx`

### Add Your Resume

1. Add your PDF resume to `public/` folder
2. Name it `abhisek_resume.pdf` (or update the link in About.tsx)

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0A0E27',     // Dark blue
  accent: '#00D9FF',      // Cyan
  gold: '#FFD700',        // Gold
}
```

## 🎨 Features

✅ Fully responsive design
✅ Modern glass morphism UI
✅ Smooth animations
✅ Dark theme
✅ SEO optimized
✅ Fast loading
✅ Mobile-friendly
✅ Contact form
✅ Resume download
✅ Social links

## 📱 Sections Included

1. **Hero** - Introduction with stats
2. **About** - Professional summary
3. **Experience** - Work history
4. **Projects** - Portfolio showcase
5. **Skills** - Technical skills
6. **Education** - Academic background
7. **Contact** - Contact form & info

## 🌐 Your Live URL

After deployment, you'll get a URL like:
- `abhisek-portfolio.vercel.app`
- Or use your custom domain!

## 💡 Pro Tips

1. **Custom Domain**: Add your own domain in Vercel settings
2. **Analytics**: Enable Vercel Analytics to track visitors
3. **Updates**: Just push to GitHub and Vercel auto-deploys
4. **Preview**: Every commit gets a preview URL
5. **SEO**: Update meta tags in `app/layout.tsx`

## 🆘 Need Help?

1. Check `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Check `README.md` for full documentation
3. Visit [Vercel Docs](https://vercel.com/docs)
4. Visit [Next.js Docs](https://nextjs.org/docs)

---

**Ready to go live? Start with Option 1 above! 🚀**

Questions? Check the DEPLOYMENT_GUIDE.md for detailed step-by-step instructions.

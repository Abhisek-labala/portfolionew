# 🚀 Complete Deployment Guide - Abhisek's Portfolio

## Prerequisites

Before deploying, make sure you have:
- A GitHub account
- A Vercel account (free tier is sufficient)
- Git installed on your computer

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Project

1. **Download the portfolio folder** from this location to your computer
2. **Navigate to the project folder** in your terminal/command prompt:
   ```bash
   cd path/to/abhisek-portfolio
   ```

### Step 2: Initialize Git Repository

1. **Initialize Git** in your project folder:
   ```bash
   git init
   ```

2. **Add all files** to Git:
   ```bash
   git add .
   ```

3. **Commit your files**:
   ```bash
   git commit -m "Initial commit - Portfolio website"
   ```

### Step 3: Create GitHub Repository

1. **Go to GitHub** (https://github.com)
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details**:
   - Repository name: `abhisek-portfolio` (or any name you prefer)
   - Description: "My professional portfolio website"
   - Set to Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license
5. **Click "Create repository"**

### Step 4: Push Code to GitHub

1. **Copy the repository URL** from GitHub (looks like: `https://github.com/yourusername/abhisek-portfolio.git`)

2. **Add the remote repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/yourusername/abhisek-portfolio.git
   ```

3. **Push your code**:
   ```bash
   git push -u origin main
   ```

### Step 5: Deploy to Vercel

#### Option A: Deploy from Vercel Dashboard (Easiest)

1. **Go to Vercel** (https://vercel.com)
2. **Sign up/Sign in** using your GitHub account
3. **Click "Add New..."** → **"Project"**
4. **Import your repository**:
   - You'll see a list of your GitHub repositories
   - Find `abhisek-portfolio`
   - Click **"Import"**
5. **Configure project**:
   - Project Name: `abhisek-portfolio` (or customize)
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: Leave default
   - Output Directory: Leave default
6. **Click "Deploy"**
7. **Wait for deployment** (usually takes 1-2 minutes)
8. **Done!** You'll get a URL like `abhisek-portfolio.vercel.app`

#### Option B: Deploy using Vercel CLI

1. **Install Vercel CLI globally**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: **Yes**
   - Which scope: Select your account
   - Link to existing project: **No**
   - Project name: **abhisek-portfolio**
   - Directory: **./** (just press Enter)
   - Override settings: **No**

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Step 6: Custom Domain (Optional)

If you want to use your own domain (e.g., `abhiseklabala.com`):

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Enter your domain name
   - Follow the DNS configuration instructions

2. **Configure DNS** at your domain registrar:
   - Add the A records or CNAME records as shown by Vercel
   - Wait for DNS propagation (can take up to 48 hours, usually faster)

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

1. **Make your changes** to the code
2. **Commit the changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. **Push to GitHub**:
   ```bash
   git push
   ```
4. **Automatic deployment**: Vercel will automatically detect the changes and redeploy!

## ⚙️ Environment Variables (If Needed)

If you add environment variables in the future:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **"Settings"** → **"Environment Variables"**
   - Add your variables
   - Redeploy

## 🐛 Troubleshooting

### Build Fails on Vercel

- Check the build logs in Vercel dashboard
- Common issues:
  - Missing dependencies: Run `npm install` locally
  - TypeScript errors: Fix any type errors
  - ESLint errors: Run `npm run lint` locally

### Portfolio Not Updating

- Make sure you pushed to GitHub: `git push`
- Check Vercel deployments tab for status
- Try manual redeploy in Vercel dashboard

### Images Not Loading

- Ensure images are in the `public` folder
- Use `/image-name.jpg` for paths (starting with `/`)

## 📊 Analytics (Optional)

Add Vercel Analytics:

1. In Vercel Dashboard, go to **"Analytics"** tab
2. Enable analytics
3. View real-time visitor data

## 🎯 Performance Optimization

Your portfolio is already optimized with:
- ✅ Static site generation
- ✅ Optimized images
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minified CSS/JS

## 📞 Need Help?

If you encounter issues:
1. Check Vercel's documentation: https://vercel.com/docs
2. Check Next.js documentation: https://nextjs.org/docs
3. GitHub Issues in your repository

---

## Quick Reference Commands

```bash
# Local development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter

# Git commands
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Vercel commands
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel logs          # View logs
```

---

**Congratulations! Your portfolio is now live! 🎉**

Share your portfolio URL:
- With potential employers
- On LinkedIn
- On your resume
- On business cards

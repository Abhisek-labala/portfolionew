# Abhisek Labala - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, professional design with glass morphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive UI**: Smooth animations and transitions throughout
- **Project Showcase**: Detailed project cards with tech stacks and achievements
- **Contact Form**: Built-in contact form for easy communication

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhisek-labala/abhisek-portfolio.git
cd abhisek-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Abhisek-labala/abhisek-portfolio.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New Project"
5. Import your repository
6. Vercel will auto-detect Next.js and configure everything
7. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: abhisek-portfolio
   - Directory: ./
   - Override settings: No

4. For production deployment:
```bash
vercel --prod
```

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

- `app/layout.tsx` - Update metadata
- `components/Hero.tsx` - Update name, title, and stats
- `components/About.tsx` - Update bio and achievements
- `components/Experience.tsx` - Update work experience
- `components/Projects.tsx` - Update projects
- `components/Skills.tsx` - Update skills
- `components/Education.tsx` - Update education and certifications
- `components/Contact.tsx` - Update contact information

### Color Scheme

Colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0A0E27',
  secondary: '#1A1F3A',
  accent: '#00D9FF',
  accentDark: '#0099CC',
  gold: '#FFD700',
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- Email: abhiseklabala1@gmail.com
- LinkedIn: [linkedin.com/in/abhiseklabala](https://linkedin.com/in/abhisek-labala-a4a537273/)
- GitHub: [github.com/abhiseklabala](https://github.com/Abhisek-labala)

---

Built with ❤️ using Next.js and Tailwind CSS

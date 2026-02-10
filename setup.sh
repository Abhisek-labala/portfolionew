#!/bin/bash

echo "================================================"
echo "   Abhisek's Portfolio - Setup Script"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm is installed: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
else
    echo ""
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "================================================"
echo "   Setup Complete! 🎉"
echo "================================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Run development server:"
echo "   npm run dev"
echo ""
echo "2. Open browser to:"
echo "   http://localhost:3000"
echo ""
echo "3. To deploy to Vercel:"
echo "   - Read DEPLOYMENT_GUIDE.md"
echo "   - Or run: npm install -g vercel && vercel"
echo ""
echo "================================================"

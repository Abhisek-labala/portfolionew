@echo off
echo ================================================
echo    Abhisek's Portfolio - Setup Script
echo ================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X npm is not installed!
    pause
    exit /b 1
)

echo ✓ npm is installed
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Dependencies installed successfully!
    echo.
) else (
    echo.
    echo X Failed to install dependencies
    pause
    exit /b 1
)

echo ================================================
echo    Setup Complete! 🎉
echo ================================================
echo.
echo Next steps:
echo.
echo 1. Run development server:
echo    npm run dev
echo.
echo 2. Open browser to:
echo    http://localhost:3000
echo.
echo 3. To deploy to Vercel:
echo    - Read DEPLOYMENT_GUIDE.md
echo    - Or install Vercel CLI: npm install -g vercel
echo.
echo ================================================
echo.
pause

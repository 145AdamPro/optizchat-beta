# Create project directory
New-Item -ItemType Directory -Path "Optizchat-extension" -Force
Set-Location -Path "Optizchat-extension"

# Initialize Git repository
git init

# Create project structure
New-Item -ItemType Directory -Path "src","src/components","public" -Force

# Create icon placeholder files
Copy-Item "$env:USERPROFILE\Pictures\icon.png" -Destination "public/icon16.png"
Copy-Item "$env:USERPROFILE\Pictures\icon.png" -Destination "public/icon48.png"
Copy-Item "$env:USERPROFILE\Pictures\icon.png" -Destination "public/icon128.png"

# Initialize npm project and install dependencies
npm create vite@latest . -- --template react-ts
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Build the extension
npm run build

Write-Host "`nSetup complete! To load the extension in Chrome:"
Write-Host "1. Open Chrome and go to chrome://extensions/"
Write-Host "2. Enable 'Developer mode' in the top right"
Write-Host "3. Click 'Load unpacked' and select the 'dist' folder"
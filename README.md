# AJ & J Responsive Web Layout

A fully responsive website demonstrating modern web design principles.

## Features
- Mobile-first responsive design
- Clean semantic HTML5
- Modern CSS with Grid and Flexbox
- Accessible navigation
- Cross-browser compatible

## Setup
1. Clone this repository
2. Open `index.html` in any modern browser
3. No build tools or dependencies required

## Screenshots
![Desktop View](images/screenshots/desktop.png)
![Tablet View](images/screenshots/tablet.png)
![Mobile View](images/screenshots/mobile.png)

## Deployment
To deploy this project:

### GitHub Pages
1. Create a GitHub repository
2. Push these files to the `main` branch
3. Go to Settings > Pages
4. Select "Deploy from branch" and choose `main`

### Netlify Deployment
1. Sign up for a free Netlify account at https://app.netlify.com
2. Drag and drop your project folder onto the Netlify dashboard
   - Or connect your GitHub/GitLab repository:
     a. Click "New site from Git"
     b. Select your Git provider
     c. Choose the repository
     d. Leave build settings as default (no build command needed)
     e. Click "Deploy site"
3. Your site will be live at: `https://[your-site-name].netlify.app`
4. For custom domains:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Follow the verification steps

> Note: Netlify automatically deploys updates when you push to your connected repository

## Project Structure
```
.
├── index.html
├── home.html
├── articles.html
├── about.html
├── contact.html
├── README.md
├── css/
│   └── style.css
└── images/
    └── screenshots/
        ├── desktop.png
        ├── tablet.png
        └── mobile.png
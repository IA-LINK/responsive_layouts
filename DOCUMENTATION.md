📘 `DOCUMENTATION.md`

```markdown
# AJ & J Responsive Web Layout – Technical Documentation

## 🎯 Objective

To demonstrate the use of **CSS Grid**, responsive design techniques, and clean code practices in building a modern and accessible web layout.

---

🧱 Layout Architecture

- **Header**: Contains the logo, navigation menu, and search bar.
- **Main Content**: Includes:
  - A `Latest Articles` section using CSS Grid
  - A `Sidebar` with quick links
  - A `Featured` section with images and descriptions
  - A `Newsletter` form
- **Footer**: Social media links and copyright.

---

## 🧩 CSS Techniques Used

### ✅ CSS Grid

Used in:
- `.article-grid` (for laying out the article cards in a grid)
- `.featured-grid` (for displaying featured items side-by-side)

### ✅ Flexbox

Used in:
- `.header-container` for aligning navigation, search bar, and logo
- `.footer-content` for social links and footer info

---

🖥️ Responsive Design

Implemented using **media queries**:
- Breakpoints at `768px` and `1024px` to switch from stacked layout to side-by-side.
- Navigation collapses into a hamburger menu on small screens.
- Flexible units (`%, rem`, and `fr`) used for layouts.

---

🛡️ Accessibility Features

- Semantic tags (`<main>`, `<article>`, `<nav>`, `<section>`, `<aside>`)
- `aria-expanded`, `aria-controls`, and `role="complementary"` used
- Placeholder text and alt attributes for all images

---

 🌍 Cross-Browser Testing

Tested on the following browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari
- ✅ Microsoft Edge

---

⚡ Performance Optimizations

- Lightweight design, minimal images
- Minimized use of JavaScript
- Efficient CSS selectors and modular structure

---

🛠️ How to Use or Extend

- Add your own articles inside `.article-card`
- Update featured images and titles in `.featured-grid`
- Customize sidebar links or newsletter form backend

---

🔗 GitHub Repository

https://github.com/IA-LINK/responsive_layouts

---

🙋‍♂️ Author

Ikwogya Ayika James
📧 Email: jyc.kom@gmail.com  
📍 Federal College of Education (Technical), Keana  
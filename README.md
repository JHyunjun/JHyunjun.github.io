# Hyunjun Jang — Battery Intelligence Homepage

Apple-like premium personal research homepage built with React, Vite, and GitHub Pages.

## 1. Local preview

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## 2. Edit personal information

Edit only this file first:

```text
src/data.js
```

Main fields:

```js
name
koreanName
title
subtitle
affiliation
email
github
blog
linkedin
researchAreas
projects
patents
```

## 3. Deploy as a personal GitHub Pages site

Create a repository named:

```text
<your-github-id>.github.io
```

Example:

```text
JHyunjun.github.io
```

Then push this project:

```bash
git init
git add .
git commit -m "Initial personal homepage"
git branch -M main
git remote add origin https://github.com/<your-github-id>/<your-github-id>.github.io.git
git push -u origin main
```

## 4. Enable GitHub Pages

In the GitHub repository:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

After the workflow completes, the site will be available at:

```text
https://<your-github-id>.github.io/
```

## 5. Deploy as a project page instead

If the repository is not named `<your-github-id>.github.io`, change this line in:

```text
.github/workflows/deploy.yml
```

From:

```yml
GITHUB_PAGES_BASE: /
```

To:

```yml
GITHUB_PAGES_BASE: /repository-name/
```

Example:

```yml
GITHUB_PAGES_BASE: /my-homepage/
```

Then the site will be:

```text
https://<your-github-id>.github.io/repository-name/
```

## 6. Design direction

This project is Apple-inspired, not an Apple clone.

- Minimal black/white design
- Large hero typography
- Scroll reveal animation
- Premium card layout
- Researcher-branding structure
- Mobile responsive layout

## 7. File structure

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src
    ├── App.jsx
    ├── data.js
    ├── main.jsx
    └── styles.css
```

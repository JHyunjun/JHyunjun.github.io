# Hyunjun Jang Homepage V10

Hotfix after v9.

## Fixes

- Fixed broken asset paths:
  - hero-battery-ai.png
  - icon-patents.png
  - icon-research.png
  - icon-ai-modeling.png
- Keeps the designer-quality v9 layout.
- Publications and patents are fully visible, no toggles.

## Deploy

Use GitHub Pages with **GitHub Actions**, not "Deploy from branch".

```bash
git add .
git commit -m "Fix homepage asset paths v10"
git push
```

Then check:

```text
GitHub repository → Actions → Deploy to GitHub Pages → green check
GitHub repository → Settings → Pages → Source → GitHub Actions
```

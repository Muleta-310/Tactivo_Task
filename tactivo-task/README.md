# Tactivo Technologies — Website

A Create React App site with a lightweight hash-based router (no react-router
dependency), matching the existing project structure.

## Structure

```
public/index.html        CRA HTML shell
src/index.js              React entry point
src/App.js                Hash router (#/, #/about, #/services, #/projects, #/team, #/clients, #/contact)
src/styles.css            Global design system (colors, type, layout)
src/components/Header.js  Nav bar with mobile toggle
src/components/Footer.js  Site footer
src/pages/*.js            One component per page
```

## Local development

```
npm install
npm start
```

## Production build

```
npm run build
```

Outputs to `build/` — this is a static export and doesn't need a server, just
a static file host.

## Deploying on Render

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `build`

Since routing is hash-based (`#/about`, not `/about`), no server-side rewrite
rules are needed for client-side routes — this works out of the box on any
static host.

## Content still to replace

Search the `src/pages/` files for `[Replace` and `PLACEHOLDER` to find every
spot that needs real Tactivo content: company history, mission/vision, real
project details, team names/photos, client logos, phone number and email.

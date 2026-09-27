# Shopora

Shopora is a front-end e-commerce app for browsing products, managing a cart, and placing orders. Product data comes from the [DummyJSON](https://dummyjson.com) API. Cart, login, and order history are stored in the browser with `localStorage`.

**Live site:** [https://shopora-anik.netlify.app](https://shopora-anik.netlify.app)

## Tech stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [react-icons](https://react-icons.github.io/react-icons/)
- [jsPDF](https://github.com/parallax/jsPDF) and [html2canvas](https://html2canvas.hertzen.com/) for invoice downloads
- [ESLint](https://eslint.org/)

## Features

- Home page with featured products and category sliders
- Product listing, search, and product details
- Cart drawer and cart page
- Checkout, order confirmation, and PDF invoice download
- Client-side login, profile, and order history
- About and contact pages

## Run locally

You need [Node.js](https://nodejs.org/) (current LTS is fine).

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

# PH-B13-A08: Next.js Library Management System

A modern, full-stack library management system built with Next.js 14, featuring authentication, book browsing, borrowing, and user profile management. This project demonstrates best practices in React, Next.js App Router, and modular component design.

## Features

- User authentication (login/register)
- Browse, search, and view book details
- Borrow books with a single click
- User profile management
- Responsive, modern UI
- Modular, reusable React components

## Project Structure

```
src/
  app/
	 (auth)/         # Authentication pages (login, register)
	 (main)/         # Main app pages (books, home, profile)
	 api/            # API routes (auth)
	 components/     # Reusable UI components
	 lib/            # Utility libraries and data
public/             # Static assets
```

## Getting Started

1. **Install dependencies:**
   ```zsh
   npm install
   ```
2. **Run the development server:**
   ```zsh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- React 18+
- CSS Modules / Tailwind CSS (if used)
- Node.js

## Folder Highlights

- `src/app/(auth)/` — Login and registration pages
- `src/app/(main)/books/` — Book listing and details
- `src/app/components/` — Navbar, Footer, Forms, etc.
- `src/app/api/` — API route handlers
- `src/app/lib/` — Auth logic and data

## Customization

- Add new components in `src/app/components/`
- Update book data in `src/app/lib/data.json`
- Modify authentication logic in `src/app/lib/auth.js`

## License

This project is for educational purposes. Feel free to use and modify for your own learning!

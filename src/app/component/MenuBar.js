"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuBar() {
  const currentPath = usePathname(); // Get the current active path

  return (
    <nav className="bg-white shadow-md p-4 flex justify-center space-x-4">
      <Link
        href="/"
        className={`underline-hover ${
          currentPath === '/' ? 'font-semibold' : 'font-light'
        }`}
      >
        HOME
      </Link>
      <Link
        href="/articles"
        className={`underline-hover ${
          currentPath === '/articles' ? 'font-semibold' : 'font-light'
        }`}
      >
        ARTICLES
      </Link>
      <Link
        href="/about-me"
        className={`underline-hover ${
          currentPath === '/about-me' ? 'font-semibold' : 'font-light'
        }`}
      >
        ABOUT ME
      </Link>
    </nav>
  );
}

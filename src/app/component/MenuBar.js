"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuBar() {
  const currentPath = usePathname(); // Get the current active path

  return (
    <nav className="bg-white shadow-md p-4 flex justify-center space-x-4">
      <Link
        href="/"
        className={`${
          currentPath === '/' ? 'active' : ''
        } hover:underline`}
      >
        HOME
      </Link>
      <Link
        href="/about"
        className={`${
          currentPath === '/about' ? 'active' : ''
        } hover:underline`}
      >
        ARTICLES
      </Link>
      <Link
        href="/contact"
        className={`${
          currentPath === '/contact' ? 'active' : ''
        } hover:underline`}
      >
        ABOUT ME
      </Link>
    </nav>
  );
}

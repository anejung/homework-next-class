
import Link from 'next/link';

export default function MenuBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-center space-x-4">
      <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-500 hover:underline">About</Link>
      <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
    </nav>
  );
}


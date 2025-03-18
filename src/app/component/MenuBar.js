
import Link from 'next/link';

export default function MenuBar() {
  return (
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-4" style={{ fontFamily: "Sora, sans-serif", fontWeight: 300, fontSize: "12px", color: "black" }}>
          <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
          <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a>
          <a href="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
      </nav>
  );
}



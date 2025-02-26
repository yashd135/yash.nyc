'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <li>
      <Link 
        href={href} 
        className={`px-2 py-1 transition-colors ${
          isActive ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center items-center space-x-2">
          <NavLink href="/">Home</NavLink>
          <li className="text-gray-500">|</li>
          <NavLink href="/photography">Photography</NavLink>
          <li className="text-gray-500">|</li>
          <NavLink href="/thoughts">Thoughts</NavLink>
        </ul>
      </nav>
    </header>
  );
} 
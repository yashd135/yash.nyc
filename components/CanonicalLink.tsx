'use client';

import { usePathname } from 'next/navigation';

export function CanonicalLink() {
  const pathname = usePathname();
  
  return (
    <link rel="canonical" href={`https://yash.nyc${pathname}`} />
  );
} 
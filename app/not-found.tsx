import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <Link href="/" className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700">
        Return Home
      </Link>
    </div>
  );
} 
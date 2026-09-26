import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-xl">Page Not Found</p>

      <p className="mt-2 text-gray-500">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link href="/" className="mt-6 rounded-lg bg-black px-6 py-3 text-white">
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;

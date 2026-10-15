import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">404 Error</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-base text-slate-400">
        The resource you are looking for does not exist or has been relocated as part of the Sasvale V2 platform migration.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Return to Home
        </Link>
        <Link
          href="/services"
          className="px-5 py-2.5 text-sm font-semibold text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

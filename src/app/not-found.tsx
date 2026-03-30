import Link from "next/link";
import { ArrowLeftIcon, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-max mx-auto text-center space-y-6 sm:space-y-8">
        
        {/* Huge 404 Number */}
        <h1 
          className="text-7xl sm:text-9xl font-black tracking-tight font-antonio text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 relative"
          aria-label="404 Error"
        >
          404
        </h1>

        {/* Messaging */}
        <div className="space-y-3 sm:space-y-4 max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-antonio text-gray-900 dark:text-gray-100">
            Looks like you've drifted into the ether.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-roboto leading-relaxed">
            The page you're searching for might have been moved, renamed, or temporarily unavailable. 
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col items-center justify-center">
          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 transition-all duration-200 bg-white border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Blog Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

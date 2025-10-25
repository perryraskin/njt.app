import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
            NEW
          </span>
          <span className="text-sm sm:text-base font-medium">
            Try the new and improved app!
          </span>
        </div>
        <Link
          href="https://testflight.apple.com/join/da4zcqfm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 shadow-sm"
        >
          Join Early Access TestFlight
        </Link>
      </div>
    </div>
  );
}

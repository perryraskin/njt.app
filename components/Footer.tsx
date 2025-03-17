import Link from "next/link";
import { Github, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 relative z-10 bg-white bg-opacity-90">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            ©{new Date().getFullYear()} Perry Raskin. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/perryraskin"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:hi@njt.app"
              className="text-gray-500 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Support Email</span>
            </Link>
            <Link
              href="https://raskin.me"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

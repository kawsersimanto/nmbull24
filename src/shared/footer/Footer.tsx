import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import logo from "@/assets/expat-logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="container mt-[115px] pt-[40px] bg-white px-[15px] md:px-[120px]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div>
              <Image
                src={logo}
                alt="Expat Logo"
                className="w-[140px] h-[103px] object-contain lg:w-28"
              />
            </div>
            <p className="text-sm text-gray-600 max-w-[588px]">
              Scan a Turning Hearts Medallion to learn about and interact with those
              who have passed on. You can also begin documenting the legacy you
              wish to leave behind.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Social Media:</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-pink-600"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-800"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                FAQ
              </Link>
              <Link
                href="/country-search"
                className="text-gray-600 hover:text-blue-600"
              >
                Country search
              </Link>
              <Link
                href="/register"
                className="text-gray-600 hover:text-blue-600"
              >
                Register
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-gray-900">(316) 555-0116</p>
              <p className="text-gray-900">deanna.curtis@example.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Ash and Fire. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

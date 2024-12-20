import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 mt-16 px-4 font-sans">
     <div className="containter">
     <div className=" mx-auto space-y-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/faq" className="hover:text-gray-800">
            FAQ - Help Center
          </Link>
          <Link href="/contact" className="hover:text-gray-800">
            Contact
          </Link>
          <Link href="/safety" className="hover:text-gray-800">
            Safety Tips and Driving Etiquette
          </Link>
          <Link href="/guidelines" className="hover:text-gray-800">
            Community Guidelines
          </Link>
          <Link href="/careers" className="hover:text-gray-800">
            Careers
          </Link>
          <Link href="/terms" className="hover:text-gray-800">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-gray-800">
            Privacy Policy
          </Link>
        </nav>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="https://play.google.com">
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="https://apps.apple.com">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <Link href="https://instagram.com" className="hover:text-gray-300">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://facebook.com" className="hover:text-gray-300">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://x.com" className="hover:text-gray-300">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} All rights Reserved. Timweft SAS
        </div>
      </div>
     </div>
    </footer>
  )
}


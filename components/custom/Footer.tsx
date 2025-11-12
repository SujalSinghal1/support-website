"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeFill,
} from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
      <div className="mx-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            24
            <span className="text-blue-500">*</span>7 Services
          </h2>
          <p className="text-sm leading-relaxed">
            We are a multi-brand service center providing doorstep home
            appliance repair. Fast, reliable and transparent service by expert
            technicians.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <RiFacebookCircleFill className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <RiInstagramLine className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <RiTwitterLine className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="YouTube"
            >
              <RiYoutubeFill className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/support#product-details"
                className="hover:text-white"
              >
                Washing Machine Repair
              </Link>
            </li>
            <li>
              <Link
                href="/support#product-details"
                className="hover:text-white"
              >
                Refrigerator Repair
              </Link>
            </li>
            <li>
              <Link
                href="/support#product-details"
                className="hover:text-white"
              >
                Microwave Oven Repair
              </Link>
            </li>
            <li>
              <Link
                href="/support#product-details"
                className="hover:text-white"
              >
                Air Conditioner Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/support#contactus" className="hover:text-white">
                Help & Support Center
              </Link>
            </li>
            <li>
              <Link href="/support#contactus" className="hover:text-white">
                Warranty & Registration
              </Link>
            </li>
            <li>
              <Link href="/support#contactus" className="hover:text-white">
                Contact Service
              </Link>
            </li>
            <li>
              <Link href="/support#faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
              <a href="tel:18001021745" className="hover:text-white">
                18001021745
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
              <a
                href="mailto:support@24x7servicecenter.in"
                className="hover:text-white"
              >
                support@24x7servicecenter.in
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                T-611, Shastri Park,
                <br />
                Delhi - 110053, India
              </span>
            </li>
            <li className="flex flex-col text-xs text-gray-400 mt-2">
              <span>UDYAM: UDYAM DL 05 0067660</span>
              <span>PAN: BESPA6348L</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} 24
          <span className="text-blue-500">*</span>7 Services. All rights
          reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/Policies/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link
            href="/Policies/Terms-conditions"
            className="hover:text-gray-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

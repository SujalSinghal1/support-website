"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleHelp,
  PhoneCall,
  BadgeCheck,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const supportLinks = [
  {
    title: "Support Center",
    href: "/support",
    description: "Get help with manuals, FAQs, and troubleshooting guides.",
    icon: CircleHelp,
  },
  {
    title: "Warranty & Registration",
    href: "/support#contactus",
    description: "Register your product or check warranty coverage.",
    icon: BadgeCheck,
  },
  {
    title: "Contact Service",
    href: "/support#contactus",
    description: "Book a service or talk to our customer care team.",
    icon: PhoneCall,
  },
  {
    title: "Privacy Policy",
    href: "/Policies/privacy-policy",
    description: "Book a service or talk to our customer care team.",
    icon: PhoneCall,
  },
  {
    title: "Terms & Conditions",
    href: "/Policies/Terms-conditions",
    description: "Book a service or talk to our customer care team.",
    icon: PhoneCall,
  },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full bg-white backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <RiCustomerService2Fill className="w-7 h-7 text-blue-600" />
          <span className="font-semibold text-lg text-gray-900 whitespace-nowrap">
            24<span className="text-blue-500">*</span>7 Services
          </span>
        </Link>

        <div className="hidden md:flex justify-center flex-1">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap">
              {supportLinks.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-white text-sm font-medium">
          <Phone className="w-4 h-4" />
          <a href="tel:18001021745">1800-102-1745</a>
        </div>

        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner animate-fadeIn">
          <ul className="flex flex-col p-4 space-y-3 text-gray-800">
            {supportLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-all"
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors mx-4 mb-4 px-4 py-2 rounded-lg text-white text-sm font-medium">
            <Phone className="w-4 h-4" />
            <a href="tel:18001021745">1800-102-1745</a>
          </div>
        </div>
      )}
    </div>
  );
}

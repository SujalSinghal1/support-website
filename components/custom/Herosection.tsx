"use client";

import {
  Search,
  PhoneCall,
  MessageCircle,
  PackageSearch,
  CalendarCog,
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickActions = [
  {
    icon: PackageSearch,
    title: "Product Support",
    desc: "Get manuals, troubleshooting guides, and installation help.",
    href: "#product-details ",
  },
  {
    icon: CalendarCog,
    title: "Book a Service",
    desc: "Schedule repairs or maintenance for your appliances.",
    href: "#contactus",
  },
  {
    icon: PhoneCall,
    title: "Contact Us",
    desc: "Need direct help? Speak with our customer support team.",
    href: "#contactus",
  },
  {
    icon: MessageCircle,
    title: "Chat with Us",
    desc: "Instantly connect with an agent for live assistance.",
    href: "https://wa.me/18001021745",
  },
];

const cardVariants = {
  initial: { y: 0 },
  hover: { y: -6, scale: 1.03 },
};

export function HeroSupport() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#f0ece4] max-md:bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#ffffff40] via-transparent to-[#cdd0c540]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl text-left mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c3e50] mb-5 tracking-tight"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#4f4f4f] leading-relaxed"
          >
            Find manuals, troubleshooting guides, warranty info, or connect
            directly with our support team. We’re here to help.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl flex flex-col sm:flex-row items-center gap-3"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
            <Input
              type="text"
              placeholder="Search for help topics, products, or guides..."
              className="pl-10 text-base py-6 w-full bg-white/90 border border-[#d6d3ce] rounded-xl shadow-sm focus:ring-2 focus:ring-[#1f6feb] transition-all"
            />
          </div>
          <Button
            size="lg"
            className="w-full sm:w-auto shrink-0 bg-[#1f6feb] text-white hover:bg-[#174fb8] rounded-xl shadow-md hover:shadow-lg transition-all"
            aria-label="Search"
          >
            Search
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-xl font-semibold text-[#2c3e50] mb-8">
            Or get started with...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="h-full"
                >
                  <Link href={action.href} className="h-full">
                    <Card className="h-full cursor-pointer overflow-hidden border border-[#e0ddd4] bg-white/95 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#1f6feb]/40 transition-all duration-300">
                      <CardHeader className="flex flex-row items-start gap-4 pt-6 pb-2 px-6">
                        <div className="p-3 rounded-2xl bg-[#eaf2ff] text-[#1f6feb] shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-[#2c3e50]">
                          {action.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <p className="text-sm text-[#4f4f4f] leading-relaxed">
                          {action.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

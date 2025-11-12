"use client";
import { motion } from "framer-motion";
import { CheckCircle, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  bullets: string[];
  image: string;
  href?: string;
}

export default function ServicesCard({
  title,
  bullets,
  image,
  href,
}: ServiceCardProps) {
  const navigate = useRouter();
  return (
    <motion.div
      className="relative flex flex-col md:flex-row bg-white/90 rounded-2xl shadow-md hover:shadow-2xl 
                 overflow-hidden transition-all duration-300 cursor-pointer border border-[#e0ddd4]"
    >
      {/* Left: Text Content */}
      <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-[#f0ece4] p-3 rounded-xl shadow-sm">
            <Wrench className="text-[#2c3e50]" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] tracking-tight">
            {title}
          </h3>
        </div>

        <ul className="space-y-3 mt-3">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-start text-[#4f4f4f] text-base leading-relaxed"
            >
              <CheckCircle className="text-[#1f6feb] mt-1 shrink-0" size={20} />
              <span className="ml-2">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 self-start bg-[#1f6feb] hover:bg-[#174fb8] text-white font-medium px-6 py-2.5 
                     rounded-lg shadow-md transition-all duration-200 hover:cursor-pointer"
          onClick={() => navigate.push(href || "/support#contactus")}
        >
          Book Service
        </motion.button>
      </div>

      {/* Right: Image Section */}
      <div className="relative w-full md:w-1/3 bg-[#f0ece4] flex items-center justify-center">
        {/* The image is allowed to overflow this section but stays inside the card */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <div className="relative w-[360px] h-[260px] md:w-[420px] md:h-[300px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 360px, 420px"
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient border accent */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#1f6feb]/5 via-transparent to-[#2c3e50]/5" />
    </motion.div>
  );
}

"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Building2,
  Info,
  Refrigerator,
  WashingMachine,
  AirVent,
  Microwave,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicesCard } from "@/components/custom/components.export";
import {
  AC,
  microwave,
  refgirator,
  washingmachine,
} from "@/components/assets/images.export";

export default function HomePage() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
      },
    },
  };

  return (
    <main className="min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute pointer-events-none" />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                className="mr-2 my-2 border-gray-200 hover:bg-blue-50 transition-all duration-300"
              >
                <span className="font-medium text-blue-800 dark:text-gray-200">
                  24X7
                </span>
                Services
              </Button>
              <Link href="tel:18001021745">
                <Button
                  variant="outline"
                  className="border-gray-200 hover:bg-blue-50 transition-all duration-300 hover:cursor-pointer"
                >
                  <PhoneCall className="h-5 w-5 text-[#1f6feb]" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Call: 1800-102-1745
                  </span>
                </Button>
              </Link>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#2c3e50]">
                Reliable Home Appliance{" "}
                <span className="text-[#1f6feb]">Repair Experts</span>
              </h1>
              <p className="mt-4 text-lg max-w-xl text-[#4f4f4f]">
                Trusted technicians for Washing Machines, Refrigerators, Air
                Conditioners, and Microwave Ovens fast, certified, and at your
                doorstep.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="px-8 py-5 bg-[#1f6feb] hover:bg-[#174fb8] text-white text-lg font-medium shadow-md rounded-lg"
                >
                  <Link href="/support#contactus">Book Service Now</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-sm">
                <Stat label="Expert Technicians" value="50+" />
                <Stat label="Appliances Repaired" value="1700+" />
                <Stat label="Branches" value="20+" />
                <Stat label="Happy Clients" value="1500+" />
              </div>
            </motion.div>
          </div>

          {/* Right Icon Grid */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-md sm:max-w-lg h-[420px] flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#1f6feb]/10 to-[#2c3e50]/10 blur-2xl" />
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 z-10"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <ApplianceIcon
                  icon={<WashingMachine size={40} />}
                  label="Washing Machine"
                />
                <ApplianceIcon
                  icon={<Refrigerator size={40} />}
                  label="Refrigerator"
                />
                <ApplianceIcon
                  icon={<AirVent size={40} />}
                  label="Air Conditioner"
                />
                <ApplianceIcon
                  icon={<Microwave size={40} />}
                  label="Microwave Oven"
                />
                <ApplianceIcon
                  icon={<AirVent size={40} />}
                  label="Maintenance"
                />
                <ApplianceIcon
                  icon={<WashingMachine size={40} />}
                  label="Doorstep Repair"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <ServicesCard
            title="Washing Machines"
            bullets={[
              "Drum Not Spinning",
              "Water Not Draining",
              "Loud Noise",
              "Machine Not Starting",
              "Water Leakage",
            ]}
            image={washingmachine}
            href={"/support#product-details"}
          />
          <ServicesCard
            title="Refrigerators"
            bullets={[
              "Not Cooling",
              "Water Leakage",
              "Over Freezing",
              "Unusual Noises",
              "Door Seal Replacement",
            ]}
            image={refgirator}
            href={"/support#product-details"}
          />
          <ServicesCard
            title="Microwave Ovens"
            bullets={[
              "Not Heating",
              "Turntable Not Rotating",
              "No Power",
              "Sparking Inside",
              "Unresponsive Buttons",
            ]}
            image={microwave}
            href={"/support#product-details"}
          />
          <ServicesCard
            title="Air Conditioners"
            bullets={[
              "AC Not Cooling",
              "Water Leakage",
              "Unusual Noises",
              "Foul Odors",
              "Remote Not Working",
            ]}
            image={AC}
            href={"/support#product-details"}
          />
        </motion.div>
      </section>

      {/* About + Contact */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* About */}
          <Card className="lg:col-span-2 border-none bg-white/90 backdrop-blur-md shadow-lg rounded-2xl">
            <CardHeader className="border-b border-[#e0ddd4] pb-4">
              <CardTitle className="text-[#2c3e50] text-2xl font-semibold flex items-center gap-2">
                <Info className="text-[#1f6feb]" /> About 24x7 Service Center
                Support
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 text-[#4f4f4f] leading-relaxed">
              <p>
                We are a certified multi-brand service provider offering
                reliable doorstep repair for all major home appliances.
                Transparency, quality, and timely service are the core of our
                operations.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InfoRow label="UDYAM" value="UDYAM DL 05 0067660" />
                <InfoRow label="PAN" value="BESPA6348L" />
                <InfoRow label="Company" value="24x7 Service Center Support" />
                <InfoRow label="Contact" value="18001021745" />
                <InfoRow
                  label="Address"
                  value="T-611, Shastri Park, Delhi - 110053"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-linear-to-br from-[#1f6feb]/90 to-[#174fb8] text-white shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                <Phone className="text-white" /> Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                Need urgent help? Call our helpline or book a doorstep visit.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-white" />
                  <span>1800-102-1745</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-white" />
                  <span>T-611, Shastri Park, Delhi - 110053</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 size={20} className="text-white" />
                  <span>24x7 Service Center Support</span>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-white text-[#1f6feb] hover:bg-blue-50 font-semibold py-3 rounded-lg shadow-md"
                >
                  <a href="tel:18001021745">Call Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function ApplianceIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[#1f6feb] mb-2">{icon}</div>
      <span className="text-sm font-medium text-[#2c3e50]">{label}</span>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "").trim();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const animation = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => animation.stop();
  }, [numericValue]);

  return (
    <div className="flex flex-col items-start">
      <span className="text-2xl font-bold text-[#2c3e50]">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm text-[#4f4f4f]">{label}</span>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border-l-4 border-[#1f6feb]/70 pl-3">
      <span className="text-xs text-[#6b7280] uppercase tracking-wide">
        {label}
      </span>
      <span className="text-sm font-medium text-[#2c3e50]">{value}</span>
    </div>
  );
}

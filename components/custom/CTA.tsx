"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FileText,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  urgency: string;
  product: string;
  modelNo: string;
  issue: string;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  product: string;
  modelNo: string;
  purchaseDate: string;
}

interface InputGroupProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

type ActionCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  buttonText: string;
  primary?: boolean;
  onClick: () => void;
};

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
};

export default function CTA() {
  const [contactOpen, setContactOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    urgency: "normal",
    product: "",
    modelNo: "",
    issue: "",
  });
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    modelNo: "",
    purchaseDate: "",
  });
  const [trackId, setTrackId] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const submitTicket = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Ticket submitted successfully!", {
      description: "Our support team will contact you shortly.",
    });
    setContactOpen(false);
  };

  const submitRegistration = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Product registered successfully!", {
      description: "Your warranty has been activated.",
    });
    setRegisterOpen(false);
  };

  const handleTrackTicket = () => {
    if (!trackId.trim()) {
      toast.error("Please enter a valid Ticket ID.");
      return;
    }
    toast.info("Tracking Status", {
      description: `Ticket ID: ${trackId} — Current status: In Progress (Demo)`,
    });
  };

  return (
    <section className="relative bg-[#f0ece4] rounded-2xl py-20 px-6" id="contactus">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2c3e50] mb-3 tracking-tight">
            Service & Warranty Assistance
          </h2>
          <p className="text-[#4f4f4f] max-w-2xl mx-auto text-base md:text-lg">
            Need help with your appliance? From booking a technician to tracking
            your service we’re just a click away.
          </p>
        </motion.div>

        {/* Top Action Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <ActionCard
            icon={<Headphones className="w-6 h-6 text-[#1f6feb]" />}
            title="Book a Service"
            desc="Get certified technicians at your doorstep quickly."
            buttonText="Book Now"
            primary
            onClick={() => setContactOpen(true)}
          />
          <ActionCard
            icon={<FileText className="w-6 h-6 text-[#1f6feb]" />}
            title="Register Product"
            desc="Activate warranty and receive product updates."
            buttonText="Register"
            onClick={() => setRegisterOpen(true)}
          />
          <ActionCard
            icon={<MapPin className="w-6 h-6 text-[#1f6feb]" />}
            title="Find Service Center"
            desc="Locate authorized centers near you in seconds."
            buttonText="Locate"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=T-611,+Shastri+Park,+Delhi+-+110053",
                "_blank"
              )
            }
          />
        </div>

        {/* Contact + Track */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#e0ddd4] p-8"
          >
            <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">
              Contact Support
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <ContactCard
                icon={<MessageCircle className="w-6 h-6 text-[#1f6feb]" />}
                title="Live Chat"
                desc="Chat instantly with our support representative."
                href="https://wa.me/18001021745"
              />
              <ContactCard
                icon={<Phone className="w-6 h-6 text-[#1f6feb]" />}
                title="Call Support"
                desc="Toll-free 1800 102 1745 | Mon–Sat, 9 AM – 8 PM"
                href="tel:18001021745"
              />
              <ContactCard
                icon={<FileText className="w-6 h-6 text-[#1f6feb]" />}
                title="Email"
                desc="support@24x7servicecenter.com | Response within 24h"
                href="mailto:support@24x7servicecenter.com"
              />
              <ContactCard
                icon={<Headphones className="w-6 h-6 text-[#1f6feb]" />}
                title="WhatsApp"
                desc="Message us directly for quick updates and support."
                href="https://wa.me/18001021745"
              />
            </div>
          </motion.div>

          {/* Track Request */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#e0ddd4] p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-3">
                Track Your Request
              </h3>
              <p className="text-[#4f4f4f] mb-6 text-sm">
                Enter your ticket ID to check real-time service updates.
              </p>
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Enter Ticket ID"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  className="flex-1 border border-[#d3d0c9] focus:ring-[#1f6feb] focus:border-[#1f6feb] bg-white text-[#2c3e50]"
                />
                <Button
                  onClick={handleTrackTicket}
                  className="bg-[#1f6feb] hover:bg-[#174fb8] text-white font-medium"
                >
                  Track
                </Button>
              </div>
            </div>
            <div className="mt-6 text-xs text-[#4f4f4f] text-center">
              Need help?{" "}
              <Link
                href="https://wa.me/18001021745"
                className="text-[#1f6feb] font-medium"
              >
                Chat Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Book Service Sheet */}
      <Sheet open={contactOpen} onOpenChange={setContactOpen}>
        <SheetContent className="overflow-y-auto px-5 w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Submit a Support Ticket</SheetTitle>
            <SheetDescription>
              Fill out the form below and our team will get back to you.
            </SheetDescription>
          </SheetHeader>

          <form onSubmit={submitTicket} className="space-y-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup
                label="Name"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <InputGroup
                label="Email"
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup
                label="Phone (Optional)"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, urgency: value })
                  }
                >
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <InputGroup
              label="Product"
              id="product"
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              placeholder="e.g., Refrigerator"
            />
            <InputGroup
              label="Model Number (Optional)"
              id="modelNo"
              value={formData.modelNo}
              onChange={(e) =>
                setFormData({ ...formData, modelNo: e.target.value })
              }
              placeholder="e.g., RF340X"
            />
            <div className="space-y-2">
              <Label htmlFor="issue">Describe the issue</Label>
              <Textarea
                id="issue"
                rows={5}
                required
                value={formData.issue}
                onChange={(e) =>
                  setFormData({ ...formData, issue: e.target.value })
                }
                placeholder="What happened? Any error codes?"
              />
            </div>

            <SheetFooter className="mt-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Submit Ticket
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      {/* Register Product Sheet */}
      <Sheet open={registerOpen} onOpenChange={setRegisterOpen}>
        <SheetContent className="overflow-y-auto px-5 w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Register Your Product</SheetTitle>
            <SheetDescription>
              Fill in the product details to activate your warranty.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={submitRegistration} className="space-y-4 py-6">
            <InputGroup
              label="Name"
              id="r-name"
              required
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
            <InputGroup
              label="Email"
              id="r-email"
              type="email"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <InputGroup
              label="Phone"
              id="r-phone"
              type="tel"
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({ ...registerData, phone: e.target.value })
              }
            />
            <InputGroup
              label="Product"
              id="r-product"
              required
              value={registerData.product}
              onChange={(e) =>
                setRegisterData({ ...registerData, product: e.target.value })
              }
              placeholder="e.g., Washing Machine"
            />
            <InputGroup
              label="Model Number"
              id="r-modelNo"
              value={registerData.modelNo}
              onChange={(e) =>
                setRegisterData({ ...registerData, modelNo: e.target.value })
              }
              placeholder="e.g., WMX400"
            />
            <InputGroup
              label="Purchase Date"
              id="purchaseDate"
              type="date"
              required
              value={registerData.purchaseDate}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  purchaseDate: e.target.value,
                })
              }
            />
            <SheetFooter className="mt-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Register Product
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </section>
  );
}

function InputGroup({
  label,
  id,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}: InputGroupProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

function ActionCard({
  icon,
  title,
  desc,
  buttonText,
  primary,
  onClick,
}: ActionCardProps) {
  return (
    <motion.div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#e0ddd4] p-8 flex flex-col justify-between">
      <div className="flex items-start gap-3 mb-5">
        <div className="bg-[#f0ece4] p-3 rounded-xl shadow-sm">{icon}</div>
        <div>
          <h4 className="font-semibold text-[#2c3e50] text-lg">{title}</h4>
          <p className="text-sm text-[#4f4f4f] mt-1">{desc}</p>
        </div>
      </div>
      <Button
        onClick={onClick}
        className={`w-full py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:cursor-pointer ${
          primary
            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
            : "border border-[#1f6feb] text-[#1f6feb] hover:bg-[#1f6feb] hover:text-white"
        }`}
        variant={primary ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
}

function ContactCard({ icon, title, desc, href }: ContactCardProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex flex-col bg-[#f0ece4]/40 rounded-xl p-5 border border-[#e0ddd4] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-[#1f6feb]/10 p-2 rounded-lg">{icon}</div>
        <h5 className="font-semibold text-[#2c3e50]">{title}</h5>
      </div>
      <p className="text-sm text-[#4f4f4f]">{desc}</p>
    </motion.a>
  );
}

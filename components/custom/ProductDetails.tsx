"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  microwave,
  refgirator,
  washingmachine,
} from "@/components/assets/images.export";
import {
  Refrigerator,
  WashingMachine,
  Thermometer,
  Cpu,
  Headphones,
  ArrowLeft,
  FileText,
  PlayCircle,
  ShieldCheck,
  AlertCircle,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// --- Data Types ---
type IconType = React.ElementType;

interface Category {
  id: string;
  title: string;
  desc: string;
  icon: IconType;
  models: Model[];
  faqs: FAQ[];
  troubleshooting: Troubleshoot[];
  related?: { title: string; link?: string }[];
}

interface Model {
  id: string;
  name: string;
  modelNo: string;
  image: string;
  highlights: string[];
  specs: string[];
  manuals?: { title: string; href?: string }[];
  videos?: { title: string; href?: string }[];
  warranty?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface Troubleshoot {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  causes: string[];
  actions: string[];
  estimatedEffort?: string; // e.g., quick fix or requires service
}

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  // State for Modals/Sheets
  const [contactOpen, setContactOpen] = useState(false); // For contact sheet
  const [trackOpen, setTrackOpen] = useState(false); // For tracking repair sheet
  const navigate = useRouter();

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    modelNo: "",
    issue: "",
    urgency: "normal",
  });

  const [trackId, setTrackId] = useState("");

  // dynamic data for each category
  const categories: Category[] = [
    {
      id: "refrigerators",
      title: "Refrigerators",
      desc: "Cooling performance, temperature control and maintenance help",
      icon: Refrigerator,
      models: [
        {
          id: "rf340",
          name: "FrostFree 340L",
          modelNo: "RF340X",
          image: refgirator,
          highlights: [
            "Digital inverter compressor for energy savings",
            "Smart temperature zones",
            "Quick freeze mode for rapid chilling",
          ],
          specs: [
            "Capacity 340L",
            "Energy rating 5 star",
            "Compressor digital inverter",
            "Warranty 1 year comprehensive 10 years on compressor",
          ],
          manuals: [{ title: "User manual", href: "/manuals/rf340.pdf" }],
          videos: [{ title: "Setup guide", href: "/videos/rf340-setup.mp4" }],
          warranty:
            "1 year full warranty plus 10 years on compressor subject to registration",
        },
        {
          id: "cp410",
          name: "CoolPro 410L",
          modelNo: "CP410F",
          image: refgirator,
          highlights: ["Convertible freezer option", "App remote control"],
          specs: ["Capacity 410L", "Smart app control", "Warranty 2 years"],
        },
      ],
      faqs: [
        {
          q: "Why is my fridge not cooling evenly",
          a: "Check air vents inside and avoid blocking them. Keep heavy items away from vents and do not overfill.",
        },
        {
          q: "When should I defrost",
          a: "Auto defrost models manage frost automatically. For manual models defrost when ice exceeds 5mm.",
        },
      ],
      troubleshooting: [
        {
          id: "rf-t1",
          title: "Not cooling enough",
          severity: "High",
          causes: [
            "Compressor not running",
            "Dirty condenser coils",
            "Blocked vents or overloaded interior",
          ],
          actions: [
            "Verify power and temperature settings",
            "Clean condenser coils at the back",
            "Reduce interior load and allow airflow",
            "If persists schedule service",
          ],
          estimatedEffort: "requires technician if compressor issue",
        },
        {
          id: "rf-t2",
          title: "Frost build up in freezer",
          severity: "Medium",
          causes: [
            "Door not closing fully",
            "Faulty door gasket",
            "Frequent door opening",
          ],
          actions: [
            "Inspect door seal for damage",
            "Clean gasket and ensure proper closing",
            "Avoid placing hot food directly inside",
          ],
          estimatedEffort: "quick fix or gasket replacement",
        },
      ],
      related: [
        { title: "How to clean condenser coils" },
        { title: "Best temperature settings for food safety" },
      ],
    },
    {
      id: "washing",
      title: "Washing Machines",
      desc: "Drain issues spin problems error codes and maintenance",
      icon: WashingMachine,
      models: [
        {
          id: "sw700",
          name: "SmartWash 7kg",
          modelNo: "SW700X",
          image: washingmachine,
          highlights: [
            "AI wash optimization",
            "Low noise operation",
            "Auto balance",
          ],
          specs: [
            "Load capacity 7kg",
            "Spin speed 1200 rpm",
            "Warranty 2 years",
          ],
          manuals: [{ title: "Quick start guide" }],
          videos: [{ title: "Drum maintenance" }],
        },
      ],
      faqs: [
        {
          q: "Why is the washer vibrating excessively",
          a: "Check that the machine is level stable and load is balanced. Remove extra items and redistribute heavier garments.",
        },
        {
          q: "What does error E21 mean",
          a: "Typically E21 indicates a drain problem check the drain hose and pump filter for obstruction",
        },
      ],
      troubleshooting: [
        {
          id: "wm-t1",
          title: "Washer not draining",
          severity: "High",
          causes: ["Clogged drain hose", "Blocked pump filter", "Pump failure"],
          actions: [
            "Remove and clean pump filter",
            "Inspect and clear drain hose",
            "If pump failed book service",
          ],
          estimatedEffort: "30 to 60 minutes cleaning or service call",
        },
        {
          id: "wm-t2",
          title: "Door wont lock",
          severity: "Medium",
          causes: ["Faulty door switch", "Obstruction in latch"],
          actions: [
            "Check for foreign objects in door seal",
            "Replace latch if faulty",
          ],
        },
      ],
      related: [
        { title: "How to clean pump filter" },
        { title: "Choosing the right detergent" },
      ],
    },
    {
      id: "ac",
      title: "Air Conditioners",
      desc: "Filter cleaning compressor performance and refrigerant checks",
      icon: Thermometer,
      models: [
        {
          id: "ac15",
          name: "CoolBreeze 1.5T",
          modelNo: "AC15T",
          image: washingmachine,
          highlights: ["Dual inverter", "Turbo cool", "Auto swing"],
          specs: ["Tonnage 1.5", "Energy rating 5 star", "Gas type R32"],
          manuals: [{ title: "Installation guide" }],
          warranty: "2 years comprehensive 5 years on PCB",
        },
      ],
      faqs: [
        {
          q: "Why is my ac freezing up",
          a: "Dirty filters or low refrigerant can cause coil freezing. Turn unit off and call service if freezing recurs.",
        },
      ],
      troubleshooting: [
        {
          id: "ac-t1",
          title: "Insufficient cooling",
          severity: "High",
          causes: [
            "Dirty filters",
            "Blocked outdoor airflow",
            "Low refrigerant",
          ],
          actions: [
            "Clean filters",
            "Clear outdoor unit",
            "If persists book technician for refrigerant check",
          ],
        },
        {
          id: "ac-t2",
          title: "Strange outdoor noise",
          severity: "Medium",
          causes: ["Loose fan blades", "Compressor stress"],
          actions: [
            "Inspect outdoor fan mountings",
            "Avoid using until checked",
          ],
        },
      ],
      related: [{ title: "When to replace AC filters" }],
    },
    {
      id: "kitchen",
      title: "Kitchen Appliances",
      desc: "Ovens cooktops dishwashers and range hoods",
      icon: Cpu,
      models: [
        {
          id: "ov30",
          name: "OvenMaster 30L",
          modelNo: "OV30",
          image: microwave,
          highlights: [
            "Convection",
            "Self clean mode",
            "Temperature precision",
          ],
          specs: ["Capacity 30L", "Timer and presets", "Warranty 1 year"],
        },
      ],
      faqs: [
        {
          q: "Why does my oven smoke sometimes",
          a: "Leftover grease or food particles can smoke when heating use self clean or wipe thoroughly before use",
        },
      ],
      troubleshooting: [
        {
          id: "kt-t1",
          title: "Oven not reaching temperature",
          severity: "Medium",
          causes: ["Faulty heating element", "Incorrect calibration"],
          actions: [
            "Verify temperature with independent thermometer",
            "Replace heating element if needed",
          ],
        },
      ],
      related: [{ title: "Self clean best practices" }],
    },
    {
      id: "microwave",
      title: "Microwave Ovens",
      desc: "Sparking heating uneven cooking and door issues",
      icon: Wrench,
      models: [
        {
          id: "mw20",
          name: "QuickHeat 20L",
          modelNo: "MW20QH",
          image: microwave,
          highlights: ["Rapid heat", "Child lock", "Ceramic cavity easy clean"],
          specs: ["Capacity 20L", "700 W power", "Warranty 1 year"],
          manuals: [{ title: "Safety and operation guide" }],
        },
      ],
      faqs: [
        {
          q: "Why does the microwave spark",
          a: "Metal objects foil or certain ceramics with metallic trim can spark remove metal items immediately",
        },
      ],
      troubleshooting: [
        {
          id: "mw-t1",
          title: "Microwave not heating",
          severity: "High",
          causes: ["Faulty magnetron", "Door switch failure"],
          actions: [
            "Ensure the door closes firmly and latched",
            "Try simple resets by unplugging for 5 minutes",
            "If still not heating arrange service",
          ],
          estimatedEffort: "Technician replacement likely",
        },
      ],
      related: [{ title: "Microwave safe containers guide" }],
    },
    {
      id: "service",
      title: "Service and Warranty",
      desc: "Book a repair check warranty and track service history",
      icon: Headphones,
      models: [],
      faqs: [
        {
          q: "How do I book a service visit",
          a: "Use our contact form or call the helpline to book a technician at your convenience",
        },
      ],
      troubleshooting: [],
      related: [{ title: "Warranty claim process" }],
    },
  ];
  function resetToCategories() {
    setSelectedCategory(null);
    setSelectedModel(null);
  }

  function submitTicket(e?: React.FormEvent) {
    e?.preventDefault();
    toast.success("Ticket submitted successfully!", {
      description: "Our support team will contact you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      modelNo: "",
      issue: "",
      urgency: "normal",
    });
    setContactOpen(false);
  }

  function handleTrackTicket(e?: React.FormEvent) {
    e?.preventDefault();
    alert(`Tracking ticket ID: ${trackId}. Status: In Progress (Demo)`);
    setTrackId("");
    setTrackOpen(false);
  }

  function openReportFor(category?: Category, model?: Model) {
    setFormData((s) => ({
      ...s,
      product: model?.name ?? category?.title ?? "",
      modelNo: model?.modelNo ?? "",
    }));
    setContactOpen(true);
  }

  const filteredCategories = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-10 p-4 md:p-6 max-md:w-full" id="product-details">
      <div className="mx-auto">
        {/* Main Content Area with Animations */}
        <AnimatePresence mode="wait">
          {/* Category Grid */}
          {!selectedCategory && (
            <motion.div
              key="categoryGrid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  // FIX: Changed to motion.div and Card is clickable
                  <motion.div
                    key={cat.id}
                    layout // Animate layout changes (e.g., from filtering)
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <Card
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedModel(null);
                      }}
                      className="h-full flex flex-col cursor-pointer hover:shadow-xl transition-shadow border-transparent hover:border-blue-500"
                      aria-label={`Open ${cat.title} support`}
                    >
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="p-3 rounded-full bg-blue-100">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle>{cat.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {cat.desc}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardFooter className="mt-auto pt-4">
                        <span className="text-xs text-gray-500">
                          {cat.models.length} models
                        </span>
                        {/* FIX: This button is no longer nested. e.stopPropagation() prevents card click. */}
                        <Button
                          variant="link"
                          className="ml-auto"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            openReportFor(cat, undefined);
                          }}
                        >
                          Report an issue
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Models List */}
          {selectedCategory && !selectedModel && (
            <motion.div
              key="modelsList"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => resetToCategories()}
                      aria-label="Back to categories"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </Button>
                    <div>
                      <CardTitle className="text-2xl">
                        {selectedCategory.title} Support
                      </CardTitle>
                      <CardDescription>{selectedCategory.desc}</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => navigate.push("#contactus")}
                      className="ml-auto hidden md:inline-flex hover:cursor-pointer"
                    >
                      Product not listed?
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedCategory.models.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedCategory.models.map((m) => (
                        <motion.div whileHover={{ scale: 1.02 }} key={m.name}>
                          <Card
                            onClick={() => setSelectedModel(m)}
                            className="relative flex flex-col md:flex-row bg-white/90 rounded-2xl shadow-md hover:shadow-2xl 
                              overflow-hidden transition-all duration-300 cursor-pointer border border-[#e0ddd4]"
                            role="button"
                            aria-label={`Open model ${m.name}`}
                          >
                            {/* Left: Model Details */}
                            <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="bg-[#f0ece4] p-3 rounded-xl shadow-sm">
                                  <Wrench
                                    className="text-[#2c3e50]"
                                    size={24}
                                  />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] tracking-tight">
                                  {m.name}
                                </h3>
                              </div>

                              <ul className="space-y-3 mt-3">
                                <li className="flex items-start text-[#4f4f4f] text-base leading-relaxed">
                                  <FileText
                                    className="text-[#1f6feb] mt-1 shrink-0"
                                    size={20}
                                  />
                                  <span className="ml-2">
                                    Model No: {m.modelNo}
                                  </span>
                                </li>
                                <li className="flex items-start text-[#4f4f4f] text-base leading-relaxed">
                                  <FileText
                                    className="text-[#1f6feb] mt-1 shrink-0"
                                    size={20}
                                  />
                                  <span className="ml-2">
                                    Manuals & Guides available
                                  </span>
                                </li>
                              </ul>

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="mt-6 self-start bg-[#1f6feb] hover:bg-[#174fb8] text-white font-medium px-6 py-2.5 
                                  rounded-lg shadow-md transition-all duration-200"
                              >
                                View Manuals
                              </motion.button>
                            </div>

                            {/* Right: Model Image */}
                            <div className="relative w-full md:w-1/3 flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10"
                              >
                                <div className="relative w-[360px] h-[260px] md:w-[420px] md:h-[300px]">
                                  <Image
                                    src={m.image}
                                    alt={m.name}
                                    fill
                                    className="object-contain drop-shadow-xl"
                                    sizes="(max-width: 768px) 360px, 420px"
                                  />
                                </div>
                              </motion.div>
                            </div>

                            {/* Subtle gradient border accent */}
                            <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#1f6feb]/5 via-transparent to-[#2c3e50]/5" />
                          </Card>
                        </motion.div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={() => navigate.push("#contactus")}
                        className="hidden max-md:block mx-auto my-2 hover:cursor-pointer"
                      >
                        Product not listed?
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <AlertCircle className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-600 mb-4">
                        No specific models are listed for this category.
                      </p>
                      <Button
                        onClick={() =>
                          openReportFor(selectedCategory, undefined)
                        }
                      >
                        Report my product
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Model Details */}
          {selectedModel && selectedCategory && (
            <motion.div
              key="modelDetail"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedModel(null)}
                      aria-label="Back to models"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </Button>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">
                        {selectedModel.name}
                      </CardTitle>
                      <CardDescription>
                        Model number: {selectedModel.modelNo}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="hover:cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                        onClick={() =>
                          openReportFor(selectedCategory, selectedModel)
                        }
                      >
                        Report issue
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-10">
                  {/* Overview Section */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <Image
                      src={selectedModel.image}
                      alt={selectedModel.name}
                      width={500}
                      height={100}
                      className="object-cover rounded-xl shadow-md mx-auto"
                    />
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Highlights
                        </h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedModel.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Specifications
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {selectedModel.specs.map((s, i) => (
                            <li key={i}>• {s}</li>
                          ))}
                        </ul>
                      </div>

                      {selectedModel.warranty && (
                        <Card className="bg-gray-50/70">
                          <CardHeader className="flex-row items-center gap-3 p-4">
                            <ShieldCheck className="w-6 h-6 text-green-600" />
                            <div>
                              <h4 className="font-medium">Warranty</h4>
                              <p className="text-sm text-gray-600">
                                {selectedModel.warranty}
                              </p>
                            </div>
                          </CardHeader>
                        </Card>
                      )}
                    </div>
                  </div>

                  {/* Manuals and Videos */}
                  {(selectedModel.manuals?.length ||
                    selectedModel.videos?.length) && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedModel.manuals?.length ? (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            Manuals & Guides
                          </h3>
                          <div className="space-y-2">
                            {selectedModel.manuals.map((m, idx) => (
                              <Button
                                key={idx}
                                variant="link"
                                className="p-0 h-auto"
                                onClick={() =>
                                  alert("Downloading manual: " + m.title)
                                }
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                {m.title}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {selectedModel.videos?.length ? (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            Video Walkthroughs
                          </h3>
                          <div className="space-y-2">
                            {selectedModel.videos.map((v, idx) => (
                              <Button
                                key={idx}
                                variant="link"
                                className="p-0 h-auto"
                                onClick={() =>
                                  alert("Playing video: " + v.title)
                                }
                              >
                                <PlayCircle className="w-4 h-4 mr-2" />
                                {v.title}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Troubleshooting */}
                  {selectedCategory.troubleshooting.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-center">
                        Troubleshooting Guides
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCategory.troubleshooting.map((t) => (
                          <Card key={t.id} className="bg-gray-50/70">
                            <CardHeader>
                              <CardTitle>{t.title}</CardTitle>
                              <CardDescription>
                                Severity: {t.severity} •{" "}
                                {t.estimatedEffort ?? "Standard"}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <h4 className="font-semibold mb-2">
                                Possible Causes
                              </h4>
                              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                                {t.causes.map((c, i) => (
                                  <li key={i}>{c}</li>
                                ))}
                              </ul>
                              <h4 className="font-semibold mb-2">
                                Recommended Actions
                              </h4>
                              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                                {t.actions.map((a, i) => (
                                  <li key={i}>{a}</li>
                                ))}
                              </ol>
                            </CardContent>
                            <CardFooter>
                              <Button
                                variant="link"
                                className="p-0"
                                onClick={() =>
                                  openReportFor(selectedCategory, selectedModel)
                                }
                              >
                                Still need help? Book service
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQs */}
                  {selectedCategory.faqs.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-center">
                        Frequently Asked Questions
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        {selectedCategory.faqs.map((f, i) => (
                          <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger className="text-left">
                              {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-base">
                              {f.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Modals / Sheets --- */}

      {/* Contact Form Sheet */}
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
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  type="text"
                  value={formData.product}
                  onChange={(e) =>
                    setFormData({ ...formData, product: e.target.value })
                  }
                  placeholder="e.g., Refrigerator"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelNo">Model Number (Optional)</Label>
                <Input
                  id="modelNo"
                  type="text"
                  value={formData.modelNo}
                  onChange={(e) =>
                    setFormData({ ...formData, modelNo: e.target.value })
                  }
                  placeholder="e.g., RF340X"
                />
              </div>
            </div>
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
                variant={"default"}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white hover:text-white hover:cursor-pointer"
              >
                Submit Ticket
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      {/* Track Repair Sheet */}
      <Sheet open={trackOpen} onOpenChange={setTrackOpen}>
        <SheetContent className="overflow-y-auto w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Track Your Repair</SheetTitle>
            <SheetDescription>
              Enter your ticket or service ID to see the status.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleTrackTicket} className="space-y-4 py-6">
            <div className="space-y-2">
              <Label htmlFor="trackId">Ticket ID</Label>
              <Input
                id="trackId"
                type="text"
                required
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                placeholder="e.g., SR-12345"
              />
            </div>
            <SheetFooter className="mt-6">
              <Button type="submit" className="w-full">
                Track Status
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

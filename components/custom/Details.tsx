"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  q: string;
  a: string;
}

interface Troubleshooting {
  id: string;
  title: string;
  summary: string;
}

export default function Details() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      q: "My washing machine drum is not spinning what should I do?",
      a: "This may happen due to a broken belt, motor issue, or imbalance. First, check if the machine is overloaded or unbalanced. If the problem continues, book a service visit.",
    },
    {
      q: "Refrigerator not cooling properly?",
      a: "Check the temperature settings, ensure air vents are not blocked, and clean the condenser coils. If still warm, it might be a refrigerant or compressor issue schedule service.",
    },
    {
      q: "AC leaking water indoors is it serious?",
      a: "Water leakage can occur from clogged drain pipes or ice buildup on coils. Turn off your AC, allow it to defrost, and call a technician to clean the drainage system.",
    },
    {
      q: "Microwave not heating food?",
      a: "This can be caused by a faulty magnetron or diode. Avoid using the microwave until serviced to prevent electrical issues.",
    },
  ];

  const troubleshooting: Troubleshooting[] = [
    {
      id: "tm1",
      title: "Washing Machine Not Draining",
      summary:
        "Check the drain hose and filter for clogs. Ensure no foreign objects are blocking the pump. If water remains, the drain pump may need replacement.",
    },
    {
      id: "tm2",
      title: "Refrigerator Water Leakage",
      summary:
        "Inspect door seals and drain outlets. A blocked defrost drain or worn-out gasket can cause water pooling at the bottom of your fridge.",
    },
    {
      id: "tm3",
      title: "AC Not Cooling Properly",
      summary:
        "Clean air filters and check for ice buildup. Persistent cooling issues may indicate low refrigerant or a faulty compressor.",
    },
    {
      id: "tm4",
      title: "Microwave Turntable Not Rotating",
      summary:
        "Ensure the turntable is correctly placed on the coupler. A broken motor or roller guide can also cause this issue.",
    },
  ];

  return (
    <div className="p-6 md:p-10" id="faq">
      {/* FAQ + Troubleshooting Section */}
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQs */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Quick answers to common appliance problems
          </p>

          <div className="mt-6 space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border-b border-gray-100 last:border-0 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full text-left flex justify-between items-center py-4 px-3 hover:bg-gray-100 rounded-lg transition"
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <span className="text-blue-600 font-semibold text-sm">
                    {faqOpen === i ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-3 pb-3 text-sm text-gray-600"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800">
            Troubleshooting Guides
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Quick fixes and expert tips before booking service
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            {troubleshooting.map((t) => (
              <motion.article
                key={t.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h5 className="font-semibold text-gray-800">{t.title}</h5>
                <p className="text-sm text-gray-600 mt-2">{t.summary}</p>
                <div className="mt-3 flex items-center gap-3">
                  <button className="text-sm text-blue-600 font-medium hover:underline">
                    Read guide
                  </button>
                  <button className="text-sm text-blue-600 font-medium hover:underline">
                    Watch video
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f0ece4] py-16 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white/90 border border-[#e0ddd4] rounded-2xl shadow-lg p-8 md:p-12 backdrop-blur-sm"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="space-y-8 text-[#4f4f4f] leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              1 – What Do We Do With Your Information?
            </h2>
            <p>
              When you request for service, as part of the service process, we
              collect the personal information you give us such as your name,
              address, phone and email address.
            </p>
            <p className="mt-3">
              When you browse our website, we also automatically receive your
              computer’s internet protocol (IP) address in order to provide us
              with information that helps us learn about your browser and
              operating system.
            </p>
            <p className="mt-3">
              Email marketing (if applicable): With your permission, we may send
              you emails about our website and new updates.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              2 – Consent
            </h2>
            <h3 className="font-medium text-[#2c3e50]">
              How do you get my consent?
            </h3>
            <p className="mt-2">
              We never ask for your financial information such as debit card,
              credit card or any other banking information. We only receive
              payment through offline methods such as cash, cheque and wallet
              after the completion of service.
            </p>
            <p className="mt-2">
              If we ask for your personal information for a secondary reason,
              like marketing, we will either ask you directly for your expressed
              consent, or provide you with an opportunity to say no.
            </p>

            <h3 className="font-medium text-[#2c3e50] mt-4">
              How do I withdraw my consent?
            </h3>
            <p className="mt-2">
              If after you opt-in, you change your mind, you may withdraw your
              consent for us to contact you, for the continued collection, use
              or disclosure of your information, at any time, by contacting us
              at{" "}
              <a
                href="mailto:scareservice8@gmail.com"
                className="text-[#1f6feb] hover:underline"
              >
                scareservice8@gmail.com
              </a>
              .
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              3 – Disclosure
            </h2>
            <p>
              We may disclose your personal information if we are required by
              law to do so or if you violate our Terms of Service.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              4 – Payment Processing
            </h2>
            <p>We do not accept payment over the website.</p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              5 – Third-Party Services
            </h2>
            <p>
              In general, the third-party providers used by us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services they provide to us.
            </p>
            <p className="mt-3">
              For these providers, we recommend that you read their privacy
              policies so you can understand the manner in which your personal
              information will be handled by these providers.
            </p>
            <p className="mt-3">
              Once you leave our website or are redirected to a third-party
              website or application, you are no longer governed by this Privacy
              Policy or our website’s Terms of Service.
            </p>
            <h3 className="font-medium text-[#2c3e50] mt-4">Links</h3>
            <p className="mt-2">
              When you click on links on our website, they may direct you away
              from our site. We are not responsible for the privacy practices of
              other sites and encourage you to read their privacy statements.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              6 – Security
            </h2>
            <p>
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed.
            </p>
            <p className="mt-3">
              If you provide us with your information, the information is
              encrypted using secure socket layer (SSL). Although no method of
              transmission over the Internet or electronic storage is 100%
              secure, we follow all requirements and implement additional
              generally accepted industry standards.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              7 – Age of Consent
            </h2>
            <p>
              By using this site, you represent that you are at least the age of
              majority in your state of residence, or that you are the age of
              majority in your state of residence and you have given us your
              consent to allow any of your minor dependants to use this site.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              8 – Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website.
            </p>
            <p className="mt-3">
              If our website is acquired or merged with another company, your
              information may be transferred to the new owners so that we may
              continue to provide service to you.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-3">
              Questions and Contact Information
            </h2>
            <p>
              If you would like to access, correct, amend or delete any personal
              information we have about you, register a complaint, or simply
              want more information, contact our Privacy Compliance Officer at{" "}
              <a
                href="mailto:scareservice8@gmail.com"
                className="text-[#1f6feb] hover:underline"
              >
                scareservice8@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

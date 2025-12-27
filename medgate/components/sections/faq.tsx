"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

const faqs = [
  {
    question: "How does the application process work?",
    answer: "Simply browse available programs, submit your application with required documents, and track your status in real-time. Our platform handles communication with hospitals and provides updates throughout the process.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "Typically, you'll need your medical school transcripts, CV, recommendation letters, and valid Emirates ID. Specific requirements vary by program and hospital.",
  },
  {
    question: "Are the programs accredited?",
    answer: "Yes, all programs listed on MedGate are offered by accredited UAE hospitals and medical institutions. We verify accreditation status regularly.",
  },
  {
    question: "Can I apply to multiple programs?",
    answer: "Absolutely! You can apply to as many programs as you'd like. Our platform helps you manage multiple applications efficiently.",
  },
  {
    question: "What if I get accepted to multiple programs?",
    answer: "Congratulations! You can choose which offer to accept. Our platform allows you to manage multiple acceptances and provides guidance on next steps.",
  },
  {
    question: "How long does the application process take?",
    answer: "Processing times vary by hospital and program, typically 2-4 weeks. You'll receive real-time updates through our platform.",
  },
  {
    question: "Can international students apply?",
    answer: "Yes! MedGate welcomes applications from international medical students. Some programs may have specific visa requirements.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Everything you need to know about getting started with MedGate.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-slate-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-linear-to-r from-blue-50 to-indigo-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our support team is here to help you succeed in your medical training journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@medgate.com"
                className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
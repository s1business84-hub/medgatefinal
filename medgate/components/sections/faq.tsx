"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import * as React from "react"

const faqs = [
  {
    question: "How does the application process work?",
    answer: "Simply browse available programs, submit your application with required documents, and track your status in real-time. Our platform handles communication with hospitals and provides updates throughout the process.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "You'll need your medical school transcripts, CV, recommendation letters, and valid Emirates ID. Specific requirements vary by program and hospital.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-6"
          >
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Questions & Answers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Everything you need to know about getting started with MedGate.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -2 }}
                  >
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="relative flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <motion.div
                          animate={{ rotate: openIndex === index ? 360 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <MessageCircle className="h-5 w-5 text-blue-600" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="relative border-t border-slate-200 px-6 py-4"
                        >
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-slate-600 leading-relaxed"
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

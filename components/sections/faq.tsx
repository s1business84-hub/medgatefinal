"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import * as React from "react"

const faqs = [
  {
    question: "Is MedGate a placement or recruitment service?",
    answer: "No. MedGate does not place students or guarantee acceptance. The platform supports observership and elective program discovery and application workflows as defined by participating institutions.",
  },
  {
    question: "What programs does MedGate support?",
    answer: "MedGate focuses on formal, institution-approved observership and elective programs.",
  },
  {
    question: "Does MedGate offer internships or residency placements?",
    answer: "No. MedGate does not provide internships, residency, or fellowship placements.",
  },
  {
    question: "Is MedGate live yet?",
    answer: "MedGate is currently in early development and preparing for pilot collaborations with healthcare institutions.",
  },
  {
    question: "Who can use MedGate?",
    answer: "Medical students and institutions participating in approved pilot programs.",
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
    <section
      id="faq"
      className="py-24 sm:py-32 relative overflow-hidden text-slate-50"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/25 rounded-full mix-blend-screen filter blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/25 rounded-full mix-blend-screen filter blur-3xl opacity-60 -z-10" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-6"
          >
            <HelpCircle className="w-6 h-6 text-blue-200" />
            <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Questions & Answers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white bg-clip-text bg-linear-to-r from-white via-blue-200 to-purple-200"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-200"
          >
            Everything you need to know about getting started with MedGate.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  {/** Card with dynamic liquid color change when expanded **/}
                  <motion.div
                    className={`relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden backdrop-blur-xl ${openIndex === index ? "bg-white/10 border border-blue-300/30" : "bg-white/5 border border-white/10"}`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-400/15 via-transparent to-purple-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Liquid glass shine effect */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${openIndex === index ? "opacity-25" : "opacity-0 group-hover:opacity-20"}`}>
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-linear-to-br from-white to-transparent rounded-full blur-xl" />
                      <div className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-linear-to-tr from-blue-300/40 to-purple-300/40 rounded-full blur-xl" />
                    </div>

                    {/* Active state gradient overlay */}
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-linear-to-br from-cyan-400/20 via-indigo-400/10 to-purple-400/20"
                      />
                    )}

                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="relative flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer z-10"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <motion.div
                          animate={{ rotate: openIndex === index ? 360 : 0 }}
                          transition={{ duration: 0.1 }}
                          className="shrink-0"
                        >
                            <MessageCircle className="h-5 w-5 text-blue-200" />
                        </motion.div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.1 }}
                        className="shrink-0"
                      >
                          <ChevronDown className="h-5 w-5 text-slate-200" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.1, ease: "easeInOut" }}
                          className="relative border-t border-white/10 px-6 py-4 z-10"
                        >
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.01, duration: 0.1 }}
                            className="text-slate-200 leading-relaxed"
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

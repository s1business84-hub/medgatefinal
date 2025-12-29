"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const requirements = [
  "Valid passport and visa",
  "Proof of medical student or graduate status",
  "Updated CV",
  "Complete health clearance (immunizations + screening)",
  "Personal health insurance",
  "Signed confidentiality and conduct agreement",
  "Working proficiency in English",
]

export function EligibilityChecker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg p-4 sm:p-6 mb-8"
    >
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-slate-100">Minimum Requirements & Eligibility</h3>
        <p className="text-xs sm:text-sm text-slate-300">These must be met for all programs.</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {requirements.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5" />
            <p className="text-sm sm:text-base text-slate-200 leading-snug">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-400/30 text-sm text-slate-200">
        Additional requirements may apply depending on the hospital and program.
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  Search,
  FileCheck,
  CreditCard,
  Clock,
  Award,
  Heart
} from "lucide-react"

const features = [
  {
    name: "Smart Program Matching",
    description: "AI-powered recommendations based on your profile, preferences, and career goals.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "One-Click Applications",
    description: "Streamlined application process with pre-filled forms and document uploads.",
    icon: FileCheck,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Real-Time Tracking",
    description: "Monitor your application status, interview schedules, and acceptance updates.",
    icon: Clock,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Secure Payments",
    description: "Safe and secure payment processing with multiple payment options.",
    icon: CreditCard,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Hospital Partnerships",
    description: "Direct connections with accredited UAE hospitals and medical institutions.",
    icon: Heart,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Verified Reviews",
    description: "Read authentic reviews from past participants and program alumni.",
    icon: Award,
    gradient: "from-teal-500 to-green-500",
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Comprehensive platform designed to streamline your medical training journey
            from application to completion.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-xl hover:ring-slate-300/50 transition-all duration-300"
              >
                <div className="flex items-center gap-x-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{feature.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{feature.description}</p>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-slate-600 mb-8">Trusted by leading institutions</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-slate-400 font-semibold">Cleveland Clinic Abu Dhabi</div>
            <div className="text-slate-400 font-semibold">Mediclinic</div>
            <div className="text-slate-400 font-semibold">Burjeel Hospital</div>
            <div className="text-slate-400 font-semibold">NMC Healthcare</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
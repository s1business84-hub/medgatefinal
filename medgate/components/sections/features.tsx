"use client"

import { motion } from "framer-motion"
import {
  Search,
  FileCheck,
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
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="relative text-slate-600 group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

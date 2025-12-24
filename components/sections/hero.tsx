"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Award } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const stats = [
  {
    label: "Medical Students",
    value: "2,500+",
    icon: Users,
  },
  {
    label: "Programs Available",
    value: "150+",
    icon: Award,
  },
  {
    label: "Success Rate",
    value: "98%",
    icon: CheckCircle,
  },
]

const features = [
  "Real-time pricing updates",
  "Eligibility matching system",
  "Program criteria at a glance",
  "Hospital partnerships",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -z-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-40 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              <CheckCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Trusted by 50+ UAE Hospitals</span>
              <span className="sm:hidden">50+ UAE Hospitals</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Find Your Perfect
            <br />
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Medical Training
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-600 max-w-2xl mx-auto px-4"
          >
            Connect with clinical observerships and electives across UAE hospitals.
            Streamlined applications, real-time tracking, and direct hospital partnerships.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <Link href="/programs">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-3">
                Browse Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/student">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 text-base px-6 py-3">
                Student Portal
              </Button>
            </Link>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm text-slate-600"
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-center sm:text-left">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mx-auto mt-16 sm:mt-20 max-w-7xl px-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 + index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm p-6 sm:p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
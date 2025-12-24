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

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              <CheckCircle className="mr-2 h-4 w-4" />
              Trusted by 50+ UAE Hospitals
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Medical Training
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
          >
            Connect with clinical observerships and electives across UAE hospitals.
            Streamlined applications, real-time tracking, and direct hospital partnerships.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/programs">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Browse Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/student">
              <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                Student Portal
              </Button>
            </Link>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-600"
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
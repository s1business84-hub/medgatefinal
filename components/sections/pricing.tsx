"use client"

import { motion } from "framer-motion"
import { Check, Star, TrendingUp, TrendingDown, Clock } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

// Dynamic pricing data with real-time updates
const basePlans = [
  {
    name: "Free",
    basePrice: 0,
    description: "Perfect for exploring programs",
    features: [
      "Browse all programs",
      "Basic application tracking",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    basePrice: 29,
    period: "per month",
    description: "For serious medical students",
    features: [
      "Everything in Free",
      "Priority applications",
      "Document review service",
      "Interview preparation",
      "Direct hospital contacts",
      "24/7 priority support",
    ],
    cta: "Start Premium",
    popular: true,
  },
  {
    name: "Enterprise",
    basePrice: null,
    description: "For medical schools & institutions",
    features: [
      "Everything in Premium",
      "Bulk applications",
      "Custom integrations",
      "Dedicated account manager",
      "Analytics dashboard",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const [plans, setPlans] = useState(() =>
    basePlans.map(plan => ({
      ...plan,
      price: plan.basePrice === null ? "Custom" : plan.basePrice === 0 ? "$0" : `$${plan.basePrice}`,
      trend: plan.basePrice === null ? null : Math.random() > 0.5 ? "up" : "down",
      lastUpdated: new Date().toLocaleTimeString()
    }))
  )

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlans(currentPlans =>
        currentPlans.map(plan => {
          if (plan.basePrice === null || plan.basePrice === 0) return plan

          // Simulate small price fluctuations (±5%)
          const fluctuation = (Math.random() - 0.5) * 0.1
          const newPrice = Math.max(1, Math.round(plan.basePrice * (1 + fluctuation)))
          const trend = newPrice > plan.basePrice ? "up" : newPrice < plan.basePrice ? "down" : plan.trend

          return {
            ...plan,
            basePrice: newPrice,
            price: `$${newPrice}`,
            trend,
            lastUpdated: new Date().toLocaleTimeString()
          }
        })
      )
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Choose the plan that works best for your medical training journey.
            Upgrade or downgrade at any time.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 shadow-sm ring-1 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-white ring-blue-200 shadow-blue-100"
                  : "bg-white/60 backdrop-blur-sm ring-slate-200/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
                    <Star className="mr-1 h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-sm font-medium text-slate-600">
                      {plan.period}
                    </span>
                  )}
                  {plan.trend && (
                    <div className="ml-2 flex items-center text-xs">
                      {plan.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-red-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-green-500" />
                      )}
                    </div>
                  )}
                </div>
                {plan.lastUpdated && plan.basePrice !== 0 && plan.basePrice !== null && (
                  <div className="mt-1 flex items-center justify-center text-xs text-slate-500">
                    <Clock className="mr-1 h-3 w-3" />
                    Updated {plan.lastUpdated}
                  </div>
                )}
                <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>

              {/* Subtle background gradient */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600">
            Have questions about pricing?{" "}
            <a href="#faq" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Check our FAQ →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
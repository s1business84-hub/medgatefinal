"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Heart
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "Browse Programs", href: "/programs" },
    { name: "Student Portal", href: "/student" },
    { name: "For Hospitals", href: "/for-hospitals" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Vision", href: "/vision" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Legal Disclaimer & Terms", href: "/legal" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ],
}

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-slate-950/70 backdrop-blur-xl" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_30%_70%,rgba(79,70,229,0.22),transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-indigo-500">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">MedGate</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Connecting medical students with clinical training opportunities
              across the UAE. Building the future of medical education.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@medgate.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +971 50 123 4567
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Dubai, UAE
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-sm font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">
              Get the latest updates on new programs and features.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 MedGate. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 mt-2 md:mt-0 flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in Dubai
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
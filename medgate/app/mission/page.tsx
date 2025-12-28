"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Heart, Eye, Lightbulb, Shield, Users } from "lucide-react";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";

export default function MissionPage() {
  const { scrollY } = useScroll();
  const [layerSlow, layerMid, layerFast] = useMemo(() => {
    return [
      useTransform(scrollY, [0, 600], ["0px", "-80px"]),
      useTransform(scrollY, [0, 600], ["0px", "-120px"]),
      useTransform(scrollY, [0, 600], ["0px", "-180px"]),
    ];
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Parallax backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 via-blue-200 to-transparent blur-3xl opacity-70"
          style={{ y: layerSlow }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-180px] top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-blue-200 via-cyan-200 to-transparent blur-3xl opacity-60"
          style={{ y: layerMid }}
        />
        <motion.div
          aria-hidden
          className="absolute left-1/2 bottom-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-indigo-200 to-transparent blur-[120px] opacity-70"
          style={{ y: layerFast }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">Mission & Vision</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shaping the future of medical education in the UAE through innovation,
            accessibility, and excellence in clinical training.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-12 transition-all duration-300 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating shine effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 group-hover:top-0 group-hover:right-0" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                To democratize access to high-quality clinical training opportunities for medical students
                across the UAE by creating a transparent, efficient, and student-centered platform that
                connects aspiring healthcare professionals with accredited medical institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="group relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl -ml-40 -mb-40 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                To become the leading platform for medical education in the Middle East, where every
                medical student has equal access to transformative clinical experiences that shape
                compassionate, competent, and culturally aware healthcare leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from platform reliability to partner selection and student support.',
                gradient: 'from-green-600 to-emerald-600',
                bgGradient: 'from-green-50 to-emerald-50',
                index: 0
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'We believe quality medical education should be accessible to all deserving students, regardless of background or location.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-blue-50 to-cyan-50',
                index: 1
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We continuously evolve our platform using cutting-edge technology to improve the medical education experience for everyone.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-purple-50 to-pink-50',
                index: 2
              }
            ].map((value) => (
              <div 
                key={value.title} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + value.index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Floating shine */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500" />
                
                <div className="relative z-10 p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {value.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Goals for 2025</h2>
          <div className="space-y-6">
            {[
              {
                number: 1,
                icon: '🌍',
                title: 'Expand to All UAE Emirates',
                description: 'Extend our network to include hospitals in Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, providing comprehensive coverage across the entire UAE.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-blue-50 to-cyan-50'
              },
              {
                number: 2,
                icon: '🤖',
                title: 'Launch Advanced Matching Algorithm',
                description: 'Implement AI-powered matching that considers student preferences, career goals, and hospital requirements for optimal placement outcomes.',
                gradient: 'from-indigo-600 to-purple-600',
                bgGradient: 'from-indigo-50 to-purple-50'
              },
              {
                number: 3,
                icon: '🎯',
                title: 'Achieve 5,000 Student Milestone',
                description: 'Support 5,000 medical students in their clinical training journey, establishing MedGate as the go-to platform for medical education in the UAE.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-purple-50 to-pink-50'
              }
            ].map((goal, index) => (
              <div 
                key={goal.number} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${0.75 + index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${goal.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Animated left accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${goal.gradient} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`} />
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0 bg-gradient-to-br ${goal.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{goal.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                          style={{
                            backgroundImage: `linear-gradient(to right, rgb(var(--color-start)), rgb(var(--color-end)))`
                          }}>
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.85s' }}>
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-200/50 overflow-hidden group">
            {/* Animated gradient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Be part of the movement to transform medical education in the UAE.
                Whether you&apos;re a student or a healthcare institution, we welcome you to our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/student">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all font-semibold">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
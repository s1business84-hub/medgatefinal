"use client";

import Link from "next/link";
import { ArrowLeft, Heart, Eye, Lightbulb, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidParallax } from "@/components/ui/liquid-parallax";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function PurposePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <LiquidParallax />
      
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-indigo-600/10 to-emerald-600/0 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/50 to-black/70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <Link href="/" className="inline-flex items-center px-3 py-2 rounded-xl border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 transition-all hover:translate-x-1">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-8">
            Our <AnimatedGradientText className="text-5xl md:text-7xl font-bold">Purpose</AnimatedGradientText>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Shaping the future of medical education through innovation, accessibility, 
            and excellence in clinical training.
          </p>
        </div>

        {/* Combined Mission & Vision Statement */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mission */}
            <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 group-hover:top-0 group-hover:right-0" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-cyan-300" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-100 mb-4 text-center">Our Mission</h2>
                <p className="text-base text-slate-300 leading-relaxed text-center">
                  To democratize access to high-quality clinical training opportunities for medical students
                  across the UAE by creating a transparent, efficient, and student-centered platform that
                  connects aspiring healthcare professionals with medical institutions.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 group-hover:top-0 group-hover:right-0" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-emerald-300" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-100 mb-4 text-center">Our Vision</h2>
                <p className="text-base text-slate-300 leading-relaxed text-center">
                  To create a platform where every aspiring medical professional has the opportunity to achieve
                  their dreams, regardless of geographical or socioeconomic barriers, through innovative,
                  accessible, and comprehensive educational solutions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Purpose Statement */}
          <div className="bg-gradient-to-br from-cyan-600 via-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-500" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-semibold italic leading-relaxed">
                &quot;Empowering healthcare professionals through accessible, quality medical education 
                and transformative clinical training opportunities.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              <AnimatedGradientText className="text-4xl md:text-5xl font-bold">Core Values & Pillars</AnimatedGradientText>
            </h2>
            <p className="text-slate-300 text-lg mt-4">The principles that guide everything we do</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 -mx-1">
            {[
              {
                icon: Shield,
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from platform reliability to partner selection and student support.',
                gradient: 'from-green-600 to-emerald-600',
                bgGradient: 'from-emerald-400/20 to-emerald-400/10',
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'Breaking down barriers to quality medical education, ensuring that talent and dedication, not geography or finances, determine success.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-cyan-400/20 to-cyan-400/10',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Advancing healthcare education through cutting-edge technology and modern learning methodologies that prepare students for the future of medicine.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-fuchsia-400/20 to-pink-400/10',
              },
              {
                icon: Heart,
                title: 'Community',
                description: 'Building a network of healthcare professionals who collaborate, learn, and grow together to improve healthcare outcomes worldwide.',
                gradient: 'from-indigo-600 to-purple-600',
                bgGradient: 'from-indigo-400/20 to-purple-400/10',
              }
            ].map((value) => (
              <div
                key={value.title}
                className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[45%] lg:w-[30%] group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {value.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} rounded-full`} />
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              <AnimatedGradientText className="text-4xl md:text-5xl font-bold">Development Roadmap</AnimatedGradientText>
            </h2>
            <p className="text-slate-300 text-lg mt-4">Key initiatives for our pilot phase and beyond</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 -mx-1">
            {[
              {
                number: 1,
                icon: '🌍',
                title: 'Expand Across UAE',
                description: 'Extend our network to include hospitals in all seven emirates, providing comprehensive coverage across the entire UAE.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-cyan-400/20 to-cyan-400/10'
              },
              {
                number: 2,
                icon: '🤖',
                title: 'Build Smart Matching',
                description: 'Develop matching logic that considers student preferences, career goals, and institutional requirements for optimal placement recommendations.',
                gradient: 'from-indigo-600 to-purple-600',
                bgGradient: 'from-indigo-400/20 to-purple-400/10'
              },
              {
                number: 3,
                icon: '🎯',
                title: 'Launch Pilot Programs',
                description: 'Partner with UAE institutions to pilot the platform, gather feedback, and refine workflows for students and program administrators.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-fuchsia-400/20 to-pink-400/10'
              },
              {
                number: 4,
                icon: '📊',
                title: 'Structured Tracking',
                description: 'Build longitudinal tracking for clinical exposure history to help students and institutions monitor progress over time.',
                gradient: 'from-emerald-600 to-teal-600',
                bgGradient: 'from-emerald-400/20 to-teal-400/10'
              }
            ].map((goal) => (
              <div
                key={goal.number}
                className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${goal.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0 bg-gradient-to-br ${goal.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{goal.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-100 mb-3">
                        {goal.title}
                      </h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-200/50 overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Purpose</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Be part of the movement to transform medical education. Whether you&apos;re a student or a healthcare institution, 
                we welcome you to our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/student">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
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

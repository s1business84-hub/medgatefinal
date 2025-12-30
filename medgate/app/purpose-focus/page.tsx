"use client";

import Link from "next/link";
import { ArrowLeft, Target, Lightbulb, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidParallax } from "@/components/ui/liquid-parallax";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function PurposeFocusPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <LiquidParallax />
      
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-indigo-600/10 to-purple-600/0 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/50 to-black/70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_4s]" />
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
            <AnimatedGradientText className="text-5xl md:text-7xl font-bold">Purpose + Focus</AnimatedGradientText>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Building the infrastructure for medical education in the UAE—connecting students 
            with clinical training opportunities through a transparent, efficient platform.
          </p>
        </div>

        {/* Purpose Statement */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-12 transition-all duration-300 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating shine effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 group-hover:top-0 group-hover:right-0" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-cyan-300" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8 text-center">Our Purpose</h2>
              <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                To democratize access to high-quality clinical training opportunities for medical students
                across the UAE by creating a transparent, efficient, and student-centered platform that
                connects aspiring healthcare professionals with medical institutions.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-lg text-slate-200 text-center font-semibold italic">
                  &quot;Empowering the next generation of healthcare professionals through accessible, quality medical education.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We're Building */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              <AnimatedGradientText className="text-4xl md:text-5xl font-bold">What We&apos;re Building</AnimatedGradientText>
            </h2>
            <p className="text-slate-300 text-lg mt-4">An early-stage clinical infrastructure platform</p>
          </div>
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-lg p-8 md:p-10 transition-all duration-300">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                MedGate is building a centralized platform that streamlines clinical training opportunities 
                for medical students in the UAE. We focus on making the placement process transparent, 
                efficient, and equitable.
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">For Students</h3>
                  <p className="text-slate-300">
                    A single portal to discover, compare, and apply for clinical training programs 
                    across UAE medical institutions with transparent eligibility criteria.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-indigo-300 mb-3">For Institutions</h3>
                  <p className="text-slate-300">
                    Streamlined application management, student tracking, and program coordination 
                    to improve efficiency and reduce administrative burden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              <AnimatedGradientText className="text-4xl md:text-5xl font-bold">Core Principles</AnimatedGradientText>
            </h2>
            <p className="text-slate-300 text-lg mt-4">The values guiding our development</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 -mx-1">
            {[
              {
                icon: Shield,
                title: 'Excellence',
                description: 'We maintain the highest standards in platform reliability, partner selection, and student support to ensure quality outcomes.',
                gradient: 'from-green-600 to-emerald-600',
                bgGradient: 'from-emerald-400/20 to-emerald-400/10',
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'Quality medical education should be accessible to all deserving students, regardless of background or geographic location.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-cyan-400/20 to-cyan-400/10',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We continuously evolve our platform using modern technology to improve the medical education experience for all stakeholders.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-fuchsia-400/20 to-pink-400/10',
              }
            ].map((principle) => (
              <div
                key={principle.title}
                className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <principle.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {principle.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${principle.gradient} rounded-full`} />
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              <AnimatedGradientText className="text-4xl md:text-5xl font-bold">Current Focus</AnimatedGradientText>
            </h2>
            <p className="text-slate-300 text-lg mt-4">Our immediate priorities in the pilot phase</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 -mx-1">
            {[
              {
                number: 1,
                icon: '🌍',
                title: 'Expand Coverage Across UAE',
                description: 'Extend our network to include hospitals and training institutions in all seven emirates, providing comprehensive coverage.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-cyan-400/20 to-cyan-400/10'
              },
              {
                number: 2,
                icon: '🤖',
                title: 'Build Matching Logic',
                description: 'Develop intelligent matching that considers student profiles, preferences, career goals, and institutional requirements.',
                gradient: 'from-indigo-600 to-purple-600',
                bgGradient: 'from-indigo-400/20 to-purple-400/10'
              },
              {
                number: 3,
                icon: '🎯',
                title: 'Launch Pilot Programs',
                description: 'Partner with select UAE institutions to pilot the platform, gather feedback, and refine workflows before wider rollout.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-fuchsia-400/20 to-pink-400/10'
              }
            ].map((focus) => (
              <div
                key={focus.number}
                className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${focus.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0 bg-gradient-to-br ${focus.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{focus.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-100 mb-3">
                        {focus.title}
                      </h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Long-term Vision */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative bg-gradient-to-br from-cyan-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl -ml-40 -mb-40 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-8 text-center">Long-term Vision</h2>
              <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking beyond the pilot phase, we aim to create a comprehensive ecosystem for medical education 
                that extends across the UAE and wider region, empowering students and institutions alike.
              </p>
              <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/20">
                  <ul className="space-y-4 text-cyan-50">
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse"></span>
                      <span>Expand institution coverage across the UAE and wider region</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                      <span>Introduce structured matching with advanced eligibility logic and preference analysis</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                      <span>Build longitudinal tracking for clinical exposure history and competency development</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                      <span>Create a global network of healthcare professionals who collaborate and grow together</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-200/50 overflow-hidden group">
            {/* Animated gradient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Be part of transforming medical education in the UAE. Whether you&apos;re a student 
                seeking clinical training or a healthcare institution looking to partner, we welcome you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/student">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
                    Get Started as Student
                  </Button>
                </Link>
                <Link href="/for-hospitals">
                  <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all font-semibold">
                    Partner With Us
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

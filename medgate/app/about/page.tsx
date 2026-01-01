import Link from "next/link";
import { ArrowLeft, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidParallax } from "@/components/ui/liquid-parallax";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <LiquidParallax />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/50 to-black/70" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <Link href="/" className="flex items-center text-indigo-300 hover:text-indigo-200 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="border-white/15 text-slate-100 hover:bg-white/10">
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            <AnimatedGradientText>About MedGate</AnimatedGradientText>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connecting medical students with life-changing clinical training opportunities across the UAE.
            We&apos;re building the future of medical education through innovation and partnership.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            <AnimatedGradientText>Our Story</AnimatedGradientText>
          </h2>
          <div className="rounded-2xl shadow-lg overflow-hidden group backdrop-blur-xl bg-white/5 border border-white/10 hover:shadow-2xl transition-all duration-300 p-8 md:p-12">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Liquid glass shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent rounded-full blur-xl" />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                MedGate is an early-stage platform being developed to address long-standing challenges in accessing and managing medical observership and elective programs. Today, students often face fragmented information, unclear eligibility criteria, and slow, manual communication when seeking clinical exposure opportunities.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                MedGate aims to standardize how institutions publish program requirements and how students engage with them, creating a clearer, more transparent process for both sides. The platform is currently preparing for pilot collaborations with UAE healthcare institutions.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              <AnimatedGradientText>What We Do</AnimatedGradientText>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Three core areas that guide our development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Standardize Program Information',
                description: 'We are building tools to help institutions clearly define eligibility criteria, documentation requirements, and intake limits for observership and elective programs.',
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-cyan-400/20 to-cyan-400/10',
                number: '01'
              },
              {
                icon: Target,
                title: 'Reduce Administrative Friction',
                description: 'MedGate is designed to minimize repetitive communication by centralizing program details and application workflows.',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-fuchsia-400/20 to-pink-400/10',
                number: '02'
              },
              {
                icon: Award,
                title: 'Support Institutional Governance',
                description: 'The platform prioritizes institutional control, allowing hospitals to manage programs in line with their internal policies and capacity.',
                gradient: 'from-indigo-500 to-blue-500',
                bgGradient: 'from-indigo-400/20 to-blue-400/10',
                number: '03'
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in p-8"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Liquid glass shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent rounded-full blur-xl" />
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors">
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 inline-block">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {item.description}
                  </p>

                  {/* Accent line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${item.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
              </div>
            ))}
          </div>


        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in mb-16" style={{ animationDelay: '0.35s' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-12">
            <AnimatedGradientText>Our Founders</AnimatedGradientText>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">KD</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Kashish Devnani</h3>
              <p className="text-slate-300">Founder & Program Director</p>
              <p className="text-sm text-slate-400 mt-3">Directs MedGate&apos;s institutional onboarding and clinical program framework, coordinating with hospitals to operationalize eligibility criteria, intake parameters, and approval workflows for observership and elective programs.</p>
            </div>
            
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SN</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Sanskaar Nair</h3>
              <p className="text-slate-300">Co-Founder & Lead Engineer</p>
              <p className="text-sm text-slate-400 mt-3">Architects and engineers the MedGate platform, owning system design, backend infrastructure, and application workflows that support hospital onboarding, program management, and secure applicant tracking.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            <AnimatedGradientText>Ready to Start Your Journey?</AnimatedGradientText>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of medical students who have found their perfect clinical training opportunity through MedGate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700">
                Browse Programs
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="border-white/15 text-slate-100 hover:bg-white/10">
                Create Account
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
import Link from "next/link";
import { ArrowLeft, Eye, Lightbulb, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidParallax } from "@/components/ui/liquid-parallax";

export default function VisionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <LiquidParallax />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/50 to-black/70" />
      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <Link href="/" className="inline-flex items-center px-3 py-2 rounded-xl border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 transition-all hover:translate-x-1">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="border-white/25 text-slate-100 hover:bg-white/10 hover:scale-105 transition-transform">
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
            Our <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Vision</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To become the leading platform for medical education in the Middle East,
            where every medical student has equal access to transformative clinical experiences.
          </p>
        </div>

        {/* Vision Statement */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-12 transition-all duration-300 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating shine effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 group-hover:top-0 group-hover:right-0" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                To be the global leader in healthcare education, creating a world where every aspiring medical
                professional has the opportunity to achieve their dreams, regardless of geographical or
                socioeconomic barriers, through innovative, accessible, and comprehensive educational solutions.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <p className="text-lg text-green-800 text-center font-semibold italic">
                  &quot;Empowering healthcare professionals worldwide through accessible, quality medical education.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Pillars */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Vision Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Advancing healthcare education through cutting-edge technology and modern learning methodologies that prepare students for the future of medicine.',
                gradient: 'from-green-600 to-emerald-600',
                bgGradient: 'from-green-50 to-emerald-50',
                index: 0
              },
              {
                icon: Shield,
                title: 'Accessibility',
                description: 'Breaking down barriers to quality medical education, ensuring that talent and dedication, not geography or finances, determine success in healthcare careers.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-blue-50 to-cyan-50',
                index: 1
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building a global network of healthcare professionals who collaborate, learn, and grow together to improve healthcare outcomes worldwide.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-purple-50 to-pink-50',
                index: 2
              }
            ].map((pillar) => (
              <div 
                key={pillar.title} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.4 + pillar.index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Floating shine */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500" />
                
                <div className="relative z-10 p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgb(var(--color-start)), rgb(var(--color-end)))`
                      }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${pillar.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl -ml-40 -mb-40 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-8 text-center">Future Goals</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center mr-3 text-sm">📅</span>
                    2025-2027
                  </h3>
                  <ul className="space-y-4 text-green-50">
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse"></span>
                      <span>Expand to 50+ partner hospitals across the Middle East</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                      <span>Launch AI-powered matching system for optimal placements</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                      <span>Develop comprehensive career tracking platform</span>
                    </li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center mr-3 text-sm">🎯</span>
                    2027-2030
                  </h3>
                  <ul className="space-y-4 text-green-50">
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.1s' }}></span>
                      <span>Become the leading medical education platform globally</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                      <span>Establish research partnerships with top medical institutions</span>
                    </li>
                    <li className="flex items-start hover:translate-x-2 transition-transform">
                      <span className="w-3 h-3 bg-white rounded-full mt-2 mr-4 shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                      <span>Create lifelong learning ecosystem for healthcare professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative bg-gradient-to-br from-white via-green-50/50 to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-green-200/50 overflow-hidden group">
            {/* Animated gradient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Vision</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Be part of the future of medical education. Whether you&apos;re a student, institution, or healthcare professional,
                together we can transform healthcare education worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/student">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
                    Get Started as Student
                  </Button>
                </Link>
                <Link href="/hospital">
                  <Button size="lg" variant="outline" className="hover:bg-green-50 hover:border-green-300 hover:scale-105 transition-all font-semibold">
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
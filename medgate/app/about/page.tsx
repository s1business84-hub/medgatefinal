import Link from "next/link";
import { ArrowLeft, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="backdrop-blur-md border-white/30 bg-white/40 hover:bg-white/60">
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MedGate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting medical students with life-changing clinical training opportunities across the UAE.
            We&apos;re building the future of medical education through innovation and partnership.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden group backdrop-blur-xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 border border-white/30 hover:shadow-2xl transition-all duration-300">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Liquid glass shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent rounded-full blur-xl" />
            </div>
            
            <div className="relative">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2024, MedGate emerged from a simple observation: medical students in the UAE were struggling
                to find quality clinical training opportunities. The process was fragmented, time-consuming, and often
                frustrating for both students and healthcare institutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We set out to change this by creating a centralized platform that streamlines the entire process.
                Our technology connects students directly with hospitals, eliminates paperwork bottlenecks, and ensures
                fair, transparent application processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, MedGate serves over 2,500 medical students and partners with 50+ leading healthcare institutions
                across Dubai, Abu Dhabi, Sharjah, and beyond. We&apos;re just getting started on our mission to transform
                medical education in the UAE.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Connect Students',
                description: 'We match medical students with observerships, electives, and clinical training programs that align with their career goals and interests.'
              },
              {
                icon: Target,
                title: 'Streamline Applications',
                description: 'Our platform simplifies the application process with real-time tracking, automated document verification, and direct hospital communication.'
              },
              {
                icon: Award,
                title: 'Enable Growth',
                description: 'We provide the tools and support students need to succeed, from interview prep to onboarding and portfolio development.'
              }
            ].map((item, index) => (
              <div key={item.title} className="group rounded-xl shadow-lg p-6 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 border border-white/30 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Liquid glass shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent rounded-full blur-xl" />
                </div>
                
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-blue-100">Medical Students Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Partner Hospitals</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of medical students who have found their perfect clinical training opportunity through MedGate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Browse Programs
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
import Link from "next/link";
import { ArrowLeft, Building2, Users, FileCheck, BarChart3, Clock, Shield, Globe, TrendingUp, Zap, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForHospitalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <Link href="/" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-all duration-300 hover:translate-x-1">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link href="/hospital-login">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
              Hospital Login
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Medical Training</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Streamline your medical education programs with our comprehensive platform. 
            Connect with top talent, manage applications efficiently, and build the future of healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hospital-login">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="hover:bg-indigo-50 hover:border-indigo-300 hover:scale-105 transition-all font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose MedGate?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your medical training programs with our innovative platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Access Top Talent',
                description: 'Connect with pre-screened, qualified medical students from leading institutions across the UAE and beyond.',
                gradient: 'from-blue-600 to-cyan-600',
                bgGradient: 'from-blue-50 to-cyan-50',
                index: 0
              },
              {
                icon: FileCheck,
                title: 'Streamlined Management',
                description: 'Manage applications, documentation, and schedules all in one centralized, easy-to-use platform.',
                gradient: 'from-indigo-600 to-purple-600',
                bgGradient: 'from-indigo-50 to-purple-50',
                index: 1
              },
              {
                icon: BarChart3,
                title: 'Data & Analytics',
                description: 'Track program performance, student progress, and outcomes with comprehensive analytics tools.',
                gradient: 'from-purple-600 to-pink-600',
                bgGradient: 'from-purple-50 to-pink-50',
                index: 2
              },
              {
                icon: Clock,
                title: 'Save Time & Resources',
                description: 'Reduce administrative overhead by up to 70% with automated workflows and document verification.',
                gradient: 'from-green-600 to-emerald-600',
                bgGradient: 'from-green-50 to-emerald-50',
                index: 3
              },
              {
                icon: Shield,
                title: 'Compliance & Security',
                description: 'Ensure full regulatory compliance with secure, encrypted data handling and audit trails.',
                gradient: 'from-orange-600 to-red-600',
                bgGradient: 'from-orange-50 to-red-50',
                index: 4
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Attract international talent and expand your institution\'s reputation worldwide.',
                gradient: 'from-teal-600 to-cyan-600',
                bgGradient: 'from-teal-50 to-cyan-50',
                index: 5
              }
            ].map((benefit) => (
              <div 
                key={benefit.title}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + benefit.index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Floating shine */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500" />
                
                <div className="relative z-10 p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl -ml-40 -mb-40 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 text-center">Platform Features</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: 'Instant Notifications', desc: 'Get real-time alerts for new applications and updates' },
                  { icon: CheckCircle2, title: 'Automated Screening', desc: 'AI-powered filtering matches students to your criteria' },
                  { icon: TrendingUp, title: 'Performance Tracking', desc: 'Monitor and evaluate student progress throughout programs' },
                  { icon: Star, title: 'Custom Branding', desc: 'Showcase your institution with customized program pages' },
                  { icon: Shield, title: 'Document Verification', desc: 'Automated validation of credentials and certifications' },
                  { icon: BarChart3, title: 'Reporting Dashboard', desc: 'Comprehensive insights into your training programs' }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-indigo-100">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 border border-white/30 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Trusted by Leading Institutions</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 text-transparent mb-2">50+</div>
                <p className="text-gray-700 font-medium">Partner Hospitals</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 text-transparent mb-2">10k+</div>
                <p className="text-gray-700 font-medium">Students Placed</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500 text-transparent mb-2">95%</div>
                <p className="text-gray-700 font-medium">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 text-transparent mb-2">70%</div>
                <p className="text-gray-700 font-medium">Time Saved</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Register Your Institution',
                description: 'Create your hospital profile and list available programs with specific requirements and dates.',
                icon: Building2
              },
              {
                step: 2,
                title: 'Receive Applications',
                description: 'Get qualified applications from pre-screened students that match your criteria.',
                icon: Users
              },
              {
                step: 3,
                title: 'Review & Select',
                description: 'Evaluate candidates through our platform with all documentation readily available.',
                icon: FileCheck
              },
              {
                step: 4,
                title: 'Manage & Track',
                description: 'Oversee the entire training cycle from onboarding to completion with powerful tools.',
                icon: BarChart3
              }
            ].map((step, index) => (
              <div 
                key={step.step}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-600 to-purple-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{step.step}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="relative bg-gradient-to-br from-white via-indigo-50/50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-indigo-200/50 overflow-hidden group">
            {/* Animated gradient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Programs?</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading healthcare institutions using MedGate to streamline their medical education programs. 
                Get started today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hospital-login">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all text-white font-semibold">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="hover:bg-indigo-50 hover:border-indigo-300 hover:scale-105 transition-all font-semibold">
                    Schedule a Demo
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Users, CheckCircle, Upload } from "lucide-react";

export default function StudentPortal() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'apply'>('about');

  const tabs = [
    { id: 'about' as const, label: 'About MedGate' },
    { id: 'mission' as const, label: 'Mission & Vision' },
    { id: 'apply' as const, label: 'Apply for Programs' },
  ];

  // If user is logged in and is a student, show full portal
  if (user && user.role === "student") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 animate-fade-in gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 text-transparent mb-2">Student Portal</h1>
              <p className="text-gray-600">Welcome back, {user.name}!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="btn-secondary hover-scale px-4 sm:px-6 py-2 sm:py-3 rounded-lg backdrop-blur-md border-white/30 bg-white/40"
              >
                Logout
              </button>
              <Link href="/" className="btn-secondary hover-scale px-4 sm:px-6 py-2 sm:py-3 rounded-lg backdrop-blur-md border-white/30 bg-white/40">
                ← Back to Home
              </Link>
            </div>
          </div>
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="rounded-xl shadow-lg p-1 flex backdrop-blur-xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 border border-white/30">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'about'
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
              }`}
            >
              About MedGate
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
              }`}
            >
              Mission & Vision
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'apply'
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
              }`}
            >
              Apply for Programs
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About MedGate</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connecting medical students with life-changing clinical training opportunities across the UAE.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2024, MedGate emerged from a simple observation: medical students in the UAE were struggling
                to find quality clinical training opportunities. The process was fragmented, time-consuming, and often
                frustrating for both students and healthcare institutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We set out to change this by creating a centralized platform that streamlines the entire process.
                Our technology connects students directly with hospitals, eliminates paperwork bottlenecks, and ensures
                fair, transparent application processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2,500+ Students</h3>
                <p className="text-gray-600">Medical students served across the UAE</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ Hospitals</h3>
                <p className="text-gray-600">Accredited healthcare partners</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Students successfully placed in programs</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Shaping the future of medical education in the UAE through innovation and excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To democratize access to high-quality clinical training opportunities for medical students
                across the UAE by creating a transparent, efficient, and student-centered platform.
              </p>
            </div>

            <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center mb-6">
                <Eye className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
              <p className="text-lg leading-relaxed text-center">
                To become the leading platform for medical education in the Middle East, where every
                medical student has equal access to transformative clinical experiences.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'apply' && (
          <div className="text-center py-16">
            <Upload className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of medical students who have found their perfect clinical training opportunity.
              Create your account to start applying for observerships and electives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Login to Apply
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" size="lg">
                  Browse Programs First
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    );
  }

  // Public content for non-logged-in users
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Portal</h1>
            <p className="text-gray-600">Learn about MedGate and apply for programs</p>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="btn-primary hover-scale">
              Login
            </Link>
            <Link href="/" className="btn-secondary hover-scale">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {activeTab === 'about' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About MedGate</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  MedGate is a comprehensive healthcare education platform dedicated to bridging the gap between
                  aspiring medical professionals and world-class training opportunities. We partner with leading
                  medical institutions to provide exceptional educational experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Excellence in medical education
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Global partnerships with top institutions
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Personalized learning experiences
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose MedGate?</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Accredited programs worldwide
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Comprehensive support services
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Career guidance and placement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
              <div className="space-y-8">
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-blue-800 leading-relaxed">
                    To empower aspiring healthcare professionals worldwide by providing unparalleled access to
                    quality medical education, fostering innovation in healthcare training, and building bridges
                    between diverse cultures and medical excellence.
                  </p>
                </div>

                <div className="bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Our Vision</h3>
                  <p className="text-lg text-green-800 leading-relaxed">
                    To be the global leader in healthcare education, creating a world where every aspiring medical
                    professional has the opportunity to achieve their dreams, regardless of geographical or
                    socioeconomic barriers, through innovative, accessible, and comprehensive educational solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-600 text-sm">Providing world-class medical education accessible to all</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">Advancing healthcare education through technology</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                    <p className="text-gray-600 text-sm">Building a global network of healthcare professionals</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for Programs</h2>
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Medical Journey?</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have successfully launched their medical careers through our
                  comprehensive programs. Our expert advisors are here to guide you through every step of the application process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/login" className="btn-primary hover-scale">
                    Login to Apply
                  </Link>
                  <Link href="/programs" className="btn-secondary hover-scale">
                    Programs
                  </Link>
                </div>
                <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div className="text-left">
                      <h4 className="font-semibold text-yellow-800 mb-2">Application Requirements</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Valid passport and academic transcripts</li>
                        <li>• Medical certificate and English proficiency proof</li>
                        <li>• Financial documentation for visa requirements</li>
                        <li>• Personal statement and recommendation letters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft, Heart, Eye, Lightbulb, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mission & Vision</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shaping the future of medical education in the UAE through innovation,
            accessibility, and excellence in clinical training.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              To democratize access to high-quality clinical training opportunities for medical students
              across the UAE by creating a transparent, efficient, and student-centered platform that
              connects aspiring healthcare professionals with accredited medical institutions.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto">
              To become the leading platform for medical education in the Middle East, where every
              medical student has equal access to transformative clinical experiences that shape
              compassionate, competent, and culturally aware healthcare leaders.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from platform reliability
                to partner selection and student support.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe quality medical education should be accessible to all deserving students,
                regardless of background or location.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our platform using cutting-edge technology to improve
                the medical education experience for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Goals for 2025</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expand to All UAE Emirates</h3>
                  <p className="text-gray-600">
                    Extend our network to include hospitals in Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain,
                    providing comprehensive coverage across the entire UAE.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-indigo-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Advanced Matching Algorithm</h3>
                  <p className="text-gray-600">
                    Implement AI-powered matching that considers student preferences, career goals, and hospital
                    requirements for optimal placement outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Achieve 5,000 Student Milestone</h3>
                  <p className="text-gray-600">
                    Support 5,000 medical students in their clinical training journey, establishing MedGate
                    as the go-to platform for medical education in the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the movement to transform medical education in the UAE.
            Whether you&apos;re a student or a healthcare institution, we welcome you to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
import Link from "next/link";
import { ArrowLeft, Eye, Lightbulb, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vision</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To become the leading platform for medical education in the Middle East,
            where every medical student has equal access to transformative clinical experiences.
          </p>
        </div>

        {/* Vision Statement */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              To be the global leader in healthcare education, creating a world where every aspiring medical
              professional has the opportunity to achieve their dreams, regardless of geographical or
              socioeconomic barriers, through innovative, accessible, and comprehensive educational solutions.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <p className="text-lg text-green-800 text-center font-medium">
                &quot;Empowering healthcare professionals worldwide through accessible, quality medical education.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Vision Pillars */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Vision Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Advancing healthcare education through cutting-edge technology and modern learning methodologies
                that prepare students for the future of medicine.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Breaking down barriers to quality medical education, ensuring that talent and dedication,
                not geography or finances, determine success in healthcare careers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a global network of healthcare professionals who collaborate, learn, and grow together
                to improve healthcare outcomes worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Future Goals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">2025-2027</h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expand to 50+ partner hospitals across the Middle East
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Launch AI-powered matching system for optimal placements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop comprehensive career tracking platform
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">2027-2030</h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Become the leading medical education platform globally
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Establish research partnerships with top medical institutions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create lifelong learning ecosystem for healthcare professionals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the future of medical education. Whether you&apos;re a student, institution, or healthcare professional,
              together we can transform healthcare education worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/student">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Users className="w-5 h-5 mr-2" />
                  Explore Student Portal
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" size="lg">
                  <Eye className="w-5 h-5 mr-2" />
                  Programs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
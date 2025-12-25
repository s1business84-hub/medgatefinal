"use client"

import Link from "next/link";
import { hospitals, programs } from "@/lib/mockData";
import { EligibilityChecker } from "@/components/eligibility-checker";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ApplicationModal } from "@/components/application-modal";

export default function ProgramsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<{ name: string; hospital: string } | null>(null);

  const toggleProgramExpansion = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  const handleApplyClick = (program: typeof programs[0], hospital: typeof hospitals[0]) => {
    setSelectedProgram({
      name: program.departmentName,
      hospital: hospital?.name || ''
    });
    setIsModalOpen(true);
  };
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Available Programs</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">Discover clinical training opportunities across UAE hospitals</p>
        </div>

        {/* Eligibility Checker */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <EligibilityChecker />
        </div>

        {/* Programs Grid */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {programs.map((p, index) => {
            const h = hospitals.find((x) => x.id === p.hospitalId);
            const isExpanded = expandedProgram === p.id;
            return (
              <div key={p.id} className="card hover-lift animate-slide-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                {/* Program Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{p.departmentName}</h2>
                      <p className="text-sm text-gray-600">{p.programType} • {h?.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      p.seatsAvailable > 2 ? 'bg-green-100 text-green-800' :
                      p.seatsAvailable > 0 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {p.seatsAvailable} seats
                    </span>
                    <button
                      onClick={() => toggleProgramExpansion(p.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          <span className="hidden sm:inline">Hide Details</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          <span className="hidden sm:inline">Show Details</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Quick Info Row */}
                <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h?.emirate}, {h?.city}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {p.durationWeeksOptions[0]} weeks • {p.dailyHoursMax}h/day
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.handsOnLevel}
                  </div>
                  
                  <div className="flex items-center text-sm font-medium">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-green-600">{p.feeAed ? `${p.feeAed} AED` : "Free"}</span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Program Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Overview</h3>
                        <p className="text-gray-600 mb-4">{p.description}</p>
                        
                        <h4 className="text-md font-medium text-gray-900 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {p.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                              <svg className="w-3 h-3 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Hospital Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Hospital Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="font-medium">Type:</span> <span className="ml-1">{h?.type}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Accreditation:</span> <span className="ml-1">{h?.accreditation}</span>
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Departments:</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {h?.departments.map((dept, deptIndex) => (
                                <span key={deptIndex} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                                  {dept}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => handleApplyClick(p, h!)}
                        className="btn-primary flex-1 text-center hover-scale"
                      >
                        Apply for this Program →
                      </button>
                      <Link
                        href={`/programs/${p.id}`}
                        className="btn-secondary flex-1 text-center hover-scale"
                      >
                        View Full Details
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Link href="/" className="btn-secondary hover-scale">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Application Modal */}
      {selectedProgram && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProgram(null);
          }}
          programName={selectedProgram.name}
          hospitalName={selectedProgram.hospital}
        />
      )}
    </main>
  );
} 

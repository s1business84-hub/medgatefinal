import Link from "next/link";
import { hospitals, programs } from "@/lib/mockData";
import { EligibilityChecker } from "@/components/eligibility-checker";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {programs.map((p, index) => {
            const h = hospitals.find((x) => x.id === p.hospitalId);
            return (
              <div key={p.id} className="card hover-lift animate-slide-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{p.departmentName}</h2>
                      <p className="text-sm text-gray-600">{p.programType}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      p.seatsAvailable > 2 ? 'bg-green-100 text-green-800' :
                      p.seatsAvailable > 0 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {p.seatsAvailable} seats
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{h?.name} • {h?.emirate}, {h?.city}</span>
                  </div>

                  {/* Program Criteria */}
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
                    <h4 className="text-sm font-medium text-blue-900 mb-3">Quick Criteria Check:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="flex items-center text-blue-800">
                        <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Year {p.eligibility.yearOfStudyMin}+
                      </div>
                      <div className="flex items-center text-blue-800">
                        <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {p.dailyHoursMax}h/day
                      </div>
                      <div className="flex items-center text-blue-800">
                        <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {p.handsOnLevel}
                      </div>
                      <div className="flex items-center text-blue-800">
                        <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {p.certificateProvided ? 'Certificate' : 'No Certificate'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="truncate">Duration: {p.durationWeeksOptions[0]} weeks</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">Starts: {new Date(p.startDates[0]).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm font-medium">
                    <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-green-600 font-semibold">{p.feeAed ? `${p.feeAed} AED` : "Free"}</span>
                  </div>
                </div>

                <Link href={`/programs/${p.id}`} className="btn-primary w-full text-center hover-scale">
                  View Details →
                </Link>
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
    </main>
  );
}

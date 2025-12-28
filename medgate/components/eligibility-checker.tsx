"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterCriteria {
  duration: string
  specialty: string
  emirate: string
  season: string
}

export function EligibilityChecker() {
  const [filters, setFilters] = useState<FilterCriteria>({
    duration: "",
    specialty: "",
    emirate: "",
    season: ""
  })

  const [showResults, setShowResults] = useState(false)

  const durations = ["1 week", "2 weeks", "1 month", "2 months", "3 months", "6 months"]
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Emergency Medicine",
    "Family Medicine",
    "General Surgery",
    "Internal Medicine",
    "Neurology",
    "Obstetrics & Gynecology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology"
  ]
  const emirates = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
  const seasons = ["Summer", "Winter", "Spring", "Fall"]

  const applyFilters = () => {
    setShowResults(true)
  }

  const resetFilters = () => {
    setFilters({
      duration: "",
      specialty: "",
      emirate: "",
      season: ""
    })
    setShowResults(false)
  }

  const mockPrograms = [
    {
      name: "Cardiology Observership - Dubai Health Authority",
      duration: "1 month",
      specialty: "Cardiology",
      emirate: "Dubai",
      season: "Summer",
      hospital: "Rashid Hospital"
    },
    {
      name: "Emergency Medicine Rotation - Abu Dhabi",
      duration: "2 months",
      specialty: "Emergency Medicine",
      emirate: "Abu Dhabi",
      season: "Winter",
      hospital: "Sheikh Khalifa Medical City"
    },
    {
      name: "Pediatrics Clinical Training - Sharjah",
      duration: "3 months",
      specialty: "Pediatrics",
      emirate: "Sharjah",
      season: "Spring",
      hospital: "University Hospital Sharjah"
    },
    {
      name: "General Surgery Elective - Dubai",
      duration: "1 month",
      specialty: "General Surgery",
      emirate: "Dubai",
      season: "Fall",
      hospital: "Dubai Hospital"
    }
  ]

  const filteredPrograms = mockPrograms.filter(program => {
    if (filters.duration && program.duration !== filters.duration) return false
    if (filters.specialty && program.specialty !== filters.specialty) return false
    if (filters.emirate && program.emirate !== filters.emirate) return false
    if (filters.season && program.season !== filters.season) return false
    return true
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 mb-8"
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
          <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">Program Filters</h3>
          <p className="text-xs sm:text-sm text-slate-600">Find programs that match your preferences</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Duration Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
            className="w-full px-3 py-3 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          >
            <option value="">All Durations</option>
            {durations.map(duration => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
        </div>

        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Specialty
          </label>
          <select
            value={filters.specialty}
            onChange={(e) => setFilters(prev => ({ ...prev, specialty: e.target.value }))}
            className="w-full px-3 py-3 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          >
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>

        {/* Emirate Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Emirate
          </label>
          <select
            value={filters.emirate}
            onChange={(e) => setFilters(prev => ({ ...prev, emirate: e.target.value }))}
            className="w-full px-3 py-3 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          >
            <option value="">All Emirates</option>
            {emirates.map(emirate => (
              <option key={emirate} value={emirate}>{emirate}</option>
            ))}
          </select>
        </div>

        {/* Season Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Season
          </label>
          <select
            value={filters.season}
            onChange={(e) => setFilters(prev => ({ ...prev, season: e.target.value }))}
            className="w-full px-3 py-3 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          >
            <option value="">All Seasons</option>
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            onClick={applyFilters}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Programs
          </Button>
          <Button
            onClick={resetFilters}
            variant="outline"
            className="flex-1"
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 pt-6 border-t border-slate-200"
          >
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              {filteredPrograms.length} Programs Found
            </h4>
            
            {filteredPrograms.length > 0 ? (
              <div className="space-y-3">
                {filteredPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                  >
                    <h5 className="font-semibold text-slate-900 mb-2">{program.name}</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                      <div><span className="font-medium">Duration:</span> {program.duration}</div>
                      <div><span className="font-medium">Specialty:</span> {program.specialty}</div>
                      <div><span className="font-medium">Location:</span> {program.emirate}</div>
                      <div><span className="font-medium">Season:</span> {program.season}</div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">{program.hospital}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-slate-50 rounded-xl text-center">
                <p className="text-slate-600">No programs match your selected filters. Try adjusting your criteria.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
              <input
                type="checkbox"
                checked={criteria.medicalFitness}
                onChange={(e) => setCriteria(prev => ({ ...prev, medicalFitness: e.target.checked }))}
                className="w-5 h-5 sm:w-4 sm:h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 sm:ml-2 text-sm sm:text-base text-slate-700">Medical Fitness Certificate</span>
            </label>
          </div>

          <Button onClick={checkEligibility} className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-base">
            Check My Eligibility
          </Button>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-base sm:text-lg font-semibold text-slate-900">Your Eligibility Results</h4>
            <Button variant="outline" size="sm" onClick={resetChecker} className="w-full sm:w-auto">
              Check Again
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {eligiblePrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 sm:p-5 rounded-lg border ${
                  program.match
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center">
                    {program.match ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 sm:mt-0 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 sm:mt-0 shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <h5 className="font-medium text-slate-900 text-sm sm:text-base">{program.name}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Requires: {program.requirements.join(", ")}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start sm:self-center ${
                    program.match ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {program.match ? 'Eligible' : 'Not Eligible'}
                  </span>
                </div>

                {!program.match && (
                  <div className="mt-3 text-sm text-slate-600">
                    <strong>Missing requirements:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {criteria.yearOfStudy < program.minYear && (
                        <li>Minimum Year {program.minYear} required (you have Year {criteria.yearOfStudy})</li>
                      )}
                      {!criteria.medicalDegree && program.requirements.includes("Medical Degree") && (
                        <li>Medical Degree required</li>
                      )}
                      {!criteria.validLicense && program.requirements.includes("Valid License") && (
                        <li>Valid Medical License required</li>
                      )}
                      {!criteria.englishProficiency && program.requirements.includes("English Proficiency") && (
                        <li>English Proficiency required</li>
                      )}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <FileText className="w-5 h-5 text-blue-600 mr-0 sm:mr-3 mb-3 sm:mb-0 mt-0.5 shrink-0" />
              <div className="flex-1">
                <h5 className="font-medium text-blue-900 text-sm sm:text-base">Need Help?</h5>
                <p className="text-xs sm:text-sm text-blue-800 mt-1">
                  Contact our admissions team for personalized guidance on improving your eligibility.
                </p>
                <Button size="sm" className="mt-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Get Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
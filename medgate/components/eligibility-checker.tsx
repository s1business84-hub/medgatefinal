"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EligibilityCriteria {
  yearOfStudy: number
  englishProficiency: boolean
  medicalDegree: boolean
  validLicense: boolean
  emiratesId: boolean
  medicalFitness: boolean
  documents: string[]
}

export function EligibilityChecker() {
  const [criteria, setCriteria] = useState<EligibilityCriteria>({
    yearOfStudy: 1,
    englishProficiency: false,
    medicalDegree: false,
    validLicense: false,
    emiratesId: false,
    medicalFitness: false,
    documents: []
  })

  const [showResults, setShowResults] = useState(false)

  const checkEligibility = () => {
    setShowResults(true)
  }

  const resetChecker = () => {
    setCriteria({
      yearOfStudy: 1,
      englishProficiency: false,
      medicalDegree: false,
      validLicense: false,
      emiratesId: false,
      medicalFitness: false,
      documents: []
    })
    setShowResults(false)
  }

  const eligiblePrograms = [
    {
      name: "Medical Residency Program (DHA/MOH/DOH)",
      requirements: ["Medical Degree", "Valid UAE License", "English Proficiency", "Emirates ID", "Medical Fitness Certificate"],
      minYear: 6,
      match: criteria.medicalDegree && criteria.validLicense && criteria.englishProficiency && criteria.emiratesId && criteria.medicalFitness && criteria.yearOfStudy >= 6
    },
    {
      name: "Clinical Observership Program",
      requirements: ["Medical Degree", "English Proficiency", "Emirates ID", "Medical Fitness Certificate"],
      minYear: 4,
      match: criteria.medicalDegree && criteria.englishProficiency && criteria.emiratesId && criteria.medicalFitness && criteria.yearOfStudy >= 4
    },
    {
      name: "Medical Internship Program",
      requirements: ["Medical Degree", "English Proficiency", "Emirates ID", "Medical Fitness Certificate"],
      minYear: 5,
      match: criteria.medicalDegree && criteria.englishProficiency && criteria.emiratesId && criteria.medicalFitness && criteria.yearOfStudy >= 5
    },
    {
      name: "Specialty Fellowship Program",
      requirements: ["Medical Degree", "Valid UAE License", "English Proficiency", "Emirates ID", "Medical Fitness Certificate", "Specialty Certification"],
      minYear: 6,
      match: criteria.medicalDegree && criteria.validLicense && criteria.englishProficiency && criteria.emiratesId && criteria.medicalFitness && criteria.yearOfStudy >= 6
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 mb-8"
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
          <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">Eligibility Checker</h3>
          <p className="text-xs sm:text-sm text-slate-600">Check which programs you qualify for</p>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-4 sm:space-y-6">
          {/* Year of Study */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Year of Study
            </label>
            <select
              value={criteria.yearOfStudy}
              onChange={(e) => setCriteria(prev => ({ ...prev, yearOfStudy: parseInt(e.target.value) }))}
              className="w-full px-3 py-3 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            >
              {[1, 2, 3, 4, 5, 6].map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 sm:space-y-4">
            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
              <input
                type="checkbox"
                checked={criteria.englishProficiency}
                onChange={(e) => setCriteria(prev => ({ ...prev, englishProficiency: e.target.checked }))}
                className="w-5 h-5 sm:w-4 sm:h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 sm:ml-2 text-sm sm:text-base text-slate-700">English Proficiency</span>
            </label>

            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
              <input
                type="checkbox"
                checked={criteria.medicalDegree}
                onChange={(e) => setCriteria(prev => ({ ...prev, medicalDegree: e.target.checked }))}
                className="w-5 h-5 sm:w-4 sm:h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 sm:ml-2 text-sm sm:text-base text-slate-700">Medical Degree</span>
            </label>

            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
              <input
                type="checkbox"
                checked={criteria.validLicense}
                onChange={(e) => setCriteria(prev => ({ ...prev, validLicense: e.target.checked }))}
                className="w-5 h-5 sm:w-4 sm:h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 sm:ml-2 text-sm sm:text-base text-slate-700">Valid UAE Medical License (DHA/MOH/DOH)</span>
            </label>

            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
              <input
                type="checkbox"
                checked={criteria.emiratesId}
                onChange={(e) => setCriteria(prev => ({ ...prev, emiratesId: e.target.checked }))}
                className="w-5 h-5 sm:w-4 sm:h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 sm:ml-2 text-sm sm:text-base text-slate-700">Valid Emirates ID</span>
            </label>

            <label className="flex items-center p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200 cursor-pointer hover:bg-slate-50 sm:hover:bg-transparent transition-colors">
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
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
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
              <FileText className="w-5 h-5 text-blue-600 mr-0 sm:mr-3 mb-3 sm:mb-0 mt-0.5 flex-shrink-0" />
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
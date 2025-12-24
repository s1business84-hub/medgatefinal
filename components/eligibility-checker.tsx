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
  documents: string[]
}

export function EligibilityChecker() {
  const [criteria, setCriteria] = useState<EligibilityCriteria>({
    yearOfStudy: 1,
    englishProficiency: false,
    medicalDegree: false,
    validLicense: false,
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
      documents: []
    })
    setShowResults(false)
  }

  const eligiblePrograms = [
    {
      name: "Medical Residency Program",
      requirements: ["Medical Degree", "Valid License", "English Proficiency"],
      minYear: 4,
      match: criteria.medicalDegree && criteria.validLicense && criteria.englishProficiency && criteria.yearOfStudy >= 4
    },
    {
      name: "Nursing Internship",
      requirements: ["Nursing Degree", "CPR Certification", "Background Check"],
      minYear: 2,
      match: criteria.yearOfStudy >= 2 // Simplified for demo
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Eligibility Checker</h3>
          <p className="text-sm text-slate-600">Check which programs you qualify for</p>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-4">
          {/* Year of Study */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Year of Study
            </label>
            <select
              value={criteria.yearOfStudy}
              onChange={(e) => setCriteria(prev => ({ ...prev, yearOfStudy: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5, 6].map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={criteria.englishProficiency}
                onChange={(e) => setCriteria(prev => ({ ...prev, englishProficiency: e.target.checked }))}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-slate-700">English Proficiency</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={criteria.medicalDegree}
                onChange={(e) => setCriteria(prev => ({ ...prev, medicalDegree: e.target.checked }))}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-slate-700">Medical Degree</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={criteria.validLicense}
                onChange={(e) => setCriteria(prev => ({ ...prev, validLicense: e.target.checked }))}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-slate-700">Valid Medical License</span>
            </label>
          </div>

          <Button onClick={checkEligibility} className="w-full bg-blue-600 hover:bg-blue-700">
            Check My Eligibility
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-slate-900">Your Eligibility Results</h4>
            <Button variant="outline" size="sm" onClick={resetChecker}>
              Check Again
            </Button>
          </div>

          <div className="space-y-3">
            {eligiblePrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  program.match
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {program.match ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-3" />
                    )}
                    <div>
                      <h5 className="font-medium text-slate-900">{program.name}</h5>
                      <p className="text-sm text-slate-600">
                        Requires: {program.requirements.join(", ")}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
            <div className="flex items-start">
              <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-900">Need Help?</h5>
                <p className="text-sm text-blue-800 mt-1">
                  Contact our admissions team for personalized guidance on improving your eligibility.
                </p>
                <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
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
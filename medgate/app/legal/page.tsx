import Link from "next/link"

const sections = [
  {
    title: "1. Platform Role & Disclaimer of Affiliation",
    body: [
      "This platform operates as an independent facilitation and application-management service for clinical observerships and electives in the United Arab Emirates.",
      "We are not a hospital, clinic, university, or healthcare authority, and we do not provide medical training, certification, or licensure.",
      "We are not affiliated with, endorsed by, or acting on behalf of any hospital, clinic, university, or regulatory body, including but not limited to: Dubai Health Authority and Abu Dhabi Department of Health.",
      "All clinical placements are subject to independent approval by the hosting institution.",
    ],
  },
  {
    title: "2. No Guarantee of Acceptance",
    body: [
      "Submission of an application through this platform does not guarantee acceptance into any observership or elective, placement in a specific department, or approval by a hospital, clinic, or supervising physician.",
      "Final decisions are made solely by the hosting institution, which may accept or reject any applicant, modify requirements, cancel or postpone placements, or withdraw approval at any stage without obligation to provide justification.",
    ],
  },
  {
    title: "3. Accuracy of Information",
    body: [
      "While we strive to keep hospital requirements and program details accurate and current, requirements may change without notice and hospitals may request additional documents beyond those listed.",
      "Processing timelines and availability are not guaranteed.",
      "Applicants are responsible for ensuring that all submitted information and documents are accurate, complete, and up to date. The platform is not liable for delays, rejections, or losses arising from incomplete, expired, or inaccurate submissions.",
    ],
  },
  {
    title: "4. Health, Immunization & Clearance Responsibility",
    body: [
      "Applicants acknowledge that hospitals in the UAE require strict infection-control compliance and that health clearance requirements are mandatory for hospital access.",
      "Final validation of health documents rests with the hosting institution. The platform does not provide medical verification, diagnosis, or certification and does not assume responsibility for hospital rejections due to health-related documentation.",
    ],
  },
  {
    title: "5. Observership & Elective Scope",
    body: [
      "Applicants acknowledge that observerships are observational only, and no hands-on patient care, procedures, or clinical decision-making is permitted unless explicitly authorized by the host institution.",
      "Any breach of hospital policies, confidentiality rules, or professional conduct standards may result in immediate termination of the placement.",
    ],
  },
  {
    title: "6. Data Protection & Privacy",
    body: [
      "By using this platform, applicants consent to uploading personal, academic, and health-related documents for secure storage and controlled access for application processing, and sharing documents only with relevant hospitals or institutions for application review.",
      "Access to documents is role-restricted, documents are not publicly visible, and data is not sold or shared for marketing purposes. Despite reasonable security measures, no online platform can guarantee absolute security; users acknowledge and accept this risk.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, the platform shall not be liable for application rejections, visa issues, missed academic or career opportunities, financial losses, hospital policy changes, cancellations or scheduling conflicts, or actions or decisions taken by hospitals or regulators. Use of this platform is entirely at the user's own risk.",
    ],
  },
  {
    title: "8. User Obligations",
    body: [
      "By using the platform, users agree to provide truthful and accurate information, upload authentic unaltered documents, respect hospital policies and UAE laws, and maintain professional conduct at all times.",
      "Submission of falsified or misleading documents may result in immediate account termination, application cancellation, and reporting to the hosting institution.",
    ],
  },
  {
    title: "9. Fees & Payments (If Applicable)",
    body: [
      "Any platform fees (where applicable) cover administrative and facilitation services only, are not hospital fees, and do not guarantee placement. Refund policies, if applicable, are governed by separate payment terms.",
    ],
  },
  {
    title: "10. Governing Law & Jurisdiction",
    body: [
      "These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from use of this platform shall fall under the exclusive jurisdiction of UAE courts.",
    ],
  },
  {
    title: "11. Acceptance of Terms",
    body: [
      "By creating an account or submitting an application through this platform, users confirm that they have read, understood, and agreed to be bound by these Terms & Disclaimers in full.",
    ],
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm text-slate-500 uppercase tracking-wide">Legal Disclaimer & Terms of Use</p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-3">Legal Disclaimer & Terms of Use</h1>
          <p className="text-slate-600">Last Updated: December 29, 2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <div className="space-y-2">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-slate-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 sm:px-8 py-4 bg-slate-100 border-t border-slate-200 text-sm text-slate-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>Use of this platform constitutes acceptance of these terms.</span>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

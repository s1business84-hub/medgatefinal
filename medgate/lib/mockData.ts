import type { Student, Program, Application, Document, Payment, AuditLog, Hospital } from "./types";

export const mockHospitals: Hospital[] = [
  {
    id: "h1",
    name: "Dubai Medical Center",
    emirate: "Dubai",
    city: "Al Barsha",
    type: "Hospital",
    accreditation: "DHA",
    departments: ["General Surgery", "Emergency Medicine", "Neurosurgery"],
    programTypes: ["Observership", "Elective"],
    maxStudentsPerPeriod: 10,
    approvalSlaDays: 7,
    status: "Active",
  },
  {
    id: "h2",
    name: "Sharjah Teaching Clinic",
    emirate: "Sharjah",
    city: "Al Majaz",
    type: "Clinic",
    accreditation: "MOH",
    departments: ["Internal Medicine", "Pediatrics"],
    programTypes: ["Observership"],
    maxStudentsPerPeriod: 4,
    approvalSlaDays: 10,
    status: "Active",
  },
  {
    id: "h3",
    name: "Abu Dhabi Medical Center",
    emirate: "Abu Dhabi",
    city: "Al Bateen",
    type: "Hospital",
    accreditation: "DOH",
    departments: ["Cardiology", "Orthopedics", "Oncology"],
    programTypes: ["Observership", "Elective"],
    maxStudentsPerPeriod: 15,
    approvalSlaDays: 5,
    status: "Active",
  },
  {
    id: "h4",
    name: "Dubai General Hospital",
    emirate: "Dubai",
    city: "Deira",
    type: "Hospital",
    accreditation: "DHA",
    departments: ["Emergency Medicine", "Radiology", "ICU"],
    programTypes: ["Observership"],
    maxStudentsPerPeriod: 12,
    approvalSlaDays: 8,
    status: "Active",
  },
  {
    id: "h5",
    name: "Al Ain Speciality Hospital",
    emirate: "Abu Dhabi",
    city: "Al Ain",
    type: "Hospital",
    accreditation: "DOH",
    departments: ["Neurology", "Dermatology", "Endocrinology"],
    programTypes: ["Observership", "Elective"],
    maxStudentsPerPeriod: 8,
    approvalSlaDays: 12,
    status: "Active",
  },
  {
    id: "h6",
    name: "Fujairah Medical Institute",
    emirate: "Fujairah",
    city: "Fujairah City",
    type: "Clinic",
    accreditation: "MOH",
    departments: ["Family Medicine", "Pediatrics"],
    programTypes: ["Observership"],
    maxStudentsPerPeriod: 6,
    approvalSlaDays: 7,
    status: "Active",
  },
  {
    id: "h7",
    name: "Ras Al Khaimah Hospital",
    emirate: "RAK",
    city: "Ras Al Khaimah",
    type: "Hospital",
    accreditation: "MOH",
    departments: ["Surgery", "Internal Medicine", "Anesthesiology"],
    programTypes: ["Observership"],
    maxStudentsPerPeriod: 10,
    approvalSlaDays: 9,
    status: "Active",
  },
  {
    id: "h8",
    name: "Ajman Specialist Hospital",
    emirate: "Ajman",
    city: "Ajman",
    type: "Hospital",
    accreditation: "MOH",
    departments: ["Ophthalmology", "ENT", "Plastic Surgery"],
    programTypes: ["Observership", "Elective"],
    maxStudentsPerPeriod: 8,
    approvalSlaDays: 6,
    status: "Active",
  },
];

export const mockPrograms: Program[] = [
  {
    id: "prog_1",
    hospitalId: "h1",
    name: "General Surgery Observership (Example Listing - Demo Data)",
    description: "Observe surgical procedures, outpatient clinics, ward rounds, and day-to-day clinical workflows within a General Surgery department under an observership framework.",
    requirements: [
      "Medical Student Status: Must be currently enrolled in a recognized medical school.",
      "Government ID: Valid government-issued identification and appropriate residency or visit visa, as required by hospital policy.",
      "English Proficiency: Ability to understand and communicate in English within a clinical environment.",
      "Medical Fitness Certificate: Medical fitness or health clearance may be required by the hosting institution prior to confirmation.",
      "Academic Transcripts: Academic transcripts or proof of enrollment may be requested for verification purposes."
    ],
    isActive: true,
  },
  {
    id: "prog_2",
    hospitalId: "h2",
    name: "Internal Medicine Observership (Example Listing - Demo Data)",
    description: "Clinical observation in internal medicine department focusing on patient care and diagnostics",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts"],
    isActive: true,
  },
  {
    id: "prog_3",
    hospitalId: "h3",
    name: "Cardiology Observership (Example Listing - Demo Data)",
    description: "Advanced cardiology observation program focusing on cardiac diagnostics and interventions",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts", "ECG Knowledge Preferred"],
    isActive: true,
  },
  {
    id: "prog_4",
    hospitalId: "h3",
    name: "Orthopedic Surgery Elective (Example Listing - Demo Data)",
    description: "Elective rotation in orthopedic surgery with hands-on learning opportunities",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts", "Surgery Interest"],
    isActive: true,
  },
  {
    id: "prog_5",
    hospitalId: "h4",
    name: "Emergency Medicine Observership (Example Listing - Demo Data)",
    description: "Observe emergency medicine procedures and acute care management",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts"],
    isActive: true,
  },
  {
    id: "prog_6",
    hospitalId: "h4",
    name: "Radiology Elective (Example Listing - Demo Data)",
    description: "Diagnostic imaging and radiology training elective",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts"],
    isActive: true,
  },
  {
    id: "prog_7",
    hospitalId: "h5",
    name: "Neurology Observership (Example Listing - Demo Data)",
    description: "Clinical neurology observation focusing on neurological diagnostics",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts"],
    isActive: true,
  },
  {
    id: "prog_8",
    hospitalId: "h5",
    name: "Dermatology Elective (Example Listing - Demo Data)",
    description: "Dermatological disorders and treatments elective rotation",
    requirements: ["Medical Student Status", "Government ID and residency/visa status (as applicable)", "English Proficiency", "Medical Fitness Certificate", "Academic Transcripts"],
    isActive: true,
  },
];

export const mockStudents: Student[] = [
  {
    id: "stu_1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+971501234567",
    nationality: "United Arab Emirates",
    university: "UAE University",
    yearOfStudy: 4,
    complianceStatus: "Complete",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "stu_2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+971507654321",
    nationality: "United Kingdom",
    university: "University of London",
    yearOfStudy: 3,
    complianceStatus: "Pending",
    createdAt: "2024-01-20T14:30:00Z",
  },
];

export const mockApplications: Application[] = [
  {
    id: "app_1",
    studentId: "stu_1",
    programId: "prog_1",
    status: "Approved",
    submissionDate: "2024-02-01T09:00:00Z",
  },
  {
    id: "app_2",
    studentId: "stu_2",
    programId: "prog_2",
    status: "Under Review",
    submissionDate: "2024-02-05T11:15:00Z",
  },
];

export const mockDocuments: Document[] = [
  {
    id: "doc_1",
    applicationId: "app_1",
    type: "Medical Certificate",
    fileName: "medical_cert.pdf",
    fileUrl: "/uploads/medical_cert.pdf",
    uploadedAt: "2024-02-01T09:30:00Z",
    validationStatus: "Validated",
  },
  {
    id: "doc_2",
    applicationId: "app_2",
    type: "Passport",
    fileName: "passport.jpg",
    fileUrl: "/uploads/passport.jpg",
    uploadedAt: "2024-02-05T11:45:00Z",
    validationStatus: "Pending",
  },
];

export const mockPayments: Payment[] = [
  {
    id: "pay_1",
    applicationId: "app_1",
    amount: 5000,
    currency: "AED",
    paymentStatus: "Paid",
    stripePaymentId: "pi_1234567890",
    createdAt: "2024-02-01T10:00:00Z",
  },
  {
    id: "pay_2",
    applicationId: "app_2",
    amount: 3000,
    currency: "AED",
    paymentStatus: "Unpaid",
    createdAt: "2024-02-05T12:00:00Z",
  },
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: "aud_1",
    userId: "stu_1",
    action: "Application Submitted",
    details: "Submitted application for General Surgery Observership",
    timestamp: "2024-02-01T09:00:00Z",
  },
  {
    id: "aud_2",
    userId: "admin_1",
    action: "Application Status Updated",
    details: "Updated application app_1 status to Approved",
    timestamp: "2024-02-02T14:00:00Z",
  },
];

// For backward compatibility
export const hospitals = mockHospitals;
export const programs = mockPrograms.map(p => {
  // Determine program type based on name/content
  let programType: "Observership" | "Hands-on" | "Internship" | "Residency" | "Elective" = "Observership";
  if (p.name.toLowerCase().includes('elective')) {
    programType = "Elective";
  }

  // Determine hands-on level
  let handsOnLevel: "observe" | "assist" | "supervised" | "independent" = "observe";
  if (p.name.toLowerCase().includes('elective')) {
    handsOnLevel = "assist";
  }

  // Demo data - fees removed, replaced with TBD
  const feeAed = 0; // TBD by institution
  
  // Demo data - seats
  const hospital = mockHospitals.find(h => h.id === p.hospitalId);
  const maxStudents = hospital?.maxStudentsPerPeriod || 5;
  const seatsAvailable = Math.floor(Math.random() * maxStudents) + 1;

  // Demo data - duration
  let durationWeeksOptions = [4];
  if (programType === "Elective") durationWeeksOptions = [2, 4];

  // Demo data - daily hours
  const dailyHoursMax = programType === "Observership" ? 6 : 8;

  return {
    ...p,
    departmentName: p.name,
    programType,
    eligibility: { yearOfStudyMin: "Year 3 or above", language: "English" },
    requiredDocuments: [
      "Government ID: Passport or national ID for identity verification.",
      "Curriculum Vitae (CV): Updated CV outlining academic background.",
      "Medical Certificate: Proof of medical fitness or immunization status, if required."
    ] as const,
    durationWeeksOptions,
    dailyHoursMax,
    startDates: ["01 January 2024", "01 February 2024", "01 March 2024"],
    seatsAvailable,
    handsOnLevel,
    certificateProvided: true,
    feeAed,
  };
});

export const mockUsers = [
  {
    id: "u1",
    email: "student@example.com",
    role: "student" as const,
    name: "John Smith",
  },
  {
    id: "u2",
    email: "admin@example.com",
    role: "admin" as const,
    name: "Dr. Sarah Johnson",
  },
  {
    id: "u3",
    email: "student2@example.com",
    role: "student" as const,
    name: "Maria Garcia",
  },
  {
    id: "h1_admin",
    email: "hospital1@medgate.com",
    role: "hospital" as const,
    name: "Hospital Administrator",
    hospitalId: "h1",
  },
  {
    id: "h2_admin",
    email: "hospital2@medgate.com",
    role: "hospital" as const,
    name: "Clinic Manager",
    hospitalId: "h2",
  },
  {
    id: "h3_admin",
    email: "hospital3@medgate.com",
    role: "hospital" as const,
    name: "Medical Director",
    hospitalId: "h3",
  },
];

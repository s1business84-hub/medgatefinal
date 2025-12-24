import type { Student, Program, Application, Document, Payment, AuditLog, Hospital } from "./types";

export const mockHospitals: Hospital[] = [
  {
    id: "h1",
    name: "MedGate Partner Hospital",
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
    programTypes: ["Observership", "Hands-on", "Residency"],
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
    programTypes: ["Observership", "Internship"],
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
    programTypes: ["Observership", "Internship"],
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
    name: "Medical Residency Program",
    description: "Comprehensive medical residency training program",
    requirements: ["Medical Degree", "Valid License", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_2",
    hospitalId: "h2",
    name: "Nursing Internship",
    description: "Professional nursing internship opportunity",
    requirements: ["Nursing Degree", "CPR Certification", "Background Check"],
    isActive: true,
  },
  {
    id: "prog_3",
    hospitalId: "h3",
    name: "Cardiology Observership",
    description: "Advanced cardiology training and observation",
    requirements: ["Medical Degree", "ECG Knowledge", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_4",
    hospitalId: "h3",
    name: "Orthopedic Surgery Fellowship",
    description: "Hands-on orthopedic surgery training program",
    requirements: ["Medical Degree", "Surgery Experience", "Valid License"],
    isActive: true,
  },
  {
    id: "prog_5",
    hospitalId: "h4",
    name: "Emergency Medicine Training",
    description: "Intensive emergency medicine observation program",
    requirements: ["Medical Degree", "ACLS Certification", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_6",
    hospitalId: "h4",
    name: "Radiology Elective",
    description: "Diagnostic imaging and radiology training",
    requirements: ["Medical Degree", "Radiology Interest", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_7",
    hospitalId: "h5",
    name: "Neurology Observership",
    description: "Clinical neurology and neurodiagnostics training",
    requirements: ["Medical Degree", "Neurology Background", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_8",
    hospitalId: "h5",
    name: "Dermatology Elective",
    description: "Dermatological disorders and treatments training",
    requirements: ["Medical Degree", "Skin Care Interest", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_9",
    hospitalId: "h6",
    name: "Family Medicine Rotation",
    description: "Comprehensive primary care training program",
    requirements: ["Medical Degree", "Community Health Interest", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_10",
    hospitalId: "h7",
    name: "General Surgery Internship",
    description: "Hands-on surgical training and experience",
    requirements: ["Medical Degree", "Surgery Interest", "Valid License"],
    isActive: true,
  },
  {
    id: "prog_11",
    hospitalId: "h7",
    name: "Anesthesiology Training",
    description: "Perioperative medicine and anesthesia care",
    requirements: ["Medical Degree", "Anatomy Knowledge", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_12",
    hospitalId: "h8",
    name: "Ophthalmology Observership",
    description: "Eye care and ophthalmic surgery observation",
    requirements: ["Medical Degree", "Eye Health Interest", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_13",
    hospitalId: "h8",
    name: "ENT Specialty Training",
    description: "Ear, Nose, and Throat disorders training",
    requirements: ["Medical Degree", "ENT Interest", "English Proficiency"],
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
    details: "Submitted application for Medical Residency Program",
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
  if (p.name.toLowerCase().includes('fellowship') || p.name.toLowerCase().includes('residency')) {
    programType = "Residency";
  } else if (p.name.toLowerCase().includes('internship') || p.name.toLowerCase().includes('training')) {
    programType = "Internship";
  } else if (p.name.toLowerCase().includes('hands-on') || p.name.toLowerCase().includes('elective')) {
    programType = "Elective";
  }

  // Determine hands-on level
  let handsOnLevel: "observe" | "assist" | "supervised" | "independent" = "observe";
  if (p.name.toLowerCase().includes('fellowship') || p.name.toLowerCase().includes('residency') || p.name.toLowerCase().includes('internship')) {
    handsOnLevel = "supervised";
  } else if (p.name.toLowerCase().includes('hands-on')) {
    handsOnLevel = "assist";
  }

  // Determine fee based on program complexity and type
  let feeAed = 2000; // Base fee
  if (programType === "Residency" || programType === "Internship") feeAed = 5000;
  else if (programType === "Elective") feeAed = 3500;
  else if (p.name.toLowerCase().includes('surgery') || p.name.toLowerCase().includes('cardiology')) feeAed = 4500;

  // Determine seats available based on hospital capacity
  const hospital = mockHospitals.find(h => h.id === p.hospitalId);
  const maxStudents = hospital?.maxStudentsPerPeriod || 5;
  const seatsAvailable = Math.floor(Math.random() * maxStudents) + 1;

  // Determine duration based on program type
  let durationWeeksOptions = [4];
  if (programType === "Residency" || programType === "Internship") durationWeeksOptions = [8, 12];
  else if (programType === "Elective") durationWeeksOptions = [2, 4];

  // Determine daily hours
  let dailyHoursMax = 8;
  if (programType === "Residency" || programType === "Internship") dailyHoursMax = 10;
  else if (programType === "Observership") dailyHoursMax = 6;

  return {
    ...p,
    departmentName: p.name,
    programType,
    eligibility: { yearOfStudyMin: programType === "Residency" ? 4 : 3, language: "English" },
    requiredDocuments: ["EmiratesID/Passport", "CV", "Medical Certificate"] as const,
    durationWeeksOptions,
    dailyHoursMax,
    startDates: ["2024-01-01", "2024-02-01", "2024-03-01"],
    seatsAvailable,
    handsOnLevel,
    certificateProvided: true,
    feeAed,
  };
});

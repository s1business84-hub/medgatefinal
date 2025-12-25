import type { Student, Program, Application, Document, Payment, AuditLog } from "./types";

export const mockStudents: Student[] = [
  {
    id: "stu_1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+971501234567",
    nationality: "United Arab Emirates",
    complianceStatus: "Complete",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "stu_2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+971507654321",
    nationality: "United Kingdom",
    complianceStatus: "Pending",
    createdAt: "2024-01-20T14:30:00Z",
  },
];

export const mockPrograms: Program[] = [
  {
    id: "prog_1",
    name: "Medical Residency Program",
    description: "Comprehensive medical residency training program",
    requirements: ["Medical Degree", "Valid License", "English Proficiency"],
    isActive: true,
  },
  {
    id: "prog_2",
    name: "Nursing Internship",
    description: "Professional nursing internship opportunity",
    requirements: ["Nursing Degree", "CPR Certification", "Background Check"],
    isActive: true,
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

// Re-exports for backward compatibility
export const hospitals = mockHospitals;
export const programs = mockPrograms.map(p => ({
  ...p,
  hospital: mockHospitals.find(h => h.id === p.hospitalId)
}));
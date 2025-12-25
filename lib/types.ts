// Types for MedGate MVP

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  complianceStatus: "Incomplete" | "Pending" | "Complete";
  createdAt: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  isActive: boolean;
}

export interface Application {
  id: string;
  studentId: string;
  programId: string;
  status: "Draft" | "Submitted" | "Under Review" | "Approved" | "Rejected";
  submissionDate: string;
  notes?: string;
}

export interface Document {
  id: string;
  applicationId: string;
  type: "Passport" | "Medical Certificate" | "Academic Transcript" | "Other";
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  validationStatus: "Pending" | "Validated" | "Rejected";
}

export interface Payment {
  id: string;
  applicationId: string;
  amount: number;
  currency: string;
  paymentStatus: "Unpaid" | "Paid" | "Failed";
  stripePaymentId?: string;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  role: "student" | "admin";
  name: string;
}
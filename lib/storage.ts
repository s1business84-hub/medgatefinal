import type { Student, Application, Document, Payment, AuditLog } from "./types";

const KEYS = {
  students: "medgate_students",
  applications: "medgate_applications",
  documents: "medgate_documents",
  payments: "medgate_payments",
  audit: "medgate_audit",
};

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function newId(prefix: string) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

/* STUDENTS */
export function createStudent(input: Omit<Student, "id" | "complianceStatus">): Student {
  const students = readJSON<Student[]>(KEYS.students, []);
  const student: Student = {
    id: newId("stu"),
    complianceStatus: "Incomplete",
    ...input,
  };
  students.push(student);
  writeJSON(KEYS.students, students);
  return student;
}

export function getStudents(): Student[] {
  return readJSON<Student[]>(KEYS.students, []);
}

/* APPLICATIONS */
export function createApplication(input: Omit<Application, "id" | "status" | "submissionDate">): Application {
  const applications = readJSON<Application[]>(KEYS.applications, []);
  const app: Application = {
    id: newId("app"),
    status: "Submitted",
    submissionDate: new Date().toISOString(),
    ...input,
  };
  applications.push(app);
  writeJSON(KEYS.applications, applications);
  return app;
}

export function getApplications(): Application[] {
  return readJSON<Application[]>(KEYS.applications, []);
}

export function updateApplicationStatus(applicationId: string, status: Application["status"]) {
  const applications = readJSON<Application[]>(KEYS.applications, []);
  const next = applications.map((a) => (a.id === applicationId ? { ...a, status } : a));
  writeJSON(KEYS.applications, next);
}

/* DOCUMENTS */
export function addDocument(input: Omit<Document, "id" | "uploadedAt" | "validationStatus">): Document {
  const docs = readJSON<Document[]>(KEYS.documents, []);
  const doc: Document = {
    id: newId("doc"),
    uploadedAt: new Date().toISOString(),
    validationStatus: "Pending",
    ...input,
  };
  docs.push(doc);
  writeJSON(KEYS.documents, docs);
  return doc;
}

export function getDocuments(): Document[] {
  return readJSON<Document[]>(KEYS.documents, []);
}

export function setDocumentValidation(documentId: string, validationStatus: Document["validationStatus"]) {
  const docs = readJSON<Document[]>(KEYS.documents, []);
  const next = docs.map((d) => (d.id === documentId ? { ...d, validationStatus } : d));
  writeJSON(KEYS.documents, next);
}

/* PAYMENTS (placeholder) */
export function createPayment(input: Omit<Payment, "id" | "paymentStatus" | "currency">): Payment {
  const payments = readJSON<Payment[]>(KEYS.payments, []);
  const payment: Payment = {
    id: newId("pay"),
    currency: "AED",
    paymentStatus: "Unpaid",
    ...input,
  };
  payments.push(payment);
  writeJSON(KEYS.payments, payments);
  return payment;
}

export function getPayments(): Payment[] {
  return readJSON<Payment[]>(KEYS.payments, []);
}

export function markPaymentPaid(paymentId: string) {
  const payments = readJSON<Payment[]>(KEYS.payments, []);
  const next = payments.map((p) => (p.id === paymentId ? { ...p, paymentStatus: "Paid" } : p));
  writeJSON(KEYS.payments, next);
}

/* AUDIT */
export function logAudit(entry: Omit<AuditLog, "id" | "timestamp">): AuditLog {
  const audit = readJSON<AuditLog[]>(KEYS.audit, []);
  const item: AuditLog = {
    id: newId("aud"),
    timestamp: new Date().toISOString(),
    ...entry,
  };
  audit.unshift(item);
  writeJSON(KEYS.audit, audit);
  return item;
}

export function getAudit(): AuditLog[] {
  return readJSON<AuditLog[]>(KEYS.audit, []);
}
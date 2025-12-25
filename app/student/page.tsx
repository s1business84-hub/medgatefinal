"use client";

import { useState } from "react";
import Link from "next/link";
import { createStudent, getStudents, createApplication, getApplications, addDocument, getDocuments, createPayment, getPayments } from "@/lib/storage";
import { mockPrograms } from "@/lib/mockData";
import type { Student, Document } from "@/lib/types";

export default function StudentPortal() {
  const [students, setStudents] = useState<Student[]>(getStudents());
  const [applications, setApplications] = useState(getApplications());
  const [documents, setDocuments] = useState(getDocuments());
  const [payments, setPayments] = useState(getPayments());

  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showDocumentForm, setShowDocumentForm] = useState(false);

  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    university: "",
    yearOfStudy: 1,
  });

  const [applicationForm, setApplicationForm] = useState({
    studentId: "",
    programId: "",
  });

  const [documentForm, setDocumentForm] = useState({
    applicationId: "",
    type: "Passport" as Document["type"],
    fileName: "",
    fileUrl: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    applicationId: "",
    amount: 0,
  });

  const handleCreateStudent = () => {
    const student = createStudent(studentForm);
    setStudents([...students, student]);
    setShowStudentForm(false);
    setStudentForm({ name: "", email: "", phone: "", nationality: "", university: "", yearOfStudy: 1 });
  };

  const handleCreateApplication = () => {
    const app = createApplication(applicationForm);
    setApplications([...applications, app]);
    setShowApplicationForm(false);
    setApplicationForm({ studentId: "", programId: "" });
  };

  const handleAddDocument = () => {
    const doc = addDocument(documentForm);
    setDocuments([...documents, doc]);
    setShowDocumentForm(false);
    setDocumentForm({ applicationId: "", type: "Passport", fileName: "", fileUrl: "" });
  };

  const handleCreatePayment = () => {
    const payment = createPayment(paymentForm);
    setPayments([...payments, payment]);
    setPaymentForm({ applicationId: "", amount: 0 });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Portal</h1>
            <p className="text-gray-600">Manage your medical training applications</p>
          </div>
          <Link href="/" className="btn-secondary hover-scale">
            ← Back to Home
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{students.length}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
                <div className="text-sm text-gray-600">Applications</div>
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{documents.length}</div>
                <div className="text-sm text-gray-600">Documents</div>
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{payments.length}</div>
                <div className="text-sm text-gray-600">Payments</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Students Section */}
          <section className="card animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Students</h2>
              <button
                onClick={() => setShowStudentForm(!showStudentForm)}
                className="btn-primary text-sm px-4 py-2 hover-scale"
              >
                {showStudentForm ? "Cancel" : "+ Add Student"}
              </button>
            </div>

            {showStudentForm && (
              <div className="border border-gray-200 rounded-lg p-6 mb-6 animate-scale-in bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Add New Student</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={studentForm.name}
                    onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={studentForm.email}
                    onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={studentForm.phone}
                    onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Nationality"
                    value={studentForm.nationality}
                    onChange={(e) => setStudentForm({ ...studentForm, nationality: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="University"
                    value={studentForm.university}
                    onChange={(e) => setStudentForm({ ...studentForm, university: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="number"
                    placeholder="Year of Study"
                    value={studentForm.yearOfStudy}
                    onChange={(e) => setStudentForm({ ...studentForm, yearOfStudy: parseInt(e.target.value) })}
                    className="form-input"
                  />
                </div>
                <button onClick={handleCreateStudent} className="btn-primary mt-6 w-full hover-scale">
                  Create Student
                </button>
              </div>
            )}

            <div className="space-y-4">
              {students.map((student, index) => (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover-lift animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.email}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${
                      student.complianceStatus === "Complete" ? "status-complete" :
                      student.complianceStatus === "Incomplete" ? "status-incomplete" :
                      "status-pending"
                    }`}>
                      {student.complianceStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="card animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
              <button
                onClick={() => setShowApplicationForm(!showApplicationForm)}
                className="btn-primary text-sm px-4 py-2 hover-scale"
              >
                {showApplicationForm ? "Cancel" : "+ New Application"}
              </button>
            </div>

            {showApplicationForm && (
              <div className="border border-gray-200 rounded-lg p-6 mb-6 animate-scale-in bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Submit New Application</h3>
                <div className="grid grid-cols-1 gap-4">
                  <select
                    value={applicationForm.studentId}
                    onChange={(e) => setApplicationForm({ ...applicationForm, studentId: e.target.value })}
                    className="form-select"
                  >
                    <option value="">Select Student</option>
                    {students.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <select
                    value={applicationForm.programId}
                    onChange={(e) => setApplicationForm({ ...applicationForm, programId: e.target.value })}
                    className="form-select"
                  >
                    <option value="">Select Program</option>
                    {mockPrograms.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <button onClick={handleCreateApplication} className="btn-primary mt-6 w-full hover-scale">
                  Submit Application
                </button>
              </div>
            )}

            <div className="space-y-4">
              {applications.map((app, index) => {
                const student = students.find(s => s.id === app.studentId);
                const program = mockPrograms.find(p => p.id === app.programId);
                return (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover-lift animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{program?.name}</h3>
                        <p className="text-sm text-gray-600">Student: {student?.name}</p>
                        <p className="text-sm text-gray-600">Submitted: {new Date(app.submissionDate).toLocaleDateString()}</p>
                      </div>
                      <span className={`status-badge ${
                        app.status === "Approved" ? "status-approved" :
                        app.status === "Rejected" ? "status-rejected" :
                        app.status === "Under Review" ? "status-pending" :
                        app.status === "Submitted" ? "status-submitted" :
                        "status-draft"
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Documents Section */}
          <section className="card animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
              <button
                onClick={() => setShowDocumentForm(!showDocumentForm)}
                className="btn-primary text-sm px-4 py-2 hover-scale"
              >
                {showDocumentForm ? "Cancel" : "+ Upload Document"}
              </button>
            </div>

            {showDocumentForm && (
              <div className="border border-gray-200 rounded-lg p-6 mb-6 animate-scale-in bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Upload Document</h3>
                <div className="grid grid-cols-1 gap-4">
                  <select
                    value={documentForm.applicationId}
                    onChange={(e) => setDocumentForm({ ...documentForm, applicationId: e.target.value })}
                    className="form-select"
                  >
                    <option value="">Select Application</option>
                    {applications.map((a) => (
                      <option key={a.id} value={a.id}>App {a.id}</option>
                    ))}
                  </select>
                  <select
                    value={documentForm.type}
                    onChange={(e) => setDocumentForm({ ...documentForm, type: e.target.value as Document["type"] })}
                    className="form-select"
                  >
                    <option value="Passport">Passport</option>
                    <option value="Medical Certificate">Medical Certificate</option>
                    <option value="Academic Transcript">Academic Transcript</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="File Name"
                    value={documentForm.fileName}
                    onChange={(e) => setDocumentForm({ ...documentForm, fileName: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="File URL"
                    value={documentForm.fileUrl}
                    onChange={(e) => setDocumentForm({ ...documentForm, fileUrl: e.target.value })}
                    className="form-input"
                  />
                </div>
                <button onClick={handleAddDocument} className="btn-primary mt-6 w-full hover-scale">
                  Upload Document
                </button>
              </div>
            )}

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover-lift animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{doc.type}</h3>
                        <p className="text-sm text-gray-600">{doc.fileName}</p>
                        <p className="text-sm text-gray-600">Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${
                      doc.validationStatus === "Validated" ? "status-validated" :
                      doc.validationStatus === "Rejected" ? "status-rejected" :
                      "status-pending"
                    }`}>
                      {doc.validationStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Payments Section */}
          <section className="card animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Payments</h2>

            <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
              <h3 className="text-lg font-medium mb-4">Create Payment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  value={paymentForm.applicationId}
                  onChange={(e) => setPaymentForm({ ...paymentForm, applicationId: e.target.value })}
                  className="form-select"
                >
                  <option value="">Select Application</option>
                  {applications.map((a) => (
                    <option key={a.id} value={a.id}>App {a.id}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Amount (AED)"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm({ ...paymentForm, amount: parseInt(e.target.value) })}
                  className="form-input"
                />
              </div>
              <button onClick={handleCreatePayment} className="btn-primary mt-6 w-full hover-scale">
                Create Payment
              </button>
            </div>

            <div className="space-y-4">
              {payments.map((payment, index) => (
                <div key={payment.id} className="border border-gray-200 rounded-lg p-4 hover-lift animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Payment for App {payment.applicationId}</h3>
                        <p className="text-sm text-gray-600">Amount: {payment.amount} {payment.currency}</p>
                        <p className="text-sm text-gray-600">Created: {new Date(payment.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${
                      payment.paymentStatus === "Paid" ? "status-paid" :
                      "status-unpaid"
                    }`}>
                      {payment.paymentStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
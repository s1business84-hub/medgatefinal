"use client";

import { useState } from "react";
import Link from "next/link";
import { getApplications, updateApplicationStatus, getDocuments, setDocumentValidation, getPayments, markPaymentPaid, getAudit } from "@/lib/storage";
import { mockStudents, mockPrograms } from "@/lib/mockData";
import type { Application, Document } from "@/lib/types";

export default function AdminPage() {
  const [applications, setApplications] = useState(getApplications());
  const [documents, setDocuments] = useState(getDocuments());
  const [payments, setPayments] = useState(getPayments());
  const auditLogs = getAudit();

  const handleUpdateApplicationStatus = (applicationId: string, status: Application["status"]) => {
    updateApplicationStatus(applicationId, status);
    setApplications(applications.map(a => a.id === applicationId ? { ...a, status } : a));
  };

  const handleSetDocumentValidation = (documentId: string, validationStatus: Document["validationStatus"]) => {
    setDocumentValidation(documentId, validationStatus);
    setDocuments(documents.map(d => d.id === documentId ? { ...d, validationStatus } : d));
  };

  const handleMarkPaymentPaid = (paymentId: string) => {
    markPaymentPaid(paymentId);
    setPayments(payments.map(p => p.id === paymentId ? { ...p, paymentStatus: "Paid" } : p));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Hospital Admin Dashboard</h1>
            <p className="text-gray-600">Manage applications, documents, and payments</p>
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
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{documents.filter(d => d.validationStatus === "Pending").length}</div>
                <div className="text-sm text-gray-600">Pending Docs</div>
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{payments.filter(p => p.paymentStatus === "Unpaid").length}</div>
                <div className="text-sm text-gray-600">Unpaid</div>
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{auditLogs.length}</div>
                <div className="text-sm text-gray-600">Audit Logs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="card mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
          </div>

          <div className="space-y-4">
            {applications.map((app) => {
              const student = mockStudents.find(s => s.id === app.studentId);
              const program = mockPrograms.find(p => p.id === app.programId);
              return (
                <div key={app.id} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{program?.name}</div>
                      <div className="text-sm text-gray-600">Student: {student?.name} ({student?.email})</div>
                      <div className="text-sm text-gray-500">Submitted: {new Date(app.submissionDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {app.status}
                    </span>
                    <select
                      value={app.status}
                      onChange={(e) => handleUpdateApplicationStatus(app.id, e.target.value as Application["status"])}
                      className="input-field text-sm"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Documents Section */}
        <div className="card mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{doc.type}</div>
                    <div className="text-sm text-gray-600">{doc.fileName}</div>
                    <div className="text-sm text-gray-500">Application: {doc.applicationId} • Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    doc.validationStatus === "Validated" ? "bg-green-100 text-green-800" :
                    doc.validationStatus === "Rejected" ? "bg-red-100 text-red-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {doc.validationStatus}
                  </span>
                  <select
                    value={doc.validationStatus}
                    onChange={(e) => handleSetDocumentValidation(doc.id, e.target.value as Document["validationStatus"])}
                    className="input-field text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Validated">Validated</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payments Section */}
        <div className="card mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Payments</h2>
          </div>

          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Payment for App {payment.applicationId}</div>
                    <div className="text-sm text-gray-600">Amount: {payment.amount} {payment.currency}</div>
                    <div className="text-sm text-gray-500">Created: {new Date(payment.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    payment.paymentStatus === "Paid" ? "bg-green-100 text-green-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {payment.paymentStatus}
                  </span>
                  {payment.paymentStatus === "Unpaid" && (
                    <button
                      onClick={() => handleMarkPaymentPaid(payment.id)}
                      className="btn-success hover-scale"
                    >
                      Mark Paid
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Logs Section */}
        <div className="card animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Audit Logs</h2>
          </div>

          <div className="space-y-4">
            {auditLogs.slice().reverse().map((log) => (
              <div key={log.id} className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{log.action}</div>
                    <div className="text-sm text-gray-600">{log.details}</div>
                    <div className="text-sm text-gray-500">User: {log.userId}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(log.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

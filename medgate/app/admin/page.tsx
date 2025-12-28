"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getApplications, updateApplicationStatus, getStudents, createNotification } from "@/lib/storage";
import { mockPrograms } from "@/lib/mockData";
import { useAuth } from "@/lib/auth-context";
import type { Application } from "@/lib/types";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export default function AdminPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/login");
    }
  }, [user, router]);

  const [applications, setApplications] = useState(getApplications());
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [actionInProgress, setActionInProgress] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);

  const getStudentName = (studentId: string): string => {
    const students = getStudents();
    const student = students.find(s => s.id === studentId);
    return student?.name || "Unknown Student";
  };

  const getStudentEmail = (studentId: string): string => {
    const students = getStudents();
    const student = students.find(s => s.id === studentId);
    return student?.email || "Unknown";
  };

  const handleIncludeInObservership = (appId: string) => {
    setActionInProgress(true);
    const updated = updateApplicationStatus(appId, "Approved", "Included in observership program");
    
    if (updated) {
      createNotification({
        userId: updated.studentId,
        type: "approval",
        title: "Observership Confirmed",
        message: `Congratulations! You have been included in the observership program. Please complete your onboarding to begin.`,
        relatedApplicationId: appId,
      });

      setApplications(applications.map(app => app.id === appId ? updated : app));
      setSelectedApp(updated);
    }
    setActionInProgress(false);
  };

  const handleWaitlist = (appId: string) => {
    setActionInProgress(true);
    const updated = updateApplicationStatus(appId, "Waitlisted", "Added to waitlist");
    
    if (updated) {
      createNotification({
        userId: updated.studentId,
        type: "update",
        title: "Waitlist Status",
        message: `Your application has been added to the waitlist. We will notify you if a spot becomes available.`,
        relatedApplicationId: appId,
      });

      setApplications(applications.map(app => app.id === appId ? updated : app));
      setSelectedApp(updated);
    }
    setActionInProgress(false);
  };

  const handleReject = (appId: string) => {
    setActionInProgress(true);
    const updated = updateApplicationStatus(appId, "Rejected", rejectReason || "Application not accepted");
    
    if (updated) {
      createNotification({
        userId: updated.studentId,
        type: "rejection",
        title: "Application Status Update",
        message: `We appreciate your interest. Unfortunately, we were unable to accept your application at this time. ${rejectReason ? `Reason: ${rejectReason}` : ""}`,
        relatedApplicationId: appId,
      });

      setApplications(applications.map(app => app.id === appId ? updated : app));
      setSelectedApp(updated);
      setShowRejectModal(false);
      setRejectReason("");
    }
    setActionInProgress(false);
  };

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Review and manage observership applications</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { logout(); router.push("/"); }} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors font-medium">
              Logout
            </button>
            <Link href="/" className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Applications</h2>
              </div>
              {applications.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                  <p>No applications yet</p>
                </div>
              ) : (
                <div className="divide-y">
                  {applications.map((app) => (
                    <div key={app.id} onClick={() => setSelectedApp(app)} className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedApp?.id === app.id ? "bg-indigo-50" : ""}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{getStudentName(app.studentId)}</p>
                          <p className="text-sm text-gray-600">{getStudentEmail(app.studentId)}</p>
                          <p className="text-xs text-gray-500 mt-1">{new Date(app.submissionDate).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${app.status === "Approved" ? "bg-green-100 text-green-800" : app.status === "Rejected" ? "bg-red-100 text-red-800" : app.status === "Waitlisted" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                            {app.status === "Approved" ? "Included" : app.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            {selectedApp ? (
              <div className="bg-white rounded-lg shadow sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">Application Details</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Student Name</p>
                    <p className="font-semibold text-gray-900">{getStudentName(selectedApp.studentId)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-semibold text-gray-900 break-all">{getStudentEmail(selectedApp.studentId)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Program</p>
                    <p className="font-semibold text-gray-900">{mockPrograms.find(p => p.id === selectedApp.programId)?.name || "Unknown Program"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${selectedApp.status === "Approved" ? "bg-green-100 text-green-800" : selectedApp.status === "Rejected" ? "bg-red-100 text-red-800" : selectedApp.status === "Waitlisted" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                      {selectedApp.status === "Approved" ? "Included" : selectedApp.status}
                    </span>
                  </div>
                  {selectedApp.notes && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Notes</p>
                      <p className="text-gray-900 text-sm">{selectedApp.notes}</p>
                    </div>
                  )}
                  {selectedApp.status === "Submitted" && (
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      <button onClick={() => handleIncludeInObservership(selectedApp.id)} disabled={actionInProgress} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Include in Observership
                      </button>
                      <button onClick={() => handleWaitlist(selectedApp.id)} disabled={actionInProgress} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Add to Waitlist
                      </button>
                      <button onClick={() => setShowRejectModal(true)} disabled={actionInProgress} className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject Application
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                <p>Select an application to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reject Application</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Rejection (Optional)</label>
              <textarea value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Enter reason..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" rows={4} />
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setShowRejectModal(false); setRejectReason(""); }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                Cancel
              </button>
              <button onClick={() => selectedApp && handleReject(selectedApp.id)} disabled={actionInProgress} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors disabled:opacity-50">
                {actionInProgress ? "Processing..." : "Confirm Rejection"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  CreditCard,
  Bell,
  Plus,
  Trash2,
  ArrowLeft,
  ShieldCheck,
  UserCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function PortalPage() {
  const [role, setRole] = useState<"student" | "admin">("student");
  const [notices, setNotices] = useState([
    {
      id: 1,
      tag: "Exam Cell",
      date: "Nov 22, 2026",
      title: "Semester-V End Theory Examination Hall Tickets Released",
    },
    {
      id: 2,
      tag: "Placements",
      date: "Nov 28, 2026",
      title: "Microsoft & Amazon Off-Campus Coding Round Registration Link",
    },
  ]);

  const [newNoticeTitle, setNewNoticeTitle] = useState("");
  const [newNoticeTag, setNewNoticeTag] = useState("Academics");

  const [inquiries, setInquiries] = useState([
    { id: 101, name: "Aarav Sharma", program: "B.Tech Computer Science", status: "Pending" },
    { id: 102, name: "Priya Nair", program: "MBA Management", status: "Reviewed" },
    { id: 103, name: "Rohan Verma", program: "B.Sc. Data Science", status: "Pending" },
  ]);

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;
    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    setNotices([
      { id: Date.now(), tag: newNoticeTag, date: today, title: newNoticeTitle },
      ...notices,
    ]);
    setNewNoticeTitle("");
  };

  const handleDeleteNotice = (id: number) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const toggleInquiryStatus = (id: number) => {
    setInquiries(
      inquiries.map((inq) =>
        inq.id === id
          ? { ...inq, status: inq.status === "Pending" ? "Approved" : "Pending" }
          : inq
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Top Portal Header */}
      <header className="bg-indigo-950 text-white border-b border-indigo-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-indigo-900 hover:bg-indigo-800 px-3 py-1.5 rounded-lg text-indigo-100 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <span className="font-bold tracking-tight">APEX ERP PORTAL</span>
            </div>
          </div>

          {/* Role Switcher (Demo Auth) */}
          <div className="flex items-center gap-2 bg-indigo-900/80 p-1 rounded-xl border border-indigo-800">
            <button
              onClick={() => setRole("student")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                role === "student"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-indigo-200 hover:text-white"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" /> Student View
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                role === "admin"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-indigo-200 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Admin Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {role === "student" ? (
          /* ================= STUDENT DASHBOARD ================= */
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  B.Tech Computer Science • Semester V
                </span>
                <h1 className="text-2xl font-bold text-slate-900 mt-1">
                  Welcome back, Govardhan K. (Roll: 24AP1A0542)
                </h1>
              </div>
              <button
                onClick={() => alert("Downloading Semester-V Hall Ticket PDF...")}
                className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition"
              >
                <FileText className="w-4 h-4" /> Download Hall Ticket
              </button>
            </div>

            {/* Academic KPI Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
                  <span>Current CGPA</span>
                  <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900 mt-2">9.14 / 10</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Top 5% of Batch</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
                  <span>Overall Attendance</span>
                  <CalendarCheck className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900 mt-2">88.5%</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Eligible for Exams</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
                  <span>Credits Earned</span>
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900 mt-2">112 / 160</p>
                <p className="text-xs text-slate-500 font-medium mt-1">6 Active Courses</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
                  <span>Tuition Fee Status</span>
                  <CreditCard className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-3xl font-extrabold text-emerald-600 mt-2">PAID</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Zero Dues Pending</p>
              </div>
            </div>

            {/* Subject Attendance & Live Notices */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Subject-Wise Attendance &amp; Internal Marks
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                        <th className="pb-3">Course Code &amp; Name</th>
                        <th className="pb-3">Attendance</th>
                        <th className="pb-3">Mid-Term (30)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 font-medium">CS501 • Machine Learning</td>
                        <td className="py-3 text-emerald-600 font-semibold">92%</td>
                        <td className="py-3 font-semibold">28 / 30</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">CS502 • Cloud Computing</td>
                        <td className="py-3 text-emerald-600 font-semibold">86%</td>
                        <td className="py-3 font-semibold">26 / 30</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">CS503 • Operating Systems</td>
                        <td className="py-3 text-amber-600 font-semibold">81%</td>
                        <td className="py-3 font-semibold">25 / 30</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">CS504 • Full-Stack Web Dev</td>
                        <td className="py-3 text-emerald-600 font-semibold">95%</td>
                        <td className="py-3 font-semibold">29 / 30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-indigo-700" />
                  <h2 className="text-lg font-bold text-slate-900">Department Circulars</h2>
                  {notices.map((n) => (
                    <div key={n.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between text-[11px] font-semibold mb-1">
                        <span className="text-indigo-700">{n.tag}</span>
                        <span className="text-slate-400">{n.date}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-800">{n.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= ADMIN CRUD DASHBOARD ================= */
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Administrator Control Panel
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-1">
                Manage Campus Notices &amp; Admissions Inquiries
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Create & Delete Notices (CRUD) */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Publish New Campus Notice
                </h2>
                <form onSubmit={handleAddNotice} className="space-y-3">
                  <div className="flex gap-3">
                    <select
                      value={newNoticeTag}
                      onChange={(e) => setNewNoticeTag(e.target.value)}
                      className="px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                    >
                      <option>Academics</option>
                      <option>Exam Cell</option>
                      <option>Placements</option>
                      <option>Event</option>
                    </select>
                    <input
                      type="text"
                      value={newNoticeTitle}
                      onChange={(e) => setNewNoticeTitle(e.target.value)}
                      placeholder="Enter announcement headline..."
                      className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition"
                  >
                    <Plus className="w-4 h-4" /> Publish Notice
                  </button>
                </form>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Active Notices ({notices.length})
                  </p>
                  {notices.map((n) => (
                    <div
                      key={n.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-indigo-700 uppercase">
                          {n.tag} • {n.date}
                        </span>
                        <p className="text-sm font-medium text-slate-800">{n.title}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteNotice(n.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                        title="Delete Notice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions Inquiry Approval Table */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Recent Admissions Inquiries
                </h2>
                <div className="divide-y divide-slate-100">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="py-3.5 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-sm text-slate-900">{inq.name}</p>
                        <p className="text-xs text-slate-500">{inq.program}</p>
                      </div>
                      <button
                        onClick={() => toggleInquiryStatus(inq.id)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                          inq.status === "Approved"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> {inq.status}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

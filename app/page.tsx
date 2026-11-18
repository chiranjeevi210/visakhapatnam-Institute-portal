"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Bell,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


export default function CollegeHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

   const programs = [
    {
      title: "B.Tech in Computer Science & AI",
      category: "Engineering",
      duration: "4 Years",
      seats: "120 Seats",
      desc: "Specialization in artificial intelligence, machine learning, cloud architecture, and full-stack software engineering.",
    },
    {
      title: "B.Tech in Electronics & Communication",
      category: "Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      desc: "Focus on VLSI design, embedded IoT systems, robotics, and next-generation wireless networks.",
    },
    {
      title: "B.Tech in Electrical and Electronics Engineering",
      category: "Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      desc: "Specialization in power electronics, smart grids, and electrical power systems.",
    },
    {
      title: "B.Tech in Information Technology",
      category: "Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      desc: "Core training in software development, database systems, networking, and enterprise IT infrastructure.",
    },
    {
      title: "Master of Business Administration (MBA)",
      category: "Management",
      duration: "2 Years",
      seats: "120 Seats",
      desc: "Industry-integrated leadership program in FinTech, Business Analytics, Marketing, and Operations.",
    },
    {
      title: "B.Sc. (Hons) in Data Science",
      category: "Sciences",
      duration: "3 Years",
      seats: "90 Seats",
      desc: "Hands-on training in statistical modeling, big data pipelines, Python, and predictive analytics.",
    },
    {
      title: "B.Tech in Mechanical Engineering",
      category: "Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      desc: "Comprehensive curriculum in thermodynamics, CAD/CAM manufacturing, robotics, and industrial design.",
    },
  ];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

   const notices = [
    {
      date: "Nov 20, 2026",
      tag: "Admissions",
      title: "Phase-I Entrance Exam & Merit Scholarship Applications Open for 2027 Batch",
    },
    {
      date: "Nov 25, 2026",
      tag: "Placements",
      title: "Annual Campus Recruitment Drive: 45+ Tech & Fortune 500 Companies Confirmed",
    },
    {
      date: "Dec 04, 2026",
      tag: "Event",
      title: "National Hackathon 'InnovateX 2026' — Register Your Team Before Nov 30",
    },
    {
      date: "Dec 10, 2026",
      tag: "Event",
      title: "National Seminar: Register Your Team Before Dec 05",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
          {/* Top Announcement Bar */}
      <div className="bg-indigo-950 text-indigo-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">
              NEW
            </span>
            <span>Admissions Open for Academic Year 2026–27 | NAAC &apos;A+&apos; Accredited</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 891-234-5678
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> admissions@vips.edu.in
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-indigo-700 text-white p-2 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 block leading-none">
                Visakhapatnam Institute for Professional Studies
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase">
                Of Technology &amp; Management
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-indigo-700 transition">About</a>
            <a href="#programs" className="hover:text-indigo-700 transition">Programs</a>
            <a href="#notices" className="hover:text-indigo-700 transition">Notice Board</a>
            <a href="#campus" className="hover:text-indigo-700 transition">Campus Life</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/portal"
              className="px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 rounded-lg transition"
            >
              Student Portal
            </Link>
            <a
              href="#apply"
              className="px-4 py-2 text-sm font-semibold bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 shadow-sm transition"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-700">
                About
              </a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-700">
                Programs
              </a>
              <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-700">
                Notice Board
              </a>
              <a href="#campus" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-700">
                Campus Life
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
              <Link
                href="/portal"
                className="w-full py-2 text-center text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-lg"
              >
                Student Portal
              </Link>
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 text-center text-sm font-semibold bg-indigo-700 text-white rounded-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-800/60 border border-indigo-700 px-3 py-1 rounded-full text-xs font-medium text-indigo-200">
              <Award className="w-4 h-4 text-amber-400" />
              Ranked Among Top 50 Innovation Campuses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Shaping Future Leaders in{" "}
              <span className="text-amber-400">Technology &amp; Research</span>
            </h1>
            <p className="text-lg text-indigo-100/90 max-w-xl leading-relaxed">
              Experience hands-on engineering labs, industry-mentored research, and a 96% placement track record across global tech leaders.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                Explore Programs <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#notices"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition"
              >
                View Campus Notices
              </a>
            </div>
          </div>

          {/* Quick Inquiry Card */}
          <div id="apply" className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">Admissions Inquiry 2026–27</h2>
            <p className="text-sm text-slate-500 mt-1">
              Request our digital prospectus and scholarship eligibility details.
            </p>
                     <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Inquiry submitted! Our admissions counselor will contact you shortly.");
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter student name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                  Program Interest
                </label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>B.Tech Computer Science &amp; AI</option>
                  <option>B.Tech Electronics &amp; Communication</option>
                  <option>B.Tech Electrical and Electronics Engineering</option>
                  <option>B.Tech Information Technology</option>
                  <option>B.Tech Mechanical Engineering</option>
                  <option>MBA Management</option>
                  <option>B.Sc. (Hons) Data Science</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg shadow transition"
              >
                Request Prospectus
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Key Statistics Banner */}
            {/* Key Statistics Banner */}
      <section id="about" className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="text-center border-r border-slate-100 last:border-none">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-700">96.4%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Placement Record</p>
          </div>
          <div className="text-center lg:border-r border-slate-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-700">42 LPA</p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Highest Package</p>
          </div>
          <div className="text-center border-r border-slate-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-700">120+</p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Research Labs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-700">8,500+</p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Active Students</p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Programs Section */}
      <section id="programs" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Academic Excellence
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Explore Our Programs</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Engineering", "Management", "Sciences"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-indigo-700 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPrograms.map((program, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                    {program.category}
                  </span>
                  <span className="text-slate-500">
                    {program.duration} • {program.seats}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{program.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-indigo-600" /> Updated 2026 Curriculum
                </span>
                <button className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1">
                  Syllabus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Campus Notice Board */}
      <section id="notices" className="bg-slate-100 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Bell className="w-6 h-6 text-indigo-700" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Campus Notices &amp; Upcoming Events
            </h2>
          </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {notices.map((notice, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                    {notice.tag}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {notice.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 leading-snug">{notice.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="campus" className="bg-slate-950 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              Visakhapatnam Institute for Professional Studies
            </div>
            <p className="text-sm leading-relaxed">
              Empowering students through innovation, practical engineering, and global industry partnerships.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programs" className="hover:text-white">Academic Programs</a></li>
              <li><a href="#apply" className="hover:text-white">Admissions 2026</a></li>
              <li><a href="#notices" className="hover:text-white">Exam Cell &amp; Results</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Student Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Student LMS Login</a></li>
              <li><a href="#" className="hover:text-white">Faculty Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Digital Library</a></li>
            </ul>
          </div>
                    <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Campus Address
            </h4>
            <p className="text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>
                BRTS Road, Simhachalam - Hanumanthavaka Road, Mudasarlova, Visakhapatnam, Andhra Pradesh 530035
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-10 pt-6 text-xs text-center">
          © 2026 Visakhapatnam Institute for Professional Studies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

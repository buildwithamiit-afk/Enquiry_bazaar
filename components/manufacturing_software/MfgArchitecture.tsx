"use client";

import React from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  GitBranch, 
  Cloud 
} from "lucide-react";

export function MfgArchitecture() {
  const stackItems = [
    {
      title: "Frontend Layer",
      tech: "Next.js & React",
      desc: "Server-side rendering, sub-second load times, and responsive mobile-first interfaces.",
      icon: Cpu,
    },
    {
      title: "Backend Services",
      tech: "Node.js & Python",
      desc: "Clean REST APIs for mathematical quotation logic, PDF generation, and production routing.",
      icon: Server,
    },
    {
      title: "Database Architecture",
      tech: "PostgreSQL & Prisma",
      desc: "Relational database designed for multi-tier bill of materials (BOM), orders, and inventory.",
      icon: Database,
    },
    {
      title: "Automated Communication",
      tech: "WhatsApp Cloud API",
      desc: "Direct WhatsApp notifications for new RFQs, quotation PDF delivery, and order status updates.",
      icon: Smartphone,
    },
    {
      title: "Deployment & Hosting",
      tech: "Docker & Cloud Infrastructure",
      desc: "Containerized deployments on your chosen cloud (AWS / Cloudflare) with automated daily backups.",
      icon: Cloud,
    },
    {
      title: "Source Code Handover",
      tech: "Full Repository Rights",
      desc: "Complete Git repository handover, schema migrations, and documentation with 100% ownership.",
      icon: GitBranch,
    },
  ];

  return (
    <section id="architecture-section" className="relative py-16 sm:py-20 bg-[#001A55] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-orange-300">
            <Code2 className="h-3.5 w-3.5" />
            <span>Architecture &amp; Standards</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Enterprise Tech Stack, 100% Client-Owned
          </h2>
          <p className="mt-3 text-base text-slate-300">
            We build on standard, open-source enterprise foundations without proprietary agency locks.
          </p>
        </div>

        {/* 6-Grid Tech Stack */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20 text-[#FE5905] border border-orange-500/30">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">{item.title}</span>
                    <span className="text-sm font-semibold text-white block">{item.tech}</span>
                  </div>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ownership Guarantee Strip */}
        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-200">
              <strong>Source Code Guarantee:</strong> Full administrative rights, Git repositories, and database schemas are handed over upon project completion.
            </p>
          </div>

          <a
            href="#contact-section"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#FE5905] px-4 py-2 text-xs font-semibold text-white hover:bg-[#ff6f26] transition-colors"
          >
            <span>Request Architecture Call</span>
          </a>
        </div>

      </div>
    </section>
  );
}

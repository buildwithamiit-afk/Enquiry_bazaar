"use client";

import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Download, Sparkles, Star, ExternalLink, HelpCircle, Check, Copy, Printer } from "lucide-react";

export function GoogleReviewQRGenerator() {
  const [businessName, setBusinessName] = useState("Your Business Name");
  const [reviewUrl, setReviewUrl] = useState("https://g.page/r/sample/review");
  const [tagline, setTagline] = useState("Scan to leave us a 5-Star Review on Google!");
  const [theme, setTheme] = useState<"google" | "dark" | "orange" | "minimal">("google");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const targetUrl = reviewUrl.trim() || "https://google.com";
        const url = await QRCode.toDataURL(targetUrl, {
          width: 320,
          margin: 1,
          color: {
            dark: theme === "dark" ? "#0F172A" : "#1E293B",
            light: "#FFFFFF",
          },
          errorCorrectionLevel: "H",
        });
        setQrDataUrl(url);
      } catch (err) {
        console.error("QR Code generation error:", err);
      }
    };
    generateQR();
  }, [reviewUrl, theme]);

  const handleDownload = () => {
    if (!qrDataUrl) return;

    // Create high quality downloadable canvas composite
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 1050;

    // Background styling based on theme
    if (theme === "dark") {
      ctx.fillStyle = "#000B1A";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (theme === "orange") {
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#FE5905");
      grad.addColorStop(1, "#001646");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Border outline for light
      ctx.strokeStyle = "#E2E8F0";
      ctx.lineWidth = 12;
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    }

    const qrImg = new window.Image();
    qrImg.crossOrigin = "anonymous";
    qrImg.onload = () => {
      // Header Card
      const textColor = theme === "dark" || theme === "orange" ? "#FFFFFF" : "#0F172A";
      const subTextColor = theme === "dark" || theme === "orange" ? "#FFB48A" : "#475569";

      // Title
      ctx.font = "bold 44px 'Montserrat', sans-serif";
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.fillText(businessName || "Review Us on Google", canvas.width / 2, 110);

      // Stars
      ctx.font = "38px sans-serif";
      ctx.fillStyle = "#F59E0B";
      ctx.fillText("★★★★★", canvas.width / 2, 170);

      // Tagline
      ctx.font = "600 24px 'Inter', sans-serif";
      ctx.fillStyle = subTextColor;
      ctx.fillText(tagline, canvas.width / 2, 220);

      // White QR Box Container
      const boxSize = 460;
      const boxX = (canvas.width - boxSize) / 2;
      const boxY = 270;
      
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
      ctx.shadowBlur = 25;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxSize, boxSize, 30);
      ctx.fill();
      ctx.shadowColor = "transparent";

      // Draw QR Code
      ctx.drawImage(qrImg, boxX + 30, boxY + 30, boxSize - 60, boxSize - 60);

      // Bottom Badge
      ctx.font = "bold 28px 'Montserrat', sans-serif";
      ctx.fillStyle = textColor;
      ctx.fillText("Google Customer Review", canvas.width / 2, 800);

      ctx.font = "500 20px 'Inter', sans-serif";
      ctx.fillStyle = subTextColor;
      ctx.fillText("Point camera at QR code to open review page", canvas.width / 2, 845);

      // Footer branding
      ctx.font = "bold 16px 'Inter', sans-serif";
      ctx.fillStyle = theme === "dark" || theme === "orange" ? "#64748B" : "#94A3B8";
      ctx.fillText("Powered by EnquiryBazaar.in Local Growth Engine", canvas.width / 2, 980);

      // Export as PNG
      const link = document.createElement("a");
      link.download = `${(businessName || "google-review").toLowerCase().replace(/\s+/g, "-")}-review-qr-standee.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    qrImg.src = qrDataUrl;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(reviewUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-b from-orange-50/50 via-white to-white p-6 shadow-xl sm:p-10 lg:p-12">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header Info */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>100% Free Instant Business Tool</span>
        </div>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Generate Your <span className="text-[#FE5905]">Google 5-Star Review QR Standee</span>
        </h3>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Customers who scan this QR code on their smartphone are taken directly to your Google Business Profile review box. Download, print, and display on your factory counter, reception desk, or product packages.
        </p>
      </div>

      {/* Tool Workspace Grid - Mobile: Preview on Top (order-1), Form below (order-2); Desktop: Side-by-Side */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
        
        {/* Standee Preview & Download (Top in Mobile: order-1, Right in Desktop: lg:order-2 lg:col-span-6) */}
        <div className="order-1 flex flex-col items-center justify-start lg:order-2 lg:col-span-6">
          <div className="w-full max-w-[340px] sm:max-w-sm lg:sticky lg:top-24">
            
            {/* Mobile Helper Badge */}
            <div className="mb-3 flex items-center justify-between lg:hidden px-1">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" /> Live Standee Preview
              </span>
              <span className="text-[11px] font-medium text-slate-500">Updates as you type</span>
            </div>

            {/* Live Standee Card Mockup */}
            <div
              ref={cardRef}
              className={`relative overflow-hidden rounded-3xl p-5 text-center transition-all duration-300 shadow-xl sm:p-7 ${
                theme === "dark"
                  ? "bg-slate-950 text-white border border-slate-800"
                  : theme === "orange"
                  ? "bg-gradient-to-b from-[#FE5905] to-[#001646] text-white border border-orange-400/30"
                  : "bg-white text-slate-900 border-4 border-slate-100 shadow-slate-200/80"
              }`}
            >
              {/* Google Brand Header */}
              <div className="flex items-center justify-center gap-2">
                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white shadow-sm font-bold text-[#FE5905] text-xs sm:text-sm">
                  G
                </span>
                <span className={`text-[10.5px] sm:text-xs font-bold tracking-wider uppercase ${theme === "dark" || theme === "orange" ? "text-orange-200" : "text-slate-500"}`}>
                  Google Verified Business
                </span>
              </div>

              {/* Title & Stars */}
              <h4 className="mt-2.5 text-base sm:text-lg font-extrabold tracking-tight truncate px-2">
                {businessName || "Your Business Name"}
              </h4>
              <div className="mt-1 flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className={`mt-1 text-[11.5px] sm:text-xs font-medium px-2 ${theme === "dark" || theme === "orange" ? "text-orange-100" : "text-slate-600"}`}>
                {tagline}
              </p>

              {/* QR Container */}
              <div className="my-4 sm:my-5 mx-auto flex h-44 w-44 sm:h-52 sm:w-52 items-center justify-center rounded-2xl bg-white p-2.5 sm:p-3 shadow-inner">
                {qrDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={qrDataUrl}
                    alt="Google Review QR Code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-400 animate-pulse">
                    Generating QR...
                  </div>
                )}
              </div>

              {/* Scan Microcopy */}
              <p className="text-[11.5px] sm:text-xs font-bold tracking-tight">
                Scan with any Smartphone Camera
              </p>
              <p className={`text-[9.5px] sm:text-[10px] mt-0.5 ${theme === "dark" || theme === "orange" ? "text-orange-200" : "text-slate-400"}`}>
                Direct Link to Google Review Box · 10 Seconds
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download Standee (PNG)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all hover:bg-slate-50 active:scale-95"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Link Copied" : "Copy Link"}</span>
              </button>
            </div>

            <p className="mt-2.5 text-center text-[11px] text-slate-500">
              💡 <strong>Pro Tip:</strong> Place this standee at your counter or dispatch packages to collect 5-star reviews on auto-pilot.
            </p>
          </div>
        </div>

        {/* Form Controls (Bottom in Mobile: order-2, Left in Desktop: lg:order-1 lg:col-span-6) */}
        <div className="order-2 space-y-5 lg:order-1 lg:col-span-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Customize Standee Details</h4>
            
            {/* Business Name */}
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Business / Factory Name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Mahavir Industrial Corporation"
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            {/* Review URL */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Google Review Link (or Place URL)
                </label>
                <a
                  href="#how-to-find-link"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#FE5905] hover:underline"
                >
                  <HelpCircle className="h-3 w-3" /> Where to find?
                </a>
              </div>
              <input
                type="url"
                value={reviewUrl}
                onChange={(e) => setReviewUrl(e.target.value)}
                placeholder="https://g.page/r/your-id/review"
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            {/* Tagline */}
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Call To Action Headline
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Scan to leave us a 5-Star Review on Google!"
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            {/* Theme Selectors */}
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Select Standee Theme
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { id: "google", name: "Google Classic", bg: "bg-white border-slate-300 text-slate-800" },
                  { id: "orange", name: "Royal Blue", bg: "bg-orange-600 border-orange-600 text-white" },
                  { id: "dark", name: "Modern Dark", bg: "bg-slate-900 border-slate-900 text-white" },
                  { id: "minimal", name: "Clean Minimal", bg: "bg-slate-100 border-slate-300 text-slate-700" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTheme(t.id as any)}
                    className={`flex items-center justify-center rounded-xl border px-2.5 py-2 text-xs font-bold transition-all ${t.bg} ${
                      theme === t.id ? "ring-2 ring-[#FE5905] ring-offset-2 scale-[1.02] shadow-sm" : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Help Accordion */}
          <div id="how-to-find-link" className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4 sm:p-5 text-xs text-slate-700">
            <p className="font-bold text-orange-900 flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-orange-600 shrink-0" />
              How to get your official Google Review Link in 3 steps:
            </p>
            <ol className="mt-2.5 list-decimal space-y-1 pl-4 text-slate-600">
              <li>Open Google and search for your business name (logged into your Google Business account).</li>
              <li>Click on the <strong>"Ask for reviews"</strong> button in your dashboard.</li>
              <li>Copy the short link (<code className="bg-orange-100/70 px-1 py-0.5 rounded text-orange-900 font-mono text-[11px]">https://g.page/r/.../review</code>) and paste it above!</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}

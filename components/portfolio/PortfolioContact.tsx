"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

export function PortfolioContact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-bold tracking-widest text-[#FE5905] uppercase">
            Get in touch
          </p>
          <h2 className={`mt-3 text-3xl font-extrabold tracking-tight text-[#001A55] sm:text-4xl lg:text-5xl ${montserrat.className}`}>
            Contact Enquiry <span className="text-[#FE5905]">Bazaar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
            Whether you're planning your new digital presence or ready to scale, our team is here to help. Contact us today to reserve your strategy session.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">

          {/* Left Column - Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1: Visit Us */}
            <div className="flex gap-5 bg-[#FDFCF8] p-6 rounded-sm border border-slate-200/80 transition-shadow hover:shadow-sm">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#FE5905]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className={`text-[17px] font-bold text-slate-900 ${montserrat.className}`}>Visit Our Office</h4>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                  Sector 30A, Vashi, Navi Mumbai, Maharashtra 400705
                </p>
                <div className="mt-3">
                  <a href="https://maps.app.goo.gl/nVbxmChF7GNnPczm8" target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold text-[#FE5905] uppercase tracking-wider hover:underline">Get Directions &rarr;</a>
                </div>
              </div>
            </div>

            {/* Card 2: Call or WhatsApp Us */}
            <div className="flex gap-5 bg-[#FDFCF8] p-6 rounded-sm border border-slate-200/80 transition-shadow hover:shadow-sm">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#FE5905]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className={`text-[17px] font-bold text-slate-900 ${montserrat.className}`}>Call or WhatsApp Us</h4>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                  Have a question or want to book your strategy call? Our team is ready to help.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-[14px] font-medium text-slate-800">
                  <span>Phone: +91 6387375032 , 96967 17305</span>
                  <span>Email: hello@enquirybazaar.in</span>
                </div>
              </div>
            </div>

            {/* Card 3: Operating Hours */}
            <div className="flex gap-5 bg-[#FDFCF8] p-6 rounded-sm border border-slate-200/80 transition-shadow hover:shadow-sm">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#FE5905]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className={`text-[17px] font-bold text-slate-900 ${montserrat.className}`}>Operating Hours</h4>
                <div className="mt-2 text-[14px] font-medium text-slate-600">
                  Monday – Saturday: 10:00 AM – 7:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="bg-[#FDFCF8] border border-slate-200/80 relative shadow-sm rounded-sm">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-[#FE5905]" />

            <div className="p-8 sm:p-10">
              <h3 className={`text-2xl font-extrabold text-slate-900 ${montserrat.className}`}>
                Book Your Strategy Call
              </h3>
              <p className="mt-2 text-[14px] text-slate-600">
                Complete the form below, and we'll confirm your booking on WhatsApp as soon as possible.
              </p>

              <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/918887048276?text=Hi Enquiry Bazaar, I submitted the strategy call form.`, '_blank'); }}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full border-b border-slate-200 bg-transparent px-2 py-3 text-[14px] transition-colors focus:border-[#FE5905] focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">Choose a Service</label>
                    <select
                      required
                      className="w-full border-b border-slate-200 bg-transparent px-2 py-3 text-[14px] text-slate-700 transition-colors focus:border-[#FE5905] focus:outline-none appearance-none"
                    >
                      <option value="">Select your preferred service</option>
                      <option value="Complete Setup">Complete Digital Setup</option>
                      <option value="SEO">Google & Maps SEO</option>
                      <option value="B2B Leads">B2B Lead Generation</option>
                      <option value="E-commerce">E-commerce Setup</option>
                      <option value="Ads">Google & Meta Ads</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full border-b border-slate-200 bg-transparent px-2 py-3 text-[14px] text-slate-700 transition-colors focus:border-[#FE5905] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">Business Details (Optional)</label>
                  <textarea
                    placeholder="Share any preferences or additional details for your appointment."
                    rows={3}
                    className="w-full border-b border-slate-200 bg-transparent px-2 py-3 text-[14px] transition-colors focus:border-[#FE5905] focus:outline-none resize-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 flex justify-center items-center gap-2 uppercase tracking-wide rounded-sm"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

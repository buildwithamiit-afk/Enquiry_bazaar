"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, Globe2, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const projects = [
  {
    domain: "chahfoundation.com",
    url: "https://chahfoundation.com/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774083/portfolio_10_qlb1fh.png",
  },
  {
    domain: "astrologerinnavimumbai.in",
    url: "https://astrologerinnavimumbai.in/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774082/portfolio_3_vmbnqx.png",
  },
  {
    domain: "rajahomedecor.com",
    url: "https://rajahomedecor.com/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774081/portfolio_9_idcpvb.png",
  },
  {
    domain: "mytownmap.com",
    url: "http://mytownmap.com/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774081/portfolio_7_z7sdpo.png",
  },
  {
    domain: "vastradaanfoundation.com",
    url: "https://www.vastradaanfoundation.com/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774081/portfolio_8_bzzzpf.png",
  },
  {
    domain: "upgradeinfotech.com",
    url: "https://upgradeinfotech.com/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774081/portfolio_6_taq9px.png",
  },
  {
    domain: "dishaonlinesolution.in",
    url: "https://dishaonlinesolution.in/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774080/portfolio_5_cmxfmg.png",
  },
  {
    domain: "guruskripaastrologer.co.in",
    url: "https://guruskripaastrologer.co.in/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774080/portfolio_1_dbl4yg.png",
  },
  {
    domain: "gurukripajyotishkendra.in",
    url: "https://gurukripajyotishkendra.in/",
    image: "https://res.cloudinary.com/dxcakk4vq/image/upload/v1788774080/portfolio_4_h9myuy.png",
  }
];

export function PortfolioClient() {
  const whatsappMessage = encodeURIComponent(
    "Hi Amit, I saw your portfolio websites and would like to build something similar for my business.",
  );

  return (
    <section className="bg-slate-50 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Text */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Recent Work
          </h2>
          <p className="text-lg text-slate-600">
            Explore some of the high-converting websites and digital experiences we've crafted for our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Browser top bar */}
              <div className="flex h-11 items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>
                <div className="ml-3 flex flex-1 items-center rounded-md border border-slate-200/60 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm">
                  <Globe2 className="mr-2 h-3.5 w-3.5 text-[#FE5905]" />
                  <span className="truncate">{project.domain}</span>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.domain} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/10" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 py-4">
                <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-[#001A55]">
                  View Live Project
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors duration-300 group-hover:bg-[#001A55] group-hover:text-white">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Explore More Pill */}
        <div className="mt-16 flex justify-center">
          <a
            href={`https://wa.me/919696717305?text=${encodeURIComponent("Hii Enquiry bazaar, I want to see more portfolio examples for my industry.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#001A55]/30 hover:shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#001A55] group-hover:text-white transition-colors">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="text-[15px] font-bold text-slate-800">
              Want to see examples for your industry?
            </span>
            <span className="text-[14px] font-bold text-[#FE5905]">
              Ask on WhatsApp &rarr;
            </span>
          </a>
        </div>

        {/* Call to Action - Minimalist Reference Design */}
        <div className="mx-auto mt-16 w-full bg-[#FDFCF8] px-6 py-8 text-center sm:px-10 sm:py-12 border border-slate-100 shadow-sm">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Your Business Shouldn’t Be Easy to Ignore.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
              Your customers are online. Make sure they find you, trust you and contact you.<br className="hidden sm:block" />
              Website, Google, e-commerce or B2B leads we handle the digital side of your business.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/918887048276?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FE5905] px-8 py-3 text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#ff6f26]"
              >
                Discuss Your Business
              </a>
              <a
                href="tel:+919696717305"
                className="inline-flex items-center justify-center border border-slate-300 bg-transparent px-8 py-3 text-[13px] font-bold tracking-wider text-slate-700 uppercase transition-colors hover:border-[#FE5905] hover:text-[#FE5905]"
              >
                Call Us Directly
              </a>
            </div>

            <p className="mt-5 text-[12px] font-medium text-slate-400">
              Free consultation • No hidden charges • Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

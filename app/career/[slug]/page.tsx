/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const positions = [
  { slug: "head-of-design", title: "Head of Design" },
  { slug: "senior-frontend-developer", title: "Senior Frontend Developer" },
  { slug: "ios-developer", title: "iOS Developer" },
  { slug: "interaction-designer", title: "Interaction Designer" },
  { slug: "backend-developer", title: "Backend Developer" },
  { slug: "ui-ux-designer", title: "UI/UX Designer" },
];

export function generateStaticParams() {
  return positions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const position = positions.find((job) => job.slug === slug);
  return { title: position ? `${position.title} - Careers - FinanceLab X` : "Position not found" };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const position = positions.find((job) => job.slug === slug);
  if (!position) notFound();
  const relatedPositions = positions.filter((job) => job.slug !== slug).slice(0, 2);

  return (
    <main className="bg-white font-[Manrope,Arial,sans-serif] text-lg leading-[1.8] text-[#4a5568]">
      <section className="mx-auto max-w-[1270px] px-6 pt-[100px] pb-[160px] max-md:py-16">
        <Link href="/career#Careers" className="mb-10 inline-flex items-center gap-2 text-base font-bold text-[#16285f] transition hover:text-[#111827]">
          <span aria-hidden="true">←</span> All open positions
        </Link>
        <div className="grid grid-cols-[minmax(0,650px)_minmax(0,445px)] items-start justify-between gap-16 max-[991px]:grid-cols-1 max-[991px]:gap-12">
          <article>
            <h1 className="mb-6 text-[54px] font-extrabold leading-[1.2] text-[#111827] max-sm:text-[38px]">{position.title}</h1>
            <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3">
              <span className="flex items-center gap-2">
                <img src="/career/60dbead936e9bc388617b6c5_pin-icon-webflow-template-finance-x.svg" alt="" className="size-6" />
                San Francisco
              </span>
              <span className="flex items-center gap-2">
                <img src="/career/60dbead8f030d1032ca04bf8_close-icon-webflow-template-finance-x.svg" alt="" className="size-6" />
                Full Time
              </span>
            </div>
            <p className="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <h2 className="mb-6 text-[36px] font-bold leading-[1.3] text-[#111827] max-sm:text-[30px]">Job responsibilities</h2>
            <p className="mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ut congue varius congue aliquet leo. Netus neque nibh semper in diam viverra nibh aliquam elit. Amet orci et dolor, faucibus a leo malesuada ullamcorper. Amet pellentesque velit felis mollis turpis pellentesque donec. Cursus consectetur mattis molestie nibh no.</p>
            <h3 className="mb-5 text-[28px] font-bold leading-[1.4] text-[#111827]">Job requirements</h3>
            <p className="mb-6">Netus neque nibh semper in diam viverra nibh aliquam elit. Amet orci et dolor, faucibus a leo malesuada ullamcorper.</p>
            <ul className="mb-6 list-disc space-y-3 pl-6 marker:text-[#16285f]">
              <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>Faucibus a pellentesque sit amet porttitor eget dolor.</li>
              <li>Sapien pellentesque habitant morbi</li>
            </ul>
            <p className="mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
          <aside aria-label="Apply for this position" className="sticky top-8 rounded-[24px] border border-[#e5e7eb] bg-white px-10 py-12 shadow-[0_14px_42px_#1118270f] max-[991px]:static max-sm:px-7">
            <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-8 size-[86px] rounded-[20px] bg-[#e6f0fb] p-3 text-[#0057b8]"><rect x="17" y="12" width="30" height="40" rx="5"/><path d="M25 12v-3h14v3M25 31l5 5 10-12M25 44h14"/></svg>
            <h2 className="mb-4 text-[28px] font-bold leading-[1.3] text-[#111827]">Apply today</h2>
            <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing.</p>
            <ul className="mb-9 space-y-4">
              <li className="flex items-center gap-3"><img src="/career/check.svg" alt="" className="size-6" />Remote</li>
              <li className="flex items-center gap-3"><img src="/career/check.svg" alt="" className="size-6" />Flexible schedule</li>
              <li className="flex items-center gap-3"><img src="/career/check.svg" alt="" className="size-6" />Unlimited PTO</li>
            </ul>
            <a href={`mailto:apply@financex.com?subject=${encodeURIComponent(`Application for ${position.title}`)}`} className="block rounded-[14px] bg-linear-to-b from-[#16285f] to-[#0b1028] px-8 py-6 text-center font-bold leading-[1.2] text-white transition hover:-translate-y-1 hover:bg-[#0b1028]">Apply now</a>
          </aside>
        </div>
      </section>
      <section className="bg-[#f5f8fc] py-[120px] max-md:py-16">
        <div className="mx-auto max-w-[1270px] px-6">
          <div className="mb-14 flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <h2 className="text-[40px] font-extrabold leading-[1.3] text-[#111827] max-sm:text-[32px]">More open positions</h2>
            <Link href="/career#Careers" className="rounded-[14px] border border-[#e5e7eb] bg-white px-9 py-5 font-bold text-[#111827] transition hover:-translate-y-1 hover:border-[#16285f] hover:text-[#16285f]">Browse all</Link>
          </div>
          <div className="grid grid-cols-2 gap-10 max-[991px]:grid-cols-1">
            {relatedPositions.map((job) => (
              <Link key={job.slug} href={`/career/${job.slug}`} className="group rounded-[24px] border border-[#e5e7eb] bg-white px-[30px] pt-[45px] pb-[56px] shadow-[0_14px_42px_#1118270f] transition hover:-translate-y-1 hover:border-[#16285f] max-sm:p-6">
                <div className="mb-6 flex items-start justify-between gap-4 max-sm:flex-col">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold leading-[1.4] text-[#111827] group-hover:text-[#16285f]">{job.title}</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      <span className="flex items-center gap-2"><img src="/career/60dbead936e9bc388617b6c5_pin-icon-webflow-template-finance-x.svg" alt="" className="size-[22px]" />San Francisco</span>
                      <span className="flex items-center gap-2"><img src="/career/60dbead8f030d1032ca04bf8_close-icon-webflow-template-finance-x.svg" alt="" className="size-[22px]" />Full Time</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-[10px] bg-[#e6f0fb] px-[14px] py-[10px] text-base font-bold text-[#16285f] group-hover:bg-[#16285f] group-hover:text-white">Apply now</span>
                </div>
                <p className="border-t border-[#e5e7eb] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

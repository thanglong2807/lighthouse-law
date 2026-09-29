"use client";

import { Link } from "@/i18n/navigation";
import { Phone, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[450] md:hidden px-4 pb-4">
      <div className="mx-auto max-w-md rounded-[20px] border border-border bg-charcoal/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.22)] p-3">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-charcoal"
          >
            <Phone className="h-4 w-4" />
            Gọi ngay
          </a>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/35 bg-white/5 px-4 py-3 text-sm font-semibold text-[#F0EDE6]"
          >
            <CalendarDays className="h-4 w-4" />
            Đặt lịch
          </Link>
        </div>
      </div>
    </div>
  );
}

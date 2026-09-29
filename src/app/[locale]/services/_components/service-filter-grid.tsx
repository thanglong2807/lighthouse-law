"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface ServiceEntry {
  urlSlug: string;
  contentSlug: string;
  audiences: string[];
  index: number;
}

interface ServiceFilterGridProps {
  services: ServiceEntry[];
}

const FILTER_KEYS = [
  "all",
  "individuals",
  "businesses",
  "investors",
  "disputes",
  "compliance",
] as const;

type FilterKey = (typeof FILTER_KEYS)[number];

/**
 * Maps each filter category to the audience tags it matches.
 * A service passes the filter if any of its audience tags appear in this list.
 * "disputes" and "compliance" use content slug matching instead.
 */
const AUDIENCE_FILTER: Record<string, string[]> = {
  individuals: ["individuals", "families", "expatriates", "defendants", "victims", "employees"],
  businesses: ["businesses", "startups", "shareholders", "board-members", "HR-professionals", "enterprises", "unions"],
  investors: ["investors", "foreign-investors", "developers"],
};

const DISPUTE_SLUGS = new Set([
  "civil-law",
  "criminal-law",
  "family-marriage",
  "dispute-resolution",
]);

const COMPLIANCE_SLUGS = new Set([
  "corporate-law",
  "labor-law",
  "tax-law",
  "contract-drafting-review",
]);

function matchesFilter(service: ServiceEntry, filter: FilterKey): boolean {
  if (filter === "all") return true;

  if (filter === "disputes") {
    return DISPUTE_SLUGS.has(service.contentSlug);
  }

  if (filter === "compliance") {
    return COMPLIANCE_SLUGS.has(service.contentSlug);
  }

  const tags = AUDIENCE_FILTER[filter];
  if (!tags) return true;
  return service.audiences.some((a) => tags.includes(a));
}

export function ServiceFilterGrid({ services }: ServiceFilterGridProps) {
  const t = useTranslations("services");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = services.filter((s) => matchesFilter(s, activeFilter));

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === key
                ? "bg-gold text-charcoal shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                : "bg-surface border border-border text-text-secondary hover:border-gold/30 hover:text-gold-dark"
            }`}
          >
            {t(`filterLabels.${key}`)}
          </button>
        ))}
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service) => (
          <Link
            key={service.urlSlug}
            href={`/services/${service.urlSlug}`}
            className="group relative p-6 bg-surface rounded-[var(--radius-md)] border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
          >
            {/* Number */}
            <span className="text-xs font-mono text-text-tertiary mb-4 block tracking-[0.12em]">
              {String(service.index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h3 className="mb-2 text-[1.05rem] font-semibold leading-snug tracking-normal text-text-primary font-sans group-hover:text-gold-dark transition-colors">
              {t(`items.${service.urlSlug}.title`)}
            </h3>

            {/* Short description */}
            <p className="text-sm leading-6 text-text-secondary mb-4 line-clamp-2 font-sans">
              {t(`items.${service.urlSlug}.short`)}
            </p>

            {/* Arrow link */}
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark group-hover:text-gold transition-colors">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

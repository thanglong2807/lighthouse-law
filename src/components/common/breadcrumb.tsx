import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center gap-1.5 text-xs text-white/40">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden />
              )}
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-gold-light transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/60" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(schemaItems)),
        }}
      />
    </>
  );
}

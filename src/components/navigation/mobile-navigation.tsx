"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { siteConfig } from "@/config/site";

interface MobileNavItem {
  key: string;
  href: string;
  label: string;
  hasMegaMenu?: boolean;
}

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  navItems: MobileNavItem[];
}

export function MobileNavigation({
  open,
  onClose,
  navItems,
}: MobileNavigationProps) {
  const tCommon = useTranslations("common");
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[calc(var(--z-overlay)+1)] w-[85vw] max-w-[380px] bg-charcoal lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-gold/10">
              <span className="font-heading text-gold-light text-lg font-semibold tracking-wide">
                Menu
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-gold-light hover:border-gold/30 transition-colors"
                aria-label={tCommon("buttons.close")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto py-4 px-6">
              <ul className="space-y-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between py-3.5 px-4 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                          isActive
                            ? "text-gold-light bg-gold/8"
                            : "text-white/75 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={onClose}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-gold/10 p-6 space-y-5">
              {/* Language */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Ngôn ngữ
                </span>
                <LanguageSwitcher />
              </div>

              {/* CTA */}
              <Button
                variant="primary"
                size="lg"
                href="/consultation"
                onClick={onClose}
                className="w-full justify-center"
              >
                {tCommon("buttons.bookConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Contact Info */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-light transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-light transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-white/40">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

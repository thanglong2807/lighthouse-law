"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[var(--z-overlay)] bg-charcoal/[0.98] backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 pt-[72px]">
            {navItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={item.href}
                  className="font-heading text-2xl text-white/70 hover:text-gold-light transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.15 }}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <LanguageSwitcher />
              <Button
                variant="primary"
                size="lg"
                href="/consultation"
                onClick={onClose}
              >
                {tCommon("buttons.bookConsultation")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, ChevronUp } from "lucide-react";
import { siteConfig } from "@/config/site";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm8.14 28.27c-.05.09-.43.74-1.51 1.25-1.06.49-2.44.58-2.44.58s-.63.08-1.4-.14a7.3 7.3 0 0 1-1.93-.94c-1.93-1.24-3.54-3.07-4.82-5.03a15.2 15.2 0 0 1-1.7-3.2c-.45-1.2-.65-2.22-.65-2.22s-.09-.56.08-.85c.16-.28.52-.33.52-.33h1.73s.36.05.53.23c.14.15.24.42.24.42s.44 1.07.97 1.98c.97 1.65 1.4 2.04 1.68 1.9.41-.2.28-2.58.28-2.58s.01-.83-.26-1.2c-.21-.29-.61-.37-.79-.4-.14-.02.09-.36.4-.51.47-.24 1.29-.26 2.27-.25.76.01 .98.05.98.05s1.13.23.74 1.97c-.26 1.18-.4 1.93-.4 1.93s.17.61.8.28c.28-.15.97-.75 1.82-1.76.46-.55.83-1.1 1.08-1.56.06-.11.14-.21.14-.21s.1-.15.28-.22a.72.72 0 0 1 .33-.04h1.96s1.1-.13.64.77z" />
      <path d="M17.3 17.04h6.55c.15 0 .27.08.27.18v.94c0 .1-.12.18-.27.18h-2.12v6.2c0 .15-.12.27-.27.27h-1.13a.27.27 0 0 1-.27-.27v-6.2H17.3c-.15 0-.27-.08-.27-.18v-.94c0-.1.12-.18.27-.18z" />
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.18.16.15.26.36.27.58l.05 1.82c.02.56.6.93 1.11.7l2.04-.8c.17-.07.36-.09.54-.05.94.26 1.94.4 2.98.4 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm5.95 7.56-2.9 4.6c-.46.73-1.43.92-2.11.4l-2.31-1.73a.6.6 0 0 0-.72 0l-3.12 2.37c-.42.31-.96-.18-.69-.63l2.9-4.6c.46-.73 1.43-.92 2.11-.4l2.31 1.73a.6.6 0 0 0 .72 0l3.12-2.37c.42-.31.96.18.69.63z" />
    </svg>
  );
}

const contactMethods = [
  {
    name: "Hotline",
    icon: Phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    bg: "#3D8B35",
    bgHover: "#347A2D",
  },
  {
    name: "Messenger",
    IconComponent: MessengerIcon,
    href: "https://m.me/lighthouselaw.vn",
    bg: "#0084FF",
    bgHover: "#006BCC",
  },
  {
    name: "Zalo",
    IconComponent: ZaloIcon,
    href: "https://zalo.me/0123456789",
    bg: "#0068FF",
    bgHover: "#0055D4",
  },
];

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-border bg-surface text-text-secondary shadow-md hover:text-gold hover:border-gold/40 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-end gap-2.5"
          >
            {contactMethods.map((method, index) => {
              const IconEl = method.IconComponent ?? method.icon;
              return (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={method.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 12, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.85 }}
                  transition={{
                    duration: 0.2,
                    delay: (contactMethods.length - 1 - index) * 0.04,
                  }}
                  className="group flex items-center gap-2"
                >
                  <span
                    className="px-3 py-1.5 rounded-md text-xs font-medium tracking-wide text-white shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
                    style={{ backgroundColor: "rgba(0,17,45,0.9)" }}
                  >
                    {method.name}
                  </span>
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110"
                    style={{ backgroundColor: method.bg }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = method.bgHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = method.bg)}
                  >
                    {IconEl === Phone ? <Phone className="w-5 h-5" /> : <IconEl className="w-6 h-6" />}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.25)",
              animationDuration: "2.5s",
            }}
          />
        )}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-charcoal shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
          style={{
            background: isOpen
              ? "#00112D"
              : "linear-gradient(135deg, #F6D47A 0%, #D4AF37 50%, #B8963F 100%)",
          }}
          aria-label={isOpen ? "Close contact menu" : "Contact us"}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6 text-gold" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

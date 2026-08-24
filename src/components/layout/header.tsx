"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { slug: "tu-van-phap-ly", icon: "FileText" },
  { slug: "so-huu-tri-tue", icon: "Lightbulb" },
  { slug: "dau-tu-kinh-doanh", icon: "TrendingUp" },
  { slug: "luat-doanh-nghiep", icon: "Building2" },
  { slug: "luat-bat-dong-san", icon: "Home" },
  { slug: "luat-dan-su", icon: "Users" },
  { slug: "luat-hinh-su", icon: "Shield" },
  { slug: "luat-hon-nhan-gia-dinh", icon: "Heart" },
  { slug: "luat-lao-dong", icon: "Briefcase" },
  { slug: "luat-thue", icon: "Calculator" },
  { slug: "soan-thao-hop-dong", icon: "FileCheck" },
  { slug: "giai-quyet-tranh-chap", icon: "Scale" },
];

interface NavItem {
  key: string;
  href: string;
  hasMegaMenu?: boolean;
}

const navItems: NavItem[] = [
  { key: "company", href: "/company" },
  { key: "services", href: "/services", hasMegaMenu: true },
  { key: "team", href: "/team" },
  { key: "offices", href: "/offices" },
  { key: "insights", href: "/insights" },
  { key: "forClients", href: "/for-clients" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const tServices = useTranslations("services");
  const tCommon = useTranslations("common");
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
        setMobileOpen(false);
      }
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/[0.97] backdrop-blur-xl shadow-[var(--shadow-header)]"
            : "bg-charcoal/95 backdrop-blur-md"
        } border-b border-gold/[0.15]`}
        role="banner"
        onKeyDown={handleKeyDown}
      >
        <Container>
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              aria-label="Lighthouse Law - Home"
            >
              <LighthouseLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-3"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.hasMegaMenu ? (
                    <button
                      className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-gold-light"
                          : "text-white/70 hover:text-gold-light"
                      }`}
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                    >
                      {t(item.key)}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          megaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-[13px] font-medium transition-colors relative ${
                        pathname === item.href
                          ? "text-gold-light"
                          : "text-white/70 hover:text-gold-light"
                      }`}
                    >
                      {t(item.key)}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/search"
                className="hidden md:flex items-center justify-center w-10 h-10 text-white/50 hover:text-gold-light transition-colors"
                aria-label={tCommon("buttons.search")}
              >
                <Search className="w-[18px] h-[18px]" />
              </Link>

              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              <Button
                variant="outline"
                size="sm"
                href="/consultation"
                className="hidden md:inline-flex"
              >
                {tCommon("buttons.bookConsultation")}
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-11 h-11 shrink-0 text-gold-light"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? tCommon("buttons.close") : tCommon("aria.openMenu")}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-charcoal-mid border-t border-gold/10 shadow-2xl"
              role="menu"
            >
              <Container>
                <div className="py-8 grid grid-cols-4 gap-6">
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="group flex flex-col gap-1 p-3 rounded-[var(--radius-md)] hover:bg-white/5 transition-colors"
                        role="menuitem"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <span className="text-sm font-medium text-white/80 group-hover:text-gold-light transition-colors">
                          {tServices(`items.${svc.slug}.title`)}
                        </span>
                        <span className="text-xs text-white/40 line-clamp-1">
                          {tServices(`items.${svc.slug}.short`)}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between p-6 bg-white/[0.03] rounded-[var(--radius-lg)] border border-gold/10">
                    <div>
                      <p className="text-sm text-white/60 mb-3">
                        {tServices("notSure")}
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/consultation"
                      className="mt-4"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      {tServices("speakWithLawyer")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems.map((item) => ({
          ...item,
          label: t(item.key),
        }))}
      />
    </>
  );
}

function LighthouseLogo() {
  return (
    <Image
      src="/LOGO.png"
      alt="Lighthouse Law"
      width={475}
      height={53}
      priority
      className="shrink-0"
      style={{ width: "auto", height: 28 }}
    />
  );
}

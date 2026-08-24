"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
};

export function HeroSection() {
  const t = useTranslations("hero");

  const headingParts = t("heading").split("\n");

  return (
    <section className="relative bg-charcoal min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.7) 50%, rgba(26,26,26,0.4) 100%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32 lg:py-0">
          {/* Left: Content */}
          <div>
            <motion.p
              className="overline text-gold mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {t("eyebrow")}
            </motion.p>

            <motion.h1
              className="display-xl text-[#F0EDE6] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              {headingParts.map((part, i) => (
                <span key={i}>
                  {i === 0 ? (
                    part
                  ) : (
                    <>
                      <br />
                      <em className="text-gold-metallic not-italic">{part}</em>
                    </>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="body-lg text-white/60 max-w-lg mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              {t("description")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="/consultation">
                  {t("primaryCta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">{t("secondaryCta")}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
          >
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero/consultation.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(26,26,26,0.4) 0%, transparent 40%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


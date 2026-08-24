import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections";
import { lawyers, getLawyerBySlug } from "@/content/lawyers";
import { getPersonSchema } from "@/lib/schema";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  GraduationCap,
  Briefcase,
  Scale,
  ArrowLeft,
} from "lucide-react";

interface LawyerPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return lawyers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: LawyerPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const lawyer = getLawyerBySlug(slug);

  if (!lawyer) return {};

  const name = lawyer.name[locale as "vi" | "en"];
  const position = lawyer.position[locale as "vi" | "en"];

  return {
    title: `${name} - ${position}`,
    description:
      locale === "vi"
        ? `${name}, ${position} tại Lighthouse Law. Chuyên về ${lawyer.practiceAreas.vi.join(", ")}.`
        : `${name}, ${position} at Lighthouse Law. Specializing in ${lawyer.practiceAreas.en.join(", ")}.`,
    alternates: {
      canonical: `/${locale}/team/${slug}`,
      languages: {
        vi: `/vi/team/${slug}`,
        en: `/en/team/${slug}`,
      },
    },
  };
}

export default async function LawyerPage({ params }: LawyerPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const lawyer = getLawyerBySlug(slug);
  if (!lawyer) notFound();

  return (
    <>
      <LawyerPageContent slug={slug} />
      <CTASection />
    </>
  );
}

function LawyerPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as "vi" | "en";
  const lawyer = getLawyerBySlug(slug);
  if (!lawyer) return null;

  const name = lawyer.name[locale];
  const position = lawyer.position[locale];

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Đội ngũ" : "Our Team", href: "/team" },
    { label: name },
  ];

  const personSchema = getPersonSchema({
    name,
    position,
    email: lawyer.email,
    phone: lawyer.phone,
    slug: lawyer.slug,
    practiceAreas: lawyer.practiceAreas[locale],
    languages: lawyer.languages,
  });

  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-charcoal-light rounded-[var(--radius-md)] border border-white/10 relative overflow-hidden mb-6">
                <Image
                  src={lawyer.image}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="hover:text-gold transition-colors"
                  >
                    {lawyer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  <a
                    href={`tel:${lawyer.phone.replace(/\s/g, "")}`}
                    className="hover:text-gold transition-colors"
                  >
                    {lawyer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  {lawyer.office}
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Globe className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  {lawyer.languages.join(", ")}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="overline text-gold mb-3">{position}</p>
              <h1 className="display-lg text-[#F0EDE6] mb-6">{name}</h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {lawyer.practiceAreas[locale].map((area) => (
                  <span
                    key={area}
                    className="text-sm px-3 py-1 rounded-full border border-gold/20 text-gold"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="body-lg text-white/60 leading-relaxed">
                {lawyer.biography[locale]}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-gold" />
                <h2 className="heading-3 text-text-primary">
                  {locale === "vi" ? "Học vấn" : "Education"}
                </h2>
              </div>
              <div className="space-y-4">
                {lawyer.education.map((edu, i) => (
                  <div
                    key={i}
                    className="pl-4 border-l-2 border-gold/20"
                  >
                    <p className="body-md text-text-primary font-medium">
                      {edu.degree[locale]}
                    </p>
                    {(edu.institution || edu.year) && (
                      <p className="text-sm text-text-secondary">
                        {edu.institution}
                        {edu.year && ` (${edu.year})`}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6 mt-12">
                <Briefcase className="w-5 h-5 text-gold" />
                <h2 className="heading-3 text-text-primary">
                  {locale === "vi" ? "Thành viên" : "Memberships"}
                </h2>
              </div>
              <ul className="space-y-2">
                {lawyer.memberships[locale].map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-5 h-5 text-gold" />
                <h2 className="heading-3 text-text-primary">
                  {locale === "vi"
                    ? "Vụ việc tiêu biểu"
                    : "Representative Matters"}
                </h2>
              </div>
              <ul className="space-y-4">
                {lawyer.representativeMatters[locale].map((matter, i) => (
                  <li
                    key={i}
                    className="pl-4 border-l-2 border-gold/20 body-sm text-text-secondary leading-relaxed"
                  >
                    {matter}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Button variant="outline" size="md" asChild>
              <Link href="/team">
                <ArrowLeft className="w-4 h-4" />
                {locale === "vi"
                  ? "Quay lại đội ngũ"
                  : "Back to Team"}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
    </>
  );
}

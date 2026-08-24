import { Container } from "@/components/layout";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="overline text-gold mb-4">{eyebrow}</p>
          )}
          <h1 className="display-lg text-[#F0EDE6] mb-5">{title}</h1>
          {description && (
            <p className="body-lg text-white/55 max-w-2xl">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

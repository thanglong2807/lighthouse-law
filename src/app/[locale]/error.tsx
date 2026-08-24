"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center bg-surface">
      <Container>
        <div className="max-w-lg mx-auto text-center py-20">
          <p className="overline text-gold mb-4">Error</p>
          <h1 className="heading-1 text-text-primary mb-4">
            Đã xảy ra lỗi
          </h1>
          <p className="body-lg text-text-secondary mb-8">
            Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.
          </p>
          <Button variant="primary" size="lg" onClick={reset}>
            Thử lại
          </Button>
        </div>
      </Container>
    </section>
  );
}

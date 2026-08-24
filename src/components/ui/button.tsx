import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@/i18n/navigation";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-charcoal hover:bg-gold-light hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)]",
        outline:
          "border border-gold/40 text-gold-light bg-transparent hover:border-gold hover:bg-gold/8",
        outlineDark:
          "border border-border text-text-secondary bg-transparent hover:border-gold-pale hover:text-gold-dark",
        ghost:
          "text-gold-dark hover:text-gold hover:bg-gold/5",
        link:
          "text-gold-dark hover:text-gold underline-offset-4 hover:underline p-0 h-auto tracking-normal normal-case font-normal",
      },
      size: {
        sm: "h-9 px-4 text-[11px] rounded-[2px]",
        md: "h-11 px-6 text-[12px] rounded-[2px]",
        lg: "h-[52px] px-8 text-[13px] rounded-[2px]",
        icon: "h-10 w-10 rounded-[2px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    asChild?: boolean;
    href?: never;
  };

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonVariantProps & {
    asChild?: never;
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant, size, asChild, className, ...props }, ref) {
    const classes = buttonVariants({ variant, size, className });

    if (asChild) {
      return <Slot className={classes} ref={ref as React.Ref<HTMLElement>} {...props} />;
    }

    if ("href" in props && props.href) {
      const { href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...rest}
        />
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);

export { Button, buttonVariants };
export type { ButtonProps };

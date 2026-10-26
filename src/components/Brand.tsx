import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Brand() {
  return (
    <Link className="logo" to="/#atas" aria-label="LeebLabs Studio">
      <span className="logo__mark" aria-hidden="true">
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2v6L4.5 18a2.4 2.4 0 0 0 2.1 3.5h10.8A2.4 2.4 0 0 0 19.5 18L14 8V2" />
          <path d="M8.5 2h7" />
          <path d="M7.5 15h9" />
        </svg>
      </span>
      <span>
        LeebLabs
        <small>Studio</small>
      </span>
    </Link>
  );
}

export function HomeAnchor({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link className={className} to={{ pathname: "/", hash: href }} onClick={onClick}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-head">
      <span className="tag">{tag}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

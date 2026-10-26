import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Brand() {
  return (
    <Link className="logo" to="/#atas" aria-label="LeebLabs Studio">
      <img
        className="logo__mark"
        src="/leeblabs-icon-512.png"
        alt=""
        width="34"
        height="34"
      />
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

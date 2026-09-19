import type { SVGProps } from "react";

const defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WifiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M5 12.55a11 11 0 0 1 14 0" />
    <path d="M8.5 16.1a6 6 0 0 1 7 0" />
    <path d="M2 8.82a16 16 0 0 1 20 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

export const KitchenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M3 2v7a4 4 0 0 0 4 4v9" />
    <path d="M7 2v7" />
    <path d="M11 2v7" />
    <path d="M17 2v20" />
    <path d="M17 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3" />
  </svg>
);

export const ParkingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  </svg>
);

export const AcIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.9 4.9l2.8 2.8" />
    <path d="M16.3 16.3l2.8 2.8" />
    <path d="M4.9 19.1l2.8-2.8" />
    <path d="M16.3 7.7l2.8-2.8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const BeachIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M2 6c2 2 4 4 6 0" />
    <path d="M4 10c2 2 4 4 6 0" />
    <path d="M6 14c2 2 4 4 6 0" />
  </svg>
);

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...defaultProps}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={1}
    {...props}
  >
    <polygon points="12 2 15.09 8.63 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.63 12 2" />
  </svg>
);

interface HeartIconProps extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

export const HeartIcon = ({ filled = false, ...props }: HeartIconProps) => (
  <svg
    {...defaultProps}
    fill={filled ? "currentColor" : "none"}
    {...props}
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M7 5H4a2 2 0 0 0 0 4h3" />
    <path d="M17 5h3a2 2 0 0 1 0 4h-3" />
  </svg>
);

export const CabinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M3 10L12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
    <path d="M8 21V14h8v7" />
  </svg>
);

export const DropletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2C9 7 6 11 6 14a6 6 0 0 0 12 0c0-3-3-7-6-12z" />
  </svg>
);

export const TreeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2L6 10h3v5h-3l6 7 6-7h-3v-5h3L12 2z" />
  </svg>
);

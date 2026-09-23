const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const HomeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
  </svg>
);

export const ChartIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 20V10" />
    <path d="M12 20V4" />
    <path d="M20 20v-7" />
  </svg>
);

export const DumbbellIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 6.5 3 10l4 4 3.5-3.5" />
    <path d="M17.5 17.5 21 14l-4-4-3.5 3.5" />
    <path d="M9.5 14.5 14.5 9.5" />
  </svg>
);

export const UserIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>
);

export const GridIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="6" r="1.6" />
    <circle cx="12" cy="6" r="1.6" />
    <circle cx="18" cy="6" r="1.6" />
    <circle cx="6" cy="12" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="18" cy="12" r="1.6" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="12" cy="18" r="1.6" />
    <circle cx="18" cy="18" r="1.6" />
  </svg>
);

export const ChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

export const ChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);

export const BellIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
);

export const FootIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 3c1.8 0 2.5 1.6 2.5 3.4 0 1.4-.6 2-.6 3.4 0 1.6 1.1 2.2 2.1 3.4 1 1.2 1.5 2.6 1 4C12.4 19 10.8 20 9 20c-2.5 0-4.5-1.8-4.5-5 0-2.2.8-3 .8-5.2C5.3 6.8 5.6 3 8 3Z" />
    <circle cx="9.2" cy="5.6" r=".6" fill="currentColor" stroke="none" />
  </svg>
);

export const PlayIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 5v14l11-7Z" />
  </svg>
);

export const PauseIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="7" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

export const SlidersIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 5v14" />
    <path d="M12 5v14" />
    <path d="M19 5v14" />
    <circle cx="5" cy="9" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="15" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="19" cy="11" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

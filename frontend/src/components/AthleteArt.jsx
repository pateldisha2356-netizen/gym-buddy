// A stylised illustrated silhouette standing in for a photo.
// Keeps the card layouts faithful to the reference design without using real photos.
export default function AthleteArt({ pose = "run", tone = "#141414", className = "" }) {
  const poses = {
    run: (
      <path
        d="M96 34c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9Zm-3 20 14 4 10 18-6 30h-9l4-26-9-14-15 10-4 22h-9l5-28 20-14-1-2Zm-6 46 10 2-4 34h-9l3-36Z"
        fill={tone}
      />
    ),
    squat: (
      <path
        d="M100 30c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9ZM82 50h36l4 14-10 4-2 20h-9l1-18h-10l1 18h-9l-2-20-10-4 10-14Zm4 40 8 2 2 22h-9l-1-24Zm22 0 8 0-1 24h-9l2-24Z"
        fill={tone}
      />
    ),
    stand: (
      <path
        d="M98 28c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9Zm-14 22h28l6 34h-9l-4-24-3 24h-6l-1-18-1 18h-6l-3-24-4 24h-9l6-34Zm4 40h8l-1 26h-9l2-26Zm18 0h8l2 26h-9l-1-26Z"
        fill={tone}
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {poses[pose] || poses.stand}
    </svg>
  );
}

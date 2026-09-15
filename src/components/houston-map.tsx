import { cn } from "@/lib/utils";

type Pin = {
  id: string;
  label: string;
  x: number;
  y: number;
  primary?: boolean;
};

const pins: Pin[] = [
  { id: "conroe", label: "Conroe", x: 348, y: 42 },
  { id: "woodlands", label: "The Woodlands", x: 318, y: 108 },
  { id: "magnolia", label: "Magnolia", x: 168, y: 96 },
  { id: "tomball", label: "Tomball", x: 214, y: 158 },
  { id: "spring", label: "Spring", x: 332, y: 176 },
  { id: "cypress", label: "Cypress", x: 168, y: 228 },
  { id: "humble", label: "Humble", x: 428, y: 214 },
  { id: "houston", label: "Houston", x: 308, y: 318, primary: true },
  { id: "katy", label: "Katy", x: 118, y: 332 },
];

export function HoustonMap({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-navy-deep text-paper shadow-card",
        className,
      )}
    >
      <svg
        viewBox="0 0 560 460"
        className="h-auto w-full"
        role="img"
        aria-labelledby="houston-map-title houston-map-desc"
      >
        <title id="houston-map-title">Houston Solutions service area map</title>
        <desc id="houston-map-desc">
          Greater Houston service area covering Houston, Spring, The Woodlands,
          Cypress, Tomball, Katy, Humble, Conroe, and Magnolia.
        </desc>
        <rect width="560" height="460" fill="#08172b" />
        <path
          d="M70 210 C90 120 170 70 250 78 C320 40 390 58 430 110 C490 150 510 210 490 270 C470 340 430 390 340 410 C240 428 150 390 110 330 C70 280 55 250 70 210 Z"
          fill="#16345c"
        />
        <path
          d="M210 70 C250 30 330 18 380 48 C430 78 455 130 430 170 C400 130 340 92 280 96 C240 98 214 88 210 70 Z"
          fill="#0c2340"
          opacity="0.9"
        />
        <path
          d="M90 300 C70 290 60 320 78 350 C110 390 90 360 118 332"
          fill="none"
          stroke="#c45c26"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <path
          d="M118 332 C200 322 280 318 428 214"
          fill="none"
          stroke="#f7f4ef"
          strokeWidth="1.25"
          strokeDasharray="5 7"
          opacity="0.28"
        />
        <path
          d="M308 410 C308 350 318 220 332 176 C340 120 348 70 348 42"
          fill="none"
          stroke="#f7f4ef"
          strokeWidth="1.25"
          strokeDasharray="5 7"
          opacity="0.28"
        />
        <path
          d="M168 228 C220 250 270 290 308 318 C350 300 400 250 428 214"
          fill="none"
          stroke="#f7f4ef"
          strokeWidth="1"
          opacity="0.16"
        />
        <text
          x="28"
          y="36"
          fill="#c45c26"
          fontSize="11"
          letterSpacing="0.18em"
          fontFamily="Figtree, sans-serif"
        >
          GREATER HOUSTON
        </text>
        {pins.map((pin) => (
          <g key={pin.id}>
            {pin.primary ? (
              <circle
                cx={pin.x}
                cy={pin.y}
                r="18"
                fill="#c45c26"
                opacity="0.18"
              />
            ) : null}
            <circle
              cx={pin.x}
              cy={pin.y}
              r={pin.primary ? 7 : 4.5}
              fill={pin.primary ? "#c45c26" : "#f7f4ef"}
            />
            <text
              x={pin.x + (pin.primary ? 14 : 10)}
              y={pin.y + 4}
              fill="#f7f4ef"
              fontSize={pin.primary ? 15 : 12}
              fontWeight={pin.primary ? 600 : 500}
              fontFamily="Figtree, sans-serif"
            >
              {pin.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="border-t border-paper/10 px-5 py-3 text-sm text-paper/70">
        Houston, Spring, The Woodlands, Cypress, Tomball, Katy, Humble, Conroe,
        Magnolia, and nearby communities.
      </figcaption>
    </figure>
  );
}

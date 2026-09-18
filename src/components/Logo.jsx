import { Link } from "react-router-dom";

export default function Logo({ dark = false, compact = false }) {
  const svgClass = compact ? "h-12 w-auto" : "h-10 w-auto";
  const src = dark
    ? "/greengate-property-logo-light.svg?v=2"
    : "/greengate-property-logo.svg?v=2";

  return (
    <Link to="/" className="inline-flex items-center" aria-label="GreenGate Property home">
      <img
        src={src}
        alt="GreenGate Property logo"
        className={svgClass}
      />
      <span className="sr-only">GreenGate Property</span>
    </Link>
  );
}

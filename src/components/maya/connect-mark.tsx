type ConnectMarkVariant = "nav" | "button" | "static" | "mobile";

type ConnectMarkProps = {
  variant: ConnectMarkVariant;
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export function ConnectMark({
  variant,
  className = "",
  x,
  y,
  width,
  height,
}: ConnectMarkProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 220 66"
      data-variant={variant}
      className={`connect-mark ${className}`}
      x={x}
      y={y}
      width={width}
      height={height}
    >
      <path className="connect-mark__arc connect-mark__arc--inner" d="M41 18 Q110 0 179 18" />
      <path className="connect-mark__arc connect-mark__arc--middle" d="M28 14 Q110 -2 192 14" />
      <path className="connect-mark__arc connect-mark__arc--outer" d="M15 10 Q110 -6 205 10" />
      <path className="connect-mark__arc connect-mark__arc--inner" d="M41 45 Q110 63 179 45" />
      <path className="connect-mark__arc connect-mark__arc--middle" d="M28 49 Q110 65 192 49" />
      <path className="connect-mark__arc connect-mark__arc--outer" d="M15 53 Q110 69 205 53" />
      <text className="connect-mark__word" x="110" y="36" textAnchor="middle">
        MAYA CONNECT
      </text>
    </svg>
  );
}
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
      <path className="connect-mark__arc connect-mark__arc--inner" d="M82 22 Q110 10 138 22" />
      <path className="connect-mark__arc connect-mark__arc--middle" d="M46 13 Q110 -10 174 13" />
      <path className="connect-mark__arc connect-mark__arc--outer" d="M6 3 Q110 -30 214 3" />
      <path className="connect-mark__arc connect-mark__arc--inner" d="M82 22 Q110 10 138 22" transform="translate(0 66) scale(1 -1)" />
      <path className="connect-mark__arc connect-mark__arc--middle" d="M46 13 Q110 -10 174 13" transform="translate(0 66) scale(1 -1)" />
      <path className="connect-mark__arc connect-mark__arc--outer" d="M6 3 Q110 -30 214 3" transform="translate(0 66) scale(1 -1)" />
      <text className="connect-mark__word" x="110" y="40" textAnchor="middle">
        MAYA CONNECT
      </text>
    </svg>
  );
}
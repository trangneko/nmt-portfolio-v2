import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

interface FlowerProps {
  size?: number | string | Record<string, number>;
  color?: string;
  petals?: number;
  depth?: number; // 0 = circle, higher = deeper petals
  sx?: SxProps<Theme>;
}

// Decorative scalloped flower drawn as one SVG path (smooth, resolution independent).
export default function Flower({
  size = 48,
  color = "currentColor",
  petals = 12,
  depth = 0.14,
  sx,
}: FlowerProps) {
  const points: string[] = [];
  const steps = 240;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const r = 50 * (1 - (depth * (1 - Math.cos(petals * a))) / 2);
    points.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      sx={[{ width: size, height: size, flexShrink: 0, color }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <polygon points={points.join(" ")} fill="currentColor" />
    </Box>
  );
}

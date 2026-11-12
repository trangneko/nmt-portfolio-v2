import type { ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { useReveal, type RevealOptions } from "../hooks/useReveal";

interface RevealProps extends RevealOptions {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

// Wrapper that fades and slides its children in when scrolled into view
export default function Reveal({ children, sx, ...options }: RevealProps) {
  const { ref, sx: revealSx } = useReveal<HTMLDivElement>(options);
  return (
    <Box ref={ref} sx={[revealSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Box>
  );
}

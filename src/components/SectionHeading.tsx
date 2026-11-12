import { Box, Typography } from "@mui/material";
import Flower from "./Flower";
import Reveal from "./Reveal";
import { useReveal } from "../hooks/useReveal";
import { brand } from "../theme/theme";

interface SectionHeadingProps {
  title: string;
  statement?: string;
  // On the yellow Contact section: Jet Black text and lines, Dark Cyan flower.
  // Colors animate, so the heading fades along with the background.
  accent?: boolean;
}

// Big page title with flower mark on the left and an optional statement on the right.
// Title and statement slide up on scroll, and the divider line draws in from the left.
export default function SectionHeading({ title, statement, accent = false }: SectionHeadingProps) {
  const fade = "color .7s ease, background-color .7s ease";
  const line = useReveal<HTMLDivElement>({ direction: "none" });
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 3, md: 6 },
        alignItems: "start",
        py: { xs: 6, md: 10 },
      }}
    >
      <Reveal>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Flower size={{ xs: 48, md: 80 }} color={brand.darkCyan} />
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: "3rem", md: "5.5rem" }, color: accent ? brand.jetBlack : "text.primary", transition: fade }}
          >
            {title}
          </Typography>
        </Box>
      </Reveal>
      {statement && (
        <Reveal delay={150}>
          <Typography
            variant="h2"
            component="p"
            sx={{
              fontSize: { xs: "2rem", md: "4.25rem" },
              color: accent ? brand.jetBlack : "primary.main",
              textWrap: "balance",
              transition: fade,
            }}
          >
            {statement}
          </Typography>
        </Reveal>
      )}
      {/* Divider line draws in from the left */}
      <Box
        ref={line.ref}
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          bgcolor: accent ? brand.jetBlack : "divider",
          transformOrigin: "left",
          transform: line.shown ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 1.2s cubic-bezier(0.2, 0.7, 0.2, 1), background-color .7s ease",
        }}
      />
    </Box>
  );
}

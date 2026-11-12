import { Box, Typography } from "@mui/material";
import Flower from "./Flower";

interface SectionHeadingProps {
  title: string;
  statement?: string;
  flowerColor?: string;
  titleColor?: string;
  statementColor?: string;
  dividerColor?: string;
}

// Big page title with flower mark on the left and an optional statement on the right.
export default function SectionHeading({
  title,
  statement,
  flowerColor = "secondary.main",
  titleColor = "text.primary",
  statementColor = "primary.main",
  dividerColor = "divider",
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 3, md: 6 },
        alignItems: "start",
        py: { xs: 6, md: 10 },
        borderBottom: "2px solid",
        borderColor: dividerColor,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Flower size={{ xs: 48, md: 80 }} color={flowerColor} />
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: "3rem", md: "5.5rem" }, color: titleColor }}
        >
          {title}
        </Typography>
      </Box>
      {statement && (
        <Typography
          variant="h2"
          component="p"
          sx={{ fontSize: { xs: "2rem", md: "4.25rem" }, color: statementColor, textWrap: "balance" }}
        >
          {statement}
        </Typography>
      )}
    </Box>
  );
}

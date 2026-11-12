import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Chip, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import ProjectImage from "../components/ProjectImage";
import { localized, works, type Work } from "../data/works";
import { useLang } from "../hooks/useLang";
import type { Category } from "../types/Project";
import { useReveal } from "../hooks/useReveal";

// Corner brackets around each card, like a viewfinder
const corner = (pos: object) => ({
  position: "absolute" as const,
  width: 24,
  height: 24,
  border: "0 solid",
  borderColor: "primary.main",
  transition: "all .25s",
  ...pos,
});

// One card. Staggered cards slide in from their own side (left or right).
function WorkCard({ work, index }: { work: Work; index: number }) {
  const { t } = useTranslation();
  const text = localized(work, useLang());
  const fromRight = index % 2 === 1;
  const reveal = useReveal<HTMLAnchorElement>({ direction: fromRight ? "right" : "left", duration: 900, distance: 48 });

  return (
    // The whole card is one link to the work detail page
    <Box
      ref={reveal.ref}
      component={RouterLink}
      to={`/works/${work.slug}`}
      aria-label={t("viewWork", { title: text.title })}
      sx={[
        {
          // Stagger cards left and right on wide screens
          alignSelf: { xs: "stretch", md: fromRight ? "flex-end" : "flex-start" },
          width: { xs: "100%", md: "68%" },
          position: "relative",
          p: { xs: 2, md: 4 },
          color: "inherit",
          textDecoration: "none",
          // Brackets open up on hover or keyboard focus
          "&:hover .corner-tl, &:focus-visible .corner-tl": { top: -8, left: -8 },
          "&:hover .corner-tr, &:focus-visible .corner-tr": { top: -8, right: -8 },
          "&:hover .corner-bl, &:focus-visible .corner-bl": { bottom: -8, left: -8 },
          "&:hover .corner-br, &:focus-visible .corner-br": { bottom: -8, right: -8 },
          "&:hover .more svg": { transform: "translateX(6px)" },
          outlineOffset: 4,
        },
        reveal.sx,
      ]}
    >
      <Box className="corner-tl" sx={corner({ top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3 })} />
      <Box className="corner-tr" sx={corner({ top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3 })} />
      <Box className="corner-bl" sx={corner({ bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3 })} />
      <Box className="corner-br" sx={corner({ bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3 })} />

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 3 }}>
        <Box>
          <Typography sx={{ color: "primary.main", textAlign: "right", mb: 1 }} variant="h6">
            {work.year}
          </Typography>
          <ProjectImage src={work.image} alt="" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography variant="h4" component="h2">{text.title}</Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: 300,
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {text.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {work.skills.slice(0, 4).map((s) => (
              <Chip key={s} label={s} size="small" variant="outlined" />
            ))}
          </Box>
          <Box
            className="more"
            sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "primary.main", fontWeight: 600, "& svg": { transition: "transform .2s" } }}
          >
            {t("viewDetails")} <ArrowForwardRoundedIcon fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Filter tabs: label keys live in the locale files
const filters: { value: Category | "all"; labelKey: string }[] = [
  { value: "all", labelKey: "filterAll" },
  { value: "UI/UX", labelKey: "catUiux" },
  { value: "Web Design", labelKey: "catWeb" },
  { value: "Graphic Design", labelKey: "catGraphic" },
  { value: "Coding", labelKey: "catCoding" },
];

export default function Works() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category | "all">("all");
  const visible = active === "all" ? works : works.filter((w) => w.categories?.includes(active));

  return (
    <Container maxWidth="xl">
      <SectionHeading title={t("worksTitle")} statement={t("worksStatement")} />

      {/* Category filter with counts; only shows categories that have works */}
      <Box role="group" aria-label={t("worksTitle")} sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, pt: { xs: 5, md: 8 } }}>
        {filters.map(({ value, labelKey }) => {
          const count = value === "all" ? works.length : works.filter((w) => w.categories?.includes(value)).length;
          if (count === 0) return null;
          const selected = active === value;
          return (
            <Chip
              key={value}
              label={`${t(labelKey)} (${count})`}
              clickable
              aria-pressed={selected}
              onClick={() => setActive(value)}
              variant={selected ? "filled" : "outlined"}
              color={selected ? "primary" : "default"}
              sx={{ fontSize: "1rem", height: 40, px: 1 }}
            />
          );
        })}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 14 }, pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 12 } }}>
        {visible.length === 0 && <Typography sx={{ color: "text.secondary" }}>{t("filterEmpty")}</Typography>}
        {/* key includes the filter so cards replay their entrance animation */}
        {visible.map((p, i) => (
          <WorkCard key={`${active}-${p.slug}`} work={p} index={i} />
        ))}
      </Box>
    </Container>
  );
}

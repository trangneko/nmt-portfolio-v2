import { Link as RouterLink } from "react-router-dom";
import { Box, Chip, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SectionHeading from "../components/SectionHeading";
import ProjectImage from "../components/ProjectImage";
import { works } from "../data/works";
import { useTranslation } from "react-i18next";

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

export default function Works() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <SectionHeading title={t("worksTitle")} statement={t("worksStatement")} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 14 }, py: { xs: 6, md: 12 } }}>
        {works.map((p, i) => (
          // The whole card is one link to the work detail page
          <Box
            key={p.slug}
            component={RouterLink}
            to={`/works/${p.slug}`}
            aria-label={t("viewWork", { title: p.title })}
            sx={{
              // Stagger cards left and right on wide screens
              alignSelf: { xs: "stretch", md: i % 2 ? "flex-end" : "flex-start" },
              width: { xs: "100%", md: "62%" },
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
            }}
          >
            <Box className="corner-tl" sx={corner({ top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3 })} />
            <Box className="corner-tr" sx={corner({ top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3 })} />
            <Box className="corner-bl" sx={corner({ bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3 })} />
            <Box className="corner-br" sx={corner({ bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3 })} />

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
              <Box>
                <Typography sx={{ color: "primary.main", textAlign: "right", mb: 1 }} variant="h6">
                  {p.year}
                </Typography>
                <ProjectImage src={p.image} alt="" aspectRatio="4 / 5" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, justifyContent: "center" }}>
                <Typography variant="h4" component="h2">{p.title}</Typography>
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
                  {p.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {p.skills.slice(0, 4).map((s) => (
                    <Chip key={s} label={s} size="small" variant="outlined" />
                  ))}
                </Box>
                <Box
                  className="more"
                  sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "primary.main", fontWeight: 600,
                    "& svg": { transition: "transform .2s" } }}
                >
                  {t("viewDetails")} <ArrowForwardRoundedIcon fontSize="small" />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

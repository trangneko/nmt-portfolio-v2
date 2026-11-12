import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Button, Chip, Container, Link, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ProjectImage from "../components/ProjectImage";
import CaseStudyView from "../components/CaseStudyView";
import Reveal from "../components/Reveal";
import { findWork, localized, works } from "../data/works";
import { useLang } from "../hooks/useLang";
import { useTranslation } from "react-i18next";

// Small label above a value, used in the meta row
function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>{label}</Typography>
      <Typography sx={{ fontWeight: 600 }}>{children}</Typography>
    </Box>
  );
}

export default function WorkDetail() {
  const { t } = useTranslation();
  const lang = useLang();
  const { slug } = useParams();
  const work = findWork(slug);

  if (!work) {
    return (
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>{t("workNotFound")}</Typography>
        <Button component={RouterLink} to="/works" variant="contained" startIcon={<ArrowBackRoundedIcon />}>
          {t("backToWorks")}
        </Button>
      </Container>
    );
  }

  const text = localized(work, lang);
  const i = works.indexOf(work);
  const prev = works[(i - 1 + works.length) % works.length];
  const next = works[(i + 1) % works.length];

  return (
    <Container maxWidth="xl" sx={{ pb: 10 }}>
      <Box sx={{ pt: { xs: 4, md: 6 } }}>
        <Link
          component={RouterLink}
          to="/works"
          underline="hover"
          sx={{ color: "primary.main", display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600 }}
        >
          <ArrowBackRoundedIcon fontSize="small" /> {t("allWorks")}
        </Link>
      </Box>

      <Reveal>
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: "2.5rem", md: "5rem" }, mt: 3, mb: 5, maxWidth: 1100 }}>
          {text.title}
        </Typography>
      </Reveal>

      <Reveal delay={100} sx={{ display: "block" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 3,
          py: 3,
          borderTop: "2px solid",
          borderBottom: "2px solid",
          borderColor: "divider",
        }}
      >
        {work.year && <Meta label={t("labelYear")}>{work.year}</Meta>}
        <Meta label={t("labelPeriod")}>{text.time}</Meta>
        {text.role && <Meta label={t("labelRole")}>{text.role}</Meta>}
        {text.tags && <Meta label={t("labelCategory")}>{text.tags.join(" / ")}</Meta>}
      </Box>
      </Reveal>

      <Reveal direction="scale" duration={1000} sx={{ mt: 6, "&:empty": { display: "none" } }}>
        <ProjectImage src={work.image} alt={text.title} hideOnError />
      </Reveal>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 8 }, mt: 8 }}>
        <Reveal direction="left">
        <Typography variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}>
          {t("aboutThisWork")}
        </Typography>
        </Reveal>
        <Reveal direction="right" delay={120}>
          <Typography variant="h6" sx={{ fontWeight: 300, lineHeight: 1.6, mb: 4 }}>
            {text.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>{t("skillsAndTools")}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {work.skills.map((s) => (
              <Chip key={s} label={s} variant="outlined" />
            ))}
          </Box>
          {work.url && (
            <Button
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              endIcon={<ArrowOutwardRoundedIcon />}
            >
              {t("visitProject")}
            </Button>
          )}
        </Reveal>
      </Box>

      {/* Long-form case study (falls back to English if there is no Japanese version) */}
      {work.caseStudy && <CaseStudyView study={work.caseStudy[lang] ?? work.caseStudy.en} />}

      {work.pdf && (
        <Reveal sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main", mb: 3 }}>
            {t("caseStudy")}
          </Typography>
          <Box
            component="iframe"
            title={t("caseStudyTitle", { title: text.title })}
            src={work.pdf}
            loading="lazy"
            allowFullScreen
            sx={{ width: "100%", height: { xs: "60vh", md: "80vh" }, border: 0, borderRadius: 3, bgcolor: "background.paper" }}
          />
        </Reveal>
      )}

      <Reveal>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 3,
          mt: 10,
          pt: 4,
          borderTop: "2px solid",
          borderColor: "divider",
        }}
      >
        <Link component={RouterLink} to={`/works/${prev.slug}`} underline="none" sx={{ color: "inherit" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <ArrowBackRoundedIcon fontSize="inherit" /> {t("previous")}
          </Typography>
          <Typography variant="h5" sx={{ "&:hover": { color: "primary.main" } }}>{localized(prev, lang).title}</Typography>
        </Link>
        <Link component={RouterLink} to={`/works/${next.slug}`} underline="none" sx={{ color: "inherit", textAlign: "right" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {t("next")} <ArrowForwardRoundedIcon fontSize="inherit" />
          </Typography>
          <Typography variant="h5" sx={{ "&:hover": { color: "primary.main" } }}>{localized(next, lang).title}</Typography>
        </Link>
      </Box>
      </Reveal>
    </Container>
  );
}

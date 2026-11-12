import { Box, Chip, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import { formatPeriod, useLang } from "../hooks/useLang";
import { certificates, skills, tools } from "../data/resume";
import Reveal from "../components/Reveal";
import { useReveal } from "../hooks/useReveal";

interface Entry {
  date: string;
  title: string;
  org?: string;
  lines: string[];
}

// Two-column row: date on the left, details on the right
function Row({ entry, compact = false }: { entry: Entry; compact?: boolean }) {
  return (
    <Reveal>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 1, md: 6 },
        py: compact ? 2.5 : 4,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h6" sx={{ color: "primary.main" }}>{entry.date}</Typography>
      <Box>
        <Typography variant="h5" sx={{ mb: 0.5 }}>{entry.title}</Typography>
        {entry.org && <Typography sx={{ color: "text.secondary", mb: 1.5 }}>{entry.org}</Typography>}
        {entry.lines.map((l, i) => (
          <Typography key={i} sx={{ color: "text.secondary", fontWeight: 300, mb: 1 }}>{l}</Typography>
        ))}
      </Box>
    </Box>
    </Reveal>
  );
}

// Label on the left, chips on the right
function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <Reveal>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 1, md: 6 }, py: 4, borderBottom: "1px solid", borderColor: "divider" }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>{label}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {items.map((x) => <Chip key={x} label={x} variant="outlined" />)}
        </Box>
      </Box>
    </Reveal>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ pt: { xs: 6, md: 10 } }}>
      <Reveal>
        <Typography variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
          {title}
        </Typography>
      </Reveal>
      {children}
    </Box>
  );
}

export default function About() {
  const { t } = useTranslation();
  const lang = useLang();
  const fd = (d: string) => formatPeriod(d, lang, t("dateNow"));
  const photo = useReveal<HTMLImageElement>({ direction: "left", duration: 1000 });

  const experience: Entry[] = [
    { date: fd("9/2024 - NOW"), title: t("ttRole"), org: t("ttLocation"), lines: [1, 2, 3, 4, 5, 6].map((n) => t(`ttJobDes${n}`)) },
    { date: fd("1/2025 - 3/2025"), title: t("tensoRole"), org: t("tensoLocation"), lines: [t("tensoJobDes1"), t("tensoJobDes2")] },
    { date: fd("7/2024 - 1/2025"), title: t("gesherRole"), org: t("gesherLocation"), lines: [t("gesherJobDes1"), t("gesherJobDes2"), t("gesherJobDes3")] },
    { date: fd("5/2023 - 9/2024"), title: t("mdkRole"), org: t("mdkLocation"), lines: [t("mdkJobDes1"), t("mdkJobDes2"), t("mdkJobDes3"), t("mdkJobDes4")] },
  ];
  const education: Entry[] = [
    { date: fd("4/2021 - 3/2025"), title: t("undergrad"), lines: [t("university"), t("universityFaculty"), t("universityDepartment"), t("universitySeminar")] },
    { date: fd("10/2019 - 3/2021"), title: t("languageStudy"), lines: [t("languageSchool")] },
    { date: fd("9/2016 - 6/2019"), title: t("highSchool"), lines: [t("highSchoolName")] },
  ];
  const certs: Entry[] = certificates.map((c) => ({ date: fd(c.date), title: c.title[lang], lines: [] }));
  const languages: Entry[] = [
    { date: t("english"), title: t("langPro"), lines: [] },
    { date: t("japanese"), title: t("langPro"), lines: [] },
    { date: t("vietnamese"), title: t("langNative"), lines: [] },
  ];

  return (
    <Container maxWidth="xl">
      <SectionHeading title={t("aboutTitle")} statement={t("aboutStatement")} />

      {/* Photo on the left, bio on the right: balances the page */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          pt: { xs: 5, md: 8 },
          alignItems: "start",
        }}
      >
        <Box
          component="img"
          src="/images/about-photo.jpg"
          alt={t("aboutPhotoAlt")}
          width={900}
          height={1125}
          ref={photo.ref}
          sx={[
            {
              width: "100%",
              maxWidth: 520,
              aspectRatio: "4 / 5", // matches the 900x1125 source crop
              objectFit: "cover",
              borderRadius: 4,
              position: { md: "sticky" },
              top: { md: 120 },
            },
            photo.sx,
          ]}
        />
        <Reveal direction="right" delay={150}>
          {/* One paragraph per line of the locale text */}
          {t("description").split("\n").map((para, i) => (
            <Typography key={i} variant="h5" sx={{ fontWeight: 300, lineHeight: 1.6, mb: 2.5 }}>
              {para}
            </Typography>
          ))}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
              mt: 5,
              pt: 3,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>{t("basedIn")}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{t("basedInValue")}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>{t("focus")}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{t("focusValue")}</Typography>
            </Box>
          </Box>
        </Reveal>
      </Box>

      <Block title={t("experienceTitle")}>{experience.map((e) => <Row key={e.date + e.title} entry={e} />)}</Block>
      <Block title={t("educationTitle")}>{education.map((e) => <Row key={e.date} entry={e} />)}</Block>
      <Block title={t("certificatesTitle")}>{certs.map((e) => <Row key={e.date + e.title} entry={e} compact />)}</Block>
      <Block title={t("skillsTitle")}>
        <SkillRow label={t("toolsLabel")} items={tools} />
        <SkillRow label={t("skillsLabel")} items={skills.map((x) => x[lang])} />
      </Block>
      <Block title={t("languagesTitle")}>{languages.map((e) => <Row key={e.date} entry={e} />)}</Block>
      <Box sx={{ pb: 10 }} />
    </Container>
  );
}

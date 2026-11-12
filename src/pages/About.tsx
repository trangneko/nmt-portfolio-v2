import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import { formatPeriod, useLang } from "../hooks/useLang";

interface Entry {
  date: string;
  title: string;
  org?: string;
  lines: string[];
}

// Two-column row: date on the left, details on the right
function Row({ entry }: { entry: Entry }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 1, md: 6 },
        py: 4,
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
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ pt: { xs: 6, md: 10 } }}>
      <Typography variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function About() {
  const { t } = useTranslation();
  const lang = useLang();
  const fd = (d: string) => formatPeriod(d, lang, t("dateNow"));

  const experience: Entry[] = [
    { date: fd("9/2024 - NOW"), title: t("ttRole"), org: t("ttLocation"), lines: [t("ttJobDes1"), t("ttJobDes2")] },
    { date: fd("1/2025 - 3/2025"), title: t("tensoRole"), org: t("tensoLocation"), lines: [t("tensoJobDes1"), t("tensoJobDes2")] },
    { date: fd("7/2024 - 8/2024"), title: t("gesherRole"), org: t("gesherLocation"), lines: [t("gesherJobDes1"), t("gesherJobDes2"), t("gesherJobDes3")] },
    { date: fd("5/2023 - 7/2024"), title: t("mdkRole"), org: t("mdkLocation"), lines: [t("mdkJobDes1"), t("mdkJobDes2"), t("mdkJobDes3"), t("mdkJobDes4")] },
    { date: fd("11/2021 - 12/2021"), title: t("lyymRole"), org: t("lyymLocation"), lines: [t("lyymJobDes")] },
  ];
  const education: Entry[] = [
    { date: fd("4/2021 - 3/2025"), title: t("undergrad"), lines: [t("university"), t("universityFaculty"), t("universityDepartment")] },
    { date: fd("10/2019 - 3/2021"), title: t("languageStudy"), lines: [t("languageSchool")] },
    { date: fd("9/2016 - 5/2019"), title: t("highSchool"), lines: [t("highSchoolName")] },
  ];
  const languages: Entry[] = [
    { date: t("english"), title: t("langPro"), lines: ["TOEIC L&R 910/990 (4/2021)", "TOEIC S&W 290/400 (11/2020)"] },
    { date: t("japanese"), title: t("langPro"), lines: ["JLPT N1 (7/2024)"] },
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
          src="/images/ava.JPG"
          alt={t("aboutPhotoAlt")}
          sx={{
            width: "100%",
            maxWidth: 440, // source photo is small, avoid blurry upscaling
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 4,
            position: { md: "sticky" },
            top: { md: 120 },
          }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 300, lineHeight: 1.6, whiteSpace: "pre-line" }}>
            {t("description")}
          </Typography>
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
        </Box>
      </Box>

      <Block title={t("experienceTitle")}>{experience.map((e) => <Row key={e.date + e.title} entry={e} />)}</Block>
      <Block title={t("educationTitle")}>{education.map((e) => <Row key={e.date} entry={e} />)}</Block>
      <Block title={t("languagesTitle")}>{languages.map((e) => <Row key={e.date} entry={e} />)}</Block>
      <Box sx={{ pb: 10 }} />
    </Container>
  );
}

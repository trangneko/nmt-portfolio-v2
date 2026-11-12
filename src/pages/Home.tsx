import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Chip, Container, Link, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useTranslation } from "react-i18next";
import Flower from "../components/Flower";
import ProjectImage from "../components/ProjectImage";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { featuredWorks, localized } from "../data/works";
import { services } from "../data/services";
import { EMAIL, socialLinks } from "../data/contact";
import { brand } from "../theme/theme";
import { useLang } from "../hooks/useLang";

const featured = featuredWorks[0];

function ArrowLink({ to, label }: { to: string; label: string }) {
  return (
    <Box
      component={RouterLink}
      to={to}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        color: "primary.main",
        textDecoration: "none",
        fontWeight: 600,
        "&:hover svg": { transform: "translateX(6px)" },
        "& svg": { transition: "transform .2s" },
      }}
    >
      {label}
      <ArrowForwardRoundedIcon />
    </Box>
  );
}

// Space under each section's content before the next heading
const sectionBody = { py: { xs: 5, md: 8 } };

export default function Home() {
  const { t } = useTranslation();
  const lang = useLang();
  const featuredText = localized(featured, lang);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [contactIn, setContactIn] = useState(false);

  // Fade the Contact section from blue to yellow once its top is in the upper 65% of the screen
  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setContactIn(entry.isIntersecting), {
      rootMargin: "0px 0px -35% 0px",
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
    <Container maxWidth="xl">
      {/* Hero: flower blob with tagline + featured project */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          pt: { xs: 4, md: 6 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Reveal direction="scale" duration={1000} sx={{ position: "relative", display: "grid", placeItems: "center", minHeight: { xs: 320, md: 520 } }}>
          <Flower
            size="100%"
            color={brand.darkCyan}
            petals={10}
            depth={0.26}
            spin={0.05}
            sx={{ position: "absolute", inset: 0, maxWidth: 560, margin: "auto" }}
          />
          {/* Large white text on Dark Cyan (4.1:1) meets AA for large text */}
          <Typography
            variant="h2"
            component="h1"
            sx={{ position: "relative", fontSize: { xs: "2rem", md: "3rem" }, textAlign: "left", px: { xs: 6, md: 10 }, color: "#FFFFFF" }}
          >
            {t("hello2")}
          </Typography>
        </Reveal>

        <Reveal direction="right" delay={200}>
        <Box component={RouterLink} to={`/works/${featured.slug}`} sx={{ color: "inherit", textDecoration: "none", display: "block" }}>
          <ProjectImage src={featured.image} alt="" aspectRatio="16 / 9" />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 1, mt: 2, color: "text.secondary" }}>
            <Typography variant="body2">{t("featuredProject")}</Typography>
            <Typography variant="body2">{featured.year}</Typography>
            <Typography variant="h6" sx={{ color: "text.primary" }}>{featuredText.title}</Typography>
            <Typography variant="body2">{featuredText.tags?.[featuredText.tags.length - 1]}</Typography>
          </Box>
        </Box>
        </Reveal>
      </Box>

      {/* About teaser */}
      <SectionHeading title={t("aboutTitle")} statement={t("hello")} />
      <Box sx={{ ...sectionBody, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6 }}>
        <Box />
        <Reveal delay={150}>
          <Typography variant="h5" sx={{ fontWeight: 300, color: "text.secondary", mb: 3 }}>
            {t("helloDes")}
          </Typography>
          <ArrowLink to="/about" label={t("aboutMore")} />
        </Reveal>
      </Box>

      {/* Services: full list with tools (no separate page) */}
      <Box id="services" sx={{ scrollMarginTop: 100 }}>
        <SectionHeading title={t("servicesTitle")} statement={t("servicesStatement")} />
        <Box sx={sectionBody}>
          {services.map((s) => (
            <Box
              key={s.title.en}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 2, md: 6 },
                py: { xs: 4, md: 5 },
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Reveal direction="left">
              <Typography variant="h3" component="h3" sx={{ fontSize: { xs: "2rem", md: "3.25rem" }, color: "primary.main" }}>
                {s.title[lang]}
              </Typography>
              </Reveal>
              <Reveal direction="right" delay={120}>
                <Typography variant="h6" sx={{ fontWeight: 300, color: "text.secondary", mb: 2.5 }}>
                  {s.blurb[lang]}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                  {s.tools.map((tool) => (
                    <Chip
                      key={tool.name}
                      label={lang === "ja" && tool.nameJa ? tool.nameJa : tool.name}
                      variant="outlined"
                      avatar={
                        tool.icon ? (
                          // White tile keeps dark logos (ChatGPT) visible on Jet Black
                          <Box
                            component="img"
                            src={`/images/icons/${tool.icon}`}
                            alt=""
                            sx={{ bgcolor: "#FFFFFF", p: "3px", borderRadius: "50%" }}
                          />
                        ) : undefined
                      }
                    />
                  ))}
                </Box>
              </Reveal>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Featured works */}
      <SectionHeading title={t("worksTitle")} statement={t("worksTeaser")} />
      <Box sx={sectionBody}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 4 }}>
          {featuredWorks.map((w, i) => {
            const text = localized(w, lang);
            return (
            <Reveal key={w.slug} delay={i * 150}>
            <Box
              component={RouterLink}
              to={`/works/${w.slug}`}
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover h3": { color: "primary.main" },
                "&:hover img, &:hover [role=img]": { transform: "scale(1.02)" },
                "& img, & [role=img]": { transition: "transform .3s" },
              }}
            >
              <Box sx={{ overflow: "hidden", borderRadius: 3 }}>
                <ProjectImage src={w.image} alt="" aspectRatio="16 / 9" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2, color: "text.secondary" }}>
                <Typography variant="body2">{text.tags?.[text.tags.length - 1]}</Typography>
                <Typography variant="body2" sx={{ color: "primary.main" }}>{w.year}</Typography>
              </Box>
              <Typography variant="h5" component="h3" sx={{ mt: 0.5, transition: "color .2s" }}>{text.title}</Typography>
            </Box>
            </Reveal>
            );
          })}
        </Box>
        <Box sx={{ mt: 6 }}>
          <ArrowLink to="/works" label={t("seeAllWorks")} />
        </Box>
      </Box>
    </Container>

      {/* Contact: full-width yellow sheet. Copy comes from the EN/JA locale files. */}
      <Box
        id="contact"
        ref={contactRef}
        sx={{
          bgcolor: contactIn ? "primary.main" : "background.default",
          color: contactIn ? brand.jetBlack : "text.primary",
          borderTopLeftRadius: { xs: 32, md: 64 },
          borderTopRightRadius: { xs: 32, md: 64 },
          minHeight: "85vh",
          transition: "background-color .7s ease, color .7s ease",
        }}
      >
        <Container maxWidth="xl">
          <SectionHeading title={t("contactTitle")} statement={t("contactStatement")} accent={contactIn} />
          <Box
            sx={{
              ...sectionBody,
              pb: { xs: 10, md: 14 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 5, md: 6 },
            }}
          >
            <Reveal direction="left">
              <Typography variant="body2" sx={{ color: "inherit", opacity: 0.8, mb: 1.5 }}>
                {t("contactFindMe")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {socialLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: "inherit", fontWeight: 600, fontSize: "1.25rem" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </Box>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <Typography variant="h5" sx={{ fontWeight: 300, lineHeight: 1.7, mb: 4, color: "inherit" }}>
                {t("contactBody")}
              </Typography>
              {/* No backend, so contact is a plain email link */}
              <Button
                href={`mailto:${EMAIL}`}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: contactIn ? brand.jetBlack : "primary.main",
                  color: contactIn ? "#FFFFFF" : "primary.contrastText",
                  transition: "background-color .7s ease, color .7s ease",
                  "&:hover": { bgcolor: contactIn ? "#0C2230" : "primary.light" },
                }}
              >
                {t("contactEmailLabel")}
              </Button>
            </Reveal>
          </Box>
        </Container>
      </Box>
    </>
  );
}

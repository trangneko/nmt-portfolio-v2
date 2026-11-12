import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Container, Link, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { brand } from "../theme/theme";

export default function Layout() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  // Contact page uses the Golden Orange background
  const onAccent = pathname === "/contact";

  // Block body on purpose: an effect must not return scrollTo's result
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Keep the <html lang> attribute in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage === "jp" ? "ja" : "en";
  }, [i18n.resolvedLanguage]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: onAccent ? "primary.main" : "background.default",
        color: onAccent ? brand.jetBlack : "text.primary",
        transition: "background-color .3s",
      }}
    >
      <Container maxWidth="xl">
        <Navbar onAccent={onAccent} />
      </Container>
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Container maxWidth="xl" component="footer" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" sx={{ color: onAccent ? brand.jetBlack : "text.secondary" }}>
            {t("footerCopy", { year: new Date().getFullYear() })}
          </Typography>
          <ToggleButtonGroup
            size="small"
            exclusive
            value={i18n.resolvedLanguage}
            onChange={(_, v) => v && i18n.changeLanguage(v)}
            aria-label={t("languageLabel")}
            sx={{
              "& .MuiToggleButton-root": {
                px: 2.5,
                fontWeight: 600,
                // Unselected: plain outline, readable on both backgrounds
                color: onAccent ? brand.jetBlack : "text.secondary",
                borderColor: onAccent ? brand.jetBlack : "divider",
                "&:hover": { bgcolor: onAccent ? "rgba(20,54,66,0.12)" : "rgba(255,255,255,0.08)" },
                // Selected: solid fill that contrasts with the page (orange on Jet Black, Jet Black on orange)
                "&.Mui-selected, &.Mui-selected:hover": {
                  bgcolor: onAccent ? brand.jetBlack : brand.goldenOrange,
                  color: onAccent ? "#FFFFFF" : brand.jetBlack,
                },
              },
            }}
          >
            <ToggleButton value="en">EN</ToggleButton>
            <ToggleButton value="jp">JA</ToggleButton>
          </ToggleButtonGroup>
          <Link href="mailto:lucideneko@gmail.com" underline="hover" sx={{ color: onAccent ? brand.jetBlack : "text.secondary" }}>
            lucideneko@gmail.com
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, Link, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { brand } from "../theme/theme";
import { scrollBehavior, useScrollSpy } from "../hooks/useScrollSpy";

export default function Layout() {
  const { pathname, hash, key } = useLocation();
  const { t, i18n } = useTranslation();
  const isHome = pathname === "/";
  const prevPath = useRef(pathname);

  // Which landing page section is under the navbar (only on "/")
  const section = useScrollSpy(["services", "contact"], isHome);
  const activeKey = isHome
    ? section ?? "home"
    : pathname.startsWith("/about")
      ? "about"
      : pathname.startsWith("/works")
        ? "works"
        : "";
  const navAccent = activeKey === "contact";

  // Navigation scrolling:
  // - "/#id": smooth scroll to the section (waits for the page to render)
  // - same page, no hash (clicking Home): smooth scroll to top
  // - new page: jump to top
  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    if (hash) {
      let tries = 0;
      const go = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
        else if (tries++ < 20) window.setTimeout(go, 50);
      };
      go();
    } else if (samePage) {
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  // Publish scroll position as CSS variables: --scroll-y (flower rotation) and
  // --scroll-progress (0 to 1, progress bar). One rAF-throttled listener for the whole app.
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-y", String(Math.round(window.scrollY)));
      root.style.setProperty("--scroll-progress", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keep the <html lang> attribute in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage === "jp" ? "ja" : "en";
  }, [i18n.resolvedLanguage]);

  // The landing page ends with the yellow Contact section, so its footer is yellow too
  const footerAccent = isHome;

  // overflowX "clip" hides elements that slide in from the side without breaking the sticky header
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default", color: "text.primary", overflowX: "clip" }}>
      {/* Thin scroll progress bar at the very top of the screen */}
      <Box
        aria-hidden="true"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          zIndex: 1300,
          transformOrigin: "0 50%",
          transform: "scaleX(var(--scroll-progress, 0))",
          bgcolor: navAccent ? brand.jetBlack : brand.goldenOrange,
          transition: "background-color .5s",
          pointerEvents: "none",
        }}
      />

      {/* Sticky header: it must be a direct child of this tall column to stay on screen */}
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          pt: { xs: 1.5, md: 2.5 },
          pb: 1,
          // Translucent backdrop so content scrolling underneath stays readable
          bgcolor: navAccent ? "rgba(236,154,41,0.92)" : "rgba(20,54,66,0.88)",
          backdropFilter: "blur(10px)",
          transition: "background-color .5s",
        }}
      >
        <Container maxWidth="xl">
          <Navbar activeKey={activeKey} onAccent={navAccent} />
        </Container>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          bgcolor: footerAccent ? "primary.main" : "transparent",
          color: footerAccent ? brand.jetBlack : "text.secondary",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "inherit" }}>
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
                  color: footerAccent ? brand.jetBlack : "text.secondary",
                  borderColor: footerAccent ? brand.jetBlack : "divider",
                  "&:hover": { bgcolor: footerAccent ? "rgba(20,54,66,0.12)" : "rgba(255,255,255,0.08)" },
                  // Selected: solid fill that contrasts with the background
                  "&.Mui-selected, &.Mui-selected:hover": {
                    bgcolor: footerAccent ? brand.jetBlack : brand.goldenOrange,
                    color: footerAccent ? "#FFFFFF" : brand.jetBlack,
                  },
                },
              }}
            >
              <ToggleButton value="en">EN</ToggleButton>
              <ToggleButton value="jp">JA</ToggleButton>
            </ToggleButtonGroup>
            <Link href="mailto:lucideneko@gmail.com" underline="hover" sx={{ color: "inherit" }}>
              lucideneko@gmail.com
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

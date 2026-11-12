import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTranslation } from "react-i18next";
import { brand } from "../theme/theme";

const left = [
  { to: "/", key: "navHome" },
  { to: "/works", key: "navWorks" },
];
const right = [
  { to: "/about", key: "navAbout" },
  { to: "/contact", key: "navContact" },
];

interface NavbarProps {
  // On the orange Contact page the bar blends into the background
  onAccent?: boolean;
}

const linkSx = (onAccent: boolean) => ({
  color: brand.jetBlack,
  borderRadius: 999,
  px: 2.5,
  py: 0.75,
  fontSize: "0.85rem",
  minWidth: 0,
  "&.active": { bgcolor: brand.jetBlack, color: onAccent ? "#FFFFFF" : brand.goldenOrange },
  "&:hover": { bgcolor: "rgba(20,54,66,0.12)" },
  "&.active:hover": { bgcolor: brand.jetBlack },
});

export default function Navbar({ onAccent = false }: NavbarProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const all = [...left, ...right];

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 10, pt: { xs: 1.5, md: 2.5 } }}>
      <Box
        component="nav"
        aria-label={t("mainNav")}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: onAccent ? "transparent" : "primary.main",
          borderRadius: 999,
          px: { xs: 2, md: 1.5 },
          py: 0.75,
          // Orange bar needs a contrast ring against the Jet Black page
          border: onAccent ? "none" : `2px solid ${brand.goldenOrange}`,
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, gap: 0.5 }}>
          {left.map((l) => (
            <Button key={l.to} component={NavLink} to={l.to} end={l.to === "/"} sx={linkSx(onAccent)}>
              {t(l.key)}
            </Button>
          ))}
        </Box>

        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          sx={{ color: brand.jetBlack, textDecoration: "none", letterSpacing: "0.04em", fontWeight: 700 }}
        >
          LUCIDE
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "flex-end", gap: 0.5 }}>
          {right.map((l) => (
            <Button key={l.to} component={NavLink} to={l.to} sx={linkSx(onAccent)}>
              {t(l.key)}
            </Button>
          ))}
        </Box>

        <IconButton
          aria-label={t("menuOpen")}
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" }, color: brand.jetBlack }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 1 }}>
          <IconButton aria-label={t("menuClose")} onClick={() => setOpen(false)} sx={{ ml: "auto", display: "flex" }}>
            <CloseRoundedIcon />
          </IconButton>
          <List>
            {all.map((l) => (
              <ListItemButton
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                sx={{ borderRadius: 999, "&.active": { bgcolor: "primary.main", color: "primary.contrastText" } }}
              >
                <ListItemText primary={t(l.key)} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTranslation } from "react-i18next";
import { brand } from "../theme/theme";

// Pages with their own route navigate there; others are sections of the landing page
// ("/#id") and the Layout scrolls to them smoothly.
export interface NavItem {
  key: string;
  labelKey: string;
  to: string;
}

export const navLeft: NavItem[] = [
  { key: "home", labelKey: "navHome", to: "/" },
  { key: "about", labelKey: "navAbout", to: "/about" },
  { key: "services", labelKey: "navServices", to: "/#services" },
];
export const navRight: NavItem[] = [
  { key: "works", labelKey: "navWorks", to: "/works" },
  { key: "contact", labelKey: "navContact", to: "/#contact" },
];

interface NavbarProps {
  activeKey: string;
  // Over the yellow Contact section the bar blends into the background
  onAccent?: boolean;
}

const linkSx = (onAccent: boolean) => ({
  color: brand.jetBlack,
  borderRadius: 999,
  px: 2.5,
  py: 0.75,
  fontSize: "0.85rem",
  minWidth: 0,
  transition: "background-color .3s, color .3s",
  "&.active": { bgcolor: brand.jetBlack, color: onAccent ? "#FFFFFF" : brand.goldenOrange },
  "&:hover": { bgcolor: "rgba(20,54,66,0.12)" },
  "&.active:hover": { bgcolor: brand.jetBlack },
});

export default function Navbar({ activeKey, onAccent = false }: NavbarProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const all = [...navLeft, ...navRight];

  const renderLink = (item: NavItem) => (
    <Button
      key={item.key}
      component={RouterLink}
      to={item.to}
      className={activeKey === item.key ? "active" : undefined}
      aria-current={activeKey === item.key ? "page" : undefined}
      sx={linkSx(onAccent)}
    >
      {t(item.labelKey)}
    </Button>
  );

  return (
    <>
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
          border: `2px solid ${brand.goldenOrange}`,
          borderColor: onAccent ? "transparent" : brand.goldenOrange,
          transition: "background-color .5s, border-color .5s",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, gap: 0.5 }}>{navLeft.map(renderLink)}</Box>

        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{ color: brand.jetBlack, textDecoration: "none", letterSpacing: "0.04em", fontWeight: 700 }}
        >
          LUCIDE
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "flex-end", gap: 0.5 }}>
          {navRight.map(renderLink)}
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
            {all.map((item) => (
              <ListItemButton
                key={item.key}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                selected={activeKey === item.key}
                sx={{ borderRadius: 999, "&.Mui-selected": { bgcolor: "primary.main", color: "primary.contrastText" } }}
              >
                <ListItemText primary={t(item.labelKey)} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

import { useState } from "react";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SectionHeading from "../components/SectionHeading";
import { brand } from "../theme/theme";
import { EMAIL, socialLinks } from "../data/contact";
import { useTranslation } from "react-i18next";

// Underline-only fields in Jet Black on the orange page (5.6:1)
const fieldSx = {
  "& .MuiInputBase-root": { color: brand.jetBlack, fontSize: "1.25rem" },
  "& .MuiInputLabel-root": { color: brand.jetBlack, fontWeight: 600, fontSize: "1.25rem" },
  "& .MuiInputLabel-root.Mui-focused": { color: brand.jetBlack },
  "& .MuiInput-underline:before": { borderBottomColor: brand.jetBlack },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: brand.jetBlack },
  "& .MuiInput-underline:after": { borderBottomColor: brand.jetBlack },
};

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend: open the visitor's mail app with the message prefilled
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(t("mailSubject", { name: form.name }));
    const body = encodeURIComponent(`${form.message}\n\n${t("mailReplyTo", { email: form.email })}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Container maxWidth="xl">
      <SectionHeading title={t("contactTitle")} flowerColor={brand.darkCyan} titleColor={brand.jetBlack} dividerColor={brand.jetBlack} />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6, py: { xs: 5, md: 8 } }}>
        <Box>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, mb: 3 }}>
            {t("contactPageStatement")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {socialLinks.map((l) => (
              <Link key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" underline="hover"
                sx={{ color: brand.jetBlack, fontWeight: 600, fontSize: "1.25rem" }}>
                {l.label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box component="form" onSubmit={submit} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField required type="email" label={t("formEmail")} variant="standard" value={form.email} onChange={set("email")} sx={fieldSx} />
          <TextField required label={t("formName")} variant="standard" value={form.name} onChange={set("name")} sx={fieldSx} />
          <TextField required multiline minRows={3} label={t("formMessage")} variant="standard" value={form.message} onChange={set("message")} sx={fieldSx} />
          <Button
            type="submit"
            size="large"
            endIcon={<SendRoundedIcon />}
            sx={{ alignSelf: "flex-start", bgcolor: brand.jetBlack, color: "#FFFFFF", px: 4, "&:hover": { bgcolor: "#0C2230" } }}
          >
            {t("formSend")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

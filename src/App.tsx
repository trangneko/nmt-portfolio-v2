import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Placeholder: confirms theme, i18n and assets are wired up. Rebuild from here.
export default function App() {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {t("hello")}
      </Typography>
      <Box sx={{ my: 4 }}>
        <Button variant="contained" color="tertiary">
          Palette check
        </Button>
      </Box>
    </Container>
  );
}

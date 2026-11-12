import { createTheme } from "@mui/material/styles";

// Brand palette (single source of truth)
export const brand = {
  dustGrey: "#DAD2D8",
  jetBlack: "#143642",
  darkCyan: "#0F8B8D",
  goldenOrange: "#EC9A29",
  mahoganyRed: "#A8201A",
} as const;

// Derived shades
const shade = {
  jetBlackLight: "#1E4757", // raised surfaces on the Jet Black base
  jetBlackDark: "#0C2230",
  darkCyanLight: "#4FB3B5",
  darkCyanDark: "#0A6567",
  goldenOrangeLight: "#F3BC6B",
  goldenOrangeDark: "#B8710F",
  mahoganyRedLight: "#D06A64",
  mahoganyRedDark: "#7A1511",
};

// Latin letters come from Bricolage Grotesque; it has no Japanese glyphs, so
// kana and kanji fall back to Zen Kaku Gothic New (modern, tidy, pairs well).
export const headingFont =
  "'Bricolage Grotesque', 'Zen Kaku Gothic New', 'Noto Sans JP', Arial, sans-serif";
export const bodyFont = "'Noto Sans JP', 'Bricolage Grotesque', Arial, sans-serif";

// Dark theme: Jet Black base, Golden Orange as the main accent.
// Contrast notes: Golden Orange on Jet Black 5.6:1, Dust Grey on Jet Black 8.7:1,
// Jet Black on Golden Orange 5.6:1. Dark Cyan on Jet Black is only 3.1:1, so use
// it for shapes and lines, never for body text.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: brand.goldenOrange,
      light: shade.goldenOrangeLight,
      dark: shade.goldenOrangeDark,
      contrastText: brand.jetBlack,
    },
    secondary: {
      main: brand.darkCyan,
      light: shade.darkCyanLight,
      dark: shade.darkCyanDark,
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: brand.mahoganyRed,
      light: shade.mahoganyRedLight,
      dark: shade.mahoganyRedDark,
      contrastText: "#FFFFFF",
    },
    warning: { main: brand.goldenOrange, contrastText: brand.jetBlack },
    info: { main: brand.darkCyan, contrastText: "#FFFFFF" },
    error: { main: shade.mahoganyRedLight, contrastText: brand.jetBlack },
    background: { default: brand.jetBlack, paper: shade.jetBlackLight },
    text: { primary: "#FFFFFF", secondary: brand.dustGrey },
    divider: "rgba(218, 210, 216, 0.35)",
    surfaceVariant: { main: brand.dustGrey, contrastText: brand.jetBlack },
    outline: brand.dustGrey,
    shadow: "rgb(0 0 0)",
    surfaceTint: brand.darkCyan,
    scrim: "rgb(0, 0, 0)",
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" },
    h2: { fontFamily: headingFont, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" },
    h3: { fontFamily: headingFont, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" },
    h4: { fontFamily: headingFont, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" },
    h5: { fontFamily: headingFont, fontWeight: 600 },
    h6: { fontFamily: headingFont, fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { overflowX: "hidden" },
        // Japanese typography. English headings use tight line-height and negative
        // letter-spacing, which crush kana and kanji, so loosen them under lang="ja".
        ":lang(ja)": { "word-break": "auto-phrase", "line-break": "strict" },
        ":lang(ja) .MuiTypography-h1, :lang(ja) .MuiTypography-h2, :lang(ja) .MuiTypography-h3, :lang(ja) .MuiTypography-h4": {
          lineHeight: 1.4,
          letterSpacing: "0.02em",
        },
        ":lang(ja) .MuiTypography-h5, :lang(ja) .MuiTypography-h6": {
          lineHeight: 1.7,
          letterSpacing: "0.02em",
        },
        // Thin 300 weight is hard to read in Japanese at body sizes
        ":lang(ja) .MuiTypography-body1, :lang(ja) .MuiTypography-body2": {
          lineHeight: 1.9,
          letterSpacing: "0.03em",
          fontWeight: "400 !important",
        },
        "::selection": { background: brand.goldenOrange, color: brand.jetBlack },
      },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 999 } },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999 },
        outlined: { borderColor: brand.dustGrey, color: brand.dustGrey },
      },
    },
  },
});

export default theme;

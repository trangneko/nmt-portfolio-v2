import { alpha, createTheme } from "@mui/material/styles";

// Brand palette (single source of truth)
export const brand = {
  dustGrey: "#DAD2D8",
  jetBlack: "#143642",
  darkCyan: "#0F8B8D",
  goldenOrange: "#EC9A29",
  mahoganyRed: "#A8201A",
} as const;

// Derived shades (tints/shades of the brand colors, tuned for text contrast)
const shade = {
  jetBlackLight: "#2B5566",
  jetBlackDark: "#0C2230",
  darkCyanLight: "#4FB3B5",
  darkCyanDark: "#0A6567", // text-safe cyan on light surfaces
  goldenOrangeLight: "#F3BC6B",
  goldenOrangeDark: "#B8710F",
  mahoganyRedLight: "#D06A64",
  mahoganyRedDark: "#7A1511",
  pageBackground: "#F4F1F3", // very light tint of Dust Grey
  textSecondary: "#476370", // tint of Jet Black, passes AA on page background
};

const theme = createTheme({
  palette: {
    primary: {
      main: brand.jetBlack,
      light: shade.jetBlackLight,
      dark: shade.jetBlackDark,
      contrastText: "#FFFFFF",
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
    // Golden Orange is light: always pair it with Jet Black text, never white
    warning: {
      main: brand.goldenOrange,
      light: shade.goldenOrangeLight,
      dark: shade.goldenOrangeDark,
      contrastText: brand.jetBlack,
    },
    info: {
      main: brand.goldenOrange,
      contrastText: brand.jetBlack,
    },
    error: {
      main: brand.mahoganyRed,
      light: shade.mahoganyRedLight,
      dark: shade.mahoganyRedDark,
      contrastText: "#FFFFFF",
    },
    background: {
      default: shade.pageBackground,
      paper: "#FFFFFF",
    },
    text: {
      primary: brand.jetBlack,
      secondary: shade.textSecondary,
    },
    divider: brand.dustGrey,
    surfaceVariant: {
      main: brand.dustGrey,
      contrastText: brand.jetBlack,
    },
    outline: shade.textSecondary,
    shadow: "rgb(0 0 0)",
    surfaceTint: brand.darkCyan,
    scrim: "rgb(0, 0, 0)",
  },
  typography: {
    fontFamily: '"Noto Sans JP", Arial, sans-serif',
    h1: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          // Golden Orange accent line under the navbar
          borderBottom: `3px solid ${brand.goldenOrange}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          backgroundColor: brand.dustGrey,
          color: brand.jetBlack,
        },
        outlined: {
          borderColor: brand.darkCyan,
          color: shade.darkCyanDark,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "2px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          border: `1px solid ${brand.dustGrey}`,
          boxShadow: `0 2px 8px ${alpha(brand.jetBlack, 0.08)}`,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: shade.darkCyanDark },
      },
    },
  },
});

export default theme;

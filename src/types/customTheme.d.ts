import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
    surfaceVariant: PaletteColor;
    outline: string;
    shadow: string;
    surfaceTint: string;
    scrim: string;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    surfaceVariant?: PaletteColorOptions;
    outline?: string;
    shadow?: string;
    surfaceTint?: string;
    scrim?: string;
  }
}

import { useTranslation } from "react-i18next";

export type Lang = "en" | "ja";

// App language code is "jp" (locale file name); expose a standard "ja" for logic
export function useLang(): Lang {
  const { i18n } = useTranslation();
  return i18n.resolvedLanguage === "jp" ? "ja" : "en";
}

// Turns "9/2024 - NOW" into "2024年9月 - 現在" for Japanese, leaves English as is
export function formatPeriod(text: string, lang: Lang, nowLabel: string): string {
  const withNow = text.replace(/\bNOW\b/g, nowLabel);
  if (lang === "en") return withNow;
  return withNow.replace(/(\d{1,2})\/(\d{4})/g, "$2年$1月");
}

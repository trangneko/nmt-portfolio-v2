import { useEffect } from "react";

export const SITE_NAME = "Lucide's Portfolio";

// Sets the browser tab title to "<page title> | Lucide's Portfolio".
// Pass the already translated page title; it updates when the language changes.
export function useDocumentTitle(pageTitle: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
}

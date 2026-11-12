import { useState } from "react";
import { Box } from "@mui/material";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";

interface ProjectImageProps {
  src: string;
  alt: string;
  // Leave out to show the whole image at its own (landscape) ratio, with no cropping
  aspectRatio?: string;
  // Render nothing instead of a placeholder (used on the detail page)
  hideOnError?: boolean;
}

// Shows a Dust Grey placeholder when a (remote) project image fails to load.
export default function ProjectImage({ src, alt, aspectRatio, hideOnError = false }: ProjectImageProps) {
  const [loadFailed, setLoadFailed] = useState(false);
  const failed = loadFailed || !src; // no cover image yet counts as failed
  if (failed && hideOnError) return null;
  if (failed) {
    return (
      <Box
        role="img"
        aria-label={alt}
        sx={{
          aspectRatio: aspectRatio ?? "16 / 9",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "surfaceVariant.main",
          color: "primary.contrastText",
          borderRadius: 3,
        }}
      >
        <ImageNotSupportedRoundedIcon fontSize="large" />
      </Box>
    );
  }
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setLoadFailed(true)}
      sx={{ aspectRatio, width: "100%", height: "auto", objectFit: "cover", borderRadius: 3, display: "block" }}
    />
  );
}

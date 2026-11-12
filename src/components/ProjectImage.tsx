import { useState } from "react";
import { Box } from "@mui/material";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  // Render nothing instead of a placeholder (used on the detail page)
  hideOnError?: boolean;
}

// Shows a Dust Grey placeholder when a (remote) project image fails to load.
export default function ProjectImage({ src, alt, aspectRatio = "4 / 3", hideOnError = false }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed && hideOnError) return null;
  if (failed) {
    return (
      <Box
        role="img"
        aria-label={alt}
        sx={{
          aspectRatio,
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
      onError={() => setFailed(true)}
      sx={{ aspectRatio, width: "100%", objectFit: "cover", borderRadius: 3, display: "block" }}
    />
  );
}

import { lazy, Suspense, useState } from "react";
import { Box, Typography } from "@mui/material";
import type { CaseStudy, CaseStudyBlock } from "../types/Project";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

// The album viewer is only downloaded when someone opens a picture
const ImageLightbox = lazy(() => import("./ImageLightbox"));

const bodySx = { fontWeight: 300, lineHeight: 1.8, fontSize: { xs: "1.05rem", md: "1.15rem" } };


// Grid of pictures; each one opens in a full-screen album
function Gallery({ block }: { block: Extract<CaseStudyBlock, { type: "gallery" }> }) {
  const [open, setOpen] = useState(-1);
  const [used, setUsed] = useState(false); // keep it mounted after the first open so it can fade out
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: `repeat(${block.cols ?? 3}, 1fr)` }, gap: 2, mb: 4 }}>
        {block.items.map((it, i) => (
          <Box
            key={it.src}
            component="button"
            type="button"
            onClick={() => { setUsed(true); setOpen(i); }}
            aria-label={it.caption}
            sx={{
              display: "block",
              p: 0,
              border: 0,
              bgcolor: "transparent",
              textAlign: "left",
              font: "inherit",
              color: "inherit",
              cursor: "zoom-in",
              "&:hover img": { transform: "scale(1.02)" },
              "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 4 },
            }}
          >
            <Box sx={{ overflow: "hidden", borderRadius: 2, border: "1px solid", borderColor: "divider", bgcolor: "#FFFFFF" }}>
              <Box component="img" src={it.src} alt="" loading="lazy" sx={{ display: "block", width: "100%", height: "auto", transition: "transform .3s" }} />
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>{it.caption}</Typography>
          </Box>
        ))}
      </Box>
      {used && (
        <Suspense fallback={null}>
          <ImageLightbox items={block.items} index={open} onClose={() => setOpen(-1)} />
        </Suspense>
      )}
    </>
  );
}

// One content block inside a section
function Block({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "p":
      return <Typography sx={{ ...bodySx, mb: 2.5 }}>{block.text}</Typography>;
    case "h":
      return (
        <Typography variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          {block.text}
        </Typography>
      );
    case "table":
      // Scrolls sideways on narrow screens instead of squashing the columns
      return (
        <Box sx={{ overflowX: "auto", mb: 4 }}>
          <Box component="table" sx={{ width: "100%", minWidth: 560, borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {block.head.map((h) => (
                  <Box key={h} component="th" sx={{ textAlign: "left", p: 1.5, pl: 0, color: "primary.main", fontWeight: 600, borderBottom: "2px solid", borderColor: "divider" }}>
                    {h}
                  </Box>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <Box
                      key={c}
                      component="td"
                      sx={{ verticalAlign: "top", p: 1.5, pl: 0, pr: 2, borderBottom: "1px solid", borderColor: "divider", fontWeight: 300, lineHeight: 1.7, color: c === 0 ? "text.secondary" : "text.primary" }}
                    >
                      {cell}
                    </Box>
                  ))}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      );
    case "labeled":
      // "Problem", "Decision", ... in the accent color; an empty text introduces the list below
      return (
        <Typography sx={{ ...bodySx, mb: block.text ? 2.5 : 1 }}>
          <Box component="strong" sx={{ color: "primary.main", fontWeight: 600, mr: block.text ? 1 : 0 }}>
            {block.label}
          </Box>
          {block.text}
        </Typography>
      );
    case "list":
    case "numbered":
      return (
        <Box
          component={block.type === "list" ? "ul" : "ol"}
          sx={{ m: 0, mb: 3, pl: 3, "& li": { ...bodySx, mb: 1.5, pl: 0.5 }, "& li::marker": { color: "primary.main" } }}
        >
          {block.items.map((item) =>
            typeof item === "string" ? (
              <li key={item}>{item}</li>
            ) : (
              <li key={item.lead}>
                <Box component="strong" sx={{ fontWeight: 600, mr: 0.75 }}>{item.lead}</Box>
                {item.text}
              </li>
            ),
          )}
        </Box>
      );
    case "gallery":
      return <Gallery block={block} />;
    case "image":
      // Placeholder slots stay hidden until the picture is added
      if (!block.src) return null;
      return (
        <Box component="figure" sx={{ m: 0, mb: 3, maxWidth: block.maxWidth }}>
          <ProjectImage src={block.src} alt={block.caption} hideOnError />
          <Typography component="figcaption" variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            {block.caption}
          </Typography>
        </Box>
      );
  }
}

// Overview table, then one two-column row per section (title left, content right)
export default function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <Box sx={{ mt: { xs: 6, md: 10 } }}>
      {study.note && (
        <Reveal>
          <Typography
            variant="body2"
            sx={{ display: "inline-block", border: "1px solid", borderColor: "divider", borderRadius: 999, px: 2, py: 0.75, color: "text.secondary", mb: 4 }}
          >
            {study.note}
          </Typography>
        </Reveal>
      )}

      <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
        {study.overview.map((row) => (
          <Reveal key={row.label}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: { xs: 0.5, md: 6 },
                py: 2.5,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>{row.label}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{row.value}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>

      {study.sections.map((section) => (
        <Box
          key={section.title}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
            gap: { xs: 3, md: 6 },
            pt: { xs: 6, md: 10 },
          }}
        >
          <Reveal direction="left">
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "primary.main", position: { md: "sticky" }, top: { md: 120 } }}
            >
              {section.title}
            </Typography>
          </Reveal>
          <Reveal direction="right" delay={100}>
            {section.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </Reveal>
        </Box>
      ))}
    </Box>
  );
}

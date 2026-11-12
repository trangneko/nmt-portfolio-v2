import { Box, Typography } from "@mui/material";
import type { CaseStudy, CaseStudyBlock } from "../types/Project";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const bodySx = { fontWeight: 300, lineHeight: 1.8, fontSize: { xs: "1.05rem", md: "1.15rem" } };

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

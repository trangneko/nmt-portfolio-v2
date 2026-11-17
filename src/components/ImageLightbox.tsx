import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Props {
  items: { src: string; caption: string }[];
  index: number; // open slide, or -1 when closed
  onClose: () => void;
}

// Full-screen album: arrows and swipe to move between pictures, zoom, thumbnails and captions.
// Loaded on demand (see CaseStudyView) so it does not add to the first page load.
export default function ImageLightbox({ items, index, onClose }: Props) {
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      slides={items.map((it) => ({ src: it.src, alt: it.caption, description: it.caption }))}
      plugins={[Captions, Counter, Thumbnails, Zoom]}
      carousel={{ finite: false }}
      captions={{ descriptionTextAlign: "center" }}
      thumbnails={{ width: 72, height: 96, border: 0, gap: 8 }}
      zoom={{ maxZoomPixelRatio: 2 }}
    />
  );
}

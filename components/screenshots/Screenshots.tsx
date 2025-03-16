import { useState } from "react";
import { type Screenshot } from "../../types/screenshots";
import { ScreenshotGrid } from "./ScreenshotGrid";
import { ScreenshotCarousel } from "./ScreenshotCarousel";
import { ScreenshotPreview } from "./ScreenshotPreview";

interface ScreenshotsProps {
  screenshots: Screenshot[];
}

export function Screenshots({ screenshots }: ScreenshotsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const openPreview = (index: number) => {
    setPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const navigatePreview = (direction: number) => {
    setPreviewIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return screenshots.length - 1;
      if (newIndex >= screenshots.length) return 0;
      return newIndex;
    });
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white bg-opacity-80">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Screenshots</h2>

        <ScreenshotGrid screenshots={screenshots} onPreviewOpen={openPreview} />

        <ScreenshotCarousel
          screenshots={screenshots}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          onPreviewOpen={openPreview}
        />

        <ScreenshotPreview
          screenshots={screenshots}
          isOpen={isPreviewOpen}
          currentIndex={previewIndex}
          onClose={closePreview}
          onNavigate={navigatePreview}
        />
      </div>
    </section>
  );
}

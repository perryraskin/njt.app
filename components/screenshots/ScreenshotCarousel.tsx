import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Screenshot } from "../../types/screenshots";

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onPreviewOpen: (index: number) => void;
}

export function ScreenshotCarousel({
  screenshots,
  currentSlide,
  onSlideChange,
  onPreviewOpen,
}: ScreenshotCarouselProps) {
  const nextSlide = () => {
    onSlideChange(
      currentSlide === screenshots.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    onSlideChange(
      currentSlide === 0 ? screenshots.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="lg:hidden relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {screenshots.map((screenshot, index) => (
            <div key={index} className="w-full flex-shrink-0 px-12">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => onPreviewOpen(index)}
                  className="cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                >
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    width={250}
                    height={500}
                    alt={`App screenshot: ${screenshot.src}`}
                    className="rounded-xl shadow-md mb-2"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Next screenshot"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-6 bg-gray-700" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

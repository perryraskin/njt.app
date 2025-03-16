import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { type PreviewProps } from "../../types/screenshots";

export function ScreenshotPreview({
  screenshots,
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
}: PreviewProps) {
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    let currentTouchX = touchStartX;

    const handleTouchMove = (e: TouchEvent) => {
      currentTouchX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const difference = touchStartX - currentTouchX;

      // Minimum swipe distance (px)
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          // Swiped left, go to next
          onNavigate(1);
        } else {
          // Swiped right, go to previous
          onNavigate(-1);
        }
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          className="absolute right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Image */}
        <div
          className="max-w-4xl max-h-[90vh] px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <Image
              src={screenshots[currentIndex].src || "/placeholder.svg"}
              width={500}
              height={1000}
              alt={`App screenshot: ${screenshots[currentIndex].src}`}
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index - currentIndex);
              }}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

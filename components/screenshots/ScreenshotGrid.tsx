import Image from "next/image";
import { type Screenshot } from "../../types/screenshots";

interface ScreenshotGridProps {
  screenshots: Screenshot[];
  onPreviewOpen: (index: number) => void;
}

export function ScreenshotGrid({
  screenshots,
  onPreviewOpen,
}: ScreenshotGridProps) {
  return (
    <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
      {screenshots.map((screenshot, index) => (
        <div key={index} className="max-w-[250px]">
          <button
            onClick={() => onPreviewOpen(index)}
            className="w-full cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
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
      ))}
    </div>
  );
}

import type { Screenshot } from "../types/screenshots";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Screenshots } from "../components/screenshots/Screenshots";
import { Description } from "../components/Description";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  const screenshots: Screenshot[] = [
    { src: "/screenshots/1.png" },
    { src: "/screenshots/2.png" },
    { src: "/screenshots/3.png" },
    { src: "/screenshots/4.png" },
    { src: "/screenshots/5.png" },
  ];

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      {/* TestFlight Banner */}
      <Banner />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#f8faff]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-navy-50 blur-[100px] animate-float-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-navy-100 blur-[80px] animate-float-medium"></div>
          <div className="absolute top-[60%] left-[30%] w-[25%] h-[25%] rounded-full bg-navy-200 blur-[60px] animate-float-fast"></div>
        </div>
      </div>

      <main className="flex-1 relative z-10">
        <Hero />
        <Screenshots screenshots={screenshots} />
        <Description />
      </main>

      <Footer />
    </div>
  );
}

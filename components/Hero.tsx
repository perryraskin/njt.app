import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/njt-app-logo-new.png"
              width={300}
              height={300}
              alt="NJT Departures and Track Predictions App Icon"
              className="rounded-[25%] shadow-lg"
              priority
            />
          </div>
          <div className="md:w-2/3 space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              NJT Departures and Track Predictions
            </h1>
            <p className="text-lg tracking-tight text-gray-700 md:text-xl max-w-[600px]">
              Get predicted track numbers at NY Penn Station before they&apos;re
              announced! Position yourself strategically and avoid the rush hour
              dash across the station.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="https://apps.apple.com/us/app/njt-departures-predict-tracks/id6742149117"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="ios-badge.svg"
                  width={200}
                  height={60}
                  alt="Download on the App Store"
                  className="h-[60px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

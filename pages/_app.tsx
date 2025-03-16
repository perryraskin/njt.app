import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NJT Departures and Track Predictions</title>
        <meta
          name="description"
          content="Get predicted track numbers at NY Penn Station"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/app/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/app/icon0.svg" />
        <link rel="apple-touch-icon" href="/app/apple-icon.png" />
        <link rel="manifest" href="/app/manifest.json" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="NJT Departures and Track Predictions"
        />
        <meta
          property="og:description"
          content="Get predicted track numbers at NY Penn Station"
        />
        <meta property="og:image" content="/app/apple-icon.png" />

        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NJT App" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

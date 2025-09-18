import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Plourg",
    short_name: "Plourg",
    description:
      "Plourg is a campus‑focused marketplace to buy, sell, and connect with trusted local vendors.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff2bb8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

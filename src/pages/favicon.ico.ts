import type { APIRoute } from "astro";
import sharp from "sharp";
import path from "node:path";

// relative to project root
const faviconSrc = path.resolve("src/images/favicon.png");

export const GET: APIRoute = async () => {
  // resize to 32px PNG
  const buffer = await sharp(faviconSrc).resize(32).toFormat("png").toBuffer();
  // generate ico

  return new Response(buffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};

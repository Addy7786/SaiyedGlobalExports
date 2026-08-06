import sharp from "sharp";

await sharp("src/assets/saiyed-logo.webp")
  .resize(256, 256, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .webp({
    quality: 80,
    effort: 6,
  })
  .toFile("src/assets/saiyed-logo-optimized.webp");

console.log("✅ Logo optimized successfully.");
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourcePath = path.resolve(
  "src/assets/hero-global-trade.webp"
);

const desktopOutput = path.resolve(
  "src/assets/hero-global-trade-desktop.webp"
);

const mobileOutput = path.resolve(
  "src/assets/hero-global-trade-mobile.webp"
);

async function optimizeHero() {
  try {
    await fs.access(sourcePath);

    await sharp(sourcePath)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .webp({
        quality: 74,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(desktopOutput);

    await sharp(sourcePath)
      .resize({
        width: 768,
        withoutEnlargement: true,
      })
      .webp({
        quality: 70,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(mobileOutput);

    const desktopStats = await fs.stat(desktopOutput);
    const mobileStats = await fs.stat(mobileOutput);

    console.log(
      `✅ Desktop hero: ${(desktopStats.size / 1024).toFixed(2)} KB`
    );

    console.log(
      `✅ Mobile hero: ${(mobileStats.size / 1024).toFixed(2)} KB`
    );

    console.log("✅ Hero images optimized successfully.");
  } catch (error) {
    console.error("❌ Hero optimization failed:");
    console.error(error.message);
    process.exit(1);
  }
}

optimizeHero();
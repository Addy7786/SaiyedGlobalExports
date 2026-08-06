import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.resolve("src/assets/flags");
const outputDirectory = path.resolve(
  "src/assets/flags-optimized"
);

const flagNames = [
  "india",
  "uae",
  "saudi-arabia",
  "turkey",
  "united-kingdom",
  "united-states",
  "malaysia",
  "singapore",
  "south-africa",
];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findSourceFile(baseName) {
  const extensions = [
    "webp",
    "png",
    "jpg",
    "jpeg",
  ];

  for (const extension of extensions) {
    const filePath = path.join(
      sourceDirectory,
      `${baseName}.${extension}`
    );

    if (await fileExists(filePath)) {
      return filePath;
    }
  }

  return null;
}

async function optimizeFlags() {
  try {
    await fs.mkdir(outputDirectory, {
      recursive: true,
    });

    for (const flagName of flagNames) {
      const sourcePath =
        await findSourceFile(flagName);

      if (!sourcePath) {
        console.warn(
          `⚠️ Source not found: ${flagName}`
        );
        continue;
      }

      const outputPath = path.join(
        outputDirectory,
        `${flagName}.webp`
      );

      await sharp(sourcePath)
        .resize(96, 96, {
          fit: "cover",
          position: "center",
        })
        .webp({
          quality: 76,
          effort: 6,
          smartSubsample: true,
        })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);

      console.log(
        `✅ ${flagName}.webp — ${(
          stats.size / 1024
        ).toFixed(2)} KB`
      );
    }

    console.log("");
    console.log(
      "✅ Optimized flags created successfully."
    );
    console.log(
      "📁 Folder: src/assets/flags-optimized"
    );
  } catch (error) {
    console.error("");
    console.error(
      "❌ Flag optimization failed:"
    );
    console.error(error.message);
    process.exit(1);
  }
}

optimizeFlags();
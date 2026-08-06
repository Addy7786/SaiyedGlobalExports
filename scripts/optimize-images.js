import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["src/assets/**/*.{jpg,jpeg,png}"], {
  destination: "src/assets",
  plugins: [
    imageminWebp({
      quality: 82,
    }),
  ],
});

console.log("✅ All images optimized successfully.");
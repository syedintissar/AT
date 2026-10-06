import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Alhawaij Tech — software development, UI/UX design, and cloud solutions";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Software development company", title: "Good ideas. Great software.", subtitle: "Web platforms, mobile apps, UI/UX design, eCommerce, and cloud solutions." });
}

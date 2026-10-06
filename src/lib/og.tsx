import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export async function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const icon = await readFile(join(process.cwd(), "public/icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#0d0e24", color: "#f4f3ef", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 620, height: 620, borderRadius: 620, background: "radial-gradient(circle, rgba(189,10,47,0.45), rgba(13,14,36,0) 65%)", display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 76, height: 76, borderRadius: 18, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
            <img src={iconSrc} width={62} height={62} alt="" />
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>Alhawaij Tech</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#ff8fa5", letterSpacing: 3, textTransform: "uppercase" }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#ff8fa5" }} />
            {eyebrow}
          </div>
          <div style={{ marginTop: 22, fontSize: title.length > 38 ? 64 : 78, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 1000 }}>{title}</div>
          {subtitle ? <div style={{ marginTop: 22, fontSize: 28, color: "#a9aac0", maxWidth: 940, lineHeight: 1.35 }}>{subtitle}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a9aac0" }}>
          <div>www.alhawaijtech.com</div>
          <div style={{ display: "flex", width: 120, height: 6, background: "#bd0a2f", borderRadius: 6, marginTop: 12 }} />
        </div>
      </div>
    ),
    ogSize,
  );
}

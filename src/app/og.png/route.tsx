import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Link-preview image, written to out/og.png at build time. A plain route (not the
// opengraph-image file convention) so the file keeps its .png extension: GitHub
// Pages serves extensionless files as octet-stream, which Facebook won't preview.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#050505",
          backgroundImage:
            "radial-gradient(1200px 600px at 12% -10%, rgba(212,175,55,0.16), transparent), radial-gradient(1000px 600px at 110% 120%, rgba(179,135,40,0.12), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            color: "#D4AF37",
            fontFamily: "monospace",
          }}
        >
          <span>&lt;HC/&gt;</span>
          <span style={{ color: "#374151" }}>/</span>
          <span style={{ color: "#9CA3AF", fontSize: 26, letterSpacing: 2 }}>
            {siteConfig.name.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 70,
              fontWeight: 700,
              color: "#F8FAFC",
              lineHeight: 1.08,
              maxWidth: "1010px",
            }}
          >
            <span>Harry Cabrera&nbsp;—&nbsp;</span>
            <span style={{ color: "#D4AF37" }}>WordPress &amp; Web Developer</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9CA3AF" }}>
            WordPress & Full-Stack Developer · AI Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6B7280",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ color: "#D4AF37" }}>WordPress</span>
            <span>·</span>
            <span style={{ color: "#E3C26A" }}>PHP</span>
            <span>·</span>
            <span style={{ color: "#D4AF37" }}>Python</span>
            <span>·</span>
            <span style={{ color: "#E3C26A" }}>Flutter</span>
            <span>·</span>
            <span style={{ color: "#D4AF37" }}>AI</span>
          </div>
          <div>{siteConfig.domain}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

import { ImageResponse } from "next/og";

const baseUrl = "https://gabrielgonzaga.com.br";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          position: "relative",
          display: "flex",
          background: "linear-gradient(180deg, #eaf1fb 0%, #fdfdfc 100%)",
          color: "#2b3242",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "490px",
            top: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            borderRadius: "30px",
            background: "#fdfdfc",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "20px",
              background: "#2b3242",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Home
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "20px",
              color: "#5a6478",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Work
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "20px",
              color: "#5a6478",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            About
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "192px",
            top: "64px",
            width: "816px",
            height: "259.08px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "16.32px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10.88px",
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: "65.28px",
                lineHeight: 1.05,
                fontWeight: 700,
                color: "#2b3242",
              }}
            >
              Gabriel Gonzaga
            </div>
            <div
              style={{
                width: "100%",
                fontFamily: "monospace",
                fontSize: "8.16px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "#9aa0ae",
                textTransform: "uppercase",
              }}
            >
              PRODUCT DESIGNER · UX / UI
            </div>
          </div>
          <div
            style={{
              width: "350.88px",
              fontSize: "9.52px",
              lineHeight: 1.5,
              fontWeight: 700,
              color: "#5a6478",
            }}
          >
            Transformo sistemas complexos em produtos que as pessoas usam.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "129.5px",
            top: "326px",
            width: "941px",
            height: "300px",
            display: "flex",
            gap: "35.6px",
          }}
        >
          <div
            style={{
              width: "452.4px",
              display: "flex",
              flexDirection: "column",
              gap: "12.48px",
            }}
          >
            <img
              src={`${baseUrl}/images/projects/quantolab/home-card.png`}
              width="452.4"
              height="254.475"
              alt=""
              style={{
                width: "452.4px",
                height: "254.475px",
                objectFit: "contain",
                borderRadius: "15.6px",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4.68px",
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: "12.48px", fontWeight: 600, color: "#2b3242" }}>
                QuantoLab
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ fontSize: "9.36px", color: "#5a6478" }}>Product design</div>
                <div style={{ fontSize: "7.8px", color: "#9aa0ae" }}>2026</div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "452.4px",
              display: "flex",
              flexDirection: "column",
              gap: "12.48px",
            }}
          >
            <img
              src={`${baseUrl}/images/projects/roteiro-do-sul/home-card.png`}
              width="452.4"
              height="254.475"
              alt=""
              style={{
                width: "452.4px",
                height: "254.475px",
                objectFit: "contain",
                borderRadius: "15.6px",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4.68px",
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: "12.48px", fontWeight: 600, color: "#2b3242" }}>
                Roteiro do Sul · Design System
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ fontSize: "9.36px", color: "#5a6478" }}>UX / UI design</div>
                <div style={{ fontSize: "7.8px", color: "#9aa0ae" }}>2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}

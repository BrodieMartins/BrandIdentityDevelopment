import { useRef } from "react";

const C = {
  black: "#050505",
  sage:  "#8a9a6b",
  cream: "#f5f0e8",
  gold:  "#c9a96e",
  dim:   "#1a1a1a",
  muted: "#333",
  subtle:"#555",
  faint: "#888",
};

const FONT_CSS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=Inter:wght@300&display=swap');`;

/* ─── Download utilities ─────────────────────────────────────────────────────*/
function triggerDownload(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function downloadSVG(svgEl: SVGSVGElement, filename: string) {
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const str = `<?xml version="1.0" encoding="UTF-8"?>\n${clone.outerHTML}`;
  const blob = new Blob([str], { type: "image/svg+xml" });
  triggerDownload(URL.createObjectURL(blob), filename);
}

function downloadPNG(svgEl: SVGSVGElement, filename: string, scale = 3) {
  const w = svgEl.viewBox.baseVal.width  || svgEl.width.baseVal.value;
  const h = svgEl.viewBox.baseVal.height || svgEl.height.baseVal.value;
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const str = clone.outerHTML;
  const blob = new Blob([str], { type: "image/svg+xml" });
  const url  = URL.createObjectURL(blob);
  const img  = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width  = w * scale;
    canvas.height = h * scale;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(b => { if (b) triggerDownload(URL.createObjectURL(b), filename); }, "image/png");
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

/* ─── Download bar ───────────────────────────────────────────────────────────*/
function DownloadBar({ svgRef, name }: { svgRef: React.RefObject<SVGSVGElement | null>; name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  const btn = (label: string, onClick: () => void) => (
    <button
      key={label}
      onClick={onClick}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        fontSize: "9px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: C.faint,
        background: "transparent",
        border: `1px solid ${C.dim}`,
        padding: "5px 12px",
        cursor: "pointer",
        borderRadius: "1px",
        transition: "color 0.15s, border-color 0.15s",
      }}
      onMouseEnter={e => { (e.target as HTMLElement).style.color = C.cream; (e.target as HTMLElement).style.borderColor = C.muted; }}
      onMouseLeave={e => { (e.target as HTMLElement).style.color = C.faint; (e.target as HTMLElement).style.borderColor = C.dim; }}
    >
      {label}
    </button>
  );
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "12px" }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: C.dim }} />
      {btn("↓ SVG", () => { if (svgRef.current) downloadSVG(svgRef.current, `martins-systems-${slug}.svg`); })}
      {btn("↓ PNG", () => { if (svgRef.current) downloadPNG(svgRef.current, `martins-systems-${slug}.png`); })}
    </div>
  );
}

/* ─── Signal bars (shared SVG fragment) ─────────────────────────────────────*/
type BarConfig = { x: number; y: number; w: number; h: number; fill: string; opacity: number };
function signalBars(baseX: number, baseY: number, barW: number, gap: number, heights: number[]): BarConfig[] {
  const fills   = [C.sage, C.sage, C.gold];
  const opacities = [0.5, 0.8, 1];
  return heights.map((h, i) => ({
    x: baseX + i * (barW + gap),
    y: baseY - h,
    w: barW,
    h,
    fill: fills[i],
    opacity: opacities[i],
  }));
}

/* ═══════════════════════════════════════════════════════════════════════════
   LOGO SVG COMPONENTS (pure SVG — directly downloadable)
═══════════════════════════════════════════════════════════════════════════ */

/* ─── Lockup A — Horizontal principal ───────────────────────────────────────*/
function SvgLockupA({ dark, ref }: { dark: boolean; ref?: React.Ref<SVGSVGElement> }) {
  const W = 420, H = 120;
  const bg        = dark ? C.black : C.cream;
  const textColor = dark ? C.cream : C.black;
  const ruleColor = dark ? C.muted : "#c8c3b8";

  const pad = 36, barW = 6, barGap = 5;
  const barBaseY = H * 0.62;
  const bars = signalBars(pad, barBaseY, barW, barGap, [12, 22, 34]);
  const textX = pad + 3 * barW + 2 * barGap + 18;
  const martinsY = H * 0.53;

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={bg} />
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />)}
      <text x={textX} y={martinsY} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="28" fill={textColor} letterSpacing="6.2">MARTINS</text>
      <line x1={textX} y1={martinsY + 9} x2={W - pad} y2={martinsY + 9} stroke={ruleColor} strokeWidth="0.75" />
      <text x={W - pad} y={martinsY + 24} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="9" fill={C.sage} letterSpacing="4.2" textAnchor="end">SYSTEMS</text>
    </svg>
  );
}

/* ─── Lockup A Large — Hero ──────────────────────────────────────────────────*/
function SvgLockupALarge({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  const W = 520, H = 150;
  const bg = C.black;
  const pad = 44, barW = 9, barGap = 7;
  const barBaseY = H * 0.62;
  const bars = signalBars(pad, barBaseY, barW, barGap, [18, 33, 51]);
  const textX = pad + 3 * barW + 2 * barGap + 24;
  const martinsY = H * 0.53;

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={bg} />
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />)}
      <text x={textX} y={martinsY} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="38" fill={C.cream} letterSpacing="8.6">MARTINS</text>
      <line x1={textX} y1={martinsY + 11} x2={W - pad} y2={martinsY + 11} stroke={C.muted} strokeWidth="0.75" />
      <text x={W - pad} y={martinsY + 29} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="11" fill={C.sage} letterSpacing="5.2" textAnchor="end">SYSTEMS</text>
    </svg>
  );
}

/* ─── Lockup B — Vertical ────────────────────────────────────────────────────*/
function SvgLockupB({ dark, ref }: { dark: boolean; ref?: React.Ref<SVGSVGElement> }) {
  const W = 240, H = 170;
  const bg        = dark ? C.black : C.cream;
  const textColor = dark ? C.cream : C.black;

  const barW = 7, barGap = 6;
  const totalBarW = 3 * barW + 2 * barGap;
  const barX = (W - totalBarW) / 2;
  const barBaseY = H * 0.52;
  const bars = signalBars(barX, barBaseY, barW, barGap, [14, 26, 40]);

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={bg} />
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />)}
      <text x={W / 2} y={H * 0.68} textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="24" fill={textColor} letterSpacing="5.3">MARTINS</text>
      <text x={W / 2} y={H * 0.81} textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="8" fill={C.sage} letterSpacing="3.6">SYSTEMS</text>
    </svg>
  );
}

/* ─── Lockup Compact ─────────────────────────────────────────────────────────*/
function SvgLockupCompact({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  const W = 340, H = 80;
  const pad = 28, barW = 5, barGap = 4;
  const barBaseY = H * 0.68;
  const bars = signalBars(pad, barBaseY, barW, barGap, [9, 17, 26]);
  const textX = pad + 3 * barW + 2 * barGap + 14;

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={C.black} />
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />)}
      <text x={textX} y={H * 0.6} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="20" fill={C.cream} letterSpacing="4.4">MARTINS</text>
      <text x={textX + 172} y={H * 0.63} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="8" fill={C.sage} letterSpacing="3.2">SYSTEMS</text>
    </svg>
  );
}

/* ─── Lockup Prestige — fond or ──────────────────────────────────────────────*/
function SvgLockupPrestige({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  const W = 340, H = 110;
  const pad = 28, barW = 6, barGap = 5;
  const barBaseY = H * 0.65;
  const bars = signalBars(pad, barBaseY, barW, barGap, [12, 22, 34]);
  const textX = pad + 3 * barW + 2 * barGap + 18;

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={C.gold} />
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={C.black} opacity={[0.3, 0.55, 0.85][i]} />
      ))}
      <text x={textX} y={H * 0.53} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="24" fill={C.black} letterSpacing="5.3">MARTINS</text>
      <text x={textX} y={H * 0.72} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="8.5" fill={C.black} letterSpacing="3.8" opacity="0.55">SYSTEMS</text>
    </svg>
  );
}

/* ─── Symbol only ────────────────────────────────────────────────────────────*/
function SvgSymbol({ scale = 1, ref }: { scale?: number; ref?: React.Ref<SVGSVGElement> }) {
  const bW = Math.round(6 * scale), gap = Math.round(5 * scale);
  const heights = [12, 22, 34].map(h => Math.round(h * scale));
  const W = 3 * bW + 2 * gap, H = Math.round(36 * scale);
  const baseY = H;
  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      {heights.map((h, i) => (
        <rect key={i} x={i * (bW + gap)} y={baseY - h} width={bW} height={h}
          fill={i === 2 ? C.gold : C.sage} opacity={[0.5, 0.8, 1][i]} />
      ))}
    </svg>
  );
}

/* ─── Business card SVG ──────────────────────────────────────────────────────*/
function SvgBusinessCard({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  const W = 360, H = 200;
  const pad = 28, barW = 6, barGap = 5;
  const barBaseY = 86;
  const bars = signalBars(pad, barBaseY, barW, barGap, [12, 22, 34]);
  const textX = pad + 3 * barW + 2 * barGap + 16;

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg">
      <defs><style>{FONT_CSS}</style></defs>
      <rect width={W} height={H} fill={C.black} />
      {/* Corner accent */}
      <rect x={W - 3} y={0} width={3} height={64} fill={C.gold} />
      <rect x={W - 64} y={0} width={64} height={3} fill={C.gold} />
      {/* Logo */}
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />)}
      <text x={textX} y={76} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="26" fill={C.cream} letterSpacing="5.8">MARTINS</text>
      <line x1={textX} y1={84} x2={W - pad} y2={84} stroke={C.muted} strokeWidth="0.75" />
      <text x={W - pad} y={97} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="9" fill={C.sage} letterSpacing="4" textAnchor="end">SYSTEMS</text>
      {/* Contact info */}
      <text x={pad} y={144} fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300" fontSize="15" fill={C.cream} letterSpacing="0.5">Alexandre Martins</text>
      <text x={pad} y={160} fontFamily="'Inter', system-ui, sans-serif" fontWeight="300" fontSize="8" fill={C.sage} letterSpacing="2">FONDATEUR · GENÈVE</text>
    </svg>
  );
}

/* ─── Section / Card wrappers ────────────────────────────────────────────────*/
function Section({ label, children, accent }: { label: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: accent ? C.gold : C.sage, whiteSpace: "nowrap" }}>
          {label}
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: C.dim }} />
      </div>
      {children}
    </div>
  );
}

function LogoCard({ children, bg = C.black, label }: { children: React.ReactNode; bg?: string; label?: string }) {
  return (
    <div style={{
      backgroundColor: bg,
      border: bg === C.cream ? "1px solid #ddd8ce" : `1px solid ${C.dim}`,
      borderRadius: "2px",
      padding: "32px 28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0",
    }}>
      {label && (
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.subtle, marginBottom: "20px", alignSelf: "flex-start" }}>
          {label}
        </span>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────────*/
export default function App() {
  const refHero     = useRef<SVGSVGElement>(null);
  const refDarkH    = useRef<SVGSVGElement>(null);
  const refLightH   = useRef<SVGSVGElement>(null);
  const refDarkV    = useRef<SVGSVGElement>(null);
  const refLightV   = useRef<SVGSVGElement>(null);
  const refCompact  = useRef<SVGSVGElement>(null);
  const refPrestige = useRef<SVGSVGElement>(null);
  const refSymbol   = useRef<SVGSVGElement>(null);
  const refCard     = useRef<SVGSVGElement>(null);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#080808", fontFamily: "'Inter', sans-serif", padding: "52px 44px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: C.sage }}>
            Identité visuelle — Direction retenue
          </p>
          <h1 style={{ margin: "0 0 24px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "30px", letterSpacing: "0.06em", color: C.cream }}>
            Signal — Kit de téléchargement
          </h1>
          <div style={{ height: "1px", backgroundColor: C.dim }} />
        </div>

        {/* Hero */}
        <Section label="Version principale">
          <LogoCard label="Horizontal · Dark · Référence">
            <SvgLockupALarge ref={refHero} />
          </LogoCard>
          <DownloadBar svgRef={refHero} name="horizontal-large-dark" />
        </Section>

        {/* Horizontal lockups */}
        <Section label="Lockup horizontal">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <LogoCard label="Dark">
                <SvgLockupA dark ref={refDarkH} />
              </LogoCard>
              <DownloadBar svgRef={refDarkH} name="horizontal-dark" />
            </div>
            <div>
              <LogoCard bg={C.cream} label="Clair">
                <SvgLockupA dark={false} ref={refLightH} />
              </LogoCard>
              <DownloadBar svgRef={refLightH} name="horizontal-clair" />
            </div>
          </div>
        </Section>

        {/* Vertical lockups */}
        <Section label="Lockup vertical">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <LogoCard label="Dark">
                <SvgLockupB dark ref={refDarkV} />
              </LogoCard>
              <DownloadBar svgRef={refDarkV} name="vertical-dark" />
            </div>
            <div>
              <LogoCard bg={C.cream} label="Clair">
                <SvgLockupB dark={false} ref={refLightV} />
              </LogoCard>
              <DownloadBar svgRef={refLightV} name="vertical-clair" />
            </div>
          </div>
        </Section>

        {/* Variantes */}
        <Section label="Variantes">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <LogoCard label="Compact — header / signature">
                <SvgLockupCompact ref={refCompact} />
              </LogoCard>
              <DownloadBar svgRef={refCompact} name="compact-dark" />
            </div>
            <div>
              <LogoCard label="Prestige — fond or">
                <SvgLockupPrestige ref={refPrestige} />
              </LogoCard>
              <DownloadBar svgRef={refPrestige} name="prestige-or" />
            </div>
          </div>
        </Section>

        {/* Symbol */}
        <Section label="Symbole autonome">
          <div>
            <LogoCard label="Favicon / icône — fond transparent">
              <div style={{ display: "flex", alignItems: "flex-end", gap: "32px" }}>
                {[0.6, 1.0, 1.6, 2.4].map(s => (
                  <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <SvgSymbol scale={s} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "8px", color: C.subtle, letterSpacing: "0.05em" }}>
                      {Math.round(s * 36)}px
                    </span>
                  </div>
                ))}
              </div>
            </LogoCard>
            {/* Download the 1× reference symbol */}
            <div style={{ display: "none" }}><SvgSymbol scale={1} ref={refSymbol} /></div>
            <DownloadBar svgRef={refSymbol} name="symbole-signal" />
          </div>
        </Section>

        {/* Business card */}
        <Section label="Application — carte de visite" accent>
          <div>
            <LogoCard label="Carte de visite 85×50mm">
              <SvgBusinessCard ref={refCard} />
            </LogoCard>
            <DownloadBar svgRef={refCard} name="carte-de-visite" />
          </div>
        </Section>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${C.dim}`, paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "9px", color: C.muted, letterSpacing: "0.1em" }}>
            Martins Systems — Signal Kit · SVG + PNG
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "9px", color: C.muted, letterSpacing: "0.1em" }}>
            Cormorant Garamond Light · Inter Light · 2026
          </span>
        </div>

      </div>
    </div>
  );
}

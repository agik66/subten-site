/* Subten — Tweaks wiring (hero variant, theme, accent) */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "Split",
  "theme": "dark",
  "accent": "#4FD389"
}/*EDITMODE-END*/;

const VARIANT_MAP = { "Centered": "A", "Split": "B", "Duo": "C" };
const ACCENTS = ["#4FD389", "#5AC8FA", "#E0A340", "#9B87E5", "#FF6B5E"];
const STRONG = {
  "#4FD389": "#2FBE6E", "#5AC8FA": "#2B9FE0", "#E0A340": "#C2851F",
  "#9B87E5": "#7C63D8", "#FF6B5E": "#E24B3D"
};
function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function SubtenTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    const hero = document.querySelector(".hero");
    if (hero) hero.setAttribute("data-variant", VARIANT_MAP[t.heroVariant] || "B");
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--accent-strong", STRONG[t.accent] || t.accent);
    r.style.setProperty("--accent-glow", hexA(t.accent, 0.55));
  }, [t.heroVariant, t.accent]);

  // The live site follows the OS color scheme (set in the <head> theme script),
  // so don't clobber data-theme on first mount — only when a designer actually
  // changes the Theme control inside the editor.
  const themeTouched = React.useRef(false);
  React.useEffect(() => {
    if (!themeTouched.current) { themeTouched.current = true; return; }
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero layout" />
      <TweakRadio label="Variant" value={t.heroVariant}
        options={["Centered", "Split", "Duo"]}
        onChange={(v) => setTweak("heroVariant", v)} />
      <TweakSection label="Appearance" />
      <TweakRadio label="Theme" value={t.theme}
        options={["dark", "light"]}
        onChange={(v) => setTweak("theme", v)} />
      <TweakColor label="Accent" value={t.accent}
        options={ACCENTS}
        onChange={(v) => setTweak("accent", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<SubtenTweaks />);

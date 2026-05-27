import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function BrochureDigital() {
  const [navHeight, setNavHeight] = useState(96);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  return (
    <div className="bg-[#fcfcfb] font-sans selection:bg-[#1a7d7a] selection:text-white">
      <Navbar />
      <div style={{ paddingTop: navHeight }}>
        <iframe
          src="/OLIV_AyudaVentas_v6_final (10).html"
          title="Brochure Digital OLIV"
          style={{
            width: "100%",
            height: `calc(100vh - ${navHeight}px)`,
            border: "none",
            display: "block",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

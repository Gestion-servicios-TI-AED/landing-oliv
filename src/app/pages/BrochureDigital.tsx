import { useEffect } from "react";

export default function BrochureDigital() {
  useEffect(() => {
    const root = document.getElementById("root")!;
    const originalBodyStyle = document.body.style.cssText;
    let container: HTMLDivElement | null = null;
    const injectedHead: Element[] = [];

    import("../../../public/brochure-digital/index.html?raw").then(
      ({ default: html }) => {
        const doc = new DOMParser().parseFromString(html, "text/html");

        doc.head.querySelectorAll("style, link").forEach((el) => {
          const clone = el.cloneNode(true) as Element;
          document.head.appendChild(clone);
          injectedHead.push(clone);
        });

        container = document.createElement("div");
        container.style.cssText = "position:fixed;inset:0;";
        container.innerHTML = doc.body.innerHTML;

        root.style.display = "none";
        document.body.style.cssText =
          "margin:0;padding:0;overflow:hidden;height:100vh;width:100vw;background:#141410;";
        document.body.appendChild(container);

        container.querySelectorAll("script").forEach((old) => {
          const s = document.createElement("script");
          s.textContent = old.textContent ?? "";
          old.replaceWith(s);
        });
      }
    );

    return () => {
      container?.remove();
      injectedHead.forEach((el) => el.remove());
      document.body.style.cssText = originalBodyStyle;
      root.style.display = "";
    };
  }, []);

  return null;
}

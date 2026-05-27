import html from "../../../public/brochure-digital/index.html?raw";
import { useEffect } from "react";

export default function BrochureDigital() {
  useEffect(() => {
    document.open();
    document.write(html);
    document.close();
  }, []);

  return null;
}

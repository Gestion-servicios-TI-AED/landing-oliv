import manualDatos from "@/app/content/manualDatos";

const isCapitulo = (line: string) =>
  /^CAPÍTULO\s+\d+[:.]/.test(line) || line.trim() === "PREÁMBULO";

const isSubtitle = (line: string) =>
  /^\d+\.\d+\.?\s+/.test(line.trim());

const isMinorTitle = (line: string) =>
  /^\d+\.\d+\.\d+\.?\s+/.test(line.trim());

export const ManualContent = () => {
  const lines = manualDatos
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const elements: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      elements.push(
        <p key={elements.length} className="font-sans font-light text-[15px] leading-relaxed text-[#2a2a2a]/80 mb-4">
          {paragraphBuffer.join(" ")}
        </p>
      );
      paragraphBuffer = [];
    }
  };

  lines.forEach((line) => {
    if (isCapitulo(line)) {
      flushParagraph();
      elements.push(
        <h2 key={elements.length} className="font-serif text-xl text-[#125755] mt-10 mb-3 border-b border-[#1a7d7a]/20 pb-2">
          {line}
        </h2>
      );
    } else if (isMinorTitle(line)) {
      flushParagraph();
      elements.push(
        <h4 key={elements.length} className="font-sans font-medium text-[14px] text-[#125755] mt-5 mb-2 uppercase tracking-wide">
          {line}
        </h4>
      );
    } else if (isSubtitle(line)) {
      flushParagraph();
      elements.push(
        <h3 key={elements.length} className="font-serif text-[17px] text-[#1a7d7a] mt-6 mb-2">
          {line}
        </h3>
      );
    } else {
      paragraphBuffer.push(line);
    }
  });

  flushParagraph();

  return (
    <article className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-28 pb-16">
      <h1 className="font-serif text-3xl text-[#125755] mb-2 leading-snug">
        Manual de Tratamiento de Datos Personales
      </h1>
      <p className="font-sans text-sm text-[#2a2a2a]/50 mb-10 tracking-wide uppercase">
        Macroproyecto Inmobiliario OLIV
      </p>
      {elements}
    </article>
  );
};

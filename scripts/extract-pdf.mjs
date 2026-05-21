import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { PDFParse } from "pdf-parse";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pdfPath = join(
  __dirname,
  "../public/MANUAL DE TRATAMIENTO DE DATOS PERSONALES DEL MACROPROYECTO INMOBILIARIO OLIV.pdf"
);

const outPath = join(__dirname, "../src/app/content/manualDatos.ts");
mkdirSync(dirname(outPath), { recursive: true });

const parser = new PDFParse();
const data = await parser.parse(readFileSync(pdfPath));
const text = data.pages.map((p) => p.lines.map((l) => l.text).join("\n")).join("\n\n");

const output = `const manualDatos = ${JSON.stringify(text)};\nexport default manualDatos;\n`;
writeFileSync(outPath, output, "utf8");
console.log(`Listo: ${data.pages.length} páginas, ${text.length} caracteres.`);

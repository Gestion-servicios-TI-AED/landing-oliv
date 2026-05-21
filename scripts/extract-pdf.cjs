const fs = require("fs");
const path = require("path");
const { default: pdfParse } = require("pdf-parse");

const pdfPath = path.join(
  __dirname,
  "../public/MANUAL DE TRATAMIENTO DE DATOS PERSONALES DEL MACROPROYECTO INMOBILIARIO OLIV.pdf"
);

const outPath = path.join(__dirname, "../src/app/content/manualDatos.ts");

fs.mkdirSync(path.dirname(outPath), { recursive: true });

pdfParse(fs.readFileSync(pdfPath)).then((data) => {
  const text = data.text;
  const output = `const manualDatos = ${JSON.stringify(text)};\nexport default manualDatos;\n`;
  fs.writeFileSync(outPath, output, "utf8");
  console.log(`Extraídas ${data.numpages} páginas, ${text.length} caracteres.`);
});

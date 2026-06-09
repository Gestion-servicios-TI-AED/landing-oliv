// create-pdf.cjs — combina los 22 slides en un PDF 16:9
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.join(__dirname, 'slides-capturas');
const OUT_FILE   = path.join(__dirname, 'Oliv Brochure.pdf');
const TOTAL      = 22;

// Tamaño de página 16:9 — equivalente a 1920×1080 px @ 96dpi → puntos
const PAGE_W = 1440; // 1920 × 72/96
const PAGE_H = 810;  // 1080 × 72/96

(async () => {
  const pdf = await PDFDocument.create();
  pdf.setTitle('OLIV Brochure Digital');
  pdf.setAuthor('AED Constructores');

  for (let i = 1; i <= TOTAL; i++) {
    const num  = String(i).padStart(2, '0');
    const file = path.join(SLIDES_DIR, `slide-${num}.png`);

    if (!fs.existsSync(file)) {
      console.warn(`  ⚠ no encontrado: slide-${num}.png — omitiendo`);
      continue;
    }

    const bytes = fs.readFileSync(file);
    const img   = await pdf.embedPng(bytes);

    const page  = pdf.addPage([PAGE_W, PAGE_H]);
    page.drawImage(img, { x: 0, y: 0, width: PAGE_W, height: PAGE_H });

    console.log(`  ✓ slide-${num}.png → página ${i}`);
  }

  const pdfBytes = await pdf.save();
  fs.writeFileSync(OUT_FILE, pdfBytes);

  const mb = (pdfBytes.length / 1024 / 1024).toFixed(1);
  console.log(`\nPDF creado (${mb} MB):\n  ${OUT_FILE}`);
})();

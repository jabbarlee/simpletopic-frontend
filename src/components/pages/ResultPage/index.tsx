import styles from "./index.module.css";
import { Baskervville, Inter } from "next/font/google";

export const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"], // Only 400 is available
  variable: "--font-baskervville",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you want to use
  variable: "--font-inter",
});

export default function ResultPage() {
  const explained = `
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  The CRISPR‑Cas9 system operates as a programmable endonuclease complex that introduces targeted double‑strand breaks in genomic DNA. Subsequent repair via non‑homologous end joining (NHEJ) or homology‑directed repair (HDR) enables site‑specific gene disruption or precise sequence insertion, respectively. Despite its versatility, off‑target cleavage remains a major concern, necessitating optimized guide‑RNA design and high‑fidelity Cas variants.
  `;

  const original = `
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  CRISPR‑Cas9 is like molecular scissors that scientists can aim at almost any gene. When the scissors cut, the cell fixes the break in one of two ways: a quick patch that usually messes up the gene, or a careful repair that lets scientists paste in new DNA. The tool is powerful but can sometimes snip the wrong spot, so researchers design smarter guides and safer versions of the scissors to keep edits precise. 
  `;

  return (
    <div className={`${baskervville.variable} ${styles.wrapper}`}>
      <section className={styles.leftPane}>
        <h2 className={styles.title}>Input</h2>
        <div className={`${inter.variable} ${styles.explainedText}`}>
          {explained}
        </div>
      </section>

      <section className={styles.rightPane}>
        <h2 className={styles.title}>Explanation</h2>
        <pre className={styles.originalText}>{original}</pre>
      </section>
    </div>
  );
}

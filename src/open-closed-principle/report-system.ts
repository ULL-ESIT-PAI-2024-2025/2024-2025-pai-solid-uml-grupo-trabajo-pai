/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 * 
 * @see {@link https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle}
*/

// Clase abstracta que define la estructura de un informe
abstract class CustomReport {
  protected content: string;

  constructor(content: string) {
    this.content = content;
  }

  // Método abstracto para generar el informe
  abstract generate(): string;
}

// Informe en formato PDF
class PDFReport extends CustomReport {
  generate(): string {
    return `[PDF] Contenido: ${this.content}`;
  }
}

// Informe en formato HTML
class HTMLReport extends CustomReport {
  generate(): string {
    return `<html><body>${this.content}</body></html>`;
  }
}

// Generador de informes (no se modifica al añadir nuevos formatos)
class ReportExporter {
  exportReport(report: CustomReport): string {
    return report.generate();
  }
}

// Ejemplo de uso
const pdfReport = new PDFReport("Datos financieros 2023");
const htmlReport = new HTMLReport("Datos financieros 2023");

const exporter = new ReportExporter();

console.log(exporter.exportReport(pdfReport)); // [PDF] Contenido: Datos financieros 2023
console.log(exporter.exportReport(htmlReport)); // <html><body>Datos financieros 2023</body></html>

/* Extensión del sistema (sin modificar código existente) */

// Nuevo formato: CSV (extensión)
class CSVReport extends CustomReport {
  generate(): string {
    return `CSV Data: "${this.content}"`;
  }
}

// Uso del nuevo formato
const csvReport = new CSVReport("Datos financieros 2023");
console.log(exporter.exportReport(csvReport)); // CSV Data: "Datos financieros 2023"
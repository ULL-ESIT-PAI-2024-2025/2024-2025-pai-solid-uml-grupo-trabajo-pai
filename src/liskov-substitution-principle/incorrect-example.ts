/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * Rectangle define un rectángulo con un ancho y un alto.
 * Square extiende Rectangle y define un cuadrado (que es un tipo de rectángulo).
 * 
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 */

class Rectangle {
  protected width: number;
  protected height: number;

  public setWidth(width: number) { 
    this.width = width; 
  }

  public setHeight(height: number) { 
    this.height = height; 
  }

  public getArea() { 
    return this.width * this.height; 
  }
}

class Square extends Rectangle {
  public setWidth(width: number) { 
    this.width = width; 
    this.height = width; 
  }

  public setHeight(height: number) { 
    this.width = height; 
    this.height = height; 
  }
}

function main() {
  let rectangle = new Rectangle();
  rectangle.setWidth(100);
  rectangle.setHeight(50);
  console.log(rectangle.getArea()); // 5000

  let square = new Square();
  square.setWidth(100);
  square.setHeight(50);
  console.log(square.getArea()); // 2500 (?)
}

main();
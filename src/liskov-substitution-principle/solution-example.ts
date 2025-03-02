/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * Shape es una clase abstracta que define el método getArea.
 * Rectangle y Square implementan Shape.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 */

abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  public setWidth(width: number) {
    this.width = width;
  }

  public setHeight(height: number) {
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  public setSide(side: number) {
    this.side = side;
  }

  public getArea(): number {
    return this.side * this.side;
  }
}

function main() {
  let rectangle: Shape = new Rectangle(100, 50);
  console.log(rectangle.getArea()); // 5000

  let square: Shape = new Square(100);
  console.log(square.getArea()); // 10000
}

main();
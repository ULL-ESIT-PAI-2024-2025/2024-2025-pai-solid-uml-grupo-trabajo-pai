/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * IOperation define el método calculate.
 * Sum, Subtract, y Multiply implementan IOperation.
 * Calculator recibe una lista de operaciones y las ejecuta sin conocer los detalles de cada una.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle}
*/

// Interface for operations
interface IOperation {
  calculate(a: number, b: number): number;
}

// Concrete operations
class Sum implements IOperation {
  calculate(a: number, b: number): number {
    return a + b;
  }
}

class Subtract implements IOperation {
  calculate(a: number, b: number): number {
    return a - b;
  }
}

class Multiply implements IOperation {
  calculate(a: number, b: number): number {
    return a * b;
  }
}

// Calculator class
class Calculator {
  private operations: IOperation[];

  constructor(operations: IOperation[]) {
    this.operations = operations;
  }

  calculateAll(a: number, b: number): number[] {
    return this.operations.map(op => op.calculate(a, b));
  }
}

// Usage
const operations = [new Sum(), new Subtract(), new Multiply()];
const calculator = new Calculator(operations);
console.log(calculator.calculateAll(10, 5)); // [15, 5, 50]

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to represent a bad usage of the SRP. This is an example of a bad 
 * class implementation. It implements functionalities on presentation and 
 * business logic layers
 */

/**
 * Class to handle matrix operations and printing
 */
class MatrixHandler {
  private result: number[][]

  /**
   * Class constructor
   */
  constructor() { this.result = []; }

  /**
   * Multiplies to matrixes
   * 
   * @param matrixA: First matrix to multiply.
   * @param matrixB: Second matrix to multiply.
   */
  public multiply(matrixA: number[][], matrixB: number[][]) {
    // Business logic: Multiply two matrices
    for (let i = 0; i < matrixA.length; i++) {
      this.result[i] = [];
      for (let j = 0; j < matrixB[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        this.result[i][j] = sum;
      }
    }
  }
  
  /**
   * Prints a matrix on the standard output
   */
  public display() {
    // Presentation logic: Render the resulting matrix to HTML
    this.result.forEach(row => {
      // Join row values with a space and print to the console
      console.log(row.join(" "));
    });
  }
}

/**
 * Usage example:
 */
function mainBadLayerImplementation() {
  const handler = new MatrixHandler();
  const matrixA = [
    [1, 2],
    [3, 4]
  ];
  const matrixB = [
    [5, 6],
    [7, 8]
  ];
  handler.multiply(matrixA, matrixB);
  handler.display();
}
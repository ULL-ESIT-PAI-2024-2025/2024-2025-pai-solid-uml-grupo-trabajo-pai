/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to represent a right usage of the SRP. This is an example of a good 
 * class implementation. It splits functionalities into two separated classes 
 */

/**
 * Class to handle the business logic of the matrixes
 */
class MatrixOperations {
  /**
   * Multiplies two matrixes
   * 
   * @param matrixA: First matrix to multiply
   * @param matrixB: Second matrix to multiply
   * @returns Result of the multiplication
   */
  multiply(matrixA: number[][], matrixB: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixB[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }
}

/**
 * Class to handle the presentation Logic: Displays the matrix on the console 
 * in plain text
 */
class MatrixView {
  /**
   * Prints a matrix on the standard output
   * 
   * @param matrix to print
   */
  display(matrix: number[][]) {
    matrix.forEach(row => {
      // Join row values with a space and print to the console
      console.log(row.join(" "));
    });
  }
}
  
/**
 * Usage example:
 */ 
function mainGoodLayerImplementation() {
  const matrixOps = new MatrixOperations();
  const matrixView = new MatrixView();  
  const matrix1 = [
    [1, 2],
    [3, 4]
  ];
  const matrix2 = [
    [5, 6],
    [7, 8]
  ];
  const result = matrixOps.multiply(matrix1, matrix2);
  matrixView.display(result);
}
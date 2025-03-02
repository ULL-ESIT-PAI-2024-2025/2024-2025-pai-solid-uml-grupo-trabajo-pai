/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to exeplify a bad use of inheritance over composition.
*/

/**
 * Represents a generic bird
 */
class BaseBird {
  /**
   * Makes the bird eat
   */
  eat() {
    console.log("The bird is eating.");
  }
  
  /**
   * Makes the bird fly
   */
  fly() {
    console.log("The bird is flying.");
  }
}

/**
 * Represents an ostrich as a type of bird
 */
class InheritingOstrich extends BaseBird {
  /**
   * Makes the ostrich fly. Wait... is that possible?
   */
  fly() {
    // Ostriches don't fly, but they are forced to implement this method
    throw new Error("Ostriches cannot fly.");
  }
}
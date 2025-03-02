/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to exemplify a good use of composition over inheritance.
*/

/**
 * Represents a generic animal
 */
class Animal {
  constructor() {  }
  /**
   * Makes the animal eat
   */
  eat() {
    console.log("is eating.");
  }
}

/**
 * Represents a flying bird
 */
class FlyingBird {
  /**
   * Makes the bird fly
   */
  fly() {
    console.log("The bird is flying.");
  }
}
  
/**
 * Represents a sparrow as an animal with the ability to fly
 */
class Sparrow extends Animal {
  constructor(private flyer: FlyingBird) { super() }

  /**
   * Makes the sparrow eat
   */
  eat() {
    console.log("The sparrow ");
    super.eat();
  }

  /**
   * Makes the sparrow fly
   */
  fly() {
    this.flyer.fly();
  }
}

/**
 * Represents an ostrich as an animal, but without the ability of flying
 */
class Ostrich extends Animal {
  /**
   * Makes the ostrich eat
   */
  eat() {
    console.log("The ostrich");
    super.eat();
  }
}

const sparrow = new Sparrow(new FlyingBird());
sparrow.fly(); // Only birds that actually fly have the ability to fly
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * A es una clase con un método print.
 * B extiende A y sobreescribe el método print.
 * callPrint recibe una instancia de A y llama al método print.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 */

class A {
  public print() {
    console.log("I'm a method from A");
  }
}
  
class B extends A {
  public print() {
    console.log("I'm a method from B");
  }
}

function callPrint(instanceOfA: A) {
  instanceOfA.print();
}

let exampleA: A = new A();
callPrint(exampleA); // I'm a method from A

let exampleB: A = new B();
callPrint(exampleB); // I'm a method from B
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
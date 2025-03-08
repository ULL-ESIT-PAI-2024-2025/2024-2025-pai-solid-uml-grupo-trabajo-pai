/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * Vehicle es una clase que representa un vehículo con un tanque de combustible.
 * ElectricCar es una clase que hereda de Vehicle, pero no usa combustible.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 */

class Vehicle {
  protected fuel: number;
  
  constructor() {
    this.fuel = 100;
  }
  
  public drive(): void {
    if (this.fuel <= 0) {
      console.log("Without fuel.");
      return;
    }
    this.fuel -= 10;
    console.log(`Driving... Fuel: ${this.fuel}`);
  }

  public refuel(): void {
    this.fuel = 100;
    console.log("Refueled!");
  }
}

// ElectricCar doesn't use fuel but it inherits from Vehicle
class ElectricCar extends Vehicle {
  constructor() {
    super();
  }

  public refuel(): void {
    throw new Error("Electric cars don't refuel.");
  }
}

function testVehicle(vehicle: Vehicle) {
  vehicle.drive();
  vehicle.refuel(); // Error if vehicle is a ElectricCar
}

const myCar = new Vehicle();
testVehicle(myCar); // OK

const myTesla = new ElectricCar();
testVehicle(myTesla); // Error!

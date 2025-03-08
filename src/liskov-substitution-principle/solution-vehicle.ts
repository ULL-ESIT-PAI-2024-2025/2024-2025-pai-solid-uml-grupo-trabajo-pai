/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * Drivable es una clase abstracta que define un método drive.
 * FuelCar y ElectricCar extienden Drivable y definen un coche de gasolina y un coche eléctrico, respectivamente.
 * testVehicle recibe un objeto Drivable y llama al método drive.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 */

abstract class Drivable {
  abstract drive(): void;
}

class FuelCar extends Drivable {
  protected fuel: number;

  constructor() {
    super();
    this.fuel = 100;
  }

  public drive(): void {
    if (this.fuel <= 0) {
      console.log('Without fuel.');
      return;
    }
    this.fuel -= 10;
    console.log('Driving...');
  }

  public refuel(): void {
    this.fuel = 100;
    console.log("Refueled!");
  }
}

class ElectricCar extends Drivable {
  protected battery: number;

  constructor() {
    super();
    this.battery = 100;
  }

  public drive(): void {
    if (this.battery <= 0) {
      console.log('Without battery.');
      return;
    }
    this.battery -= 10;
    console.log('Driving...');
  }

  public recharge(): void {
    this.battery = 100;
    console.log('Recharged!');
  }
}

// Now testVehicle works with any Drivable object
function testVehicle(vehicle: Drivable) {
  vehicle.drive();
}

const myCar = new FuelCar();
testVehicle(myCar); // Works correctly

const myTesla = new ElectricCar();
testVehicle(myTesla); // Also works correctly
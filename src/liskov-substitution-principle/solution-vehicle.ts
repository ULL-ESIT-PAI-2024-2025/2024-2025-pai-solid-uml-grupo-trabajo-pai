abstract class Drivable {
  abstract drive(): void;
  abstract re
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
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

class Truck extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  tow(vehicle: Truck): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} is being towed.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to tow.`);
    }
  }

  override printDetails(): void {
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    super.printDetails();
    // console.log(`Vehicle started: ${this.started}`);
    // console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(
      `Wheels: ${this.wheels
        .map(
          (wheel, index) =>
            `Wheel ${index + 1}: Diameter - ${wheel.getDiameter}, Brand - ${wheel.getTireBrand}`
        )
        .join(", ")}`
    );
  }
}

export default Truck;

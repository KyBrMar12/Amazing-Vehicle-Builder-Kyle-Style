// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
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
    super(vin, color, make, model, year, weight, topSpeed);
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // TODO: Implement the tow method from the AbleToTow interface
  // TODO: The method should accept a vehicle of type Truck, Motorbike, or Car
  // TODO: The method should log the make and model of the vehicle being towed if the weight is less than or equal to the towing capacity
  // TODO: If the weight exceeds the towing capacity, log that the vehicle is too heavy to tow
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} is being towed.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to tow.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  printDetails(): void {
    super.printDetails();
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

// TODO: Export the Truck class as the default export
export default Truck;
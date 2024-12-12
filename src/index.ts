// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// TODO: uncomment once trucks are implemented
const truck1 = new Truck(
  Cli.generateVin(), // VIN
  "Ford",            // Make
  "F-150",           // Model
  5000,              // Weight
  120,               // Top speed
  [new Wheel(), new Wheel(), new Wheel(), new Wheel()], // Wheels
  10000              // Towing capacity
);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(), // VIN
  "Toyota",          // Make
  "Camry",           // Model
  3000,              // Weight
  "blue",            // Color
  2021,              // Year
  130,               // Top speed
  []                 // Wheels
);

// TODO: uncomment once motorbikes are implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),       // VIN
  "Harley Davidson",       // Make
  "Sportster",             // Model
  500,                     // Weight
  125,                     // Top speed
  motorbike1Wheels         // Wheels
);

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();

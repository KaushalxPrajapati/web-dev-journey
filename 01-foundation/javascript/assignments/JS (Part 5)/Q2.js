// Qs2. Create an object representing a car that stores the following
// properties for the car: name, model, color.
// Print the car's name.

let car = {
  name: "Maruti Suzuki",
  model: "Dzire",
  color: "White"
};

// Access the 'name' property using dot notation.
// This is the most common way to access properties.
console.log(car.name);

// Access the 'name' property using bracket notation.
// This method is useful when the property name is stored in a variable
// or contains special characters (like "engine type").
console.log(car["name"]);
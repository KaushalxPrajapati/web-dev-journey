function CarsList() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return (
        <div>
            <h1>My Cars List</h1>
            <ul>
                {/* 
                  - .map() iterates through the array and returns a new <li> JSX element for each car.
                  - 'key' is mandatory: React uses it to track which items change, move, or delete.
                  - Always use a unique identifier (like an ID or unique string) rather than array index.
                */}
                {cars.map((car) => (
                    <li key={car}>{car}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarsList;

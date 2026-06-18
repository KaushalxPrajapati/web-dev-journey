function CarsList() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return (
        <div>
            <h1>My Cars List</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car}>{car}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarsList;

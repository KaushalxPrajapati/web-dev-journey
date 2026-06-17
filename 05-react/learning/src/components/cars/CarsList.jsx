function CarsList() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <h1>My Cars</h1>
            <ul>
                {cars.map((car) => (
                    <li>{car}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarsList;

function CarsObject() {
    const myobj = {
        name: 'Fiat',
        model: '500',
        color: 'white',
    };
    return (
        <>
            <h1>
                My car is a {myobj.color} {myobj.name} {myobj.model}
            </h1>
        </>
    );
}

export default CarsObject;

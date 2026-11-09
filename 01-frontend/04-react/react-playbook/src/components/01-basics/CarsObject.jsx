function CarsObject() {
    const myobj = {
        name: 'Fiat',
        model: '500',
        color: 'white',
    };

    return (
        <>
            {/* 
              In React, you cannot render raw objects like <h1>{myobj}</h1>.
              You must access individual primitive properties (string, number, etc.)
            */}
            <h1>
                My car is a {myobj.color} {myobj.name} {myobj.model}
            </h1>
        </>
    );
}

export default CarsObject;

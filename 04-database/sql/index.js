const { faker } = require('@faker-js/faker');

// Get the Client
const mysql = require('mysql2');

// Create the connection to database
// typeof connection is 'object'
const connection = mysql.createConnection({
    user: 'root',
    password: '123456',
    host: 'localhost',
    database: 'test',
});

let q = 'SHOW TABLES';

try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        // We have the list of tables
        let tables = [];
        for (let i = 0; i < result.length; i++) {
            tables.push(result[i][0]);
        }

        console.log('Tables:', tables);

        // Check if there is a table named 'users'
        if (!tables.includes('users')) {
            console.log("Table 'users' does not exist");
            connection.end();
        } else {
            let values = [];
            for (let i = 0; i < 100; i++) {
                let row = getRandomUser(); // This returns [uuid, username, email, password]
                values.push(row);
            }

            let insertQuery = 'INSERT INTO users (id, username, email, password) VALUES ?';
            connection.query(insertQuery, [values], (err, result) => {
                if (err) throw err;
                console.log('Rows inserted:', result.affectedRows);
                connection.end();
            });
        }
    });
} catch (err) {
    console.log(err);
}

let getRandomUser = () => {
    return [faker.string.uuid(), faker.internet.username(), faker.internet.email(), faker.internet.password()];
};

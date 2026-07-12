-- Always use the `USE` statement to select a database before executing any SQL statement. This helps in avoiding confusion and ensures that the SQL statements are executed
USE test;

CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

SHOW TABLES;

SELECT * FROM

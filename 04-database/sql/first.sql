USE instagram;

DROP TABLE user if exists;

CREATE TABLE user (
	id int,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    followers int,
    following int
);

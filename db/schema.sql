DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE organization (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(60) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(3) NOT NULL,
    zip INT(5) NULL,
    phone_number INTEGER(15) NULL,
    website VARCHAR(500) NULL,
    food BOOLEAN DEFAULT false,
    health_care BOOLEAN DEFAULT false,
    daily_care BOOLEAN DEFAULT false,
    shelter BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

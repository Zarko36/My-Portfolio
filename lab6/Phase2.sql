-- Drop the TrackingInfo table if it exists
DROP TABLE IF EXISTS TrackingInfo;

-- Drop the RentalOrder table if it exists
DROP TABLE IF EXISTS RentalOrder;

-- Drop the Catalog table if it exists
DROP TABLE IF EXISTS Catalog;

-- Drop the User table if it exists
DROP TABLE IF EXISTS User;

-- Create the User table
CREATE TABLE User (
    login CHAR(15),                -- Unique login identifier for the user
    password CHAR(50) NOT NULL,    -- Password for the user account
    phoneNumber CHAR(60) NOT NULL, -- User's phone number
    role CHAR(10) NOT NULL,        -- Role of the user (e.g., admin, customer)
    favGames CHAR(500),            -- User's favorite games
    numOverdueGames INT NOT NULL,  -- Number of overdue games the user has
    PRIMARY KEY (login)            -- Primary key constraint on login
);

-- Create the Catalog table
CREATE TABLE Catalog (
    gameName CHAR(50) NOT NULL,    -- Name of the game
    genre CHAR(40) NOT NULL,       -- Genre of the game
    price FLOAT NOT NULL,          -- Price of the game
    description CHAR(600),         -- Description of the game
    imageURL CHAR(256),            -- URL to the game's image
    PRIMARY KEY (gameName)         -- Primary key constraint on gameName
);

-- Create the RentalOrder table
CREATE TABLE RentalOrder (
    login CHAR(50) NOT NULL,        -- Login of the user who placed the order
    orderTimestamp TIMESTAMP NOT NULL, -- Timestamp when the order was placed
    dueDate TIMESTAMP NOT NULL,     -- Due date for the rental
    rentalOrderID CHAR(60) NOT NULL, -- Unique identifier for the rental order
    totalPrice FLOAT NOT NULL,      -- Total price of the rental order
    PRIMARY KEY (rentalOrderID)     -- Primary key constraint on rentalOrderID
);

-- Create the TrackingInfo table
CREATE TABLE TrackingInfo (
    trackingID CHAR(50),            -- Unique identifier for the tracking info
    status CHAR(40) NOT NULL,       -- Status of the shipment
    currentLocation CHAR(60) NOT NULL, -- Current location of the shipment
    lastUpdateDate TIMESTAMP NOT NULL, -- Last update timestamp of the tracking info
    rentalOrderID CHAR(50) NOT NULL REFERENCES RentalOrder(rentalOrderID), -- Foreign key referencing rentalOrderID in RentalOrder table
    courierName CHAR(800) NOT NULL, -- Name of the courier
    additionalComments TEXT,        -- Additional comments about the shipment
    PRIMARY KEY (trackingID)        -- Primary key constraint on trackingID
);

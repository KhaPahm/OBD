-- CREATE TABLE Vehicle
-- (
--   Vehicle_name CHAR(10) NOT NULL,
--   I1 VARCHAR(50) NOT NULL,
--   I2 VARCHAR(50) NOT NULL,
--   I3 VARCHAR(50) NOT NULL,
--   I4 VARCHAR(50) NOT NULL,
--   I5 VARCHAR(50) NOT NULL,
--   I6 VARCHAR(50) NOT NULL,
--   I7 VARCHAR(50) NOT NULL,
--   I8 VARCHAR(50) NOT NULL,
--   I9 VARCHAR(50) NOT NULL,
--   I10 VARCHAR(50) NOT NULL,
--   I11 VARCHAR(50) NOT NULL,
--   I12 VARCHAR(50) NOT NULL,
--   I13 VARCHAR(50) NOT NULL,
--   I14 VARCHAR(50) NOT NULL,
--   I15 VARCHAR(50) NOT NULL,
--   PRIMARY KEY (Vehicle_name)
-- );

-- CREATE TABLE User
-- (
--   User_name VARCHAR(50) NOT NULL,
--   Password VARCHAR(255) NOT NULL,
--   Role INT NOT NULL,
--   Address VARCHAR(255) NOT NULL,
--   PRIMARY KEY (User_name)
-- );

-- CREATE TABLE SetUp
-- (
--   ColunmName CHAR(3) NOT NULL,
--   Value VARCHAR(30) NOT NULL,
--   State BOOLEAN  NOT NULL,
--   Vehicle_name CHAR(10) NOT NULL,
--   PRIMARY KEY (ColunmName, Vehicle_name),
--   FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
-- );

-- CREATE TABLE SetUpInfor
-- (
--   ColunmName CHAR(3) NOT NULL,
--   Value VARCHAR(30) NOT NULL,
--   Vehicle_name CHAR(10) NOT NULL,
--   PRIMARY KEY (ColunmName, Vehicle_name),
--   FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
-- );

-- CREATE TABLE DataSection
-- (
--   ID_section INT NOT NULL,
--   Moment VARCHAR NOT NULL,
--   Name CHAR(10) NOT NULL,
--   PRIMARY KEY (ID),
--   FOREIGN KEY (Name) REFERENCES Vehicle(Vehicle_name)
-- );

-- CREATE TABLE Handle
-- (
--   User_name VARCHAR(50) NOT NULL,
--   Vehicle_name CHAR(10) NOT NULL,
--   PRIMARY KEY (User_name, Vehicle_name),
--   FOREIGN KEY (User_name) REFERENCES User(User_name),
--   FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
-- );

-- CREATE TABLE Data
-- (
--   Time DATE NOT NULL,
--   S1 FLOAT NOT NULL,
--   S2 FLOAT NOT NULL,
--   S3 FLOAT NOT NULL,
--   S4 FLOAT NOT NULL,
--   S5 FLOAT NOT NULL,
--   S6 FLOAT NOT NULL,
--   S7 FLOAT NOT NULL,
--   S8 FLOAT NOT NULL,
--   S9 FLOAT NOT NULL,
--   S10 FLOAT NOT NULL,
--   S11 FLOAT NOT NULL,
--   S12 FLOAT NOT NULL,
--   S13 FLOAT NOT NULL,
--   S14 FLOAT NOT NULL,
--   S15 FLOAT NOT NULL,
--   S16 FLOAT NOT NULL,
--   S17 FLOAT NOT NULL,
--   S18 FLOAT NOT NULL,
--   S19 FLOAT NOT NULL,
--   S20 FLOAT NOT NULL,
--   S21 FLOAT NOT NULL,
--   S22 FLOAT NOT NULL,
--   S23 FLOAT NOT NULL,
--   S24 FLOAT NOT NULL,
--   S25 FLOAT NOT NULL,
--   S26 FLOAT NOT NULL,
--   S27 FLOAT NOT NULL,
--   S28 FLOAT NOT NULL,
--   S29 FLOAT NOT NULL,
--   S30 FLOAT NOT NULL,
--   S31 FLOAT NOT NULL,
--   S32 FLOAT NOT NULL,
--   S33 FLOAT NOT NULL,
--   S34 FLOAT NOT NULL,
--   S35 FLOAT NOT NULL,
--   S36 FLOAT NOT NULL,
--   S37 FLOAT NOT NULL,
--   S38 FLOAT NOT NULL,
--   S39 FLOAT NOT NULL,
--   S40 FLOAT NOT NULL,
--   Vehicle_name CHAR(10) NOT NULL,
--   ID_section INT NOT NULL,
--   FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name),
--   FOREIGN KEY (ID_section) REFERENCES DataSection(ID_section)
-- );


----------------------------------------
CREATE TABLE Vehicle
(
  Vehicle_name CHAR(11) NOT NULL,
  Don_vi_QL VARCHAR(50) NOT NULL,
  Type VARCHAR(50) NOT NULL,
  VIN_number VARCHAR(50) NOT NULL,
  Engine VARCHAR(50) NOT NULL,
  Last_fix VARCHAR(50) NOT NULL,
  Phone_number VARCHAR(50) NOT NULL,
  Driver VARCHAR(50) NOT NULL,
  Year_of_manufacture VARCHAR(50) NOT NULL,
  Engine_number VARCHAR(50) NOT NULL,
  Mining_time VARCHAR(50) NOT NULL,
  History_fix VARCHAR(50) NOT NULL,
  Registration_deadline VARCHAR(50) NOT NULL,
  PRIMARY KEY (Vehicle_name)
);

CREATE TABLE User
(
  User_name VARCHAR(50) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Role INT NOT NULL,
  Address VARCHAR(255) NOT NULL,
  PRIMARY KEY (User_name)
);

CREATE TABLE SetUp
(
  ColunmName CHAR(3) NOT NULL,
  Value CHAR(30) NOT NULL,
  State BOOLEAN NOT NULL,
  Vehicle_name CHAR(11) NOT NULL,
  PRIMARY KEY (Vehicle_name, ColunmName),
  FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
);

CREATE TABLE Handle
(
  User_name VARCHAR(50) NOT NULL,
  Vehicle_name CHAR(11) NOT NULL,
  PRIMARY KEY (User_name, Vehicle_name),
  FOREIGN KEY (User_name) REFERENCES User(User_name),
  FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
);

CREATE TABLE Data
(
  ID INT NOT NULL AUTO_INCREMENT,
  Time DATE,
  S1 FLOAT,
  S2 FLOAT,
  S3 FLOAT,
  S4 FLOAT,
  S5 FLOAT,
  S6 FLOAT,
  S7 FLOAT,
  S8 FLOAT,
  S9 FLOAT,
  S10 FLOAT,
  S11 FLOAT,
  S12 FLOAT,
  S13 FLOAT,
  S14 FLOAT,
  S15 FLOAT,
  S16 FLOAT,
  S17 FLOAT,
  S18 FLOAT,
  S19 FLOAT,
  S20 FLOAT,
  S21 FLOAT,
  S22 FLOAT,
  S23 FLOAT,
  S24 FLOAT,
  S25 FLOAT,
  S26 FLOAT,
  S27 FLOAT,
  S28 FLOAT,
  S29 FLOAT,
  S30 FLOAT,
  S31 FLOAT,
  S32 FLOAT,
  S33 FLOAT,
  S34 FLOAT,
  S35 FLOAT,
  S36 FLOAT,
  S37 FLOAT,
  S38 FLOAT,
  S39 FLOAT,
  S40 FLOAT,
  Vehicle_name CHAR(11) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (Vehicle_name) REFERENCES Vehicle(Vehicle_name)
);
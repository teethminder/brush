CREATE TABLE IF NOT EXISTS users (
    userID varchar(255) NOT NULL,
    firstName varchar(32) NOT NULL,
    middleName varchar(32) DEFAULT NULL,
    surname varchar(32) NOT NULL,
    email varchar(32) NOT NULL,
    password varchar(255) DEFAULT NULL,
    profilePicture varchar(32) NOT NULL,
    createdAt timestamp with time zone NOT NULL,
    deactivatedAt timestamp with time zone NOT NULL,
    updatedAt timestamp with time zone NOT NULL,
    CONSTRAINT userID PRIMARY KEY (userID)
);

CREATE TABLE IF NOT EXISTS user_password_reset (
    resetID varchar(255) NOT NULL,
    userID varchar(255) NOT NULL,
    hash varchar(255) DEFAULT NULL,
    usedAt timestamp DEFAULT NULL,
    createdAt timestamp NOT NULL,
    PRIMARY KEY (resetID)
);

CREATE TABLE IF NOT EXISTS brush_activity (
    activityID varchar(255) NOT NULL,
    userID varchar(255) NOT NULL,
    createdAt timestamp with time zone NOT NULL,
    PRIMARY KEY (activityID)
);

CREATE TABLE IF NOT EXISTS user_preference (
    preferenceID varchar(255) NOT NULL,
    userID varchar(255) NOT NULL,
    morningBrushAt timestamp with time zone,
    nightBrushAt timestamp with time zone,
    PRIMARY KEY (preferenceID)
);

ALTER TABLE IF EXISTS user_password_reset
    ADD CONSTRAINT userID FOREIGN KEY (userID)
    REFERENCES "users" (userID) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS brush_activity
    ADD FOREIGN KEY (userID)
    REFERENCES "users" (userID) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS user_preference
    ADD CONSTRAINT userID FOREIGN KEY (userID)
    REFERENCES "users" (userID) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
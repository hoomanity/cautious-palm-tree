import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "blog",
});

// Explicitly attempting to connect
db.connect((err) => {
    if (err) {
        console.error("ERROR: Database failed to connect", err);
    } else {
        console.log("Database is connected");
    }
});

// Listening for any errors after the initial connection
db.on("error", (err) => {
    console.error("ERROR: Database connection error", err);
});

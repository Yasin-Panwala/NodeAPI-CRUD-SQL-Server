exports.dbConnection = function () {
    var dbConfig = {
        user: "sa", // SQL Server Login
        password: "vision", // SQL Server Password
        server: "DESKTOP-78L7I55", // SQL Server Server name
        database: "Student" // SQL Server Database name
    };
    return dbConfig;
};
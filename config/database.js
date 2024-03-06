const mongoose = require("mongoose");
const { databaseOptions, databaseUrl } = require("./config")
module.exports = async () => {
    await mongoose.connect(databaseUrl, databaseOptions)
        .then(() => console.log("Databse is connected"))
        .catch((error) => console.log("Error on connecting database", error.message))
}
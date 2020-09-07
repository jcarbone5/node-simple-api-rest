const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost/node-mongodb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB is conected");
    } catch (error) {
        console.log(error);
    }
}

connect();
const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("DEBUG: Connecting to MongoDB");
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DEBUG: MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
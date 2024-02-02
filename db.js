const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://admin:<password>@cluster0.6wimzff.mongodb.net/resume_db?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection Successed");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;

const connectToMongoose = require("./database/db");
const morgan = require("morgan");
require("dotenv").config({ path: "./.env" });



const cors = require("cors");
const express = require("express");

connectToMongoose();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: `http://localhost:3000`,
};

app.use(cors(corsOptions));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.json());


app.use('/employee', require('./routes/employee.route'));



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
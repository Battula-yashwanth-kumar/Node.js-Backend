require("dotenv").config(); 
const mongoose = require("mongoose");
// ^^^ remember

const url = process.env.DATABASE_URL;
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log(err));

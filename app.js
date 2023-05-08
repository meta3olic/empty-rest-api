import chalk from "chalk";
import express from "express";
import * as mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./Routes/index.js";

const app = express();

const {PORT, DB_URL} = process.env;

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, function() {
			console.log(chalk.blue(`Server has been started on port ${PORT}`));
		});
	} catch(e) {
		console.log(chalk.red(e));
	}
}

await startApp();

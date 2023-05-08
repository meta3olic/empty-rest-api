import chalk from "chalk";
import express from "express";
import * as mongoose from "mongoose";

import { Post } from "./Models/index.js";

const app = express();

const {PORT, DB_URL} = process.env;

app.use(express.json());

app.post("/", async function(req, res) {
	try {
		const {author, title, content, picture} = req.body;
		const post = await Post.create({author, title, content, picture});
		await post.save();
		res.json(post);
	} catch(e) {
		res.status(500).json(e);
	}
});

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

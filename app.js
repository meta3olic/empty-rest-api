import chalk from "chalk";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/", function(req, res) {
	res.json(req.body);
});

app.listen(port, function() {
	console.log(chalk.blue(`Server has been started on port ${port}`));
});

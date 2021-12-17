import * as express from 'express';

const app = express.default();

const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(PORT, () => {
	console.log('server started at http://localhost:' + PORT);
});

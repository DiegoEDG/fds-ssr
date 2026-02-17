const path = require('path');
const fs = require('fs/promises');
const express = require('express');

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use('/css', express.static(path.join(PUBLIC_DIR, 'css')));
app.use('/assets', express.static(path.join(PUBLIC_DIR, 'assets')));

app.get('/', (req, res) => {
	res.status(200).json({
		status: 'ok',
		service: 'fds-ssr',
		uptimeSeconds: Math.floor(process.uptime()),
		timestamp: new Date().toISOString()
	});
});

app.get('/homepage', async (req, res, next) => {
	try {
		const homepagePath = path.join(__dirname, 'homepage.html');
		const html = await fs.readFile(homepagePath, 'utf8');

		res.status(200).type('html').send(html);
	} catch (err) {
		next(err);
	}
});

app.listen(PORT, () => {
	console.log(`SSR server running on http://localhost:${PORT}`);
});

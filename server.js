const path = require('path');
const fs = require('fs/promises');
const express = require('express');
const { logServerStart } = require('./utilities/startupBanner');

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use('/css', express.static(path.join(PUBLIC_DIR, 'css')));
app.use('/assets', express.static(path.join(PUBLIC_DIR, 'assets')));

app.get('/', async (req, res, next) => {
  try {
    const indexPath = path.join(__dirname, 'index.html');
    const html = await fs.readFile(indexPath, 'utf8');

    res.status(200).type('html').send(html);
  } catch (err) {
    next(err);
  }
});

app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'fds-ssr',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.get(['/homepage'], async (req, res, next) => {
  try {
    const homepagePath = path.join(__dirname, 'src', 'pages', 'homepage.html');
    const html = await fs.readFile(homepagePath, 'utf8');

    res.status(200).type('html').send(html);
  } catch (err) {
    next(err);
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    logServerStart({ port: PORT });
  });
}

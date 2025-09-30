import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  let filePath;

  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(PORT, 'localhost', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

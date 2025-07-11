//path.join() --> Helps building correct file paths & that works on every OS
//callback.url --> to get the url
//callback.writeHead() --> to send status code & content type
//callback.setHeader() --> let's you write content type
//callback.method --> to get the method type (e.g: GET, POST, DELETE, UPDATE etc.)
//.gitignore --> Here you can store files which you don't want to add to yout githhub repo
//server.listen() --> listens what the user is requesting
//Async --> makes a program asynchronus which means "Hey JS this function will take some time so don't block other programs -- let others run while it finishes"
//await --> wait for this promise to finish before moving on

import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;

      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-type", "text/html");
      res.write(data);
      res.end();
      
    } else {
      throw new Error("Method is not allowed");
    }
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const http = require('http');
// const url = require("url");

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.setHeader("content-type","application/json")
    
//     if (req.method !== 'GET') {
//         res.end(`{"Message": "Route doesnt exist"}`)
//     } else {
//         if (req.url === '/') {
//            res.end(`
//            {"slackUsername": "Splashray","age": 22,"backend": true ,"bio": "I am a software Developer,
//            passionate about building software that solves daily human problems using strong analytical, critical-thinking skills,
//            and technological strategies."}
//            `)
//         }
//     }
//     });

// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// })


const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT || 8000;

// Reading our json file
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
// Creating the web server
const server = http.createServer((req, res) => {
  const endpoint = req.url;
  if (endpoint === "/" || endpoint === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });

    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

// Listening on a port
const port = 8000;
server.listen(PORT, "localhost");

const http = require('http');
const url = require("url");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("content-type","application/json")
    if (req.method !== 'GET') {
        res.end(`{"error": "error in routes"}`)
    } else {
        if (req.url === '/') {
           res.end(`{"slackUsername":"Splashray","age": 22,"backend": true ,"bio":" I'm passionate about building, growing and collaborating with teams"}`)
        }
    }
    });



server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})



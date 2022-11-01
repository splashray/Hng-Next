const http = require('http');
const url = require("url");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("content-type","application/json")
    if (req.method !== 'GET') {
        res.end(`{"Message": "Rotues doesnt exist"}`)
    } else {
        if (req.url === '/') {
           res.end(`
           {
           
           "slackUsername": "Splashray",
           "age": 22,
           "backend": true ,
           "bio": "I am a software Developer,
           passionate about building software that solves daily human problems using strong analytical, critical-thinking skills,
           and technological strategies. I'm also a fast learner and growth enthusiast and I believe communication and collaboration 
           in any team are essential to achieving a common goal."
           
           }
           `)
        }
    }
    });

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

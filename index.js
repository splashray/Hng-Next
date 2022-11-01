const http = require('http');
const url = require("url");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("content-type","application/json")
    if (req.method !== 'GET') {
        res.end(`{"error": "error in routes"}`)
    } else {
        if (req.url === '/') {
           res.end(`
           {"slackUsername": "Splashray",
           "age": 22,
           "backend": true ,
           "bio": "I am a software Developer,
           passionate about building software that solves daily human problems using strong analytical, critical-thinking skills,
           and technological strategies. I'm also a fast learner and growth enthusiast and I believe communication and collaboration 
           in any team are essential to achieving a common goal."}
           `)
        }
    }
    });

//  if (req.method == 'GET' && req.url == '/' ) 
//         res.setHeader("content-type","application/json")
//         res.write(`{
//             "slackUsername":"Philip Daudu","age": 22,"backend": true, 
//             "bio":" I'm passionate about building, growing and collaborating with teams"
//            }`)
    
//         res.end();
// })

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

const http = require('http');
const requestListener = (req, res)=>{
        const responseData = {
            slackUsername:"Splashray",
            backend: true, 
            age: 22,
            bio: "I am a software Developer, passionate about building software that solves daily human problems using strong analytical, critical-thinking skills, and technological strategies. I'm also a fast learner and growth enthusiast and I believe communication and collaboration in any team are essential to achieving a common goal.",
        }
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
};

const port = process.env.PORT || 3000

const server = http.createServer(requestListener);
server.listen(port,'localhost', function(){
	console.log("Server is Listening at Port 3000!");
});

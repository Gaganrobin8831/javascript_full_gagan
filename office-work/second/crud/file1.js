var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('home.html', function (err,data)
        {
            res.end(data);
        });
})



const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

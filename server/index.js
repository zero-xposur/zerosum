const server = require('./server');
const fs = require('fs');
const https = require('https');

const port = process.env.PORT || 3000;

// https explanation:
// https://timonweb.com/posts/running-expressjs-server-over-https/
https
    .createServer(
        {
            key: fs.readFileSync('server.key'),
            cert: fs.readFileSync('server.cert'),
        },
        server
    )
    .listen(port, () => console.log(`listening on port ${port}`));

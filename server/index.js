const server = require('./server');

const port = process.env.PORT || 3000;

if (port === 3000) {
    const fs = require('fs');
    const https = require('https');
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
} else {
    server.listen(port, () => console.log(`listening on port${port}`));
}

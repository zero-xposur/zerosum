const server = require('./server');
const { sync } = require('./db');

const port = process.env.PORT || 3000;

sync();

server.listen(port, () => console.log(`listening on port ${port}`));

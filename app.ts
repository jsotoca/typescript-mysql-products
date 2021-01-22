import Server from './src/server/server';
const server = new Server();

import MySQL from './src/configuration/database';

server.start();

// MySQL.doQuery("SELECT * from products")
// .then(result => console.log(result))
// .catch(err => console.log(err));

// MySQL.doQuery("SELECT * from products where id = ?",[1])
// .then(result => console.log(result))
// .catch(err => console.log(err));
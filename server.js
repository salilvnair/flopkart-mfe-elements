const express = require('express');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'dist')))

let port = process.env.PORT || 8080;
app.listen(port)

console.log('Express listening to :'+port);

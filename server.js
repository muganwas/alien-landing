require('dotenv').config();
require('rootpath')();
const livereload = require('livereload');
const connectLiveReload = require("connect-livereload");
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const errorHandler = require('./_helpers/error-handler');

//const httpServer = require('http').createServer({}, app);
const PORT = process.env.NODE_ENV === 'development' ? (process.env.PORT || 8080) : 80;

/** middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/** controllers */
// app.use('/api/v1/users', require('./controllers/users.controller'));
// app.use('/api/v1/companies', require('./controllers/companies.controller'));
// app.use('/api/v1/agencies', require('./controllers/agencies.controller'));
// app.use('/api/v1/campaigns', require('./controllers/campaigns.controller'));
// app.use('/api/v1/categories', require('./controllers/categories.controller'));
// app.use('/api/v1/nominations', require('./controllers/nominations.controller'));
// app.use('/admin', require('./controllers/admin.views.controller'));
app.use('/', require('./controllers/main.controller'));

app.use(express.static(__dirname + '/public'));
// app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
    const livereloadServer = livereload.createServer();
    livereloadServer.watch(__dirname + "/public");
    livereloadServer.server.once("connection", () => {
        setTimeout(() => {
            livereloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
    app.listen(PORT, function () {
        console.log('Server listening on port: ' + PORT);
    });
} else {
    app.listen();
}




var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();

const Sentry = require('@sentry/node');

var Inventory = {
    hammer: {
        inventory: 2
    },
    nails: {
        inventory: 2
    },
    screwdriver: {
        inventory: 2
    }
}

Sentry.init({ dsn: 'https://dddc44f682974e31af4331d292f3055c@sentry.io/300067'});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.post('/checkout', function (req, res, next) {
    // res.json({
    //     msg: 'This is CORS-enabled for all origins!POST'
    // })
    var transactionId = req.header('X-Transaction-ID');
    console.log("transactionid is : " + transactionId)
    Sentry.configureScope(scope => {
        scope.setTag("transaction_id", transactionId);
    });
    // throw new Error('Broke!');
    res.send('abc');
    // next(new Error('Sample Error 2'));
});

// The error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());

app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001');
});

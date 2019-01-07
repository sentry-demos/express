const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
var app = express();

// Initalize Sentry (import library and instantiate)
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://276b9c69b15b41a3ae98d07206889b24@sentry.io/1366275'});

let Inventory = {
    wrench: {
        inventory: 0
    },
    nails: {
        inventory: 0
    },
    hammer: {
        inventory: 1
    }
};

let checkout = (cart) => {
    let tempInventory = Inventory;

    // check if we have enough Inventory
    cart.forEach((item) => {
        if (tempInventory[item.id].inventory <= 0) {
            throw Error("No inventory for " + item.id);
        }
        tempInventory[item.id].inventory--;
    });

    // update Inventory if we have enough to fulfill this order
    Inventory = tempInventory;
};

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

app.use(bodyParser.json());
app.use(cors());

app.all('*', function (req, res, next) {
    let transactionId = req.header('X-Transaction-ID'),
        order = req.body;

    if (transactionId) {
        Sentry.configureScope(scope => {
            scope.setTag("transaction_id", transactionId);
        });
    }
    if (order.email) {
        Sentry.configureScope(scope => {
            scope.setUser({ email: order.email });
        });
    }
    Sentry.configureScope(scope => {
        scope.setExtra("inventory", JSON.stringify(Inventory));
    });
    next();
});

app.post('/checkout', function (req, res) {
    let order = req.body;

    console.log("Processing order for: " + order.email);
    checkout(order.cart);
    res.send('Success');
});

app.get('/capture-message', function (req, rest) {
    Sentry.captureMessage('Custom Message');
});

// The error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());

app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001');
});

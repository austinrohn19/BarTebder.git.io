const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = __dirname + '/client/dist/';
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.static(path));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "BarTenders",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


app.use(session(sess));
app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

app.use(require('./controllers/'));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    sequelize.sync({ force: false });
});

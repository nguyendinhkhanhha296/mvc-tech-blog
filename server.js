const express = require('express');
const sequelize = require('./config/connection.js');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//handlebars initialization
const hbs = exphbs.create({ helpers });

//setup session
const sess = {
    secret: 'santababy',
    cookie: {
        expires: 10 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use(routes);

sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});
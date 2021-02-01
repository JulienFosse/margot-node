// Import de module
const
    express = require('express'),
    app = express(),
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');


// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

// Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('public'));

// Mongoose
const urlDb = 'mongodb://localhost:27017/menuiserieMargot'
mongoose.connect(urlDb, {
    useNewUrlParser: true, // Gaëtan
    useUnifiedTopology: true, // Gaëtan
    useCreateIndex: true, // Gaëtan
    useFindAndModify: false // Gaëtan
})

// Body parser permet de parser les data d'une page à l'autre en passant par les controllers, ... 
// Parser = https://fr.wiktionary.org/wiki/parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));




// Routes
const homeController = require('./controllers/homePage'),
    aboutController = require('./controllers/about'),
    lesRealisationsController = require('./controllers/lesRealisations'),
    devisController = require('./controllers/devis'),
    contactPageController = require('./controllers/contact'),
    pageAdminController = require('./controllers/pageAdmin'),
    userCreateController = require('./controllers/userCreate'),
    userLoginController = require('./controllers/userLogin');

app.get('/', homeController)
app.get('/about', aboutController)
app.get('/lesRealisations', lesRealisationsController)
app.get('/devis', devisController)
app.get('/contactPage', contactPageController)
app.get('/pageAdmin', pageAdminController)
app.get('/user/create', userCreateController)
app.get('/user/login', userLoginController)



// Ensuite nous demandons a express (app) de run notre projet.
app.listen(port, () => {
    console.log("le serveur tourne sur le prt: " + port);
});
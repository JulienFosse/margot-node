// Import de module
const
    express = require('express'),
    app = express(),
    hbs = require('express-handlebars'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), // Permet de se connecter à MongoDB
    bodyParser = require('body-parser'), // Permet de récupérer la méthode POST et de lire son format JSON
    fileUpload = require('express-fileupload'),
    methodOverride = require('method-override');



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

// Paramètres pour activer BodyParser (voir body-parser npm)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Module FileUpload
app.use(fileUpload());

// Module Override
app.use(methodOverride("_method"));


// ROUTER
const ROUTER = require('./controllers/router')
app.use('/', ROUTER)




// Controllers
const homeController = require('./controllers/homePage'),
    aboutController = require('./controllers/about'),
    lesRealisationsController = require('./controllers/lesRealisations'),
    devisController = require('./controllers/devis'),
    contactPageController = require('./controllers/contact'),
    pageAdminController = require('./controllers/pageAdmin'),
    userCreateController = require('./controllers/userCreate'),
    userLoginController = require('./controllers/userLogin');







// Routes

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
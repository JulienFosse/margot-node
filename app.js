// Import de module
const
    express = require('express'),
    app = express(),
    hbs = require('express-handlebars'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), // Permet de se connecter à MongoDB
    bodyParser = require('body-parser'), // Permet de récupérer la méthode POST et de lire son format JSON
    fileUpload = require('express-fileupload'),
    methodOverride = require('method-override'),
    path = require('path'),
    const helmet = require("helmet");



require('dotenv').config();

// Helmet
app.use(helmet());


// Path

app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'));

// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

// Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('public'));

// Mongoose
// const urlDb = 'mongodb://localhost:27017/menuiserieMargot'
const urlDb = process.env.MONGO_URI
console.log(urlDb);
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



// Ensuite nous demandons a express (app) de run notre projet.
app.listen(port, () => {
    console.log("le serveur tourne sur le prt: " + port);
});
const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const FILE = 'pokedex.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use method override
app.use(methodOverride("_method"));

// use files in public folder
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   // running this will let express to run home.handlebars file in your views folder
//   res.render('home')
// })

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/:id', (request, response) => {

  // get json from specified file
  jsonfile.readFile(FILE, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id;

    // find pokemon by id from the pokedex json file
    // (note: find() is a built-in method of JavaScript arrays)
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {

      response.send(pokemon);
    }
  });
});

/**
 * ===================================
 * / : SORT BY NAME
 * ===================================
 */

app.get('/', (request, response) => {
  // response.send("yay");
  
  jsonfile.readFile(FILE, (err, obj) => {

    if (request.query.sortby === "name") {
      response.render("sortby", {pokemon: obj.pokemon});      
    } else {
      response.render("home");
    }
    

  });
  
});

/**
 * ===================================
 * /pokemon/new : GET
 * ===================================
 */

app.get('/pokemon/new', (req, res) => {
  
  res.render('newForm');

});

/**
 * ===================================
 * /pokemon : POST
 * ===================================
 */

app.post('/pokemon/', (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {

    req.body.id = parseInt(req.body.id, 10)

    obj.pokemon.push(req.body)
    res.send(req.body);

    jsonfile.writeFile(FILE, obj, err => {

      console.log(err);

    })

  })

})

/**
 * ===================================
 * /pokemon : PUT
 * ===================================
 */

app.put('/pokemon/', (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {

    const index = req.body.id - 1;
    if (index <= obj.pokemon.length) {
      obj.pokemon.splice(index, 1, req.body);  
    } else {
      obj.pokemon.push(req.body);
    }
    

    jsonfile.writeFile(FILE, obj, err => {

      console.log(err);

    })

  })

})

/**
 * ===================================
 * /pokemon : DELETE
 * ===================================
 */

app.delete('/pokemon/', (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {

    const index = req.body.id - 1;
    obj.pokemon.splice(index, 1);

    jsonfile.writeFile(FILE, obj, err => {

      console.log(err);

    })

  })

})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

var express = require ('express');
var chalk = require ('chalk'); 

var debug = require('debug')('app'); //set to any name call it app
                            // to run in debug mode: set DEBUG=*& node app.js
var morgan = require('morgan'); //outputs all the statements served up

var path = require ('path'); 
var app = express();

app.use(morgan('tiny'));
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'views/index.html'));

})

app.listen(3000, ()=>{
    debug('listing!!');
});
 
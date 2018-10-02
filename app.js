var express = require('express');
var chalk = require('chalk');

var debug = require('debug')('app'); //set to any name call it app
// to run in debug mode: set DEBUG=*& node app.js
var morgan = require('morgan'); //outputs all the statements served up

var path = require('path');
var app = express();
const port = process.env.PORT || 3000;
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public'))); //for all js and css files
//the following is incase we dont have the files in our static directory
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))); //for all js and css files
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/distjs'))); //for all js and css files
app.use('/js', express.static(path.join(__dirname, '\node_modules\jquery\dist'))); //for all js and css files

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})
app.get('/' ,  (req, res) => {
    res.render(
        'index',    
        {
            nav: ['Books','Authors'],
            title: ['library']
        }
    );
});

app.listen(port, () => {
    debug('listingss!!'); 
});

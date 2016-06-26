var express = require('express');

var app = express();

var port = process.env.PORT || 5555;

app.use(express.static('public'));
app.set('views','./src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {title: 'heyyyyy'});
});

app.listen(port, function(err){
    console.log('running on port ' + port);
});

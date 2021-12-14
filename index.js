const express = require('express')
const app = express()
const port = 3000

// app.set('view engine', 'ejs');


var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function(req, res) {
    res.render('pages/index',{});
});

app.get('/logout', function(req, res) {
    res.render('pages/auth',{});
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
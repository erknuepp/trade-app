var express = require('express');
var tradingview = require('tradingview-scraper')
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', async function(req, res) {
  const tv = new tradingview.TradingViewAPI();
  const ticker = await tv.getTicker(req.query['ticker']);
  console.log(JSON.stringify(ticker));
  res.render('pages/index', {
    ticker: ticker
  });
});

app.listen(8080);
console.log('Server is listening on port 8080');
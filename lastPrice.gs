function incrementDummyValueToForceUpdate() {
    // Link the script to the appropiate spreadsheet using the URL identifier
  var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  // Specify tab to work with within the spreadsheet linked above
  var Sheet = ss.getSheetByName("YOUR_SPREADSHEET_NAME");
  var cell = Sheet.getRange(2, 8).getValue();
  Sheet.getRange(2,8).setValue(cell + 1);
}

//Gemini API
//input crypto pair returns last price
function gemini(x,y,dumb) {

  var coinpair = x.concat(y);
  var api = "https://api.gemini.com/v1/pubticker/";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin.last;

  return lastPrice;
}

//Liqui API
// input crypto pair returns last price
function liqui(x,y,dumb){

  var coinpair = y.concat("_").concat(x);
  var api = "https://api.liqui.io/api/3/ticker/";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin[coinpair].last;

  return lastPrice;
}

//Bittrex API
// input crypto pair returns last price
function bittrex(x,y,dumb){

  var coinpair = x.concat("-").concat(y);
  var api = "https://bittrex.com/api/v1.1/public/getmarketsummary?market=";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin.result[0].Last;

  return lastPrice;
}

//Polo API
//input crypto pair returns last price
function poloniex(x,y,dumb){

  var coinpair = (x.toUpperCase()).concat("_").concat(y.toUpperCase());
  var api = "https://poloniex.com/public?command=returnTicker";
  var apiFetch = UrlFetchApp.fetch(api);
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin[coinpair].last;

  return lastPrice;
}

//Bitfinex API
//input crypto pair returns last price
function bitfinex(x,y,dumb){

  var coinpair = (y.toUpperCase()).concat(x.toUpperCase());
  var api ="https://api.bitfinex.com/v1/pubticker/";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin.last_price;

  return lastPrice;
}

//Cryptopia API
//input crypto pair returns last price
function cryptopia(x,y,dumb){

  var coinpair = y.concat("_").concat(x);
  var api = "https://www.cryptopia.co.nz/api/GetMarket/";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin.Data.LastPrice;

  return lastPrice;
}

//Binance API
// inout crypto pair returns last price
function binance(x,y,dumb){

  var coinpair = (y.toUpperCase()).concat(x.toUpperCase());
  var api = "https://www.binance.com/api/v1/ticker/24hr?symbol=";
  var apiFetch = UrlFetchApp.fetch(api.concat(coinpair));
  var parseCoin = JSON.parse(apiFetch.getContentText());
  var lastPrice = parseCoin.lastPrice;

  return lastPrice;

}

//Etherdelta API
function etherdelta(x,y,dumb){

 var coinpair = (x.toUpperCase()).concat("_").concat(y.toUpperCase());
 var api = "https://api.etherdelta.com/returnTicker";
 var apiFetch = UrlFetchApp.fetch(api);
 var parseCoin = JSON.parse(apiFetch.getContentText());
 var lastPrice = parseCoin[coinpair].last;

 return lastPrice;

}

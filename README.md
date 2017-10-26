# Simple Google Script that returns crypto pairs last price from selected exchange.

## Link your Google Spreadsheet

- Paste your spreadsheet url ID in [line 3](https://github.com/NFhbar/lastPrice/blob/master/lastPrice.gs#L3)
- Paste your spreadsheet name in [line 5](https://github.com/NFhbar/lastPrice/blob/master/lastPrice.gs#L5)

## Return Frequency

```
function incrementDummyValueToForceUpdate(){}
```
Forces the speadsheet to update functions return value. Use [Google's Installable Triggers](https://developers.google.com/apps-script/guides/triggers/installable) to select frequency.

## Supported Exchanges

- gemini
- liqui
- bittrex
- poloniex
- bitfinex
- cryptopia
- binance
- etherdelta

## Use

simply choose your exchange and type:
```
=bittrex("btc","etc",H2)
```
in the desired cell and it will return the last price value for that crypto pair.

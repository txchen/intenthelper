# intenthelper
cordova-plugin-intenthelper

## Usage

Install the plugin:

```
cordova plugin add cordova-plugin-intenthelper --save
```

Get ads info:

```js
intenthelper.getAdsInfo(
  function (info) {
    // now get info.adsid and info.adslimittracking
  },
  function (error) {

  }
)
```

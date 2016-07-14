# intenthelper
cordova-plugin-intenthelper

## Usage

Install the plugin:

```
cordova plugin add cordova-plugin-intenthelper --save
```

Send broadcast intent:

```js
intenthelper.sendBroadcast('com.xzy.abc.ACTION_NAME',
  { extraName1: 'extraValue1', extraName2: 'extraValue2' })
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

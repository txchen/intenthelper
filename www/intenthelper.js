/*global cordova, module*/

module.exports = {
  getAdsInfo: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'Intenthelper', 'getAdsInfo', [])
  },
}

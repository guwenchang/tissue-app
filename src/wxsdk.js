export function jsSDK (params) {
    if (typeof window.WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', function () { onBridgeReady(params) }, false)
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', function () { onBridgeReady(params) })
        document.attachEvent('onWeixinJSBridgeReady', function () { onBridgeReady(params) })
      }
    } else {
      onBridgeReady(params)
    }
  }
  
  function onBridgeReady (params) {
    window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        'appId': params.appId, // 公众号名称，由商户传入
        'timeStamp': params.timeStamp, // 时间戳，自1970年以来的秒数
        'nonceStr': params.nonceStr, // 随机串
        'package': params.package,
        'signType': params.signType, // 微信签名方式：
        'paySign': params.paySign // 微信签名
      },
      function (res) {
        location.href = params.Url
      }
    )
  }
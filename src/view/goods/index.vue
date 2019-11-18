<template>
  <div class="container">
    <div id="goods_detail">
      <div class="goodsPicker">
        <img :src="goods.productImg" />
      </div>
      <div class="goodsText">
        <div class="goodsName">
          {{ goods.title }}
          <span v-if="canNotBuy">缺纸中</span>
        </div>
        <van-tabs type="card" v-model="wipeType" @change="wipeTypeChange" v-if="product.dryWipesCount > 0 && product.wetWipesCount > 0">
          <van-tab title="干纸巾" name="1"></van-tab>
          <van-tab title="湿纸巾" name="2"></van-tab>
        </van-tabs>
        <div class="goodsPrice">
          <span>价格</span>
          <span class="color">￥</span>
          <span class="bigText">{{ formatPrice(goods.price) }}</span>
          <br />
          <span>
            您购买的这1包纸巾，爱心企业会捐款<span style="color: #FF0000">0.5</span>元给“精准扶贫-大病救助项目”
          </span>
        </div>
      </div>
      <div
        class="googsBuyTips"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国光华科技基金会“精准扶贫-大病救助项目”以贫困青少年大病家庭为救助主体，通过医疗救助、生活补助等形式，对罹患胃癌（Ⅰ、Ⅱ期）、慢乙肝、慢粒白血病、先天性心脏病、乳腺癌、宫颈癌的贫困病患予以救助</div>
    <van-goods-action>
      <van-goods-action-button :disabled="canNotBuy" type="danger" @click="buy">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
    </div>
  </div>
</template>

<script>
import {
  Dialog,
  Tab,
  Tabs,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import api from "../../api.js"
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      wipeType: undefined,
      canNotBuy: false,
      goods: {
        title: "手帕纸",
        price: 0,
        productImg: "https://static.iweichan.com/goods.png"
      },
      deviceId: undefined,
      openId: undefined,
      product: {}
    };
  },
  created() {
    if (this.$route.query.deviceId) {
      this.deviceId = this.$route.query.deviceId
    }
    if (this.$route.query.openId) {
      this.openId = this.$route.query.openId
    }
    if (!this.openId) {
      this.$router.push({
        path: 'error',
        query: { msg : '请使用微信扫描' }
      });
    }
    if (this.deviceId) {
      this.$http.get(api.productInfo,{
        params: {                           //参数
          deviceId: this.deviceId
        },
      }).then(res => {                   //请求成功后的处理函数     
        this.product = res.data.data
        if ((this.product.dryWipesCount > 0 && this.product.wetWipesCount > 0) || this.product.dryWipesCount > 0) {
          this.wipeType = "1"
          this.goods.price = this.product.dryWipesPrice
        }else if (this.product.wetWipesCount > 0) {
          this.wipeType = "2"
          this.goods.price = this.product.wetWipesPrice
        }else{
          this.canNotBuy = true;
        }
      }).catch(err => {                 //请求失败后的处理函数   
        console.log(err)
      })
    }
    // if (!this.isWeChat()) {
    //   this.$router.push({
    //     path: 'error',
    //     query: { msg : '请使用微信扫描' }
    //   });
    // }
  },
  methods: {
    isWeChat() {
      var userAgent = navigator.userAgent.toLowerCase()
      if (userAgent.indexOf("micromessenger") > -1) {
        return true;
      } else {
        return false;
      }
    },
    formatPrice() {
      return "¥" + (this.goods.price);
    },
    buy() {
      this.$http.post(api.wxPay,{
        deviceId: this.deviceId,
        openId: this.openId,
        wipeType: this.wipeType
      }).then(res => {    
        if (res.data.code !== 0 ) {
            Dialog.alert({
              message: '下单失败'
            }).then(() => {
              // on close
            });
        }              
         //请求成功后的处理函数     
        activePay(res.data.data)
      }).catch(err => {                 //请求失败后的处理函数   
        console.log(err)
      })
    },
    activePay (args) {
      if (typeof WeixinJSBridge == "undefined") {
        if ( document.addEventListener ) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady(args), false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady(args)); 
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(args));
        }
      } else {
        onBridgeReady(args);
      }
    },
    onBridgeReady(args){
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": args.appId,     //公众号名称，由商户传入     
          "timeStamp": args.timeStamp,         //时间戳，自1970年以来的秒数     
          "nonceStr": args.nonceStr, //随机串     
          "package": args.package,     
          "signType": args.signType,         //微信签名方式：     
          "paySign": args.paySign //微信签名 
        },
        function (res) {
          if(res.err_msg == "get_brand_wcpay_request:ok" ) {
            // 付款成功
            this.$router.push("paySuccess");
          } else if (res.err_msg == "get_brand_wcpay_request:cancel" ) {
            Dialog.alert({
              message: '已取消支付'
            }).then(() => {
              // on close
            });
          } else {
            Dialog.alert({
              message: '支付失败'
            }).then(() => {
              // on close
            });
          }
        }
      ); 
    },
    wipeTypeChange (name, title) {
      console.log(name)
      if (name == 1) {
        this.goods.price = this.product.dryWipesPrice
      }else{
        this.goods.price = this.product.wetWipesPrice
      }
    }
  }
};
</script>

<style lang="less">
/*reset css*/
.container {
  width: 20rem;
  min-height: 35.573334rem;
  background: #fff;
}
/*商品展示页 css*/
.goodsPicker {
  width: 100%;
  padding: 1.6rem 0.8rem 0.8rem 0.8rem;
  background-size: contain;
  background: #fff url(../../../image/bg.png) no-repeat;
}
.goodsPicker img {
  width: 100%;
  height: 16rem;
}
.goodsText {
  padding: 0 0.8rem;
}
.goodsText .goodsName {
  font-size: 0.96rem;
  color: #000000;
  padding: 0.8rem 0;
}
.goodsText .goodsPrice {
  margin-top: 1rem;
  padding-bottom: 0.8rem;
}
.goodsText .goodsPrice span {
  font-size: 0.746666rem;
  color: #999999;
}
.goodsText .goodsPrice span.bigText {
  font-size: 1.3rem;
  color: #ff0000;
}
.goodsText .goodsPrice span.color {
  font-size: 0.746666rem;
  color: #ff0000;
}
.googsBuyTips {
  padding: 0.8rem;
  font-size: 0.64rem;
  color: #666666;
  line-height: 1.013334rem;
  background: #fbf4f4;
}
.buyBtnWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 20rem;
  height: 3.266666rem;
  background: #ffffff;
  box-shadow: 0 0.08rem 0.64rem 0 rgba(0, 0, 0, 0.16);
}
.buyBtnWrap p {
  font-size: 1.053334rem;
  color: #ffffff;
  width: 18.133334rem;
  height: 2.733334rem;
  background: #f85f3b;
  border-radius: 1.066666rem;
  line-height: 2.733334rem;
  text-align: center;
  margin: 0.266666rem auto;
}
</style>

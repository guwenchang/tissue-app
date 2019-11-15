<template>
  <div class="container">
    <div id="goods_detail">
      <div class="goodsPicker">
        <img :src="goods.productImg" />
      </div>

      <div class="goodsText">
        <div class="goodsName">{{ goods.title }}</div>
        <div class="goodsPrice">
          <span>价格</span>
          <span class="color">￥</span>
          <span class="bigText">{{ formatPrice(goods.price) }}</span>
          <br />
          <span style="font-size: 0.28rem">
            您购买的这1包纸巾，爱心企业会捐款
            <span style="font-size: 0.35rem;color: #FF0000">0.5</span>元给“精准扶贫-大病救助项目”
          </span>
        </div>
      </div>
      <div
        class="googsBuyTips"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国光华科技基金会“精准扶贫-大病救助项目”以贫困青少年大病家庭为救助主体，通过医疗救助、生活补助等形式，对罹患胃癌（Ⅰ、Ⅱ期）、慢乙肝、慢粒白血病、先天性心脏病、乳腺癌、宫颈癌的贫困病患予以救助</div>
      <div class="buyBtnWrap" type="danger" @click="buy">
        <p>立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";

export default {
  components: {
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
      goods: {
        title: "心相印手帕纸",
        price: 2680,
        productImg:
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
      }
    };
  },
  created() {},
  methods: {
    browserType() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        return "Opera";
      } else if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1
      ) {
        return "IE";
      } else if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
      } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
      } else if (
        userAgent.indexOf("Safari") > -1 &&
        userAgent.indexOf("Chrome") == -1
      ) {
        return "Safari";
      } else if (
        userAgent.indexOf("Chrome") > -1 &&
        userAgent.indexOf("Safari") > -1
      ) {
        return "Chrome";
      } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return "IE>=11";
      } else {
        return "Unkonwn";
      }
    },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    buy() {
      this.$router.push("paySuccess");
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

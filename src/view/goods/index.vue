<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        <div class="goods-desc">商品描述</div>
      </van-cell>
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-button type="danger" @click="buy">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      goods: {
        title: '心相印手帕纸',
        price: 2680,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    };
  },
  created () {},
  methods: {
    browserType() {
        var userAgent = navigator.userAgent;
        if(userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1){
          return 'Opera';
        }else if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1){
          return 'IE';
        }else if(userAgent.indexOf("Edge") > -1){
          return 'Edge';
        }else if(userAgent.indexOf("Firefox") > -1){
          return 'Firefox';
        }else if(userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1){
          return 'Safari';
        }else if(userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1){
          return 'Chrome';
        }else if(!!window.ActiveXObject || "ActiveXObject" in window){
          return 'IE>=11';
        }else{
          return 'Unkonwn';
        }
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    buy() {
      this.$router.push('paySuccess');
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 24px;
  }

  &-desc {
    font-size: 16px;
    margin-top: 10px;
  }  

  &-price {
    font-size: 16px;
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>

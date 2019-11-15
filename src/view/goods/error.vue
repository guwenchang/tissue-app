<template>
  <div class="container">
    <div id="payResult" style="display: block;">
      <div class="successWrap">
        <div class="successContainer">
          <div class="successIcon">
            <img src="../../../image/false.png" alt />
          </div>
          <div class="successText">出错信息</div>
          <div class="successTips">请使用微信扫码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* ... */
</script>

<style>
    /*支付结果页 成功 css*/
.successWrap{
    width: 100%;
    padding: 1.6rem .8rem .8rem .8rem;
    background: #fff url(../../../image/bg.png) no-repeat;
    background-size: contain;
}
.successWrap .successContainer{
    width: 100%;
    height: 16rem;
    background: #FFF8F8;
    border-radius: .96rem;
    overflow: hidden;
    text-align: center;
}
.successWrap .successContainer .successIcon{
    width: 1.92rem;
    height: 1.92rem;
    background: green;
    border-radius: 50%;
    margin: 5.333334rem auto 1.0666666rem;
}
.successWrap .successContainer .successIcon img{
    width: 100%;
    height: 100%;
}
.successWrap .successContainer .successText{
    font-size: 0.906666rem;
    color: #000000;
    margin-bottom: 0.533334rem;
}
.successWrap .successContainer .successTips{
    font-size: 0.746666rem;
    color: #666666;
}
</style>
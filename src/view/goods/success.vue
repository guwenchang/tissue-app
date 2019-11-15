<template>
  <div class="container">
    <div id="payResult" style="display: block;">
      <div class="successWrap">
        <div class="successContainer">
          <div class="successIcon">
            <img src="../../../image/ok.png" alt />
          </div>
          <div class="successText">购买成功！</div>
          <div class="successTips">感谢您为公益事业做出的贡献</div>
        </div>
      </div>
      <div class="codeTipsWrap">
        <div class="codePicker">
          <img src="../../../image/weixin.jpg" alt />
        </div>
        <div class="codeTips">
          <p>查看大病救助条件</p>
          <p>申请大病救助入口</p>
          <p>持续支持公益事业</p>
        </div>
      </div>
      <div class="saveBtn">关注“联企易行”微信公众号</div>
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
/*支付结果页 失败 css*/
.falseWrap{
    width: 100%;
    padding: 1.6rem .8rem .8rem .8rem;
    background: #fff url(../../../image/bg.png) no-repeat;
    background-size: contain;
}
.falseWrap .falseContainer{
    width: 100%;
    height: 16rem;
    background: #FFF8F8;
    border-radius: .96rem;
    overflow: hidden;
    text-align: center;
}
.falseWrap .falseContainer .falseIcon{
    width: 1.92rem;
    height: 1.92rem;
    background: red;
    border-radius: 50%;
    margin: 5.333334rem auto 1.0666666rem;
}
.falseWrap .falseContainer .falseIcon img{
    width: 100%;
    height: 100%;
}
.falseWrap .falseContainer .falseText{
    font-size: 0.906666rem;
    color: #000000;
    margin-bottom: 0.533334rem;
}
.falseWrap .falseContainer .falseTips {
    font-size: 0.846666rem;
}

.codeTipsWrap{
    display: flex;
    align-items: center;
    padding: 0 3.466666rem;
    margin: 3.2rem 0 1.333334rem 0;
}
.codeTipsWrap .codePicker{
    width: 5.173334rem;
    height: 5.173334rem;
    background: #000000;
}
.codeTipsWrap .codePicker img{
    width: 100%;
    height: 100%;
}
.codeTipsWrap .codeTips{
    font-size: .853334rem;
    color: #666666;
    line-height: 1.333334rem;
    margin-left: 0.8rem;
}
.saveBtn{
    font-size: .853334rem;
    color: #FFFFFF;
    width: 16.533334rem;
    height: 2.133334rem;
    background: #F85F3B;
    border-radius: 1.066666rem;
    line-height: 2.133334rem;
    text-align: center;
    margin: 0 auto;
}
</style>
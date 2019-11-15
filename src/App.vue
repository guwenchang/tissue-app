<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/*reset css*/
*,::before,::after{
    margin:0;
    padding:0;
    /*清除移动端默认的点击高亮效果*/
    -webkit-tap-highlight-color:transparent;
    /*设置以边框开始计算宽度*/
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}
body {
  font-size: 24px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

html, body, #root {
  height: 100%;
}

a{
    color:#333;
    text-decoration:none;
}

a:hover{
    text-decoration:none;
}

ul,ol{
    list-style:none;
}

input{
    border:none;
    outline:none;
    /*清除移动端默认的表单样式*/
    -webkit-appearance:none;
}
input[type="radio"]{
    -webkit-appearance: radio;
}
input[type="checkbox"] {
    -webkit-appearance: checkbox;
}
textarea{
    box-shadow: 0px 0px 0px rgba(0,0,0,0);
   -webkit-appearance:none;
}

h1, h2, h3, h4, h5, h6,ol, ul, dl {
  margin-bottom: 0!important;
}
/*common css*/
.f_left{
    float:left;
}

.f_right{
    float:right;
}

.clearfix::before,.clearfix::after{
    content:"";
    height:0;
    line-height:0;
    display:block;
    visibility:hidden;
    clear:both;
}
em,i{font-style:normal;}
img{border:none;height: auto;}

</style>

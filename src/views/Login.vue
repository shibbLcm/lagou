<template>
  <div class="login-con">
    <header class="logo-con">
      <img src="../../public/assets/img/bj_gzhu.png" alt="">
    </header>
    <form class="login-form">
      <div class="input-con">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-user"></use>
        </svg>
        <input type="text" name="username" placeholder="用户名">
      </div>
      <div class="input-con">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lock"></use>
        </svg>
        <input type="password" name="password" placeholder="密码">
      </div>
      <div class="login-button">注册并登录</div>
    </form>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .login-con
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    margin auto
    background-color: #eee;
    .logo-con
      padding 2rem 0
      background-color: #00b38a;
      text-align center
      font-size 0
      >img
        height 2rem
    .login-form
      >div
        margin auto
      .input-con
        width 80%
        border-bottom 1px solid #00b38a
        margin-top .3rem
        >input
          height .8rem
        .icon
          margin-right .3rem
      .login-button
        width 80%
        height .8rem
        line-height .8rem
        text-align center
        color white
        margin-top .3rem
        border-radius .1rem
        background-color: #00b38a;
</style>
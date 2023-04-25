<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">朋友</router-link>
      <router-link to="/part?name=小雨">朋友-小雨</router-link>
      <router-link to="/part/小琳">朋友-小琳</router-link>
    </div>
    <div class="top">
      <!-- 7.设置挂载点-当url的hash值路径切换，显示规则里对应的组件到这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

// 声明式导航 - 传值
<!-- 
  方式 1：
  to='/path?参数名=值'
  接收：$route.query.参数名

  方式 2：
  （1）路由规则path上定义 /path/:参数名
  （2）to='/path/值'
  接收：$route.params.参数名
 -->

<script>
export default {}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

/* 激活时样式 */
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>

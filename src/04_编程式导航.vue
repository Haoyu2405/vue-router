<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find','Find')" >发现音乐</span>
      <span @click="btn('/my','My')" >我的音乐</span>
      <span @click="btn('/part','Part')" >朋友</span>
      <span @click="btnOne" >朋友-小雨</span>
      <span @click="btnTwo" >老婆-小琳</span>
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
 -->

<script>
// 编程式导航 - js方式跳转
// 语法：
// this.$router.push({path:'路由路径'})
// this.$router.push({name:'路由名'})
// 注意：
// 虽然用name跳转，但是url的hash值还是切换path路径值
// 场景：
// 方便修改：name路由名（在页面上看不见可随便定义）
// path可以在url的hash值看到（尽量符合组内规范）

// 编程式导航 - 跳转路由传参
// 方式 1：
// params => $route.params.参数名
// 方式 2:
// query => $route.query.参数名
// 重要：path会自动忽略params
// ***推荐***：name+query方式传参

export default {
  methods:{
    btn(targetPath,targetName){
      this.$router.push({
      // path: targetPath
      name: targetName
    })
    },
    btnOne(){
      this.$router.push({
        name:'Part',
        params:{
          username:'小雨'
        }
      })
    },
    btnTwo(){
      this.$router.push({
        name:'Part',
        query:{
          name:'小琳'
        }
      })
    }
  }
}
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
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
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

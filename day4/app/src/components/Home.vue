<template>
  <div class="box">
      <router-view class="main"></router-view>
      <footer class="footer">
          <router-link to="/home/main">
              <i class="iconfont icon-qq"></i>
              <p>消息</p>
          </router-link>
          <router-link to="/home/haoyou">
              <i class="iconfont icon-feiji"></i>
              <p>好友</p>
          </router-link>
          <router-link to="/home/dongtai">
              <i class="iconfont icon-24"></i>
              <p>动态</p>
          </router-link>
      </footer>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
      .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main{
          flex:1;
        }
        .footer{
          width: 100%;
          height: 60px;
          border-top: 1px solid #ccc;
          display: flex;
          align-items: center;
          a{
            flex: 1;
            text-align: center;
            color: #5E5E5E;
          }
          .router-link-exact-active{
            color: #FF0000;
          }
        }
      }
</style>
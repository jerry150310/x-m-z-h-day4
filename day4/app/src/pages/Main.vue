<template>
    <div class="main-box">
        <header class="header">
            <img src="../../static/images/user.png" alt="">
            <span>消息</span>
            <i class="iconfont icon-tianjia"></i>
        </header>
        <div class="inp">
            <input type="text" value="搜索">
            <i class="iconfont icon-fangdajing"></i>
        </div>
        <div class="content">
            <div class="content-box" v-for="(item,index) in list" :key="index">
                <div class="left">
                    <img :src="item.img" alt="">
                </div>
                <div class="center">
                    <h3>{{item.title}}</h3>
                    <p>{{item.txt}}</p>
                </div>
                <div class="right">
                    <span>{{item.time}}</span>
                </div>
            </div>
        </div>
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
            list:[
                {
                    "id":0,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":1,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":2,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":3,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":4,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":5,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":6,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                },
                 {
                    "id":7,
                    "title":"我的同桌",
                    "txt":"作业学完没 666",
                    "time":"17:00",
                    "img":"../../static/images/1.png"
                }
            ]
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
        .main-box{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .header{
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #40A1FF;
                color: #fff;
                padding: 0 10px;
                i{
                    font-size: 25px;
                }
                span{
                    font-size: 18px;
                }
            }
            .inp{
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                input{
                    width: 90%;
                    margin: 0 auto;
                    height: 35px;
                    background: #f5f5f5;
                    border-radius: 10px;
                    outline: 0;
                    border: 0;
                    text-align: center;
                    color:#C0C0C0;
                }
                i{
                    position: absolute;
                    left: 40%;
                    color: #C0C0C0;
                }
            }
            .content{
                flex:1;
                overflow-y: auto;
                .content-box{
                    width: 100%;
                    height: 80px;
                    border-bottom: 1px solid #ccc;
                    display: flex;
                    .left{
                        flex: 2;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 80%;
                            height: 80%;
                        }
                    }
                    .center{
                        flex: 6;
                        display:flex;
                        flex-direction: column;
                        justify-content: center;
                        // align-items: center;
                    }
                    .right{
                        flex: 2;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
</style>
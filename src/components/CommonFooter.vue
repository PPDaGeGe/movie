<template>
    <div id="footer" :style="{background:$store.state.color}" >
       

        <router-link v-for="(item,index) in menu" :key='index' @click.native='change({title:item.title,color:item.color})' :to="itme.path">{{item.title}}</router-link>
    </div>
</template>

<script>
import {mapMutations}from 'vuex';
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/',
                        color:'pink'
                    },{
                        title:'音乐',
                        path:'/music',
                        color:'orange'
                    },{
                        title:'图书',
                        path:'/book',
                        color:'gold'
                    },{
                        title:'图片',
                        path:'/photo',
                        color:'skyblue'
                    },
                ]
            }
        },
        methods:
            mapMutations(['change']),
            created(){
                console.log(this.$route.path)
                this.menu.forEach(function(obj){
                    if(obj.path ==$route.path){
                        this.change({
                            title:obj.title,
                            color:obj.color
                        })
                    }
                })
            }

        
    }
</script>

<style lang="scss" scoped>
    #footer{
        line-height: 1rem;
        height: 1rem;
        background: pink;
        position: fixed;
        bottom: 0;
        width: 100%;display: flex;
        a{
        color: black;
            flex: 1;
            text-align: center;
            &.router-link-exact-active{
                color: white;
            }
        }
    }
</style>
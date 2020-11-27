<template>
    <div id='header' :style="{background:$store.state.color}">
        头部
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #header{
        height: 40px;
        background: pink;
        width: 100%;
        top: 0;
        position: fixed;
    }
</style>
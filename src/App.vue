<template>
  <div id="app">
    <common-header></common-header>
    <div id="contain">
    <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'
export default {
    components:{
      CommonHeader,
      CommonFooter
    }
}
</script>
<style lang="scss">
  #contain{
    margin: 50px auto;
  }
</style>

<template>
  <div class="container">
    <div class="tab"><router-view></router-view></div>
    <Tab :tabs="tabs" :index="tabIndex" @setIndex="setTabIndex"></Tab>
  </div>
</template>

<script>
  import Tab from 'src/components/tab'
  let tabs = [
    {title:'信用生活',img:require('./images/default-tabs-life.png'),actImg:require('./images/default-tabs-life-s.png'),path:'/tab/home'},
    {title:'我的',img:require('./images/default-tabs-person.png'),actImg:require('./images/default-tabs-person-s.png'),path:'/tab/user'},
  ]
  export default {
    components: {
      Tab
    },
    data() {
      return {
        tabs:tabs,
        tabIndex:0
      }
    },
    methods:{
      setTabIndex(index){
        this.tabIndex = index
      }
    },
    created() {

    },
  }
</script>
<style scoped lang="scss">
  .tab{position: absolute;top: 0;bottom: .9rem;width: 100%;left: 0;}
</style>


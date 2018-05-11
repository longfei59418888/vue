<template>
  <div class="cpt-person-tabs">
    <div @click="setIndex(key)" class="item" v-for="(item,key) in tabs">
      <router-link :to="{ path: item.path }">
        <img :src="index == key?item.actImg:item.img" alt="">
        <p :class="{ active: index == key }">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    props:['tabs','index'],
    methods:{
      setIndex(key){
        this.$emit('setIndex',key)
      }
    },
    created() {
    },
  }
</script>
<style scoped lang="scss">
  .cpt-person-tabs{position: absolute;bottom: 0;left: 0;height: .9rem;width: 100%;display: flex;border-top: 1px solid #F6F6F6;;
    .item{flex: 1;text-align: center;padding-top: .06rem;
      img{width: .42rem;}
      p{font-size: .14rem;margin-top: .02rem;color: #B2B2B2;
        &.active{color: #828282}
      }
    }
  }
</style>


<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  import {Confirm,Alert} from 'src/utils/lib/confirm'
  export default {
    components: {
    },
    data() {
      return {
        width: '',
        widtha: ''
      }
    },
    created() {
      Alert({
        title:'sdfsd',
        message:'sdfsd',
        msgStyle:{textAlign:'center'},
        success:()=>{

        }
      })
    },
  }
</script>

<style scoped lang="scss">
  .container{position: absolute;width: 100%;height: 100%;left: 0;top: 0;}
</style>

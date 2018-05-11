import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);    //全局使用 vuex

import state from "./state";   // store.state.newCount
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store;



/*
* Vuex.Store 构造器选项  option
* state   --   初始state ,  辅助函数  mapState({     count: state => state.count,    countAlias: 'count', 'count'[ 映射 this.count 为 store.state.count ]  })
* mutations  --   改变 state 的数据 { add(state,data) }
* action  --  Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 mapActions({}) 映射action方法到methods中
* */

/*
this.$store.commit('increment'),store.commit('increment')  触发  mutations  里面的方法改变state
this.$store.dispatch('increment'),store.dispatch('increment')，    触发action方法

初始化store
mapState({}) 映射state到computed中
state:{}


mapGetters({}) 映射getters到computed中
getters:{
   doneTodosCount: (state, getters) => {   返回操作后的对应的 state 上面的属性
    return getters.doneTodos.length
  }
}


改变 state
mutations:{
  increment(state,data)
}




commit 触发 mutations 方法
mapActions({}) 映射action方法到methods中
action:{
  increment({ commit , dispatch })=>{}
}




* */























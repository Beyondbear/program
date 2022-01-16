<template>
  <div id="nav">
  <top-header>{{headerTitle}}</top-header>
  <search-input :placeholder="placeholder" :maxlength="maxlength"></search-input>
  </div>
  <router-view/>
  <tab-bar></tab-bar>
</template>
<script>
import TopHeader from "@/components/TopHeader/index.vue"
import TabBar from '@/components/TabBar/index.vue'
import SearchInput from '@/components/Searchinput/index.vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
  components:{
    TopHeader,
    TabBar,
    SearchInput,
  },
  setup() {
    const store=useStore();
    const router =useRouter()
    watch(
      ()=>router.currentRoute.value.name,
      (value)=>{
        store.commit('setHeaderTitle',value)
        store.commit('setPlaceholder',value)
        store.commit('setMaxlength',value)
        store.commit('setField',value)
      }
    )
    return store.state
  }
}
</script>

<style lang="less">
.container{
    padding: 0.82rem 0 0.44rem 0;
    box-sizing: border-box;
}

</style>

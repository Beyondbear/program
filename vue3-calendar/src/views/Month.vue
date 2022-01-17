<template>
    <div class="container">
            <card-list :data="monthData"></card-list>
        </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex'
import { getNowDate } from '@/libs/utils'
import CardList from '@/components/MonthPage/List'

export default {
    setup(){
        const store = useStore()

        onMounted( () => {
            const field = store.state.field
            getData(store,field,getNowDate(field))
        })

        return {
            monthData:computed(() => store.state.monthData)
        }
    },
    components:{
        CardList,
    }
}
</script>

<style lang="less" scoped>
    
</style>
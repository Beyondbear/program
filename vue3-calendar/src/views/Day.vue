<template>
    <div class="container">
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <div v-else>
        <day-card :data='dayData'></day-card>
        <day-list :data='dayData'></day-list>
        </div>
    </div>
</template>

<script>
import { onMounted,computed } from '@vue/runtime-core'
import getData from '@/services'
import {getNowDate} from '@/libs/utils'
import {useStore} from 'vuex'
import DayCard from '@/components/DayPage/Card'
import DayList from '@/components/DayPage/List'
export default {
    setup() {
        const store=useStore()
        onMounted(()=>{
            const field=store.state.field
            getData(store,field,getNowDate(field))
        })
        return {
            dayData:computed(()=>store.state.dayData),
            errorCode:computed(()=>store.state.errorCode)
        }
    },
    components:{
        DayCard,
        DayList
    },
}
</script>

<style lang="less" scoped>
</style>
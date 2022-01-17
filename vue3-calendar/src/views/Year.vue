<template>
    <div class="container">
                <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <div v-else>
            <card-list :data="yearData"></card-list>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex'
import { getNowDate } from '@/libs/utils'
import CardList from '@/components/YearPage/List'

export default {
    setup(){
        const store = useStore()

        onMounted( () => {
            const field = store.state.field
            getData(store,field,getNowDate(field))
        })
        
        return {
            yearData: computed( () => store.state.yearData ),
            errorCode:computed(()=>store.state.errorCode)
        }
    },
    components:{
        CardList
    }
}
</script>

<style lang="less" scoped>
    
</style>
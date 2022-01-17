<template>
    <div>
        <div class="list">
            <list-item title="当前年月" :content="data['year-month']"></list-item>
            <list-item title="今年属相" :content="data.animalsYear"></list-item>
            <list-item title="农历月份" :content="data.lunarYear"></list-item>
            <list-item title="适宜事件" :content="data.suit"></list-item>
            <list-item title="避免事件" :content="data.avoid"></list-item>
        </div>
    </div>
</template>

<script>
import ListItem from './Item'
export default {
    components:{
        ListItem,
    },
    props:{
        data:Object,
    }
}
</script>

<style lang="less" scoped>
.list{
    padding: 0.15rem;
    box-sizing: border-box;
    
}

</style>
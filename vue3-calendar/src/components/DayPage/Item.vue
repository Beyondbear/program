<template>
    <div class="item">
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        content:String
    }
}
</script>

<style lang="less" scoped>
.item{
    display: flex;
    height: .44rem;
    line-height: .44rem;
    background: #fff;
    margin-bottom: .15rem;
    border: 1px solid #ddd;
    border-radius: .1rem;
    .title{
        width:1rem;
        font-size: .18rem;
        margin-right: .15rem;
        color:#ed4040;
        text-align: center;

        }
    .content{
        width: 2.2rem;
        font-size: 0.14rem;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

</style>
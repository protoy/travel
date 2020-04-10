<template>
<div>
    <div class="recommend-title">今日特惠</div>
    <ul>
        <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
}
.item-img{
    /* width: 2rem; */
    height: 2rem;
    padding: .1rem;
}
.item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
}
.item-desc{
    line-height: .4rem;
    color: #ccc;
}
.item-button{
    line-height: .4rem;
    margin-top: .16rem;
    background: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    color: #fff;
}
</style>

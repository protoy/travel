<template>
<div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
        title: '杭州当地游',
        desc: '纯玩江南3日 人间天堂'
      }, {
        id: '0002',
        imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
        title: '杭州当地游',
        desc: '纯玩江南3日 人间天堂'
      }, {
        id: '0003',
        imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
        title: '杭州当地游',
        desc: '纯玩江南3日 人间天堂'
      }]
    }
  }
}
</script>

<style>
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

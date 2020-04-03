<template>
<div>
    <div class="weekend-title">热门度假</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" />
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Homeweekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '0001',
  //       imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
  //       title: '杭州当地游',
  //       desc: '纯玩江南3日 人间天堂'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
  //       title: '杭州当地游',
  //       desc: '纯玩江南3日 人间天堂'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg',
  //       title: '杭州当地游',
  //       desc: '纯玩江南3日 人间天堂'
  //     }]
  //   }
  // }
}
</script>

<style scoped>
.weekend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
/* .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
} */
.item-img-wrapper{
    overflow: hidden;
}
.item-img{
    width: 100%;
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
}
.item-desc{
    line-height: .4rem;
    color: #ccc;
}
</style>

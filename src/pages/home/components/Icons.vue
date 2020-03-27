<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon" v-for="item of iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
        desc: '中山陵'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0005',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
        desc: '中山陵'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0008',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
        desc: '中山陵'
      }]
    }
  }
//   computed: {
//     pages () {
//       const pages = []
//       this.iconList.forEach((item.index) => {       item not defined
//         const page = Math.floor(index / 8)          index not defined
//         if (!pages[page]) {
//           pages[page] = []
//         }
//         pages[page].push(item)                      item not defined
//       })
//       return pages
//     }
//   }
}
</script>

<style scoped>
.swiper-container{
    height: 0;
    padding-bottom: 50%;
}
.icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
}
.icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
}
.icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;
}
.icon-img-content{
    display: block;
    margin: 0 auto;
    height: 100%;
}
.icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/27e6a9c917fd3e81c25b0eed97a62580.jpg_890x330_0cb0a7f8.jpg'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/2dac04318ae2847053426c8fcc2129a6.jpg_890x330_08b07d02.jpg'
      // }]
    }
  }
}
</script>

<style scoped>
.swiper-img{
  width: 100%;
}
.wrapper{
  width: 100%;
  height: 0;
  background: #eee;
  padding-bottom: 37%;
}
</style>

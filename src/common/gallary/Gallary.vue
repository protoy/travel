<template>
    <div class="container" @click="handleGallaryClose">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide>
                    <img class="gallary-img" src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {}
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClose () {
    }
  }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
}
.swiper-container{
    overflow: inherit;
}
.wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 100%;
}
.gallary-img{
    width: 100%;
}
.swiper-pagination{
    color: #fff;
    bottom: -1rem;
}
</style>

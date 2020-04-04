<template>
    <ul class="list">
        <li
            class="item"
            v-for="(item, key) of cities"
            :key="key"
            :ref="key"
            @touchstart='handleTouchStart'
            @touchmove='handleTouchMove'
            @touchend='handleTouchEnd'
            @click="handleLetterClick"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      TouchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.TouchStatus = true
    },
    handleTouchMove (e) {
      if (this.TouchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.TouchStatus = true
    }
  }
}
</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
}
.item{
    line-height: .4rem;
    text-align: center;
}
</style>

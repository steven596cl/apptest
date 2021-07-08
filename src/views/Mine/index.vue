<template>
  <div id="loader-wrapper" v-show="showLoading">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="load_title"><h6>正在加载我的页面,请耐心等待...</h6>
      <br>
      <p>v1.0</p>
    </div>
  </div>
    <div class="mine-container">
      <h1>我的</h1>
    </div>
</template>

<script>
export default {
  name: 'MineIndex',
  components: {},
  props: {},
  data () {
    return {
      showLoading: false,
      flag4: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    if (sessionStorage.getItem('flag4') === '' || sessionStorage.getItem('flag4') == null) {
      this.flag4 = true
      sessionStorage.setItem('flag4', this.flag4)
    } else {
      this.flag4 = sessionStorage.getItem('flag4')
    }
    if (this.flag4 === true) {
      this.showLoading = true
      setTimeout(() => {
        this.flag4 = false
        localStorage.setItem('flag4', this.flag4)
        this.showLoading = false
      }, 2000)
    }
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>

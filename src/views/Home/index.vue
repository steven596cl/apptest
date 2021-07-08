<template>
  <div id="loader-wrapper" v-show="showLoading">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="load_title"><h6>正在加载首页,请耐心等待...</h6>
      <br>
      <p>v1.0</p>
    </div>
  </div>
    <div class="home-container">
      <h1>这是首页</h1>
    </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      showLoading: false,
      flag1: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    if (sessionStorage.getItem('flag1') === '' || sessionStorage.getItem('flag1') == null) {
      this.flag1 = true
      sessionStorage.setItem('flag1', this.flag1)
    } else {
      this.flag1 = sessionStorage.getItem('flag1')
    }
    if (this.flag1 === true) {
      this.showLoading = true
      setTimeout(() => {
        this.flag1 = false
        localStorage.setItem('flag1', this.flag1)
        this.showLoading = false
      }, 2000)
    }
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>

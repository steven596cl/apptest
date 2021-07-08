<template>
  <div id="loader-wrapper" v-show="showLoading">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="load_title"><h6>正在加载排行榜页面,请耐心等待...</h6>
      <br>
      <p>v1.0</p>
    </div>
  </div>
    <div class="rank-container">
      <h1>这是排行榜页面</h1>
    </div>
</template>

<script>
export default {
  name: 'RankIndex',
  components: {},
  props: {},
  data () {
    return {
      showLoading: false,
      flag3: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    if (sessionStorage.getItem('flag3') === '' || sessionStorage.getItem('flag3') == null) {
      this.flag3 = true
      sessionStorage.setItem('flag3', this.flag3)
    } else {
      this.flag3 = sessionStorage.getItem('flag3')
    }
    if (this.flag3 === true) {
      this.showLoading = true
      setTimeout(() => {
        this.flag3 = false
        localStorage.setItem('flag3', this.flag3)
        this.showLoading = false
      }, 2000)
    }
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>

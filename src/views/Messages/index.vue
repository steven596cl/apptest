<template>
  <div id="loader-wrapper" v-show="showLoading">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="load_title"><h6>正在加载消息页面,请耐心等待...</h6>
      <br>
      <p>v1.0</p>
    </div>
  </div>
    <div class="messages-container">
      <h1>这是消息页面</h1>
    </div>
</template>

<script>
export default {
  name: 'MessagesIndex',
  components: {},
  props: {},
  data () {
    return {
      showLoading: false,
      flag2: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    if (sessionStorage.getItem('flag2') === '' || sessionStorage.getItem('flag2') == null) {
      this.flag2 = true
      sessionStorage.setItem('flag2', this.flag2)
    } else {
      this.flag2 = sessionStorage.getItem('flag2')
    }
    if (this.flag2 === true) {
      this.showLoading = true
      setTimeout(() => {
        this.flag2 = false
        localStorage.setItem('flag2', this.flag2)
        this.showLoading = false
      }, 2000)
    }
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>

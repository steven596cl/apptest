<template>
  <router-view/>
    <div class="layout-container">
      <ul class="clear-fix">
        <li>
          <router-link :to="{name: 'HomeIndex'}" exact>
            <div>
             <i class="iconfont icon-tiku1"></i>
            </div>
            <label>首页</label>
        </router-link>
        </li>
        <li>
          <router-link :to="{name: 'MessagesIndex'}" >
            <div>
             <i class="icon iconfont icon-wodexinxi"></i>
            </div>
            <label>消息</label>
        </router-link>
        </li>
        <li>
           <router-link :to="{name: 'RankIndex'}" >
          <div>
            <i class="icon iconfont icon-paihangbang-1"></i>
          </div>
          <label>排行榜</label>
        </router-link>
        </li>
        <li>
          <router-link :to="{name: 'MineIndex'}" >
            <div>
             <i class="icon iconfont icon-gerenzhongxin1"></i>
            </div>
            <label>我的</label>
        </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'layout',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
  .layout-container {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 1px 5px #000;
    width: 100%;
		li {
      list-style:none;
			float: left;
			width: 25%;
			text-align: center;
      .router-link-active{
          color: #00ff00;
      }
			i {
				display: block;
				font-size: 30px;
        width: 70%;
			}
	}
  label {
    float: left;
    width: 70%;
    font-size: 10px;
  }
}
</style>

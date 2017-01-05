<template>
<div class="group-info-head-wrap">
	<div class="-left" v-link="'/'">
    <i class="iconfont icon-back"></i>
  </div>
  <div class="-mid">
    <p class="group-name">江湖人的江湖({{CHAT.onlineCount}})</p>
  </div>
  <div class="-right" @click="open()" >
  </div>
</div>
</template>
<script>
import CHAT from '../api/client'
import DialogUtil from './util/DialogUtil'
export default{
  name: 'GroupInfoHead',
  data () {
    return {
      CHAT: CHAT,
      isShare: false
    }
  },
  ready () {

  },
  components: {
    DialogUtil
  },
  methods: {
    open () {
      this.isShare = true
    },
    close () {
      this.isShare = false
    }
  }
}
</script>
<style  scoped>
  .a {
    height: 100px;
    width: 100px;
    background-color: red;
  }
  .group-info-head-wrap {
    background-color: #34352c;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
  }
  .group-info-head-wrap .-left {
    display: flex;
    flex-shrink: 0;
    height: 100%;
    width:50px;
    min-width: 50px;
    align-items: center;
    justify-content: center;
  }
  .group-info-head-wrap .-left .icon-back {
    font-size: 26px !important;
    color: #fff;
  }
  .group-info-head-wrap .-mid {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
  }
  .group-info-head-wrap .-right {
    display: flex;
    align-items: center;
    height: 100%;
    width: 50px;
    justify-content: center;
  }
  .group-info-head-wrap .-right .icon-share {
    font-size: 28px !important;
    color: #fff;
  }
  .share {
    width: 80%;
    padding: 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>

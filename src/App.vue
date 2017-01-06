<template>
  <div id="chat">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }
  #chat{
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <chat-head></chat-head>
    <chat-body></chat-body>
    <chat-foot></chat-foot>
    <!--<Danmu></Danmu>-->
  </div>
</template>

<script>
import ChatHead from './components/ChatHead'
import ChatBody from './components/ChatBody'
import ChatFoot from './components/ChatFoot'
import GroupInfo from './components/GroupInfo'
// import Danmu from './components/Danmu'

export default {
  name: 'App',
  components: {
    ChatHead,
    ChatBody,
    ChatFoot,
    GroupInfo
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
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

</style>

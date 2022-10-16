<template>
  <div id="app">
    <Header/>

    <transition name="fade" mode="out-in">
      <router-view>
        <Operations/>
        <List/>
      </router-view>
    </transition>

  </div>
</template>

<script>
  import Header from "./components/common/Header"
  import Operations from "./components/Operations"
  import List from "./components/List"
  export default {
    components:{
      Header,
      Operations,
      List
    }

  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans:wght@400;700&display=swap');
  /*
  font-family: 'Work Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
  */
  *{
    font-family: 'Work Sans', sans-serif;
  }
  /*Transition Class */
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: all .3s ease;    
  }
  .fade-leave {
    
  }
  .fade-leave-active {
    transition: all .3s ease;
    opacity: 0;
  }
</style>

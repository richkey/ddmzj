<template>
    <div id="main">
      <TopMenu title="我的电影"/>
      <TabBar/>
    </div>
</template>

<script>
import TopMenu from "@/components/header";
import TabBar from "@/components/TabBar";
export default {
   name:'Mine',
    components:{
    TopMenu, 
    TabBar   
    }
}
</script>

<style scoped>


</style>


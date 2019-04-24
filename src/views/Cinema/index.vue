<template>
    <div id="main">
      <TopMenu title="自游驾影院"/>
      <TabBar/>
    </div>
</template>

<script>
import TopMenu from "@/components/header";
import TabBar from "@/components/TabBar";
export default {
   name:'Cinema',
    components:{
    TopMenu, 
    TabBar   
    }
}
</script>

<style scoped>


</style>


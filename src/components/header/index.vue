<template>
   <header id='header01'>
       <h1> {{title}} </h1>

   </header>
</template>

<script>
export default {
  name:"header01",
   props : {
      title : {
         type:String,
         default:"丁丁猫影院"
      }
   }
 
}
</script>

<style scoped>
   #header01{width: 100%;height: 50px;color:#fff;background: #e54847;border-bottom: 1px solid #e54847;position: relative;}
   #header01 h1{font-size: 18px;text-align: center;line-height: 50px;font-weight: normal;}
   #header01 i{position: absolute;left: 5px;top: 50%;margin-top: -13px;font-size: 26px;}

</style>

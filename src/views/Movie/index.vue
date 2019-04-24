<template>
  <div id="main">
    <TopMenu title="自游驾电影"/>

    <div id="header">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>重庆</span>
          <i></i>
        </router-link>
        <div class="hot-swtich">
          <router-link tag="div" to="/movie/nowPlaying">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon">即将上映</router-link>
        </div>
        <div class="search_entry">
          <i></i>
        </div>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>

    <tabBar/>
  </div>
</template>

<script>
import TopMenu from "@/components/header";
import TabBar from "@/components/TabBar";

export default {
  name: "Movie",
  components: {
    TopMenu,
    TabBar
  },

};
</script>

<style>
 .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: #181818;
  display: flex;
  justify-content:center;
}

.city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}

.active {
  color: #ef4238;
  border-bottom: 2px solid orangered;
}

.hot_swtich {
  display: flex;height: 100%;line-height: 45%;
}

 .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}

.search-entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.search-entry i {
  font-size: 24px;
  color: red;
}
i {
  font-size: 24px;
  color: red;
} 
</style>


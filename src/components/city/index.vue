<template>
  <div class="city_body">
    <!-- <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix" v-for="hotList">
          <li>重庆</li>
          <li>成都</li>
          <li>昆明</li>
          <li>贵阳</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
      </ul>
    </div>-->
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
        </ul>
      </div>
    </div>
  
      <div class="city_sort" ref="city_sort">
        <div v-for="item in cityList" :key="item.index">
          <h2>{{item.index}}</h2>
          <ul>
            <li v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}</li>
          </ul>
        </div>
        </div>
  <div class="city_index">
      <ul>
        <li v-for="(item,index) in cityList" :key="item.id" @touchstart="handleToIndex(index)">{{item.index}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      cityList:[],
      hotList:[]
    };
  },
  mounted() {
    let url = this.HOST + "/api/cityList";
    this.$axios.get(url).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities;
             var { hotList, cityList } = this.formatCityList(cities);
        this.hotList = hotList;
        this.cityList = cityList;
      }
    })
   
  },
  methods: {
    formatCityList(cities) {
      var hotList = []; //按热门城市进行筛选
      var cityList = []; //按字母排序重新组全数组

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }
      for (var i = 0; i < cities.length; i++) {
        //循环全部城市列表
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase(); //获取拼音字段的第一个字符，并转换成大写。
        if (toCom(firstLetter)) {  //添加新的index
          cityList.push({index: firstLetter,list: [{ nm: cities[i].nm, id: cities[i].id }]});
        } else {                    //累加到已有的index中
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
               cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
    
      cityList.sort((n1, n2) => {
        //按字母顺序 重新排序
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
     
      function toCom(firstLetter) {
        //按字母排序重新组合数组
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
    
        return true;
      }
     
      return {
        hotList,
        cityList
      }
    },
     handleToIndex(index){
         var h2=this.$refs.city_sort.getElementsByTagName('h2');
         this.$refs.city_sort.parentNode=h2[index].offsetTop;
    }
    
  }
};
</script>
  

<style>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}

.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}

.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
}
.city_index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20px;
  height: 70%;
  text-align: center;
  border: 1px solid #046804;
  font-size: 15px;
  position: fixed;
  top: 22%;
  right: 0.1px;
}
</style>

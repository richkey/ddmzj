 <template>
       <div class="movie_body">
           <ul>
               <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show"><img :src="item.img | serWH('128.180')" alt="" srcset=""></div>
                    <div class="info_list">
                        <h2>{{item.nm}}</h2>
                        <p>观众评价: <span class="grade">{{item.sc}}</span></p>
                        <p>主演：{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                      <div class="btn-mall"> 
                          购票
                      </div>
               </li>
                          
           </ul>
       </div>
 </template>
 
 <script>
 export default {
     name:"NowPlaying",

data(){
    return{
        movieList:[]
    }

},

  mounted(){
//    let Location_Url=this.HOST + "/api/getLocation";
//    let myCityID='10';
//    this.$axios.get( Location_Url).then(resCity=>{
//        myCityID=resCity.data.data.id
//       })
  
    let url = this.HOST + "/api/movieOnInfoList?cityID="+ myCityID;
    
  this.$axios.get(url).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var movieList = res.data.data.movieList;
       
        this.movieList=movieList;
         console.log(this.movieList);
      }

    })
   
 }
 }
 </script>
 
 <style scoped>
    #content .movie_body{flex: 1;overflow: auto; }
    .movie_body ul{margin: 0 12px;overflow: hidden;}
    .movie_body ul li{margin-top: 12px; display: flex;align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom: 10px;}
    .movie_body .pic_show{width: 64px;height: 90px;}
    .movie_body .pic_show img{width: 100%;}
    .movie_body .info_list{margin-left: 10px;flex: 1;position: relative;}
    .movie_body .info_list h2{font-size: 17px;line-height: 22px;width: 200px;overflow: hidden;white-space: nowrap;text-overflow: clip;}
    .movie_body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;overflow: hidden;white-space: nowrap;text-overflow: clip;}
    .movie_body .info_list .grade{font-weight: 700;color: #faaf00;font-size: 15px;}
    .movie_body .info_list img{width: 50px;position: absolute;right: 10px;top: 5px;}
    .movie_body .btn_mall,.movie_body .btn_pre{width: 47px;height: 27px;line-height: 28px;text-align: center;background-color: violet;}
    .movie_body .btn_pre{background-color: #3c9fe6;}
 </style>
 
<script>
export default {
  data() {
    return {
      hideNotOpen: false,
      hideNotAirCon: false,
      page: 1,
      data: [
        { 
          "id": 1,
          "name": 'High land Coffe',
          "description": 'Coffe shop',
          "address": '17 Lê Thanh Nghị, Hai Bà Trưng',
          "city" : '',
          "phone_number":'',
          "time_open": '4:30',
          "time_close": '6:30',
          "photoUrl": 'https://tailwindcss.com/_next/static/media/fancy-suit-jacket.edfeb695.jpg',
          "air_conditioner": 0,
          "total_seats": 130,
          "empty_seats": 30,
          "user_id": 1,
          "star" : 3.8,
          "status": 'オープン中　',
          
        }
      ]
    }
  },
  computed: {
    filteredInputs() {
      if (this.hideNotAirCon == true && this.hideNotOpen == true)
        return this.data.filter((t) => t.status=='オープン中　').filter((t) => t.air)
      else if(this.hideNotAirCon == true && this.hideNotOpen == false)
        return this.data.filter((t) => t.air==true)
      else if (this.hideNotAirCon == false && this.hideNotOpen == true)
        return this.data.filter((t) => t.status=='オープン中　')
      else return this.data
    },
    showInputs(){

    }
  },
  methods: {
    changehideNotOpen(bool){
      this.hideNotOpen = bool;
      console.log(this.hideNotOpen)
    },
    changehideNotAir(bool){
      this.hideNotAirCon = bool;
      console.log(this.hideNotAirCon)
    }
  }
}
</script>

<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class=" grid grid-cols-7" style="width: 1265px;height:972px; font-family: 'Inter';font-size: 16px;">
  <div  class="grid grid-rows-4 gap-4 col-span-5" >
    <div v-for="inputz in filteredInputs" >
      <div class=" box-border p-3 border-2 border-black rounded-md" style="width:875px; height:225px;">
        <div class="  grid grid-cols-11" >
          <div class=" w-60 h-40 relative col-span-4" style="width:276px; height:185px; margin:7.5px">
            <!--cho nay toi ko chen dc anh len thay link ho nha do ko co link tu database-->
            <img class=" inset-0 w-full h-full rounded-lg" src="https://tailwindcss.com/_next/static/media/fancy-suit-jacket.edfeb695.jpg" alt=""  loading="lazy" />
          </div>
          
          <form class=" p-3 grid grid-rows-7 col-span-6 " style="width:446px;height:180px;">
            <div class=''>
              <a class="text-left font-semibold " style="font-size: 24px;">
                {{inputz.id}}__{{inputz.name}}
              </a>
            </div>
    
            <div class="items-baseline grid grid-cols-4 gap-4">
              <div class="text-left text-xs" >
                {{inputz.description}}
              </div>
            </div>
            
            <div class=" items-baseline text-left">
              <div class="grid grid-cols-6" style="width: 157px;height:36px;font-size:16px">
                  <div class="items-center justify-center">
                    <p v-if="inputz.star > 0.5" > <span class="fa fa-star checked"></span> </p>
                    <p v-else > <span class="fa fa-star"></span> </p>
                  </div>
              
                  <div class="items-center justify-center">
                    <p v-if="inputz.star > 1.5" > <span class="fa fa-star checked"></span> </p>
                    <p v-else > <span class="fa fa-star"></span> </p>
                  </div>
                
                  <div class="items-center justify-center">
                    <p v-if="inputz.star > 2.5" > <span class="fa fa-star checked"></span> </p>
                    <p v-else > <span class="fa fa-star"></span> </p>
                  </div>
                
                  <div class="items-center justify-center">
                    <p v-if="inputz.star > 3.5" > <span class="fa fa-star checked"></span> </p>
                    <p v-else > <span class="fa fa-star"></span> </p>
                  </div>
              
                  <div class="items-center justify-center">
                    <p v-if="inputz.star > 4.5" > <span class="fa fa-star checked"></span> </p>
                    <p v-else > <span class="fa fa-star"></span> </p>
                  </div>
                  <div class="items-center justify-center">
                    {{inputz.star}}
                  </div>
    
    
              </div>
            </div>
            <div class=" space-x-4 text-sm font-medium">
              <span class="fa fa-map-marker" style='font-size:16px;margin-right:5px'> 
               
              </span>
              <span> {{inputz.address}}</span>
              
            </div>
    
            <div class="grid grid-cols-7 text-sm ">
              <i class="fa fa-clock-o col-span-2" style="font-size:16px">
                <a style="margin-left: 9px;"> {{ inputz.time_open }} - {{ inputz.time_close }}</a>
              </i>
              <a class="uppercase　col-span-2　font-semibold " > {{inputz.status}} </a>
              <a class="uppercase　col-span-2　font-semibold" v-if="inputz.air_conditioner" > 空く </a>
              <a class="uppercase　col-span-2　font-semibold" v-else > 空かない </a>
            </div>
          </form>
          <div class=" grid grid-cols-1 ">
            <div>
              <button class="">
                <span class="fa fa-bookmark-o  bookmarkbutton" ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div> 

  <div  class=" p-3 border-none rounded-md grid grid-rows-9 col-span-2" style=" height: 328px; width:328px; background-color:#805D49; color:white;padding:24px">
    <div class="font-semibold text-base grid grid-cols-9">
      <div class="col-span-8" style="font-size:large ;">フィルター</div>
      <div class="fa fa-filter"></div>
    </div>
    <hr>
    <div class="rows-span-3 ">
      <span>営業時間</span>
      <ul>
        <input type="radio" class="checkbox-round" name="checkopen" checked @change="changehideNotOpen(false)">
        <span style="max-width: 3px;">すべて</span>
      </ul>
      <ul>
        <input type="radio" class="checkbox-round" name="checkopen"  @change="changehideNotOpen(true)">
        <span style="max-width: 3px;">開いています</span>
      </ul>
     
    </div>
    <hr>
    <div class="rows-span-3 ">
      <span>エアコン</span>
      <ul>
        <input type="radio"  class="checkbox-round" checked name="checkair" @change="changehideNotAir(false)">
        <span style="max-width: 3px;">効いていない</span>
      </ul>
      <ul>
        <input type="radio" class="checkbox-round" name="checkair" @change="changehideNotAir(true)">
        <span style="max-width: 3px;">効いている</span>
      </ul>
      </div>
  </div>
</div>

</template>

<style>
.done {
  text-decoration: line-through;
}
.checked {
  color: orange;
}
.checkbox-round {
  margin: 2px;
  width: .8em;
  height: .8em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkbox-round:checked {
  background-color: gray;
}
.bookmarkbutton{
  margin: 2px;
  font-size: 40px;
  padding: 15px;
  width: 3em;
  height: 3em;
  border-radius: 6px;
  background-color: #36ABFF;
  color: white;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

}
</style>
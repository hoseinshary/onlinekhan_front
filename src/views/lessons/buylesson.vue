<template>
<div>
    
          <link href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" rel="stylesheet">

<div class="row pt-5">
            <div class="col-12 pb-2">
                <div class="d-flex gap-2">

                  <!-- عنوان صفحه -->
                    <div class="container-title-dashboard d-flex align-items-center">
                        <!--<h2 class="h3 g-dashboard font-16 mt-3">داشبورد من</h2>-->
                        <h2 class="h3 g-dashboard font-18 mt-3">خرید درس</h2>
                    </div>
                   
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex gap-2">
                    <span class="border-title border-title-blue d-block"></span>
                    <span class="border-title border-title-gray d-block"></span>
                </div>
            </div>
        </div>
<!-- دروس -->
<br/>
        <div class="container-course">
          <div class="row">
            <!-- انتخاب مقطع -->
              <div class="col-md-6 col-lg-3 col-xl-2 mb-4">
                  <div class="dropdown dropdown-select-course">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex w-100 " data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="font-12">  انتخاب مقطع تحصیلی</span>
                          <i class="fa-regular fa-angle-down px-2 fs-5 me-auto"></i>
                      </button>
                      <ul  class="dropdown-menu text-end font-12">
                          <li v-for="currentmaghta in maghta" :key="currentmaghta.Id"><a class="dropdown-item" style=" cursor:pointer;" @click="changeMaghta(currentmaghta.Id)">{{currentmaghta.Name}}</a></li>
                      </ul>
                  </div>
              </div>
               <div v-if="this.IsMotavasete" class="col-md-6 col-lg-3 col-xl-2 mb-4">
                  <div class="dropdown dropdown-select-course">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex w-100" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="font-12">انتخاب زیرشاخه تحصیلی</span>
                          <i class="fa-regular fa-angle-down px-2 fs-5 me-auto"></i>
                      </button>
                      <ul class="dropdown-menu text-end font-12">
                          <li v-for="currentmaghta in selectedZirshakhe" :key="currentmaghta.Id">
                            <a style=" cursor:pointer;" @click="changeZirshakhe(currentmaghta.Id)" class="dropdown-item" >{{currentmaghta.Name}}</a></li>
                      </ul>
                  </div>
              </div>
              <div v-if="this.IsMotavasete" class="col-md-6 col-lg-3 col-xl-2 mb-4">
                  <div class="dropdown dropdown-select-course">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex w-100" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="font-12">انتخاب گروه آموزشی تحصیلی</span>
                          <i class="fa-regular fa-angle-down px-2 fs-5 me-auto"></i>
                      </button>
                      <ul class="dropdown-menu text-end font-12">
                          <li v-for="currentmaghta in selectedGorohamoozeshi" :key="currentmaghta.Id">
                            <a style=" cursor:pointer;" @click="changeGoroh(currentmaghta.Id)" class="dropdown-item" >{{currentmaghta.Name}}</a></li>
                      </ul>
                  </div>
              </div>
               
              <!-- باکس انتخاب رشته -->
              <div class="col-md-6 col-lg-3 col-xl-2 mb-4">
                  <div class="dropdown dropdown-select-course">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex w-100" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="font-12">انتخاب پایه تحصیلی</span>
                          <i class="fa-regular fa-angle-down px-2 fs-5 me-auto"></i>
                      </button>
                      <ul class="dropdown-menu text-end font-12">
                          <li v-for="currentmaghta in selectedPaye" :key="currentmaghta.Id">
                            <a style=" cursor:pointer;" @click="changePaye(currentmaghta.Id)" class="dropdown-item" >{{currentmaghta.Name}}</a></li>
                      </ul>
                  </div>
              </div>
            
          </div>

          <!-- فروشگاه -->
          <div class="row">

            <!-- عنوان فروشگاه -->
            <div class="d-flex gap-4">
              <div class="title-right d-flex align-items-end">
                <span class="fs-4">فروشگاه</span>
              </div>
              <div class="title-center flex-grow-1 d-flex justify-content-end flex-column" dir="ltr">
                <span class="font-12">نمایش همه 999 کتاب درسی</span>
                <span class="w-100 d-block border-bottom border-2"></span>
              </div>
            </div>

              <!-- شروع ردیف ناوبری فیلترینگ فروشگاه -->
              <div class="col-12">
                <div class="bg-gray mt-3 rounded d-flex align-items-center justify-content-between p-3">
                  <div class="d-none d-sm-block">
                    <div class="dropdown bg-white rounded shadow">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex hidden-angle-dropdown border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="font-12">تعداد نمایش</span>
                        <i class="fa-regular fa-angle-down pe-2 fs-6 me-auto"></i>
                      </button>
                      <ul class="dropdown-menu text-end end-0 border-gray font-12">
                        <li><a class="dropdown-item" style="cursor:pointer;" @click="changeCount(18)">نمایش 18 مورد</a></li>
                        <li><a class="dropdown-item" style="cursor:pointer;" @click="changeCount(36)">نمایش 36 مورد</a></li>
                        <li><a class="dropdown-item" style="cursor:pointer;" @click="changeCount(72)">نمایش 72 مورد</a></li>
                        <li><a class="dropdown-item" style="cursor:pointer;" @click="changeCount(144)">نمایش 144 مورد</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <span class="px-2">دروس</span>
                  </div>

                  <div class="d-flex align-items-center">
                    <div class="dropdown bg-white rounded shadow d-none d-sm-block">
                      <button type="button" class="btn dropdown-toggle align-items-center d-flex hidden-angle-dropdown border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-light fa-arrow-down-short-wide ps-1 fs-6 me-auto"></i>
                        <span class="font-12">مرتب سازی</span>
                        <i class="fa-regular fa-angle-down pe-2 fs-6 me-auto"></i>
                      </button>
                      <ul class="dropdown-menu text-end end-0 border-gray font-12">
                        <li><a @click="changeSortState(1)" class="dropdown-item" style="cursor:pointer;">ارزان به گران</a></li>
                        <li><a @click="changeSortState(2)" class="dropdown-item" style="cursor:pointer;">گران به ارزان</a></li>
                      </ul>
                    </div>

                    <div class="container-sort-tab d-flex align-items-center px-2 d-none d-sm-block">
                        <div class="nav nav-tabs justify-content-center gap-2 border-0 align-items-center" id="nav-tab" role="tablist">
                          <button class="d-flex nav-link active font-18 bg-transparent border-0 p-0 color-dark-gray" id="nav-tabs-order" data-bs-toggle="tab" data-bs-target="#tabs-1" type="button" role="tab" aria-controls="tabs-1" aria-selected="true">
                            <i class="fa-solid fa-grid"></i>
                          </button>
                          <button class="d-flex nav-link font-18 bg-transparent border-0 p-0 color-dark-gray" id="nav-tab-manager" data-bs-toggle="tab" data-bs-target="#tabs-2" type="button" role="tab" aria-controls="tabs-2" aria-selected="false" tabindex="-1">
                            <i class="fa-solid fa-list"></i>
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
<!-- پایان ناوبری فروشگاه -->


    <!-- شروع باکس فروشگاه - نمایش کتاب ها -->
    <div class="mt-7">
      <div class="tab-content mt-3" id="myTabContent2">
        <!-- نمایش کتاب ها بصورت باکسی -->
        <div class="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs-tab1">
          <div  class="row">
            <div v-for="pack in packages" :key="pack.Id" class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-6">
            <div class="container-card shadow position-relative">
              <div class="img-card position-relative">
                <img :src="'http://159.69.82.251:63839/Api/Package/GetPictureFile/'+pack.ImageFile" class="w-100" alt="">
              </div>
              <div class="card-body px-2 py-3 d-flex flex-column h-105">
                <h5 class="card-title font-14 fw-bold">{{pack.Name}}</h5>
                <div class="d-flex align-items-end mt-auto">
                  <span class="card-text font-12 color-blue">قیمت {{pack.Price.toLocaleString()}} هزار تومان</span>
                  <a @click="addToCart(pack.Id)" style="cursor:pointer;" class="font-12 me-auto color-green">
                    <i class="fa-solid fa-basket-shopping"></i>
                    خرید
                  </a>
                </div>
              </div>

              <div class="info position-absolute p-3 bg-white w-100">
                <h5 class="card-title font-14 fw-bold d-block w-100">{{pack.Name}}</h5>
                <span class="font-12 d-block mt-3">{{pack.Description}}</span>
                <div class="px-2 mt-4 mb-4">
                  <span class="line d-block"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div>
                    <i class="fa-solid fa-star checked font-12"></i>
                    <i class="fa-solid fa-star checked font-12"></i>
                    <i class="fa-solid fa-star checked font-12"></i>
                    <i class="fa-solid fa-star checked font-12"></i>
                    <i class="fa-solid fa-star checked font-12"></i>
                  </div>
                  
                </div>
                <div class="d-flex flex-column mt-4">
                  

                  <div class="d-flex align-items-center mt-auto">
                    <span class="card-text font-12 color-blue">قیمت {{pack.Price.toLocaleString()}} هزار تومان</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
        <!-- نمایش کتاب ها بصورت لیستی -->
        <div class="tab-pane list fade " id="tabs-2" role="tabpanel" aria-labelledby="tabs-2">
          <div class="row">
            <div v-for="pack in packages" :key="pack.Id" class="col-lg-6 mb-6">
              <div class="container-card list position-relative d-flex">
                <div class="img-card position-relative w-100">
                  <img :src="'http://159.69.82.251:63839/Api/Package/GetPictureFile/'+pack.ImageFile" class="w-100" alt="">
                </div>

                <div class="info list p-3 bg-white w-100">
                  <h5 class="card-title font-14 fw-bold d-block w-100">{{pack.Name}}</h5>
                  <span class="font-12 d-block mt-3">{{pack.Description}}</span>
                  <span class="card-text font-16 color-blue mt-4 d-block">قیمت {{pack.Price.toLocaleString()}} هزار تومان</span>
                  <div class="px-2 mt-2 mb-4">
                    <span class="line d-block"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div>
                     <i class="fa-solid fa-star checked font-12"></i>
                     <i class="fa-solid fa-star checked font-12"></i>
                      <i class="fa-solid fa-star checked font-12"></i>
                      <i class="fa-solid fa-star checked font-12"></i>
                      <i class="fa-solid fa-star checked font-12"></i>
                    </div>
                   
                  </div>
                  <div class="d-flex flex-column mt-4">
                    

                    <div class="d-flex align-items-center mt-auto">

                      <a @click="addToCart(pack.Id)" style="cursor:pointer;" class="font-16 color-green">
                        <i class="fa-solid fa-basket-shopping"></i>
                        خرید
                      </a>
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      <!---->
    </div>
    <!-- پایان باکس فروشگاه - نمایش کتاب ها -->
                <!-- pagination -->
                <section class="mt-4 mb-0">
                  <div  class="d-flex flex-row justify-content-center">
                    <div @click="nextPage(pagination-1)" v-if="pagination > 1" class="m-1 bg-d9d9d9 p-1 justify-content-center rounded-4 my-auto curser-point">قبلی</div>
                    <div v-for="num in pagenumber" :key="num" >
                      <a @click="nextPage(num)" style="cursor:pointer" v-if="num != pagination" class="m-1 pagination justify-content-center my-auto">{{num}}</a>
                      <a v-else class="bg-danger text-white m-1 pagination justify-content-center my-auto">{{num}}</a>
                    </div>
                    <div @click="nextPage(pagination+1)" v-if="pagenumber > pagination" class="m-1 bg-d9d9d9 p-1 justify-content-center rounded-4 my-auto curser-point">بعدی</div>
                  </div>
                </section>
                <!-- pagination -->
        </div>
</div>

</template>
<script>
import router from "src/router";
import axiosQuestion from "src/plugins/axiosQuestion";
import axios from "src/plugins/axios";
import { vxm } from "src/store";
import { LocalStorage } from "quasar";

import { Notify } from 'quasar'

export default ({
  
    data() {
         return {
            educationTree:{},
            maghta:{},
            selectedPaye:{},
            selectedZirshakhe:{},
            selectedGorohamoozeshi:{},
            IsMotavasete:false,
            lastSelected: 0,
            packages:{},
            allpackages:{},
            showingCount: 18,
            pagination: 1, 
            pagenumber: 0,
            sortState: 0
         }
    },
    methods:{
       getEducationTree()
       {
         axiosQuestion.get(`/api/EducationTree/GetAll`)
      .then(response => {
              this.educationTree = response.data;

              this.maghta = this.educationTree.filter((edu)=> edu.ParentEducationTreeId == 7)
              console.log(this.maghta);
      });

       },
       changeMaghta(id)
       {
         this.lastSelected = id;
         if(id==38)
         {

            this.IsMotavasete = true;
            this.selectedPaye = {};
            this.selectedZirshakhe = this.educationTree.filter((edu)=> edu.ParentEducationTreeId == id);
            this.selectedGorohamoozeshi = {};
            this.selectedPaye = {};
         }
         else
         {
            this.IsMotavasete = false;
         this.selectedPaye = this.educationTree.filter((edu)=> edu.ParentEducationTreeId == id);
           
         }
       },
       changeZirshakhe(id)
       {
         this.lastSelected = id;
         this.selectedGorohamoozeshi = this.educationTree.filter((edu)=> edu.ParentEducationTreeId == id);
         this.selectedPaye = {};
         
       },
       changeGoroh(id)
       {
        this.lastSelected = id;
        this.selectedPaye = this.educationTree.filter((edu)=> edu.ParentEducationTreeId == id);
       },
       changePaye(id)
       {
         this.lastSelected = id;
         axios.get('/api/Package/GetAllByEducationTreeId?ids='+id).then((response) => {
            this.allpackages = response.data;
           
            this.pagination = 1;
            this.changeShowingCount(this.showingCount);
            
           
         })
       },
       addToCart(id)
       {
         var shoppingbag = LocalStorage.get.item('Shoppingbag');
         var pack = this.allpackages.find(pack => pack.Id === id);
         shoppingbag = [];
         if(shoppingbag == null)
          shoppingbag = [];
          else{
              if(shoppingbag.find(pack=>pack.Id == id) != null)
              {
                Notify.create({
          progress: true,
          message: pack.Name + 'در سبد خرید شما وجود دارد',
          color: 'red',
          actions: [
            { label: 'رفتن به سبد خرید', color: 'yellow', handler: () => { router.push('/shoppingbag') } }
          ]
        })
                return
              }
          }
         
         shoppingbag.push(pack);
         LocalStorage.set('Shoppingbag',shoppingbag);
         console.log(LocalStorage.get.item('Shoppingbag'));
         Notify.create({
          progress: true,
          message: pack.Name + 'به سبد خرید شما اضافه شد ',
          color: 'green',
          actions: [
            { label: 'رفتن به سبد خرید', color: 'yellow', handler: () => { router.push('/shoppingbag') } }
          ]
        })

       },
       changeCount(count)
       {
          this.pagination = 1;
          this.changeShowingCount(count);
       },
       changeShowingCount(count)
       {
          this.showingCount = count;
           this.pagenumber = (this.allpackages.length / this.showingCount);
           this.pagenumber = Math.ceil(this.pagenumber);
           var pagecal = ((this.pagination-1)*this.showingCount)
            var countOfShow = this.pagination * this.showingCount;
            console.log(this.allpackages.length)
          this.packages = this.allpackages.slice(pagecal,countOfShow);
       },
       nextPage(page)
       {
          this.pagination = page;
          this.changeShowingCount(this.showingCount);          
       },
       changeSortState(state)
       {
        if(state == 1)
          this.packages = this.packages.sort((a, b) => a.Price - b.Price );
        else if(state==2)
         this.packages = this.packages.sort((a, b) => b.Price - a.Price );
       }
       
    },
    mounted()
    {
     this.getEducationTree();
     axios.get('/api/Package/GetAll').then((response) => {
            this.allpackages = response.data;
            this.pagination = 1;
            this.changeShowingCount(this.showingCount);
            
           
         });  
    }
})
</script>
<style>
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('../../css/fonts/iran-sans-fa-num.woff2') format('woff2'),
    url('../../css/fonts/iran-sans-fa-num.woff') format('woff');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    src: url('../../css/fonts/iran-sans-fa-num-bold.woff2') format('woff2'),
    url('../../css/fonts/iran-sans-fa-num.woff') format('woff');
}

body {
    font-family: "IRANSans" !important;
}
     @import '../../css/dashboard/styles/course.css';
     
</style>
<template >
    <div>
              <link href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" rel="stylesheet">

        <div class="row pt-4">
            <div class="col-12 pb-2">
                <h2 class="h3 g-dashboard font-16">داشبورد من</h2>
            </div>
            <div class="col-12">
                <div class="d-flex gap-2">
                    <span class="border-title border-title-blue d-block"></span>
                    <span class="border-title border-title-gray d-block"></span>
                </div>
            </div>
        </div>
<!-- پایان قسمت عنوان صفحه -->
        <!-- show any content -->

        <!-- داشبورد من -->
        <!-- گریدبندی گلتراش -->
        <br/>
        <div class="row">
            <div class="col-lg-4">
              <div class="c-card d-flex flex-column overflow-hidden h-100">
                <div class="bg-gradient position-relative height-100 p-3">
                    <span v-if="$q.localStorage.get.item('IsTeacher')" class="text-white fw-bold font-16">دبیر عزیز خوش آمدید</span>
                    <span v-else class="text-white fw-bold font-16">دانش آموز عزیز خوش آمدید</span>
                    <span class="img-profile position-absolute d-block overflow-hidden bg-white p-1">
                <img :src="$q.localStorage.get.item('ProfilePic')" class="w-100">
            </span>
                </div>
                <div class="p-3">
                    <div class="row">
                        <div class="col-4">
                            <span class="d-block mt-6 font-12">{{$q.localStorage.get.item('FullName')}}</span>
                        </div>
                        <div class="col-4">
                            <span class="d-block text-center font-12">{{this.assays.length}}</span>
                            <span class="d-block text-center mt-2 font-12">آزمون</span>
                        </div>
                        <div class="col-4">
                            <span class="d-block text-center font-12">0</span>
                            <span class="d-block text-center mt-2 font-12">سوال</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-lg-2">
              <div class="c-card c-card-M">
                <div class="c-card overflow-hidden p-3">
                    <div class="">
                        <span class=" fw-bold font-12">جدیدترین آزمون من</span>
                    </div>

                    <div class="d-flex mt-3">
                        <span class="font-10">{{this.assays[this.assays.length - 1]}}</span>
                        <a href="/assay" class="font-10 me-auto">مشاهده</a>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="col-lg-2">
              <div class="c-card c-card-M overflow-hidden p-3">
                <div class="">
                    <span class="font-12 fw-bold">جدیدترین پکیج خریداری شده</span>
                </div>

                <div class="d-flex mt-3">
                    <span class="font-10">ریاضی 1</span>
                    <a href="#" class="font-10 me-auto">مشاهده</a>
                </div>
            </div>
            </div>
            
        </div>
        <div class="row">
          <div class="col-lg-4">
            <br/>
            <!-- باکس ساخت آزمون -->
            <div class="c-card d-flex overflow-hidden bg-gradient height-M">
              <div class="w-100 py-4">
                  <a href="#" class="d-block w-100 h-100 d-flex justify-content-center align-items-center gap-2">
                      <i class="fa-light fa-circle-plus text-white fs-3"></i>
                      <span class="text-white font-16 ">ساخت آزمون</span>
                  </a>
              </div>
          </div>
          <!-- انتخای باکس ساخت آزمون -->
          <br/>
          <!-- باکس مشاهده آخرین آزمون ها -->
          <div class="c-card overflow-hidden p-3">
            <div class="">
                <span class="font-16 fw-bold">وضعیت آزمون های من:</span>
            </div>
            <div class="container-tab mt-4">
                <div class="nav nav-tabs justify-content-center gap-2 border-0" id="nav-tab" role="tablist">
                    <button class="nav-link active font-12" id="nav-tabs-order" data-bs-toggle="tab" data-bs-target="#tabs-1" type="button" role="tab" aria-controls="tabs-1" aria-selected="true">در حال برگزاری</button>
                    <button class="nav-link font-12" id="nav-tab-manager" data-bs-toggle="tab" data-bs-target="#tabs-2" type="button" role="tab" aria-controls="tabs-2" aria-selected="false">تمام شده</button>
                </div>
                <div class="tab-content mt-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs-tab1">
                        <span class="d-block mb-2 font-12">{{this.assays[this.assays.length - 1]}}</span>
                    </div>
                    <div class="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs-2">
                        <span class="d-block mb-2 font-12">{{this.assays[this.assays.length - 1]}}</span>
                    </div>
                </div>
            </div>

            <div class="link-arrow text-start d-flex justify-content-end">
                <a href="#">
                    <i class="fa-regular fa-arrow-left-to-line fs-3"></i>
                </a>

            </div>
        </div>
        <!-- انتهای باکس مشاهده آخرید آزمون ها -->
          </div>
          <div class="col-lg-8">
            <!-- ************************************************ -->
            <!-- اینجا دیتاهای پروفایل قرار میگیره و پروفایل کاربر لوود میشه -->
            <!-- ***************************************************** -->
          </div>
        </div>
  </div>
</template>
<script>
import axios from "src/plugins/axios";
export default  {
    
    data() {
       return {
          
        
        assays:{}
    }
    },
    methods:{
       
        
        
        getAssays()
        {
            axios.get(`/api/user/GetUserAssay`)
      .then(response => {
              this.assays = response.data;
      });
        }
    },
     
    
    mounted() {
        this.getAssays();
    }
}


</script>

<style>

</style>



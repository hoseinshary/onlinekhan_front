<template >
    <div>
      <link href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" rel="stylesheet">
        <div class="row pt-5">
          <div class="col-12 pb-2">
            <h2 class="h3 g-dashboard font-16">سبد خرید</h2>
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
        <!-- Fateme Tekrar -bill-start -->
        <section class="container-xxl bill">
          <div class="row">
            <!-- ستون سمت راست -->
            <!-- کیف پول و باکس سئوال -->
            <div class="col-md-3 col-sm-12 wallet-question">
             
              <!-- باکس سئوال -->
              <section>
                <p class="question-title font-16">
                  ... سوالی داشتم
                </p>
                <p class="question-text font-12">من اینجا هستم تا تو را راهنمایی کنم
                  بنابراین اگر هر سوالی داری
                  برایم ارسال کن
                </p>
                <button class="btn btn-success text-white mb-3" type="submit" id="question-send">
                  ارسال
                </button>
              </section>
            </div>
            <!-- پنل اصلی سمت چپ -->
            <div class="col-md-9 col-sm-12 p-0">
              <div class="mainLayout bg-f2f2f2">
                <section class="card border-0 pt-4 ps-4 pe-4">
                  <div class="row text-center mb-4">
                    <div class="col-md-3 col-3 fw-bold font-14">تصویر محصول</div>
                    <div class="col-md-5 col-5 fw-bold font-14">محصول</div>
                    <div class="col-md-4 col-4 fw-bold font-14">قیمت(تومان)</div>
                  </div>
                  
                <div v-for="pack in packages" :key="pack.Id">


                  <div class="row text-center mb-4 align-items-center mb-3" :id="pack.Id">
                    <div class="col-md-3 col-3 prodBorder">
                      <div class="prodImg mx-auto position-relative curser-point" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        <img :src="'http://159.69.82.251:63839/Api/Package/GetPictureFile/'+pack.ImageFile" width="auto" height="100" />
                        <img src="../../assets/img/search.png" class="prodImg-search" width="30" height="30">
                      </div>
                    </div>
                    <div class="col-md-5 col-5 text-end pe-5 prodBorder d-flex">
                      <div class="align-items-center font-12">
                          {{pack.Name}}
                      </div>
                    </div>
                    <!--MODAL-->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-body d-flex flex-row justify-content-center">
                          <img src="../../assets/img/farsi.jpeg" width="auto" height="400"
                            class="p-1 bg-white rounded-1" />
                          <div class="position-relative">
                            <img src="../../assets/img/close.png" width="auto" height="35"
                              class="p-0 bg-white rounded-5 position-absolute modal-close" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--MODAL-->
                    <div class="col-md-4 col-4 d-flex flex-row">
                      <div class="flex-fill font-12">{{pack.Price.toLocaleString()}}</div>
                      <div data-bs-toggle="modal" @click="setTempDelete(pack.Id)" data-bs-target="#deleteModal" class="curser-point">
                        <img src="../../assets/img/delete.png" />
                      </div>
                    </div>
                   
                  </div>
                  </div>
                </section>
                <!-- پایان جدول -->
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header border-0 bg-danger position-relative">
                              <i class="fa-light fa-times text-white fs-5 bg-danger close-btn position-absolute"
                                data-bs-dismiss="modal"></i>
                            </div>
                            <div class="modal-body">
                              آیا از حذف کتاب درسی مطمین هستید؟
                            </div>
                            <div class="modal-footer border-0 d-flex flex-row justify-content-between">
                              <button type="button" class="btn btn-dark" data-bs-dismiss="modal"
                                @click="removeItem()">حذف از سبد خرید
                                <i class="fa fa-trash text-white fs-5"></i>
                              </button>
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">بازگشت</button>
                            </div>
                          </div>
                        </div>
                      </div>
                <section class="row justify-content-between">

                  <div class="col-md-6 col-sm-6 col-6">
                    <!-- باکس اعمال کد تخفیف -->
                    <div
                      class="card border-0 justify-content-between d-flex flex-row text-muted font-12 discount align-items-center">
                      <div class="d-block p-2 text-nowrap">کد تخفیف:</div>
                      <div class="verticalLine"></div>
                      <input class="form-control border-0 flex-shrink-1" />
                      <button class="btn btn-success text-white">
                        اعمال کد تخفیف
                      </button>
                    </div>
                    <!-- پایان باکس کد تخفیف -->
                    
                    <!-- پایان -->
                  </div>
                  <!-- باکس محاسبه قیمت -->
                  <div class="col-md-5 col-sm-5 col-5">
                    <div class="card border-0 justify-content-between d-flex flex-row p-2 text-muted font-12">
                      <div>
                        <span class="d-block p-1">قیمت کل</span>
                        <span class="d-block p-1">مبلغ کسر شده</span>
                      </div>
                      <span class="vl"></span>
                      <div class="text-start">
                        <span class="d-block p-1">{{this.totalPrice}} تومان</span>
                        <span class="d-block p-1">۰ تومان</span>
                      </div>
                    </div>
                    <div
                      class="card border-0 justify-content-between d-flex flex-row p-2 fs-6 fw-bold bg-c2c2c2 font-12">
                      <span class="p-1">مبلغ قابل پرداخت</span>
                      <span class="p-1 text-start">{{this.totalPrice}} تومان</span>
                    </div>
                  </div>
                  <!-- پایان باکس -->
                </section>
                <div class="row justify-content-between">
                  <div class="col-md-4 col-4 col-xs-6">
                    <button class="btn btn-light mainLayout-btn align-items-center text-nowrap" @click="gotoDashboard()" type="submit">ابطال و
                      بازگشت</button>
                  </div>
                  <div class="col-md-4 col-4 col-xs-4">
                    <button class="btn btn-success text-white align-items-center mainLayout-btn" @click="buyProduct" type="submit">پرداخت</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  </div>
</template>
<script>
import axios from "src/plugins/axios";
import util from "src/utilities";
import router from "src/router";

import { API_URL } from "src/utilities/site-config";
export default  {
    
    data() {
       return {
          packageids : [1,12,13],
          tempDeleteId: -1,
          totalPrice: 0,
        packages:{}
    }
    },
    methods:{
       
        
        setTempDelete(id)
        {
          this.tempDeleteId = id;
        },
        gotoDashboard()
        {
          router.push("/dashboard");
        },
        calculatePrice()
        {
          this.totalPrice = 0;
          this.packages.forEach((value, index) => {
            this.totalPrice += value.Price;
          });
        },
        buyProduct()
        {
          var data = {packagesId: this.packageids};
          axios.post(`/api/sale/Create`,data)
      .then(response => {
            if(response.data.MessageType == 1)
            {
              //RedirectToDargahPardakht
              router.push("/shoppingbag/afterPurchase");
            }
      });
        },
        removeItem()
        {
          this.packageids.splice(this.packageids.indexOf(this.tempDeleteId), 1);
          let i = this.packages.map(item => item.Id).indexOf(this.tempDeleteId); // find index of your object
          this.packages.splice(i, 1); // remove it from array;
          this.calculatePrice();
        },
        getPackages()
        {
              var param = { ids: this.packageids };
            axios.get(`/api/package/GetPackages?`+util.toParam(param))
      .then(response => {
              console.log(response.data);
              this.packages = response.data;
              this.calculatePrice();
      });

        }
    },
     
    
    mounted() {
        this.getPackages();
        const deleteFromBasket1 = document.getElementById("deleteFromBasket1")
const deleteFromBasket2 = document.getElementById("deleteFromBasket2")

deleteFromBasket1.addEventListener("click", (e) => {
    e.stopPropagation();
    book1.style = 'display: none';
})
deleteFromBasket2.addEventListener("click", (e) => {
    e.stopPropagation();
    book2.style = 'display: none';
})
    }
}


</script>

<style>
     @import '../../css/dashboard/styles/shopping-bag.css';
</style>



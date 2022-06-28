<template>
    <div>
    <section class="container-xxl bill">
          <div class="row">
            <div class="col-md-3 col-sm-12 wallet-question">
              <section>
                <p class="question-title font-16">
                  ... سوالی داشتم
                </p>
                <p class="question-text font-12">من اینجا هستم تا تو را راهنمایی کنم
                  بنابراین اگر هر سوالی داری
                  برایم ارسال کن
                </p>
                <button class="btn btn-success text-white mb-3" id="question-send">
                  ارسال
                </button>
              </section>
            </div>
            <div class="col-md-9 col-sm-12 p-0">
              <div class="basket">

                <div v-if="this.MessageType == 1" class="purchaseSuccess mx-2 my-4 px-3 py-2 rounded-2 bg-cff6e9 position-relative">
                  <h5 class="mb-4 title fw-bold pt-2">انجام شد !</h5>
                  <p class="font-12 pb-4 text">کاربر گرامی <br>خرید شما با موفقیت انجام شد.</p>
                  <div class="d-flex flex-row justify-content-between">
                    <button  type="submit" @click="gotoLesson()" class="text-white btn btn-primary pt-3 pb-3 ps-4 pe-4">رفتن به صفحه
                      دروس</button>
                    <button type="submit" @click="gotoDashboard()" class="text-white btn btn-dark pt-3 pb-3 ps-4 pe-4">بازگشت به صفحه
                      اصلی</button>
                  </div>
                  <i class="fa fa-thumbs-up rounded-5 p-2 position-absolute bg-cff6e9" aria-hidden="true"></i>
                </div>

                <div v-if="this.MessageType == 2" class="purchaseFail mx-2 my-4 px-3 py-2 rounded-2 bg-F8DAE2 position-relative">
                  <h5 class="mb-4 title fw-bold pt-2">خطایی رخ داده است !</h5>
                  <p class="font-12 pb-4 text">کاربر گرامی <br>متاسفانه روند خرید شما با اشکال مواجه شده است.</p>
                  <div class="d-flex flex-row justify-content-between">
                    <button class=" btn btn-primary text-white pt-3 pb-3 ps-4 pe-4" id="question-send2">
                      اعلام به
                      پشتیبان
                      <i class="fa fa-headphones text-white pe-2" aria-hidden="true"></i>
                    </button>
                    <button type="submit" @click="gotoDashboard()" class="text-white btn btn-dark pt-3 pb-3 ps-4 pe-4">بازگشت به صفحه
                      اصلی</button>
                  </div>
                  <i class="fa fa-solid fa-light-emergency-on rounded-5 p-2 bg-F8DAE2 position-absolute" aria-hidden="true"></i>
                </div>
                <div v-if="this.MessageType == 3" class="purchaseAlert mx-2 my-4 px-3 py-2 rounded-2 bg-F6D6BF position-relative">
                  <h5 class="mb-4 title fw-bold pt-2">هشدار !</h5>
                  <p class="font-12 pb-4 text">کاربر گرامی <br>ممکن است روند خرید شما با اختلال مواجه شده باشد.</p>
                  <div class="d-flex flex-row justify-content-between">
                    <button class=" btn btn-primary text-white pt-3 pb-3 ps-4 pe-4" id="question-send1">
                      اعلام به
                      پشتیبان
                      <i class="fa fa-headphones text-white pe-2" aria-hidden="true"></i>
                    </button>
                    <button type="submit" @click="gotoDashboard()" class="text-white btn btn-dark pt-3 pb-3 ps-4 pe-4">بازگشت به صفحه
                      دروس </button>
                  </div>
                  <i class="fa fa-solid fa-diamond-exclamation rounded-5 p-2 bg-F6D6BF position-absolute" aria-hidden="true"></i>
                </div>

              </div>
            </div>
          </div>
        </section>
    </div>
</template>
<script>
import router from "src/router";
export default ({
    data() {
         return {
        MessageType: 1
         }
    },
    methods:{
        gotoDashboard()
        {
            router.push("/dashboard");
        },
        gotoLesson()
        {
            router.push("/lesson");
        }
    },
    mounted()
    {
const main = document.getElementById("main");
const popUpPage = document.getElementById("popUp-page");
const question_send1 = document.getElementById("question-send1");
const question_send2 = document.querySelector("#question-send2");
const popUpImg = document.getElementById("popUpImg");

popUpImg.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(0px)';
    popUpPage.style = 'display:none';
})
question_send1.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
question_send2.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
    }
})
</script>

<style>
@import '../../css/dashboard/styles/after-purchase.css';
</style>

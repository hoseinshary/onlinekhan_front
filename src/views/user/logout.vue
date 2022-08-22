<template>
  <q-layout dir="rtl" view="lHh Lpr lFf" class="at-ligon-background">

        <q-page-container v-if="!isMobile()" class="at-login">
          <div class="row">
            <div class="col-3"></div>
            <!-- قسمت تبلیغات صفحه ثبت نام -->
            <div class="col-3" >
              <div class="at-login-ad column">

                <div class="q-my-lg">
                  <h6 class="at-titr">
                      کاربر عزیز ،
                  </h6>
                  <p class="at-description">
                    خوشحالیم که ساعاتی را باهم بودیم.
                  </p>
                </div>

                <div class="at-mid-ad">
                    <p>
                        در مدتی که تو نیستی تو را در جریان تمامی اطلاعیه ها قرار خواهیم گذاشت.
                    </p>
                </div>

                <div class="at-login-suggestion q-my-lg">
                  <h5 class="at-titr">
                    پیشنهاد ویژه امروز
                  </h5>
                  <p class="q-my-sm">
                    میدونستی که میتونی تنها با یک کلیک از جدیدترین نمونه سوالات استادت مطلع بشی ...
                  </p>
                  <router-link to="" class="q-my-sm">
                    اینجا رو کلیک کن ...!!!
                  </router-link>
                </div>

              </div>
            </div>

            <!-- قسمت اصلی -->
            <div class="col-3">
              <div class="at-login-form q-pa-lg">
                <div class="text-left">
                  <router-link class="at-back-btn"  to="/dashboard">
                    بازگشت
                  </router-link>
                </div>
                <div class="column items-center justify-center q-mt-sm q-mb-lg">
                  <div class="at-logo">
                    <img src="" alt="">
                  </div>
                  <div>
                      <h5 style="font-weight:700;" class="q-my-md">
                          این پنجره خروج از سایت است!!!
                      </h5>
                      <p class="text-center" style="color:#e4015c;">
                          آیا تمامی کارهایت را انجام داده ای ؟
                      </p>
                  </div>
                  
                </div>


                <div class="at-controls column justify-center items-center q-my-lg">

                    <div class="q-my-sm">
                      <q-btn 
                      to="/dashboard"
                      class="at-login-btn">
                        خیر ! می خواهم برگردم
                      </q-btn>
                    </div>

                    <div class="at-signup-btn q-my-sm">
                        <q-btn @click="logout" flat>
                          بلی ، می خواهم خارج شوم.
                        </q-btn>
                    </div>

                </div>
              </div>

            </div>

            <div class="col-3"></div>
          </div>
        </q-page-container>
        <q-page-container style="margin:30px" v-else class="at-login">
            <!-- قسمت اصلی -->
            <div class="col-3">
              <div class="at-login-form q-pa-lg">
                <div class="text-left">
                  <router-link class="at-back-btn"  to="/dashboard">
                    بازگشت
                  </router-link>
                </div>
                <div class="column items-center justify-center q-mt-sm q-mb-lg">
                  <div class="at-logo">
                    <img src="" alt="">
                  </div>
                  <div>
                      <h5 style="font-weight:700;" class="q-my-md">
                          این پنجره خروج از سایت است!!!
                      </h5>
                      <p class="text-center" style="color:#e4015c;">
                          آیا تمامی کارهایت را انجام داده ای ؟
                      </p>
                  </div>
                  
                </div>


                <div class="at-controls column justify-center items-center q-my-lg">

                    <div class="q-my-sm">
                      <q-btn 
                      to="/dashboard"
                      class="at-login-btn">
                        خیر ! می خواهم برگردم
                      </q-btn>
                    </div>

                    <div class="at-signup-btn q-my-sm">
                        <q-btn @click="logout" flat>
                          بلی ، می خواهم خارج شوم.
                        </q-btn>
                    </div>

                </div>
              </div>

            </div>

            <div class="col-3"></div>

        </q-page-container>
        

  </q-layout>

  
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import { userLoginValidations } from "src/validations/user/userLoginValidation";
@Component({
  validations: userLoginValidations,

  components: {

  }
})
export default class UserLoginVue extends Vue {
  $v: any;

  //### data ###
  userStore = vxm.userStore;
  loginUser = vxm.userStore.loginUser;
  //--------------------------------------------------

  //### methods ###
  logout()
  {
    console.log("test");
    this.userStore.logout(this);
  }
  isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  //--------------------------------------------------
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
.at-login{
  margin: 4rem 0;
}
.at-login-ad{
  background-color: #1976d2;
  padding: 1rem 1.8rem;
  height: 100%;
}
.at-titr{
  color: #fff;
  font-weight: 700;
}
.at-description{
  color: #b5ddfc;
}
.at-mid-ad{
    margin: auto 0;
    color: #fff;
}
.at-login-suggestion{
  font-weight: bold;
}
.at-login-suggestion a{
  text-decoration: none;
  color: #fff;
}

.at-login-form{
  color: #000;
  background-color: #f6f6f6 ;
  
}
.at-login-form .q-input-target, .q-input-shadow {
  color: #3d3d3d;
}
.at-login-form .q-field-bottom {
  font-size: 10px;
}
.at-login-form .q-field-with-error .q-field-bottom,
.at-login-form .q-if-error:not(.q-if-inverted) .q-if-label {
  color:#e5310d;
}
.at-back-btn{
  color: #e4015c;
  background-color: transparent;
}
.at-logo{
  width: 25%;
}
.at-logo img{
  width: 100%;
  height: auto;
}
.at-titr-form{
  font-weight: bold;
  width: 100%;
  padding: 0 2rem;
}


.at-forget-pass{
  color: #e4015c;
  margin-left: auto;
}
.at-login-btn{
  background-color: #1976d2;
  color: #f7f7f7;
  border-radius: 1rem;
  padding: .1rem 2.5rem;
  font-size: 1.5rem;  
}
.at-signup-btn .q-btn{
  color: #1976d2;
}

</style>

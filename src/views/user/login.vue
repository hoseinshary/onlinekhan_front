<template>
  <q-layout view="lHh Lpr lFf" class="at-ligon-background">
    <!-- <q-page-container class="col-12">
      <section class="row">
        <div class="col-md-7 main-pic gt-md"></div>
        <div class="col-lg-5 main-input q-pa-sm">
          <section class="row justify-center content-center">
            <div class="logo"></div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 q-py-lg">
              <q-input
                v-model="loginUser.Username1"
                placeholder="نام کاربری"
                color="white"
                :before="[
                  {
                    icon: 'person',
                  }
                ]"
              />
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 q-pb-lg">
              <q-input
                v-model="loginUser.Password1"
                type="password"
                placeholder="رمز عبور"
                color="white"
                @keyup.enter="login"
                :before="[
                  {
                    icon: 'lock',
                  }
                ]"
              />
            </div>
            <div class="col-12 text-center">
              <button class="q-ma-sm btn btn-login" @click="login">
                ورود
                <q-icon name="keyboard_backspace"></q-icon>
              </button>

              <button class="q-ma-sm btn btn-login bg-green" @click="openModalRegister">
                <i class="fa fa-pencil-square q-mx-xs"></i>ثبت نام
               </button>

               <div class="row center">
              <router-link to="/resume/registration" class="q-ma-sm btn btn-contribute">همکاری با ما</router-link>
               </div>

            </div>
          </section>
        </div>
        <div class="col-12 footer-pic gt-md">
          <span></span>
          <div class="text-center">
            <div class="line">
              <span class="circle"></span>
            </div>
            <p>سامانه جامع آموزش</p>
            <div class="line">
              <span class="circle"></span>
            </div>
          </div>
        </div>
      </section>
    </q-page-container> -->

        <q-page-container class="at-login">
          <div class="row">
            <div class="col-3"></div>
            <!-- قسمت تبلیغات صفحه ثبت نام -->
            <div class="col-3" >
              <div class="at-login-ad">
                <div class="q-my-lg">
                  <h6 class="at-titr">
                    صفحه ورود به سایت آنلاین خوان
                  </h6>
                  <p class="at-description">
                    خوشحالیم که دوباره به ما سر زدید.
                  </p>
                </div>
                <div class="at-login-suggestion">
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
                <div class="text-right">
                  <router-link class="at-back-btn"  to="/">
                    بازگشت
                  </router-link>
                </div>
                <div class="column items-center justify-center q-my-sm">
                  <div class="at-logo">
                    <img src="" alt="">
                  </div>
                  <div class="at-titr-form ">
                    <div>
                      <h5 class="at-titr-x">
                        آنلاین خوان
                      </h5>
                    </div>
                  </div>
                  <div>
                    <p class="q-mt-sm">
                      آزمون سازی و ارزشیابی هوشمند
                    </p>
                  </div>
                </div>

                <div class="at-form q-my-sm">
                  <q-field :error="$v.loginUser.Username1.$error" error-label="لطفا یک نام کاربری صحیح وارد کنید">
                    <q-input 
                    autofocus
                    @blur="$v.loginUser.Username1.$touch"
                    v-model.trim="loginUser.Username1" float-label="نام کاربری" />
                  </q-field>

                  
                  <q-field :error="$v.loginUser.Password1.$error" error-label="لطفا یک رمز عبور صحیح وارد کنید">
                    <q-input 
                    @blur="$v.loginUser.Password1.$touch"
                    v-model.trim="loginUser.Password1" type="password" float-label="رمز عبور" />
                  </q-field>

                  <div class="row q-my-md">

                    <q-checkbox label="مرا به خاطر بسپار"  v-model="checked"/>

                    <router-link to="forgotpassword"  class="at-forget-pass">
                      رمز عبورم را فراموش کرده ام
                    </router-link>
                    
                  </div>

                </div>

                <div class="at-controls column justify-center items-center">
                    <div class="q-my-sm">
                      <q-btn 
                      @click="login"
                      class="at-login-btn">
                        ورود
                      </q-btn>
                    </div>
                    <div class="at-signup-btn q-my-sm">
                      <p>
                        هنوز در سایت ثبت نام نکرده اید؟
                        <q-btn flat to="/user/register">
                          ثبت نام در سایت
                        </q-btn>
                      </p>
                    </div>
                </div>
              </div>

            </div>

            <div class="col-3"></div>
          </div>

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
    ModalRegister: () => import("./registerModal.vue")
  }
})
export default class UserLoginVue extends Vue {
  $v: any;

  //### data ###
  userStore = vxm.userStore;
  loginUser = vxm.userStore.loginUser;
  //--------------------------------------------------

  //### methods ###
  login() {
    this.userStore.login(this);
  }

  openModalRegister()
  {
    console.log(1);
    //this.userStore.resetRegisterModal();
    this.userStore.OPEN_MODAL_REGISTER(true);
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
.at-login-suggestion{
  margin-top: 10rem;
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

.at-titr-x {
  font-size: 22px;
  font-weight:bolder ;
 overflow: hidden;
 text-align: center;
}
.at-titr-x:before,
.at-titr-x:after {
 background-color: #42a5f5;
 content: "";
 display: inline-block;
 height: 1px;
 position: relative;
 vertical-align: middle;
 width: 50%;
}
.at-titr-x:before {
 right: 0.5em;
 margin-left: -50%;
}
.at-titr-x:after {
 left: 0.5em;
 margin-right: -50%;
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
/* .login-layout {
  background-color: #034da2;
}

.login-layout .main-input {
  height: 80vh;
}
.login-layout .main-input .logo {
  background-image: url("../../assets/img/logo2.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 177px;
  max-width: 100%;
  width: 477px;
}

.login-layout .main-input > section {
  height: 100%;
}

.login-layout .main-input .q-input {
  background-color: white;
  height: 80px;
  border-radius: 20px;
  padding-bottom: 27px;
}

.login-layout .main-input .q-input::after,
.login-layout .main-input .q-input::before {
  content: none;
}

.login-layout .main-input input {
  height: 30px;
  font-weight: bold;
  font-size: 25px;
}

.login-layout .main-input .btn {
  height: 80px;
  width: 170px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 25px;
  display: inline-block;
}

.btn-login {
  background-color: #ee6c1e;
  color: #fffbf7;
}

.btn-contribute {
  background-color: green;
  color: #fffbf7;
  padding: 21px;
  text-decoration: none;
}

.login-layout .main-pic {
  background-image: url("../../assets/img/login_main.png");
  background-repeat: no-repeat;
  /* background-position: center; */
  /* background-size: contain;
  height: 731px;
  width: 732px;
  max-width: 100%;
}

.login-layout .footer-pic {
  background-color: #0072bb;
  height: 20vh;
  position: relative;
}

.login-layout .footer-pic > span {
  width: 100px;
  height: 100px;
  position: absolute;
  right: calc(50% - 50px);
  border-radius: 50px;
  top: -45px;
  border: none;
  background-color: #0072bb;
}

.login-layout .footer-pic p {
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 41px;
  font-size: 41px;
  font-weight: bold;
}

.login-layout .footer-pic .line {
  background-color: white;
  display: inline-block;
  height: 2px;
  position: relative;
  vertical-align: middle;
  width: 400px;
  margin: 0 25px;
}

.login-layout .footer-pic .line .circle {
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  top: -8px;
}

.login-layout .footer-pic .line:first-child .circle {
  right: 0px;
}

.login-layout .footer-pic .line:last-child .circle {
  left: 0px;
} */
</style>

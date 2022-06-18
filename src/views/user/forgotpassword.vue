<template>
  <q-layout view="lHh Lpr lFf" class="at-ligon-background">

        <q-page-container class="at-login">
          <div class="row">
            <div class="col-3"></div>
            <!-- قسمت تبلیغات صفحه ثبت نام -->
            <div class="col-3" >

              <div class="at-login-ad column">

                <div class="q-my-lg">
                  <h6 class="at-titr">
                    صفحه فراموشی رمز عبور در سایت آنلاین خوان
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
                  <router-link class="at-back-btn"  to="/user/login">
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
                
                    <base-input :model="$v.user.Mobile" 
                    />
                   
                    <div class="row">
                       <base-input :model="$v.user.VerificationCode" class="q-my-sm"/>
                      <q-btn :disabled="this.verfication"
                      @click="sendVerification" flat
                      class="at-sm-btn q-my-sm">
                        ارسال کد تایید
                      </q-btn>
                      
                    </div>
                    <base-input :model="$v.user.Password" type="password" class="q-my-sm"/>

                   


                  
                </div>

                <div class="at-controls column justify-center items-center">
                    <div class="q-mt-lg">
                      <q-btn 
                      @click="register"
                      class="at-login-btn">
                        تغییر رمز عبور
                      </q-btn>
                    </div>
                    <div class="at-signup-btn q-mt-sm">
                        <q-btn flat to="/user/login">
                           ورود به سایت
                        </q-btn>
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
import { userCreateValidations } from "src/validations/user/UserCreateValidation";
import { UserType } from "src/utilities/enumeration";

@Component({
  validations: userCreateValidations
})
export default class UserRegisterVue extends Vue {
  $v: any;

  //#region ### data ###
  userStore = vxm.userStore;
  provinceStore = vxm.provinceStore;
  cityStore = vxm.cityStore;
  roleStore = vxm.roleStore;
  user = vxm.userStore.user;
  isTeacher = false;
  subscribe = false;
  verfication = false;
  //#endregion
  

  //#region ### computed ###
  sendVerification()
  {
    if(this.user.Mobile == "" || this.user.Mobile == null) return;
   
    this.verfication = true;
    this.userStore.sendVerification(this);
  }
  register() {
    this.user.IsTeacher = this.isTeacher;
    this.userStore.forgotPassword(this);
  }
  //#endregion


  //#region ### hooks ###
  //#endregion
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
.at-mid-ad{
    color: #fff;
    margin: auto 0;
}
.at-select-role{
    background-color: #f6f6f6;
    padding: .5rem;
    color: #000;
    width: auto;
    border-radius: 5px;
}
.at-subscribe{
    color: #fff;
    margin: .75rem .5rem;
}
.at-subscribe .text-primary,
.at-subscribe .text-faded{
    color: #fff !important;
}
.at-titr{
  color: #fff;
  font-weight: 700;
}
.at-description{
  color: #b5ddfc;
}
.at-login-suggestion{
  /* margin-top: 10rem; */
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
  padding: .1rem 3.5rem;
  font-size: 1.5rem;  
}
.at-signup-btn .q-btn{
  color: #1976d2;
}


.s-q-input-border{
    border: none;
}
</style>

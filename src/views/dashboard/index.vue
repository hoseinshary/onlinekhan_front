
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
    <br />
    <div class="row">
      <div class="col-lg-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="c-card d-flex flex-column overflow-hidden h-100">
              <div class="bg-gradient position-relative height-100 p-3">
                <span
                  v-if="$q.localStorage.get.item('IsTeacher')"
                  class="text-white fw-bold font-16"
                  >دبیر عزیز خوش آمدید</span
                >
                <span v-else class="text-white fw-bold font-16"
                  >دانش آموز عزیز خوش آمدید</span
                >
                <span
                  class="
                    img-profile
                    position-absolute
                    d-block
                    overflow-hidden
                    bg-white
                  "
                >
                  <img
                    :src="$q.localStorage.get.item('ProfilePic')"
                    class="w-100"
                  />
                </span>
              </div>
              <div class="p-3">
                <div class="row">
                  <div class="col-3">
                    <span class="d-block mt-6 font-12">{{
                      $q.localStorage.get.item("FullName")
                    }}</span>
                  </div>
                  <div class="col-3">
                    <span class="d-block text-center font-12">{{
                      this.assays.length
                    }}</span>
                    <span class="d-block text-center mt-2 font-12">آزمون</span>
                  </div>
                  <div class="col-3">
                    <span class="d-block text-center font-12">0</span>
                    <span class="d-block text-center mt-2 font-12">سوال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <br />
            <!-- باکس ساخت آزمون -->
            <div class="c-card d-flex overflow-hidden bg-gradient height-M">
              <div class="w-100 py-4">
                <a
                  href="/quiz/lesson"
                  class="
                    d-block
                    w-100
                    h-100
                    d-flex
                    justify-content-center
                    align-items-center
                    gap-2
                  "
                >
                  <i class="fa-light fa-circle-plus text-white fs-3"></i>
                  <span class="text-white font-16">ساخت آزمون</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-lg-12">
            <div class="border-gradient br-10 h-100">
              <div class="bg-white d-flex overflow-hidden br-10 h-100">
                <div class="w-100 py-4">
                  <a
                    href="/quiz/myquiz"
                    class="
                      d-block
                      w-100
                      h-100
                      d-flex
                      justify-content-center
                      align-items-center
                      gap-2
                      color-blue
                    "
                  >
                    <i class="fa-solid fa-book"></i>
                    <span class="font-16">جدیدترین آزمون من</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12">
            <div class="border-gradient br-10 h-100">
              <div class="bg-white d-flex overflow-hidden br-10 h-100">
                <div class="w-100 py-4">
                  <a
                    href="/lessons/mylessons"
                    class="
                      d-block
                      w-100
                      h-100
                      d-flex
                      justify-content-center
                      align-items-center
                      gap-2
                      color-blue
                    "
                  >
                    <i class="fa-solid fa-book"></i>
                    <span class="font-16">جدیدترین درس های من</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div v-if="!showEdit" class="row mt-1">
          <div class="col-lg-12">
            <div class="c-card c-card-M">
              <div class="c-card overflow-hidden p-3">
                <div class="text-center font-18 fw-bold c-1976d2">اطلاعات کاربری</div>
                <div class="d-flex flex-row align-items-center">
                  <img
                    :src="$q.localStorage.get.item('ProfilePic')"
                    class="thumb"
                  />
                  <div class="me-3">
                    <div class="d-flex flex-row">
                      <span>نام کاربری:</span>
                      <span class="c-504f4f me-1">{{user.Username}}</span>
                    </div>
                    <span class="c-504f4f">دانش آموز</span>
                  </div>
                </div>
                <div class="grid mt-5 mx-5 w-75 mx-auto">
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> نام: </span>
                    {{ user.Name }}
                  </div>
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> نام خانوادگی: </span>
                    {{ user.Family }}
                  </div>
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> کد ملی: </span>
                    {{ user.NationalNo }}
                  </div>
                   <div class="me-5 p-2">
                    <span class="fw-bold p-1"> جنسیت: </span>
                    {{ user.Gender ? "پسر" : "دختر" }}
                  </div>
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> شماره همراه: </span>
                    {{ user.Mobile }}
                  </div>
                  
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> شماره ثابت: </span>
                    {{ user.Phone }}
                  </div>
                  <div class="me-5 p-2">
                    <span class="fw-bold p-1"> شهر: </span>
                    {{ user.CityName }}
                  </div> 
                </div>
                  <div class="d-flex flex-row justify-end ">
                    <button class="form-btn btn2 c-ffffff bg-blue" @click="showEdit = true">
                      ویرایش پروفایل
                    </button>
                  </div>
              </div>
             
            </div>
          </div>
        </div>

        <div v-else class="row mt-1">
          <section class="information">
            <div class="information-profile d-flex flex-column">
              <div class="card-block">
                <div class="row">
                  <div v-if="showEditProfilePic" class="c-ff0048 font-12">ابتدا تغییر تصویر پروفایل را ثبت یا ابطال نمایید.</div>
                  <div class="d-flex flex-row align-items-center col-lg-6">
                    <div class="uploadNewContainer">
                      <label for="FileInput">
                          <img :src="newSrc===''?$q.localStorage.get.item('ProfilePic'):newSrc"
                          class="thumb"
                          style="cursor: pointer;"
                          />
                      </label>
                      <div class="uploadNew">تصویر جدید</div>
                      </div>
                      <p>
                        <input 
                          type="file" 
                          accept=".jpg" 
                          id="FileInput" 
                          @change="loadFile" 
                          style="display: none;" 
                          url="url"
                          float-label="تصویر"
                          name="img"
                          auto-expand
                          ref="fileUpload"
                          extensions=".jpg">
                      </p>
                      
                      <div class="me-3">
                        <div class="d-flex flex-row">
                          <span>نام کاربری:</span>
                          <span class="c-1976d2">{{user.Username}}</span>
                        </div>
                        <span class="c-504f4f">دانش آموز</span>
                      </div>
                  </div>
                  <div class="col-lg-6">
              
                  </div>
                </div>
              </div>
                 <div class="d-flex flex-row justify-content-between">
                  <div v-if="newSrc !== ''">
                    <button class="form-btn btn2" @click="makeEmpty">
                      ابطال
                    </button>
                    </div>
                    <div v-if="newSrc !== ''">
                    <button class="form-btn btn1" @click="updateProfileImage()">
                      ذخیره تصویر کاربر
                    </button>
                    </div>
                  </div>
            </div>
            <p class="card-title mb-2">ویرایش اطلاعات کاربری</p>
            <div class="card grid pt-0">
              <div class="card-block">
                <div class="card-input">
                  <base-input :model="$v.user.Name" />
                </div>
              </div>
              <div class="card-block">
                <div class="card-input">
                  <base-input :model="$v.user.Family" />
                </div>
              </div>
              <div class="card-block">
                <div class="card-input">
                  <base-input :model="$v.user.NationalNo" />
                </div>
              </div>
              <div class="card-block">
                <base-field class="col-md-6 col-md-4" :model="$v.user.Gender" :edit="true">
                <template slot-scope="data">
                  <div class="d-flex flex-row justify-content-around genderContainer">
                  <div class="d-flex flex-row"><div class="ms-3"><q-radio v-model="data.obj.$model" :val="false" /></div><div>دختر</div></div>
                  <div class="d-flex flex-row"><div class="ms-3"><q-radio v-model="data.obj.$model" :val="true" /></div><div>پسر</div></div>
                  </div>
                </template>
              </base-field>
                <hr class="radio-hr" />
              </div>
              <div class="card-block">
                <div class="card-input">
                  <base-input :model="$v.user.Mobile" />
                </div>
              </div>
              <div class="card-block">
                <div class="card-input">
                  <base-input :model="$v.user.Phone" />
                </div>
              </div>
              <div class="card-block">
                <div class="card-input">
                     <base-select
                      :model="$v.user.ProvinceId"
                      :options="provinceStore.ddl"
                      filter
                      @change="user.CityId = 0"
                    />
                </div>
              </div>
              <div class="card-block">
                <div class="card-input">
                    <base-select
                      :model="$v.user.CityId"
                      :options="cityStore.ddlByProvinceId(user.ProvinceId)"
                      filter
                    />
                </div>
              </div>
            </div>
          </section>
          <div class="d-flex flex-row justify-content-between">
            <button class="form-btn btn2" @click="showEdit = false">
              ابطال
            </button>
            <button class="form-btn btn1" @click="update()">
              ذخیره تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- انتخای باکس ساخت آزمون -->
  </div>
</template>
<script>
import axios from "src/plugins/axios";
import { vxm } from "src/store";

import {
  required,
  displayName,
  maxLength,
  minLength,
  requiredDdl,
  numeric,
  onlyPersianChar,
  notPersianChar
} from "src/plugins/vuelidate";
export default {
  data() {
    return {
      assays: {},
      userStore: vxm.userStore,
      provinceStore: vxm.provinceStore,
      cityStore: vxm.cityStore,
      roleStore: vxm.roleStore,
      user: vxm.userStore.user,
      Phone: vxm.userStore.user.Phone,
      panelStore: vxm.panelStore,
      arr: [],
      model: 1,
      showEdit: false,
      city: '',
      newSrc:'',
      lastProf: '',
      showEditProfilePic:false
    };
  },
  validations: {
    user: {
      Name: {
        displayName: displayName("نام"),
        maxLength: maxLength(50),
        required,
        onlyPersianChar: onlyPersianChar()
      },
      Family: {
        displayName: displayName("نام خانوادگی"),
        maxLength: maxLength(50),
        required,
        onlyPersianChar: onlyPersianChar()
      },
      Username: {
        displayName: displayName("نام کاربری"),
        maxLength: maxLength(50),
        required
      },
      Password: {
        displayName: displayName("رمز عبور"),
        maxLength: maxLength(50),
        minLength: minLength(5),
        notPersianChar: notPersianChar()
      },
      IsActive: {
        displayName: displayName("فعال")
      },
      NationalNo: {
        displayName: displayName("کد ملی"),
        maxLength: maxLength(10),
        minLength: minLength(10),
        required,
        numeric
      },
      Gender: {
        displayName: displayName("جنسیت"),
        required
      },
      Phone: {
        displayName: displayName("تلفن ثابت"),
        maxLength: maxLength(8),
        minLength: minLength(8),
        required,
        numeric
      },
      Mobile: {
        displayName: displayName("موبایل"),
        maxLength: maxLength(11),
        minLength: minLength(11),
        required,
        numeric
      },
      RoleId: {
        displayName: displayName("نقش"),
        requiredDdl: requiredDdl(0)
      },
      ProvinceId: {
        displayName: displayName("استان"),
        requiredDdl: requiredDdl(0)
      },
      CityId: {
        displayName: displayName("شهر"),
        requiredDdl: requiredDdl(0)
      }
    }
  },
  methods: {
    log(data, id) {
      console.log(data, id);
    },
    filesChange(a, b){
      console.log(b)
    },
    update() {
      if(this.newSrc !== ''){
        this.showEditProfilePic = true
        window.scrollTo(0,0);
      }
      if(!this.showEditProfilePic){
        this.userStore.submitUpdateUserCustom();
        setTimeout(() => window.location.reload(), 3000);
      }
    },
    updateProfileImage(){
      this.userStore.submitUpdateUserImageCustom(this);
      setTimeout(() => window.location.reload(), 1000);
      this.showEditProfilePic=false;
      this.newSrc='';
    },
    getUser() {
      this.userStore.getUserData();
    },
    getAssays() {
      axios
        .get(`/api/user/GetUserAssay`)
        .then((response) => {
          this.assays = response.data;
        })
        .then(this.getUser())
        .then(this.provinceStore.fillList())
        .then(this.cityStore.fillList())
    },
    loadFile(e) {
      const file = e.target.files[0];
      this.newSrc = URL.createObjectURL(file);
      localStorage.setItem('ProfilePic',URL.createObjectURL(file))
    },
    makeEmpty(){
      this.newSrc='';
      localStorage.setItem('ProfilePic',this.lastProf);
      this.showEditProfilePic=false
    }
  },

  mounted() {
    this.lastProf = localStorage.getItem('ProfilePic')
    this.getAssays();
  }
};
</script>

<style>
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  src: url("./../../css/fonts/iran-sans-fa-num-bold.woff2") format("woff2"),
    url("./../../css/fonts/iran-sans-fa-num.woff") format("woff");
}

@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  src: url("./../../css/fonts/iran-sans-fa-num-bold.woff2") format("woff2"),
    url("./../../css/fonts/iran-sans-fa-num.woff") format("woff");
}

body {
  font-family: "IRANSans" !important;
}
@import '../../css/dashboard/styles/dashboard.css';
.thumb {
  display: inline-block;
  width: 130px;
  height: 130px;
  margin: 5px;
  border-radius: 65px;
  object-fit: cover;
  object-position: center;
  padding: 10px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border:1px solid black;
  border-radius: 5px;
}
.radio-text {
  font-size: 10px;
}
.genderContainer{
  max-width: 200px !important;
  min-width: 180px !important;
  margin-right: 30px !important;
  padding-left: 0px !important;
}
.uploadNewContainer{
  position: relative;
}
.uploadNew{
  display: none;
  position: absolute;
  border-radius: 10px;
  width: 60%;
  font-size: 12px;
  text-align: center;
  bottom:20px;
  right:20%;
  color: white;
  background-color: #17d292;
  z-index: 10;
  cursor: pointer;
}
.uploadNewContainer:hover .uploadNew{
  display: block;
}
.uploadNewContainer:hover .thumb{
  opacity: 0.5 !important;
}
.side-bar-item-m-h {
  position: fixed;
  height: 50px;
  justify-content: center;
  padding: 5px 20px;
  width: 100%;
  background-color: #f2f2f2;
  padding: 0px !important;
}

.side-bar-item-m:hover {
  background-color: #fcfcfc;
}

.side-bar-tooltip {
  position: absolute;
  right: 60px;
  opacity: 0;
  width: 30px;
  height: 28px;
  background-color: #fff;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #1976d2;
  box-shadow: 1px -1px 0px 0px rgba(25, 118, 210, 1);
  text-align: center;
  vertical-align: middle;
  font-size: 12px;
  pointer-events: none;
  z-index: 1000;
}

.side-bar-item:hover {
  background-color: #ffffff;
}

.side-bar-item:hover .side-bar-tooltip {
  opacity: 1;
}

.detail {
  width: 80px;
  height: 10px;
  color: #1976d2;
  text-align: right;
  padding-top: 0px !important;
  z-index: 102;
}

.detail-m {
  width: 80px;
  height: 10px;
  color: #1976d2;
  text-align: right;
  padding-top: 0px !important;
}

.side-bar-title-m {
  text-align: center !important;
  color: #969696;
  font-weight: bold;
  width: 80px;
  height: 10px;
  padding-top: 0px !important;
  white-space: nowrap;
}

.last-item {
  background-color: #c4c4c4;
}

.last-item-m {
  background-color: #c4c4c4;
  justify-content: space-between;
  padding: 0px 20px;
}

.last-item:hover {
  background-color: #c4c4c4;
}

.border-buttom {
  border-bottom: 1px solid #d9d9d9;
}

.header {
  height: 50px;
  background-color: #ffffff;
  font-size: 12px;
  white-space: nowrap;
  color: #d9d9d9;
  padding: 0px 20px 0px 20px;
  position: fixed;
  top: 0px;
  right: 60px;
  left: 0px;
  z-index: 100;
}

.header:hover .guid-span {
  color: #17d292;
}

.img,
.guid-img {
  display: inline;
  padding: 4px;
}

/* .sort-img {
    padding: 14px 6px 6px 4px !important;
} */

.top-bar {
  height: 80px;
  padding: 0px 20px 30px 0px !important;
}

.profile-box-style {
  border-radius: 10px 10px 0px 0px;
}

.profile-box-open-style {
  display: block;
}

.profile-box {
  position: relative;
  width: 170px;
  background-color: #1976d2;
  color: #ffffff;
  font-size: 12px;
  padding: 2px;
  margin-left: 10px;
}

.profile-box-open {
  position: absolute;
  top: 42px;
  background-color: #f2f2f2;
  color: black;
  text-align: right;
  width: auto;
  padding: 0px !important;
}

.profile-box-open div:hover {
  background-color: #fcfcfc;
  cursor: pointer;
}

.profile-lesson-box-mobile {
  padding: 10px;
}

.lessons-box {
  max-width: 340px;
  margin-right: 80px;
  position: relative;
}

.search input {
  flex: 4;
  max-width: 140px;
  border: 1px solid #d9d9d9;
  border-radius: 0px 6px 6px 0px;
  height: 25px;
  padding: 3px;
}

::placeholder {
  padding-left: 35px;
}

.search input:focus {
  outline: none !important;
}

.search button {
  height: 33px;
  padding: 3px;
  border: 1px solid #d9d9d9;
  border-radius: 6px 0px 0px 6px;
  margin-right: -1px;
  background-color: #1976d2;
}

/* //___________________________________ */

.title {
  flex: 1;
  font-size: 14px;
}

.title-tooltip {
  position: absolute;
  bottom: -121px;
  right: 0px;
  display: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 13px 1px rgba(217, 217, 217, 0.2);
  text-align: right;
  padding: 0px 10px !important;
  z-index: 100;
}

.title-tooltip:hover {
  cursor: pointer;
}

.title-tooltip-tooltip {
  position: absolute;
  top: 0px;
  display: none;
  background-color: #d9d9d9;
  text-align: right;
  color: #1976d2;
  flex-direction: column;
  justify-content: space-between;
}

.title-tooltip-tooltip-m {
  display: none;
  text-align: right;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin-right: 30px;
  font-size: 12px;
}

.title-tooltip-tooltip-m div {
  padding: 2px;
}

.title-tooltip-tooltip div:hover {
  background-color: #ececec;
}

.lesson:hover .title-tooltip-tooltip {
  display: flex;
}

.lesson-m:hover .title-tooltip-tooltip-m {
  display: flex;
}

.lesson-m:hover img {
  transform: rotate(180deg);
}

.search::placeholder {
  text-align: right;
}

.lesson:hover {
  color: #ffffff;
  background-color: #1976d2;
  cursor: pointer;
}

.lesson-m:hover {
  cursor: pointer;
}

.lesson {
  padding: 10px;
}

.top-bar-right div {
  flex: 1;
  white-space: nowrap;
  padding-right: 0px !important;
}

.main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0px 20px;
}

.main-content {
  margin: 50px 0px 0px 0px;
}

.root {
  display: grid;
  grid-template-columns: 1fr 60px;
}

.profile-name {
  color: #3d3d3d;
  margin-top: 15px;
  font-size: 16px;
}

.profile-status {
  margin-top: 5px;
  font-size: 12px;
}

.question-box {
  height: auto;
  width: auto;
  box-shadow: 0px 0px 20px 5px rgba(217, 217, 217, 0.8);
  border-radius: 5px;
  margin: 40px;
  padding: 15px;
  text-align: center;
}

.question-title {
  margin-top: 0px !important;
  padding: 10px;
  font-size: 16px;
}

.question-text {
  font-size: 12px;
  line-height: 18px;
  padding: 10px;
}

.question-button {
  color: #ffffff;
  background-color: #17d292;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  margin: 8px;
}

.status-bar-charge {
  flex: 4;
  text-align: left !important;
}

.status-bar-charge div {
  display: inline-block;
}

.status-bar-charge span {
  display: block;
}

.status-bar-charge img {
  display: inline-block;
  padding: 0px 7px;
}

.charge-amount {
  display: inline-block !important;
  font-size: 10px;
  margin-bottom: 7px;
}

.charge-text {
  font-size: 8px;
  color: #1976d2;
}

.status-bar-profile {
  flex: 1;
  text-align: right;
  font-size: 28px;
  font-weight: bold;
}

/* //________________________________ */

.status-hr {
  margin: 20px 2px;
  border: 1px solid #d9d9d9;
  height: 0px;
  padding: 0px;
}

.hr1 {
  margin-left: 20px;
  flex: 4;
}

.hr2 {
  margin-right: 20px;
  flex: 1;
  background-color: #1976d2;
  border: 1px solid #1976d2;
}

.information-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  background-color: #f2f2f2;
  padding: 0px 20px;
  color: #3d3d3d;
}

.card {
  width: auto;
  height: auto;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  color: #3d3d3d;
}

.card-title {
  padding-top: 15px;
  text-align: right;
  font-size: 20px;
}

.card-block {
  padding-bottom: 30px;
  padding-top: 30px;
}

.left-margin {
  /* padding-left: 65%; */
}

.card-block span {
  display: block;
  text-align: right;
  padding: 6px 15px;
}

.card-input {
  margin-left: auto;
  margin-right: 0px !important;
  width: 195px;
  height: 43px;
  position: relative;
}

.input-card {
  background-color: #f2f2f2;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  text-align: right;

  height: 40px;
}

.radio-hr {
  border: 1px solid #d9d9d9;
  margin: 0px 10px 0px auto !important;
  width: 190px;
}

.input-card:focus {
  outline: none;
  margin-left: auto;
  margin-right: 0px !important;
  width: 185px;
  height: 38px;
  position: relative;
  border: 2px solid #1976d2 !important;
  border-radius: 5px;
}

.sp1 {
  font-size: 14px;
  background-color: #f2f2f2;
  position: absolute;
  top: -20px;
  right: 5px;
  padding: 5px 7px !important;
  z-index: 99;
}

.sp2 {
  font-size: 16px;
  color: #1976d2;
}

.form-btn {
  padding: 10px 30px;
  min-width: 120px;
  border-radius: 13px;
  border: none;
  margin: 20px;
}

.btn1 {
  background-color: #1976d2;
  color: #ffffff;
}

.btn2 {
  background-color: #c2c2c2;
}

/* //_________________________________ */

.popUp-page {
  position: fixed;
  top: 100px;
  left: 20%;
  right: 20%;
  height: auto;
  background-color: #1976d2;
  display: none;
  z-index: 100000000;
  color: white;
}

.popUp-input {
  display: block;
  border: none;
  margin: auto;
  padding: 15px 0px;
  width: 80%;
}

.popUp-span {
  display: block;
  border: none;
  padding: 10px;
  text-align: right;
  width: 80%;
  margin: auto;
  padding: 15px 0px 10px 0px;
}

.popUp-btn {
  background-color: #17d292;
  color: #ffffff;
  padding: 12px 40px;
  border-radius: 13px;
  border: none;
  font-size: 24;
}

.popUp-btn-div {
  width: 80%;
  margin: auto;
  padding: 20px 0px !important;
}

.popUp-img {
  position: absolute;
  left: 5%;
  top: 5%;
  width: 10%;
  height: 10%;
  max-width: 20px;
  max-height: 20px;
}

/* //___________________________________ */
.left-menue-mobile {
  position: fixed;
  left: 7%;
  bottom: 15%;
  z-index: 101;
  display: none;
}

.left-menue-img {
  position: fixed;
  bottom: 60px;
  left: 50px;
  z-index: 100;
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 15px;
}

.left-menue-open {
  position: fixed;
  bottom: 60px;
  left: 50px;
  height: 0px;
  width: 35px !important;
  padding-bottom: 0px !important;
  z-index: 99;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(217, 217, 217, 0.8);
  border-radius: 17.5px;
  padding: 7px 0px 0px 0px;
}

.collaps {
  opacity: 0;
  padding: 5px;
  margin: 2px 0px;
}

.left-menue-open img:hover {
  background-color: #f2f2f2;
}

.profile-img {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-img-edit {
  position: absolute;
  bottom: 20px;
  color: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 15px;
  height: 30px;
  display: none;
  width: 110px;
  vertical-align: middle;
  background-color: #17d292;
  font-size: 14px;
}

.profile-img:hover .profile-img-edit {
  display: flex;
}

.profile-img:hover {
  cursor: pointer;
}

/* //_____________________________ */
.header-left-mobile {
  opacity: 0;
}

.header-left-mobile-img-close {
  display: none;
}

.header-left-mobile-details {
  display: none;
  position: absolute;
  top: 44px;
  width: auto;
  height: auto;
  background-color: #1976d2;
  color: #ffffff;
  text-align: right;
  font-size: 14px;
}

.header-left-mobile-details div {
  padding: 5px 15px;
}

.header-left-mobile-details div:hover {
  background-color: #8baed1;
}

.profile-box-mobile-img {
  display: none;
  padding: 10px;
}

.profile-box-mobile {
  display: none;
  width: 170px;
  background-color: #1976d2;
  border-radius: 30px;
  color: #ffffff;
  font-size: 12px;
  padding: 2px;
  position: absolute;
  top: 55px;
  left: 20px;
}

.exit-profile {
  position: absolute;
  display: inline-block;
  top: 55px;
  left: 210px;
  display: none;
}

.lessons-box-mobile-img {
  display: none;
  padding: 10px;
}

.lessons-box-mobile-img-div {
  background-color: #17d292;
  border-radius: 10px;
  width: auto;
  height: auto;
}

.lessons-box-mobile {
  background-color: #17d292;
  display: none;
  position: absolute;
  top: 55px;
  left: 20px;
  padding: 5px;
  z-index: 100;
}

.lesson-mobile {
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}

.exit-lesson {
  position: absolute;
  display: inline-block;
  top: 55px;
  left: 210px;
  display: none;
}

.first-img {
  padding: 5px 0px !important;
}

.sort {
  padding: 0px 3px !important;
  transform: rotate(90deg);
}

.mobile-height-adjust {
  display: none;
}

@media (max-width: 750px) {
  .grid{
    grid-template-columns: 1fr;
  }
  .main {
    grid-template-columns: 1fr;
  }

  .root {
    grid-template-columns: 1fr 0;
  }

  .question-box {
    margin: 20%;
    padding: 15px;
    position: absolute;
    bottom: 60px;
  }

  .profile-img-img {
    width: 20% !important;
    height: auto;
  }

  .mobile-height-adjust {
    display: block;
    height: 20%;
    width: 100%;
    background-color: #17d292;
  }

  .main-left {
    display: none !important;
  }

  .side-bar {
    display: none;
  }

  .header-left {
    display: none;
  }

  .profile-box {
    display: none;
  }

  .lessons-box {
    display: none;
  }

  .left-menue {
    display: none;
  }

  .header {
    right: 0px;
  }

  .main-right {
    margin-right: 0px !important;
  }

  .header-left-mobile {
    opacity: 1;
  }

  .profile-box-mobile-img {
    display: inline;
  }

  .lessons-box-mobile-img {
    display: inline;
  }

  .left-menue-mobile {
    display: block;
  }
}

@media (min-width: 751px) {

  .header-left-mobile {
    opacity: 0;
  }

  .profile-box-mobile-img {
    display: none !important;
  }

  .lessons-box-mobile-img {
    display: none !important;
  }

  .left-menue-mobile {
    display: none !important;
  }

  .profile-box-mobile {
    display: none !important;
  }

  .lessons-box-mobile {
    display: none !important;
  }

  .exit-profile {
    display: none !important;
  }

  .exit-lesson {
    display: none !important;
  }
  a {
  text-decoration: none !important;
}
}
</style>



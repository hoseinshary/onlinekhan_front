<template >

<div id="divbody" class="shrink">
  <link href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" rel="stylesheet">

  <q-layout view="lHh Lpr lFf">
    <!-- شروع منوی ثابت سمت راست -->

  <nav class="c-nav overflow-hidden">
    <div class="sidebar-top">
        <span class="shrink-btn border-bottom border-2">
          <span v-if="this.IsTeacher" class="link hide fs-5 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;پنل دبیری</span>
          <span v-else class="link hide fs-5 ">پنل دانش آموزی</span>
          <div class="icon">
              <img src="../assets/img/collapse-menu-icon.png">
          </div>
        </span>
    </div>

    <span id="jump-top" class="jump-top border-bottom jump d-none justify-content-center">
        <i class="fa-solid fa-angle-up"></i>
      </span>

    <div id="sidebar-links" class="sidebar-links">
      <ul>
          <li>
            <a href="/dashboard">
              <div class="icon c-tooltip">
                <i class="fa-solid fa-circle-user"></i>
                <span class="c-tooltip-text">پروفایل</span>
              </div>
              <div class="d-flex flex-column text-end align-items-end">
                <span class="link hide">{{$q.localStorage.get.item('FullName')}}</span>
                <span v-if="this.IsTeacher" class="link hide child-link">دبیر</span>
                <span v-else class="link hide child-link">دانش آموز</span>
              </div>
            </a>
          </li>
          <!--
          <li>
            <a href="#">
              <div class="icon c-tooltip">
                <i class="fa-light fa-bell position-relative">
                  <span class="badge bg-danger position-absolute iran-sans  font-10">4</span>
                </i>
                <span class="c-tooltip-text">اعلان ها</span>
              </div>
              <span class="link hide font-12">اعلان ها</span>
            </a>
          </li>
          -->
          <li v-if="!this.IsTeacher">
            <a href="/lessons/buylesson">
              <div class="icon c-tooltip">
                <i class="fa-solid fa-book"></i>
                <span class="c-tooltip-text">خرید درس</span>
              </div>
              <span class="link hide font-12">خرید درس</span>
            </a>
          </li>
          <li>
            <a href="/lessons/mylessons">
              <div class="icon c-tooltip">
                <i class="fa-solid fa-boxes-packing"></i>
                <span class="c-tooltip-text">دروس من</span>
              </div>
              <span class="link hide">دروس من</span>
            </a>
          </li>
          <li>
            <a href="/quiz/lesson">
              <div class="icon c-tooltip">
                <i class="fa-regular fa-file-signature"></i>
                <span class="c-tooltip-text">ساخت آزمون</span>
              </div>
              <span class="link hide">ساخت آزمون</span>
            </a>
          </li>
          <li>
            <a href="/quiz/myquiz">
              <div class="icon c-tooltip">
                <i class="fa-solid fa-envelope-open-text"></i>
                <span class="c-tooltip-text">آزمون ها</span>
              </div>
              <span class="link hide">آزمون ها</span>
            </a>
          </li>
          <li>
            <a href="/report">
              <div class="icon c-tooltip">
                <i class="fa-regular fa-file-magnifying-glass"></i>
                <span class="c-tooltip-text">گزارش آزمون ها</span>
              </div>
              <span class="link hide">گزارش آزمون ها</span>
            </a>
          </li>
          <li v-if="this.IsTeacher">
            <a href="#">
              <div class="icon c-tooltip">
                <i class="fa-solid fa-chalkboard-user"></i>
                <span class="c-tooltip-text">گروه دانش آموزی</span>
              </div>
              <span class="link hide">گروه دانش آموزی</span>
            </a>
          </li>
          <li v-if="!this.IsTeacher">
            <a href="/shoppingbag">
              <div class="icon c-tooltip">
                <i class="fa-regular fa-basket-shopping"></i>
                <span class="c-tooltip-text">سبد خرید</span>
              </div>
              <span class="link hide">سبد خرید</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="icon c-tooltip">
                <i class="fa-regular fa-solid fa-headset"></i>
                <span class="c-tooltip-text">تماس با پشتیبان</span>
              </div>
              <span class="link hide">تماس با پشتیبان</span>
            </a>
          </li>
        </ul>
    </div>

    <span id="jump-down" class="jump-down border-top jump d-none justify-content-center">
        <i class="fa-solid fa-angle-down"></i>
      </span>

    <div class="sidebar-footer d-flex">
      <a style=" cursor:pointer;" @click="$router.push('/user/logout')" class="log-out">
        <i class="fa-solid fa-power-off"></i>
      </a>

      <span class="shrink-btn shrink-mobile-hide-btn d-none">
          <div class="icon">
              <img src="../assets/img/ecollapse-menu-icon.png">
          </div>
        </span>
    </div>
  </nav>
<!-- پایان منوی ثابت سمت راست -->

<!-- منوی بالا هدر اول -->
  <nav class="container-nav-top px-3 px-lg-4 border-bottom border-2">
    <div class="nav-top d-flex flex-wrap align-items-center h-100">

      <div class="container-bars d-none header-font-color fs-1">
        <i class="fa-solid fa-bars"></i>
      </div>

      <ul class="nav me-auto container-menu">
        <li class="nav-item pe-2"><a href="#" class="nav-link link-dark px-2 header-font-color font-12 menu-item-hover">تماس با ما</a></li>
        <li class="nav-item pe-2"><a href="#" class="nav-link link-dark px-2 header-font-color font-12 menu-item-hover">درباره ما</a></li>
        <li v-if="!this.IsTeacher" class="nav-item pe-2"><a href="/lessons/buylesson" class="nav-link link-dark px-2 header-font-color font-12 menu-item-hover">خرید درس</a></li>
      </ul>

      <ul class="nav">
        <li class="nav-item pe-3">
          <a href="#" class="d-flex align-items-center me-md-auto text-decoration-none header-font-color menu-item-hover">
            <span class="fs-6 pe-2 font-12">راهنما</span>
            <i class="fa-solid fa-address-card font-12"></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="/quiz/lesson" class="d-flex align-items-center text-decoration-none header-font-color menu-item-hover">
            <span class="fs-6 pe-2 font-12">ساخت آزمون</span>
            <i class="fa-solid fa-address-card font-12"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
<!-- پایان منو.ی بالا هدر اول -->
  <div class="container-fluid container-dashboard p-0 position-relative" dir="rtl">
    <main class="py-3 px-3 px-lg-4">

        <!-- kebab menu absolute -->
        <div class="container-kebab-menu position-absolute">
            <ul class="nav p-0">
                <div class="kebab-menu">
                    <figure></figure>
                    <figure class="middle"></figure>
                    <p class="cross">x</p>
                    <figure></figure>
                    <ul class="dropdown p-2 shadow">
                        <li>
                            <a href="#"><i class="fa-solid fa-book fs-4 py-2"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-envelope-open-text fs-4 py-2"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-basket-shopping fs-4 py-2"></i></a>
                        </li>
                        <li class=" text-center">
                            <a href="#"><i class="fa-regular fa-square-question fs-4 py-2"></i></a>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
 <!-- kebab menu absolute -->
        <!-- logo - search - profile menu -->
       <!-- لوگوی سایت -->
        <div class="row">
            <div class="col-6 col-md-3 col-lg-3 col-xl-2">
                <a href="/dashboard" class="d-block container-logo">
                    <img src="../assets/img/logo.png">
                </a>
            </div>
            <!-- لگوی سایت -->
            <!-- منوی دسته بندی دروس -->
            <!--
            <div class="col-3 col-md-5 col-lg-5 col-xl-5 pe-xl-4 ps-lg-4">
                <div class="container-search-category h-100 align-items-center d-none d-lg-flex">
                    <div class="course-category position-relative align-items-center d-flex">
                        <ul class="w-100 m-0 p-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center dashboard-font-color" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <i class="fa-solid fa-grid ps-2 fs-5"></i>
                                    <span class="fs-5">
                                    دروس
                                </span>
                                </a>
                                <ul class="dropdown-menu shadow-sm text-end border-0">
                                    <li class="dropstart">
                                        <a href="#" class="d-flex align-items-center dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                                            هنر
                                            <i class="fa-solid fa-angle-left me-auto"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-hover shadow-sm text-end border-0">
                                            <li><a class="dropdown-item" href="">نقاشی</a></li>
                                            <li><a class="dropdown-item" href="">خوشنویسی</a></li>
                                            <li><a class="dropdown-item" href="">سفالگری</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="d-flex dropdown-item" href="#">فارسی</a></li>
                                    <li><a class="d-flex dropdown-item" href="#">فیزیک</a></li>
                                    <li><a class="d-flex dropdown-item" href="#">ریاضیات</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="search-category w-100 d-flex">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="جستجوی درس..." aria-label="Search">
                            <button class="btn d-flex align-items-center" type="submit">
                                <i class="fa-solid fa-magnifying-glass text-white fs-5"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            -->
            <!-- پایان منوی دسته بندی دروس -->

       <!-- پروفایل کاربر آبی و سمت موبایل -->
            <div class="col-3 col-md-4 col-lg-4 col-xl-5 d-flex justify-content-start">
                <div class="d-flex flex-row-reverse gap-3 align-items-center">
                    <div class="container-profile-menu d-flex h-100 align-items-center" dir="ltr">
                      <!--
                        <div class="notification-icon pe-3 d-none d-lg-flex">
                            <i class="fa-regular fa-bell position-relative fs-1">
                                <span class="badge bg-danger position-absolute iran-sans">3</span>
                            </i>
                        </div>
                      -->
                        <span class="profile-mobile-btn d-flex d-lg-none text-white align-items-center justify-content-center">
                            <i class="fa-thin fa-user-large px-2"></i>
                        </span>

                        <div class="dropdown rounded-5 px-1 align-items-center d-none d-lg-flex" dir="rtl">
                        <span class="profile-mobile-btn-close d-flex d-lg-none align-items-center justify-content-center position-absolute">
                            <i class="fa-light fa-circle-xmark px-2 fs-5"></i>
                        </span>
                        <button class="btn dropdown-toggle text-white align-items-center d-none d-lg-flex" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-thin fa-user-large px-2 fs-5"></i>
                            <span>سلام، {{$q.localStorage.get.item('FullName')}}</span>
                            <i class="fa-regular fa-angle-down px-2 fs-5"></i>
                        </button>
                        <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenu2">
                                <li><button @click="$router.push('/dashboard')" class="dropdown-item" type="button">پروفایل کاربر</button></li>
                                <li><button @click="$router.push('/user/logout')" class="dropdown-item" type="button">خروج</button></li>
                            </ul>
                        </div>
                    </div>

                    <div class="container-search-category show-mobile h-100 align-items-center d-flex d-lg-none position-relative">

                        <span class="search-mobile-btn d-flex text-white align-items-center justify-content-center">
                            <i class="fa-light fa-magnifying-glass"></i>
                        </span>

                        <div class="content-menu position-absolute d-none flex-column-reverse p-2">
                            <div class="course-category position-relative align-items-center mt-2">
                                <ul class="w-100 m-0 p-0">
                                    <li class="nav-item dropdown">
                                        <ul class="dropdown-menu shadow-sm text-end border-0 show position-relative">
                                            <li class="dropstart">
                                                <a href="#" class="d-flex align-items-center dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                                                    هنر
                                                    <i class="fa-solid fa-angle-left me-auto"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-hover shadow-sm text-end border-0">
                                                    <li><a class="dropdown-item" href="">نقاشی</a></li>
                                                    <li><a class="dropdown-item" href="">خوشنویسی</a></li>
                                                    <li><a class="dropdown-item" href="">سفالگری</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="d-flex dropdown-item mt-1" href="#">فارسی</a></li>
                                            <li><a class="d-flex dropdown-item mt-1" href="#">فیزیک</a></li>
                                            <li><a class="d-flex dropdown-item mt-1" href="#">ریاضیات</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="search-category w-100 d-flex">
                                <form class="d-flex w-100">
                                    <input class="form-control" type="search" placeholder="جستجوی درس..." aria-label="Search">
                                    <button class="btn d-flex align-items-center" type="submit">
                                        <i class="fa-light fa-magnifying-glass text-white fs-5"></i>
                                    </button>
                                </form>
                            </div>

                            <span class="search-mobile-btn-close d-flex align-items-center justify-content-center position-absolute">
                            <i class="fa-light fa-circle-xmark px-2 fs-5"></i>
                        </span>
                        </div>

                    </div>

                    <div class="notification-icon px-1 d-flex d-lg-none">
                        <i class="fa-thin fa-bell position-relative fs-2">
                            <span class="badge bg-danger position-absolute iran-sans">3</span>
                        </i>
                    </div>
                </div>
            </div>
            <!-- پایان پروفایل کاربر آبی و سمت موبایل -->
        </div>
<!-- عنوان داشبرد من - عنوان صفحه -->
        <q-page-container>
        <div class="row justify-center q-mt-lg">
          <transition
            name="transitions"
            enter-active-class="animated bounceInDown"
            leave-active-class="animated bounceOutUp"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
      </q-page-container>
      
    </main>

    
  </div>
  <div class="shrink-mobile-show-btn position-fixed pointer d-none">
      <i class="fa-regular fa-circle-user d-block shadow-lg rounded-circle"></i>
    </div>
    </q-layout>
  </div>
</template>
<script>
import axios from "src/plugins/axios";
import { LocalStorage } from "quasar";

export default  {
    
    data() {
       return {
          IsTeacher: false
        
    }
    },
    methods:{
       
        
      },
     
    
    mounted() {
      this.IsTeacher = LocalStorage.get.item('IsTeacher');
        document.body.classList.add("shrink");
    const shrink_btn = document.querySelector(".shrink-btn");
const shrink_mobile_show_btn = document.querySelector(".shrink-mobile-show-btn");
const shrink_mobile_hide_btn = document.querySelector(".shrink-mobile-hide-btn");
const sidebar_links = document.querySelector("#sidebar-links");
const jump_top = document.querySelector(".jump-top");
const jump_down = document.querySelector(".jump-down");
const container_menu = document.querySelector(".container-menu");
const container_bars = document.querySelector(".container-bars");
const dropdown_profile = document.querySelector(".container-profile-menu .dropdown");
const dropdown_profile_child = document.querySelector(".container-profile-menu .dropdown .btn");
const dropdown_profile_button = document.querySelector(".container-profile-menu .dropdown button");
const dropdown_profile_dropdown_menu = document.querySelector(".container-profile-menu .dropdown .dropdown-menu");
const profile_mobile_btn = document.querySelector(".container-profile-menu .profile-mobile-btn");
const profile_mobile_btn_close = document.querySelector(".container-profile-menu .profile-mobile-btn-close");
const search_mobile_btn = document.querySelector(".container-search-category.show-mobile .search-mobile-btn");
const search_mobile_btn_close = document.querySelector(".container-search-category.show-mobile .search-mobile-btn-close");
const search_content_menu = document.querySelector(".container-search-category.show-mobile .content-menu");
//const step2 = document.querySelector(".sidebar-links li .step2");
//const step2_menu = document.querySelector(".sidebar-links li .step2-menu");
const kebab = document.querySelector('.kebab-menu'),
    middle = document.querySelector('.kebab-menu .middle'),
    cross = document.querySelector('.kebab-menu .cross'),
    dropdown = document.querySelector('.kebab-menu .dropdown');
let screen_width = screen.width;

document.addEventListener("click", (e) => {
    e.stopPropagation();

    container_menu.classList.remove('is-active');

    dropdown_profile.classList.remove('active-profile');

    if (screen_width < 992) {
        // close profile menu on body click
        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
        // end close profile menu on body click

        // close search menu on body click
        search_mobile_btn.classList.remove('is-active');

        search_content_menu.style = 'display: none !important';
        // end close search menu on body click
    }

    // kebab menu
    middle.classList.remove('active');
    cross.classList.remove('active');
    dropdown.classList.remove('active');
});

//step2.addEventListener("click", (e) => {
 //   e.stopPropagation();

//    if (!step2_menu.classList.contains('is-active')) {
//        step2_menu.classList.add('is-active');
//    } else {
//        step2_menu.classList.remove('is-active');
 //   }
////});


kebab.addEventListener('click', (e) =>  {
    e.stopPropagation();

    if (!middle.classList.contains('active') && !cross.classList.contains('active') && !dropdown.classList.contains('active')) {
        middle.classList.add('active');
        cross.classList.add('active');
        dropdown.classList.add('active');
    } else {
        middle.classList.remove('active');
        cross.classList.remove('active');
        dropdown.classList.remove('active');
    }
})

profile_mobile_btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!profile_mobile_btn.classList.contains('is-active')) {

        profile_mobile_btn.classList.add('is-active');

        dropdown_profile.classList.add('active-profile');
        dropdown_profile.style = 'display: flex !important';

        dropdown_profile_button.classList.add('show');
        dropdown_profile_button.style = 'display: flex !important';

        dropdown_profile_dropdown_menu.classList.add('show');
        dropdown_profile_dropdown_menu.style = 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(4px, 38px, 0px);';
    }

    // close search menu on body click
    search_mobile_btn.classList.remove('is-active');

    search_content_menu.style = 'display: none !important';
    // end close search menu on body click
});

profile_mobile_btn_close.addEventListener("click", (e) => {
    e.stopPropagation();

    if (profile_mobile_btn.classList.contains('is-active')) {

        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
    }
});

search_mobile_btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!search_mobile_btn.classList.contains('is-active')) {

        search_mobile_btn.classList.add('is-active');

        search_content_menu.style = 'display: flex !important';
    }

    if (screen_width < 992) {
        // close profile menu on body click
        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
        // end close profile menu on body click
    }
});

search_mobile_btn_close.addEventListener("click", (e) => {
    e.stopPropagation();

    if (search_mobile_btn.classList.contains('is-active')) {

        search_mobile_btn.classList.remove('is-active');

        search_content_menu.style = 'display: none !important';
    }
});

dropdown_profile.addEventListener("click", (e) => {
    e.stopPropagation();

    if (dropdown_profile_child.classList.contains('show')) {
        dropdown_profile.classList.add('active-profile');
    } else {
        dropdown_profile.classList.remove('active-profile');
    }
});

container_menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

container_bars.addEventListener("click", (e) => {
    e.stopPropagation();

    container_menu.classList.toggle("is-active");
});

shrink_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

shrink_mobile_show_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

shrink_mobile_hide_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

sidebar_links.addEventListener('scroll', () => {
    if (sidebar_links.scrollTop > 20) {
        jump_top.style = 'display: flex !important';
    } else {
        jump_top.style = 'display: none !important';
    }

    if (sidebar_links.scrollHeight - (sidebar_links.scrollTop + sidebar_links.clientHeight) > 20) {
        jump_down.style = 'display: flex !important';
    } else {
        jump_down.style = 'display: none !important';
    }
})

jump_top.addEventListener("click", () => {
    sidebar_links.scrollTop -= 40;
});

jump_down.addEventListener("click", () => {
    sidebar_links.scrollTop += 40;
});

if (sidebar_links.scrollTop > 20) {
    jump_top.style = 'display: flex !important';
} else {
    jump_top.style = 'display: none !important';
}

if (sidebar_links.scrollHeight - (sidebar_links.scrollTop + sidebar_links.clientHeight) > 20) {
    jump_down.style = 'display: flex !important';
} else {
    jump_down.style = 'display: none !important';
}
    }
}


import '../assets/js/bootstrap.bundle.min.js';
</script>

<style>
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('../css/fonts/iran-sans-fa-num.woff2') format('woff2'),
    url('../css/fonts/iran-sans-fa-num.woff') format('woff');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    src: url('../css/fonts/iran-sans-fa-num-bold.woff2') format('woff2'),
    url('../css/fonts/iran-sans-fa-num.woff') format('woff');
}

body {
    font-family: "IRANSans" !important;
}
  @import '../css/dashboard/styles/bootstrap.min.css';
  @import '../css/dashboard/styles/dashboard.css';


a {
  text-decoration: none !important;
}
</style>



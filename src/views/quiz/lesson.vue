<template>
<div>
<div class="row pt-5">
          <div class="col-12 pb-2">
            <h2 class="h3 g-dashboard font-16">ساخت آزمون</h2>
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
            <div class="col-sm-12 p-0">
              <!--fateme tekrar tags-start-->
              <section class="col d-flex flex-row justify-content-between mb-3 mt-2 tagsContainer">
               
                <a-make-quiz id="selectedLesson" class="make-quiz font-12">انتخاب درس</a-make-quiz>
                <a-make-quiz id="selectedCourse" class="make-quiz disabled-tag  font-12">انتخاب مبحث</a-make-quiz>
                <a-make-quiz id="selectedQuestion" class="make-quiz disabled-tag  font-12">انتخاب سوال</a-make-quiz>
                <a-make-quiz id="selectedSubmit" class="make-quiz disabled-tag  font-12">ثبت آزمون</a-make-quiz>
              </section>
              <!--fateme tekrar tags-end-->

              <div v-if="this.state == 0" class="mainLayout bg-f2f2f2">
                <!--fateme tekrar-->
                <div class="card">
                  <div class="card-header d-flex flex-row justify-content-between height-100">
                    <div class="d-flex flex-row justify-content-between align-items-start w-100">
                      <div class="m-2">
                        <i class="fa fa-star d-inline" aria-hidden="true"></i>
                        <div class="fw-bold d-inline">
                          درس مورد نظر خود را برای آزمون انتخاب کنید:
                        </div>
                      </div>
                      <i class="fa fa-question-circle p-all5 font-28 color-blue curser-point" aria-hidden="true"
                        data-bs-toggle="modal" data-bs-target="#addStudentModal">
                      </i>
                    </div>
                    <!--MODAL-->
                    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-body d-flex flex-row justify-content-center">
                          <img src="../../assets/img/addStudent.jpg" width="auto" height="500"
                            class="p-1 bg-white rounded-1" />
                          <div class="position-relative">
                            <img src="../../assets/img/close.png" width="auto" height="35"
                              class="p-0 bg-white rounded-5 position-absolute modal-close curser-point" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--MODAL-->
                  </div>
                  <div class="card-body tab-content">
                    <div class="tab-pane active" id="student-select">
                      <section class="mx-5">
                        <form>
                          <section class="dropdownContainer mt-4">
                            <div class="dropdown-label c-1976d2 font-14">
                              انتخاب درس:
                            </div>
                            <div class="dropdown">
                              <a class="btn btn-light dropdown-toggle d-flex flex-row justify-content-between px-3 py-2"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span id="dropdownMenuLinkname" class="font-14">انتخاب کنید</span>
                                <i class="fa fa-sort-desc" aria-hidden="true"></i>
                              </a>
                              <ul class="dropdown-menu height-100 w-100 overflow-auto scrollbar scrollbar-primary"
                                aria-labelledby=" dropdownMenuLink" id="ulMenueLinkname">
                                <div class="force-overflow" id="lesson-name">
                                </div>
                              </ul>
                            </div>
                          </section>
                          <section class="d-flex flex-row justify-content-end mt-3 mb-1 c-969696 font-12"
                            id="report-count">
                          </section>
                        </form>
                      </section>
                      <section class="d-flex flex-row mt-9 submit-group align-items-center justify-content-between"
                        id="submit-group">
                        <button @click="goToCourse()" class="btn btn-success text-white px-3 py-2 m-0 disabled font-14"
                          id="test-lesson-select" disabled>
                          تائید درس آزمون
                          <i class="fa fa-chevron-left me-1 p-0" aria-hidden="true"></i>
                          <i class="fa fa-chevron-left m-0 p-0" aria-hidden="true"></i>
                        </button>
                      </section>
                    </div>
                  </div>
                </div>

                <!--MODAL-->
                <div class="modal fade" id="finalConfirm" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      
                      <div class="modal-body d-flex flex-column m-2 font-14" id="studentGroupConfirmDataParent">
                        هنوز درسی انتخاب نشده است
                      </div>
                      <div class="modal-footer border-0 d-flex flex-row">
                        <button type="button" class="btn btn-success font-12" data-bs-dismiss="modal"
                          id="confirmChanges">تایید
                          و رفتن به مرحله بعد
                        </button>
                        <button type="button" class="btn btn-danger font-12" data-bs-dismiss="modal">بازگشت</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--MODAL-->
                
              </div>
              <!--next-->
              <div v-if="this.state == 1" class="mainLayout bg-f2f2f2">
                <!--fateme tekrar-->
                <div class="card">
                  <div class="card-header d-flex flex-row justify-content-between height-100">
                    <div class="d-flex flex-row justify-content-between align-items-start w-100">
                      <div class="m-2">
                        <i class="fa fa-star d-inline" aria-hidden="true"></i>
                        <div class="fw-bold d-inline">
                          مباحث مورد نظر خود را
                          انتخاب بفرمایید:
                        </div>
                      </div>
                      <i class="fa fa-question-circle p-all5 font-28 color-blue curser-point" aria-hidden="true"
                        data-bs-toggle="modal" data-bs-target="#addStudentModal">
                      </i>
                    </div>
                    <!--MODAL-->
                    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-body d-flex flex-row justify-content-center">
                          <img src="../../assets/img/addStudent.jpg" width="auto" height="500"
                            class="p-1 bg-white rounded-1" />
                          <div class="position-relative">
                            <img src="../../assets/img/close.png" width="auto" height="35"
                              class="p-0 bg-white rounded-5 position-absolute modal-close curser-point" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--MODAL-->
                  </div>
                  <div class="card-body tab-content">
                    <div class="tab-pane active" id="student-select">
                      <section class="mx-5">
                        <Course ></Course>
                      </section>
                      <section  class="d-flex flex-row mt-9 submit-group align-items-center justify-content-between"
                        id="submit-group">
                       
                        <button @click="goToQuestion()" class="btn btn-success text-white px-3 py-2 m-0 font-14"
                          id="test-lesson-select">تائید مباحث آزمون
                          <i class="fa fa-chevron-left me-1 p-0" aria-hidden="true"></i>
                          <i class="fa fa-chevron-left m-0 p-0" aria-hidden="true"></i>
                        </button>
                      </section>
                    </div>
                  </div>
                </div>

                <!--MODAL-->
                <div class="modal fade" id="finalConfirm" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      
                      <div class="modal-body d-flex flex-column m-2 font-14" id="studentGroupConfirmDataParent">
                        هنوز درسی انتخاب نشده است
                      </div>
                      <div class="modal-footer border-0 d-flex flex-row">
                        <button type="button" class="btn btn-success font-12" data-bs-dismiss="modal"
                          id="confirmChanges">تایید
                          و رفتن به مرحله بعد
                        </button>
                        <button type="button" class="btn btn-danger font-12" data-bs-dismiss="modal">بازگشت</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--MODAL-->
                
              </div>
              <!--end-->
              <div v-if="this.state == 2" class="mainLayout bg-f2f2f2">
                <div class="card">
                  <div class="card-header d-flex flex-row justify-content-between height-100">
                    <div class="d-flex flex-row justify-content-between align-items-start w-100">
                      <div class="m-2">
                        <i class="fa fa-star d-inline" aria-hidden="true"></i>
                        <div class="fw-bold d-inline">
                         سئوالات مورد نظر خود را برای آزمون انتخاب نمایید:
                        </div>
                      </div>
                      <i class="fa fa-question-circle p-all5 font-28 color-blue curser-point" aria-hidden="true"
                        data-bs-toggle="modal" data-bs-target="#addStudentModal">
                      </i>
                    </div>
                    <!--MODAL-->
                    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-body d-flex flex-row justify-content-center">
                          <img src="../../assets/img/addStudent.jpg" width="auto" height="500"
                            class="p-1 bg-white rounded-1" />
                          <div class="position-relative">
                            <img src="../../assets/img/close.png" width="auto" height="35"
                              class="p-0 bg-white rounded-5 position-absolute modal-close curser-point" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--MODAL-->
                  </div>
                  <div class="card-body tab-content">
                    <div class="tab-pane active" id="student-select">
                      <section class="mx-5">
                        <Question></Question>
                      </section>
                      <section class="d-flex flex-row mt-9 submit-group align-items-center justify-content-between"
                        id="submit-group">
                        
                        <button @click="goToSubmit()" class="btn btn-success text-white px-3 py-2 m-0 font-14"
                          id="test-lesson-select">تائید سئوالات آزمون
                          <i class="fa fa-chevron-left me-1 p-0" aria-hidden="true"></i>
                          <i class="fa fa-chevron-left m-0 p-0" aria-hidden="true"></i>
                        </button>
                      </section>
                    </div>
                  </div>
                </div>

                <!--MODAL-->
                <div class="modal fade" id="finalConfirm" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                     
                      <div class="modal-body d-flex flex-column m-2 font-14" id="studentGroupConfirmDataParent">
                        هنوز درسی انتخاب نشده است
                      </div>
                      <div class="modal-footer border-0 d-flex flex-row">
                        <button type="button" class="btn btn-success font-12" data-bs-dismiss="modal"
                          id="confirmChanges">تایید
                          و رفتن به مرحله بعد
                        </button>
                        <button type="button" class="btn btn-danger font-12" data-bs-dismiss="modal">بازگشت</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--MODAL-->
                
              </div>
              <div v-if="this.state == 3" class="mainLayout bg-f2f2f2">
                <!--fateme tekrar-->
                <div class="card">
                  <div class="card-header d-flex flex-row justify-content-between height-100">
                    <div class="d-flex flex-row justify-content-between align-items-start w-100">
                      <div class="m-2">
                        <i class="fa fa-star d-inline" aria-hidden="true"></i>
                        <div class="fw-bold d-inline">
                       ثبت نهایی آزمون
                        </div>
                      </div>
                      <i class="fa fa-question-circle p-all5 font-28 color-blue curser-point" aria-hidden="true"
                        data-bs-toggle="modal" data-bs-target="#addStudentModal">
                      </i>
                    </div>
                    <!--MODAL-->
                    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-body d-flex flex-row justify-content-center">
                          <img src="../../assets/img/addStudent.jpg" width="auto" height="500"
                            class="p-1 bg-white rounded-1" />
                          <div class="position-relative">
                            <img src="../../assets/img/close.png" width="auto" height="35"
                              class="p-0 bg-white rounded-5 position-absolute modal-close curser-point" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--MODAL-->
                  </div>
                  <div class="card-body tab-content">
                    <div class="tab-pane active" id="student-select">
                      <section class="mx-5">
                        <Assay></Assay>
                      </section>
                      <section class="d-flex flex-row mt-9 submit-group align-items-center justify-content-between"
                        id="submit-group">

                      </section>
                    </div>
                  </div>
                </div>

                <!--MODAL-->
                <div class="modal fade" id="finalConfirm" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                    
                      <div class="modal-body d-flex flex-column m-2 font-14" id="studentGroupConfirmDataParent">
                        هنوز درسی انتخاب نشده است
                      </div>
                      <div class="modal-footer border-0 d-flex flex-row">
                        <button type="button" class="btn btn-success font-12" data-bs-dismiss="modal"
                          id="confirmChanges">تایید
                          و رفتن به مرحله بعد
                        </button>
                        <button type="button" class="btn btn-danger font-12" data-bs-dismiss="modal">بازگشت</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--MODAL-->
                
              </div>

            </div>
            </div>
        </section>
        </div>
</template>


<script>
import router from "src/router";
import axios from "src/plugins/axios";
import { vxm } from "src/store";
import Course from "./course.vue"
import Question from "./question.vue"
import Assay from "./assay.vue"
import { AssayLesson } from "src/models/IAssay";

export default ({
    data() {
         return {
            myLessons:{},
            selectedLessons:[],
            state: 0,
           topicStore : vxm.topicStore,
          assayStore: vxm.assayStore,
           topicList: {}
         }
    },
    components: {
    Course,
    Question,
    Assay
    },
    methods:{
       goToCourse()
       {
           this.state = 1;
           document.getElementById("selectedLesson").classList.add('disabled-tag');
           document.getElementById("selectedCourse").classList.remove('disabled-tag');
       },
       goToQuestion()
       {
        this.assayStore.submitPreCreate().then(() => {
        this.state = 2;
        document.getElementById("selectedCourse").classList.add('disabled-tag');
           document.getElementById("selectedQuestion").classList.remove('disabled-tag');
        });
       },
       goToSubmit()
       {
           this.state = 3;
           document.getElementById("selectedQuestion").classList.add('disabled-tag');
           document.getElementById("selectedSubmit").classList.remove('disabled-tag');
       }
    },
    mounted()
    {
      
      this.topicList = this.topicStore.fillListt();
      
      console.log(this.topicList);
         axios.get(`/api/lesson_User/GetAllMyLesson`)
      .then(response => {
              this.myLessons = response.data;
        //lesson question key value array
var lessonBasedOnLevel = []
//level array
var levelArray = []
//lesson array
var lessonArray = []


var questions = [
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 1, lessonNameId: 1 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 2, lessonNameId: 2 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 3, lessonNameId: 3 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 4, lessonNameId: 4 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 5, lessonNameId: 5 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 6, lessonNameId: 6 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 7, lessonNameId: 7 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 8, lessonNameId: 8 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 9, lessonNameId: 9 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 10, lessonNameId: 1 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 11, lessonNameId: 2 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 12, lessonNameId: 3 }
]

var stLevel = document.getElementsByName('lv-name');
const dropdownMenuLink = document.getElementById("dropdownMenuLink")
const dropdownMenuLinkname = document.getElementById("dropdownMenuLinkname")
const selects = document.getElementById("selects")
var list = document.getElementById("list-group")
var studentList = document.getElementById("student-list")
var reportCount = document.getElementById("report-count")
var stNames = document.getElementsByName("st-name")
var levelNameID = document.getElementById("level-name")
var lessonNameID = document.getElementById("lesson-name")





var lessonNames = this.myLessons;
addLesson();


function addLesson() {
    console.log(lessonNames);
    
    lessonBasedOnLevel = []
        for (var j = 0; j < lessonNames.length; j++) {
                let keyValue = { key: 0, value: '', parentKey: 0 }
                keyValue.key = lessonNames[j].Id
                keyValue.value = lessonNames[j].Name
                lessonBasedOnLevel.push(keyValue)
                console.log(lessonNames[j].Name)
    }
    makeLesson();
}
function makeLesson() {
    console.log(lessonBasedOnLevel.length);
    lessonNameID.innerHTML = ''
    lessonBasedOnLevel.length > 0 ?
        lessonBasedOnLevel.forEach((item) => {

            let div = document.createElement('div')
            let input = document.createElement('input')
            let label = document.createElement('label')

            div.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center')
            input.classList.add('mx-1', 'my-1')
            input.type = "checkbox"
            input.name = "st-name"
            input.onclick = function() {addName(this);};
            label.for = "st-name"
            label.classList.add("font-14")

            input.value = item.value
            input.id = item.key

            input.alt = item.parentKey
            label.innerText = item.value
            div.appendChild(input)
            div.appendChild(label)
            lessonNameID.appendChild(div)
        }) : null
}

function addName(x) {
    var str = dropdownMenuLinkname.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    let keyValue = { key: 0, value: '', parentKey: 0 }
    if (x.checked) {
        keyValue.key = x.id;
        keyValue.value = x.value;
        keyValue.parentKey = x.alt
        !str.includes(x.value) ?
            lessonArray.push(keyValue) : null
        updateLessonString()
      vxm.assayStore._lessonList.push(new AssayLesson(x.id, x.value));
      vxm.assayStore.assayCreate.Lessons.push(new AssayLesson(x.id, x.value));
    } else {
        lessonArray = lessonArray.filter(function (f) { return f.value !== x.value })
        vxm.assayStore._lessonList  = vxm.assayStore._lessonList.filter(function (f) { return f.id !== x.id })
      vxm.assayStore.assayCreate.Lessons  = vxm.assayStore.assayCreate.Lessons.filter(function (f) { return f.id !== x.id })
        updateLessonString()
    }
    updateLessonString()
    
    if(lessonArray.length > 0)
    {
        var button = document.getElementById("test-lesson-select");
        button.removeAttribute("disabled");
        button.classList.remove("disabled");
    }
    else
    {
        console.log("Test");
       var button = document.getElementById("test-lesson-select");
        button.setAttribute("disabled",'disabled');
        button.classList.add("disabled");
        
    }
}

function updateLessonString() {
    let temp = []
    lessonArray.forEach((item) => {
        temp.push(item.value)
    })
    let str = '';
    reportCount.innerText = `تا کنون ${makePersian(lessonArray.length)} درس انتخاب شده اند.`
    temp.length === 0 ? str = 'انتخاب کنید' :
         str = temp.toString()
    dropdownMenuLinkname.textContent = str
}
var persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
function makePersian(number) {
    let array = number.toString().split('')
    let str = ''
    array.forEach((item) => {
        str += persainArray[item]
    })
    return str
}
function questionCountCalc() {
    let count = 0
    lessonArray.forEach((elem) => {
        count += questions[elem.key].questions.length
    })
    return count
}

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
 @import '../../css/dashboard/styles/style.css';
     @import '../../css/dashboard/styles/makeQuiz-selectCourse.css';
</style>
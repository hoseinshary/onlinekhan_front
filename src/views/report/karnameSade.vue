<template>
  <div class="main">
    <link
      href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
      rel="stylesheet"
    />

    <div class="row pt-4">
      <div class="col-12 pb-2">
        <h2 class="h3 g-dashboard font-16">کارنامه آزمون</h2>
      </div>
      <div class="col-12">
        <div class="d-flex gap-2">
          <span class="border-title border-title-blue d-block"></span>
          <span class="border-title border-title-gray d-block"></span>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-lg-3 filterCol container-fluid h-100">
        <div class="c-card d-flex flex-column overflow-hidden h-100">
          <div class="p-3">
            <span class="fw-bold font-16 c-1976d2">بررسی دقیق تر آزمون شما:</span>
            <div class="row mt-3">
              <div class="col-6 filters">
                <span class="text-end font-14 fw-bold">فیلترها</span>
              </div>
              <div class="col-6">
                <div
                  class="bg-gradient position-relative text-center report"
                  @click="$router.push('/reportTest')"
                >
                  <span class="font-14 fw-bold text-white">گزارش آزمون</span>
                </div>
              </div>
              <div v-if="filterObjs.length > 4" class="c-ff0048">
                حداکثر می توانید ۴ فیلتر انتخاب نمایید.
              </div>
            </div>
            <div class="overflow container-fluid">
              <div
                class="d-flex flex-row justify-content-round align-items-center mt-1 font-12"
              >
                فیلتر مباحث دروس
               <label class="switch me-1">
                <input type="checkbox">
                <span class="slider round">
                </span>
              </label>
              </div>
              <div v-for="(item, index) in filters" :key="index">
                <div v-if="!item.notVisibleInSide" class="mt-4">
                  {{ item.title }}:
                    <q-select v-model="item.model" class="qselect bg-white" borderless :options="item.options" placeholder="پیش فرض" 
                       clearable
                       multiple
                       emit-value
                       map-options
                      @input="(v)=>checkVals(v, item.id)"
                    />
                </div>
              </div>
              <div
                class="bg-gradient position-relative text-center report mt-4 p-3"
                @click="makeReport(calcGridData)"
              >
                <span class="font-14 fw-bold text-white">پردازش و تهیه گزارش</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="c-card d-flex flex-column overflow-hidden h-100">
          <div class="p-3 d-flex flex-row justify-content-between">
            <div class="fw-bold font-16 c-1976d2">
              <div v-if="displayModel === 0" class="mt-0">
                کارنامه ساده آزمون {{this.assayTitle}} نوع آزمون:
              </div>
              <div v-if="displayModel === 1" class="mt-0">
                کارنامه کلی آزمون {{this.assayTitle}} نوع آزمون:
              </div>
              <div v-if="displayModel === 2" class="mt-0">
                کارنامه مبحثی آزمون {{this.assayTitle}} نوع آزمون:
              </div>
            </div>
            <div class="m-1 d-flex flex-row justify-content-between">
              <div
                class="testReport m-1 px-3 py-2"
              >
                <i class="fa fa-eye ms-2"></i>
                <span>گزارش آزمون ها</span>
              </div>
              <div
                class="testReport m-1 px-3 py-2"
              >
                <i class="fa fa-eye ms-2"></i>
                <span>گزارش پیشرفت</span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-between mx-3 my-0">
            <div v-if="filterObjs.length===0">
              <span class="c-ff0048 font-12 me-3">نمایش جدول بدون اعمال فیلتر </span>
            </div>
            <div v-else>
              <span class="c-ff0048 font-12 me-5 text-end">
              نمایش جدول با اعمال فیلتر 
              {{makeFilterTitlesString()}}
              </span>
            </div>
            <!--
            <div v-if="displayModel === 1" class="kolDoroos font-12 mb-1" @click="open(2)">
                نمایش کارکرد کل دروس    
            </div>-->
            </div>
          <!-- </span> -->
          <section class="bg-white p-3 rounded-1 m-3 mt-0">
            <div class="d-flex flex-row justify-content-between">
              <div class="w-75 borderButtom">
                <div class="d-flex flex-row justify-content-between mt-5">
                  <div v-if="displayModel === 0">
                    نمایش ساده کارنامه آزمون:
                  </div>
                  <div v-if="displayModel === 1">
                    نمایش عادی کارنامه آزمون:
                  </div>
                  <div v-if="displayModel === 2">نمایش مبحثی آزمون:</div>
                  <div class="d-flex flex-row justify-content-end">
                    <div>انتخاب نوع نمایش:</div>
                    <q-select
                      v-model="displayModel"
                      class="qselect bg-f2f2f2 w-50"
                      borderless
                      :options="dispayOptions"
                    />
                  </div>
                </div>
                <!-- <hr /> -->
              </div>
              <div class="dnReport p-2 w-25">
                <div
                  class="download"
                  @click="open(1)"
                >
                  <i class="fa fa-eye ms-2"></i>
                  <span>دانلود گزارش آزمون</span>
                </div>
                <div @click="runAssay(assayId)" class="download">
                  <i class="fa fa-eye ms-2"></i>
                  <span>اجرای مجدد آزمون</span>
                </div>
              </div>
            </div>

            <div v-if="columnsToSend.length !== 0 && displayModel == 0">
              <Table
                :filterObjects="filterObjs"
                :columns="columnsToSend"
                :gridDataCalced="gridDataCalced"
                :defaultColumnsLength="columns.length"
                :filtersOptions="filtersOptions"
                :QuestionsFile="QuestionsFile"
                :AnswersFile="AnswersFile"
                icon="ok"
              />
            </div>
            <div v-if="columnsToSend.length !== 0 && displayModel == 1">
              <div class="d-flex flex-row jusyify-content-between">
                انتخاب دروس:
                <div class="w-25 ms-1">
                  <q-select
                    v-model="darsModel"
                    class="qselect bg-f2f2f2"
                    borderless
                    :options="darsOptions"
                    multiple
                  />
                </div>

                انتخاب مباحث:
                <div class="w-25 ms-1">
                  <q-select
                    v-model="articleModel"
                    class="qselect bg-f2f2f2"
                    borderless
                    :options="articleOptions"
                    multiple
                  />
                </div>
                <div class="col-3">
                <div
                  class="bg-gradient position-relative text-center report"
                  @click="darsandtopicfilter()"
                >
                  <span class="font-14 fw-bold text-white">اعمال فیلتر</span>
                </div>
              </div>
              </div>
              <div v-for="(item, index) in soalfiltered" :key="index">
                <ReportSimple :question="item" 
                 :QuestionsFile="QuestionsFile"
                :AnswersFile="AnswersFile"/>
                <hr />
              </div>
            </div>
            <div v-if="columnsToSend.length !== 0 && displayModel == 2">
              <div class="card">
                <div class="card-header d-flex flex-row justify-content-between bg-white">
                  <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                    <li class="nav-item tab bg-f2f2f2">
                      <a
                        class="nav-link active font-14"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="#first-course-select"
                        >درس۱</a
                      >
                    </li>
                    <li class="nav-item tab bg-f2f2f2">
                      <a
                        class="nav-link font-14"
                        data-bs-toggle="tab"
                        href="#second-course-select"
                        >درس۲</a
                      >
                    </li>
                    <li class="nav-item tab bg-f2f2f2">
                      <a
                        class="nav-link font-14"
                        data-bs-toggle="tab"
                        href="#third-course-select"
                        >درس۳</a
                      >
                    </li>
                    <li class="nav-item tab bg-f2f2f2">
                      <a
                        class="nav-link font-14"
                        data-bs-toggle="tab"
                        href="#fourth-course-select"
                        >درس۴</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="card-body tab-content bg-f6f6f6">
                  <div class="d-flex flex-row">
                    انتخاب مباحث:
                    <div class="w-25 ms-1">
                      <q-select
                        v-model="articleModel"
                        class="qselect bg-white"
                        borderless
                        :options="articleOptions"
                        multiple
                      />
                    </div>
                    <div class="p-1 bg-1976d2 text-white addButton">افزودن</div>
                  </div>
                  <div class="tab-pane active" id="first-course-select">
                    <Table
                      :filterObjects="filterObjs"
                      :columns="columnsToSend"
                      :gridDataCalced="gridDataCalced"
                      :defaultColumnsLength="columns.length"
                      :filtersOptions="filtersOptions"
                      :QuestionsFile="QuestionsFile"
                      :AnswersFile="AnswersFile"
                      icon="ok"
                    />
                  </div>
                  <div class="tab-pane" id="second-course-select">
                    <Table
                      :filterObjects="filterObjs"
                      :columns="columnsToSend"
                      :gridDataCalced="gridDataCalced"
                      :defaultColumnsLength="columns.length"
                      :filtersOptions="filtersOptions"
                      :QuestionsFile="QuestionsFile"
                      :AnswersFile="AnswersFile"
                      icon="ok"
                    />
                  </div>
                  <div class="tab-pane" id="third-course-select">
                    <Table
                      :filterObjects="filterObjs"
                      :columns="columnsToSend"
                      :gridDataCalced="gridDataCalced"
                      :defaultColumnsLength="columns.length"
                      :filtersOptions="filtersOptions"
                      :QuestionsFile="QuestionsFile"
                      :AnswersFile="AnswersFile"
                      icon="ok"
                    />
                  </div>
                  <div class="tab-pane" id="fourth-course-select">
                    <Table
                      :filterObjects="filterObjs"
                      :columns="columnsToSend"
                      :gridDataCalced="gridDataCalced"
                      :defaultColumnsLength="columns.length"
                      :filtersOptions="filtersOptions"
                      :QuestionsFile="QuestionsFile"
                      :AnswersFile="AnswersFile"
                      icon="ok"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <bs-modal :show="showModal" size="md" @open="showModal" @close="close">
      <template class="header">
        <div
          class="d-flex flex-row justify-content-between align-items-center header-container p-2"
        >
          <div class="text-white"></div>
          <div class="text-white">
            <q-btn dense icon="close" @click="close()" />
          </div>
        </div>
      </template>

      <template>
        <div v-if="showPdf" class="mt-4">
          دانلود فایل آزمون ریاضی اول دبیرستان
          <div class="c-1976d2">دانلود فایل [PDF]</div>
        </div>
        <div v-else-if="showGlance" class="mt-4">
          <section class="bg-white p-3 rounded-1 m-3">
            نتیجه آزمون شما در یک نگاه:
            <div class="d-flex flex-row mt-3">
              <div class="d-inline me-2">
                <div class="d-block">تعداد کل سوالات:۶</div>
                <div class="d-block">درصد کنکوری ۲۷.۸٪</div>
              </div>
              <div class="d-inline c-06a971 me-4">
                <div class="d-block">تعداد سوالات درست: ۱</div>
                <div class="d-block">درصد: ۲۸.۷٪</div>
              </div>
              <div class="d-inline c-ff0048 me-4">
                <div class="d-block">تعداد سوالات غلط: ۲</div>
                <div class="d-block">درصد: ۲۸.۷٪</div>
              </div>
              <div class="d-inline c-EE7E26 me-4">
                <div class="d-block">تعداد سوالات نزده: ۳</div>
                <div class="d-block">درصد: ۲۸.۷٪</div>
              </div>
            </div>
          </section>
        </div>
      </template>

      <template slot="footer">
        <base-btn-back @click="close()"></base-btn-back>
      </template>
    </bs-modal>
  </div>
</template>
<script>
import { ref } from "vue";
import router from "src/router";

import table from "./reportTable.vue";
import reportSimple from "./reportSimple.vue";
import axios from "src/plugins/axios";
import axiosQuestion from "src/plugins/axiosQuestion";
import { vxm } from "src/store";
import { assayStore } from "src/store/assayStore";

// import axios from "axios";
export default {
  components: {
    Table: table,
    ReportSimple: reportSimple
  },
  data() {
    return {
      assayStore : vxm.assayStore,
      assayAnswerSheetStore : vxm.assayAnswerSheetStore,
  answerSheet : vxm.assayAnswerSheetStore.assayAnswerSheet,
      showPdf: false,
      showGlance: false,
      filterAmount: 0,
      filterObjs: [],
      showModal: false,
      closeModal: true,
      openModal: false,
      titleFilter: true,
      withAnswer: false,
      resultType: 0,
      darsad: true,
      darsModel: [],
      darsOptions: [
        { label: "درس۱", value: 0 },
        { label: "درس۲", value: 1 },
        { label: "درس۳", value: 2 },
        { label: "درس۴", value: 3 }
      ],
      articleModel: [],
      articleOptions: [
        { label: "۱مبحث", value: 0 },
        { label: "مبحث۲", value: 1 },
        { label: "مبحث۳", value: 2 },
        { label: "مبحث۴", value: 3 }
      ],
      displayModel: 0,
      dispayOptions: [
        { label: "نمایش ساده", value: 0 },
        { label: "نمایش کلی", value: 1 }
        //{ label: "نمایش مبحثی", value: 2 }
      ],
      columns: [
        {
          id: 1,
          title: "بررسی دقیق سوال",
          data: "Id",
          searchable: false,
          sortable: false
        },
        {
          id: 2,
          data: "questionNum",
          required: true,
          title: "شماره سوال",
          align: "center",
          field: (row) => row.data,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          id: 3,
          data: "title",
          title: "مبحث",
          sortable: true,
          align: "center"
        },
        {
          id: 4,
          data: "correct",
          title: "گزینه صحیح",
          sortable: true,
          align: "center"
        },
        {
          id: 5,
          data: "selected",
          title: "گزینه زده شده",
          sortable: true,
          align: "center"
        },
        {
          id: 6,
          data: "rightOptionPercent",
          // title: this.makeTitleColumn(1),
          // title: this.makeTitleColumn(1),
          title: "درصد/تعداد گزینه صحیح",
          sortable: true,
          align: "center"
        },
        {
          id: 7,
          data: "wrongOptionPercent",
          // title: this.makeTitleColumn(2),
          title: "درصد/تعداد گزینه غلط",
          sortable: true,
          align: "center"
        },
        {
          id: 8,
          data: "nonOptionPercent",
          // title: this.makeTitleColumn(3),
          title: "درصد/تعداد زده نشده",
          sortable: true,
          align: "center"
        },
        {
          id: 9,
          data: "gA",
          title: "A گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 10,
          data: "gB",
          title: "B گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 11,
          data: "gC",
          title: "C گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 12,
          data: "total1",
          title: "کل",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 13,
          data: "gA2",
          title: "۲A گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 14,
          data: "gB2",
          title: "۲B گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 15,
          data: "gC2",
          title: "۲C گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 16,
          data: "total2",
          title: "کل",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 17,
          data: "gA3",
          title: "۳A گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 18,
          data: "gB3",
          title: "۳B گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 19,
          data: "gC3",
          title: "۳C گروه",
          sortable: true,
          align: "center",
          visible: false
        },
        {
          id: 20,
          data: "total3",
          title: "کل",
          sortable: true,
          align: "center",
          visible: false
        }
      ],
      filters: [
        {
          title: "نوع نتیجه",
          data: "result",
          id: 21,
          model: [],
          options: []
        },
        {
          title: "نوع سوالات",
          data: "questionType",
          id: 22,
          model: [],
          options: []
        },
        {
          title: "درجه تکرار سوال",
          data: "questionRepeatR",
          id: 23,
          model: [],
          options: []
        },
        {
          title: "منبع سوالات",
          data: "resource",
          id: 24,
          model: [],
          options: []
        },
        {
          title: "درجه سختی آزمون",
          data: "hardness",
          id: 25,
          model: [],
          options: []
        },
        {
          title: "درجه کیفیت سوالات",
          data: "quality",
          id: 26,
          model: [],
          options: []
        // }
        },
        {
          title: "مبحث",
          data: "topic",
          id: 27,
          model: [],
          options: [],
          notVisibleInSide: true
        }
      ],
      filtersOptions: [],
      gridData: [],
      gridDataCalced: [],
      columnsToSend: [],
      AnswerSheetCorrectExams: [],
      Answers: [],
      QuestionsAnswer: [],
      AssayQuestions: [],
      QuestionsFile: [], //path
      AnswersFile:[],
      QuestionsIds: [],
      TotalAnswer: [],
      tedadOrDarsad: [],
      topics:[],
      lessons:[],
      idlessons:[],
      soalfiltered:[],
      assayTitle: "",
      assayId: 0
    };
  },

  methods: {
     checkVals(v, id) {
            if(v.includes(false)){
                this.filters[id-21].model = this.filters[id-21].options.filter(t => t.label !== 'همه').map(i => i.value)
            }
      },
    log(a) {
      console.log(a, "***********model");
    },

    close() {
      this.closeModal = true;
      this.showModal = false;
    },
    open(i) {
      i===1?this.showPdf = true:i===2?this.showGlance=true:null;
      this.showModal = true;
      this.openModal = true;
      this.closeModal = false;
    },
    makeTitleColumn(option) {
      let str = "گزینه " + option;
      let darsad = "درصد ";
      let tedad = "تعداد ";
      let result = "";
      if (this.darsad) {
        result = darsad + str;
      } else {
        result = tedad + str;
      }
      return result;
    },
    apiCall() {
      
      axios
        .get(`/api/AssayAnswerSheet/GetAssayById/`+this.answerSheet.Id)
        .then((response) => {
          this.log(response.data);
         
          this.AnswerSheetCorrectExams = response.data.AnswerSheetCorectExams;
          this.Answers = response.data.Answers;
          this.QuestionsAnswer = response.data.Assay.QuestionsAnswer;
          this.AssayQuestions = response.data.Assay.AssayQuestions;
          this.QuestionsFile = response.data.Assay.QuestionsFile;
          this.assayTitle = response.data.Assay.Title;
          this.assayId = response.data.Assay.Id;
          this.QuestionsIds = response.data.QuestionIds;
          this.TotalAnswer = response.data.TotalAnswer;
          response.data.Assay.AssayQuestions.forEach(element => {
            let currentselectt = element.Question.QuestionAnswers.find(element=> element.IsMaster == true);
            this.AnswersFile.push(currentselectt.FilePath)
            this.idlessons.push(element.LessonId);
            let topic = element.Question.Topics.find(x=>x.IsExamSource == true);
            if(topic != null && !this.topics.find(x=> x.Id == topic.Id))
            {
                this.topics.push(topic);
            }
            this.articleOptions = [];
          this.topics.forEach(elements => {
            this.articleOptions.push({label: elements.Title, value:elements.Id})
          })


          });

        })
        .then(this.getallLessons)
        .then(this.makeFilterOptions)
        .then(this.makeGridData);



    },
    darsandtopicfilter()
    {

      this.soalfiltered = this.gridDataCalced;
      console.log(this.darsModel);
      console.log(this.articleModel);
      if(this.darsModel.length > 0)
      {
        this.soalfiltered = this.soalfiltered.filter(elements=> this.darsModel.includes(elements.lessonId));
      }
      if(this.articleModel.length > 0)
      {
        this.soalfiltered = this.soalfiltered.filter(elements=> this.articleModel.includes(elements.topicId));
      }
      
    },
    getallLessons()
    {
      axiosQuestion
        .get(`/api/Lesson/GetAllSmall`)
        .then((responses) => {
          this.lessons = responses.data;
                    this.lessons = this.lessons.filter((el) => { return this.idlessons.includes(el.Id)});
          this.darsOptions = [];
          this.lessons.forEach(elements => {
            this.darsOptions.push({label: elements.Name, value:elements.Id})
          })
        });
    },
    makeFilterTitlesString(){
      let str = '';
      for(let i=0;i<this.filterObjs.length;i++){
        str = str+' - '+this.filterObjs[i].title
      }
      return str
    },
    runAssay(id){
    this.assayStore.getById(id);
    router.push("/assay/runAssay");

  
  },
    makeFilterOptions() {
      let mianArray = [];
      // mainArray[0]=null;//darsad - tedad
      // mainArray[1]=QuestionTypes;
      // mainArray[2]=RepeatnessTypes;
      // mainArray[3]=AuthorType;
      // mainArray[4]=QuestionHardnessTypes;
      // mainArray[5]=QuestionRanks;

      let q1 = {
        //set in front
        id: 22,
        options: [
          { Value: "تعداد", id: 0 },
          { Value: "درصد", id: 1 }
        ]
      };
      let q2 = {
        id: 23,
        options: [
          { Value: "چند گزینه ای", id: 6 },
          { Value: "تشریحی", id: 7 }
        ]
      };
      let q3 = {
        id: 24,
        options: [
          { Value: "کم", id: 21 },
          { Value: "متوسط", id: 22 },
          { Value: "زیاد", id: 23 }
        ]
      };
      let q4 = {
        id: 25,
        options: [
          { Value: "کنکور سراسری", id: 24 },
          { Value: "تالیف", id: 25 },
          { Value: "جزوه", id: 26 },
          { Value: "نامشخص", id: 1039 },
          { Value: "کتاب", id: 1078 },
          { Value: "آزمون", id: 1079 }
        ]
      };
      let q5 = {
        id: 26,
        options: [
          { Value: "همه", id: false },
          { Value: "ساده", id: 11 },
          { Value: "متوسط", id: 12 },
          { Value: "سخت", id: 13 },
          { Value: "بسیار سخت", id: 14 }
        ]
      };
      let q6 = {
        id: 27,
        options: [
          { Value: "ضعیف", id: 1064 },
          { Value: "متوسط", id: 1063 },
          { Value: "خوب", id: 1062 },
          { Value: "عالی", id: 1061 }
        ]
      };
      let q7 = {
        id: 28,
        options: [
          { Value: "ریاضی", id: 0 },
          { Value: "فیزیک", id: 1 },
          { Value: "ادبیات", id: 2 },
          { Value: "زبان", id: 3 }
        ]
      };

      mianArray.push(q1);
      mianArray.push(q2);
      mianArray.push(q3);
      mianArray.push(q4);
      mianArray.push(q5);
      mianArray.push(q6);
      mianArray.push(q7);

      this.filtersOptions = mianArray;

      for (let j = 0; j < this.filters.length; j++) {
        let arr = [];
        let options = [];
        options = mianArray[j].options;
        for (let i = 0; i < options.length; i++) {
          let optionElem = {
            label: "",
            value: 0
          };
          optionElem.label = options[i].Value;
          optionElem.value = options[i].id;
          arr.push(optionElem);
        }
        this.filters[j].options = arr;
      }
    },

    makeReport(calcGridData) {
      let filterObjs = [];
      for (let j = 0; j < this.filters.length; j++) {
        let obj = { title: "", data: "", id: 0, filters: [] };
        let filters = [];
        for (let i = 0; i < this.filters[j].model.length; i++) {
          let itemFiltered = {};
          itemFiltered = this.filters[j].options.filter(
            (item) => item.value === this.filters[j].model[i]
          );
          filters.push(itemFiltered[0].value);
        }
        obj.title = this.filters[j].title;
        obj.data = this.filters[j].data;
        obj.id = this.filters[j].id;
        obj.filters = filters;
        if (obj.data === "result" && obj.filters.length !== 0) {
          if (obj.filters[0] === 1) {
            this.darsad = 1;
          } else if (obj.filters[0] === 0) {
            this.darsad = 0;
          }
        }
        obj.filters.length !== 0 ? filterObjs.push(obj) : null;
      }
      this.filterObjs = filterObjs;
      this.columnsToSend = [];
      for (let i = 0; i < filterObjs.length; i++) {
        let col = {
          id: 0,
          data: "",
          title: "",
          sortable: true,
          align: "center",
          visible: false
        };
        (col.id = filterObjs[i].id),
          (col.data = filterObjs[i].data),
          (col.title = filterObjs[i].title),
          this.columnsToSend.push(col);
      }
      this.columnsToSend = this.columns.concat(this.columnsToSend);
      calcGridData();
    },
    makeGridData() {
      console.log(this.Answers.length);
      for (let i = 0; i < this.Answers.length; i++) {
        let dataRow = {
          Id: i + 1,
          questionNum: "",
          title: "",
          correct: "",
          selected: "",
          result: "",
          topicId: 0,
          lessonId: 0,
          rightOptionPercent: [],
          wrongOptionPercent: [],
          nonOptionPercent: [],
          gA: "10",
          gB: "20",
          gC: "20",
          total1: "50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2: "50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%",
          filters: [
            {
              title: "نوع نتیجه",
              data: "result",
              id: 22,
              model: 0,
              options: []
            },
            {
              title: "نوع سوالات",
              data: "questionType",
              id: 23,
              model: 0,
              options: []
            },
            {
              title: "درجه تکرار سوال",
              data: "questionRepeatR",
              id: 24,
              model: 0,
              options: []
            },
            {
              title: "منبع سوالات",
              data: "resource",
              id: 25,
              model: 0,
              options: []
            },
            {
              title: "درجه سختی آزمون",
              data: "hardness",
              id: 26,
              model: 0,
              options: []
            },
            {
              title: "درجه کیفیت سوالات",
              data: "quality",
              id: 27,
              model: 0,
              options: []
            }
          ]
        };
        this.makeFilterOptions();
        dataRow.questionNum = this.AnswerSheetCorrectExams[i].NumberOfQuestion;
        let str = this.AssayQuestions[i].Question.TopicAnswer;
        let start = 0;
        if(str == null)
        {
         str="";
        }
        str.includes(">") ? (start = str.lastIndexOf(">") + 1) : (start = 0);
        let end = str.length;
        if(str == "")
        dataRow.title = "";
        else
        dataRow.title = this.AssayQuestions[i].Question.TopicAnswer.substring(start, end);
        dataRow.correct = this.AnswerSheetCorrectExams[i].CorrectAnswer;
        dataRow.selected = this.Answers[i] === 0 ? "نزده" : this.Answers[i];
        this.tedadOrDarsad = this.calcPercentOrTeded();
        (dataRow.rightOptionPercent = this.darsad
          ? this.tedadOrDarsad[i].right.darsad
          : this.tedadOrDarsad[i].right.tedad),
          (dataRow.wrongOptionPercent = this.darsad
            ? this.tedadOrDarsad[i].wrong.darsad
            : this.tedadOrDarsad[i].wrong.tedad),
          (dataRow.nonOptionPercent = this.darsad
            ? this.tedadOrDarsad[i].non.darsad
            : this.tedadOrDarsad[i].non.tedad),
          (dataRow.filters[1].model = this.AssayQuestions[
            i
          ].Question.Lookup_QuestionType.Id),
          (dataRow.filters[2].model = this.AssayQuestions[
            i
          ].Question.Lookup_RepeatnessType.Id),
          (dataRow.filters[3].model = this.AssayQuestions[
            i
          ].Question.Lookup_AuthorType.Id),
          (dataRow.filters[4].model = this.AssayQuestions[
            i
          ].Question.Lookup_QuestionHardnessType.Id),
          (dataRow.filters[5].model = this.AssayQuestions[
            i
          ].Question.Lookup_QuestionRank.Id),
          (dataRow.filters[0].model = 0), // darsad tedad
          dataRow.lessonId = this.AssayQuestions[i].LessonId;
          let quest = this.AssayQuestions[i].Question.Topics.find(element=> element.IsExamSource == true);
          if(quest != null)
          {
          dataRow.title = this.AssayQuestions[i].Question.Topics.find(element=> element.IsExamSource == true).Title;
          dataRow.topicId = this.AssayQuestions[i].Question.Topics.find(element=> element.IsExamSource == true).Id;
          }
          else
          {
            dataRow.title = "بدون مبحث";
            dataRow.topicId = 0;
          }
          this.gridData.push(dataRow);
      }
    },
    calcPercentOrTeded() {
      let free = 0;
      let sum = 0;
      let rArray = [];
      for (let i = 0; i < this.QuestionsIds.length; i++) {
        for (let j = 0; j < this.TotalAnswer.length; j++) {
          if (this.QuestionsIds[i] === this.TotalAnswer[j].QuestionId) {
            let obj = {
              id: i,
              right: { tedad: 0, darsad: 0 },
              wrong: { tedad: 0, darsad: 0 },
              non: { tedad: 0, darsad: 0 }
            };
            obj.right.tedad = this.TotalAnswer[j].TotalRightAnswer;
            obj.wrong.tedad = this.TotalAnswer[j].TotalWrongAnswer;
            obj.non.tedad = this.TotalAnswer[j].TotalNonAnswer;
            sum = obj.right.tedad + obj.wrong.tedad + obj.non.tedad;
            if(sum == 0){
                            obj.right.darsad=0;
                            obj.wrong.darsad=0;
                            obj.non.darsad=0;
            }
            else{
            obj.right.darsad = parseFloat((obj.right.tedad / sum) * 100).toFixed(2) + "%";
            obj.wrong.darsad = parseFloat((obj.wrong.tedad / sum) * 100).toFixed(2) + "%";
            obj.non.darsad = parseFloat((obj.non.tedad / sum) * 100).toFixed(2) + "%";
            }
            rArray.push(obj);
          }
        }
      }
      return rArray;
    },
    calcGridData() {
      this.gridDataCalced = [];
      for (let i = 0; i < this.gridData.length; i++) {
        let firstCon = false;
        let dataRow = {
          Id: this.gridData[i].id,
          questionNum: this.gridData[i].questionNum,
          topicId: this.gridData[i].topicId,
          lessonId: this.gridData[i].lessonId,
          title: this.gridData[i].title,
          correct: this.gridData[i].correct,
          selected: this.gridData[i].selected,
          result: this.gridData[i].result,
          rightOptionPercent: this.gridData[i].rightOptionPercent,
          wrongOptionPercent: this.gridData[i].wrongOptionPercent,
          nonOptionPercent: this.gridData[i].nonOptionPercent,
          gA: this.gridData[i].gA,
          gB: this.gridData[i].gB,
          gC: this.gridData[i].gC,
          total1: this.gridData[i].total1,
          gA2: this.gridData[i].gA2,
          gB2: this.gridData[i].gB2,
          gC2: this.gridData[i].gC2,
          total2: this.gridData[i].total2,
          gA3: this.gridData[i].gA3,
          gA3: this.gridData[i].gA3,
          gC3: this.gridData[i].gC3,
          total: this.gridData[i].total,
          result: 0,
          questionType: 0,
          questionRepeatR: 0,
          resource: 0,
          hardness: 0,
          quality: 0
        };

        if (this.darsad === 0) {
          //tedad
          dataRow.rightOptionPercent = this.tedadOrDarsad[i].right.tedad;
          dataRow.wrongOptionPercent = this.tedadOrDarsad[i].wrong.tedad;
          dataRow.nonOptionPercent = this.tedadOrDarsad[i].non.tedad;
        } else {
          dataRow.rightOptionPercent = this.tedadOrDarsad[i].right.darsad;
          dataRow.wrongOptionPercent = this.tedadOrDarsad[i].wrong.darsad;
          dataRow.nonOptionPercent = this.tedadOrDarsad[i].non.darsad;
        }
        dataRow.result = this.darsad === 1 ? "درصد" : "تعداد";

        dataRow.questionType = this.filtersOptions[1].options[
          this.filtersOptions[1].options.findIndex(
            (el) => el.id === this.gridData[i].filters[1].model
          )
        ].Value;
        let questionTypeId = this.gridData[i].filters[1].model;
        for (let k = 0; k < this.filterObjs.length; k++) {
          if (this.filterObjs[k].data === "questionType") {
            if (!this.filterObjs[k].filters.includes(questionTypeId)) {
              firstCon = true;
              break;
            }
          }
        }
        if (firstCon) continue;

        dataRow.questionRepeatR = this.filtersOptions[2].options[
          this.filtersOptions[2].options.findIndex(
            (el) => el.id === this.gridData[i].filters[2].model
          )
        ].Value;
        let questionRepeatRId = this.gridData[i].filters[2].model;
        for (let k = 0; k < this.filterObjs.length; k++) {
          if (this.filterObjs[k].data === "questionRepeatR") {
            if (!this.filterObjs[k].filters.includes(questionRepeatRId)) {
              firstCon = true;
              break;
            }
          }
        }
        if (firstCon) continue;

        dataRow.resource = this.filtersOptions[3].options[
          this.filtersOptions[3].options.findIndex(
            (el) => el.id === this.gridData[i].filters[3].model
          )
        ].Value;
        let resourceId = this.gridData[i].filters[3].model;
        for (let k = 0; k < this.filterObjs.length; k++) {
          if (this.filterObjs[k].data === "resource") {
            if (!this.filterObjs[k].filters.includes(resourceId)) {
              firstCon = true;
              break;
            }
          }
        }
        if (firstCon) continue;
        let hardn = this.filtersOptions[4].options[
          this.filtersOptions[4].options.findIndex(
            (el) => el.id === this.gridData[i].filters[4].model
          )
        ];
        if(hardn)
        dataRow.hardness = hardn.Value;
        else
        dataRow.hardness = "نامشخص";
        let hardnessId = this.gridData[i].filters[4].model;
        for (let k = 0; k < this.filterObjs.length; k++) {
          if (this.filterObjs[k].data === "hardness") {
            if (!this.filterObjs[k].filters.includes(hardnessId)) {
              firstCon = true;
              break;
            }
          }
        }
        if (firstCon) continue;
        let qualityn = this.filtersOptions[5].options[
          this.filtersOptions[5].options.findIndex(
            (el) => el.id === this.gridData[i].filters[5].model
          )
        ];
        if(qualityn)
        dataRow.quality = qualityn.Value;
        else
        dataRow.quality = "نامشخص";
        let qualityId = this.gridData[i].filters[5].model;
        for (let k = 0; k < this.filterObjs.length; k++) {
          if (this.filterObjs[k].data === "quality") {
            if (!this.filterObjs[k].filters.includes(qualityId)) {
              firstCon = true;
              break;
            }
          }
        }
        if (firstCon) continue;
        this.gridDataCalced.push(dataRow);
        
      }
      this.soalfiltered = this.gridDataCalced;
    }
    
  },
 created() {
  
    

    


  },
  mounted() {
    this.assayAnswerSheetStore = vxm.assayAnswerSheetStore;
  this.answerSheet = vxm.assayAnswerSheetStore.assayAnswerSheet;
    if(this.answerSheet.Id ==0)
    this.answerSheet.Id = 53;
    this.apiCall();
  }
};
</script>
<style scoped>
.main {
  direction: rtl;
}
.report {
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

.filters {
  display: flex;
  align-items: center;
}

.testReport {
  display: flex;
  align-items: center;
  border: 2px solid #1976d2;
  border-radius: 5px;
  color: #1976d2;
}

.dnReport {
  border: 1px solid #000000;
  border-radius: 5px;
  margin-right: 10px;
  height: 80px;
}

.qselect {
  border-radius: 5px;
  padding: 0px !important;
  margin: 3px 0px !important;
}
.addButton {
  width: 50px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
}

.overflow {
  overflow: scroll;
  height: 100%;
}
.filterCol {
  height: 100vh;
}
.overflow::-webkit-scrollbar {
  display: none;
}
.number {
  width: 26px;
  height: 26px;
  border-radius: 13px;
}
.options {
  box-shadow: 3px 0px 5px 0px #888888;
  width: auto;
  border-radius: 15px;
  padding: 5px;
}
.hardness {
  height: 15px;
  border-radius: 5px;
  padding: 0px 5px;
}
.header {
  position: relative;
  background-color: #1976d2;
}
.header-container {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  background-color: #1976d2;
}
.download {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding:5px;
}
.kolDoroos{
  background-color: #1976d2;
  color:white;
  border-radius: 4px;
  cursor: pointer;
  width: auto;
  padding:5px;
}

li{
  background-color: #f2f2f2;
}
li :active{
  background-color: #f6f6f6 !important;
}

@media screen and (max-width: 850px) {
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
.qselect {
  border-radius: 5px;
  padding: 0px !important;
  margin: 3px 0px !important;
}
.dnReport {
  border: 1px solid #000000;
  border-radius: 5px;
  margin-right: 10px;
  height: 80px;
}
.download {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding:5px;
}
</style>

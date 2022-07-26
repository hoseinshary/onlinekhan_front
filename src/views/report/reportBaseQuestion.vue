<template>
  <div>
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
              <div class="col-4 filters">
                <span class="text-end font-14 fw-bold">فیلترها</span>
              </div>
              <div class="col-8 d-flex flex-row">
                
                <div
                  class="bg-gradient position-relative text-center report ms-1"
                >
                  <span class="font-14 fw-bold text-white">گزارش پیشرفت</span>
                </div>
                <div
                  class="bg-gradient position-relative text-center report me-1"
                  @click="$router.push('/reportTest')"
                >
                  <span class="font-14 fw-bold text-white">گزارش آزمون</span>
                </div>
              </div>
              <!-- <div v-if="filterObjs.length>4" class="c-ff0048">حداکثر می توانید ۴ فیلتر انتخاب نمایید.</div> -->
            </div>
            <div class="overflow container-fluid">
              <div class="d-flex flex-row justify-content-round align-items-center mt-1 font-12">
                <q-toggle
                  v-model="withAnswer"
                  val="1"
                  label="همراه با پاسخنامه"
                  left-label
                />
              </div>
              <div class="d-flex flex-row justify-content-round align-items-center mt-1 font-12">
                <q-toggle
                  v-model="titleFilter"
                  val="1"
                  label="فیلتر مبحث دروس"
                  left-label
                />
              </div>
              <div v-for="(item, index) in filters" :key="index">
                <div class="mt-4">
                  {{ item.title }}:
                  <q-select
                    v-model="item.model"
                    class="qselect"
                    borderless
                    :options="item.options"
                    multiple
                    placeholder="پیش فرض"
                  />
                </div>
              </div>
              <div
                class="bg-gradient position-relative text-center report mt-4 p-3"
                @click="makeReport()"
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
            <span class="fw-bold font-16 c-1976d2">
              کارنامه آزمون شماره۳ـدرس ریاضی سال اول دبیرستان:
            </span>
            <div
              class="testReport p-3 flex-row justify-content-between align-items-center"
            >
              <i class="fa fa-report"></i>
              <span>گزارش آزمون ها</span>
            </div>
          </div>
          <section class="bg-white p-3 rounded-1 m-3">
            نتیجه آزمون شما در یک نگاه:
            <div class="d-flex flex-row mt-3">
              <div class="d-inline me-2">
                <div class="d-block">تعداد کل سوالات:۶</div>
                <div class="d-block">درصد کنکوری ۲۷.۸٪</div>
              </div>
              <div class="d-inline c-06a971 me-4">
                <div class="d-block">تعداد کل سوالات:۶</div>
                <div class="d-block">درصد کنکوری ۲۷.۸٪</div>
              </div>
              <div class="d-inline c-ff0048 me-4">
                <div class="d-block">تعداد کل سوالات:۶</div>
                <div class="d-block">درصد کنکوری ۲۷.۸٪</div>
              </div>
              <div class="d-inline c-EE7E26 me-4">
                <div class="d-block">تعداد کل سوالات:۶</div>
                <div class="d-block">درصد کنکوری ۲۷.۸٪</div>
              </div>
            </div>
          </section>
          <section class="bg-white p-3 rounded-1 m-3">
            <div class="d-flex flex-row justify-content-between">
              <span> تصحیح آزمون: </span>
              <div class="dnReport p-3">
                <div
                  class="flex-row justify-content-between align-items-center download"
                  @click="open()"
                >
                  <i class="fa fa-report"></i>
                  <span>دانلود کارنامه و پاسخنامه</span>
                </div>
                <div class="flex-row justify-content-between align-items-center">
                  <i class="fa fa-report"></i>
                  <span>اجرای مجدد آزمون</span>
                </div>
              </div>
            </div>

            <div v-if="columnsToSend.length !== 0">
              <Table
                :filterObjects="filterObjs"
                :columns="columnsToSend"
                :gridData="gridData"
                :defaultColumnsLength="columns.length"
                icon="ok"
              />
            </div>
            <div v-else v-for="(item, index) in gridData" :key="index">
              <ReportSimple :question="item" />
              <hr />
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
        <div class="mt-4">
          دانلود فایل آزمون ریاضی اول دبیرستان
          <div class="c-1976d2">دانلود فایل [PDF]</div>
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
import table from "./reportTable.vue";
import reportSimple from "./reportSimple.vue";
export default {
  components: {
    Table: table,
    ReportSimple: reportSimple
  },
  data() {
    return {
      filterAmount: 0,
      filterObjs: [],
      showModal: false,
      closeModal: true,
      openModal: false,
      titleFilter:true,
      withAnswer:false,
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
          data: "result",
          title: "نتیجه شما",
          sortable: true,
          align: "center"
        },
        {
          id: 7,
          data: "gA",
          title: "A گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 8,
          data: "gB",
          title: "B گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 9,
          data: "gC",
          title: "C گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 10,
          data: "total1",
          title: "کل",
          sortable: true,
          align: "center"
        },
        {
          id: 11,
          data: "gA2",
          title: "۲A گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 12,
          data: "gB2",
          title: "۲B گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 13,
          data: "gC2",
          title: "۲C گروه",
          sortable: true,
          align: "center"
        },
           {
          id: 14,
          data: "total2",
          title: "کل",
          sortable: true,
          align: "center"
        },
        {
          id: 15,
          data: "gA3",
          title: "۳A گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 16,
          data: "gB3",
          title: "۳B گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 17,
          data: "gC3",
          title: "۳C گروه",
          sortable: true,
          align: "center"
        },
        {
          id: 18,
          data: "total3",
          title: "کل",
          sortable: true,
          align: "center"
        }
      ],
      filters: [
        {
          title: "انتخاب عملکرد",
          data:'function',
          id: 19,
          model: [],
          options: [
            {
              label: "همه موارد",
              value: 0
            },
            {
              label: "نمره و درصد کل",
              value: 1
            },
            {
              label: "نمره و درصد سوالات صحیح",
              value: 2
            },
            {
              label: "نمره و درصد سوالات نزده",
              value: 3
            },
            {
              label: "نمره و درصد سوالات غلط",
              value: 4
            }
          ]
        },
        {
          title: "نوع نتیجه",
          data:'result',
          id: 20,
          model: [],
          options: [
            {
              label: "درصد",
              value: 0
            },
            {
              label: "تعداد",
              value: 1
            }
          ]
        },
        {
          title: "نوع سوالات",
          data:'questionType',
          id: 21,
          model: [],
          options: [
            {
              label: "همه موارد",
              value: 0
            },
            {
              label: "سوالات حفظی",
              value: 1
            },
            {
              label: "سوالات مساله ای",
              value: 2
            }
          ]
        },
        {
          title: "درجه تکرار سوال",
          data:'questionRepeatR',
          id: 22,
          model: [],
          options: [
            {
              label: "همه موارد",
              value: 0
            },
            {
              label: "نمره و درصد کل",
              value: 1
            },
            {
              label: "نمره و درصد سوالات صحیح",
              value: 2
            },
            {
              label: "نمره و درصد سوالات نزده",
              value: 3
            },
            {
              label: "نمره و درصد سوالات غلط",
              value: 4
            }
          ]
        },
        {
          title: "نوع تکرار سوالات",
          data:'questionRepeatT',
          id: 23,
          model: [],
          options: [
            {
              label: "همه موارد",
              value: 0
            },
            {
              label: "جدید",
              value: 1
            },
            {
              label: "تکراری",
              value: 2
            },
            {
              label: "تکلیف",
              value: 3
            }
          ]
        },
        {
          title: "منبع سوالات",
          data:'resource',
          id: 24,
          model: [],
          options: [
            {
              label: "همه موارد",
              value: 0
            },
            {
              label: "کنکور",
              value: 1
            },
            {
              label: "تالیفی",
              value: 2
            }
          ]
        },
        {
          title: "درجه سختی آزمون",
          data:'hardness',
          id: 25,
          model: [],
          options: [
            {
              label: "ساده",
              value: 0
            },
            {
              label: "متوسط",
              value: 1
            },
            {
              label: "سخت",
              value: 2
            }
          ]
        },
        {
          title: "درجه کیفیت سوالات",
          data:'quality',
          id: 26,
          model: [],
          options: [
            {
              label: "ضعیف",
              value: 0
            },
            {
              label: "متوسط",
              value: 1
            },
            {
              label: "عالی",
              value: 2
            }
          ]
        },
        {
          title: "درجه تکرار سوالات در کنکور",
          data:'kokur',
          id: 27,
          model: [],
          options: [
            {
              label: "کم",
              value: 0
            },
            {
              label: "متوسط",
              value: 1
            },
            {
              label: "زیاد",
              value: 2
            }
          ]
        }
      ],

      gridData: [
        {
          Id: 1,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%",
          function:'عملکرد',
          result:'نتیجه',
          questionType:'سوالات',
          questionRepeatR:'تکرار درجه',
          questionRepeatT:'تکرار نوع',
          resource:'منبع',
          hardness:'سختی',
          quality:'کیفیت',
          kokur:'کنکور'
        },
        {
          Id: 2,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 3,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 4,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 5,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 6,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 7,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 8,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 9,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 10,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 11,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 12,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 13,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 14,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 15,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        },
        {
          Id: 16,
          questionNum: "1000",
          title: "title",
          correct: "3",
          selected: "1",
          result: "false",
          gA: "10",
          gB: "20",
          gC: "20",
          total1:"50",
          gA2: 159,
          gB2: 6.0,
          gC2: 24,
          total2:"50",
          gA3: 4.0,
          gB3: 87,
          gC3: "14%",
          total: "1%"
        }
      ],
      columnsToSend: []
    };
  },

  methods: {
    log(a) {
      console.log(a, "***********model");
    },
    makeReport() {
      // if(this.filterObjs.length>4){

      // }else{
      let filterObjs = [];
      for (let j = 0; j < this.filters.length; j++) {
        let obj = { title: "", data:"" ,id: 0, filters: [] };
        let filters = [];
        for (let i = 0; i < this.filters[j].model.length; i++) {
          let itemFiltered = {};
          itemFiltered = this.filters[j].options.filter(
            (item) => item.value === this.filters[j].model[i]
          );
          filters.push(itemFiltered);
        }
        obj.title = this.filters[j].title;
        obj.data = this.filters[j].data;
        obj.id = this.filters[j].id;
        obj.filters = filters;
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
    },
    close() {
      this.closeModal = true;
      this.showModal = false;
    },
    open() {
      this.showModal = true;
      this.openModal = true;
      this.closeModal = false;
    }
  }
  // }
};
</script>
<style scoped>
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
  border: 2px solid #1976d2;
  border-radius: 5px;
  color: #1976d2;
}

.dnReport {
  border: 1px solid #000000;
  border-radius: 5px;
}

.qselect {
  background-color: white;
  border-radius: 5px;
  padding: 0px !important;
  margin: 3px 0px !important;
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
  cursor: pointer;
}
</style>

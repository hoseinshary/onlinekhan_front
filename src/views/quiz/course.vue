<template>
<div>
    <div class="mainLayout bg-f2f2f2">
                <!--fateme tekrar-->
                <div class="card">
                  <div class="card-header d-flex flex-row justify-content-between height-100">
                    <div class="d-flex flex-row justify-content-between align-items-start w-100">
                      <div class="m-2">
                        <i class="fa fa-star d-inline" aria-hidden="true"></i>
                        <div class="fw-bold d-inline">
                          مباحث مورد نظر خود را از
                          دروس
                          <span class="color-green">ریاضی 1</span>
                          و
                          <span class="color-green">فیزیک1</span>
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
                       <section class="row col-md-12">
      <div class="col-md-12 shadow-1 q-ma-sm q-pa-sm">
         جابجایی ترتیب دروس 
         <q-btn size="md" round dense color="secondary" icon="arrow_forward_ios" @click="upList(lesson)" class="q-mr-xs" />
         <q-btn size="md" round dense color="tertiary" icon="arrow_back_ios" @click="downList(lesson)" class="q-mr-sm" />
         <br/>
         <br/>
      <!-- <q-checkbox label="سوال تصادفی" v-model="assayCreate.RandomQuestion" />
      <br /> -->
      <q-checkbox
        label="نمایش جزئیات تعداد سوالات در هر مبحث"
        v-model="assayStore.IsDetailTopic"
        @input="topicWithDetail()"
      />
      <!-- <div class="row">
      <q-checkbox v-if="assayCreate.RandomQuestion == true" v-model="checked" label="Checkbox Label" />
    </div> -->
    </div>
      
    <div class="col-12 shadow-1 q-ma-sm q-pa-sm">
      <q-tree
        :nodes="topicStore.treeDataByLessonId(lesson.Id)"
        class="q-pt-lg"
        color="primary"
        node-key="Id"
        tick-strategy="leaf"
        :ticked.sync="lesson.TopicIds"
      >
        <div slot="header-custom" slot-scope="prop">
          <!-- <div class="col"> -->
          
            <template v-if="prop.node.ParentTopicId == null"
              >({{ getLesson(lesson.Id).CountOfQuestions }}) سوال از
              درس ({{ getLesson(lesson.Id).Name }})</template
            >
            <template v-else>{{ prop.node.label }}</template>
          <!-- </div> -->
          <!-- <div class="col"> -->
            <template>
              
              <div
                v-if="assayStore.IsDetailTopic  "
                class="col-md-12 row"
                style="color: #ada8a7 ; font-size: 13px"
              >
                <!-- <section class="row col-md-12"> -->
                &nbsp;
                &nbsp;
                &nbsp;
                
                <div class="">
                  <label> تعداد سوال جدید:</label>
                    {{getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfNewQuestions}}
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                
                <div class="">
                  <label>تعداد سوال تکلیف:</label>
                    {{getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfHomeworkQuestions}} 

                </div>
                &nbsp;
                &nbsp;
                &nbsp;
               
                <div class="">
                  <label>تعداد سوال آزمون قبلی:</label>
                  {{getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfAssayQuestions}}
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                
                <div class="">
                  <label> تعداد کل سوالات : </label>
                  {{getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfNewQuestions+getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfHomeworkQuestions+getTopicDetailForTree(lesson.Id , prop.node.Id).NumberOfAssayQuestions }}
                </div>
                <!-- </section> -->
              </div>
            </template>
          <!-- </div> -->
        </div>
      </q-tree>

    </div>
    
  </section>
                      <section class="d-flex flex-row mt-9 submit-group align-items-center justify-content-between"
                        id="submit-group">
                        <button class="btn btn-secondary text-white px-3 py-2 m-0 disabled font-14"
                          id="student-group-select" disabled>
                          <i class="fa fa-chevron-right m-0 p-0" aria-hidden="true"></i>
                          <i class="fa fa-chevron-right ms-1 p-0" aria-hidden="true"></i>
                          انتخاب درس آزمون

                        </button>
                        <button class="btn btn-success text-white px-3 py-2 m-0 font-14"
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
                      <div class="modal-header border-0 bg-success position-relative text-white font-14">
                        تایید نهایی
                        <i class=" fa-light fa-times text-white fs-5 bg-success close-btn position-absolute"
                          data-bs-dismiss="modal"></i>
                      </div>
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
                <button class="btn btn-success mt-2 font-12" id="finalConfirmButton" aria-hidden="true"
                  data-bs-toggle="modal" data-bs-target="#finalConfirm">تایید نهایی</button>
              </div>
    </div>
</template>



<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { vxm } from "src/store";
import util from "src/utilities";
import { AssayTopic, AssayNumberOfQuestionReportForTopic, AssayLesson } from "src/models/IAssay";

@Component({
  components: {}
})
export default class TopicTabVue extends Vue {
  //#region ### data ###
  assayStore = vxm.assayStore;
  
  topicStore = vxm.topicStore;
  studentStore = vxm.studentStore;
  assayCreate = vxm.assayStore.assayCreate;


  lessonsCurrent : Array<any> = []; 
  allTopicLeafTicked : Array<number> = [];
  topicLeafTicked: Array<number> = [];
  topicTreeData = [];
  numberOfQuestionReport: AssayNumberOfQuestionReportForTopic = new AssayNumberOfQuestionReportForTopic();

  selectedTab="";
  //#endregion

  //#region ### computed ###


  get getLesson() {
    return lessonId => {
      return this.assayStore.checkedLessons.find(x => x.Id == lessonId);
    };
  }
  get getTopic() {
    return (lessonId, topicId): AssayTopic | null => {
      var lesson = this.assayStore.checkedLessons.find(x => x.Id == lessonId);
      if (!lesson) return null;
      var assayTopic = lesson.Topics.find(x => x.Id == topicId);
      if (assayTopic) return assayTopic;
      else {
        var topic = this.topicStore.detail(topicId);
        if (topic) {
          assayTopic = new AssayTopic(
            topic.Id,
            topic.Title,
            topic.LessonId,
            topic.ParentTopicId
          );
          lesson.Topics.push(assayTopic);
          return assayTopic;
        }
        return null;
      }
    };
  }

bindLessonsCurrent()
{
this.lessonsCurrent = this.assayCreate.Lessons.map((x) => ({
    Id: x.Id,
    Name: x.Name,
    TopicIds: [],
    Topics : []
    
  }))

}

  upList(lesson : AssayLesson )
  {
    var currentLesson = this.assayCreate.Lessons.findIndex(x => x.Id === lesson.Id);
    if(currentLesson)
    {
      this.assayCreate.Lessons.splice(currentLesson-1,0,this.assayCreate.Lessons.splice(currentLesson,1)[0]);
    }

    var currentLesson2 = this.assayStore.checkedLessons.findIndex(x => x.Id === lesson.Id)
    if(currentLesson2)
    {
      this.assayStore.checkedLessons.splice(currentLesson2-1,0,this.assayStore.checkedLessons.splice(currentLesson2,1)[0]);
    }
  }

downList(lesson : AssayLesson )
  {

   var currentLesson = this.assayCreate.Lessons.findIndex(x => x.Id === lesson.Id);
    if(currentLesson >= 0)
    {
      this.assayCreate.Lessons.splice(currentLesson+1,0,this.assayCreate.Lessons.splice(currentLesson,1)[0]);
    }

       var currentLesson2 = this.assayStore.checkedLessons.findIndex(x => x.Id === lesson.Id)
    if(currentLesson2 >= 0)
    {
      this.assayStore.checkedLessons.splice(currentLesson2+1,0,this.assayStore.checkedLessons.splice(currentLesson2,1)[0]);
    }
    
  }
  //#endregion

  //#region ### watch ###
  @Watch("lessonIds")
  lessonIdsChanged(newVal) {
    console.log("lesson ids change");
    this.topicStore.fillList();  
  }

  @Watch("topicLeafTicked")
  topicLeafTickedChanged(newVal, oldVal) {
    var getNodeByKey = this.$refs["tree"]["getNodeByKey"];
    debugger;
    newVal.forEach(topicId => {
      var node = getNodeByKey(topicId);
      var topic = this.getTopic(node.lessonId, node.Id);
      if (topic && !topic.Checked) {
        topic.Checked = true;
      }
    });

    oldVal.forEach(topicId => {
      if (this.topicLeafTicked.indexOf(topicId) > -1) return;
      var node = getNodeByKey(topicId);
      var topic = this.getTopic(node.lessonId, node.Id);
      if (topic && topic.Checked) {
        topic.Checked = false;
      }
    });
  }
  //#endregion

  //#region ### methods ###
  goToTopicTab() {

    this.assayStore.submitPreCreate().then(() => {
      this.$emit("changeTab", "questionTab");
    })
    this.assayStore.OPEN_MODAL_2TOPIC(false);
  }

  expandTree(treeRef) {
    this.$refs[treeRef][0]["expandAll"]();
  }

  collapseTree(treeRef) {
    this.$refs[treeRef][0]["collapseAll"]();
  }

  topicWithDetail() {
    if (this.assayStore.IsDetailTopic) {
      this.studentStore.numberOfQuestionReportForTopic({ lessonIds: this.assayStore.lessonIds, studentId: 9 }).then(d => {
        this.numberOfQuestionReport = d;
      });
    }
  }
  //#endregion

  //#region ### hooks ###
  created() {
    
        this.topicStore.fillList();

  }
  //#endregion
}
</script>
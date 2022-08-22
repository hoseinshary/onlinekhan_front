<template>
<div>
       <q-tabs v-model="selectedTab" class="bg-white corner-around col-md-12 " inverted animated color="indigo-8"  >

                  
        <q-tab default v-for="lesson in this.assayCreate.Lessons" :key="lesson.Id" :name="lesson.Name" slot="title" :label="lesson.Name"  />
                  
        <q-tab-pane v-for="lesson in this.assayCreate.Lessons" :key="lesson.Id" :name="lesson.Name">
          <section class="row col-md-12">
      <div class="col-md-12 shadow-1 q-ma-sm q-pa-sm">
         جابجایی ترتیب دروس 
         <q-btn size="md" round dense color="secondary" icon="arrow_forward_ios" @click="upList(lesson)" class="q-mr-xs" />
         <q-btn size="md" round dense color="tertiary" icon="arrow_back_ios" @click="downList(lesson)" class="q-mr-sm" />
         <br/>
         <br/>
      <!-- <q-checkbox label="سوال تصادفی" v-model="assayCreate.RandomQuestion" />
      <br /> -->
     
      <!-- <div class="row">
      <q-checkbox v-if="assayCreate.RandomQuestion == true" v-model="checked" label="Checkbox Label" />
    </div> -->
    </div>
      
    <div class="col-12 shadow-1 q-ma-sm q-pa-sm">
      <q-tree
        id="treeget"
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
        </q-tab-pane>
       </q-tabs>

     
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
lessonStore = vxm.lessonStore;

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
  checkList()
  {
    console.log("Here");
    console.log(this.topicStore.treeDataByLessonId(54));
    this.assayCreate.Lessons.push(new AssayLesson(54, 'ریاضی و آمار1'));
    
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
  test()
  {
    console.log("RaminTest");
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
      
        


  }
  //#endregion
}
</script>

<style>
.q-tree-node .q-tree-node-child{
  padding-left: 0px !important; 
  padding-right: 32px !important;
  direction: rtl !important;
}
.q-tree-node .q-tree-node-child ::after{
  content: none !important;
}
.q-tree-node .q-tree-node-child ::before{
  content: none !important;
}
.q-tree-node .q-tree-node-parent ::after{
  content: none !important;
}
.q-tree-node .q-tree-node-parent ::before{
  content: none !important;
}
.q-tree-node .q-tree-children ::after{
  content: none !important;
}
.q-tree-node .q-tree-children ::before{
  content: none !important;
}
.q-tab .row{
  width: 30% !important;
}
.q-tree .row{
  flex-wrap: nowrap !important;
  display: flex !important;
  flex-direction: row !important;
}
.q-option{
  width: 50px !important;
}
.q-option-inner{
  width:20px !important
}
.row > .q-tab
{
  width: 20% !important;
  background-color: #1976d2;
  color: white !important;
}
.q-btn-dense.q-btn-round {
  background-color: #06a971 !important;
}
</style>
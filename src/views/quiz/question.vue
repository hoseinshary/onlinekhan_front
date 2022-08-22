<template>
  <div class="row gutter-sm">
    <link
      href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
      rel="stylesheet"
    />
    <div class="row">
      <div class="col-lg-3 filterCol container-fluid h-100">

        <div class="c-card d-flex flex-column overflow-hidden h-100">
          <div class="p-3">
            <div class="qDesigner p-2 mb-2">
              <div class="text-center">تعداد سوالات دروس انتخاب شده</div>
              <div v-for="lesson in this.assayCreate.Lessons" :key="lesson.Id" class="d-flex flex-row justify-content-between mx-4 my-3 c-EE7E26">
                <div>{{lesson.Name}}</div>
                <div>{{lesson.Questions.length}}</div>
              </div>
            </div>
            <span class="fw-bold font-16 c-1976d2">فیلتر سوال ها</span>
            <div class="overflow container-fluid">
                <div  class="mt-4">
                   سختی سوال:
                    <q-select v-model="filterHardness" class="qselect bg-white" borderless :options="hardnessoptions" placeholder="پیش فرض" 
                       clearable
                       multiple
                       emit-value
                       map-options
                      @input="(v)=>checkVals(v, item.id)"
                    />
                </div>
                <div  class="mt-4">
                   تکرار سوال:
                    <q-select v-model="filterRepeatness" class="qselect bg-white" borderless :options="repeatnessoptions" placeholder="پیش فرض" 
                       clearable
                       multiple
                       emit-value
                       map-options
                      @input="(v)=>checkVals(v, item.id)"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    <div class="col-lg-9">
            <div  class="card">
              <div  class="card-header d-flex flex-row justify-content-between bg-white">
                <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                  <li v-for="(lesson, index) in lessonsCurrent" :key="lesson.Id" class="nav-item tab bg-f2f2f2">
                    <a
                    :class="index === 0 ? 'nav-link active font-14': 'nav-link font-14'"
                      :aria-current="index === 0 ? true: false"
                      data-bs-toggle="tab"
                      :href="'#tab'+lesson.Id"
                      >{{lesson.Name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div v-for="(lesson, index) in lessonsCurrent" :key="lesson.Id" :id="'tab'+lesson.Id" :class="index === 0 ? 'card-body tab-content tab-pane fade bg-f6f6f6 in active show': 'card-body tab-content tab-pane fade bg-f6f6f6'">
               
                   <div  v-for="question in lesson.Questions"
                    :key="question.Id" class="bg-d9d9d9 questionContainer m-auto py-3 px-4 my-1">
                    <div class="row">
                      <div class="col-lg-9 col-md-8">
                        <div class="row card">
                          <img  :src="question.QuestionPicturePath" width="100%" height="auto"/>
                        </div>
                        <hr/>
                        <div class="row mt-3">
                          <!-- <div class="d-flex flex-row justify-content-between mt-3"> -->
                            <div class="col-lg-4 col-md-4 col-sm-4 d-flex justufy-start mb-3">
                            <div v-if="showGreen(lesson.Id, question.Id)" @click="AddQuestion(lesson.Id, question)" class="d-flex flex-row justify-content-center align-items-center c-ffffff addBtn" style="background-color: #17d292" >
                              <i class="fa fa-add"></i>
                              <span>افزودن به آزمون</span>
                            </div>
                            <div v-else @click="DeleteQuestion(lesson.Id, question)"  class="d-flex flex-row justify-content-center align-items-center c-ffffff addBtn"  style="background-color: #d21717">
                              <i class="fa fa-add"></i>
                              <span>حذف از آزمون</span>
                            </div>
                          </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 d-flex justufy-start mb-3">
                            <div class="d-flex flex-row justify-content-center align-items-center">
                              <i class="fa fa-heart me-2"></i>
                              <span class="ms-2">۱۸۰</span>
                              <i class="fa fa-timer me-2"></i>
                              <span>:{{question.ResponseSecond}} ثانبه</span>
                            </div>
                        </div>
                      </div>
                    </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 text-center mx-auto qDesigner">
                        <div class="my-2"> <router-link
                        :to="`/question/${question.Id}/${lesson.Id}`"
                      >
                        سوال ({{ question.Id }})</router-link
                      ></div>
                        <div class="mb-2"><img :src="$q.localStorage.get.item('ProfilePic')" width="50%" height="auto"/></div>
                        <div class="mb-2"> {{ question.Writer.Name }}</div>
                     
                        <div>
                          <div class="d-flex flex-row justify-content-between mb-2">
                            سختی
                            <div class="w-75">
                            <i  class="fa fa-square" :style="question.Lookup_QuestionHardnessType.State>0?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i  class="fa fa-square" :style="question.Lookup_QuestionHardnessType.State>1?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i class="fa fa-square" :style="question.Lookup_QuestionHardnessType.State>2?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i  class="fa fa-square" :style="question.Lookup_QuestionHardnessType.State>3?'color: #17d292' :'color: #9d9d9d'"></i>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="d-flex flex-row justify-content-between mb-2">
                            تکرار
                            <div class="w-75">
                            <i  class="fa fa-square" :style="question.Lookup_RepeatnessType.State>0?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i  class="fa fa-square" :style="question.Lookup_RepeatnessType.State>1?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i class="fa fa-square" :style="question.Lookup_RepeatnessType.State>2?'color: #17d292' :'color: #9d9d9d'"></i>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="d-flex flex-row justify-content-between mb-2">
                           امتیاز
                            <div class="w-75">
                            <i  class="fa fa-star" :style="question.Lookup_QuestionRank.State>0?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i  class="fa fa-star" :style="question.Lookup_QuestionRank.State>1?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i class="fa fa-star" :style="question.Lookup_QuestionRank.State>2?'color: #17d292' :'color: #9d9d9d'"></i>
                            <i  class="fa fa-star" :style="question.Lookup_QuestionRank.State>3?'color: #17d292' :'color: #9d9d9d'"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                <div>
              </div>
                  </div>
                 
              </div>
              
            </div>
          </div>
        </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { vxm } from "src/store";
import util from "src/utilities";
import { EducationTreeState } from "../../utilities/enumeration";
import AssayCreate, { AssayLesson } from "src/models/IAssay";
import ILesson from "src/models/ILesson";
import { assayStore } from "src/store/assayStore";
import { lookupStore } from "src/store/lookupStore";
import IMessageResult from "src/models/IMessageResult";

import { debug } from "util";

@Component({})
export default class LessonTabVue extends Vue {
  //#region ### data ###
  assayStore = vxm.assayStore;
  assayCreate = vxm.assayStore.assayCreate;
  lookupStore = vxm.lookupStore;


  //lessonsCurrent: Array<AssayLesson> = [];
  hardnessoptions = [
            {
              label: "بسیار سخت",
              value: 14
            },
            {
              label: "سخت",
              value: 13
            },
            {
              label: "متوسط",
              value: 12
            },
            {
              label: "آسان",
              value: 11
            }
          ];
      repeatnessoptions = [
            {
              label: "کم",
              value: "low"
            },
            {
              label: "متوسط",
              value: "mid"
            },
            {
              label: "زیاد",
              value: "high"
            }
          ];
  filterHardness: Array<number> = []; //['veryhard' ,'hard','mid' , 'easy'];
  filterRepeatness: Array<number> = []; //'high' ,'mid','low' ];
  filterAreaType: Array<number> = [];

  filterObject: any = [];



  //#endregion

  //#region ### computed ###
  get lessonsCurrent() {

    return this.assayStore.checkedLessons.map((x) => ({
      Id: x.Id,
      Name: x.Name,
      Questions: x.Questions.filter(x => !this.filterHardness.length || this.filterHardness.includes(x.LookupId_QuestionHardnessType))
    }))
  }

  filterHadrnessAction() {



    this.assayStore.checkedLessons.forEach((element, index) => {


      // this.lessonsCurrent[index].Questions = element.Questions.filter(x => this.filterHardness.includes(x.LookupId_QuestionHardnessType));
      console.log(this.filterHardness);
      console.log(this.filterHardness.includes(11));



    });
  }
  //#endregion
  get showGreen()
  {
    return (lessonId :number , questionId: number ): boolean =>{
           var x = this.assayCreate.Lessons.find(x => x.Id === lessonId) 
          if(x)
          {
            var y = x.Questions.find(z => z.Id === questionId)
            if(y)
              return false;
            
          }
          return true;
    }
    
  }
  changeDisplay(lessonId:number)
  {

     
     
  }
  AddQuestion(lessonId :number , question )
  {
    var x = this.assayCreate.Lessons.find(x => x.Id === lessonId)
    if(x)
      if(!x.Questions.find( y => y.Id === question.Id))
      {
        x.Questions.push(question);

         var data : IMessageResult = {
        MessageType : 1 ,
        Message : "سوال  "+ question.Id + "  اضافه شد "

      }
      this.assayStore.notify( {vm:this,data:data});
      }

  }

    DeleteQuestion(lessonId :number , question )
  {
    var x = this.assayCreate.Lessons.find(x => x.Id === lessonId)
    if(x)
      if(x.Questions.find( y => y.Id === question.Id))
      {
        x.Questions.splice(x.Questions.findIndex( y => y.Id === question.Id),1);

         var data : IMessageResult = {
        MessageType : 2 ,
        Message : "سوال  "+ question.Id + "  حذف شد "

      }
      this.assayStore.notify( {vm:this,data:data});
      }

  }
  //#region ### methods ###
  goToTopicTab() {
    this.$emit("changeTab", "topicTab");
  }
  //#endregion

  //#region ### hooks ###
  created() {

    //  this.lessonsCurrent = util.cloneObject( this.assayStore.checkedLessons);
  }
  //#endregion
}
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
.borderButtom{
  border-bottom:1px solid gray ;
}
li{
  background-color: #f2f2f2;
}
li :active{
  background-color: #f6f6f6 !important;
}
.runHide{
    /* display: block; */
    position: relative;
}
.questionContainer{
    width: 100%;
    border-radius: 10px;
}
.question{
    width:80%;
    height:auto;
    border-radius: 5px;
}
.QNum{
    width: 25px;
    height: 25px;
    border-radius: 13px;
    text-align: center;
}
.options{
    /* display: none !important; */
    width:87%;
    margin-right: 7%;
}
.leftOptions{
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px 10px 5px rgba(217, 217, 217, 0.8);
}
.leftEraser{
    width: 35px;
    height: 35px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 5px rgba(217, 217, 217, 0.8);
}
.testBtn{
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left:30%;
    right:30%;
    text-align: center;
}
.testBtnLeft{
    border-radius: 10px;
    text-align: center;
    /* display: block !important; */
}
.Qstatus{
    font-size: 18px;
}
.addBtn{
    border-radius: 10px;
    cursor: pointer;
    width:auto;
    height:auto;
    padding:5px;
}
.btnGrid{
    width:33%
}
.paginate{
  width:20px;
  height: 20px;
  border-radius: 10px;
  background-color:#1976d2;
  color:white;
  cursor: pointer;
}
.arrow{
  cursor: pointer;
}
.qDesigner{
  border: 1px solid gray;
  margin-right: 5px;
  border-radius: 5px;
}

.tab-content:has(.active)
{
  display: block;
}
.tab-content:not(.active)
{
  display: none;
}
@media only screen and (max-width: 600px) {
    .Qstatus{
        font-size: 12px;
    }
  } 
@media screen and (max-width: 850px) {
}

</style>

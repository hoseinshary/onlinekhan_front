<template>
  <div class="main">
    <link
      href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
      rel="stylesheet"
    />
   <div class="row pt-5">
            <div class="col-12 pb-2">
                <h2 class="h3 g-dashboard font-16">آزمون {{assay.Title}}</h2>
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
        <br/>
        <div class="row">
            <div class="col-lg-12 .Qstatus">
              <div class="c-card">
                 <div class="timer w-50 mx-auto c-3d3d3d p-3">
                  <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="fa fa-timer c-969696"></i>
                    <span class="c-969696">زمان باقی مانده</span>
                    <div id="demo3">{{ timeleft }}</div>
                  </div>
                  <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="fa fa-clock c-969696"></i>
                    <span class="c-969696">زمان سپری شده</span>
                    <div id="demo4"> {{ timestamp }}</div>
                  </div>
                </div> 
                <div v-for="(question,index) in assay.QuestionsPath"
                      :key="`fruit-${index}`" class="c-card overflow-hidden p-3">
                  <div class="bg-d9d9d9 questionContainer m-auto py-3 px-4">
                    <div class="d-flex flex-row justify-content-between align-items-start">
                      <div class="QNum mt-2 bg-1976d2" style="color:white">{{index+1}}</div>
                      <div class="bg-white question p-1 m-auto">
                        <img :src="question" width="100%" height="auto"/>
                      </div>
                      <div class="Qstatus mt-2 flex-end">
                        <div class="d-flex flex-row dir">
                          <input type="checkbox" name="next" v-model="answerSheet.AfterList[index]" class="mx-1 my-1 d-block"/>
                          <span class="c-17d292 noWrap d-block" >بعدا میزنم</span>
                        </div>
                        <div class="d-flex flex-row dir">
                          <input type="checkbox" name="maby" v-model="answerSheet.MaybeList[index]" class="mx-1 my-1 d-block"/>
                          <span class="c-ff6c00 noWrap">شاید بزنم</span>
                        </div>
                        <div class="d-flex flex-row dir">
                          <input type="checkbox" name="cant" v-model="answerSheet.CantList[index]" class="mx-1 my-1 d-block"/>
                          <span class="c-ff0048 noWrap">نمیتوانم</span>
                        </div>
                      </div>
                      </div>
                      <div class="options d-flex flex-row align-items-center justify-content-between">
                        <div class="innerOptions d-flex flex-row justify-content-between mt-2 w-75">
                          <div class="d-flex align-items-center">
                            <span>1</span>
                  <q-radio v-model="answerSheet.Answers[index]" val="1"  class="mx-2 my-1"/>
                        </div>
                          <div class="d-flex align-items-center">
                          <span>2</span>
                  <q-radio v-model="answerSheet.Answers[index]" val="2" class="mx-2 my-1"/>
                        </div>
                          <div class="d-flex align-items-center">
                          <span>3</span>
                  <q-radio v-model="answerSheet.Answers[index]" val="3" class="mx-2 my-1"/>
                        </div>
                          <div class="d-flex align-items-center">
                          <span>4</span>
                  <q-radio v-model="answerSheet.Answers[index]" val="4" class="mx-2 my-1"/>
                        </div>
                        </div>
                        <div class="eraser mt-2">
                          <i @click="eraseAnswer(index)" class="fa fa-eraser fa-2x  c-red"></i>
                        </div>
                      </div>
                    </div>
                </div>

                <div @click="submitAnswerSheet" class="testBtnLeft bg-17d292 c-ffffff p-2 mx-auto w-25 mx-auto mt-3">ثبت آزمون</div>
            </div>
            </div>
        </div>
        <modal-start ></modal-start>
        <modal-stop ></modal-stop>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import util from "src/utilities";
import { assayStore } from "src/store/assayStore";
import { scroll } from 'quasar'
import { off } from "process";
import * as moment from 'moment';
import { start } from "repl";
const { getScrollTarget, setScrollPosition } = scroll


@Component({
  components: {
   //ModalResualt: () => import("./resualtAssay.vue")
      ModalStart: () => import("./runAssay_Start.vue"),
      ModalStop: () => import("./runAssay_Stop.vue")
      
  }
})
export default class AssayAnswerSheetVue extends Vue {
  //#region ### data ###
  assayStore = vxm.assayStore;
  assay = vxm.assayStore.assayCreate;
  assayAnswerSheetStore = vxm.assayAnswerSheetStore;
  answerSheet = vxm.assayAnswerSheetStore.assayAnswerSheet;
   
  startTime : Date; 
  timestamp = "";
  timeleft = "";

  
  //tempChoice: Array< string> = ["0","1","2","3" ,"4"];
  //#endregion

  //#region ### computed ###


  //#endregion

  //#region ### methods ###
  getNow() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      
      
      var countDownDate = new Date(this.startTime.getTime() + this.assay.Time * 60000);


      // Find the distance between now and the count down date
      var distance = today.getTime() - this.startTime.getTime();


      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // var diffTimeHour = today.getHours() - this.startTime.getHours();
      // var diffTimeMinutes = today.getMinutes() - this.startTime.getMinutes();
      // var diffTimeSecond = today.getSeconds() - this.startTime.getSeconds();

      var distance2 = countDownDate.getTime() - today.getTime();

      var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
      var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

      
      this.timestamp = seconds + " : " + minutes + " : " + hours;

      this.timeleft = seconds2 + " : " + minutes2 + " : " + hours2;

  }

  scrollToElement (el) {
   
    var element  = document.getElementById(el);
    if(element != null)
    {
      let target = getScrollTarget(element)
      let offset = element.offsetTop
      let duration = 1000
      setScrollPosition(target, offset, duration)
    }
  }

  eraseAnswer(index)
  {
     
    this.answerSheet.Answers[index] = "0";
    this.$forceUpdate() ;
  }
  submitAnswerSheet()
  {
    
    this.assayAnswerSheetStore.submitCreate();
  }

  addChoice(val , index)
  {

    this.answerSheet.Answers[index] = val;
  }
  startTimer()
  {
          const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.startTime = today ;
      
      
     setInterval(this.getNow, 1000);
  }
  //#endregion

  //#region ### hooks ###
  created() {
    for (let i = 0; i < this.assay.QuestionsPath.length; i++) {
      
     this.answerSheet.Answers[i] = "0";
     this.answerSheet.MaybeList[i] = false;
     this.answerSheet.AfterList[i] = false;
     this.answerSheet.CantList[i] = false;
    } 
    this.assayAnswerSheetStore.SET_CREATE_VUE(this);
    this.answerSheet.AssayId = this.assay.Id;
    this.answerSheet.AssayVarient = this.assay.NumberOfVarient;
 
      this.$root.$on('component1', () => {
            // your code goes here
            this.startTimer()
        });


    this.assayAnswerSheetStore.OPEN_MODAL_RUNASSAY_START(true);
    
    // if(this.assay)
    

    
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
.timer{
    /* display: none !important; */
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
    cursor: pointer;
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
@media only screen and (max-width: 600px) {
    .Qstatus{
        font-size: 12px;
    }
  } 
@media screen and (max-width: 850px) {
}
</style>

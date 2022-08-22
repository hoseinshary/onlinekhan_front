<template>
<div>
    <section class="testSimpleReport">
              <div class="question font-12">
                <div class="d-flex flex-row m-3">
                  <div
                    class="number bg-danger text-white d-flex flex-row justify-content-center align-items-center ms-3"
                  >
                    {{question.questionNum}}
                  </div>
                  <div class="options d-flex flex-row justify-content-between align-items-center">
                    <div v-for="item in 4" :key="item">
                      <span>{{item}}</span>
                      <i v-if="question.correct == item && question.selected != item" class="fa fa-check-square me-2 ms-3 c-1976d2"></i>
                      <i v-else-if="question.selected == item && question.correct == item" class="fa fa-check-square me-2 ms-3 c-06a971"></i>
                      <i v-else-if="question.selected == item" class="fa fa-window-close me-2 ms-3 c-ff0048"></i>
                      <i v-else class="fa fa-genderless fa-lg me-2 ms-3"></i>
                    </div>
                  </div>
                  <div class="options me-2">
                    <i class="fa fa-check-circle"></i>
                  </div>
                   <div class="qOptions me-4" @click="open(question.questionNum)">
                    مشاهده سوال
                  </div>
                </div>
                <div class="details d-flex flex-row me-5">
                  <div class="article ms-3 mt-3">مبحث: {{question.title}}</div>
                  <div class="hardness d-flex flex-row bg-gray align-items-center mt-3">
                    <span class="ms-1">سختی:</span>
                    {{calcHardness(question.hardness)}}
                    <li v-for="item in hardness" :key="item" class="fa fa-square c-06a971 ms-1"></li>
                    <li v-for="item in 4-hardness" :key="item" class="fa fa-square c-cff6e9 ms-1"></li>
                    <span class="ms-1">{{question.hardness}}</span>
                  </div>
                  <div class="time me-5">
                    <span class="d-block">زمان پاسخگویی شما : ۱۰۰ ثانیه</span>
                    <span class="d-block"
                      >زمان پاسخگویی به ابن سوال
                       <span class="c-1976d2">۸۰ ثانیه</span>
                        که در
                        <span class="c-1976d2"> محدوده استاندارد سوالات</span>
                      کنکور بوده است.</span
                    >
                  </div>
                </div>
              </div>
    </section> 
    <div>
        <bs-modal :show="showModal" size="lg" @open="showModal" @close="close">
                    <template class="header">
                      <div
                        class="
                          d-flex
                          flex-row
                          justify-content-between
                          align-items-center
                          header-container
                          p-2
                        "
                      >
                        <div class="text-white">مشاهده سوال و پاسخ</div>
                        <div class="text-white">
                          <q-btn dense icon="close" @click="close()" />
                        </div>
                      </div>
                    </template>

                    <template>
                      <div class="mt-4">
                        سوال
                        {{ this.id }}
                        : در این قسمت صورت سوال را مشاهده میفرمایید.
                        <div class="mt-2 mx-auto">
          <img :src="'http://159.69.82.251:63841/api/Question/GetPictureFile/'+QuestionsFile[this.id-1]"/>
                        </div>
                        <br />
                        در این قسمت پاسخ سوال را مشاهده میفرمایید.
                        <div class="mt-2 mx-auto">
                      <img :src="'http://159.69.82.251:63841/api/QuestionAnswer/GetPictureFile/'+AnswersFile[this.id-1]"/>
                      </div>
                      </div>
                    </template>

                    <template slot="footer">
                      <base-btn-back @click="close()"></base-btn-back>
                    </template>
                  </bs-modal>
    </div>
</div>
</template>

<script>
export default {
props:{
      question: {
      type: Array,
      default: () => [{ title: "default" }]
    },
    QuestionsFile: {
      type: Array,
      default: () => [{ title: "default" }]
    },
    AnswersFile: {
      type: Array,
      default: () => [{ title: "default" }]
    }
},
data(){
  return{
    showModal:false,
    closeModal:true,
    hardness:0,
    id:0
  }
},
methods:{
      open(id) {
      this.showModal = true;
      this.id = id;
      this.closeModal = false;
    },
     close() {
      this.closeModal = true;
      this.showModal = false;
    },
    calcHardness(hardness){
      if(hardness === 'ساده'){
        this.hardness = 1
      }else if(hardness === 'متوسط'){
        this.hardness = 2
      }else if(hardness === 'سخت'){
        this.hardness = 3
      }else if(hardness === 'بسیار سخت'){
        this.hardness = 4
      }
    },
    log(data, data2){
      console.log(data, data2)
    }
    }
}
</script>

<style scoped>
.report {
  border-radius: 10px;
  padding: 10px;
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
  height: 100vh;
}
.filterCol{
/* height: 500px; */
height: 100%;
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
.qOptions{
  cursor: pointer;
  width: 15%;
  border-radius: 15px;
  padding: 5px;
  background-color: #f2f2f2;
  color: #197;
  text-align: center;
}
.hardness {
  height: 15px;
  border-radius: 5px;
  padding: 0px 5px;
}
.header {
  position: relative;
  background-color: #17d292;
}
.header-container {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  background-color: #17d292;
}
</style>
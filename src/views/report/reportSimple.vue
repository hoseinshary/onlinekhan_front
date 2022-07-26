<template>
    <section class="testSimpleReport">
              <div class="question font-12">
                <div class="d-flex flex-row m-3">
                  <div
                    class="number bg-danger text-white d-flex flex-row justify-content-center align-items-center ms-3"
                  >
                    {{question.questionNum}}
                  </div>
                  <div
                    class="options d-flex flex-row justify-content-between align-items-center"
                  >
                    <span>1</span>
                    <i class="fa fa-genderless fa-lg me-2 ms-3"></i>
                    <span>2</span>
                    <i class="fa fa-genderless fa-lg me-2 ms-3"></i>
                    <span>3</span>
                    <i class="fa fa-window-close-o me-2 ms-3 c-ff0048"></i>
                    <span>4</span>
                    <i class="fa fa-check-square-o me-2 ms-3 c-1976d2"></i>
                  </div>
                  <div class="options me-2">
                    <i class="fa fa-check-circle"></i>
                  </div>
                </div>
                <div class="details d-flex flex-row me-5">
                  <div class="article ms-3 mt-3">مبحث: مثلثات</div>
                  <div class="hardness d-flex flex-row bg-gray align-items-center mt-3">
                    سختی:
                    <i class="fa fa-square c-06a971 ms-1"></i>
                    <i class="fa fa-square c-06a971 ms-1"></i>
                    <i class="fa fa-square c-cff6e9 ms-1"></i>
                    <i class="fa fa-square c-cff6e9 ms-1"></i> متوسط
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
</template>

<script>
export default {
props:{
      question: {
      type: Array,
      default: () => [{ title: "default" }]
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
.hardness {
  height: 15px;
  border-radius: 5px;
  padding: 0px 5px;
}
</style>
<template>
  <section class="row gutter-md">
    <base-input :model="$v.assayCreate.Title" class="col-md-6 borderRound pt-3" />
    <base-input :model="$v.assayCreate.Time" class="col-md-6 borderRound pt-3" />
    <base-select
      :model="$v.assayCreate.LookupId_Importance"
      :options="lookupStore.assayImportanceDdl"
      class="col-md-6 borderRound"
    />
    <base-select
      :model="$v.assayCreate.LookupId_QuestionType"
      :options="lookupStore.questionTypeDdl"
      class="col-md-6 borderRound"
    />
    <base-select
      :model="$v.assayCreate.LookupId_Type"
      :options="lookupStore.assayTypeDdl"
      class="col-md-6 borderRound"
    />
    <base-field class="col-md-6 borderRound pt-3 up" :model="$v.assayCreate.IsOnline">
      <template slot-scope="data">
        <div class="YNcontainer">
        <q-radio v-model="data.obj.$model" :val="false" label="خیر" />
        <q-radio v-model="data.obj.$model" :val="true" label="بلی" />
        </div>
      </template>
    </base-field>
    <base-field class="col-md-6 borderRound pt-3" :model="$v.assayCreate.IsPublic">
      <template slot-scope="data">
        <div class="YNcontainer">
        <q-radio v-model="data.obj.$model" :val="false" label="خیر" />
        <q-radio v-model="data.obj.$model" :val="true" label="بلی" />
        </div>
      </template>
    </base-field>
    <base-field class="col-md-6 borderRound pt-3" :model="$v.assayCreate.RandomOptions">
      <template slot-scope="data">
        <div class="YNcontainer">
        <q-radio v-model="data.obj.$model" :val="false" label="خیر" />
        <q-radio v-model="data.obj.$model" :val="true" label="بلی" />
        </div>
      </template>
    </base-field>
    <base-select :model="$v.assayCreate.Font" :options="fontDdl" class="col-md-6 borderRound" />
    <base-input :model="$v.assayCreate.FontSize" class="col-md-6 borderRound" />
    <base-field class="col-md-6 borderRound" :model="$v.assayCreate.TwoPageInOne">
      <template slot-scope="data">
        <div class="YNcontainer">
        <q-radio v-model="data.obj.$model" :val="false" label="خیر" />
        <q-radio v-model="data.obj.$model" :val="true" label="بلی" />
        </div>
      </template>
    </base-field>

    <base-field class="col-md-6 borderRound" :model="$v.assayCreate.QuestionsRelocation">
      <template slot-scope="data">
        <div class="d-flex flex-row">
        <div class="d-flex flex-row p-0">
        <q-checkbox v-model="data.obj.$model"/>          
        <div class="mt-3">دارد</div>
        </div>
        <div class="ms-2 d-flex flex-row">
          <div v-if="data.obj.$model===true" class="d-flex flex-row p-0">
        <q-radio
          v-show="data.obj.$model"
          v-model="assayCreate.QuestionsRelocationMode"
          :val="true"
          
        />
        <div class="mt-3">در مبحث</div>
       
        <div class="ms-2 d-flex flex-row">
        <q-radio
          v-show="data.obj.$model"
          v-model="assayCreate.QuestionsRelocationMode"
          :val="false"
        />
        <div class="mt-3">در درس</div>
         </div>
        </div>
        </div>
        </div>
      </template>
    </base-field>

    <base-field class="col-md-6 borderRound" :model="$v.assayCreate.HaveWhiteSpace">
      <template slot-scope="data">
        <div class="d-flex flex-row">
        <div class="d-flex flex-row p-0">
        <q-checkbox v-model="data.obj.$model"/>        
        <div class="mt-3">دارد</div>
        </div>
        <div v-if="data.obj.$model===true" class="d-flex flex-row p-0">
        <q-radio
          v-show="data.obj.$model"
          v-model="assayCreate.WhiteSpacePosition"
          :val="true"
        />
        <div class="mt-3">بغل</div>
        <q-radio
          v-show="data.obj.$model"
          v-model="assayCreate.WhiteSpacePosition"
          :val="false"
        />
        <div class="mt-3">زیر</div>
        </div>
        </div>
      </template>
    </base-field>
    <div class="col-lg-4"></div>

    <div class="col-12">
      <base-btn-save @click="getAllQuestions" class="px-5"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { vxm } from "src/store";
import util from "src/utilities";
import { assayValidations } from "src/validations/assayValidation";
import { Fonts } from "src/utilities/enumeration";

@Component({
  validations: assayValidations
})
export default class AssayTabVue extends Vue {
  $v: any;

  //#region ### data ###
  assayStore = vxm.assayStore;
  assayCreate = vxm.assayStore.assayCreate;
  lookupStore = vxm.lookupStore;

  hasReplace = false;
  hasPlace = false;
  //#endregion

  //#region ### computed ###
  get fontDdl() {
    return Object.keys(Fonts)
      .reduce((arr: Array<any>, key: string) => {
        if (!arr.includes(key)) {
          arr.push(Fonts[key]);
        }
        return arr;
      }, [])
      .map(x => ({
        label: x,
        value: Fonts[x]
      }));
  }
  //#endregion

  //#region ### methods ###
  getAllQuestions() {
    this.assayStore.submitCreate().then(() => {
     // this.$emit("changeTab", "questionTab");
    });
  }
  //#endregion

  //#region ### hooks ###
  created() {
    this.lookupStore.fillQuestionType();
    this.lookupStore.fillAssayImportance();
    this.lookupStore.fillAssayType();
    this.assayStore.SET_ASSAY_VUE(this);
  }
  //#endregion
}
</script>
<style scoped>
.borderRound{
  /* border:1px solid gray; */
  margin-left: 11px;
  margin-top: 4px;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px !important;
}
.YNcontainer{
  margin-top: 10px !important;
}
.q-option{
    display: inline !important;
    margin-left: 0px !important;
    margin-right: 18px !important;
    margin-top: 14px !important;
    padding-left: 0px !important;
    /* padding-top: 10px !important; */
    display: flex;
    justify-content: center;
}
.q-option-label{
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 5px !important;
}
.q-option-inner{
    padding-left: 0px !important;
    padding-right: 0px !important;
}
.q-if-label{
    padding-right: 10px !important;
}
.gutter-sm .s-q-feild-body{
    margin-top: 15px !important;
}

</style>>
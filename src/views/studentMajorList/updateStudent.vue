<template>
  <base-modal-edit
    title="اطلاعات انتخاب رشته"
    :show="studentMajorListStore.openModal.updateStudent"
    size="lg"
    @reset="resetForm"
    @open="open"
    @confirm="studentMajorListStore.submitUpdateStudent(student)"
    @close="studentMajorListStore.OPEN_MODAL_UPDATESTUDENT(false)"  >
    
    <base-select
      :model="$v.student.Gender"
      :options="genderDdl"
      class="col-sm-6 col-md-4"
    />
   
    <base-input :model="$v.student.BirthYear" align="right" class="col-sm-6 col-md-4"/>
    <base-select
      :model="$v.student.SahmieNahayei"
      :options="mantagheDdl"
      class="col-sm-6 col-md-4"
    />
     <base-select
      :model="$v.student.Field"
      :options="fieldDdl"
      class="col-sm-6 col-md-4"
    />
    <base-input :model="$v.student.DiplomYear" align="right" class="col-sm-6 col-md-4"/>
    <base-select
      :model="$v.student.ProvinceBoomyId"
      :options="provinceStore.ddl"
      class="col-sm-6 col-md-4"
      filter
    />
    <base-select
      :model="$v.student.NahyeBoomy"
      :options="nahieDdl"
      class="col-sm-6 col-md-4"
    />
   <base-select
      :model="$v.student.GhotbBoomy"
      :options="ghotbDdl"
      class="col-sm-6 col-md-4"
    />
    <section class="row gutter-md" style="margin-top:10px;margin-bottom:10px">
    <base-select
      :model="$v.student.IsAllowedRoozane"
      :options="mojazDdl"
      class="col-sm-6 col-md-3"
    />
    <base-select
      :model="$v.student.IsAllowedMajazi"
      :options="mojazDdl"
      class="col-sm-6 col-md-3"
    />
     <base-select
      :model="$v.student.IsAllowedPayam"
      :options="mojazDdl"
      class="col-sm-6 col-md-3"
    />
     <base-select
      :model="$v.student.IsAllowedAzad"
      :options="mojazDdl"
      class="col-sm-6 col-md-3"
    />
    </section>
     <base-select
      :model="$v.student.GorohAzmayeshi"
      :options="fieldDdl"
      class="col-sm-6 col-md-4"
    />
    <base-select
      :model="$v.student.IsAllowedRozaneGoroh"
      :options="mojazDdl"
      class="col-sm-6 col-md-4"
    />
   
    <base-select
      :model="$v.student.IsAllowedMajaziGoroh"
      :options="mojazDdl"
      class="col-sm-6 col-md-4"
    />
   
    <base-select
      :model="$v.student.IsAllowedFarhangianGoroh"
      :options="mojazDdl"
      class="col-sm-6 col-md-4"
    />
   
    <base-select
      :model="$v.student.IsAllowedPayamGoroh"
      :options="mojazDdl"
      class="col-sm-6 col-md-4"
    />
   
    <base-select
      :model="$v.student.IsAllowedAzadGoroh"
      :options="mojazDdl"
      class="col-sm-6 col-md-4"
    />
   
    <br/>
    <section class="row gutter-md" style="margin-top:10px">
    <base-input :model="$v.student.SahmieNahayeiOne" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.SahmieNahayeiTwo" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.SahmieNahayeiThree" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.SahmieNahayeiFour" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.SahmieNahayeiFive" align="right" class="col-sm-6 col-md-2"/>
    </section>
    <section class="row gutter-md" style="margin-top:10px">
    <base-input :model="$v.student.KeshvariOne" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KeshvariTwo" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KeshvariThree" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KeshvariFour" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KeshvariFive" align="right" class="col-sm-6 col-md-2"/>
    </section>
    <section class="row gutter-md" style="margin-top:10px">
    <base-input :model="$v.student.KolOne" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KolTwo" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KolThree" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KolFour" align="right" class="col-sm-6 col-md-2"/>
    <base-input :model="$v.student.KolFive" align="right" class="col-sm-6 col-md-2"/>
    </section>
  </base-modal-edit>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import axios from "src/plugins/axios";
import IStudent,{DefaultStudent} from "src/models/IStudent";

import { studentEditValidations } from "src/validations/user/StudentEditValidation";
import { studentMajorListStore } from "src/store/studentMajorListStore";

@Component({
  validations: studentEditValidations
})
export default class UpdateStudentVue extends Vue {
  $v: any;
studentMajorListStore = vxm.studentMajorListStore;
  //#region ### data ###
  userStore = vxm.userStore;
  provinceStore = vxm.provinceStore;
  student = vxm.studentStore.student;
  //#endregion
  get mojazDdl() {
    return [
      { value: true, label: "مجاز" },
      { value: false, label: "غیر مجاز" }
     
    ];
  }
  get genderDdl() {
    return [
      { value: true, label: "پسر" },
      { value: false, label: "دختر" }
     
    ];
  }
get fieldDdl() {
    return [
    { value: 0, label: "" },
     { value: 1, label: "ریاضی" },
     { value: 2, label: "علوم تجربی" },
     { value: 3, label: "انسانی" },
     { value: 4, label: "فنی حرفه ای" },
     { value: 5, label: "هنر" },
     { value: 6, label: "زبان های خارجی" }

    ];
  }
  get nahieDdl() {
    return [
      { value: 0, label: "" },
      { value: 1, label: "ناحیه یک" },
      { value: 2, label: "ناحیه دو" },
      { value: 3, label: "ناحیه سه" },
      { value: 4, label: "ناحیه چهار" },
      { value: 5, label: "ناحیه پنج" },
      { value: 6, label: "ناحیه شش" },
      { value: 7, label: "ناحیه هفت" },
      { value: 8, label: "ناحیه هشت" },
      { value: 9, label: "ناحیه نه" }      
     

    ];
  }
  get ghotbDdl() {
    return [
      { value: 0, label: "" },
      { value: 1, label: "قطب یک" },
      { value: 2, label: "قطب دو" },
      { value: 3, label: "قطب سه" },
      { value: 4, label: "قطب چهار" },
      { value: 5, label: "قطب پنج" }
        
     

    ];
  }
  get mantagheDdl() {
    return [
      { value: 0, label: "" },
      { value: 1, label: "منطقه یک" },
      { value: 2, label: "منطقه دو" },
      { value: 3, label: "منطقه سه" }
    ];
  }
  resetForm()
  {
    this.student = DefaultStudent;
  }
  //### methods ###
  open() {
     vxm.provinceStore.fillList();
     axios.get(`/api/student/GetMyInfo`)
      .then(response => {
              this.student = response.data;
      });
  }
  //#endregion

  //#region ### hooks ###
  created() {
     this.studentMajorListStore.SET_UPDATESTUDENT_VUE(this);
    this.provinceStore = vxm.provinceStore;
  }
  //#endregion
}
</script>
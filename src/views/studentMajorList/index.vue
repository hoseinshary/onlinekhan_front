<template >
  <section class="col-md-8" dir="rtl">
    <base-btn-create
      v-if="canCreate"
      :label="`ایجاد (${studentMajorListStore.modelName}) جدید`"
      @click="showModalCreate"
    />
     <base-btn-create
      v-if="canCreate"
      :label="`ویرایش اطلاعات انتخاب رشته`"
      @click="showModalStudent"
    />
    <br />
    <base-table v-if="studentMajorListStore.gridData.length>0" :grid-data="studentMajorListStore.gridData" :columns="studentMajorListGridColumn" hasIndex>

    <template slot="Student.User.Family" slot-scope="data">{{data.row.Student.User.Name + " " +data.row.Student.User.Family }}</template>
      <template slot="Id" slot-scope="data">
     

        <q-btn class="q-ma-sm" size="sm" round color="purple" icon="print" @click="printList(data.row.Id)"/>

        <base-btn-edit v-if="canEdit" round @click="showModalEdit(data.row.Id)" />
        <base-btn-delete v-if="canDelete" round @click="showModalDelete(data.row.Id)" />
      </template>
    </base-table>

    <div v-else class="">
                    <img class="corner-around center"
                      src="~assets/newData.png"
                      style="width: 80%;"/>
                  </div>

    <!-- modals -->
    <modal-create v-if="canCreate"></modal-create>
    <modal-updateStudent ></modal-updateStudent>
    <modal-edit v-if="canEdit"></modal-edit>
    <modal-delete v-if="canDelete"></modal-delete>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import util from "src/utilities";
import router from "src/router";


@Component({
  components: {
    ModalCreate: () => import("./create.vue"),
    ModalEdit: () => import("./edit.vue"),
    ModalDelete: () => import("./delete.vue"),
    ModalUpdateStudent: () => import("./updateStudent.vue")
  }
})
export default class StudentMajorListVue extends Vue {
  //#region ### data ###
  studentMajorListStore = vxm.studentMajorListStore;
  pageAccess = util.getAccess(this.studentMajorListStore.modelName);
  studentMajorListGridColumn = [
    {
      title: "نام لیست انتخاب رشته",
      data: "Title"
    },
    {
      title: "نام و نام خانوادگی",
      data: "Student.User.Family"
    },
    {
      title: "عملیات",
      data: "Id",
      searchable: false,
      sortable: false,
      visible: this.canEdit || this.canDelete
    }
  ];
  //#endregion

  //#region ### computed ###
  get canCreate() {
    return true;
  }

  get canEdit() {
    return true;
  }

  get canDelete() {
    return true;
  }
  //#endregion

  //#region ### methods ###
  showModalStudent() {
    //this.studentMajorListStore.resetCreate();
    this.studentMajorListStore.OPEN_MODAL_UPDATESTUDENT(true);
  }
  showModalCreate() {
    this.studentMajorListStore.resetCreate();
    this.studentMajorListStore.OPEN_MODAL_CREATE(true);
  }

  showModalEdit(id) {
    this.studentMajorListStore.resetEdit();
    this.studentMajorListStore.getById(id).then(() => {
      this.studentMajorListStore.OPEN_MODAL_EDIT(true);
    });
  }
 printList(id) {
    this.studentMajorListStore.getById(id);
    router.push("/studentMajorList/printMajorList");
  }
  showModalDelete(id) {
    console.log(id);
    this.studentMajorListStore.getById(id).then(() => {
      this.studentMajorListStore.OPEN_MODAL_DELETE(true);
    });
  }
  //#endregion

  //#region ### hooks ###
  created() {
    this.studentMajorListStore = vxm.studentMajorListStore;
    this.studentMajorListStore.fillList();
    this.studentMajorListGridColumn = [
    {
      title: "نام لیست انتخاب رشته",
      data: "Title"
    },
    {
      title: "نام و نام خانوادگی",
      data: "Student.User.Family"
    },
    {
      title: "عملیات",
      data: "Id",
      searchable: false,
      sortable: false,
      visible: this.canEdit || this.canDelete
    }
    ]
    console.log(this.studentMajorListStore.gridData);
  }
  //#endregion
}
</script>
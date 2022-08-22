import Vue from "Vue";
import IStudentMajorList, { DefaultStudentMajorList, Major  } from "src/models/IStudentMajorList";
import IMessageResult from "src/models/IMessageResult";
import axios, { AxiosResponse } from "src/plugins/axios";
import axiosSSO from "src/plugins/axiosSSO";

import { HistoryAssay, CourseAssay,MessageType } from "src/utilities/enumeration";
import { STUDENTMAJORLIST_URL as baseUrl } from "src/utilities/site-config";
import IProvince from "src/models/IProvince";

import IStudent, { DefaultStudent } from "src/models/IStudent";
import util from "src/utilities";
import {
  VuexModule,
  mutation,
  action,
  Module,
  getRawActionContext
} from "vuex-class-component";

@Module({ namespacedPath: "studentMajorListStore/" })
export class StudentMajorListStore extends VuexModule {
  openModal: { create: boolean; edit: boolean; delete: boolean ,updateStudent: boolean};
  studentMajorList: IStudentMajorList;
  majorsList: Major;
  private _student: IStudent;
  private _studentMajorListList: Array<IStudentMajorList>;
  private _majorList : Array<Major>;
  private _modelChanged: boolean = true;
  private _createVue: Vue;
  private _updateStudentVue: Vue;
  private _editVue: Vue;

  /**
   * initialize data
   */
  constructor() {
    super();
    this.studentMajorList = util.cloneObject(DefaultStudentMajorList);
    this._majorList = [];
    this._student = DefaultStudent;
    this._studentMajorListList = [];
    this.openModal = {
      create: false,
      edit: false,
      delete: false,
      updateStudent: false
    };
  }

  //#region ### getters ###
  get modelName() {
    return "انتخاب رشته";
  }

  get recordName() {
    return this.studentMajorList.Title || "";
  }

  get ddl() {
    return this._studentMajorListList.map(x => ({
      value: x.Id,
      label: x.Title
    }));
  }

  get gridData() {
    return this._studentMajorListList;
  }

  get gridDataMajor() {
    return this._majorList;
  }
  //#endregion

  //#region ### mutations ###
  @mutation
  private CREATE(studentMajorList: IStudentMajorList) {
    this._studentMajorListList.push(studentMajorList);
  }

  @mutation
  private UPDATE(studentMajorList: IStudentMajorList) {
    let index = this._studentMajorListList.findIndex(x => x.Id == this.studentMajorList.Id);
    if (index < 0) return;
    util.mapObject(studentMajorList, this._studentMajorListList[index]);
  }

  @mutation
  private DELETE() {
    let index = this._studentMajorListList.findIndex(x => x.Id == this.studentMajorList.Id);
    if (index < 0) return;
    this._studentMajorListList.splice(index, 1);
  }

  @mutation
  private RESET(vm: any) {
    util.mapObject(DefaultStudentMajorList, this.studentMajorList, "Id");
    if (vm.$v) {
      vm.$v.$reset();
    }
  }

  @mutation
  private SET_LIST(list: Array<IStudentMajorList>) {
    this._studentMajorListList = list;
  }
  @mutation
  private SET_STUDENT(stud: IStudent) {
    this._student = stud;
  }
  @mutation
  private SET_LIST_Major(list: Array<Major>) {
    //console.log(list);
    console.log(this._student);
    list.forEach(element => {
      if(element.ZirGoroh == 1)
      {
      element.RotbeNahaei = this._student.SahmieNahayeiOne;
      element.RotbeKeshvari = this._student.KeshvariOne;
      element.RotbeKol = this._student.KolOne;
      }
      else if(element.ZirGoroh == 2)
      {
      element.RotbeNahaei = this._student.SahmieNahayeiTwo;
      element.RotbeKeshvari = this._student.KeshvariTwo;
      element.RotbeKol = this._student.KolTwo;
      }
      else if(element.ZirGoroh == 3)
      {
      element.RotbeNahaei = this._student.SahmieNahayeiThree;
      element.RotbeKeshvari = this._student.KeshvariThree;
      element.RotbeKol = this._student.KolThree;
      }
      else if(element.ZirGoroh == 4)
      {
      element.RotbeNahaei = this._student.SahmieNahayeiFour;
      element.RotbeKeshvari = this._student.KeshvariFour;
      element.RotbeKol = this._student.KolFour;
      }
      else if(element.ZirGoroh == 5)
      {
      element.RotbeNahaei = this._student.SahmieNahayeiFive;
      element.RotbeKeshvari = this._student.KeshvariFive;
      element.RotbeKol = this._student.KolFive;
      }
      else
      { 
        element.RotbeNahaei = 0;
        element.RotbeKeshvari = 0;
        element.RotbeKol = 0;
      }
      //1 Nahei 2 Ghotb 3 Ostani 4 Keshvari
      if(element.NoeGozinesh == 1)
      { 
         if(this._student.NahyeBoomy == 1)
         {
            if(element.Province.includes('البرز') || element.Province.includes('تهران') || element.Province.includes('زنجان') || element.Province.includes('سمنان') || element.Province.includes('قزوین') || element.Province.includes('قم') || element.Province.includes('مرکزی') )
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 2)
         {
            if(element.Province.includes('آذربایجان شرقی') || element.Province.includes('آذربایجان غربی') || element.Province.includes('اردبیل'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 3)
         {
            if(element.Province.includes('اصفهان') || element.Province.includes('چهارمحال بختیاری') || element.Province.includes('یزد'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 4)
         {
            if(element.Province.includes('سیستان و بلوچستان') || element.Province.includes('کرمان'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 5)
         {
            if(element.Province.includes('بوشهر') || element.Province.includes('فارس') || element.Province.includes('کهگیلویه و بویر احمد') || element.Province.includes('هرمزگان'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 6)
         {
            if(element.Province.includes('کردستان') || element.Province.includes('کرمانشاه') || element.Province.includes('همدان'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 7)
         {
            if(element.Province.includes('ایلام') || element.Province.includes('خوزستان') || element.Province.includes('لرستان'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 8)
         {
            if(element.Province.includes('خراسان رضوی') || element.Province.includes('خراسان جنوبی') || element.Province.includes('خراسان شمالی'))
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 9)
         {
            if(element.Province.includes('گلستان') || element.Province.includes('گیلان') || element.Province.includes('مازندران'))
            element.IncludeYou = true;
         }
      }
      else if(element.NoeGozinesh == 2)
      { 
         if(this._student.NahyeBoomy == 1)
         {
            if(element.Province.includes('البرز') || element.Province.includes('تهران') || element.Province.includes('زنجان') || element.Province.includes('سمنان') || element.Province.includes('قزوین') || element.Province.includes('قم') || element.Province.includes('مرکزی') || element.Province.includes('گلستان') || element.Province.includes('گیلان') || element.Province.includes('مازندران') )
            element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 2)
         {
          if(element.Province.includes('خراسان رضوی') || element.Province.includes('خراسان جنوبی') || element.Province.includes('خراسان شمالی') || element.Province.includes('سیستان و بلوچستان') || element.Province.includes('کرمان'))
          element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 3)
         {
          if(element.Province.includes('آذربایجان شرقی') || element.Province.includes('آذربایجان غربی') || element.Province.includes('اردبیل') || element.Province.includes('کردستان') || element.Province.includes('کرمانشاه') || element.Province.includes('همدان'))
          element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 4)
         {
          if(element.Province.includes('اصفهان') || element.Province.includes('چهارمحال بختیاری') || element.Province.includes('یزد') || element.Province.includes('ایلام') || element.Province.includes('خوزستان') || element.Province.includes('لرستان'))
          element.IncludeYou = true;
         }
         else if(this._student.NahyeBoomy == 5)
         {
          if(element.Province.includes('بوشهر') || element.Province.includes('فارس') || element.Province.includes('کهگیلویه و بویر احمد') || element.Province.includes('هرمزگان'))
          element.IncludeYou = true;
         }
      }
      else if(element.NoeGozinesh == 3)
      { 
        axiosSSO
        .get(`$/api/province/GetById/${this._student.ProvinceBoomyId}`)
        .then((response: AxiosResponse<IProvince>) => {
        if(element.Province.includes(response.data.Name))
          element.IncludeYou = true;
        });
      }
      else if(element.NoeGozinesh == 4)
      { 
        element.IncludeYou = true;
      }


    });
    this._majorList = list;

    //console.log(this._majorList);
  }

  @mutation
  private MODEL_CHANGED(changed: boolean) {
    this._modelChanged = changed;
  }

  @mutation
  OPEN_MODAL_CREATE(open: boolean) {
    this.openModal.create = open;
  }
  @mutation
  OPEN_MODAL_UPDATESTUDENT(open: boolean) {
    this.openModal.updateStudent = open;
  }
  @mutation
  OPEN_MODAL_EDIT(open: boolean) {
    this.openModal.edit = open;
  }

  @mutation
  OPEN_MODAL_DELETE(open: boolean) {
    this.openModal.delete = open;
  }

  @mutation
  SET_CREATE_VUE(vm: Vue) {
    this._createVue = vm;
  }
  @mutation
  SET_UPDATESTUDENT_VUE(vm: Vue) {
    this._updateStudentVue = vm;
  }
  @mutation
  SET_EDIT_VUE(vm: Vue) {
    this._editVue = vm;
  }
  //#endregion

  //#region ### actions ###
  @action()
  async getById(id: number) {
    return axios
      .get(`${baseUrl}/GetById/${id}`)
      .then((response: AxiosResponse<IStudentMajorList>) => {
        util.mapObject(response.data, this.studentMajorList);
      });
  }


  @action()
  async submitUpdateStudent(student) {
    let vm = this._updateStudentVue;

    return axios
      .post(`/api/student/UpdateStudentMajorListData`, student)
      .then((response: AxiosResponse<IMessageResult>) => {
        let data = response.data;
        this.notify({ vm, data });

      });
  }
  @action()
  async getMajorsBySearch(searchfilter : any) {
    
      // return axios
      //   .get(`${baseUrl}/GetMajorsBySearch/?text=${text}`)
      //   .then((response: AxiosResponse<Array<Major>>) => {
      //     this.SET_LIST_Major(response.data);
      //   });


    
    var data = {
      Field: searchfilter.fieldFilter,
      MajorTitle: searchfilter.nameFilter,
      Apply: HistoryAssay[searchfilter.history],
      Course: CourseAssay[searchfilter.course]
    
    };
    return axios
      .post(`${baseUrl}/GetMajorsBySearch`, data)
      .then((response: AxiosResponse<Array<Major>>) => {
      axios
      .get(`/api/student/GetMyInfo`)
      .then((responsed: AxiosResponse<IStudent>) => {
        this.SET_STUDENT(responsed.data);
        this.SET_LIST_Major(response.data);
      });
      });
    
  }
  @action()
  async fillList() {
    if (this._modelChanged) {
      console.log("Test");
      return axios
        .get(`${baseUrl}/GetStudentById`)
        .then((response: AxiosResponse<Array<IStudentMajorList>>) => {
          this.SET_LIST(response.data);
          this.MODEL_CHANGED(false);
        });
    } else {
      return Promise.resolve(this._studentMajorListList);
    }
  }

  @action({ mode: "raw" })
  async validateForm(vm: any) {
    return new Promise(resolve => {
      vm.$v.studentMajorList.$touch();
      if (vm.$v.studentMajorList.$error) {
        const context = getRawActionContext(this);
        context.dispatch("notifyInvalidForm", vm, { root: true });
        resolve(false);
      }
      resolve(true);
    });
  }

  @action({ mode: "raw" })
  async notify(payload: { vm: Vue; data: IMessageResult }) {
    const context = getRawActionContext(this);
    return context.dispatch(
      "notify",
      {
        body: payload.data.Message,
        type: payload.data.MessageType,
        vm: payload.vm
      },
      { root: true }
    );
  }

  @action()
  async submitCreate(closeModal: boolean) {
    let vm = this._createVue;
    if (!(await this.validateForm(vm))) return;

    var data = {
      Title: this.studentMajorList.Title,
      MajorsId: this.studentMajorList.Majors.map(x=>x.Id)
    };
    return axios
      .post(`${baseUrl}/Create`, data)
      .then((response: AxiosResponse<IMessageResult>) => {
        let data = response.data;
        this.notify({ vm, data });

        if (data.MessageType == MessageType.Success) {
          this.CREATE(data.Obj);
          this.OPEN_MODAL_CREATE(!closeModal);
          this.MODEL_CHANGED(true);
          this.resetCreate();
        }
      });
  }

  @action()
  async resetCreate() {
    this.studentMajorList.Id = 0;
    this.studentMajorList.Majors =[];
    this.SET_LIST_Major([]);
    this.RESET(this._createVue);
  }

  @action()
  async submitEdit() {
    let vm = this._editVue;
    if (!(await this.validateForm(vm))) return;
    var data = {
      Title: this.studentMajorList.Title,
      MajorsId: this.studentMajorList.Majors.map(x=>x.Id),
      Id:this.studentMajorList.Id,
      StudentId:this.studentMajorList.StudentId
    };
    return axios
      .post(`${baseUrl}/Update`, data)
      .then((response: AxiosResponse<IMessageResult>) => {
        let data = response.data;
        this.notify({ vm, data });

        if (data.MessageType == MessageType.Success) {
          this.UPDATE(data.Obj);
          this.OPEN_MODAL_EDIT(false);
          this.MODEL_CHANGED(true);
          this.resetEdit();
        }
      });
  }

  @action()
  async resetEdit() {
    this.RESET(this._editVue);
  }

  @action()
  async submitDelete(vm: Vue) {
    return axios
      .post(`${baseUrl}/Delete/${this.studentMajorList.Id}`)
      .then((response: AxiosResponse<IMessageResult>) => {
        let data = response.data;
        this.notify({ vm, data });
        if (data.MessageType == MessageType.Success) {
          this.DELETE();
          this.OPEN_MODAL_DELETE(false);
          this.MODEL_CHANGED(true);
        }
      });
  }
  //#endregion
}

export const studentMajorListStore = StudentMajorListStore.ExtractVuexModule(StudentMajorListStore);

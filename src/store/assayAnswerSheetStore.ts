import Vue from "Vue";
import IAssayAnswerSheet , {  DefaultAssayAnswerSheet } from "src/models/IAssayAnswerSheet";
import {AssayAnswerSheetCorectExam , AssayAnswerSheetReport }  from "src/models/IAssayAnswerSheet";
import IMessageResult from "src/models/IMessageResult";
import axios, { AxiosResponse } from "src/plugins/axios";
import { MessageType } from "src/utilities/enumeration";
import { ASSAYANSWERSHEET_URL as baseUrl } from "src/utilities/site-config";
import util from "src/utilities";
import {
  VuexModule,
  mutation,
  action,
  Module,
  getRawActionContext
} from "vuex-class-component";
import router from "src/router";


@Module({ namespacedPath: "assayAnswerSheetStore/" })
export class AssayAnswerSheetStore extends VuexModule {
  openModal: {runAssay_Start:boolean; runAssay_Stop:boolean; questionShow:boolean; create: boolean; edit: boolean; delete: boolean };
  assayAnswerSheet: IAssayAnswerSheet;
  private _assayAnswerSheetList: Array<IAssayAnswerSheet>;
  private _assayAnswerSheetReportList : Array<AssayAnswerSheetReport>
  private _modelChanged: boolean = true;
  private _createVue: Vue;
  private _editVue: Vue;
  private _questionShowVue: Vue;
  private _runAssay_StartVue: Vue;
  private _runAssay_StopVue: Vue;
  public _indexVue : Vue;

  assayAnswerSheetResult :Array <AssayAnswerSheetCorectExam>;

  /**
   * initialize data
   */
  constructor() {
    super();
    
    this.assayAnswerSheet = util.cloneObject(DefaultAssayAnswerSheet);
    this._assayAnswerSheetList = [];
    this._assayAnswerSheetReportList =[];
    this._assayAnswerSheetList
    this.openModal = {
      questionShow: false,
      create: false,
      edit: false,
      delete: false,
      runAssay_Start : false,
      runAssay_Stop: false
    };
  }

  //#region ### getters ###
  get modelName() {
    return "جواب آزمون";
  }


  get gridDataReport() {
    return this._assayAnswerSheetReportList;
  }

  get gridData() {
    return this._assayAnswerSheetList;
  }
  //#endregion

  //#region ### mutations ###
  @mutation
  private CREATE(assayAnswerSheet: IAssayAnswerSheet) {
    this._assayAnswerSheetList.push(assayAnswerSheet);
  }

  @mutation
  private UPDATE(assayAnswerSheet: IAssayAnswerSheet) {
    let index = this._assayAnswerSheetList.findIndex(x => x.Id == this.assayAnswerSheet.Id);
    if (index < 0) return;
    util.mapObject(assayAnswerSheet, this._assayAnswerSheetList[index]);
  }

  @mutation
  private DELETE() {
    let index = this._assayAnswerSheetList.findIndex(x => x.Id == this.assayAnswerSheet.Id);
    if (index < 0) return;
    this._assayAnswerSheetList.splice(index, 1);
  }

  @mutation
  private RESET(vm: any) {
    util.mapObject(DefaultAssayAnswerSheet, this.assayAnswerSheet, "Id");
    if (vm.$v) {
      vm.$v.$reset();
    }
  }

  @mutation
  private SET_LIST(list: Array<IAssayAnswerSheet>) {
    this._assayAnswerSheetList = list;
  }

  @mutation
  private SET_LIST_Report(list: Array<AssayAnswerSheetReport>) {
    this._assayAnswerSheetReportList = list;
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
  OPEN_MODAL_QUESTION(open: boolean) {
    this.openModal.questionShow = open;
  }

  @mutation
  OPEN_MODAL_RUNASSAY_START(open: boolean) {
    this.openModal.runAssay_Start = open;
 
  }

  @mutation
  OPEN_MODAL_RUNASSAY_STOP(open: boolean) {
    this.openModal.runAssay_Stop = open;
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
  SET_QUESTION_VUE(vm: Vue) {
    this._questionShowVue = vm;
  }

  @mutation
  SET_EDIT_VUE(vm: Vue) {
    this._editVue = vm;
  }

  @mutation
  SET_INDEX_VUE(vm: Vue) {
    this._indexVue = vm;
  }

  @mutation
  SET_RUNASSAY_START_VUE(vm: Vue) {
    this._runAssay_StartVue = vm;
  }


  @mutation
  SET_RUNASSAY_STOP_VUE(vm: Vue) {
    this._runAssay_StopVue = vm;
  }

  //#endregion

  //#region ### actions ###
  @action()
  async getById(id: number) {
    return axios
      .get(`${baseUrl}/GetById/${id}`)
      .then((response: AxiosResponse<IAssayAnswerSheet>) => {
        util.mapObject(response.data, this.assayAnswerSheet);
      });
  }

  @action()
  async fillList() {
    if (this._modelChanged) {
      return axios
        .get(`${baseUrl}/GetAll`)
        .then((response: AxiosResponse<Array<IAssayAnswerSheet>>) => {
          this.SET_LIST(response.data);
          
          this.MODEL_CHANGED(false);
        });
    } else {
      return Promise.resolve(this._assayAnswerSheetList);
    }
  }

  @action()
  async fillListReport() {
   

  
      // return axios
      //   .post(`${baseUrl}/Report`,id)
      //   .then((response: AxiosResponse<Array<AssayAnswerSheetReport>>) => {
      //     let data = response.data;
          
  
         
      //     this.SET_LIST_Report(response.data);
      //     this.MODEL_CHANGED(false);
          
      //   });



    if (this._modelChanged) {
      return axios
        .get(`${baseUrl}/Report`)
        .then((response: AxiosResponse<Array<AssayAnswerSheetReport>>) => {
          this.SET_LIST_Report(response.data);
          this.MODEL_CHANGED(false);
        });
    } else {
      return Promise.resolve(this._assayAnswerSheetReportList);
    }
  }

  @action({ mode: "raw" })
  async validateForm(vm: any) {
    return new Promise(resolve => {
      vm.$v.assayAnswerSheet.$touch();
      if (vm.$v.assayAnswerSheet.$error) {
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
  async submitCreate() {
    
    
    let vm = this._createVue;
    //if (!(await this.validateForm(vm))) return;

 
    
 
    return axios
      .post(`${baseUrl}/Create`, this.assayAnswerSheet)
      .then((response: AxiosResponse<IMessageResult>) => {
        let data = response.data;
       

        if (data.MessageType == 1) {
          this.assayAnswerSheetResult = data.Obj;

          if(data.Id)
           this.assayAnswerSheet.Id = data.Id ;
          router.push("/assay/resualtAssay");
          //this.OPEN_MODAL_RESUALT(true);
          //console.log(data.Id);
          //console.log(this.assayAnswerSheetResult);


        }
      });
  }

  @action()
  async resetCreate() {
    this.assayAnswerSheet.Id = 0;
    this.RESET(this._createVue);
  }

  @action()
  async submitEdit() {
    let vm = this._editVue;
    if (!(await this.validateForm(vm))) return;

    return axios
      .post(`${baseUrl}/Update`, this.assayAnswerSheet)
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
      .post(`${baseUrl}/Delete/${this.assayAnswerSheet.Id}`)
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

export const assayAnswerSheetStore = AssayAnswerSheetStore.ExtractVuexModule(AssayAnswerSheetStore);

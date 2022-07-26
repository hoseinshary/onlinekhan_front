<template>
 <div>
<div class="row pt-5">
            <div class="col-12 pb-2">
                <h2 class="h3 g-dashboard font-16">آزمون ها</h2>
            </div>
            <div class="col-12">
                <div class="d-flex gap-2">
                    <span class="border-title border-title-blue d-block"></span>
                    <span class="border-title border-title-gray d-block"></span>
                </div>
            </div>
        </div>
      <!-- آزمون های من -->
      <div class="row mt-6">
       

        <div class="col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-4">
          <div class="c-card d-flex overflow-hidden bg-gradient h-100">
            <div class="w-100 py-4">
              <a href="#" class="d-block w-100 h-100 d-flex justify-content-center align-items-center gap-2">
                <i class="fa-light fa-circle-plus text-white fs-3"></i>
                <span class="text-white font-16">ساخت آزمون</span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-4">
          <div class="border-gradient br-10 h-100">
            <div class="bg-white d-flex overflow-hidden br-10 h-100">
              <div class="w-100 py-4">
                <a @click="showMod()" style="cursor:pointer" class="d-block w-100 h-100 d-flex justify-content-center align-items-center gap-2 color-blue">
                  <i class="fa-solid fa-book"></i>
                  <span class="font-16">گزارش آزمون</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        

        
      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-4">
          <div class="container-sidebar-filter bg-gray px-2 py-3 br-10">
            <span class="font-16 color-dark d-block border-bottom border-2 text-center w-100 pb-3 mb-3">آزمون های من</span>

            <div class="sidebar-filter bg-white px-2 py-3 br-10 mh-200 overflow-auto" dir="ltr">
              <div dir="rtl" class="d-flex flex-column gap-2">
                <div v-for="lookup in lookupType" :key="lookup.Id">
                <div class="d-flex align-items-center">
                  <input class="form-check-input mt-0 ms-2" type="checkbox" :id="lookup.Id" :value="lookup.Id" v-model="checkedType">
                  <label class="form-check-label font-14" for="flexCheckDefault1">{{lookup.Value}}</label>
                </div>
                </div>
              </div>
            </div>

            

            <div class="sidebar-filter bg-white px-2 py-3 br-10 mh-200 overflow-auto mt-4" dir="ltr">
              <div dir="rtl" class="d-flex flex-column gap-2">
                <div v-for="lookup in lookupImportance" :key="lookup.Id">
                    <div class="d-flex align-items-center">
                  <input class="form-check-input mt-0 ms-2" type="checkbox" :id="lookup.Id" :value="lookup.Id" v-model="checkedImportance">
                  <label class="form-check-label font-14" for="flexCheckDefault10">{{lookup.Value}}</label>
                </div>
                </div>
              </div>
            </div>

            <div class="sidebar-filter bg-white px-2 py-3 br-10 mh-200 overflow-auto mt-4" dir="ltr">
              <div dir="rtl" class="d-flex flex-column gap-2">
                <div class="d-flex align-items-center">
                  <input class="form-check-input mt-0 ms-2" type="checkbox" :id="6" :value="6" v-model="checkedQuestionType">
                  <label class="form-check-label font-14" for="flexCheckDefault15">چندگزینه ای</label>
                </div>
                <div class="d-flex align-items-center">
                  <input class="form-check-input mt-0 ms-2" type="checkbox" :id="7" :value="7" v-model="checkedQuestionType">
                  <label class="form-check-label font-14" for="flexCheckDefault16">تشریحی</label>
                </div>
              </div>
            </div>

            <div>
              <div class="dropdown bg-white rounded mt-4">
                <button type="button" class="btn dropdown-toggle w-100 hidden-angle-dropdown border-0" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="justify-content-between align-items-center d-flex">
                    <span class="font-14">مرتب سازی بر اساس تاریخ</span>
                    <i class="fa-regular fa-angle-down pe-2 fs-6"></i>
                  </div>
                </button>
                <ul class="dropdown-menu text-end end-0 border-gray">
                  <li><a class="dropdown-item font-14" href="#">جدید به قدیمی</a></li>
                  <li><a class="dropdown-item font-14" href="#">قدیمی به جدید</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-8 col-lg-8 col-xl-9 col-xxl-10 mb-4">
          <div class="container-detail-course bg-gray br-10 p-2">
            <div class="modal fade" id="viewCourseModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content ">
                  <div class="modal-header d-flex justify-content-between border-0">
                    <div class="border-bottom pb-2 px-2">جزئیات آزمون</div>
                    <button type="button" class="btn-close bg-none m-0 p-0 w-auto" data-bs-dismiss="modal" aria-label="Close">
                      <span class="color-red">بازگشت</span>
                    </button>
                  </div>
                  <div class="modal-body py-0">
                      <div class="col-12 mb-2">
                        <div class="py-2 bg-gray br-10 text-center mb-4">مشخصات آزمون</div>

                        <div class="mb-4">
                          <span class="d-block color-blue w-100 font-12">نام آزمون:</span>
                          <span class="d-block w-100 font-14 fw-bold">{{this.modalData.Title}}</span>
                        </div>

                        <div class="">
                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">تاریخ ساخت:</span>
                            <span class="w-50 font-12">{{this.modalData.DateTimeCreate.split('T')[1].split(":")[0]}}:{{this.modalData.DateTimeCreate.split('T')[1].split(":")[1]}} {{this.modalData.DateTimeCreate.split('T')[0]}}</span>
                          </div>

                         

                         

                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">مدت آزمون:</span>
                            <span class="w-50 font-12">{{this.modalData.Time}} دقیقه</span>
                          </div>

                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">وضعیت آزمون:</span>
                            <span class="w-50 font-12">در حال برگزاری</span>
                          </div>

                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">اهمیت آزمون:</span>
                            <span class="w-50 font-12">{{this.modalData.Lookup_Importance.Value}}</span>
                          </div>
                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">نوع آزمون:</span>
                            <span class="w-50 font-12">{{this.modalData.Lookup_Type.Value}}</span>
                          </div>
                          <div class="d-flex mb-2">
                            <span class="color-blue w-50 font-12">نوع سوالات آزمون:</span>
                            <span class="w-50 font-12">{{this.modalData.Lookup_QuestionType.Value}}</span>
                          </div>
                          <div class="py-2 bg-gray br-10 text-center d-flex px-2 align-items-center">
                            <span>عملیات مرتبط با آزمون</span>

                            <a @click="runAssay(modalData.Id)" data-bs-dismiss="modal" style="cursor:pointer" class="color-dark me-auto px-1">
                              <i class="fa-solid fa-play-pause"></i>
                            </a>


                            <a @click="showPrint = true" style="cursor:pointer" class="color-dark px-1">
                              <i class="fa-solid fa-print"></i>
                            </a>
                            </div>
                            <div v-if="showPrint" class="py-2 bg-gray br-10 text-center d-flex px-2 align-items-center">
                            <q-list  highlight>      
        <q-item v-if="this.modalData.File1 != '' && this.modalData.File1 != null ">
          <q-item-main label="فایل 1" />
          <q-item-side right>
              <a
                  :href="this.modalData.AssayPdfPath1"
                  target="_blank"
                  class="q-mr-sm text-red"
                  
              >لینک دانلود فایل PDF </a>
          </q-item-side>
           <q-item-side right>
              <a
                  :href="this.modalData.AssayWordPath1"
                  target="_blank"
                  class="q-mr-sm"
              >لینک دانلود فایل WORD </a>
          </q-item-side>
        </q-item>
         <q-item v-if="this.modalData.File2 != ''&& this.modalData.File2 != null ">
          <q-item-main label="فایل 2" />
          <q-item-side right>
              <a
                  :href="this.modalData.AssayPdfPath2"
                  target="_blank"
                  class="q-mr-sm text-red"
                  
              >لینک دانلود فایل PDF </a>
          </q-item-side>
           <q-item-side right>
              <a
                  :href="this.modalData.AssayWordPath2"
                  target="_blank"
                  class="q-mr-sm"
              >لینک دانلود فایل WORD </a>
          </q-item-side>
        </q-item>
         <q-item v-if="this.modalData.File3 != ''&& this.modalData.File3 != null ">
          <q-item-main label="فایل 3" />
          <q-item-side right>
              <a
                  :href="this.modalData.AssayPdfPath3"
                  target="_blank"
                  class="q-mr-sm text-red"
                  
              >لینک دانلود فایل PDF </a>
          </q-item-side>
           <q-item-side right>
              <a
                  :href="this.modalData.AssayWordPath3"
                  target="_blank"
                  class="q-mr-sm"
              >لینک دانلود فایل WORD </a>
          </q-item-side>
        </q-item>
         <q-item v-if="this.modalData.File4 != ''&& this.modalData.File4 != null  ">
          <q-item-main label="فایل 4" />
          <q-item-side right>
              <a
                  :href="this.modalData.AssayPdfPath4"
                  target="_blank"
                  class="q-mr-sm text-red"
                  
              >لینک دانلود فایل PDF </a>
          </q-item-side>
           <q-item-side right>
              <a
                  :href="this.modalData.AssayWordPath4"
                  target="_blank"
                  class="q-mr-sm"
              >لینک دانلود فایل WORD </a>
          </q-item-side>
        </q-item>
      
    </q-list>
                          </div>
                         
                        </div>
                      </div>

                      

                  </div>
                  <div class="modal-footer border-0 pt-0">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
             <div v-for="assay in assays" :key="assay.Id">
              <div v-if="(checkedQuestionType.length === 0 || checkedQuestionType.some(data => data === assay.LookupId_QuestionType)) &&(checkedType.length === 0 || checkedType.some(data => data === assay.LookupId_Type)) &&(checkedImportance.length === 0 || checkedImportance.some(data => data === assay.LookupId_Importance))" class="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
                <div class="detail-course bg-gradient p-1 br-10">
                  <div class="bg-white d-flex flex-column p-1 br-10">
                    <span class="color-blue font-14 text-center">{{assay.Title}}</span>
                    <span class="color-blue font-12 text-center mt-1">{{assay.Lookup_Type.Value}}</span>
                  </div>
                  <div class="bg-white py-2 br-10 mt-1">
                    <div class="d-flex">
                      <div class="d-flex flex-column w-50 px-4 border-start">
                        <div class="d-flex gap-2 align-items-center">
                          <i class="fa-regular fa-seal-question font-16"></i>
                          <span class="font-12">{{assay.AssayQuestions.length}} سوال</span>
                        </div>
                        <div class="d-flex gap-2 align-items-center mt-4">
                          <i class="fa-regular fa-stopwatch font-16"></i>
                          <span class="font-12">{{assay.Time}} دقیقه</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column w-50 px-4">
                        <div class="d-flex gap-2 align-items-center">
                          <i class="fa-solid fa-layer-group font-16"></i>
                          <span class="font-12">{{assay.Lookup_Importance.Value}}</span>
                        </div>
                        <div class="d-flex gap-2 align-items-center mt-3">
                          <i class="fa-regular fa-calendar font-16"></i>
                          <div class="d-flex flex-column">
                            <span class="font-12">{{assay.DateTimeCreate.split('T')[0]}}</span>
                            <span class="font-12">{{assay.DateTimeCreate.split('T')[1].split(":")[0]}}:{{assay.DateTimeCreate.split('T')[1].split(":")[1]}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                      <div class="w-50 d-flex justify-content-center align-items-center gap-2">
                        <i class="fa-regular fa-calendar-pen font-16 color-green"></i>
                        <span class="font-12 color-green">در حال برگزاری</span>
                      </div>
                      <div class="w-50 d-flex justify-content-center">
                        <span class="font-12 text-white bg-green px-4 py-1 rounded-5">اجرای آزمون</span>
                      </div>
                    </div>
                  </div>
                  <div class="br-10 mt-1">
                    <button type="button" @click="setModalData(assay)" data-bs-toggle="modal" data-bs-target="#viewCourseModal" class="border-0 w-100 h-100 br-10 bg-none p-0">
                      <div class="d-flex justify-content-center align-items-center gap-3 py-2 br-10 bg-transparent">
                        <span class="font-16">مشاهده جزئیات آزمون</span>
                        <i class="fa-regular fa-eye font-16"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

             </div>
            </div>
          </div>
            

        </div>
      </div>
 </div>
</template>

<script>
import router from "src/router";
import axios from "src/plugins/axios";
import axiosQuestion from "src/plugins/axiosQuestion";
import { vxm } from "src/store";
import { LocalStorage } from "quasar";
import { assayStore } from "src/store/assayStore";

import { Notify } from 'quasar'

export default ({
 
    data() {
         return {
           assays:{},
           modalData:{
    "Id": 5,
    "Title": "آزمون تستی",
    "Time": 100,
    "LookupId_Importance": 1046,
    "Lookup_Importance": {
      "Id": 1046,
      "Name": "AssayImportance",
      "Value": "کم",
      "State": 0,
      "QuestionAnswers": [
        
      ],
      "Question_QuestionTypes": [
        
      ],
      "Question_QuestionHardnessTypes": [
        
      ],
      "Question_RepeatnessTypes": [
        
      ],
      "Question_AreaTypes": [
        
      ],
      "Question_AuthorTypes": [
        
      ],
      "Question_QuestionRanks": [
        
      ],
      "Topic_Hardnesses": [
        
      ],
      "Topic_AreaTypes": [
        
      ],
      "Lesson_Nezams": [
        
      ],
      "EducationTree_States": [
        
      ],
      "Assay_Importance": [
        {
          "Id": 5,
          "Title": "آزمون تستی",
          "Time": 100,
          "LookupId_Importance": 1046,
          "LookupId_Type": 1043,
          "Lookup_Type": {
            "Id": 1043,
            "Name": "AssayType",
            "Value": "ارزیابی",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "LookupId_QuestionType": 6,
          "Lookup_QuestionType": {
            "Id": 6,
            "Name": "QuestionType",
            "Value": "چند گزینه ای",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "IsPublic": false,
          "IsOnline": true,
          "UserId": 2,
          "User": null,
          "DateTimeCreate": "2643-01-16T13:02:18.377",
          "NumberOfVarient": 1,
          "File1": "0261f27c-ca56-47ef-b8b0-4286e8757fe4",
          "File2": null,
          "File3": null,
          "File4": "",
          "QuestionsFile1": null,
          "QuestionsFile2": null,
          "QuestionsFile3": null,
          "QuestionsFile4": "1;4;3;4;2;1",
          "QuestionsAnswer1": null,
          "QuestionsAnswer2": null,
          "QuestionsAnswer3": null,
          "QuestionsAnswer4": "1",
          "Lessons": [
            
          ],
          "AssayQuestions": [
            
          ],
          "AssayAnswerSheets": [
            
          ],
          "AssaySchedules": [
            
          ],
          "Packages": [
            
          ]
        }
      ],
      "Assay_Type": [
        
      ],
      "Assay_QuestionType": [
        
      ],
      "ProgramItem_Name": [
        
      ],
      "Media_Type": [
        
      ]
    },
    "LookupId_Type": 1043,
    "Lookup_Type": {
      "Id": 1043,
      "Name": "AssayType",
      "Value": "ارزیابی",
      "State": 0,
      "QuestionAnswers": [
        
      ],
      "Question_QuestionTypes": [
        
      ],
      "Question_QuestionHardnessTypes": [
        
      ],
      "Question_RepeatnessTypes": [
        
      ],
      "Question_AreaTypes": [
        
      ],
      "Question_AuthorTypes": [
        
      ],
      "Question_QuestionRanks": [
        
      ],
      "Topic_Hardnesses": [
        
      ],
      "Topic_AreaTypes": [
        
      ],
      "Lesson_Nezams": [
        
      ],
      "EducationTree_States": [
        
      ],
      "Assay_Importance": [
        
      ],
      "Assay_Type": [
        {
          "Id": 5,
          "Title": "آزمون تستی",
          "Time": 100,
          "LookupId_Importance": 1046,
          "Lookup_Importance": {
            "Id": 1046,
            "Name": "AssayImportance",
            "Value": "کم",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "LookupId_Type": 1043,
          "LookupId_QuestionType": 6,
          "Lookup_QuestionType": {
            "Id": 6,
            "Name": "QuestionType",
            "Value": "چند گزینه ای",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "IsPublic": false,
          "IsOnline": true,
          "UserId": 2,
          "User": null,
          "DateTimeCreate": "2643-01-16T13:02:18.377",
          "NumberOfVarient": 1,
          "File1": "0261f27c-ca56-47ef-b8b0-4286e8757fe4",
          "File2": null,
          "File3": null,
          "File4": "",
          "QuestionsFile1": null,
          "QuestionsFile2": null,
          "QuestionsFile3": null,
          "QuestionsFile4": "1;4;3;4;2;1",
          "QuestionsAnswer1": null,
          "QuestionsAnswer2": null,
          "QuestionsAnswer3": null,
          "QuestionsAnswer4": "1",
          "Lessons": [
            
          ],
          "AssayQuestions": [
            
          ],
          "AssayAnswerSheets": [
            
          ],
          "AssaySchedules": [
            
          ],
          "Packages": [
            
          ]
        }
      ],
      "Assay_QuestionType": [
        
      ],
      "ProgramItem_Name": [
        
      ],
      "Media_Type": [
        
      ]
    },
    "LookupId_QuestionType": 6,
    "Lookup_QuestionType": {
      "Id": 6,
      "Name": "QuestionType",
      "Value": "چند گزینه ای",
      "State": 0,
      "QuestionAnswers": [
        
      ],
      "Question_QuestionTypes": [
        
      ],
      "Question_QuestionHardnessTypes": [
        
      ],
      "Question_RepeatnessTypes": [
        
      ],
      "Question_AreaTypes": [
        
      ],
      "Question_AuthorTypes": [
        
      ],
      "Question_QuestionRanks": [
        
      ],
      "Topic_Hardnesses": [
        
      ],
      "Topic_AreaTypes": [
        
      ],
      "Lesson_Nezams": [
        
      ],
      "EducationTree_States": [
        
      ],
      "Assay_Importance": [
        
      ],
      "Assay_Type": [
        
      ],
      "Assay_QuestionType": [
        {
          "Id": 5,
          "Title": "آزمون تستی",
          "Time": 100,
          "LookupId_Importance": 1046,
          "Lookup_Importance": {
            "Id": 1046,
            "Name": "AssayImportance",
            "Value": "کم",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "LookupId_Type": 1043,
          "Lookup_Type": {
            "Id": 1043,
            "Name": "AssayType",
            "Value": "ارزیابی",
            "State": 0,
            "QuestionAnswers": [
              
            ],
            "Question_QuestionTypes": [
              
            ],
            "Question_QuestionHardnessTypes": [
              
            ],
            "Question_RepeatnessTypes": [
              
            ],
            "Question_AreaTypes": [
              
            ],
            "Question_AuthorTypes": [
              
            ],
            "Question_QuestionRanks": [
              
            ],
            "Topic_Hardnesses": [
              
            ],
            "Topic_AreaTypes": [
              
            ],
            "Lesson_Nezams": [
              
            ],
            "EducationTree_States": [
              
            ],
            "Assay_Importance": [
              
            ],
            "Assay_Type": [
              
            ],
            "Assay_QuestionType": [
              
            ],
            "ProgramItem_Name": [
              
            ],
            "Media_Type": [
              
            ]
          },
          "LookupId_QuestionType": 6,
          "IsPublic": false,
          "IsOnline": true,
          "UserId": 2,
          "User": null,
          "DateTimeCreate": "2643-01-16T13:02:18.377",
          "NumberOfVarient": 1,
          "File1": "0261f27c-ca56-47ef-b8b0-4286e8757fe4",
          "File2": null,
          "File3": null,
          "File4": "",
          "QuestionsFile1": null,
          "QuestionsFile2": null,
          "QuestionsFile3": null,
          "QuestionsFile4": "1;4;3;4;2;1",
          "QuestionsAnswer1": null,
          "QuestionsAnswer2": null,
          "QuestionsAnswer3": null,
          "QuestionsAnswer4": "1",
          "Lessons": [
            
          ],
          "AssayQuestions": [
            
          ],
          "AssayAnswerSheets": [
            
          ],
          "AssaySchedules": [
            
          ],
          "Packages": [
            
          ]
        }
      ],
      "ProgramItem_Name": [
        
      ],
      "Media_Type": [
        
      ]
    },
    "IsPublic": false,
    "IsOnline": true,
    "UserId": 2,
    "DateTimeCreate": "2643-01-16T13:02:18.377",
    "NumberOfVarient": 1,
    "File1": "0261f27c-ca56-47ef-b8b0-4286e8757fe4",
    "AssayPdfPath1": "http://localhost:63839/Api/Assay/GetPdfFile/0261f27c-ca56-47ef-b8b0-4286e8757fe4",
    "AssayWordPath1": "http://localhost:63839/Api/Assay/GetWordFile/0261f27c-ca56-47ef-b8b0-4286e8757fe4",
    "File2": null,
    "AssayPdfPath2": "http://localhost:63839/Api/Assay/GetPdfFile/",
    "AssayWordPath2": "http://localhost:63839/Api/Assay/GetWordFile/",
    "File3": null,
    "AssayPdfPath3": "http://localhost:63839/Api/Assay/GetPdfFile/",
    "AssayWordPath3": "http://localhost:63839/Api/Assay/GetWordFile/",
    "File4": "",
    "AssayPdfPath4": "http://localhost:63839/Api/Assay/GetPdfFile/",
    "AssayWordPath4": "http://localhost:63839/Api/Assay/GetWordFile/",
    "QuestionsFile": [
      
    ],
    "QuestionsAnswer": [
      
    ],
    "QuestionsPath": null,
    "AssayQuestions": [
      
    ]
           },
            showPrint: false,
            lookupType:{},
            lookupImportanceType:{},
            checkedImportance:[],
            checkedType:[],
            checkedQuestionType:[],
            assayStore : vxm.assayStore
         }
    },
    methods:{
       getAllAssays()
       {
          axios.get('/api/assay/GetUserAssays').then((response) => {
            console.log(response.data);
            this.assays = response.data;
            
           
         });  
       },
        getAllLookup()
       {
          axiosQuestion.get('/api/Lookup/GetAllAssayType').then((response) => {
            this.lookupType = response.data;
         });  
         axiosQuestion.get('/api/Lookup/GetAllAssayImportance').then((response) => {
            this.lookupImportance = response.data;
         }); 
       },
       setModalData(data)
       {
        console.log(this.checkedImportance);
        this.showPrint = false;
        this.modalData = data;
       },
       showMod()
       {
        this.showModal = true;
        console.log(this.showModal);
       },
       runAssay(id){
    this.assayStore.getById(id);
    router.push("/assay/runAssay");

  
  }
       
    },
    mounted()
    {
      this.getAllAssays();
      this.getAllLookup();
    }
})
</script>
<style>
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('../../css/fonts/iran-sans-fa-num.woff2') format('woff2'),
    url('../../css/fonts/iran-sans-fa-num.woff') format('woff');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    src: url('../../css/fonts/iran-sans-fa-num-bold.woff2') format('woff2'),
    url('../../css/fonts/iran-sans-fa-num.woff') format('woff');
}

body {
    font-family: "IRANSans" !important;
}
     @import '../../css/dashboard/styles/exam.css';
</style>

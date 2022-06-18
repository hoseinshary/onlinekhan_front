<template>
    
    <div class="container">
        <!-- Button trigger modal -->
<button type="button" @click="createStudent" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    افزودن دانش آموز
</button>

<!-- Modal -->
<div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">{{modalTitle}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <input id="modalName" style="margin-bottom:5px"  class="form-control rounded" v-model="modalName" placeholder="نام"/>
          <input id="modalFamily" style="margin-bottom:5px"  class="form-control rounded" v-model="modalFamily"  placeholder="نام خانوادگی"/>
           <input type="file" id="modalImage" name="avatar" accept="image/png, image/jpeg"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">بستن</button>
        <button type="button" @click="submitModal" data-dismiss="modal" class="btn btn-primary">اتمام</button>
      </div>
    </div>
  </div>
</div>
  <input style="margin-bottom:5px" v-model="filters.searchStudentTextValue" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>عکس</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in filtered_students" :key="student.id">
                    <td>{{student.User.Name}} </td>
                   <td>{{student.User.Family}} </td>
                   <td><img :src="student.User.UserPicturePath" style="width:120px;height:120px"/></td>
                   <td><button class="btn btn-danger" @click="deleteStudent(student.Id)" >حذف</button>
                   <button class="btn btn-info" @click="updateStudent(student.Id)" data-toggle="modal" data-target="#exampleModal">ویرایش</button></td>
                   
                </tr>
            </tbody>
        </table>
    </div>
        
</template>

<script>
import axios from "src/plugins/axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default {
   
    data() {
       return {
           filters:{
                searchStudentTextValue: ''
            },
        searchModel: "",
        students:{},
        modalName:"", 
        modalFamily:"",
        modalTitle:"اضافه کردن دانش آموز", 
        inCreate: true
    }
    },
    methods:{
        deleteStudent(k)
        {
           // axios.post(`/api/student/Delete/`+k)
      //.then(response => {
         //     this.students = response.data;
         //     console.log(response.data);
     // });
     console.log(k);
        },
        createStudent()
        {
        this.modalTitle="افزودن دانش آموز";
        this.modalName = "";
        this.modalFamily = "";
        this.inCreate = true;
        },
        updateStudent(k)
        {
           // axios.post(`/api/student/Delete/`+k)
      //.then(response => {
         //     this.students = response.data;
         //     console.log(response.data);
     // });
        this.modalTitle="ویرایش";
        this.modalName = this.students[k].User.Name;
        this.modalFamily = this.students[k].User.Family;
        this.inCreate = false;
     console.log(k);
        },
        submitModal()
        {
            if(this.inCreate)
            {
                console.log("Create")
                // axios.post(`/api/student/Create/`+values)
      //.then(response => {
         //     this.students = response.data;
         //     console.log(response.data);
     // });
            }
            else
            {
                // axios.post(`/api/student/Update/`+k)
      //.then(response => {
         //     this.students = response.data;
         //     console.log(response.data);
     // });
            }
        },
        getStudents()
        {
            axios.get(`/api/student/GetAll`)
      .then(response => {
              this.students = response.data;
              console.log(response.data);
      });
        }
    },
     
    computed: {
        filtered_students(){
            let vm = this;
            if(!vm.filters.searchStudentTextValue){
                return this.students;
            }
            return vm.students.filter(student => {
                return student.User.FullName.indexOf(vm.filters.searchStudentTextValue) != -1
            })
        }
    },
    mounted() {
        this.getStudents()
    }
};
</script>
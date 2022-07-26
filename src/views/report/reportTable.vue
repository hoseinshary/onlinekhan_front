
<template>
  <div>
    <template> 
      {{makeVisible()}}
        <slot>
            <div v-if="filterObjects.length >= 1" class="m-3">
      فیلترهای اعمال شده:
      <div class="font-12 c-gray">
        (در صورت تمایل به مشاهده ستون مربوط به فیلتر در جدول فیلتر مربوطه را
        روشن نمایید)
      </div>
      <div class="m-3 mt-4 mb-4 filtersContainer">
        <div
          v-for="(item, index) in filterObjects"
          :key="index"
          class="font-12"
        >
          <q-toggle
            v-model="visibleColumns"
            :val="item.id"
            :label="item.title"
            class="mt-2"
          />
          {{makeVisible()}}
        </div>
      </div>
    </div>
    <div v-else>فیلتری اعمال نشده است</div>
    </slot>
      </template>
    <!-- <div id="q-app"> -->
    <div class="q-pa-md">
      <div v-if="icon ==='ok'">
      <base-table :grid-data="gridData" :columns="columns">      
      
      <template slot="Id" slot-scope="data">
        <q-btn
          class="q-ma-sm"
          size="sm"
          round
          color="blue"
          icon="print"
          @click="open(data.row.Id)"
        >
          <q-tooltip>مشاهده سوال</q-tooltip>
        </q-btn>
      </template>
    </base-table>
    </div>
    <div v-else>
      <base-table :grid-data="gridData" :columns="columns"></base-table>   
    </div>
    </div>
     <bs-modal
        :show="showModal"
        size="lg"
        @open="showModal"
        @close="close"
      >
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
            <div class="text-white">
              مشاهده سوال و پاسخ 
            </div>
            <div class="text-white">
              <q-btn dense icon="close" @click="close()" />
            </div>
          </div>
        </template>
        
        <template >
          <div class="mt-4">
        سوال
        {{this.id}}
        :
        در این قسمت صورت سوال را مشاهده میفرمایید.
        <br/>
        در این قسمت پاسخ سوال را مشاهده میفرمایید.
        
        </div>
        </template>
        
        <template slot="footer">
          <base-btn-back @click="close()"></base-btn-back>
        </template>
      </bs-modal>
  </div>
  
</template>
<script>
import internal from 'stream';

export default {
  props: {
    filterObjects: {
      type: Array,
      default: () => [{ title: "default" }]
    },
    columns:{
      type: Array,
      default: () => [{ title: "default" }]
    },
    gridData:{
      type: Array,
      default: () => [{ title: "default" }]
    },
    defaultColumnsLength:{
      type: Int16Array
    },
    icon:{
      type: String
    }
  },
  data() {
    return {
      show: false,
      showModal: false,
      closeModal:true,
      openModal:false,
      visible: false,
      visibleColumns:[]
    };
  },
  methods: {
    addFilters(filterObjects) {
      for (let i = 0; i < filterObjects.length; i++) {
         let col = {
          id:i+this.columns.length,
          data: "",
          title: "",
          sortable: true,
          align: "center",
          visible:true
        };
        (col.data = filterObjects[i].id),
          (col.title = filterObjects[i].title),
          this.columns.push(col);
      }
  
    },

    log(data) {
      console.log(data, "************filterObjects");
    },
    close(){
      this.closeModal = true;
      this.showModal = false;
    },
    open(id){
      this.showModal = true;
      this.openModal = true;
      this.id = id;
      this.closeModal = false;
    },
    makeVisible(){
      for(let i=this.defaultColumnsLength;i<this.columns.length;i++){
        this.columns[i].visible=false
      }
      for(let i=this.defaultColumnsLength;i<this.columns.length;i++){
        for(let j=0;j<this.visibleColumns.length;j++){
          if(this.columns[i].id === this.visibleColumns[j]){
              this.columns[i].visible = true
          }
        }
      }
    }
  },
 
  updated(){
    makeVisible()
  }
};
// });
</script>
<style scoped>
.filtersContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
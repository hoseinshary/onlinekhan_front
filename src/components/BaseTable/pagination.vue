<template>
  <section class="col-sm-7">
    <q-pagination :max="max"
                  v-model="page"
                  :max-pages="perPage"
                  @input='$emit("onPaginationChange", $event)' 
                  class="paginationCss"
                  />
  </section>
</template>

<script>
export default {
  props: {
    totalRows: {
      type: Number
    },
    perPage: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  data() {
    return {
      page: 1
    };
  },
  watch: {
    currentPage(newVal, oldVal) {
      this.page = newVal;
    }
  },
  computed: {
    max() {
      let m = Math.ceil(this.totalRows / this.perPage);
      if (m < 1) m = 1;
      return m;
    }
  }
};
</script>
<style scoped>
.paginationCss{
  width:10%;
  margin-top: 10px;
  margin-right: 5px;
}
</style>>

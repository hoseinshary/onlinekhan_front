<template>
  <form @submit.prevent="submit">
    <bs-modal
      :show="show"
      :center="center"
      :size="size"
      @open="$emit('open')"
      @close="$emit('close')"
    >
      <template slot="header">
        <q-toolbar slot="header" color="blue-8" text-color>
          <q-toolbar-title>
            ویرایش
            <span class="text-orange">{{title}}</span>
          </q-toolbar-title>
          <q-btn dense icon="close" @click="$emit('close')"/>
        </q-toolbar>
      </template>

      <slot></slot>

      <template slot="footer">
        <base-btn-edit></base-btn-edit>
        <base-btn-clear @click="$emit('reset')"></base-btn-clear>
        <base-btn-back @click="$emit('close')"></base-btn-back>
      </template>
    </bs-modal>
  </form>
</template>

<script>
export default {
  /**
   * props
   */
  props: {
    title: String,
    size: String,
    center: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  /**
   * methods
   */
  methods: {
    submit() {
      this.$emit("confirm", false);
    }
  }
};
</script>

<style>
</style>


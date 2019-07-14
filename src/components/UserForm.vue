<template>
  <form class="py-3">
    <div v-for="(val, key) in list" :key="key" class="form-group">
      <label :for="key">{{ key | toUppercase }}</label>
      <input :id="key" type="email" class="form-control" :placeholder="val" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  filters: {
    toUppercase: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <section class="page-home py-5">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <img alt="Vue logo" src="@/assets/logo.png" />
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div v-cloak class="wrapper">
    <nprogress-container></nprogress-container>
    <header class="page-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">Vue course</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" class="nav-item" to="/">
              <a class="nav-link">Главная</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/users">
              <a class="nav-link">Пользователи</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/about">
              <a class="nav-link">О курсе</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  components: {
    NprogressContainer
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
[v-cloak] {
  display: none;
}
#nprogress .bar {
  background: $white;
}
</style>

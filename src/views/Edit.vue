<template>
  <section class="page-users py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <spinner v-if="!haveUser" />
          <template v-else>
            <user-form :list="user" />
            <button class="btn btn-primary" type="button" @click="saveUser">Сохранить</button>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

import Spinner from '@/components/Spinner.vue'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Edit',
  components: {
    Spinner,
    UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    restUrl() {
      return `//localhost:3004/users/${this.id}`
    },
    haveUser() {
      return !!this.user
    }
  },
  created() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.restUrl)
        .then(user => {
          this.user = user.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    saveUser() {
      axios
        .patch(this.restUrl, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

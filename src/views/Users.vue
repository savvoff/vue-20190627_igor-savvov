<template>
  <section class="page-users py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <spinner v-if="!haveUsers" />
          <users-list v-else :list="users" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

import Spinner from '@/components/Spinner.vue'
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users',
  components: {
    Spinner,
    UsersList
  },
  data: () => ({
    users: []
  }),
  computed: {
    haveUsers() {
      return this.users.length > 0
    }
  },
  watch: {
    users() {
      console.log('Вызван watch для users. this:', this.users)
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('//localhost:3004/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<template>
  <table class="table table-bordered">
    <caption>
      Всего пользователей:
      {{
        totalUsers
      }}
    </caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in list" :key="user.id">
        <th scope="row">
          <router-link :to="'/users/' + user.id"> #{{ user.id + 1 }} </router-link>
        </th>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.isActive }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalUsers() {
      return this.list.length
    }
  }
}
</script>

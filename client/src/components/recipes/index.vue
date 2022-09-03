<template>
  <nav>
    <router-link v-if="loggedIn || true" to="/addDrink">add drink</router-link
    ><br />
    <router-link v-if="loggedIn || true" to="/editDrink">edit drink</router-link
    ><br />
  </nav>
  <router-view />
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'login',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      successful: false,
      loading: false,
      message: '',
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
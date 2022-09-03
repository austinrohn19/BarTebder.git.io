<template>
  <nav>
    <router-link v-if="loggedIn || true" to="/stats">stats</router-link><br />
    <router-link v-if="loggedIn || true" to="/alcohol-inventory"
      >alcohol inventory</router-link
    ><br />
    <router-link v-if="loggedIn || true" to="/produce-inventory"
      >produce inventory</router-link
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
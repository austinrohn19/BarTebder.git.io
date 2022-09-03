<template>
  <nav>
    <router-link to="/">Home </router-link> |
    <router-link v-if="loggedIn || true" to="/dashboard">Dashboard </router-link>
    <router-link v-if="loggedIn || true" to="/bar">My Bar </router-link>
    <router-link v-if="loggedIn || true" to="/cabniet">My Cabniet </router-link>
    <router-link v-if="loggedIn || true" to="/recipes">My Recipes </router-link>
    <router-link v-if="loggedIn || true" to="/scales">My Scales </router-link>
    <router-link v-if="loggedIn || true" to="/servers">My Servers </router-link>
    <router-link v-if="loggedIn || true" to="/summary">Summary </router-link> 
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
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {},
  methods: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

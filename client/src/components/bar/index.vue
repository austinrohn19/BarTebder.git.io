<template>
  <nav>
    <router-link v-if="loggedIn || true" to="/counter">counter</router-link
    ><br />
    <router-link v-if="loggedIn || true" to="/fridges">fridges</router-link
    ><br />
    <router-link v-if="loggedIn || true" to="/shelfs">shelfs</router-link><br />
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
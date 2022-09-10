<template>
  <div class="card bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data.name }}
      </h2>
      <div tabindex="0" class="collapse collapse-arrow bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">Ingredents</div>
        <div class="collapse-content">
          <div v-for="ingredent in data.ingredents" :key="ingredent">
            <span>{{ ingredent.name }} | {{ ingredent.amount }}</span>
          </div>
        </div>
      </div>
      <div class="card-actions justify-end">
        {{ data.instructions }}
      </div>
    </div>
  </div>
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
  props: {
    data: Object,
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
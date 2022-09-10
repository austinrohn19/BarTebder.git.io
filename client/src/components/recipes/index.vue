<template>
  <div>
    <button class="btn">Add Drink</button>
    <section>
      <div
        class="
          relative
          items-center
          w-full
          px-5
          py-12
          mx-auto
          md:px-12
          lg:px-24
          max-w-7xl
        "
      >
        <div class="grid w-full grid-cols-1 gap-1 mx-auto lg:grid-cols-4">
          <div class="p-6" v-for="drink in drinks" :key="drink">
            <drink-card :data="drink"></drink-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import drinkCard from './drink.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'login',
  components: {
    Form,
    Field,
    ErrorMessage,
    drinkCard,
  },
  data() {
    return {
      successful: false,
      loading: false,
      message: '',
      drinks: [
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
        {
          name: 'moscow mule',
          ingredents: [
            { name: 'apple', amount: '1 slice' },
            { name: 'whisky', amount: '8 oz' },
            { name: 'gin', amount: '2 oz' },
          ],
          instructions: 'add it all together and SHAKE!',
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
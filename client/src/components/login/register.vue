<template>
  <section>
    <div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 sm:px-10">
          <a
            type="submit"
            class="
              btn
              flex
              items-center
              justify-center
              w-full
              text-base
              font-medium
              text-center text-white
              transition
              ease-in-out
              transform
              rounded-xl
            "
            href="register"
          >
            Register
          </a>
          <h1
            class="
              flex
              items-center
              justify-center
              w-full
              text-base
              font-medium
              text-center text-white
              transition
              ease-in-out
              transform
              rounded-xl
            "
          ></h1>
          <Form @submit="handleRegister">
            <div v-if="!successful">
              <div class="form-group mt-1">
                <Field
                  name="username"
                  type="text"
                  placeholder="username"
                  class="
                    input input-bordered
                    w-full
                    max-w-xs
                    w-full
                    text-base text-neutral-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border border-transparent
                    rounded-lg
                    bg-gray-50
                  "
                />
              </div>
              <div class="form-group mt-1">
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  class="
                    input input-bordered
                    w-full
                    max-w-xs
                    w-full
                    text-base text-neutral-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border border-transparent
                    rounded-lg
                    bg-gray-50
                  "
                />
              </div>
              <div class="form-group mt-1">
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  class="
                    input input-bordered
                    w-full
                    max-w-xs
                    w-full
                    text-base text-neutral-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border border-transparent
                    rounded-lg
                    bg-gray-50
                  "
                />
              </div>
              <div class="form-group mt-1">
                <button class="btn btn-primary btn-block" :disabled="loading">
                  Sign Up
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'register',
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
  mounted() {
    if (this.loggedIn) {
      console.log('I AM LOGGED IN');
      //this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = '';
      this.successful = false;
      this.loading = true;
      this.$store.dispatch('auth/register', user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
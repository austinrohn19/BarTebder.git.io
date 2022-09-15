<template>
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
      <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
        <div class="p-6">
          <div>
            <input type="text" placeholder="DrinkName" v-model="drink.name" />
          </div>
          <span>
            <div class="flex justify-center mt-8">
              <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                <div class="m-4">
                  <label class="inline-block mb-2 text-gray-500"
                    >Upload Image(jpg,png,svg,jpeg)</label
                  >
                  <div class="flex items-center justify-center w-full">
                    <label
                      class="
                        flex flex-col
                        w-full
                        h-32
                        border-4 border-dashed
                        hover:bg-gray-100 hover:border-gray-300
                      "
                    >
                      <div
                        class="flex flex-col items-center justify-center pt-7"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="
                            w-12
                            h-12
                            text-gray-400
                            group-hover:text-gray-600
                          "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <p
                          class="
                            pt-1
                            text-sm
                            tracking-wider
                            text-gray-400
                            group-hover:text-gray-600
                          "
                        >
                          Select a photo
                        </p>
                      </div>
                      <input type="file" class="opacity-0" />
                    </label>
                  </div>
                </div>
                <div class="flex p-2 space-x-4">
                  <button
                    class="px-4 py-2 text-white bg-red-500 rounded shadow-xl"
                  >
                    Cannel
                  </button>
                  <button
                    class="px-4 py-2 text-white bg-green-500 rounded shadow-xl"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </span>
          <div class="pt-10">
            <div class="overflow-y-auto h-70">
              <table class="table table-compact w-full">
                <!-- head -->
                <thead>
                  <tr>
                    <th>ingredent</th>
                    <th>amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in drink.ingredents" :key="item">
                    <td>
                      <input
                        @focus="mAddMoreIngredients"
                        type="text"
                        v-model="item.name"
                        placeholder="Name"
                      />
                    </td>
                    <td>
                      <input
                        @focus="mAddMoreIngredients"
                        type="text"
                        v-model="item.amount"
                        placeholder="amount"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="p-6">
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
              <div
                class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2"
              >
                <div class="p-6">
                  <div class="">
                    <table class="table w-50">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th>Tool</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(tool, index) in tools" :key="tool">
                          <th>
                            <input
                              type="text"
                              v-model="tool.name"
                              placeholder="tool name"
                              @focus="mAddMoreTools(index)"
                            />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="p-6">
                  <input type="text" placeholder="desc" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
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
  props: { drinkToEdit: Object },
  data() {
    return {
      successful: false,
      loading: false,
      message: '',
      drink: { ingredents: [{ name: '', amount: '' }] },
      tools: [{ name: '' }],
    };
  },
  computed: {},
  mounted() {
    console.log(this.drinkToEdit);
  },
  methods: {
    mAddMoreIngredients() {
      //if (this.drink.ingredents[this.drink.ingredents.length - 1].name != '') {
      this.drink.ingredents.push({ name: '', amount: '' });
      //}
    },
    mAddMoreTools() {
      // if (this.tools[this.tools.length - 1].name != '') {
      this.tools.push({ name: '', desc: '' });
      //}
    },
  },
};
</script>
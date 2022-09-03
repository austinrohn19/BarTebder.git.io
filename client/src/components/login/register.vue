<template>
  <section class="registration">
    <div
      class="flex flex-col justify-center min- py-5 sm:px-6 lg:px-12 max-width"
    >
      <div>
        <div class="">
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
            Bar-Tender Registration
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
            <div class="grid grid-cols-2 gap-4">
              <div id="username-container">
                <div
                  class="
                    flex flex-col
                    justify-center
                    drop-shadow-lg
                    border-solid border-2 border-black-200
                    rounded-lg
                    py-8
                    sm:px-8
                    lg:px-8
                  "
                  style="background-color: #dbdbdb"
                >
                  <div class="form-group mt-1">
                    <Field
                      name="username"
                      type="text"
                      placeholder="Username"
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
                      placeholder="Password"
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
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
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
                  <div class="barinfo text-xl text-left italic mt-5 font-bold">
                    <h8>Company Logo</h8>
                  </div>

                  <div
                    class="
                      flex flex-col
                      items-center
                      justify-center
                      py-5
                      text-base
                      transition
                      duration-500
                      ease-in-out
                      transform
                      drop-shadow-lg
                      bg-#dbdbdb
                      border-3 border-#6e6e6e border-dashed
                      rounded-lg
                      text-blueGray-500
                      focus:border-blue-500
                      focus:outline-none
                      focus:shadow-outline
                      focus:ring-2
                      ring-offset-current ring-offset-2
                    "
                  >
                    <p
                      class="
                        flex flex-wrap
                        justify-center
                        mb-3
                        text-base
                        leading-7
                        text-blueGray-500
                      "
                    >
                      <span>Drag and drop your</span>&nbsp;<span
                        >files anywhere or</span
                      >
                    </p>
                    <button
                      class="
                        w-auto
                        px-2
                        py-1
                        my-2
                        mr-2
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-2 border-black
                        rounded-md
                        text-blueGray-500
                        hover:text-blueGray-600
                        text-md
                        focus:shadow-outline focus:outline-none focus:ring-2
                        ring-offset-current ring-offset-2
                        hover:bg-blueGray-100
                      "
                    >
                      Upload Logo
                    </button>
                  </div>
                </div>
              </div>
              <div id="addressContainer">
                <div
                  class="
                    justify-center
                    drop-shadow-lg
                    border-solid border-2 border-black-200
                    rounded-lg
                    py-8
                    sm:px-8
                    lg:px-8
                    grid grid-flow-row-dense grid-cols-3 grid-rows-5
                  "
                  style="background-color: #dbdbdb"
                >
                  <div class="form-group mt-1 col-span-3">
                    <Field
                      name="Name"
                      type="text"
                      placeholder="Name"
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

                  <div class="form-group mt-1 col-span-3">
                    <Field
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
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

                  <div class="form-group mt-1 col-span-3">
                    <Field
                      name="street"
                      type="text"
                      placeholder="Street"
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

                  <div class="form-group mt-1 mr-1">
                    <Field
                      name="city"
                      type="text"
                      placeholder="City"
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

                  <div class="form-group mt-1 mr-1">
                    <select
                      name="state"
                      id="state"
                      placeholder="State"
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
                    >
                      <option value="select state">Select State</option>
                      <option
                        v-for="item in states"
                        :key="item"
                        :value="item.value"
                      >
                        {{ item.text }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group mt-1">
                    <Field
                      name="zipCode"
                      type="number"
                      placeholder="Zip Code"
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

                  <div class="form-group mt-1 col-span-3">
                    <select
                      name="country"
                      id="country"
                      placeholder="Country"
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
                    >
                      <option value="select country">select Country</option>
                      <option
                        v-for="item in countries"
                        :key="item"
                        :value="item.value"
                      >
                        {{ item.text }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div id="contactInformationContainer">
                <div class="Contact text-xl text-left italic mt-5 font-bold">
                  <h4>Contact Information</h4>
                </div>

                <div>
                  <div
                    class="
                      flex flex-col
                      justify-center
                      drop-shadow-lg
                      border-solid border-2 border-black-200
                      rounded-lg
                      py-8
                      sm:px-8
                      lg:px-8
                    "
                    style="background-color: #dbdbdb"
                  >
                    <div class="form-group mt-1">
                      <Field
                        name="Name"
                        type="text"
                        placeholder="Full Name"
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
                        placeholder="Email"
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
                        name="number"
                        type="number"
                        placeholder="Phone Number"
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
                  </div>
                </div>
              </div>
              <div id="barInformation">
                <div class="barinfo text-xl text-left italic mt-5 font-bold">
                  <h5>Bar Information</h5>
                </div>

                <div
                  class="
                    justify-center
                    drop-shadow-lg
                    border-solid border-2 border-black-200
                    rounded-lg
                    py-8
                    sm:px-8
                    lg:px-8
                    grid grid-flow-row-dense grid-cols-4 grid-rows-4
                  "
                  style="background-color: #dbdbdb"
                >
                  <div class="form-group mt-1 col-span-4">
                    <select
                      name="barType"
                      id="barType"
                      placeholder="Type of Bar"
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
                    >
                      <option>Select Bar Type</option>
                      <option
                        v-for="item in barTypes"
                        :key="item"
                        :value="item.value"
                      >
                        {{ item.text }}
                      </option>
                    </select>
                  </div>

                  <div class="ledLights mt-1 col-span-2 text-left">
                    <input
                      type="checkbox"
                      id="LED lights"
                      name="LED Lights"
                      value="Unlock Key"
                    />
                    <label for="LED Lights"> LED Lights</label>
                  </div>

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Key"
                      type="text"
                      placeholder="Key (font Awesome Key?)"
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

                  <div class="POS mt-1 col-span-2 text-left">
                    <input
                      type="checkbox"
                      id="POS"
                      name="POS"
                      value="POS brand Registration"
                    />
                    <label for="POS"> POS Intergration</label>
                  </div>

                  <div class="form-group mt-1 col-span-2">
                    <select
                      name="POS"
                      id="POS"
                      placeholder="POS Brand Registration"
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
                    >
                      <option>POS Brand</option>
                      <option
                        v-for="item in posSystems"
                        :key="item"
                        :value="item.value"
                      >
                        {{ item.text }}
                      </option>
                    </select>
                  </div>

                  <div class="vender mt-1 mb-1 col-span-2 text-left">
                    <input
                      type="checkbox"
                      id="Vender Intergration"
                      name="vender"
                      value="vender"
                    />
                    <label for="vender"> Vender Intergration</label>
                  </div>

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Vender Intergration"
                      type="Text"
                      placeholder="Key"
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
                </div>
              </div>
              <div id="uploadInvInformation">
                <div class="barinfo text-xl text-left italic mt-5 font-bold">
                  <h7>Upload Inventory Information</h7>
                </div>

                <div
                  class="
                    flex flex-col
                    items-center
                    justify-center
                    py-5
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    drop-shadow-lg
                    bg-#dbdbdb
                    border-3 border-#6e6e6e border-dashed
                    rounded-lg
                    text-blueGray-500
                    focus:border-blue-500
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    ring-offset-current ring-offset-2
                  "
                >
                  <p
                    class="
                      flex flex-wrap
                      justify-center
                      mb-3
                      text-base
                      leading-7
                      text-blueGray-500
                    "
                  >
                    <span>Drag and drop your</span>&nbsp;<span
                      >files anywhere or</span
                    >
                  </p>
                  <button
                    class="
                      w-auto
                      px-2
                      py-1
                      my-2
                      mr-2
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-black
                      rounded-md
                      text-blueGray-500
                      hover:text-blueGray-600
                      text-md
                      focus:shadow-outline focus:outline-none focus:ring-2
                      ring-offset-current ring-offset-2
                      hover:bg-blueGray-100
                    "
                  >
                    Upload a file
                  </button>
                </div>
              </div>
              <div id="photoUpload">
                <div class="barinfo text-xl text-left italic mt-5 font-bold">
                  <h8>Upload Photos</h8>
                </div>
                <div
                  class="
                    flex flex-col
                    items-center
                    justify-center
                    py-5
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    drop-shadow-lg
                    bg-#dbdbdb
                    border-3 border-#6e6e6e border-dashed
                    rounded-lg
                    text-blueGray-500
                    focus:border-blue-500
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    ring-offset-current ring-offset-2
                  "
                >
                  <p
                    class="
                      flex flex-wrap
                      justify-center
                      mb-3
                      text-base
                      leading-7
                      text-blueGray-500
                    "
                  >
                    <span>Drag and drop your</span>&nbsp;<span
                      >files anywhere or</span
                    >
                  </p>
                  <button
                    class="
                      w-auto
                      px-2
                      py-1
                      my-2
                      mr-2
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-black
                      rounded-md
                      text-blueGray-500
                      hover:text-blueGray-600
                      text-md
                      focus:shadow-outline focus:outline-none focus:ring-2
                      ring-offset-current ring-offset-2
                      hover:bg-blueGray-100
                    "
                  >
                    Upload Photos
                  </button>
                </div>
              </div>
              <div id="venderInfoUpload">
                <div
                  class="inventoryinfo text-xl text-left italic mt-5 font-bold"
                >
                  <h6>Upload Vendor Information</h6>
                </div>

                <div
                  class="
                    flex flex-col
                    items-center
                    justify-center
                    py-5
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    drop-shadow-lg
                    bg-#dbdbdb
                    border-3 border-#6e6e6e border-dashed
                    rounded-lg
                    text-blueGray-500
                    focus:border-blue-500
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    ring-offset-current ring-offset-2
                  "
                >
                  <p
                    class="
                      flex flex-wrap
                      justify-center
                      mb-3
                      text-base
                      leading-7
                      text-blueGray-500
                    "
                  >
                    <span>Drag and drop your</span>&nbsp;<span
                      >files anywhere or</span
                    >
                  </p>
                  <button
                    class="
                      w-auto
                      px-2
                      py-1
                      my-2
                      mr-2
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-black
                      rounded-md
                      text-blueGray-500
                      hover:text-blueGray-600
                      text-md
                      focus:shadow-outline focus:outline-none focus:ring-2
                      ring-offset-current ring-offset-2
                      hover:bg-blueGray-100
                    "
                  >
                    Upload a file
                  </button>
                </div>
              </div>
              <div id="optionalInfo">
                <div class="barinfo text-xl text-left italic mt-5 font-bold">
                  <h8>Optional Information</h8>
                </div>
                <div
                  class="
                    justify-center
                    drop-shadow-lg
                    border-solid border-2 border-black-200
                    rounded-lg
                    py-8
                    sm:px-8
                    lg:px-8
                    grid grid-flow-row-dense grid-cols-4 grid-rows-4
                  "
                  style="background-color: #dbdbdb"
                >
                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="water bill"
                      type="number"
                      placeholder="Watewr Bill"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Electric Bill"
                      type="number"
                      placeholder="Electric Bill"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Wages Cost"
                      type="number"
                      placeholder="Wages Cost"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Rent/Morgage"
                      type="number"
                      placeholder="Rent/ Morgage"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="FOH"
                      type="number"
                      placeholder="Front of House"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="BOH"
                      type="number"
                      placeholder="Back of House"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="taxes"
                      type="number"
                      placeholder="Taxes"
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

                  <div class="form-group mt-1 col-span-2">
                    <Field
                      name="Misc"
                      type="number"
                      placeholder="Misc"
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
                </div>
              </div>

              <div class="form-group mt-5">
                <button
                  class="
                    btn btn-primary btn-block
                    drop-shadow-lg
                    border-solid border-2
                    rounded-lg
                  "
                  :disabled="loading"
                >
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
      states: [
        { value: 'AL', text: 'Alabama (AL)' },
        { value: 'AK', text: 'Alaska (AK)' },
        { value: 'AZ', text: 'Arizona (AZ)' },
        { value: 'AR', text: 'Arkansas (AR)' },
        { value: 'CA', text: 'California (CA)' },
        { value: 'CO', text: 'Colorado (CO)' },
        { value: 'CT', text: 'Connecticut (CT)' },
        { value: 'DE', text: 'Delaware (DE)' },
        { value: 'DC', text: 'District Of Columbia (DC)' },
        { value: 'FL', text: 'Florida (FL)' },
        { value: 'GA', text: 'Georgia (GA)' },
        { value: 'HI', text: 'Hawaii (HI)' },
        { value: 'ID', text: 'Idaho (ID)' },
        { value: 'IL', text: 'Illinois (IL)' },
        { value: 'IN', text: 'Indiana (IN)' },
        { value: 'IA', text: 'Iowa (IA)' },
        { value: 'KS', text: 'Kansas (KS)' },
        { value: 'KY', text: 'Kentucky (KY)' },
        { value: 'LA', text: 'Louisiana (LA)' },
        { value: 'ME', text: 'Maine (ME)' },
        { value: 'MD', text: 'Maryland (MD)' },
        { value: 'MA', text: 'Massachusetts (MA)' },
        { value: 'MI', text: 'Michigan (MI)' },
        { value: 'MN', text: 'Minnesota (MN)' },
        { value: 'MS', text: 'Mississippi (MS)' },
        { value: 'MO', text: 'Missouri (MO)' },
        { value: 'MT', text: 'Montana (MT)' },
        { value: 'NE', text: 'Nebraska (NE)' },
        { value: 'NV', text: 'Nevada (NV)' },
        { value: 'NH', text: 'New Hampshire (NH)' },
        { value: 'NJ', text: 'New Jersey (NJ)' },
        { value: 'NM', text: 'New Mexico (NM)' },
        { value: 'NY', text: 'New York (NY)' },
        { value: 'NC', text: 'North Carolina (NC)' },
        { value: 'ND', text: 'North Dakota (ND)' },
        { value: 'OH', text: 'Ohio (OH)' },
        { value: 'OK', text: 'Oklahoma (OK)' },
        { value: 'OR', text: 'Oregon (OR)' },
        { value: 'PA', text: 'Pennsylvania (PA)' },
        { value: 'RI', text: 'Rhode Island (RI)' },
        { value: 'SC', text: 'South Carolina (SC)' },
        { value: 'SD', text: 'South Dakota (SD)' },
        { value: 'TN', text: 'Tennessee (TN)' },
        { value: 'TX', text: 'Texas (TX)' },
        { value: 'UT', text: 'Utah (UT)' },
        { value: 'VT', text: 'Vermont' },
        { value: 'VA', text: 'Virginia' },
        { value: 'WA', text: 'Washington' },
        { value: 'WV', text: 'West Virginia' },
        { value: 'WI', text: 'Wisconsin' },
        { value: 'WY', text: 'Wyoming' },
      ],
      //Country Array for country select
      countries: [
        { value: 'AF', text: 'Afghanistan' },
        { value: 'AX', text: 'Aland Islands' },
        { value: 'AL', text: 'Albania' },
        { value: 'DZ', text: 'Algeria' },
        { value: 'AS', text: 'American Samoa' },
        { value: 'AD', text: 'Andorra' },
        { value: 'AO', text: 'Angola' },
        { value: 'AI', text: 'Anguilla' },
        { value: 'AQ', text: 'Antarctica' },
        { value: 'AG', text: 'Antigua and Barbuda' },
        { value: 'AR', text: 'Argentina' },
        { value: 'AM', text: 'Armenia' },
        { value: 'AW', text: 'Aruba' },
        { value: 'AU', text: 'Australia' },
        { value: 'AT', text: 'Austria' },
        { value: 'AZ', text: 'Azerbaijan' },
        { value: 'BS', text: 'Bahamas' },
        { value: 'BH', text: 'Bahrain' },
        { value: 'BD', text: 'Bangladesh' },
        { value: 'BB', text: 'Barbados' },
        { value: 'BY', text: 'Belarus' },
        { value: 'BE', text: 'Belgium' },
        { value: 'BZ', text: 'Belize' },
        { value: 'BJ', text: 'Benin' },
        { value: 'BM', text: 'Bermuda' },
        { value: 'BT', text: 'Bhutan' },
        { value: 'BO', text: 'Bolivia' },
        { value: 'BQ', text: 'Bonaire, Sint Eustatius and Saba' },
        { value: 'BA', text: 'Bosnia and Herzegovina' },
        { value: 'BW', text: 'Botswana' },
        { value: 'BV', text: 'Bouvet Island' },
        { value: 'BR', text: 'Brazil' },
        { value: 'IO', text: 'British Indian Ocean Territory' },
        { value: 'BN', text: 'Brunei Darussalam' },
        { value: 'BG', text: 'Bulgaria' },
        { value: 'BF', text: 'Burkina Faso' },
        { value: 'BI', text: 'Burundi' },
        { value: 'KH', text: 'Cambodia' },
        { value: 'CM', text: 'Cameroon' },
        { value: 'CA', text: 'Canada' },
        { value: 'CV', text: 'Cape Verde' },
        { value: 'KY', text: 'Cayman Islands' },
        { value: 'CF', text: 'Central African Republic' },
        { value: 'TD', text: 'Chad' },
        { value: 'CL', text: 'Chile' },
        { value: 'CN', text: 'China' },
        { value: 'CX', text: 'Christmas Island' },
        { value: 'CC', text: 'Cocos (Keeling) Islands' },
        { value: 'CO', text: 'Colombia' },
        { value: 'KM', text: 'Comoros' },
        { value: 'CG', text: 'Congo' },
        { value: 'CD', text: 'Congo, Democratic Republic of the Congo' },
        { value: 'CK', text: 'Cook Islands' },
        { value: 'CR', text: 'Costa Rica' },
        { value: 'CI', text: 'Cote Divoire' },
        { value: 'HR', text: 'Croatia' },
        { value: 'CU', text: 'Cuba' },
        { value: 'CW', text: 'Curacao' },
        { value: 'CY', text: 'Cyprus' },
        { value: 'CZ', text: 'Czech Republic' },
        { value: 'DK', text: 'Denmark' },
        { value: 'DJ', text: 'Djibouti' },
        { value: 'DM', text: 'Dominica' },
        { value: 'DO', text: 'Dominican Republic' },
        { value: 'EC', text: 'Ecuador' },
        { value: 'EG', text: 'Egypt' },
        { value: 'SV', text: 'El Salvador' },
        { value: 'GQ', text: 'Equatorial Guinea' },
        { value: 'ER', text: 'Eritrea' },
        { value: 'EE', text: 'Estonia' },
        { value: 'ET', text: 'Ethiopia' },
        { value: 'FK', text: 'Falkland Islands' },
        { value: 'FO', text: 'Faroe Islands' },
        { value: 'FJ', text: 'Fiji' },
        { value: 'FI', text: 'Finland' },
        { value: 'FR', text: 'France' },
        { value: 'GF', text: 'French Guiana' },
        { value: 'PF', text: 'French Polynesia' },
        { value: 'TF', text: 'French Southern Territories' },
        { value: 'GA', text: 'Gabon' },
        { value: 'GM', text: 'Gambia' },
        { value: 'GE', text: 'Georgia' },
        { value: 'DE', text: 'Germany' },
        { value: 'GH', text: 'Ghana' },
        { value: 'GI', text: 'Gibraltar' },
        { value: 'GR', text: 'Greece' },
        { value: 'GL', text: 'Greenland' },
        { value: 'GD', text: 'Grenada' },
        { value: 'GP', text: 'Guadeloupe' },
        { value: 'GU', text: 'Guam' },
        { value: 'GT', text: 'Guatemala' },
        { value: 'GG', text: 'Guernsey' },
        { value: 'GN', text: 'Guinea' },
        { value: 'GW', text: 'Guinea-Bissau' },
        { value: 'GY', text: 'Guyana' },
        { value: 'HT', text: 'Haiti' },
        { value: 'HM', text: 'Heard Island and Mcdonald Islands' },
        { value: 'VA', text: 'Holy See' },
        { value: 'HN', text: 'Honduras' },
        { value: 'HK', text: 'Hong Kong' },
        { value: 'HU', text: 'Hungary' },
        { value: 'IS', text: 'Iceland' },
        { value: 'IN', text: 'India' },
        { value: 'ID', text: 'Indonesia' },
        { value: 'IR', text: 'Iran, Islamic Republic of' },
        { value: 'IQ', text: 'Iraq' },
        { value: 'IE', text: 'Ireland' },
        { value: 'IM', text: 'Isle of Man' },
        { value: 'IL', text: 'Israel' },
        { value: 'IT', text: 'Italy' },
        { value: 'JM', text: 'Jamaica' },
        { value: 'JP', text: 'Japan' },
        { value: 'JE', text: 'Jersey' },
        { value: 'JO', text: 'Jordan' },
        { value: 'KZ', text: 'Kazakhstan' },
        { value: 'KE', text: 'Kenya' },
        { value: 'KI', text: 'Kiribati' },
        { value: 'KP', text: 'Democratic Peoples Republic of Korea' },
        { value: 'KR', text: 'Republic of Korea' },
        { value: 'XK', text: 'Kosovo' },
        { value: 'KW', text: 'Kuwait' },
        { value: 'KG', text: 'Kyrgyzstan' },
        { value: 'LA', text: 'Peoples Democratic Republic of Lao' },
        { value: 'LV', text: 'Latvia' },
        { value: 'LB', text: 'Lebanon' },
        { value: 'LS', text: 'Lesotho' },
        { value: 'LR', text: 'Liberia' },
        { value: 'LY', text: 'Libyan Arab Jamahiriya' },
        { value: 'LI', text: 'Liechtenstein' },
        { value: 'LT', text: 'Lithuania' },
        { value: 'LU', text: 'Luxembourg' },
        { value: 'MO', text: 'Macao' },
        { value: 'MK', text: 'Macedonia, the Former Yugoslav Republic of' },
        { value: 'MG', text: 'Madagascar' },
        { value: 'MW', text: 'Malawi' },
        { value: 'MY', text: 'Malaysia' },
        { value: 'MV', text: 'Maldives' },
        { value: 'ML', text: 'Mali' },
        { value: 'MT', text: 'Malta' },
        { value: 'MH', text: 'Marshall Islands' },
        { value: 'MQ', text: 'Martinique' },
        { value: 'MR', text: 'Mauritania' },
        { value: 'MU', text: 'Mauritius' },
        { value: 'YT', text: 'Mayotte' },
        { value: 'MX', text: 'Mexico' },
        { value: 'FM', text: 'Micronesia, Federated States of' },
        { value: 'MD', text: 'Moldova, Republic of' },
        { value: 'MC', text: 'Monaco' },
        { value: 'MN', text: 'Mongolia' },
        { value: 'ME', text: 'Montenegro' },
        { value: 'MS', text: 'Montserrat' },
        { value: 'MA', text: 'Morocco' },
        { value: 'MZ', text: 'Mozambique' },
        { value: 'MM', text: 'Myanmar' },
        { value: 'NA', text: 'Namibia' },
        { value: 'NR', text: 'Nauru' },
        { value: 'NP', text: 'Nepal' },
        { value: 'NL', text: 'Netherlands' },
        { value: 'AN', text: 'Netherlands Antilles' },
        { value: 'NC', text: 'New Caledonia' },
        { value: 'NZ', text: 'New Zealand' },
        { value: 'NI', text: 'Nicaragua' },
        { value: 'NE', text: 'Niger' },
        { value: 'NG', text: 'Nigeria' },
        { value: 'NU', text: 'Niue' },
        { value: 'NF', text: 'Norfolk Island' },
        { value: 'MP', text: 'Northern Mariana Islands' },
        { value: 'NO', text: 'Norway' },
        { value: 'OM', text: 'Oman' },
        { value: 'PK', text: 'Pakistan' },
        { value: 'PW', text: 'Palau' },
        { value: 'PS', text: 'Palestinian Territory, Occupied' },
        { value: 'PA', text: 'Panama' },
        { value: 'PG', text: 'Papua New Guinea' },
        { value: 'PY', text: 'Paraguay' },
        { value: 'PE', text: 'Peru' },
        { value: 'PH', text: 'Philippines' },
        { value: 'PN', text: 'Pitcairn' },
        { value: 'PL', text: 'Poland' },
        { value: 'PT', text: 'Portugal' },
        { value: 'PR', text: 'Puerto Rico' },
        { value: 'QA', text: 'Qatar' },
        { value: 'RE', text: 'Reunion' },
        { value: 'RO', text: 'Romania' },
        { value: 'RU', text: 'Russian Federation' },
        { value: 'RW', text: 'Rwanda' },
        { value: 'BL', text: 'Saint Barthelemy' },
        { value: 'SH', text: 'Saint Helena' },
        { value: 'KN', text: 'Saint Kitts and Nevis' },
        { value: 'LC', text: 'Saint Lucia' },
        { value: 'MF', text: 'Saint Martin' },
        { value: 'PM', text: 'Saint Pierre and Miquelon' },
        { value: 'VC', text: 'Saint Vincent and the Grenadines' },
        { value: 'WS', text: 'Samoa' },
        { value: 'SM', text: 'San Marino' },
        { value: 'ST', text: 'Sao Tome and Principe' },
        { value: 'SA', text: 'Saudi Arabia' },
        { value: 'SN', text: 'Senegal' },
        { value: 'RS', text: 'Serbia' },
        { value: 'CS', text: 'Serbia and Montenegro' },
        { value: 'SC', text: 'Seychelles' },
        { value: 'SL', text: 'Sierra Leone' },
        { value: 'SG', text: 'Singapore' },
        { value: 'SX', text: 'Sint Maarten' },
        { value: 'SK', text: 'Slovakia' },
        { value: 'SI', text: 'Slovenia' },
        { value: 'SB', text: 'Solomon Islands' },
        { value: 'SO', text: 'Somalia' },
        { value: 'ZA', text: 'South Africa' },
        { value: 'GS', text: 'South Georgia and the South Sandwich Islands' },
        { value: 'SS', text: 'South Sudan' },
        { value: 'ES', text: 'Spain' },
        { value: 'LK', text: 'Sri Lanka' },
        { value: 'SD', text: 'Sudan' },
        { value: 'SR', text: 'Suriname' },
        { value: 'SJ', text: 'Svalbard and Jan Mayen' },
        { value: 'SZ', text: 'Swaziland' },
        { value: 'SE', text: 'Sweden' },
        { value: 'CH', text: 'Switzerland' },
        { value: 'SY', text: 'Syrian Arab Republic' },
        { value: 'TW', text: 'Taiwan, Province of China' },
        { value: 'TJ', text: 'Tajikistan' },
        { value: 'TZ', text: 'Tanzania, United Republic of' },
        { value: 'TH', text: 'Thailand' },
        { value: 'TL', text: 'Timor-Leste' },
        { value: 'TG', text: 'Togo' },
        { value: 'TK', text: 'Tokelau' },
        { value: 'TO', text: 'Tonga' },
        { value: 'TT', text: 'Trinidad and Tobago' },
        { value: 'TN', text: 'Tunisia' },
        { value: 'TR', text: 'Turkey' },
        { value: 'TM', text: 'Turkmenistan' },
        { value: 'TC', text: 'Turks and Caicos Islands' },
        { value: 'TV', text: 'Tuvalu' },
        { value: 'UG', text: 'Uganda' },
        { value: 'UA', text: 'Ukraine' },
        { value: 'AE', text: 'United Arab Emirates' },
        { value: 'GB', text: 'United Kingdom' },
        { value: 'US', text: 'United States' },
        { value: 'UM', text: 'United States Minor Outlying Islands' },
        { value: 'UY', text: 'Uruguay' },
        { value: 'UZ', text: 'Uzbekistan' },
        { value: 'VU', text: 'Vanuatu' },
        { value: 'VE', text: 'Venezuela' },
        { value: 'VN', text: 'Viet Nam' },
        { value: 'VG', text: 'Virgin Islands, British' },
        { value: 'VI', text: 'Virgin Islands, U.s.' },
        { value: 'WF', text: 'Wallis and Futuna' },
        { value: 'EH', text: 'Western Sahara' },
        { value: 'YE', text: 'Yemen' },
        { value: 'ZM', text: 'Zambia' },
        { value: 'ZW', text: 'Zimbabwe' },
      ],
      // Bar Types List for Bar Type Selection.
      barTypes: [
        { value: 'LM', text: 'Live Music Bar' },
        { value: 'HB', text: 'Hotel Bar' },
        { value: 'SB', text: 'Sports Bar' },
        { value: 'NB', text: 'Nostalgic Bar' },
        { value: 'PB', text: 'Plastic Bar' },
        { value: 'SPB', text: 'Specialty Bar' },
        { value: 'CB', text: 'College Bar' },
        { value: 'HCB', text: 'High Concept Bar' },
        { value: 'HEB', text: 'High End Bar' },
        { value: 'IP', text: 'Irish Pub' },
        { value: 'DB', text: 'Dive Bar' },
        { value: 'P', text: 'Pub' },
        { value: 'UB', text: 'Underground Bar' },
        { value: 'RB', text: 'restaurant Bar' },
        { value: 'NCB', text: 'NightClub Bar' },
      ],

      //POS System Brands for POS intergartion choices
      posSystems: [
        { value: 'Toast', text: 'Toast' },
        { value: 'Lightspeed', text: 'Upserve by Lightspeed' },
        { value: 'Revel', text: 'Revel Systems' },
        { value: 'lightspeed2', text: 'Lightspeed Restaurant' },
        { value: 'Square', text: 'Square' },
        { value: 'ShopKeep', text: 'ShopKeep' },
        { value: 'Clover', text: 'Clover' },
        { value: 'Touch Bistro', text: 'Touch Bistro' },
        { value: 'GoDaddy', text: 'GoDaddy' },
        { value: 'CardConnect', text: 'CardConnect' },
        { value: 'Epos Now', text: 'Epos Now' },
        { value: 'Lavu', text: 'Lavu' },
        { value: 'Helcim', text: 'Helcim' },
      ],
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

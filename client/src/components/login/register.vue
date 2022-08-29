<template>
  <section>
    <div class="flex flex-col justify-conter min- py-12 sm:px-6 lg:px-8">
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
            <div class="addressContainer">
              <div
                class="box-shadow: 0 4px 8px rgba(0,0,0,0.2)"
                style="background-color: #dbdbdb"
              >
                <div class="form-group mt-1">
                  <Field
                    name="address"
                    type="text"
                    placeholder="Address"
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
                <div class="form-group mt-1">
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
                <div class="form-group mt-1">
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
                    <option value="select country">select country</option>
                    <option value="US">US</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, the Former Yugoslav Republic of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
                <div class="form-group mt-1">
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
                <div class="form-group mt-1">
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
              </div>
            </div>

            <div class="emailContainer">
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
            <div class="barTypeConetainer">
              <div class="form-group mt-1">
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
                  <option>Sports Bar</option>
                </select>
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
            <div class="form-group mt-1">
              <button class="btn btn-primary btn-block" :disabled="loading">
                Sign Up
              </button>
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
<template>
  <section>
    <div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <div class="mt-1">
                <input
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
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

            <div>
              <div class="mt-1">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
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

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    border-gray-300
                    rounded
                    focus:ring-blue-500
                  "
                />
                <label
                  for="remember-me"
                  class="block ml-2 text-sm text-neutral-600"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
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
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="divider text-base text-white">OR</div>
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
        </div>
      </div>
    </div>
  </section>
</template>
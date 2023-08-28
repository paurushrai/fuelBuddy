<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { useAuthStore } from '../stores/authStore';
import Button from '../components/Button.vue';

const router = useRouter();
const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const errMsg = ref('');

// const authStore = useAuthStore();

const handleRegister = async () => {
   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      updateProfile(userCredential.user, {
        displayName: name.value
      });
      authStore.setUser(userCredential.user);
      // Signed in 
      console.log('userCredential', userCredential);
      console.log('User Registered Successfully');
      // ...
      router.push('/dashboard')
    })
    .catch((error) => {
      console.log('errorCode', error.code);
      switch (error.code) {
        case "auth/weak-password":
          errMsg.value = "Weak Password !";
          break;
        case "auth/email-already-in-use":
          errMsg.value = "Email Already in Use !";
          break;
        case "auth/invalid-email":
          errMsg.value = "Invalid Email !";
          break;
        default:
          errMsg.value = "Something Went Wrong !";
          break;
      }
      console.log('errorMessage', error.message);
      // ..
    });
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log('user', user);
      router.push('/dashboard')
    }).catch((error) => {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
};
</script>

<template>
  <section class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          </div>
          <div class="mt-2">
            <input id="name" name="name" type="text" v-model="name"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" v-model="password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <Button text="SignUp" />

        <Button @onClick="signInWithGoogle" text="Sign In With Google" />

        <div>
          <p v-if="errMsg"
            class="flex w-full justify-center rounded-md bg-red-50 px-3 p-1.5 text-sm text-red-500 font-semibold leading-6 shadow-sm">
            {{ errMsg }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
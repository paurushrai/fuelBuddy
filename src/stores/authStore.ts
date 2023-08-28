import { defineStore } from 'pinia';

interface AuthState {
  user: any | null;
  isLoggedIn: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
      this.isLoggedIn = true;
    },
    clearUser() {
      this.user = null;
      this.isLoggedIn = false;
    },
    // async logout() {
    //   try {
    //     await auth.signOut(); // You need to import and use the `auth` object from your code
    //     this.clearUser();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
});

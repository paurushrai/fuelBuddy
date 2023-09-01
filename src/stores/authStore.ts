import { defineStore } from 'pinia';
import { getAuth } from 'firebase/auth';

interface AuthState {
  user: any | null;
  isLoggedIn: boolean;
}

let user: any;

// const auth = getAuth();
//  user = auth.currentUser;

// if (user !== null) {
//   user.providerData.forEach((profile) => {
    
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user,
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
    }
  },
});

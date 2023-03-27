import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    usernames: [],
    users: [],
    currentUserToken: ""
  }),
  actions: {
    addUser(uername, password) {
      this.users.push({
        username: uername,
        password: password,
        token: this.generateToken()
      });
      this.usernames.push(username);
    },
    generateToken() {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      const charLength = chars.length;
      let result = '';
      for ( let i = 0; i < 10; i++ ) {
         result += chars.charAt(Math.floor(Math.random() * charLength));
      }
      return result;
   },
   getUsernames() {
    return 
   },
  isUserExists(username) {
    return this.usernames.includes(username);
  }
  },
});
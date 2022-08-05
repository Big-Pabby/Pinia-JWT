
import { defineStore } from "pinia";


export const userData = defineStore("user", {
    state: () => {
        return {
            user: (JSON.parse(localStorage.getItem('user'))),
            isLoggedIn: (JSON.parse(localStorage.getItem('authUser')))
        }
    },

    getters: {
        getUserData: (state) => state.user,
    },

    actions: {
        userInfo(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user))
        },

        authUser(auth) {
            this.isLoggedIn = auth
            localStorage.setItem('authUser', JSON.stringify(auth))
        }
    }
})
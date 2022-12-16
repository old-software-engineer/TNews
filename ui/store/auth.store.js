import { defineStore } from 'pinia';

// import { fetchWrapper, router } from '@/helpers';

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email, password) {
           const user = await fetch("http://localhost:3000/user/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        const res = await user.json()
            // update pinia state
            this.user = JSON.stringify(res.user);

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('token', res.token);

            // redirect to previous url or default to home page
            navigateTo(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            navigat('/login');
        }
    }
});

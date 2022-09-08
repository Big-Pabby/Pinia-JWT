<template>
  <div class="home">
    <h2>Logged In, Welcome {{user.user.name}}</h2>
    <button class="btn btn-primary" @click="onLogout">Logout</button>
  </div>
  
</template>

<script>
import { onMounted } from 'vue';
import { userData } from '../stores/userStore';
export default {
  setup(props) {
    onMounted( async () => {
      const res = await fetch('https://obscure-wave-22966.herokuapp.com/user', {
          headers: {'Content-Type': 'application/json'},
          mode: 'cors',
          credentials: 'include',
      });

      const content = await res.json()
      userData().userInfo(content)
      console.log(content)
    })
  },

  data() {
    return {
      user: userData()
    }
  },

  methods: {
    async onLogout() {
      await fetch('https://obscure-wave-22966.herokuapp.com/logout', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      });
      const content = {}
      const auth = false
      userData().userInfo(content)
      userData().authUser(auth)
      this.$router.push({ path: '/'});

    }
  },
  
}
</script>

<style scoped>
  button {
    margin-top: 10px;
  }
</style>
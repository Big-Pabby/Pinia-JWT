<template>
  <div class="home">
    <h2>Logged In, Welcome {{user.user.username}}</h2>
    <button class="btn btn-primary" @click="onLogout">Logout</button>
  </div>
  
</template>

<script>
import { onMounted } from 'vue';
import { userData } from '../stores/userStore';
export default {
  setup(props) {
    onMounted( async () => {
      const res = await fetch('http://localhost:3001/user', {
          headers: {'Content-Type': 'application/json'},
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
      await fetch('http://localhost:3001/logout', {
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
<template>
  <div class="SignUp">
    <Loader v-show="loader" />
    <div class="signup-flex">
      <div class="signup-left">
        <div class="signUp-header">
          <h2>Login</h2>
          <p>Welcome Back</p>
        </div>

        <form @submit.prevent="onLogin">
          <div class="input-field">
            <label for="email">📧 Email</label>
            <input type="email" name="email" v-model="email" required>
          </div>
          <div class="input-field">
            <label for="password">🔐 Password</label>
            <input type="password" name="password" v-model="password" required>
          </div>
          <input class="signup-btn" type="submit" value="Login">
          <p>{{msg}}</p>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import { userData } from '../stores/userStore';
export default {
    name: "login",
    components: { Loader },
    data() {
        return {
            loader: false,
            msg: '',
            email: '',
            password: ''
        }
    },

    methods: {
      async onLogin() {
            const res = await fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            });

            const user = await res.json();
            console.log(user)
            if(user.message = 'success') {
              this.loader = true;
              this.msg = user.message
              setTimeout(() => {
                  this.loader = false;
                  const log = true
                  userData().authUser(log)
                  this.$router.push({ path: '/home'});
              }, 5000)
            }
        }
    },
}
</script>

<style scoped>

.SignUp {
  position: relative;
}

  .signup-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .signup-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 24px;
  }

  .login {
    font-weight: bold;
  }

  .signUp-header {
    text-align: center;
    padding-top: 30px;
  }

  .signup-logo {
    margin-bottom: 30px;
  }

  form {
    text-align: center;
  }

  .input-field label {
    display: block;
    margin: 10px 0;
    font-size: 15px;
    font-weight: bold;
    color: var(--color-primary);
  }

  input {
    width: 300px;
    border-radius: 10px;
    padding: 10px 15px;
    background: #f4f4f4;
    border: none;
    outline-color: var(--color-bg-primary);
  }

  .signup-btn {
    margin-top: 20px;
    background: var(--color-bg-secondary);
    border: none;
    color: #fff;
    transition: var(--transition);
    font-weight: bold;
    font-size: 15px;
  }

  .signup-btn:hover {
    background: transparent;
    border: 1px solid var(--color-bg-secondary);
    color: var(--color-primary);
  }

  @media screen and (max-width: 960px) {
    .signup-right {
      display: none;
    }
}
</style>
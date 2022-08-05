<template>
  <div class="SignUp">
    <Loader v-show="loader" />
    <div class="signup-flex">
      <div class="signup-left">
        <div class="signUp-header">
          <h2>Sign Up</h2>
          <p>Create a free account</p>
        </div>

        <form @submit.prevent="onRegister">
          <div class="input-field">
            <label for="name">🚻 Name</label>
            <input type="text" name="name" v-model="inputName" required>
          </div>
          <div class="input-field">
            <label for="email">📧 Email</label>
            <input type="email" name="email" v-model="inputEmail" required>
          </div>
          <div class="input-field">
            <label for="password">🔐 Password</label>
            <input type="password" name="password" v-model="inputPassword" required>
          </div>
          <div class="input-field">
            <label for="confirmPassword">✅ Confirm Password</label>
            <input type="password" name="confirmPassword" v-model="confirmPassword" required>
          </div>
          <input class="signup-btn" type="submit" value="Sign Up">
          <p>{{msg}}</p>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
    name: 'register',
    components: { Loader },
    data() {
        return {
            inputName: "",
            inputEmail: "",
            inputPassword: "",
            confirmPassword: "",
            msg: "",
            loader: false
        }
    },

    methods: {
      async onRegister() {
            if(this.inputPassword === this.confirmPassword) {
                const res = await fetch('https://obscure-wave-22966.herokuapp.com/register', {
                    method: 'post',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: this.inputName,
                        email: this.inputEmail,
                        password: this.inputPassword
                    })
                })
                const user = await res.json();
                if(user !== "Registration failed email already exist") {
                  this.msg = "Registration was successful"
                  this.loader = true
                  setTimeout(() => {
                      this.loader = false;
                      this.$router.push({ path: '/'});
                  }, 5000)
                } else {
                  this.msg = "Registration failed email already exist";
                  this.loader = true;
                  setTimeout(() => {
                      this.loader = false;
                  }, 5000)
                }

            } else {
                this.msg = "Invalid Password"
               setTimeout(() => {
                   this.msg = ""
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

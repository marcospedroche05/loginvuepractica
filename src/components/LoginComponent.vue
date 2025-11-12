<template>
  <div>
    <h1 class="text-center">Login</h1>
    <br/>
    <form class="p-5" v-on:submit.prevent="iniciarSesion()">
        <label>UserName: </label><br/>
        <input class="form-control" v-model="cajaname" type="text"/><br/>
        <label>Password: </label><br/>
        <input class="form-control" v-model="cajapassword" type="password"/><br/>
        <button class="btn btn-info">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';
const service = new AuthService();
export default {
    name: "LoginComponent",
    data(){
        return {
            cajaname: "",
            cajapassword: ""
        }
    },
    methods: {
        iniciarSesion() {
            service.login(this.cajaname, this.cajapassword).then(result => {
                localStorage.setItem("token", result);
                console.log(localStorage.getItem("token"));
                this.$router.push("/").then(() => {
                    window.location.reload();
                });
            })
        }
    }
}
</script>

<style>

</style>
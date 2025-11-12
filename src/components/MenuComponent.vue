<template>
  <div>
    <ul class="d-flex justify-content-around" type="none">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/perfil">Perfil</router-link>
      </li>
      <li>
        <router-link to="/subordinados">Subordinados</router-link>
      </li>
      <li v-if="loged">
        <button class="btn btn-danger" v-on:click="cerrarSesion()">Cerrar sesion</button>
      </li>
    </ul>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
  data(){
    return {
      loged: false
    }
  },
  mounted(){
    if(localStorage.getItem("token") != null){
      this.loged = true;
    }
  }, methods: {
    cerrarSesion(){
      localStorage.removeItem("token");
      this.$router.push("/login").then(() => {
        window.location.reload();
      });
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="p-5">
    <h1>Perfil</h1>
    <br/>
    <p v-if="empleadoLogado">{{ empleadoLogado.apellido }}</p>
  </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';
const service = new ServiceEmpleados();
export default {
    name: "PerfilComponent",
    data(){
        return {
            empleadoLogado: null
        }
    },
    mounted(){
        if(localStorage.getItem("token") == null)
            this.$router.push("/login");
        service.getEmpleadoLogado().then(result => {
            this.empleadoLogado = result;
        })
    }
}
</script>

<style>

</style>
<template>
  <div class="p-5">
    <h1>Perfil</h1>
    <br />
    <div class="d-flex justify-content-center">
        <div v-if="empleadoLogado" class="w-50 border border-secondary rounded rounded-5 p-3">
            <p>Id empleado: {{ empleadoLogado.idEmpleado }}</p>
            <p>Apellido: {{ empleadoLogado.apellido }}</p>
            <p>Oficio: {{ empleadoLogado.oficio }}</p>
            <p>Salario: {{ empleadoLogado.salario }} €</p>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {
  name: "PerfilComponent",
  data() {
    return {
      empleadoLogado: null,
    };
  },
  mounted() {
    if (localStorage.getItem("token") == null) this.$router.push("/login");
    else {
      service.getEmpleadoLogado().then((result) => {
        this.empleadoLogado = result;
      });
    }
  },
};
</script>

<style></style>

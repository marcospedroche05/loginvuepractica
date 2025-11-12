<template>
  <div>
    <h1 class="text-center">Subordinados</h1>
    <br />
    <table class="table table-hover" v-if="subordinados">
      <thead>
        <tr>
          <th>Id empleado</th>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sub in subordinados" :key="sub">
          <td>{{ sub.idEmpleado }}</td>
          <td>{{ sub.apellido }}</td>
          <td>{{ sub.oficio }}</td>
          <td>{{ sub.salario }}</td>
          <td>{{ sub.director }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {
  name: "SubordinadosComponent",
  data() {
    return {
      subordinados: [],
    };
  },
  mounted() {
    const token = localStorage.getItem("token");

    if (!token) {
      this.$router.push("/login");
      return;
    } else {
      service
        .getSubordinados()
        .then((result) => {
          this.subordinados = result;
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            this.$router.push("/login");
          }
        });
    }
  },
};
</script>

<style></style>

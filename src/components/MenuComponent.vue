<template>
  <div>
    <ul class="d-flex justify-content-around">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
</style>
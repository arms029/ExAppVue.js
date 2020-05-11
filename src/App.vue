<template>
  <div id="app">
    <div class="container">
      <Header :titulo="titulo"></Header>
      <router-view></router-view>

    </div>
</div>
</template>

<script>
import { routes } from './routes';
import Header from './components/Header.vue';

export default {
    components: {
    'Header': Header
  },
  name: 'app',
  data () {
    return {
      titulo: 'Bem vindo ao app pitágoras!'
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
@import './assets/styles/pitagoras';

  div::after {
    content: "";
    background: url('/static/mat.jpg');
    opacity: 0.07;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;    
  }

</style>


<template>
  <NavBar data="Menu"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/common/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  methods: {
    handleClick() {
      const nameInput = this.$refs.name as HTMLInputElement | null

      if (nameInput) {
        nameInput.classList.add('active')
        nameInput.focus()
        console.log("Clicked")
      }

    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="home">
    <v-container>
      <v-row
        class="d-flex flex-column"
        justify="center"
        align="center"
      >
      <h1 class="display-3 ma-4"> сайт-галерея </h1>
      <Tabs />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Tabs from '../components/Tabs'

export default {
  name: 'Home',
  components: {
    Tabs,
  },

}
</script>

<style scoped>
  .home {
    width: 100%;
  }
</style>

<template>
  <v-app id="app">

    <v-btn
      absolute
      small
      class="mx-2 mt-2"
      active-class
      fab
      @click.stop="drawer = !drawer"
    >
        <font-awesome-icon :icon="['fas', 'bars']"/> 
    </v-btn>

    <v-container>
      <v-row>
        <router-view v-if="!isLoading" />
        <div v-else class="loader d-flex flex-md-column align-center">
          <font-awesome-icon size="4x" :icon="['fas', 'spinner']" spin /> 
          <span class="mt-3">Загрузка...</span>
        </div>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://avatars.githubusercontent.com/u/50407019?v=4"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Oleg Kotlyarov</v-list-item-title>
          <v-list-item-subtitle>hakuu1251@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        drawer: null,
        items: [
          { title: 'Галерея', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Обо мне', icon: 'mdi-forum', to: '/about' },
        ],
      }
    },
    methods: mapActions(['fetchPosts']),
    computed: {
      ...mapGetters(['isLoading'])
    },
    async mounted() {
      this.fetchPosts()
    }
  }
</script>

<style scoped>
  .loader {
    position: absolute;
    bottom: 50%;
    right: 50%;
  }
</style>
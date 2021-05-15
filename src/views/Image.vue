<template>
  <div class="image-info">
    <v-container>
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :to="item.href"
            :disabled="item.disabled"
          >
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-row>
        <v-col 
          cols="12"
          sm="6"
          md="8"
        >
          <v-img
              :lazy-src="'https://picsum.photos/id/' + getImage.id + '/600/300'"
              :src="getImage.download_url" 
              :width="getImage.width"
            >
              <template v-slot:placeholder>
                <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
                >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
                </v-row>
              </template>
          </v-img>
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
        <v-card
          outlined
        >
          <v-card-title>
            {{getImage.author}}
          </v-card-title>
          <v-card-subtitle>
            width: {{getImage.width}}
            height: {{getImage.height}}
          </v-card-subtitle>
          <v-card-text>
            <a :href="getImage.url">{{getImage.url}}</a>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    items: [
      {
        text: 'Галерея',
        disabled: false,
        href: '/',
      },
      {
        text: 'Изображение',
        disabled: true,
        href: 'a',
      },
    ],
  }),
  computed: {
    ...mapGetters(['getImageById']),
    getImage() {
      return this.getImageById(this.$route.params.id)
    }
  }
}
</script>

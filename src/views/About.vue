<template>
  <div class="about mt-6">
      <v-row>
        <v-col 
          sm="6"
          md="5"
          lg="6"
        >
          <v-img
          src="img/a.jpg" 
          contain
          >
            
          </v-img>
        </v-col>
        <v-col
          sm="6"
          md="5"
          lg="6"
        >
        <v-card
          outlined
        >
          <v-card-title>
            Привет, меня зовут Олег ✌️
          </v-card-title>
          <v-card-text>
            Опыт разработки приложений с нуля. Учавствовал в стартапах и хакатонах. Имею опыт с следующими технологиями:
            <ul>
              <li class="pa-2">
                React / Redux, Firebase – <a href="https://github.com/hakuu1251/online-tests">онлайн тест</a>, <a href="https://github.com/hakuu1251/stars-microblog">сервис микроблогинга</a>, <a href="https://socialcrm.ru/">поддержка CRM системы</a>;
              </li>
              <li class="pa-2">
                Next.js / Typescript, Django – <a href="https://overvest-prototype.vercel.app/">e-commerce платформа для бренда одежды</a>;
              </li>
              <li class="pa-2">
                Vue.js / Vuex – <a href="https://github.com/hakuu1251/watts-battery-hackathon21">веб-приложение для отслеживания статистики умной батареи</a>;
              </li>
              <li class="pa-2">
                Nuxt.js, Git flow – <a href="https://github.com/hakuu1251/idaproject-layout">веб-интерфейс для работы с товарами</a>, <a href="https://github.com/hakuu1251/ida-frontend-test">каталог товаров</a>;
              </li>
              <li class="pa-2">
                Gulp / Rollup, Django, Docker, Nginx – сайт компании <a href="https://www.techmotive.ru/">Техмотив</a>, <a href="https://www.landhouse-spb.ru/">Landhouse</a>
              </li>
            </ul> 
            Отличные навыки работы с Figma, Adobe Photoshop. В веб-разработке уже в течении 3 лет..<br>
            <v-row class="pa-2 text-center">
              <v-col>
                <a href="https://github.com/hakuu1251">Мой гитхаб</a>
              </v-col>
              <v-col>
                <a href="https://t.me/ckofkwkfoflowp">Я в телеграм</a>
              </v-col>
            </v-row>


          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'About',
  
}
</script>
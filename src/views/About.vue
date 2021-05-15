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
          <v-card-subtitle>
            Я тот самый студент который оканчивает колледж и уже жаждит работать в вебе)) 
          </v-card-subtitle>
          <v-card-text>
            Развиваюсь в frontend / backend направлении. Участник нескольких хакатонов, в одном из которых со своей командой занял призовое место в треке.
            Работал со следующими технологиями:
            <ul>
              <li class="pa-2">
                <a href="https://github.com/hakuu1251/stars-microblog">React / Redux</a> – онлайн тест, сервис микроблогинга, поддержка CRM системы (https://socialcrm.ru);
              </li>
              <li class="pa-2">
                <a href="https://github.com/hakuu1251/watts-battery-hackathon21">Vue.js</a> – веб-приложение для отслеживания статистики умной батареи (проект старый и делался на скорую руку но зато с ним мы заняли призовое место);
              </li>
              <li class="pa-2">
               <a href="https://www.figma.com/file/QgBwEYxdOSXSxS2mfgSkZ8/Stars-microblog?node-id=7%3A8">Figma</a> – проектирование UI/UX дизайна для веб-приложения микроблога, интерактивной песочницы ViRunner, книжного магазина.
              </li>
            </ul> 
            Имею опыт работы с CSS-препроцессорами, с адаптивной / кроссбраузерной версткой.<br>
            <v-row class="pa-2 text-center">
              <v-col>
                <a href="https://github.com/hakuu1251">Мой гитхаб</a>
              </v-col>
              <v-col>
                <a href="https://t.me/ckofkwkfoflowp">Я в телеге</a>
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
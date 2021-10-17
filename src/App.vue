<template>
  <div id="app">

    <header-component></header-component>
        <router-view></router-view>

        <footer-component style="margin-top:200px "></footer-component>



   





      
  <!-- <header>
    <img alt="Vue logo" src="./assets/logo.png" width="200">
    <h3>mobile legends</h3> 
    
</header>    


<main>

  <ul>
    <li v-for="article in articles" :key="article.id">
      {{article.id}}<br>
      {{article.content}}<br>
      {{article.title}}<br>

    </li>
  </ul>
  <ul>
    <li><img :src="gambar" alt=""></li>
    <li> <p>{{hero.nama}}</p></li>
     <li> <p>jenis hero:  <em>{{hero.type}} </em></p></li>
  </ul>

  <input type="text">

</main>

<footer>copyright testst</footer> -->



</div>

</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'







export default {
  name: 'App',
  components: {
      'header-component':Header,
      'footer-component':Footer,




  },
  data: function(){
    return{
      hero:{
        nama:'arurora',
        type:'mage',
        gambar:'aurora.jpg'
      },

      articles:[]

    }
  },
  computed:{
    gambar: function(){
      return require('./assets/hero/'+'aurora.jpg')
    }
  },

 

  methods:{
      async load(){
        
      }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
    text-align: center;
    background-color: white;
}   
</style>

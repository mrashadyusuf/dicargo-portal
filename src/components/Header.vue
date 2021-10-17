<template>

<div style="height:500px; ">
<header  id="header" class="menu-bg">
    <div class="container">
        <div class="row">
         <div class="col-sm-12">

         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                <span class="sr-only">Toggle navigation</span>
                <span class="fa fa-bars"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!--Start Logo -->
            <div class="logo-nav">
                <a href="index.html">
                    <img src="./images/dicargologo.png" alt="Company logo" style="width: 50%;"/>
                </a>
            </div>

              <!--End Logo -->
            <div class="clear-toggle"></div>
            <div id="main-menu" >
                <ul class="nav">
                    <!-- <li v-for="item in items" v-bind:items="item">
                        <a href="#home">{{item.message}} </a>
                      </li>                                 -->
                    
                    <li> <a href="/cekresi">Cek Resi</a> </li>
                    <li> <a href="/cekongkir">Cek Ongkir </a> </li>
                    <li> <a href="/Services">Services </a> </li>
                    <li> <a href="/contactus">Contact us </a> </li>

                  
                        
                </ul>
            </div><!-- end main-menu -->


        
         </div>



        </div>

    </div>


    <div>
        
    </div>




</header>


   <section id="home" class="home">
             <div class="slider-overlay"></div>
            <div class="background">   </div>         
         

               


                <div class="container">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                      <!-- Indicators -->
              
                      <!-- Wrapper for slides -->
                      <div class="carousel-inner">
                        <div class="item active">
                          <img :src="`images/kargo1.jpg`" alt="Los Angeles" style="width:100%;">
                        </div>
                  
                        <div class="item">
                          <img src="images/kargo2.jpg" alt="Chicago" style="width:100%;">
                        </div>
                      
                        <div class="item">
                          <img src="images/kargo3.jpg" alt="New york" style="width:100%;">
                        </div>
                      </div>
                  
                      <!-- Left and right controls -->
                      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>          


        </section>
        

</div>


</template>

<script>

export default {
 
  data: function(){
    return{
      pesan:"test",
      hero:{
        nama:'arurora',
        type:'mage',
        gambar:'aurora.jpg'
      },

        items: [
            { message: 'Cek Resi' },
            { message: 'Cek Ongkir'},
            { message: 'Service'}

        ]
    }
  },

    mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './js/custom.js')
    document.head.appendChild(externalScript)
  },
}

</script>


<style scoped>

@import './css/style.css';
@import './css/About.css';
@import './css/animate.css';
@import './css/Blog-Template.css';
@import './css/etlinefont.css';
@import './css/font-awesome.css';
@import './css/magnific-popup.css';
@import './css/nicepage.css';
@import './css/Post-Template.css';

/* @import './css/owl.carousel.css'; */
/* @import './css/owl.theme.css';
@import './css/owl.transitions.css';
@import './css/magnific-popup.css';
@import './css/animate.css';
@import './css/etlinefont.css';

@import './Trace &amp; Track-J&amp;T Express Indonesia_files/jtcss.css';
@import './css/boots.css';
@import './css/swiper.min.css';
@import './css/animate.min.css';
@import './css/iconfont.css'; */


header{}




.navbar-collapse.in {
    display: block !important;
}


</style>



<template>
    <div>
        <!-- start tracking menu -->
        
    
    <section  id="about" class="section">

        
        
      

        <div class="container">
            <div class="row">
                <div class="querypage_box">

                    <div class="querypage_content" style="background-color:#f0f0f0">
                
            
                        <div class="bill_state_box">
            <!--                <div class="bill_state_title">-->
            <!--                    Waybill Status-->
            <!--                </div>-->
                            <div class="search_bill_list flex" style="">
                                <span class="search_billtext">Waybill</span>
                                <div class="select_text pos_r flex_1">
                                    <span class="select_text">{{jobsheet2[0].code}}</span>
                                    <ul class="bill_list" style="display: none;"><li>JP3012481620</li></ul>
                                </div>
                            </div>

                             <p>{{setProcessNumber((jobsheet2[0].Jobsheet.Status.id - 32 ))}}</p>
                             <p class="search_billtext">Process: {{jobsheet2[0].Jobsheet.Status.DESCRIPTION}}</p>
                            <div class="bill_state_has" style="">
                                <div class="bill_state_img_box">
                                    <div class="bill_state_listimg">
                                        <span class="bill_state_img on">  <img v-if="processNumber>=1" src="./cekongkirjnt_files/pick-up.gif">  <img v-if="processNumber<1" src="./cekongkirjnt_files/pick-upBW.png"><span>Process</span> </span>
                                        <div class="disn_line"></div> 
                                        <span class="bill_state_img on"> <img v-if="processNumber>=2" src="./cekongkirjnt_files/on-progress.gif">  <img v-if="processNumber<2" src="./cekongkirjnt_files/on-progressBW.png">  <span>On Process</span> </span>
                                        <div class="disn_line"></div>
                                        <span class="bill_state_img on"> <img  v-if="processNumber>=3" src="./cekongkirjnt_files/on-delivery.gif"> <img  v-if="processNumber<3" src="./cekongkirjnt_files/on-deliveryBW.png">  <span>On Delivery</span> </span>
                                        <div class="disn_line"></div>
                                        <span class="bill_state_img on"> <img v-if="processNumber>=4" src="./cekongkirjnt_files/delivered.gif"> <img v-if="processNumber<4" src="./cekongkirjnt_files/deliveredBW.png"><span>Delivered</span> </span>
                                           
                                    </div>
                                </div>
            
                            
            
                                <div class="tap_box">
                                        <div class="cx_tap">
            <!--                            <h2>Detail</h2>-->
                                        <button class="cx_tap_btn1 on" style="padding-right: 10px;border-radius: 100px;"  v-on:click="showDetail()">Detail</button>
            <!--                            <div class="cx_tap_btn2">Maps</div>-->
                                    </div>
                                </div>





                                <div  v-if="showDetailBool == true">
                                    <div class="bill_state_list">  <!-- timeline history --> 


                            

                                        <div class="bill_state_item" v-for="jobshee in jobsheet2[0].Jobsheet.CheckItem" :key="jobshee.id">
                                            <div class="bill_state_day">
                                            <p>{{separateDateTime(jobshee.Manifest.tgl_kirim)}}</p>
                                            </div>
                                            <div class="bill_state_text">
                                                <p v-if="jobshee.Manifest.CheckStatus">{{jobshee.Manifest.CheckStatus.DESCRIPTION}} </p>
                                                <p v-if="jobshee.Manifest.fkCurrentPoint">City: {{jobshee.Manifest.CurrentPoint.name}}</p>
                                                <p>{{jobshee.Manifest.remark}}</p>

                                                <p v-if="jobshee.Manifest.fkStatus==41">remark out: checkout{{jobshee.Manifest.remarkIn}}</p>
                                                <p v-if="jobshee.Manifest.fkStatus==40">remark in: checkin {{jobshee.Manifest.remarkOut}}</p>

                                            </div>                            
                                        </div>

                                    </div>     <!-- end bill state list -->

                                </div>




                                <div class="googleMap" id="googleMap" style="display: none;">
                                </div>
                            </div>
                            <div class="bill_state_null" style="display: none;">
                                <div class="null_tis">
                                    <img src="./cekongkirjnt_files/nogzcx.jpg" style="width: 100%;">
                                    <div class="nogzcx_tip" style="">No record found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      <!-- end query page box -->
                
            
            </div> 
        </div>
        <div class="bg-city"></div>

    </section>
    <!-- end tracking  menu -->

    

    </div>
</template>


<script>


export default {

    data(){
        return{
            articles:[],
            timelineHistory:[],
            date:'',
            time:'',
            str2:'',
            str1:'',
            processNumber: 1,
            showDetailBool:false

            


        }

    },

    methods:{

            separateDateTime(str1){
                this.date = str1.slice(0, 10);
                this.time = str1.slice(11, 23);
                this.str2 =  this.date + " " +    this.time;
                return this.str2

            },


            setProcessNumber(processNumber2){
                this.processNumber = processNumber2;

            },

            convertStatusToProcessNumber(Status){
                if(Status == 'NEW'){
                    this.processNumber=1    ;
                }
            },

            showDetail(){
                if(this.showDetailBool == false){this.showDetailBool=true}
                else{this.showDetailBool=false}
                                console.log("showDetailBool",this.showDetailBool)

            }
    },

   

    
    props:[
        'jobsheet2'
    ]


}



</script>


<style scoped>
    @import './css/style.css';
    @import './css/About.css';

    @import './css/animate.css';

    @import './css/Blog-Template.css';

    @import './css/bootstrap.min.css';

    @import './css/etlinefont.css';

    @import './css/font-awesome.css';

    @import './css/magnific-popup.css';
    @import './css/nicepage.css';

    @import './css/Post-Template.css';
    

    /* jnt style */

        @import './cekongkirjnt_files/jtcss.css';
        @import './cekongkirjnt_files/boots.css';
        /* @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';

        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
                @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css';
        @import './Trace & Track-J&T Express Indonesia_files/jtcss.css'; */
    /* end jnt style */

        
        /* <meta name="keywords" content="J&amp;T Function Query">
        <meta name="description" content="J&amp;T Express official website. Track your J&amp;T package shipment real-time. Available up to 10 AWBs.">

      

        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/jtcss.css" rel="stylesheet" type="text/css"> <!-- penyebab scroll down hilang -->
        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/boots.css" rel="stylesheet" type="text/css">
        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/swiper.min.css" rel="stylesheet" type="text/css">
        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/animate.min.css" rel="stylesheet" type="text/css">
        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/iconfont.css" rel="stylesheet" type="text/css">
        
        <link href="./Trace &amp; Track-J&amp;T Express Indonesia_files/selectFilter.css" rel="stylesheet" type="text/css"> */




</style>

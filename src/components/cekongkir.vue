<template>
    
     <section  id="about" class="section">

    <div class="cekongkirr">

    <div class="querypage_box">
        <form>
            <div class="querypage_content" style="overflow: initial">
                
                <div class="bjcx_box">
                    <div style="box-shadow: 0 2px 12px 2px #ddd;padding-bottom: 20px;">
                        <div class="bjcx_info_form">

                            <div class="clear_b flex_in min_block">
                                <div class="cx_form_item jjcs_yfcx_select flex_1 on">

                                <p>Kota Pengirim</p>
                                    <select  v-model="kotaPengirim">
                                         <option v-for="kpg in kotaPengirimList" :key="kpg.ID" v-bind:value="kpg.ID">{{kpg.CITY_NAME}}</option>
                        
                                    </select>
                            </div>

                            <div class="cx_form_item jjcs_yfcx_select flex_1 on">

                                <p>Kota kotaPenerima</p>
                                    <select   v-model="kotaPenerima">
                                         <option v-for="kpr in kotaPenerimaList" :key="kpr.ID" v-bind:value="kpr.ID">{{kpr.CITY_NAME}}</option>
                        
                                    </select>

                            </div>

                            <div class="cx_form_item cx_zlinput on">
                                    <p>Weight</p>
                                    <input class="cx_form_inp zl_inp" oninput="xzWeight(value)" id="weight" value="weight" type="number" style="width: 90px;"  v-model="weight" >
                                    <span class="zl_kg">KG</span>
                                    <button type="button" class="query_zl_add col_them" v-on:click="add1()"><img src="./cekongkirjnt_files/add_icon.png"></button>
                                    <button type="button" class="query_zl_reduce col_them" v-on:click="minus1()"><img src="./cekongkirjnt_files/reduce_icon.png"></button>
                                </div>
                            

                            </div>

                    
                            <div class="clear_b">
                                <div class="cx_form_item bj_inp on">

                                    <span class="bj_span"><input type="checkbox" class="bj_check">Insurance</span>
                                    <div>

                                        <span class="idr_bj" style="display: block;">IDR</span>

                                    <input class="cx_form_inp" style="display: inline-block; ::placeholder{color:red; opacity: 1;}" oninput="baojiazh(this.value)" type="tel" placeholder="Please fill in the Item Value" >
                                    </div>

                                </div>
                                <div class="cx_form_item cc_cont_box">
                                    <span class="bjcx_wycc">
                                        <label>
                                            <input type="checkbox" onchange="ccisshow()" class="bj_checkbox" style="margin-right: 5px">Dimension                                        </label>
                                    </span>
                                    <div class="cx_form_item cc_item" style="">
                                        <div class="flex pos_r">
                                            <div class="cc_inp flex_1">
                                                <input id="loogcm" oninput="DWCalculation()" type="number" :value="30" readonly placeholder="Length">
                                                <span class="cc_cm">CM</span>
                                            </div>
                                            <div class="cc_inp flex_1">
                                                <input id="widthcm" oninput="DWCalculation()" type="number" :value="30" readonly placeholder="Width">
                                                <span class="cc_cm">CM</span>
                                            </div>
                                            <div class="cc_inp flex_1">
                                                <input id="heightcm" oninput="DWCalculation()" type="number"  :value="30" readonly  placeholder="Height">
                                                <span class="cc_cm">CM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cc_zl" style="">Dimensional Weight: <span class="Calculation">4.5</span>KG</div>
                            </div>
                        </div>

                        
                        <div class="bj_cont_box" v-if="showHarga ==true">
                            <table class="bj_table" cellpadding="0" cellspacing="0" style="visibility: initial;">
                                <thead>
                                <tr>
                                    <th>Service Type</th>
                                    <th>Weight</th>
                                    <th>Shipping Rates</th>
                                    <th>Insurance</th>
                                    <th>Total Fee</th>
                                </tr>
                                </thead>
                                <tbody><tr><td>EZ(dummy)</td><td>4.5KG(dummy)</td><td>IDR {{biayaOngkir}}</td><td>IDR 20 (dummy)</td><td class="col_them">IDR {{biayaOngkir}}</td></tr></tbody>
                            </table>
                        </div>


                        
              
                
                        <button type="button" class="cx_btn"  v-on:click="oncari()">Search</button>
                    </div>
                </div>
            </div>
            
        </form>

        
    </div>  <!-- end query page box -->
    </div>  <!-- end cekongkirr -->
    

    

    
    <div class="container">
        <div class="row">
       
            
        
        </div>
    </div>

    </section>
</template>




<script>
import axios from 'axios'

    export default {
        
        data(){
            return{
                title:'',
                NomorResi:'',
                datamethods:false,
                cekOngkir:[],
                kotaPengirim:'',
                kotaPenerima:'',
                biayaOngkir:0,
                kotaPengirimList:[],
                kotaPenerimaList:[],
                showHarga : false,
                weight:10


            }
        },

        methods:{
            handleSubmit(){
                // validate password
                this.datamethods=true;
                console.log("form submittd");
                this.oncari();
            },
             async load(){},

            oncari(){

                this.showHarga = false;
                axios.get(`https://hirata.id:3012/api/Cekongkirs?filter={"where": {"and": [{"fkKotaPenerima": "${this.kotaPenerima}"}, {"fkKotaPengirim": "${this.kotaPengirim}"}]}}`)
                 .then((response2)=>{
                    console.log("response cekongkir",response2)
                    this.biayaOngkir = response2.data[0].ongkosKirim;
                                        console.log("ongkir",this.biayaOngkir)

                    if(this.biayaOngkir){
                        this.showHarga = true
                    }
               

                    
                }
                )     
               
            },

            loadCekOngkir(){
                axios.get(`https://hirata.id:3012/api/Cekongkirs?filter={"include":["KotaPengirim","KotaPenerima"]}`)
                .then((response)=>{
                    console.log("response loadcekongkir",response)
                    this.cekOngkir = response.data;  
                               

                     response.data.forEach(co => {
                         this.kotaPenerimaList.push(
                             co.KotaPenerima
                         )
                         console.log("foraeachco")
                     });

                      this.seenPenerima = new Set();
                
                                this.kotaPenerimaList = this.kotaPenerimaList.filter(el => {
                                  this.duplicatePenerima = this.seenPenerima.has(el.ID);
                                  this.seenPenerima.add(el.ID);
                                  return !this.duplicatePenerima;
                                });

                    // this.kotaPenerimaList = [ ...new Set(this.kotaPenerimaList) ]
                   
                        console.log("kpl", this.kotaPenerimaList)

                        //---------------------------------------
                       response.data.forEach(co => {
                         this.kotaPengirimList.push(
                             co.KotaPengirim
                         )
                     });

                            this.seenPengirim=  new Set();
                
                                this.kotaPengirimList = this.kotaPengirimList.filter(el => {
                                  this.duplicatePengirim = this.seenPengirim.has(el.ID);
                                  this.seenPengirim.add(el.ID);
                                  return !this.duplicatePengirim;
                                });

                    // thi


                     console.log("kpg", this.kotaPengirimList)


                }
                )     
               

            },


            add1(){
                this.weight = this.weight + 1;
            },

            minus1(){

                if(this.weight>0){
                   this.weight = this.weight -1 ;
                }
            },


        },

        beforeMount(){
            this.loadCekOngkir()
        },
      
   
    }

</script>


<style scoped>


    @import './css/About.css';

    @import './css/animate.css';

    @import './css/Blog-Template.css';


    @import './css/etlinefont.css';

    @import './css/font-awesome.css';

    @import './css/magnific-popup.css';
    @import './css/nicepage.css';

    @import './css/Post-Template.css';


</style>
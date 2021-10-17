<template>
    <div class="contentcekresi">    

   
            <div class="gzcx_info_form pos_r" style="margin-bottom: 10px;"  @submit.prevent="handleSubmit">

                <form action="">
                    <div class="bill_inp" >
                    <label for="">no resi: </label>
                        <input type="text" id="billcode_list"  placeholder=" Masukkan No Resi"  v-model="NomorResi">
                        <img class="cx_del_img inp_val_list" src="./cekongkirjnt_files/icon-delete-black.png">
                    </div>
                <button>Search</button>
                </form>
            </div>




        <div v-if="datamethods == true">

      

            <contentCekResi2-component :jobsheet2="jobsheetItem"></contentCekResi2-component>

        </div>


        

    </div>
</template>


<script>
import contentCekResi2 from './section.vue'
import axios from 'axios'

    export default {
        
        data(){
            return{
                title:'',
                NomorResi:'',
                datamethods:false,
                jobsheetItem:[]

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



                // axios.get(`https://localhost:3011/api/JobsheetItems?filter={ "where":{ "code": "${this.NomorResi}"},"include" : [{"Jobsheet":[{"CheckItem":{"Manifest":["Driver","Armada","CurrentPoint","NextPoint","CheckStatus"]}},"Status" ]}]}`)
                axios.get(`https://hirata.id:3012/api/JobsheetItems?filter={ "where":{ "code": "${this.NomorResi}"},"include" : [{"Jobsheet":[{"CheckItem":{"Manifest":["Driver","Armada","CurrentPoint","NextPoint","CheckStatus"]}},"Status" ]}]}`)



                 .then((response)=>{
                    console.log("response Jobshet",response.data[0].Jobsheet   );
                    this.jobsheetItem = response.data;
                    console.log("response jobsheetitem", this.jobsheetItem )  
                }
                )     
               
            },

  

        },
        components:{
              'contentCekResi2-component':contentCekResi2,
        },
        async mounted(){
            const response = await axios.get("http://localhost:3000/artcicles")
            this.articles = response.data
         }
    }

</script>



<style scoped>
.contentcekresi{
    margin-top: 10%;
}
.input1{
    border:  black;
    border-style: solid;
    border-width: 1px;

}

.button1{
    background: black;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.bill_inp {
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    background-color: #red;
    box-shadow:  #ddd;
    border:  black;
    padding: 5px ;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    border-color: black
    /* margin-right: 96px; */
}

#billcode_list{
    border-width: 1px;
    border-color: grey;
}


</style>

<template>
    <div>

        <Head />
        <Navi />
        
        <div class="study" id="appointment">
            <div stu-head>
                <h2 class="text-head"><b> BOOK AN APPOINTMENT </b></h2>
                <h3> <b>Need expert advice on complex immigration issues? </b></h3>
                <h3> <b>Confused if immigration is the right choice for you?  </b></h3>
                <h3> <b>Need advice on what is the best way to make your dream of migration to Canada come true?  </b></h3>
                <h3>Book an Appointment by to discuss in details and find the solution for you.</h3>

                <div class="a-pic">
                    <img class="app-pic" src="/images/Westford-2.png" alt="" />
                </div>
                <div class="app-book">
                    <a class="app-b-box" href="/appointment20">
                        <div class="">
                            <b>20 Min – Virtual Consultation – CAD 66</b>
                        </div>
                    </a>
                    <a class="app-b-box" href="/appointment40">
                        <div >
                            <b>40 Min – Virtual Consultation – CAD 125</b>
                        </div>
                    </a>
                    <a class="app-b-box" href="/appointment60">
                        <div >
                            <b>60 Min – Virtual Consultation – CAD 180 </b>                        
                        </div>
                    </a>
                </div>



            </div>
        </div>




        <Footer />
        
    </div>
</template>


<script>

import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Footer from './layouts/Footer.vue'
import PopupOne from './layouts/appointment/PopupOne.vue'


export default {
    name:'Appointment',
    components:{
        Head, Footer, Navi ,
    },
    // setup(){
    //     const popupTrigers = ref({
    //         buttonTriger: false,
    //     })



    //     return{
    //         PopupOne, popupTrigers,
    //     }
    // }
}
</script>
<template>
    <div>

        <Head />
        <Navi />
        <div class="study" id="career">
            <div stu-head>
                <h2 class="text-head">Career</h2>
                <p>Westford Immigration Services is an equal opportunity employer. We offer a dynamic learning environment for young aspiring professionals who loves challenges and enjoy client facing roles. If you feel you are the right fit for our team, send us your resume at westfordbd@gmail.com and our HR team will connect with you if shortlisted. </p>
                <h3 class="text-head">Current vacancies: </h3>
                <ul>
                    Customer Service Executive
                </ul> 

            </div>
        </div>




        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'About',
    components:{
        Head, Footer, Navi
    }
}
</script>
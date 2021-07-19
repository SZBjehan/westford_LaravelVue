<template>
    <div>

        <Head />
        <Navi />
        <Refusal />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Refusal from './layouts/Refusal.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'RefusalAppeals',
    components:{
        Head, Footer, Navi, Refusal
    }
}
</script>
<template>
    <div>

        <Head />
        <Navi />
        <Business />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Business from './layouts/Business.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'StudyPermit',
    components:{
        Head, Footer, Navi, Business,
    }
}
</script>
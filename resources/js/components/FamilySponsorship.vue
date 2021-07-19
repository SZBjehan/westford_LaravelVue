<template>
    <div>

        <Head />
        <Navi />
        <FamilyS />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import FamilyS from './layouts/FamilyS.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'FamilySponsorship',
    components:{
        Head, Footer, Navi, FamilyS
    }
}
</script>
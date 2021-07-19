<template>
    <div>

        <Head />
        <Navi />
        <Study />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Footer from './layouts/Footer.vue'
import Study from './layouts/Study.vue'

export default {
    name:'StudyPermit',
    components:{
        Head, Footer, Navi, Study
    }
}
</script>
<template>
    <div>
        <Head />
        <Navi />
        <Work />
        <Footer />
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Work from './layouts/Work.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'StudyPermit',
    components:{
        Head, Footer, Navi, Work
    }
}
</script>
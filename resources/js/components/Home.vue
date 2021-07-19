<template>
    <div>
        <Head />
        <Navi />
        <Intro />
        <Service />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Intro from './layouts/Intro.vue'
import Service from './layouts/Service.vue'
import Footer from './layouts/Footer.vue'

export default {
    name:'Home',
    components:{
        Head, Intro, Service, Footer, Navi
    }
}
</script>
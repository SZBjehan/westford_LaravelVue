<template>
    <div>

        <Head />
        <Navi />
        <News />
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import News from './layouts/News.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'latestNews',
    components:{
        Head, Footer, Navi, News,
    }
}
</script>